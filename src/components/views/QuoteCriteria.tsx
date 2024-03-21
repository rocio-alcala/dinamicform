import { quoteCriteriaFormFields } from "../../../mock/quoteCriteriaFormFields";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../bits/Button";
import { GrFormNextLink } from "react-icons/gr";
import FieldSwitcher from "../organisms/FieldSwitcher";
import * as yup from "yup";
import {
  getNestedObjectForm,
  getRegisterName,
  toSerializableData
} from "../../utils/formsUtils";
import { submitQuoteCriteria } from "../../store/quoteCriteriaSlice";
import { submitQuote } from "../../store/quoteSlice";
import { Quote } from "../../models/quote";
import { mockQuote } from "../../../mock/quotes";
import {
  Field,
  FieldType,
  InputFieldValue,
  Product,
  SubProduct
} from "../../models/types";
import set from "lodash/set";
import FieldsetRadio from "../bits/FieldsetRadio";

export type InputForm = Record<string,InputFieldValue> 

function QuoteCriteria() {
  function getPreselectedProduct(products: Product[]) {
    return products.find((product) => product.isPreselected === true);
  }

  function getPreselectedSubProduct(subProducts: SubProduct[]) {
    return subProducts.find((subProduct) => subProduct.isPreselected === true);
  }

  function getSelectedProduct(
    products: Product[],
    selectedProductValue: string
  ) {
    return products.find((product) => product.value === selectedProductValue);
  }
  function getSelectedSubProduct(
    products: SubProduct[],
    selectedSubProductValue: string
  ) {
    return products.find(
      (product) => product.value === selectedSubProductValue
    );
  }

  function getBasicDefaultValues(
    products: Product[],
    storeCriteria: InputForm
  ) {
    if (Object.values(storeCriteria).length !== 0) {
      return { ...storeCriteria };
    }
    const preSelectedProduct = getPreselectedProduct(products);
    const preSelectedSubProduct =
      preSelectedProduct &&
      getPreselectedSubProduct(preSelectedProduct.sub_products);

    return {
      ...(preSelectedProduct && {
        product: preSelectedProduct.value
      }),
      ...(preSelectedSubProduct && {
        subproduct: preSelectedSubProduct.value
      })
    };
  }

  function getBasicValidationSchema() {
    const basicValidationSchema: Record<string, yup.AnySchema> = {
      product: yup.string().required(),
      subproduct: yup.string().required()
    };
    return basicValidationSchema;
  }

  function getValidationSchemaObject(
    selectedSubProduct: SubProduct | undefined
  ) {
    const validationSchema = {};
    if (selectedSubProduct) {
      selectedSubProduct.criterias.flat().forEach((field: Field) => {
        /*         if (field.type === FieldType.DATE_RANGE) {
          set(
            validationSchema,
            field.name.replace(".", "-"),
            getValidationForField(field)
          );
        } else { */
        set(
          validationSchema,
          field.name.replace(".", "-"),
          getValidationForField(field)
        );
      });
    }
    return validationSchema;
  }

  function getValidationForField(field: Field) {
    let fieldValidationSchema;
    switch (field.type) {
      case FieldType.TEXT:
        fieldValidationSchema = yup.string();
        if (field.options?.validations?.includes("email")) {
          fieldValidationSchema = fieldValidationSchema.email();
        }
        break;
      case FieldType.COUNTER:
        fieldValidationSchema = yup.number();
        if (field.options?.min) {
          fieldValidationSchema = fieldValidationSchema.min(field.options.min);
        }
        if (field.options?.max) {
          fieldValidationSchema = fieldValidationSchema.max(field.options.max);
        }
    }
    //TO-TO: do the rest of the cases
    if (field.required) {
      fieldValidationSchema = fieldValidationSchema
        ? fieldValidationSchema.required()
        : yup.string().required();
    }
    return fieldValidationSchema;
  }

  function getDefaultValues(
    selectedSubProduct: SubProduct | undefined,
    storeCriteria: InputForm
  ) {
    const defaultValues = {};
    if (Object.values(storeCriteria).length !== 0) {
      return { ...storeCriteria };
    }
    if (selectedSubProduct)
      selectedSubProduct.criterias.flat().forEach((field: Field) => {
        //for each
        if (typeof field.default_value !== "undefined")
          set(defaultValues, field.name.replace(".", "-"), field.default_value); //Object.forEntries
      });
    return defaultValues;
  }

  const { t } = useTranslation("global");
  const products: Product[] = quoteCriteriaFormFields.products;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const storeCriteria = useAppSelector((state) => state.quoteCriteria);

  const {
    register: basicRegister,
    handleSubmit: basicHandleSubmit,
    watch: basicWatch,
    formState: { errors: basicErrors },
    setValue,
    reset: basicFormReset
  } = useForm<InputForm>({
    defaultValues: getBasicDefaultValues(products, storeCriteria),
    resolver: yupResolver(yup.object().shape(getBasicValidationSchema()))
  });

  const selectedProductValue = basicWatch("product") as string;
  const selectedProduct = getSelectedProduct(products, selectedProductValue);
  const selectedSubProductValue = basicWatch("subproduct") as string;
  const selectedSubProduct =
    selectedProduct &&
    getSelectedSubProduct(
      selectedProduct.sub_products,
      selectedSubProductValue
    );

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch,
    reset
  } = useForm<InputForm>({
    values: getDefaultValues(selectedSubProduct, storeCriteria), //adding default values once a Sub Product is selected,
    //so numeric inputs won't initialize to ""
    shouldFocusError: false, // otherwise throws when focusing date input
    // TO-DO: fix on focus problem
    resolver: yupResolver(
      yup.object().shape(getValidationSchemaObject(selectedSubProduct))
    )
  });

  async function masterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let quote: InputForm = {};

    await basicHandleSubmit((basicFormData) => {
      quote = { ...quote, ...basicFormData };
      handleSubmit((formData) => {
        console.log("form plain", formData);
        const serializableFormData = toSerializableData(formData) as InputForm;
        quote = { ...quote, ...serializableFormData };
        console.log("form serilizable", quote);
        dispatch(submitQuoteCriteria(quote));
        console.log("nestedform", getNestedObjectForm(quote));
        new Promise((resolver) => {
          // MOCK API POST
          setIsLoading(true);
          setTimeout(() => resolver(mockQuote), 2000);
        })
          .then((mockQuote) => {
            dispatch(submitQuote(mockQuote as Quote));
            /*   navigate("/quotes"); */
          })
          .finally(() => setIsLoading(false));
      })(event);
    })(event);
  }

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    basicFormReset();
    reset();
    setValue("product", e.target.value);
  }

  return (
    <>
      <div className="font-AXA relative">
        <h1
          className="relative z-10 text-4xl w-full font-extrabold p-20 pb-36 text-center text-slate-50 bg-gray-700"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {t("travel.title")}
        </h1>
        <form
          noValidate
          onSubmit={masterSubmit}
          className="relative z-20 top-[-5rem] flex flex-col mx-16 p-32 border-2 shadow-2xl bg-[#f5f5f5]"
        >
          <div className="flex flex-col mb-7">
            <legend className="text-3xl font-extrabold mb-3 text-[#00005b] leading-10 tracking-wide">
              {t("travel.insurance.title")}
            </legend>
            <div className="mt-2 flex grow flex-wrap">
              <FieldsetRadio
                id="product"
                asButton={true}
                items={products} //TO-DO: mapeo para recibir solo lo que necesito
                errors={basicErrors.product?.message}
                {...basicRegister("product")}
                onChange={handleProductChange}
              ></FieldsetRadio>
            </div>
          </div>
          {selectedProduct ? (
            <div className="flex flex-col mb-7">
              <legend className="text-3xl font-extrabold mb-3 text-[#00005b] leading-10 tracking-wide">
                Subproducto
              </legend>
              <div className="mt-2 flex flex-auto flex-wrap">
                <FieldsetRadio
                  id="subproduct"
                  asButton={true}
                  items={selectedProduct.sub_products}
                  errors={basicErrors.subproduct?.message}
                  {...basicRegister("subproduct")}
                ></FieldsetRadio>
              </div>
            </div>
          ) : null}

          {selectedSubProduct ? (
            <>
              {selectedSubProduct.criterias.map((row, rowIndex) => {
                return (
                  <div className="flex" key={rowIndex}>
                    {/* TO-DO: poner otra key */}
                    {row.map((field) => {
                      if (field.conditional_field) {
                        if (
                          !field.conditional_field.value.includes(
                            watch(field.conditional_field.field)
                          )
                        )
                          return;
                      }
                      const registerName = getRegisterName({
                        inputName: field.name
                      });
                      return (
                        <FieldSwitcher
                          key={field.name}
                          field={field}
                          {...register(registerName)}
                          errors={errors[registerName]?.message}
                          control={control}
                        ></FieldSwitcher>
                      );
                    })}
                  </div>
                );
              })}
            </>
          ) : null}
          <div className="mx-10 mb-10 p-3 place-self-end">
            <Button type="submit" disabled={isLoading} isLoading={isLoading}>
              VER PRESUPUESTO <GrFormNextLink className="text-2xl" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuoteCriteria;
