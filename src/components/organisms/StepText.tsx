import InputText from "../bits/InputText";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { Field } from "../../models/types";
import { useTranslation } from "react-i18next";

interface StepTextPropsType {
  step: Field;
  register: any;
  errors: any;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function StepText({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepTextPropsType) {
  const { t } = useTranslation("global");
  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      <div className="mr-8 w-[33%] min-w-fit">
        <InputText
          label={t(step.label)}
          disabled={disabled}
          {...register(
            getRegisterName({
              inputName: step.name,
              nestedParent,
              travelerIndex
            })
          )}
        />
        <Errors
          message={getErrors({
            errors,
            inputName: step.name,
            nestedParent,
            travelerIndex
          })}
        />
      </div>
    </div>
  );
}
