import "./App.css";
import appCriteria from "../app-criteria.json";
import { useForm } from "react-hook-form";
import Input from "./Input";

function getPreselectedProduct(products) {
  return products.find((product) => product.isPreselected === true);
}

function getSelectedProduct(products, selectedProductValue) {
  return products.find((product) => product.value === selectedProductValue);
}

function App() {
  const products = appCriteria.criterias;
  const preSelectedProduct = getPreselectedProduct(products);
  const preSelectedSubProduct = getPreselectedProduct(
    preSelectedProduct.subProductGroups
  );

  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      [preSelectedProduct.name]: preSelectedProduct.value,
      [preSelectedSubProduct.name]: preSelectedSubProduct.value
    }
  });

  const selectedProductValue = watch(preSelectedProduct.name);
  const selectedProduct = getSelectedProduct(products, selectedProductValue);
  const selectedSubProductValue = watch(preSelectedSubProduct.name);
  const selectedSubProduct = getSelectedProduct(
    selectedProduct.subProductGroups,
    selectedSubProductValue
  );

  function onSubmit(dataForm) {
    console.log(dataForm);
  }

  return (
    <>
      <form className="formcontainer" onSubmit={handleSubmit(onSubmit)}>
        <label className="steplabel">travel.insurance.product.label</label>
        <div className="criterias">
          {products.map((product, index) => (
            <div key={index}>
              <label htmlFor={product.label}>{product.label}</label>
              <input
                id={product.label}
                type="radio"
                className="buttons"
                value={product.value}
                {...register(product.name)}
              ></input>
            </div>
          ))}
        </div>
        <label className="steplabel">travel.insurance.subproduct.label</label>
        <div className="criterias">
          {selectedProduct.subProductGroups.map((subProduct, index) => (
            <div key={index}>
              <label htmlFor={subProduct.label}>{subProduct.label}</label>
              <input
                id={subProduct.label}
                className="buttons"
                type="radio"
                {...register(subProduct.name)}
                value={subProduct.value}
              />
            </div>
          ))}
        </div>
        <label className="steplabel">travel.insurance.steps.label</label>
        <div className="criterias">
          {selectedSubProduct.steps.map((step, index) => (
            <div key={index} className="step">
              <label className="steplabel">{step.name}</label>
              <Input step={step} register={register} control={control}></Input>
            </div>
          ))}
        </div>
        <button className="buttons" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
