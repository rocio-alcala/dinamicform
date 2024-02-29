import { mockConfig } from "../../../mock/config";
import { mockQuotes } from "../../../mock/quotes";
import { useForm } from "react-hook-form";
import {
  CounterValue,
  CurrencyValue,
  DateRangeValue,
  DateValue,
  Product,
  Step,
  StepType,
  SubProduct
} from "../../models/types";
import StepSwitcher from "./StepSwitcher";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Errors from "../bits/Errors";
import { useAppDispatch } from "../../store/typedHooks";
import { submitQuoteCriteria } from "../../store/quoteCriteriaSlice";
import { useNavigate } from "react-router-dom";
import InputList from "../bits/InputList";
import { toSerializableData } from "../../utils/formsHelpers";
import Button from "../bits/Button";
import { submitQuote } from "../../store/quoteSlice";
import { GrFormNextLink } from "react-icons/gr";

export type InputFormValue =
  | string
  | number
  | undefined
  | Date
  | null
  | boolean;
export type InputForm = Record<
  string,
  InputFormValue | Record<string, InputFormValue>
>;

function getPreselectedProduct(products: Product[]) {
  return products.find((product) => product.isPreselected === true);
}

function getPreselectedSubProduct(subPoducts: SubProduct[]) {
  return subPoducts.find((subPoduct) => subPoduct.isPreselected === true);
}

function getSelectedProduct(products: Product[], selectedProductValue: string) {
  return products.find((product) => product.value === selectedProductValue);
}
function getSelectedSubProduct(
  products: SubProduct[],
  selectedSubProductValue: string
) {
  return products.find((product) => product.value === selectedSubProductValue);
}

function getBasicDefaultValues(products: Product[]) {
  const preSelectedProduct = getPreselectedProduct(products);
  const preSelectedSubProduct =
    preSelectedProduct &&
    getPreselectedSubProduct(preSelectedProduct.subProductGroups);

  return {
    ...(preSelectedProduct && {
      [preSelectedProduct.name]: preSelectedProduct.value
    }),
    ...(preSelectedSubProduct && {
      [preSelectedSubProduct.name]: preSelectedSubProduct.value
    })
  };
}

function getDefaultValues(selectedSubProduct: SubProduct | undefined) {
  let defaultValues: InputForm = {};
  if (selectedSubProduct) {
    selectedSubProduct.steps.forEach((step: Step) => {
      switch (step.type) {
        case StepType.COUNTER:
          step.values.forEach(
            (counter: CounterValue) =>
              (defaultValues = {
                ...defaultValues,
                [step.name]: {
                  ...(defaultValues[step.name] as Record<
                    string,
                    InputFormValue
                  >), // we know the counter type is always nested
                  [counter.name]: 0
                }
              })
          );
          break;
        case StepType.CURRENCY:
          step.values.forEach(
            (value) =>
              (defaultValues = {
                ...defaultValues,
                [value.name]: 0
              })
          );
      }
    });
  }
  return defaultValues;
}

function getBasicValidationSchema(
  sampleProduct: Product,
  sampleSubProduct: SubProduct
) {
  const basicValidationSchema: Record<string, yup.AnySchema> = {};

  if (sampleProduct.isRequired) {
    basicValidationSchema[sampleProduct.name] = yup.string().required();
  }

  if (sampleSubProduct.isRequired) {
    basicValidationSchema[sampleSubProduct.name] = yup.string().required();
  }

  return basicValidationSchema;
}

function getInitialValidationSchema(
  selectedSubProduct: SubProduct | undefined
) {
  let initialSchemaObject: Record<string, yup.AnySchema> = {};

  if (selectedSubProduct)
    selectedSubProduct.steps.forEach((step: Step) => {
      switch (step.type) {
        case StepType.LIST:
          if (step.isRequired) {
            initialSchemaObject = {
              ...initialSchemaObject,
              [step.name]: yup.string().required()
            };
          }
          break;
        case StepType.COUNTER:
          if (step.type === StepType.COUNTER) {
            //creating a block to declare the nestedObjectSchema object
            let nestedObjectSchema: Record<string, yup.AnySchema> = {};
            step.values.forEach((value: CounterValue) => {
              let validationValueSchema = yup.number();
              if (value.min) {
                validationValueSchema = validationValueSchema.min(
                  value.min,
                  `minimal value for ${value.name} is ${value.min}`
                );
              }
              if (value.max) {
                validationValueSchema = validationValueSchema.max(
                  value.max,
                  `maximal value for ${value.name} is ${value.max}`
                );
              }
              //counter type has nested counters, for validation we need a nested Object to pass to the step name
              nestedObjectSchema = {
                ...nestedObjectSchema,
                [value.name]: validationValueSchema
              };
            });
            initialSchemaObject = {
              ...initialSchemaObject,
              [step.name]: yup.object().shape(nestedObjectSchema)
            };
          }
          break;
        case StepType.DATE_RANGE:
          step.values.forEach((value: DateRangeValue) => {
            let validationValueSchema = yup.date();
            if (value.isRequired) {
              validationValueSchema = validationValueSchema.required();
            }
            initialSchemaObject = {
              ...initialSchemaObject,
              [value.nameStart]: validationValueSchema,
              [value.nameEnd]: validationValueSchema
            };
          });
          break;
        case StepType.DATE:
          step.values.forEach((value: DateValue) => {
            let validationValueSchema = yup.date();
            if (value.isRequired) {
              validationValueSchema = validationValueSchema.required();
            }
            initialSchemaObject = {
              ...initialSchemaObject,
              [value.name]: validationValueSchema
            };
          });
          break;
        case StepType.CURRENCY:
          step.values.forEach((value: CurrencyValue) => {
            let validationValueSchema = yup.number();
            if (step.isRequired) {
              validationValueSchema = validationValueSchema.required();
            }
            initialSchemaObject = {
              ...initialSchemaObject,
              [value.name]: validationValueSchema
            };
          });
          break;
        default:
          break;
      }
    });
  return initialSchemaObject;
}

