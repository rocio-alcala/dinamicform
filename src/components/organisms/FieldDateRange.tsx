import { Control, Controller, FieldErrors} from "react-hook-form";

import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { useState } from "react";
import { getRegisterName } from "../../utils/formsUtils";
import { useTranslation } from "react-i18next";
import { Field } from "../../models/types";
import { InputForm } from "../views/QuoteCriteria";

interface FieldDateRangePropsType {
  field: Field;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function FieldDateRange({
  field,
  control,
  errors,
  disabled,
  valuesAsColumn
}: FieldDateRangePropsType) {
  const [startDate, setStartDate] = useState<Date>();
  const { t } = useTranslation("global");
  if (field.nameEnd && field.nameStart) {
    const registerStartName = getRegisterName({
      inputName: field.nameStart
    });
    const registerEndName = getRegisterName({
      inputName: field.nameEnd
    });

    return (
      <div className="flex-col">
        <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">
          {t(field.label)}
        </legend>
        <div
          className={`mb-5 mt-2 ${
            valuesAsColumn ? "flex-col" : "flex flex-wrap"
          }`}
        >
          <div className="flex flex-wrap">
            <Controller
              name={registerStartName}
              control={control}
              render={({ field: renderField }) => {
                const { value, ...rest } = renderField;

                // check value
                if (
                  typeof value !== "undefined" &&
                  typeof value !== "string" &&
                  !(value instanceof Date)
                ) {
                  throw new Error(
                    `Value for field of type date is not valid: ${value}`
                  );
                }
                return (
                  <div className="mr-8">
                    <InputDate
                      id={registerStartName}
                      maxDate={addDays(new Date(), field.options.maxStart)}
                      minDate={addDays(new Date(), field.options.minStart)}
                      label={t(field.labelStart)}
                      selectsStart
                      value={
                        value instanceof Date ? value.toDateString() : value
                      }
                      {...rest}
                      onChange={(date) => {
                        setStartDate(date);
                        renderField.onChange(date?.toString());
                      }}
                      showIcon={true}
                      disabled={disabled}
                    />
                   <Errors message={errors[registerStartName]?.message} />
                  </div>
                );
              }}
            />
            <Controller
              name={registerEndName}
              control={control}
              render={({ field: renderField }) => {
                const { value, onChange, ...rest } = renderField;

                // check value
                if (
                  typeof value !== "undefined" &&
                  typeof value !== "string" &&
                  !(value instanceof Date)
                ) {
                  throw new Error(
                    `Value for field of type date is not valid: ${value}`
                  );
                }
                // check startDate
                if (typeof startDate === "boolean") {
                  throw new Error(
                    `Value for start date is not valid: ${startDate}`
                  );
                }

                return (
                  <div className="mr-8">
                    <InputDate
                    id={registerEndName}
                      maxDate={addDays(new Date(), field.options.maxEnd)}
                      minDate={
                        startDate
                          ? addDays(new Date(startDate), field.options.minEnd)
                          : null
                      }
                      disabled={!startDate}
                      label={t(field.labelEnd)}
                      selectsEnd
                      value={
                        value instanceof Date ? value.toDateString() : value
                      }
                      onChange={onChange}
                      {...rest}
                      showIcon={true}
                    />
                    <Errors message={errors[registerEndName]?.message} />
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
