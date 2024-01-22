export default function Input({ step, register }) {
  switch (step.type) {
    case "list":
      return (
        <div className="criteria">
          {step.values.map((value) => (
            <>
              <label htmlFor={value.label}>{value.label}</label>
              <input
                {...register(step.name)}
                name={step.name}
                id={value.label}
                value={value.value}
                type="radio"
              ></input>
            </>
          ))}
        </div>
      );
    case "counter":
      return (
        <div className="criteria">
          {step.values.map((counter) => (
            <>
              <label htmlFor={counter.name}>{counter.name}</label>
              <input
                {...register(counter.name)}
                id={counter.name}
                type="number"
                className="buttons"
                min={counter.min}
                max={counter.max}
              ></input>
            </>
          ))}
        </div>
      );
    case "date-range":
      return (
        <div className="criteria">
          {step.values.map((dateRange) => (
            <>
              <label htmlFor={dateRange.name}>{dateRange.name}</label>
              <input
                id={dateRange.name}
                type="date"
                className="buttons"
              ></input>
            </>
          ))}
        </div>
      );
    case "date":
      return (
        <div className="criteria">
          {step.values.map((date) => (
            <>
              <label htmlFor={date.name}>{date.name}</label>
              <input
                {...register(date.name)}
                id={date.name}
                type="date"
                className="buttons"
              ></input>
            </>
          ))}
        </div>
      );
    case "currency":
      return <></>;
  }
}
