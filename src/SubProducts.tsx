import { useState } from "react";
import Steps from "./Steps";

function getPreselectedSubProduct(subProducts) {
  return subProducts.find((subProduct) => subProduct.isPreselected === true);
}

export default function SubProducts({ subProducts, register }) {
  const [selectedSubProduct, setSelectedSubProduct] = useState(
    getPreselectedSubProduct(subProducts)
  );
  return (
    <>
      <div className="criterias">
        {subProducts.map((subProduct) => (
          <div
            className="buttons"
            onClick={() => setSelectedSubProduct(subProduct)}
          >
            {subProduct.label}
          </div>
        ))}
      </div>
      {selectedSubProduct ? (
        selectedSubProduct.subProductGroups ? (
          <SubProducts
            subProducts={selectedSubProduct.subProductGroups}
          ></SubProducts>
        ) : (
          <Steps steps={selectedSubProduct.steps} register={register}></Steps>
        )
      ) : null}
    </>
  );
}
