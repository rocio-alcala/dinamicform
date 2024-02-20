import subscribers from "../../../agent-channel-config.json";
import { Subscribers } from "../../models/subscribers";
import StepSwitcher from "./StepSwitcher";
import { useForm } from "react-hook-form";

export default function TravelersForm({ travelers }) {
  const subscribersCriteria: Subscribers = subscribers.subscribers;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  function onSubmit(dataForm) {
    console.log(dataForm);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 m-5">
        <legend className="text-xl font-bold">
          {subscribersCriteria.policyHolderTree.label}
        </legend>
        {subscribersCriteria.policyHolderTree.rows.map((row, rowIndex) => {
          return (
            <div key={row.label + rowIndex} className="flex flex-row">
              {row.fields.map((field, fieldIndex) => (
                <div className="m-3" key={field.name + fieldIndex}>
                  {field.label ? (
                    <legend className="font-medium">{field.label}</legend>
                  ) : null}
                  <StepSwitcher
                    nestedParent={subscribersCriteria.policyHolderTree.name}
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
      </div>
      {travelers.adults ? (
        <>
          {Array(travelers.adults)
            .fill(0)
            .map((_, travelerIndex) => {
              return (
                <div
                  key={subscribersCriteria.adultTree.label + travelerIndex}
                  className="p-4 m-5"
                >
                  <legend className="text-xl font-bold">
                    {subscribersCriteria.adultTree.label} {travelerIndex + 1}
                  </legend>
                  {subscribersCriteria.adultTree.rows.map((row, rowIndex) => {
                    return (
                      <div
                        key={row.label + rowIndex + travelerIndex}
                        className="flex flex-row"
                      >
                        {row.fields.map((field, fieldIndex) => (
                          <div
                            className="m-3"
                            key={field.name + fieldIndex + travelerIndex}
                          >
                            {field.label ? (
                              <legend className="font-medium">
                                {field.label}
                              </legend>
                            ) : null}
                            <StepSwitcher
                              travelerIndex={travelerIndex}
                              nestedParent={subscribersCriteria.adultTree.name}
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
                </div>
              );
            })}
        </>
      ) : null}
      {travelers.children ? (
        <>
          {Array(travelers.children)
            .fill(0)
            .map((_, travelerIndex) => {
              return (
                <div
                  key={subscribersCriteria.childTree.label + travelerIndex}
                  className="p-4 m-5"
                >
                  <legend className="text-xl font-bold">
                    {subscribersCriteria.childTree.label} {travelerIndex + 1}
                  </legend>
                  {subscribersCriteria.childTree.rows.map((row, rowIndex) => {
                    return (
                      <div
                        key={row.label + rowIndex + travelerIndex}
                        className="flex flex-row"
                      >
                        {row.fields.map((field, fieldIndex) => (
                          <div
                            className="m-3"
                            key={field.name + fieldIndex + travelerIndex}
                          >
                            {field.label ? (
                              <legend className="font-medium">
                                {field.label}
                              </legend>
                            ) : null}
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
                </div>
              );
            })}
        </>
      ) : null}
      {travelers.seniors ? (
        <>
          {Array(travelers.seniors)
            .fill(0)
            .map((_, travelerIndex) => {
              return (
                <div
                  key={subscribersCriteria.seniorTree.label + travelerIndex}
                  className="p-4 m-5"
                >
                  <legend className="text-xl font-medium">
                    {subscribersCriteria.seniorTree.label} {travelerIndex + 1}
                  </legend>
                  {subscribersCriteria.seniorTree.rows.map((row, rowIndex) => {
                    return (
                      <div
                        key={row.label + rowIndex + travelerIndex}
                        className="flex flex-row"
                      >
                        {row.fields.map((field, fieldIndex) => (
                          <div
                            className="m-3"
                            key={field.name + fieldIndex + travelerIndex}
                          >
                            {field.label ? (
                              <legend className="font-medium">
                                {field.label}
                              </legend>
                            ) : null}
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
                </div>
              );
            })}
        </>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
}
