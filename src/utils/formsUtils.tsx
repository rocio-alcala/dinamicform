// to-do: rename file to formUtils.ts
import { FieldErrors } from "react-hook-form";
import { InputForm } from "../components/organisms/QuoteForm";
import _ from 'lodash';
import {
  TravelerType,
  TravelersInputForm
} from "../components/organisms/TravelersForm";

interface GetRegisterNameType {
  inputName: string;
  nestedParent?: string;
  travelerIndex?: number;
}

export function getRegisterName({
  inputName,
  nestedParent,
  travelerIndex
}: GetRegisterNameType) {
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

interface GetErrorsType {
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  inputName: string;
  nestedParent?: string;
  travelerIndex?: number;
}

export function getErrors({
  errors,
  inputName,
  nestedParent,
  travelerIndex
}: GetErrorsType) {
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
  const serializableObjectData = _.cloneDeep(objectData)
  function serializableObject(object: any) {
    for (const key in object) {
      if (object[key] instanceof Date) {
        object[key] = object[key].toString();
      }
      if (object[key] instanceof Object) {
        serializableObject(object[key]);
      }
      if (Array.isArray(object[key])) {
        object[key].forEach((object: TravelerType) =>
          serializableObject(object)
        );
      }
    }
  }
  serializableObject(serializableObjectData);
  return serializableObjectData;
}
