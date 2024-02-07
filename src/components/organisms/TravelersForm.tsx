import { useAppSelector } from "../../store/typedHooks";
import subscribers from "../../../agent-channel-config.json";
import { Subscribers } from "../../models/subscribers";
import StepSwitcher from "./StepSwitcher";
import { useForm } from "react-hook-form";

export default function TravelersForm() {
  const quoteCriteria = useAppSelector((state) => state.quoteCriteria);
  console.log("@Redux Quote Criterie",quoteCriteria)
  const travelers = quoteCriteria.travelers;
  console.log("@Redux Travelers",travelers)
  const subscribersCriteria: Subscribers = subscribers.subscribers;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(dataForm) { console.log(dataForm)}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label >
        {subscribersCriteria.policyHolderTree.label}
      </label>
      {subscribersCriteria.policyHolderTree.rows.map((row) => {
        return (
          <div key={row.label} className="flex flex-row">
            {row.fields.map((field,index) => (
              <div key={field.label + index}>
                <label htmlFor={field.label}>{field.label}</label>
                <StepSwitcher
                  step={field}
                  control={control}
                  register={register}
                  errors={errors}
                />
              </div>
            ))}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
