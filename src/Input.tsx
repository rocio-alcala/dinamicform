import { subDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

export default function Input({ step, register, control }) {
  switch (step.type) {
    case "list":
      return (
        <div className="criteria">
          {step.values.map((value, index) => (
            <div key={index}>
              <label htmlFor={value.label}>{value.label}</label>
              <input
                {...register(step.name)}
                id={value.label}
                value={value.value}
                type="radio"
              ></input>
            </div>
          ))}
        </div>
      );
    case "counter":
      return (
        <div className="criteria">
          {step.values.map((counter, index) => (
            <div key={index}>
              <label htmlFor={counter.name}>{counter.name}</label>
              <input
                {...register(counter.name)}
                id={counter.name}
                type="number"
                className="buttons"
                min={counter.min}
                max={counter.max}
              ></input>
            </div>
          ))}
        </div>
      );
    case "date-range":
      return (
        <div className="criteria">
          {step.values.map((dateRange, index) => (
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
        </div>
      );
    case "date":
      return (
        <div className="criteria">
          {step.values.map((date, index) => (
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
        </div>
      );
    default:
      return (
        <div className="criteria">
          {step.values.map((value, index) => (
            <div key={index}>
              <label htmlFor={value.name}>{value.name}</label>
              <input
                {...register(value.name)}
                id={value.label}
                value={value.value}
                type="text"
              ></input>
            </div>
          ))}
        </div>
      );
  }
}
