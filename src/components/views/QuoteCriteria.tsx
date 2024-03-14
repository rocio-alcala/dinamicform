import Errors from "../bits/Errors";
import InputList from "../bits/InputList";
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
import { toSerializableData } from "../../utils/formsUtils";
import { submitQuoteCriteria } from "../../store/quoteCriteriaSlice";
import { submitQuote } from "../../store/quoteSlice";
import { Quote } from "../../models/quote";
import { mockQuote } from "../../../mock/quotes";
import { InputFieldValue, Product, SubProduct } from "../../models/types";

export interface InputForm {
  [index: string]: InputFieldValue | { [index: string]: InputFieldValue };
}

function QuoteCriteria() {
  function getPreselectedProduct(products: Product[]) {
    return products.find((product) => product.isPreselected === true);
  }

  function getPreselectedSubProduct(subPoducts: SubProduct[]) {
    return subPoducts.find((subPoduct) => subPoduct.isPreselected === true);
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
      selectedSubProduct.criterias.map((row) =>
        row.map((field: Field) => {
          if (field.name.includes(".")) {
            set(
              validationSchema,
              field.name.split(".")[0],
              yup
                .object()
                .shape(
                  set(
                    {},
                    field.name.split(".")[1],
                    getValidationForField(field)
                  )
                )
            );
          }
          set(validationSchema, field.name, getValidationForField(field));
        })
      );
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
          fieldValidationSchema = fieldValidationSchema.min(field.options.max);
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
      selectedSubProduct.criterias.map((row: Row) =>
        row.map((field: Field) => {
          if (field.default_value || field.default_value === 0)
            set(defaultValues, field.name, field.default_value);
        })
      );
      console.log("se calcula default values",defaultValues)
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
  } = useForm<TravelersInputForm | InputForm>({
    values: getDefaultValues(selectedSubProduct, storeCriteria), //adding default values once a Sub Product is selected,
    //so numeric inputs won't initialize to ""
    shouldFocusError: false // otherwise throws when focusing date input
    // TO-DO: fix on focus problem
    /*     resolver: yupResolver(
      yup.object().shape(getValidationSchemaObject(selectedSubProduct))
    ) */
  });

  async function masterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let quote: InputForm = {};

    await basicHandleSubmit((basicFormData) => {
      quote = { ...quote, ...basicFormData };
      console.log(basicFormData);
      handleSubmit((formData) => {
        console.log(formData);
        const serializableFormData = toSerializableData(formData) as InputForm;
        quote = { ...quote, ...serializableFormData };
        console.log(quote);
        dispatch(submitQuoteCriteria(quote));
        new Promise((resolver) => {
          // MOCK API POST
          setIsLoading(true);
          setTimeout(() => resolver(mockQuote), 2000);
        })
          .then((mockQuote) => {
            console.log("mock", mockQuote);
            dispatch(submitQuote(mockQuote as Quote));
            navigate("/quotes");
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
              {products.map((product) => {
                return (
                  <InputList
                    asButton={true}
                    key={product.value}
                    value={product.value}
                    groupName={"product"}
                    label={product.label}
                    {...basicRegister("product")}
                    onChange={handleProductChange}
                  ></InputList>
                );
              })}
            </div>
            <Errors message={basicErrors["product"]?.message} />
          </div>
          {selectedProduct ? (
            <div className="flex flex-col mb-7">
              <legend className="text-3xl font-extrabold mb-3 text-[#00005b] leading-10 tracking-wide">
                Subproducto
              </legend>
              <div className="mt-2 flex flex-auto flex-wrap">
                {selectedProduct.sub_products.map((subProduct) => {
                  return (
                    <InputList
                      asButton={true}
                      key={subProduct.value}
                      value={subProduct.value}
                      {...basicRegister("subproduct")}
                      label={subProduct.label}
                      groupName={"subproduct"}
                    ></InputList>
                  );
                })}
              </div>
              <Errors message={basicErrors["subproduct"]?.message} />
            </div>
          ) : null}

          {selectedSubProduct ? (
            <>
              {selectedSubProduct.criterias.map((row, rowIndex) => {
                return (
                  <div className="flex" key={rowIndex}>
                    {" "}
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
                      return (
                        <FieldSwitcher //TO-DO: recibo directamente el register desestructarado
                          key={field.name}
                          field={field}
                          register={register}
                          errors={errors}
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
