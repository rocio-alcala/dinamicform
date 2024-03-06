// to-do: rename file to formUtils.ts
import { FieldErrors } from "react-hook-form";
import { InputForm, InputFormValue } from "../components/organisms/QuoteForm";
import {
  TravelerType,
  TravelersInputForm
} from "../components/organisms/TravelersForm";

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
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>,
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

export function toSerializableData(objectData: InputForm | TravelersInputForm) {
  const serializableObjectData = { ...objectData };
  function serializableObject(
    object:
      | InputForm
      | TravelersInputForm
      | { [index: string]: InputFormValue }
      | TravelerType
  ) {
    for (const key in object) {
      if (object[key] instanceof Date) {
        object[key] = object[key]?.toString();
      }
      if (object[key] instanceof Object) {
        serializableObject(object[key]);
      }
      if (object[key] instanceof Array) {
        object[key].forEach((object: TravelerType) =>
          serializableObject(object)
        );
      }
    }
  }
  serializableObject(serializableObjectData);
  return serializableObjectData;
}
