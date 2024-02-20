// to-do: rename file to formUtils.ts
import { FieldErrors } from "react-hook-form";
import { InputForm } from "../components/organisms/QuoteForm";

export function getRegisterName(
  inputName: string,
  nestedParent?: string,
  travelerIndex?: number
) {
  if (nestedParent) {
    if (travelerIndex || travelerIndex === 0) {
      return `${nestedParent}[${travelerIndex}].${inputName}`;
    } else {
      return `${nestedParent}.${inputName}`;
    }
  } else {
    return inputName;
  }
}

export function getErrors( // to-do: implement named parameters (make parameters into object)
  errors: FieldErrors<InputForm>,
  inputName: string,
  nestedParent?: string,
  travelerIndex?: number
) {
  if (Object.keys(errors).length === 0) return undefined;
  if (errors[inputName]) {
    return errors[inputName]?.message;
  } else {
    if (nestedParent && errors[nestedParent]) {
      if (travelerIndex) {
        return errors[nestedParent][travelerIndex][inputName]?.message;
      } else {
        return errors[nestedParent][inputName]?.message;
      }
    }
  }
}
