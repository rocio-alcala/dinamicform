import StepSwitcher from "./StepSwitcher";
import StepCheckBox from "./StepCheckBox";
import { useForm } from "react-hook-form";
import { travelersConfig } from "../../../mock/travelersConfig";
import { Subscribers, TravelersTree } from "../../models/subscribers";
import { InputForm, InputFormValue } from "./QuoteForm";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import { submitTravelers } from "../../store/travelersSlice";
import Button from "../bits/Button";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { toSerializableData } from "../../utils/formsUtils";

export type TravelersInputForm = {
  [index: string]: TravelerType | TravelerType[] | undefined;
  policyHolder: TravelerType;
  adults?: TravelerType[];
  children?: TravelerType[];
  seniors?: TravelerType[];
};

export interface TravelerType {
  [index: string]: InputFormValue;
}

type TravelersFormPropsType = { travelersCount: Record<string, number> };

export default function TravelersForm({
  travelersCount
}: TravelersFormPropsType) {
  const travelersTree: Subscribers = travelersConfig;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const storeTravelers = useAppSelector((state) => state.travelers);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    resetField,
    formState: { errors }
  } = useForm<TravelersInputForm | InputForm>({
    defaultValues: storeTravelers
  });

  function onSubmit(dataForm: TravelersInputForm | InputForm) {
    const serializableData = toSerializableData(dataForm);
    dispatch(submitTravelers(serializableData as TravelersInputForm));
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
          if (travelersCount.children)
            setValue(`children[${travelerIndex}].isPolicyHolder`, false);
          if (travelersCount.seniors)
            setValue(`seniors[${travelerIndex}].isPolicyHolder`, false);
          break;
        case "children":
          setValue(`${travelersTreeName}[${travelerIndex}]`, policyHolder);
          setValue(`children[${travelerIndex}].isPolicyHolder`, true);
          if (travelersCount.adults)
            setValue(`adults[${travelerIndex}].isPolicyHolder`, false);
          if (travelersCount.seniors)
            setValue(`seniors[${travelerIndex}].isPolicyHolder`, false);
          break;
        case "seniors":
          setValue(`${travelersTreeName}[${travelerIndex}]`, policyHolder);
          setValue(`seniors[${travelerIndex}].isPolicyHolder`, true);
          if (travelersCount.children)
            setValue(`children[${travelerIndex}].isPolicyHolder`, false);
          if (travelersCount.adults)
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
    <div className="font-AXA relative">
      <h1
        className="relative z-10 text-4xl w-full font-extrabold p-20 pb-36 text-center text-slate-50 bg-gray-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {t("travelers.title")}
      </h1>
      <form
        className="relative z-20 top-[-5rem] flex flex-col mx-16 p-32 border-2 shadow-2xl bg-[#f5f5f5]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-4 m-5">
          <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
            {t("travelers.policyHolder.title")}
          </legend>
          {travelersTree.policyHolderTree.rows.map((row, rowIndex) => {
            return (
              <div key={row.label + rowIndex} className="flex flex-wrap">
                {row.fields.map((field, fieldIndex) => (
                  <div className="m-3" key={field.name + fieldIndex}>
                    {field.label ? (
                      <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                        {t(field.label)}
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

        {travelersCount.adults ? (
          <>
            {Array(travelersCount.adults)
              .fill(0)
              .map((_, travelerIndex) => {
                return (
                  <div
                    key={travelersTree.adultTree.label + travelerIndex}
                    className="p-4 m-5"
                  >
                    <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
                      {t(travelersTree.adultTree.label)} {travelerIndex + 1}
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
                                    <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                                      {t(field.label)}
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
                                <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                                  {t(field.label)}
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
        {travelersCount.children ? (
          <>
            {Array(travelersCount.children)
              .fill(0)
              .map((_, travelerIndex) => {
                return (
                  <div
                    key={travelersTree.childTree.label + travelerIndex}
                    className="p-4 m-5"
                  >
                    <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
                      {t(travelersTree.childTree.label)} {travelerIndex + 1}
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
                                    <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                                      {t(field.label)}
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
                                <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                                  {t(field.label)}
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
        {travelersCount.seniors ? (
          <>
            {Array(travelersCount.seniors)
              .fill(0)
              .map((_, travelerIndex) => {
                return (
                  <div
                    key={travelersTree.seniorTree.label + travelerIndex}
                    className="p-4 m-5"
                  >
                    <legend className="text-3xl font-extrabold mb-10 text-[#00005b] leading-10 tracking-wide">
                      {t(travelersTree.seniorTree.label)} {travelerIndex + 1}
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
                                    <legend className="text-xl font-bold text-gray-900 leading-6 tracking-wide">
                                      {t(field.label)}
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
                                  {t(field.label)}
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
