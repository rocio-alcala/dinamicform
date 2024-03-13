import FieldSwitcher from "./FieldSwitcher";
import { FormFields } from "../../models/types";
import { UseFormWatch } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import { TravelersInputForm } from "./TravelersForm";

interface FormPropsType {
  formFields: FormFields;
  register;
  control;
  errors;
  watch: UseFormWatch<InputForm | TravelersInputForm>;
}

export default function Form({
  formFields,
  register,
  control,
  errors,
  watch
}: FormPropsType) {
  return (
    <>
      {" "}
      {/* //TO-DO: cambiar el renderizado de lugar (eliminar componente Form) */}
      {formFields.map((row, index) => {
        return (
          <>
            <div className="flex" key={index}>
              {" "}
              {/* TO-DO: poner otra key */}
              {row.map((field) => {
                if (field.conditional_field) {
                  if (
                    !field.conditional_field.value.includes(
                      watch(field.conditional_field.field)
                    )
                  )
                    return;
                }
                return (
                  <FieldSwitcher //TO-DO: cambiar FieldSwitcher y que recibo directamente el register desestructarado
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                    control={control}
                  ></FieldSwitcher>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}
