import StepSwitcher from "./StepSwitcher";
import StepCheckBox from "./StepCheckBox";
import { useForm } from "react-hook-form";
import { travelersConfig } from "../../../mock/travelersConfig";
import { Subscribers, TravelersTree } from "../../models/subscribers";
import { InputForm } from "./QuoteForm";
import { useAppDispatch } from "../../store/typedHooks";
import { submitTravelers } from "../../store/travelersSlice";
import Button from "../bits/Button";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

type TravelersFormPropsType = { travelers: Record<string, number> };

export default function TravelersForm({ travelers }: TravelersFormPropsType) {
  const travelersTree: Subscribers = travelersConfig;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    resetField,
    formState: { errors }
  } = useForm<InputForm>();

  function onSubmit(dataForm: InputForm) {
    // TO-DO: serializar data
    dispatch(submitTravelers(dataForm));
    navigate("/summary");
  }

  const policyHolder = watch(travelersTree.policyHolderTree.name);

  function handleCheckBoxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    travelersTreeName: TravelersTree["name"],
    travelerIndex: number
  ) {
    if (event.target.checked) {
      switch (travelersTreeName) {
        case "adults":
          setValue(`${travelersTreeName}[${travelerIndex}]`, policyHolder);
          setValue(`adults[${travelerIndex}].isPolicyHolder`, true);
          if (travelers.children)
            setValue(`children[${travelerIndex}].isPolicyHolder`, false);
          if (travelers.seniors)
            setValue(`seniors[${travelerIndex}].isPolicyHolder`, false);
          break;
        case "children":
          setValue(`${travelersTreeName}[${travelerIndex}]`, policyHolder);
          setValue(`children[${travelerIndex}].isPolicyHolder`, true);
          if (travelers.adults)
            setValue(`adults[${travelerIndex}].isPolicyHolder`, false);
          if (travelers.seniors)
            setValue(`seniors[${travelerIndex}].isPolicyHolder`, false);
          break;
        case "seniors":
          setValue(`${travelersTreeName}[${travelerIndex}]`, policyHolder);
          setValue(`seniors[${travelerIndex}].isPolicyHolder`, true);
          if (travelers.children)
            setValue(`children[${travelerIndex}].isPolicyHolder`, false);
          if (travelers.adults)
            setValue(`adults[${travelerIndex}].isPolicyHolder`, false);
          break;
      }

      // TO-DO: is hard coded, better way??
      // ??change with setValue does not shot an onChange and reset values??
    } else {
      resetField(`${travelersTreeName}[${travelerIndex}]`, {
        defaultValue: {
          first_name: "",
          last_name: "",
          email: "",
          passport_number: "",
          birth_date: undefined,
          title: null,
          isPolicyHolder: false
        } //hardcoded bc dont have default values in form to reset to
        // TO-DO: default values in useForm
      });
    }
  }

  return (
    <div className="font-AXA">
      <h1 className="text-4xl font-extrabold p-20 text-center text-slate-50 bg-gray-700 ">
        Detalles de los viajeros
      </h1>
      <form
        className="flex flex-col m-16 p-10 border-2 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] bg-[#f5f5f5]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-4 m-5">
          <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
            Datos de {travelersTree.policyHolderTree.label}
          </legend>
          {travelersTree.policyHolderTree.rows.map((row, rowIndex) => {
            return (
              <div key={row.label + rowIndex} className="flex flex-wrap">
                {row.fields.map((field, fieldIndex) => (
                  <div className="m-3" key={field.name + fieldIndex}>
                    {field.label ? (
                      <legend className="text-xl font-bold text-[#333] leading-6 tracking-wide">
                        {field.label}
                      </legend>
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
                    <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
                      Datos de {travelersTree.adultTree.label}{" "}
                      {travelerIndex + 1}
                    </legend>
                    {travelersTree.adultTree.rows.map((row, rowIndex) => {
                      if (row.label === "policyHolder") {
                        if (travelerIndex === 0) {
                          return (
                            <div
                              key={row.label + rowIndex + travelerIndex}
                              className="flex flex-row  flex-wrap"
                            >
                              {row.fields.map((field, fieldIndex) => (
                                <div
                                  className="m-3"
                                  key={field.name + fieldIndex + travelerIndex}
                                >
                                  {field.label ? (
                                    <legend className="text-xl font-bold text-[#333] leading-6 tracking-wide">
                                      {field.label}
                                    </legend>
                                  ) : null}
                                  <StepCheckBox
                                    travelerIndex={travelerIndex}
                                    nestedParent={travelersTree.adultTree.name}
                                    step={field}
                                    register={register}
                                    errors={errors}
                                    onChange={(e) =>
                                      handleCheckBoxChange(
                                        e,
                                        travelersTree.adultTree.name,
                                        travelerIndex
                                      )
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                          );
                        } else {
                          return null;
                        }
                      }

                      return (
                        <div
                          key={row.label + rowIndex + travelerIndex}
                          className="flex flex-row flex-wrap"
                        >
                          {row.fields.map((field, fieldIndex) => (
                            <div
                              className="m-3"
                              key={field.name + fieldIndex + travelerIndex}
                            >
                              {field.label ? (
                                <legend className="text-xl font-bold text-[#333] leading-6 tracking-wide">
                                  {field.label}
                                </legend>
                              ) : null}
                              <StepSwitcher
                                disabled={
                                  travelerIndex === 0
                                    ? watch(
                                        `${travelersTree.adultTree.name}[${travelerIndex}].isPolicyHolder`
                                      )
                                      ? true
                                      : false
                                    : false
                                }
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
                    <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
                      Datos de {travelersTree.childTree.label}{" "}
                      {travelerIndex + 1}
                    </legend>
                    {travelersTree.childTree.rows.map((row, rowIndex) => {
                      if (row.label === "policyHolder") {
                        if (travelerIndex === 0) {
                          return (
                            <div
                              key={row.label + rowIndex + travelerIndex}
                              className="flex flex-row flex-wrap"
                            >
                              {row.fields.map((field, fieldIndex) => (
                                <div
                                  className="m-3"
                                  key={field.name + fieldIndex + travelerIndex}
                                >
                                  {field.label ? (
                                    <legend className="text-xl font-bold text-[#333] leading-6 tracking-wide">
                                      {field.label}
                                    </legend>
                                  ) : null}
                                  <StepCheckBox
                                    travelerIndex={travelerIndex}
                                    nestedParent={travelersTree.childTree.name}
                                    step={field}
                                    register={register}
                                    errors={errors}
                                    onChange={(e) =>
                                      handleCheckBoxChange(
                                        e,
                                        travelersTree.childTree.name,
                                        travelerIndex
                                      )
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                          );
                        } else {
                          return null;
                        }
                      }

                      return (
                        <div
                          key={row.label + rowIndex + travelerIndex}
                          className="flex flex-row flex-wrap"
                        >
                          {row.fields.map((field, fieldIndex) => (
                            <div
                              className="m-3"
                              key={field.name + fieldIndex + travelerIndex}
                            >
                              {field.label ? (
                                <legend className="text-xl font-bold text-[#333] leading-6 tracking-wide">
                                  {field.label}
                                </legend>
                              ) : null}
                              <StepSwitcher
                                disabled={
                                  travelerIndex === 0
                                    ? watch(
                                        `${travelersTree.childTree.name}[${travelerIndex}].isPolicyHolder`
                                      )
                                      ? true
                                      : false
                                    : false
                                }
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
                    <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
                      Datos de {travelersTree.seniorTree.label}{" "}
                      {travelerIndex + 1}
                    </legend>
                    {travelersTree.seniorTree.rows.map((row, rowIndex) => {
                      if (row.label === "policyHolder") {
                        if (travelerIndex === 0) {
                          return (
                            <div
                              key={row.label + rowIndex + travelerIndex}
                              className="flex flex-row flex-wrap"
                            >
                              {row.fields.map((field, fieldIndex) => (
                                <div
                                  className="m-3"
                                  key={field.name + fieldIndex + travelerIndex}
                                >
                                  {field.label ? (
                                    <legend className="text-xl font-bold text-[#333] leading-6 tracking-wide">
                                      {field.label}
                                    </legend>
                                  ) : null}
                                  <StepCheckBox
                                    travelerIndex={travelerIndex}
                                    nestedParent={travelersTree.seniorTree.name}
                                    step={field}
                                    register={register}
                                    errors={errors}
                                    onChange={(e) =>
                                      handleCheckBoxChange(
                                        e,
                                        travelersTree.seniorTree.name,
                                        travelerIndex
                                      )
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                          );
                        } else {
                          return null;
                        }
                      }

                      return (
                        <div
                          key={row.label + rowIndex + travelerIndex}
                          className="flex flex-row flex-wrap items-center"
                        >
                          {row.fields.map((field, fieldIndex) => (
                            <div
                              className="m-3 h-fit"
                              key={field.name + fieldIndex + travelerIndex}
                            >
                              {field.label ? (
                                <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                                  {field.label}
                                </legend>
                              ) : null}
                              <StepSwitcher
                                disabled={
                                  travelerIndex === 0
                                    ? watch(
                                        `${travelersTree.seniorTree.name}[${travelerIndex}].isPolicyHolder`
                                      )
                                      ? true
                                      : false
                                    : false
                                }
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
        <div className="mx-10 mb-10 p-3 place-self-end">
          <Button type="submit">
            <p>CONTINUAR</p> <GrFormNextLink className="text-2xl" />
          </Button>
        </div>
      </form>
    </div>
  );
}
