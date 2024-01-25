import { Control, Controller } from "react-hook-form";
import { DateValue, Step } from "../types";
import DatePicker from "react-datepicker";
import { InputForm } from "./QuoteForm";
import { subDays } from "date-fns";

interface DateStepPropsType {
    step: Step;
    control: Control<InputForm, any>;
  }

export default function DateStep({ step, control }: DateStepPropsType){ 
    return (<div className="criteria">
    {step.values.map((date: DateValue, index: number) => (
      <div key={index}>
        <label htmlFor={date.name}>{date.name}</label>
        <Controller
          name={date.name}
          control={control}
          render={({ field }) => (
            <DatePicker
              showIcon
              {...field}
              selected={field.value}
              minDate={subDays(new Date(), 0)}
            />
          )}
        />
      </div>
    ))}
  </div>)}