import { FieldType } from "../src/models/types";

export const adultTravelerFormFields = [
  [
    {
      name: "isPolicyHolder",
      type: FieldType.CHECKBOX,
      label: "travelers.fields.isPolicyHolder.label"
    }
  ],
  [
    {
      label: "travelers.fields.title.label",
      summaryLabel: "travelers.fields.title.summaryLabel",
      type: FieldType.LIST,
      required: true,
      name: "title",
      items: [
        {
          label: "travelers.fields.title.miss.label",
          value: "MISS"
        },
        {
          label: "travelers.fields.title.mrs.label",
          value: "MRS"
        },
        {
          label: "travelers.fields.title.mr.label",
          value: "MR"
        }
      ]
    }
  ],
  [
    {
      label: "travelers.fields.firstName.label",
      summaryLabel: "travelers.fields.firstName.summaryLabel",
      required: true,
      name: "first_name"
    },
    {
      label: "travelers.fields.lastName.label",
      summaryLabel: "travelers.fields.lastName.summaryLabel",
      required: true,
      name: "last_name"
    },
    {
      label: "travelers.fields.dateOfBirth.label",
      summaryLabel: "travelers.fields.dateOfBirth.summaryLabel",
      required: true,
      name: "birth_date",
      type: FieldType.DATE,
      options: { max: 10, min: 10 }
    },
    {
      label: "travelers.fields.DNI/NIE.label",
      summaryLabel: "travelers.fields.DNI/NIE.summaryLabel",
      required: true,
      name: "passport_number",
      options: { validations: ["alfanumeric"] }
    }
  ]
];
