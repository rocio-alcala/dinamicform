import { FieldType } from "../src/models/types";

export const travelersConfig = {
  policyHolderTree: {
    label: "travelers.policyHolder",
    name: "policyHolder",
    rows: [
      {
        label: "key1",
        fields: [
          {
            label: "travelers.fields.title.label",
            summaryLabel: "travelers.fields.title.summaryLabel",
            type: FieldType.LIST,
            modifier: "inline",
            columns: 3,
            name: "title",
            values: [
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.miss.label",
                value: "MISS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mrs.label",
                value: "MRS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mr.label",
                value: "MR"
              }
            ]
          }
        ]
      },
      {
        label: "key2",
        fields: [
          {
            name: "first_name",
            values: [
              {
                label: "travelers.fields.firstName.label",
                summaryLabel: "travelers.fields.firstName.summaryLabel",
                isRequired: true,
                maxLength: 20,
                name: "first_name"
              }
            ]
          },
          {
            name: "last_name",
            values: [
              {
                label: "travelers.fields.lastName.label",
                summaryLabel: "travelers.fields.lastName.summaryLabel",
                isRequired: true,
                maxLength: 20,
                name: "last_name"
              }
            ]
          }
        ]
      },
      {
        label: "key3",
        fields: [
          {
            type: FieldType.DATE,
            subType: ["adult", "child", "senior"],
            name: "birth_date",
            values: [
              {
                label: "travelers.fields.dateOfBirth.label",
                summaryLabel: "travelers.fields.dateOfBirth.summaryLabel",
                isRequired: true,
                name: "birth_date",
                validations: ["dateOfBirth"],
                type: FieldType.DATE
              }
            ]
          }
        ]
      },
      {
        label: "key4",
        fields: [
          {
            name: "email",
            values: [
              {
                label: "travelers.fields.email.label",
                summaryLabel: "travelers.fields.email.summaryLabel",
                maxLength: 200,
                name: "email",
                isRequired: true,
                validations: ["email"]
              }
            ]
          }
        ]
      },
      {
        label: "key5",
        fields: [
          {
            name: "passport_number",
            values: [
              {
                label: "travelers.fields.DNI/NIE.label",
                summaryLabel: "travelers.fields.DNI/NIE.summaryLabel",
                maxLength: 30,
                isRequired: true,
                name: "passport_number",
                normalize: "simpleAlphaNumericText"
              }
            ]
          }
        ]
      }
    ]
  },
  adultTree: {
    label: "travelers.adult.title",
    summaryLabel: "travelers.adult.summaryLabel",
    name: "adults",
    rows: [
      {
        label: "policyHolder",
        fields: [
          {
            name: "isPolicyHolder",
            type: FieldType.CHECKBOX,
            values: [
              {
                type: FieldType.CHECKBOX,
                label: "travelers.fields.isPolicyHolder.label",
                name: "isPolicyHolder",
                value: true
              }
            ]
          }
        ]
      },
      {
        label: "key2",
        fields: [
          {
            label: "travelers.fields.title.label",
            summaryLabel: "travelers.fields.title.summaryLabel",
            type: FieldType.LIST,
            modifier: "inline",
            columns: 3,
            name: "title",
            values: [
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.miss.label",
                value: "MISS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mrs.label",
                value: "MRS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mr.label",
                value: "MR"
              }
            ]
          }
        ]
      },
      {
        label: "key3",
        fields: [
          {
            name: "first_name",
            values: [
              {
                summaryLabel: "travelers.fields.firstName.summaryLabel",
                label: "travelers.fields.firstName.label",
                isRequired: true,
                maxLength: 20,
                name: "first_name"
              }
            ]
          },
          {
            name: "last_name",
            values: [
              {
                summaryLabel: "travelers.fields.lastName.summaryLabel",
                label: "travelers.fields.lastName.label",
                isRequired: true,
                maxLength: 20,
                name: "last_name"
              }
            ]
          },
          {
            type: FieldType.DATE,
            subType: ["adult"],
            name: "birth_date",
            values: [
              {
                summaryLabel: "travelers.fields.dateOfBirth.summaryLabel",
                label: "travelers.fields.dateOfBirth.label",
                isRequired: true,
                name: "birth_date",
                validations: ["dateOfBirth"],
                type: FieldType.DATE
              }
            ]
          },
          {
            name: "passport_number",
            values: [
              {
                summaryLabel: "travelers.fields.DNI/NIE.summaryLabel",
                label: "travelers.fields.DNI/NIE.label",
                maxLength: 30,
                isRequired: true,
                name: "passport_number",
                normalize: "simpleAlphaNumericText"
              }
            ]
          }
        ]
      }
    ]
  },
  childTree: {
    label: "travelers.child.title",
    summaryLabel: "travelers.adult.summaryLabel",
    name: "children",
    rows: [
      {
        label: "policyHolder",
        fields: [
          {
            name: "isPolicyHolder",
            type: FieldType.CHECKBOX,
            values: [
              {
                type: FieldType.CHECKBOX,
                label: "travelers.fields.isPolicyHolder.label",
                name: "isPolicyHolder",
                value: true
              }
            ]
          }
        ]
      },
      {
        label: "key2",
        fields: [
          {
            label: "travelers.fields.title.label",
            summaryLabel: "travelers.fields.title.summaryLabel",
            type: FieldType.LIST,
            modifier: "inline",
            columns: 3,
            name: "title",
            values: [
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.miss.label",
                value: "MISS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mrs.label",
                value: "MRS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mr.label",
                value: "MR"
              }
            ]
          }
        ]
      },
      {
        label: "key3",
        fields: [
          {
            name: "first_name",
            values: [
              {
                summaryLabel: "travelers.fields.firstName.summaryLabel",
                label: "travelers.fields.firstName.label",
                isRequired: true,
                maxLength: 20,
                name: "first_name"
              }
            ]
          },
          {
            name: "last_name",
            values: [
              {
                summaryLabel: "travelers.fields.lastName.summaryLabel",
                label: "travelers.fields.lastName.label",
                isRequired: true,
                maxLength: 20,
                name: "last_name"
              }
            ]
          },
          {
            type: FieldType.DATE,
            subType: ["child"],
            name: "birth_date",
            values: [
              {
                summaryLabel: "travelers.fields.dateOfBirth.summaryLabel",
                label: "travelers.fields.dateOfBirth.label",
                isRequired: true,
                name: "birth_date",
                validations: ["dateOfBirth"],
                type: FieldType.DATE
              }
            ]
          },
          {
            name: "passport_number",
            values: [
              {
                summaryLabel: "travelers.fields.DNI/NIE.summaryLabel",
                label: "travelers.fields.DNI/NIE.label",
                maxLength: 30,
                isRequired: true,
                name: "passport_number",
                normalize: "simpleAlphaNumericText"
              }
            ]
          }
        ]
      }
    ]
  },
  seniorTree: {
    label: "travelers.senior.title",
    summaryLabel: "travelers.adult.summaryLabel",
    name: "seniors",
    rows: [
      {
        label: "policyHolder",
        fields: [
          {
            name: "isPolicyHolder",
            type: FieldType.CHECKBOX,
            values: [
              {
                type: FieldType.CHECKBOX,
                label: "travelers.fields.isPolicyHolder.label",
                name: "isPolicyHolder",
                value: true
              }
            ]
          }
        ]
      },
      {
        label: "key2",
        fields: [
          {
            label: "travelers.fields.title.label",
            summaryLabel: "travelers.fields.title.summaryLabel",
            type: FieldType.LIST,
            modifier: "inline",
            columns: 3,
            name: "title",
            values: [
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.miss.label",
                value: "MISS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mrs.label",
                value: "MRS"
              },
              {
                name: "title",
                isRequired: true,
                label: "travelers.fields.title.mr.label",
                value: "MR"
              }
            ]
          }
        ]
      },
      {
        label: "key3",
        fields: [
          {
            name: "first_name",
            values: [
              {
                label: "travelers.fields.firstName.label",
                summaryLabel: "travelers.fields.firstName.summaryLabel",
                isRequired: true,
                maxLength: 20,
                name: "first_name"
              }
            ]
          },
          {
            name: "last_name",
            values: [
              {
                label: "travelers.fields.lastName.label",
                summaryLabel: "travelers.fields.lastName.summaryLabel",
                isRequired: true,
                maxLength: 20,
                name: "last_name"
              }
            ]
          },
          {
            type: FieldType.DATE,
            subType: ["senior"],
            name: "birth_date",
            values: [
              {
                label: "travelers.fields.dateOfBirth.label",
                summaryLabel: "travelers.fields.dateOfBirth.summaryLabel",
                isRequired: true,
                name: "birth_date",
                validations: ["dateOfBirth"],
                type: FieldType.DATE
              }
            ]
          },
          {
            name: "passport_number",
            values: [
              {
                label: "travelers.fields.DNI/NIE.label",
                summaryLabel: "travelers.fields.DNI/NIE.summaryLabel",
                maxLength: 30,
                isRequired: true,
                name: "passport_number",
                normalize: "simpleAlphaNumericText"
              }
            ]
          }
        ]
      }
    ]
  }
};