function QuoteForm() {
  const products: Product[] = mockConfig.criterias;
  const preSelectedProduct = getPreselectedProduct(products);
  const preSelectedSubProduct =
    preSelectedProduct &&
    getPreselectedSubProduct(preSelectedProduct.subProductGroups);
  const sampleProduct = preSelectedProduct || products[0];
  const sampleSubProduct =
    preSelectedSubProduct || sampleProduct.subProductGroups[0];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register: basicRegister,
    handleSubmit: basicHandleSubmit,
    watch: basicWatch,
    formState: { errors: basicErrors },
    setValue,
    reset: basicFormReset
  } = useForm<InputForm>({
    defaultValues: getBasicDefaultValues(products),
    resolver: yupResolver(
      yup
        .object()
        .shape(getBasicValidationSchema(sampleProduct, sampleSubProduct))
    )
  });

  const selectedProductValue = basicWatch(sampleProduct.name) as string;
  const selectedProduct = getSelectedProduct(products, selectedProductValue);
  const selectedSubProductValue = basicWatch(sampleSubProduct.name) as string;
  const selectedSubProduct =
    selectedProduct &&
    getSelectedSubProduct(
      selectedProduct.subProductGroups,
      selectedSubProductValue
    );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<InputForm>({
    values: getDefaultValues(selectedSubProduct), //adding default values once a Sub Product is selected,
    //so numeric inputs won't initialize to ""
    shouldFocusError: false, // otherwise throws when focusing date input
    // TO-DO: fix on focus problem
    resolver: yupResolver(
      yup.object().shape(getInitialValidationSchema(selectedSubProduct))
    )
  });

  async function masterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let quote: InputForm = {};

    await basicHandleSubmit((basicFormData) => {
      quote = { ...quote, ...basicFormData };

      handleSubmit((formData) => {
        const serializableFormData = toSerializableData(formData);
        quote = { ...quote, ...serializableFormData };
        dispatch(submitQuoteCriteria(quote));
        // POST A API Y MANEJAR LA RESPUESTA GUARDANDO EN STORE CON UN DISPATCH
        dispatch(submitQuote(mockQuotes));
        navigate("/quotes");
      })(event);
    })(event);
  }

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    basicFormReset();
    reset();
    setValue(sampleProduct.name, e.target.value);
  }

  return (
    <div className="font-AXA">
      <h1 className="text-4xl  w-full font-extrabold p-20 pb-36 text-center text-slate-50 bg-gray-700">
        Detalles de tu viaje
      </h1>
      <form
        noValidate
        onSubmit={masterSubmit}
        className="flex flex-col m-16 p-32 border-2 shadow-2xl bg-[#f5f5f5]"
      >
        <div className="flex flex-col mb-7">
          <legend className="text-3xl font-extrabold mb-3 text-[#00005b] leading-10 tracking-wide">
            Producto
          </legend>
          <div className="mt-2 flex grow flex-wrap">
            {products.map((product) => {
              const { ref, name, ...restProps } = basicRegister(product.name);
              return (
                <InputList
                  asButton={true}
                  key={product.value}
                  value={product.value}
                  inputRef={ref}
                  {...restProps}
                  groupName={name}
                  onChange={handleProductChange}
                  label={product.label}
                ></InputList>
              );
            })}
          </div>
          <Errors message={basicErrors[sampleProduct.name]?.message} />
        </div>
        {selectedProduct ? (
          <div className="flex flex-col mb-7">
            <legend className="text-3xl font-extrabold mb-3 text-[#00005b] leading-10 tracking-wide">
              Subproducto
            </legend>
            <div className="mt-2 flex flex-auto flex-wrap">
              {selectedProduct.subProductGroups.map((subProduct) => {
                const { ref, name, ...restProps } = basicRegister(
                  subProduct.name
                );
                return (
                  <InputList
                    asButton={true}
                    key={subProduct.value}
                    value={subProduct.value}
                    inputRef={ref}
                    {...restProps}
                    label={subProduct.label}
                    groupName={name}
                  ></InputList>
                );
              })}
            </div>
            <Errors message={basicErrors[sampleSubProduct.name]?.message} />
          </div>
        ) : null}

        <div>
          {selectedSubProduct
            ? selectedSubProduct.steps.map((step) => (
                <div className="flex flex-col mb-7" key={step.label}>
                  <legend className="text-3xl font-extrabold mb-3 text-[#00005b] leading-10 tracking-wide">
                    {step.label}
                  </legend>
                  <StepSwitcher
                    nestedParent={step.name}
                    step={step}
                    register={register}
                    control={control}
                    errors={errors}
                  />
                </div>
              ))
            : null}
        </div>
        <div className="mx-10 mb-10 p-3 place-self-end">
          <Button type="submit">
            VER PRESUPUESTO <GrFormNextLink className="text-2xl" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default QuoteForm;
