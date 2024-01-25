import { Control, Controller } from "react-hook-form";
import { DateRangeValue, Step } from "../types";
import { InputForm } from "./QuoteForm";
import DatePicker from "react-datepicker";
import { subDays } from "date-fns";

interface DateRangeStepPropsType {
    step: Step;
    control: Control<InputForm, any>;
  }

export default function DateRangeStep({ step, control }: DateRangeStepPropsType){ 
    return (<div className="criteria">
      {step.values.map((dateRange: DateRangeValue, index: number) => (
        <div key={index}>
          <label htmlFor={dateRange.nameStart}>{dateRange.nameStart}</label>
          <Controller
            name={dateRange.nameStart}
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
          <label htmlFor={dateRange.nameStart}>{dateRange.nameEnd}</label>
          <Controller
            name={dateRange.nameEnd}
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