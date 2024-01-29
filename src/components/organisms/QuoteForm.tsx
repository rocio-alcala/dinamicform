import "../../App.css";
import appCriteria from "../../../app-criteria.json";
import { useForm } from "react-hook-form";
import { Product, SubProduct } from "../../../types";
import StepSwitcher from "./StepSwitcher";
import * as yup from "yup";

type InputFormValue = string | number | undefined | Date;
export type InputForm = Record<
  string,
  InputFormValue | Record<string, InputFormValue>
>;

function getPreselectedProduct(products: Product[]) {
  return products.find((product) => product.isPreselected === true);
}

function getPreselectedSubProduct(products: SubProduct[]) {
  return products.find((product) => product.isPreselected === true);
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

function getDefaultValues(products: Product[]) {
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

function QuoteForm() {
  const products = appCriteria.criterias;
  const preSelectedProduct = getPreselectedProduct(products);
  const preSelectedSubProduct =
    preSelectedProduct &&
    getPreselectedSubProduct(preSelectedProduct.subProductGroups);

  const { register, handleSubmit, control, watch } = useForm<InputForm>({
    defaultValues: getDefaultValues(products)
  });

  const selectedProductValue = watch(
    preSelectedProduct?.name || "product"
  ) as string;
  const selectedProduct = getSelectedProduct(products, selectedProductValue);
  const selectedSubProductValue = watch(
    preSelectedSubProduct?.name || "subproduct"
  ) as string;
  const selectedSubProduct =
    selectedProduct &&
    getSelectedSubProduct(
      selectedProduct.subProductGroups,
      selectedSubProductValue
    );

  function onSubmit(dataForm: InputForm) {
    console.log(dataForm);
  }

  return (
    <>
      <form className="formcontainer" onSubmit={handleSubmit(onSubmit)}>
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
                {...register(product.name)}
              ></input>
            </label>
          ))}
        </div>
        {selectedProduct ? (
          <div className="criterias">
            <label className="steplabel">
              travel.insurance.subproduct.label
            </label>
            {selectedProduct.subProductGroups.map((subProduct, index) => (
              <label key={index} htmlFor={subProduct.label}>
                {subProduct.label}
                <input
                  id={subProduct.label}
                  className="buttons"
                  type="radio"
                  {...register(subProduct.name)}
                  value={subProduct.value}
                />
              </label>
            ))}
          </div>
        ) : null}
        <div className="step">
          {selectedSubProduct
            ? selectedSubProduct.steps.map((step, index) => (
                <div key={index} className="step">
                  <label className="steplabel">{step.name}</label>
                  <StepSwitcher
                    step={step}
                    register={register}
                    control={control}
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
