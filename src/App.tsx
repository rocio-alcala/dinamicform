import "./App.css";
import appcriteria from "../app-criteria.json";
import { useState } from "react";
import SubProducts from "./SubProducts";
import Steps from "./Steps";
import { useForm } from "react-hook-form";

function getPreselectedCriteria(criterias) {
  return criterias.find((criteria) => criteria.isPreselected === true);
}

function App() {
  const criterias = appcriteria.criterias;
  const [selectedCriteria, setSelectedCriteria] = useState(
    getPreselectedCriteria(criterias)
  );
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    getValues,
    reset
  } = useForm();

  function onSubmit(dataForm) {
    console.log("submited");
    console.log(dataForm);
  }

  return (
    <>
      <form className="formcontainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="criterias">
          {criterias.map((criteria) => (
            <div
              className="buttons"
              onClick={() => setSelectedCriteria(criteria)}
            >
              {criteria.label}
            </div>
          ))}
        </div>
        {selectedCriteria.subProductGroups ? (
          <SubProducts
          register={register}
            subProducts={selectedCriteria.subProductGroups}
          ></SubProducts>
        ) : (
          <Steps register={register} steps={}></Steps>
        )}
        <button className="buttons" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
