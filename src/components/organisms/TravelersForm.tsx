import StepSwitcher from "./StepSwitcher";
import { useForm } from "react-hook-form";
import { travelersConfig } from "../../../mock/travelersConfig";
import { Subscribers } from "../../models/subscribers";
import { InputForm } from "./QuoteForm";

type TravelersFormPropsType = { travelers: Record<string, number> };

export default function TravelersForm({ travelers }: TravelersFormPropsType) {
  const travelersTree: Subscribers = travelersConfig;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<InputForm>();

  function onSubmit(dataForm: InputForm) {
    console.log(dataForm);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 m-5">
        <legend className="text-xl font-bold">
          {travelersTree.policyHolderTree.label}
        </legend>
        {travelersTree.policyHolderTree.rows.map((row, rowIndex) => {
          return (
            <div key={row.label + rowIndex} className="flex flex-row">
              {row.fields.map((field, fieldIndex) => (
                <div className="m-3" key={field.name + fieldIndex}>
                  {field.label ? (
                    <legend className="font-medium">{field.label}</legend>
                  ) : null}
                  <StepSwitcher
                    nestedParent={travelersTree.policyHolderTree.name}
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
                  key={travelersTree.adultTree.label + travelerIndex}
                  className="p-4 m-5"
                >
                  <legend className="text-xl font-bold">
                    {travelersTree.adultTree.label} {travelerIndex + 1}
                  </legend>
                  {travelersTree.adultTree.rows.map((row, rowIndex) => {
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
                              nestedParent={travelersTree.adultTree.name}
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
                  key={travelersTree.childTree.label + travelerIndex}
                  className="p-4 m-5"
                >
                  <legend className="text-xl font-bold">
                    {travelersTree.childTree.label} {travelerIndex + 1}
                  </legend>
                  {travelersTree.childTree.rows.map((row, rowIndex) => {
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
                              nestedParent={travelersTree.childTree.name}
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
                  key={travelersTree.seniorTree.label + travelerIndex}
                  className="p-4 m-5"
                >
                  <legend className="text-xl font-medium">
                    {travelersTree.seniorTree.label} {travelerIndex + 1}
                  </legend>
                  {travelersTree.seniorTree.rows.map((row, rowIndex) => {
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
                              nestedParent={travelersTree.seniorTree.name}
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
