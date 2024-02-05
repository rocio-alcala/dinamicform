import "../../App.css";
import appCriteria from "../../../app-criteria.json";
import { useForm } from "react-hook-form";
import {
  CounterValue,
  CurrencyValue,
  DateRangeValue,
  DateValue,
  Product,
  Step,
  SubProduct
} from "../../../types";
import StepSwitcher from "./StepSwitcher";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Errors from "../bits/Errors";

type InputFormValue = string | number | undefined | Date;
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
        case "counter":
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
        case "currency":
          step.values.forEach(
            (counter: CurrencyValue) =>
              (defaultValues = {
                ...defaultValues,
                [counter.name]: 0
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
        case "list": // to-do: create Enum
          if (step.isRequired) {
            initialSchemaObject = {
              ...initialSchemaObject,
              [step.name]: yup.string().required()
            };
          }
          break;
        case "counter":
          if (step.type === "counter") { //creating a block to declare the nestedObjectSchema object
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
        case "date-range":
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
        case "date":
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
        case "currency":
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
  const products = appCriteria.criterias;
  const preSelectedProduct = getPreselectedProduct(products);
  const preSelectedSubProduct =
    preSelectedProduct &&
    getPreselectedSubProduct(preSelectedProduct.subProductGroups);
  const sampleProduct = preSelectedProduct || products[0];
  const sampleSubProduct =
    preSelectedSubProduct || sampleProduct.subProductGroups[0];

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

  function masterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    basicHandleSubmit((data) => {
      // Your logic for handleSubmit1
      console.log("Handling submit for form 1:", data);
    })(event);

    handleSubmit((data) => {
      // Your logic for handleSubmit2
      console.log("Handling submit for form 2:", data);
    })(event);
  }

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    basicFormReset();
    reset();
    setValue(sampleProduct.name, e.target.value);
  }

  return (
    <>
      <form noValidate className="formcontainer" onSubmit={masterSubmit}>
        <label className="steplabel">travel.insurance.product.label</label>
        <div className="criterias">
          {products.map((product, index) => (
            <label key={index} htmlFor={product.label}>
              {product.label}
              <input
                id={product.label}
                type="radio"
                className="buttons"
                value={product.value}
                {...basicRegister(product.name)}
                onChange={handleProductChange}
              ></input>
            </label>
          ))}
          <Errors message={basicErrors[products[0].name]?.message} />
        </div>
        {selectedProduct ? (
          <div className="criterias">
            <label className="steplabel">
              travel.insurance.subproduct.label
            </label>
            {selectedProduct.subProductGroups.map((subProduct) => (
              <label key={subProduct.value} htmlFor={subProduct.label}>
                {subProduct.label}
                <input
                  id={subProduct.label}
                  className="buttons"
                  type="radio"
                  {...basicRegister(subProduct.name)}
                  value={subProduct.value}
                />
              </label>
            ))}
            <Errors
              message={
                basicErrors[selectedProduct.subProductGroups[0].name]?.message
              }
            />
          </div>
        ) : null}

        <div className="step">
          {selectedSubProduct
            ? selectedSubProduct.steps.map((step) => (
                <div key={step.label} className="step">
                  <label className="steplabel">{step.name}</label>
                  <StepSwitcher
                    step={step}
                    register={register}
                    control={control}
                    errors={errors}
                  />
                </div>
              ))
            : null}
        </div>
        <button className="buttons" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default QuoteForm;
