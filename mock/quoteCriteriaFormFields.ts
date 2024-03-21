import { FieldType } from "../src/models/types";

export const quoteCriteriaFormFields = {
  version: 1,
  additional_questions: [],
  products: [
    {
      isPreselected: false,
      label: "travel.insurance.iberia_1.label",
      value: "iberia_1",
      description: "travel.insurance.iberia_1.description",
      sub_products: [
        {
          isPreselected: false,
          label: "travel.insurance.iberia_1.iberia_1_europe.label",
          value: "iberia_1_europe",
          description: "travel.insurance.iberia_1.iberia_1_europe.description",
          criterias: [
            [
              {
                name: "destination_area",
                label: "travel.product1.travel1.step1.label",
                type: FieldType.LIST,
                required: true,
                options: { asButton: true },
                description: "Select the destination area.",
                items: [
                  {
                    label: "travel.product1.travel1.step1.value1.label",
                    value: "area1"
                  },
                  {
                    label: "travel.product1.travel1.step1.value2.label",
                    value: "area2"
                  },
                  {
                    label: "travel.product1.travel1.step1.value3.label",
                    value: "area3"
                  }
                ]
              }
            ],
            [
              {
                //TO-DO: agregar title a uno para ser mas descriptivo
                name: "travelers.adults",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                options: {
                  min: 1,
                  max: 1000,
                  step: 1
                },
                required: true,
                default_value: 0
              },
              {
                name: "travelers.children",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                required: true,
                default_value: 0
              },
              {
                name: "travelers.seniors",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                required: true,
                default_value: 0
              }
            ],
            [
              {
                label: "travelers.fields.email.label",
                summaryLabel: "travelers.fields.email.summaryLabel",
                name: "email",
                type: FieldType.TEXT,
                required: true,
                description: "esto es una descripcion de ejemplo",
                options: { validations: ["email"] }
              }
            ],
            [
              {
                name: "booking_date",
                label: "travel.product1.travel1.step4.label",
                type: FieldType.DATE,
                required: true,
                options: {
                  max: 0,
                  min: 0
                }
              }
            ],
            [
              {
                name: "travel_cost",
                label: "travel.product1.travel1.step6.label",
                type: FieldType.CURRENCY,
                required: false,
                placeholder: "euro",
                description: "travel.product1.travel1.step6.value.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 5
                },
                default_value: 0
              }
            ],
/*             [
              {
                name: "travel_date",
                label: "travel.product1.travel1.step3.label",
                type: FieldType.DATE_RANGE,
                required: true,
                description: "travel.product1.travel1.step3.desc",
                labelEnd: "travel.product1.travel1.step3.value.labelEnd",
                labelStart: "travel.product1.travel1.step3.value.labelStart",
                nameEnd: "end_date",
                nameStart: "start_date",
                options: {
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 1,
                  minStart: 0
                }
              }
            ] */
          ]
        },
        {
          isPreselected: false,
          label: "travel.insurance.iberia_1.iberia_1_world.label",
          value: "iberia_1_world",
          description: "travel.insurance.iberia_1.iberia_1_world.description",
          criterias: [
            [
              {
                name: "destination_area",
                label: "travel.product1.travel1.step1.label",
                type: FieldType.LIST,
                required: true,
                description: "Select the destination area.",
                items: [
                  {
                    label: "travel.product1.travel1.step1.value1.label",
                    value: "area1",
                    asButton: true,
                    description: "travel.product1.travel1.step1.value1.desc"
                  },
                  {
                    label: "travel.product1.travel1.step1.value2.label",
                    value: "area2",
                    asButton: true
                  },
                  {
                    label: "travel.product1.travel1.step1.value3.label",
                    value: "area3",
                    asButton: true
                  }
                ]
              }
            ],
            [
              {
                name: "travelers.adults",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                options: {
                  min: 1,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              },
              {
                name: "travelers.children",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              },
              {
                name: "travelers.seniors",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              }
            ],
            [
              {
                name: "booking_date",
                label: "travel.product1.travel1.step4.label",
                type: FieldType.DATE,
                required: true,
                description: "Select the shipping date",
                options: {
                  max: 0,
                  min: -30
                }
              }
            ],
            [
              {
                name: "travel_cost",
                label: "travel.product1.travel1.step6.label",
                type: FieldType.CURRENCY,
                required: false,
                placeholder: "euro",
                description: "travel.product1.travel1.step6.value.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 5
                },
                default_value: 0
              }
            ],
            [
              {
                name: "travel_date",
                label: "travel.product1.travel1.step3.label",
                type: FieldType.DATE_RANGE,
                required: true,
                description: "travel.product1.travel1.step3.desc",
                labelEnd: "travel.product1.travel1.step3.value.labelEnd", //TO-DO: cambiar a snake case
                labelStart: "travel.product1.travel1.step3.value.labelStart", //TO-DO: cambiar adentro de options
                nameEnd: "end_date",
                nameStart: "start_date",
                options: {
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 1,
                  minStart: 0
                }
              }
            ]
          ]
        }
      ]
    },
    {
      isPreselected: false,
      label: "travel.insurance.iberia_2.label",
      value: "iberia_2",
      description: "travel.insurance.iberia_2.description",
      sub_products: [
        {
          isPreselected: false,
          label: "travel.insurance.iberia_2.iberia_2_europe.label",
          value: "iberia_2_europe",
          description: "travel.insurance.iberia_2.iberia_2_europe.description",
          criterias: [
            [
              {
                name: "destination_area",
                label: "travel.product1.travel1.step1.label",
                type: FieldType.LIST,
                required: true,
                description: "Select the destination area.",
                items: [
                  {
                    label: "travel.product1.travel1.step1.value1.label",
                    value: "area1",
                    asButton: true,
                    description: "travel.product1.travel1.step1.value1.desc"
                  },
                  {
                    label: "travel.product1.travel1.step1.value2.label",
                    value: "area2",
                    asButton: true
                  },
                  {
                    label: "travel.product1.travel1.step1.value3.label",
                    value: "area3",
                    asButton: true
                  }
                ],
                default_value: "area3"
              }
            ],
            [
              {
                name: "travelers.adults",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                options: {
                  min: 1,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              },
              {
                name: "travelers.children",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              },
              {
                name: "travelers.seniors",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              }
            ],
            [
              {
                name: "booking_date",
                label: "travel.product1.travel1.step4.label",
                type: FieldType.DATE,
                required: true,
                description: "Select the shipping date",
                options: {
                  max: 0,
                  min: -182
                }
              }
            ],
            [
              {
                name: "travel_cost",
                label: "travel.product1.travel1.step6.label",
                type: FieldType.CURRENCY,
                required: false,
                placeholder: "euro",
                description: "travel.product1.travel1.step6.value.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 5
                },
                default_value: 0
              }
            ],
            [
              {
                name: "travel_date",
                label: "travel.product1.travel1.step3.label",
                type: FieldType.DATE_RANGE,
                required: true,
                description: "travel.product1.travel1.step3.desc",
                labelEnd: "travel.product1.travel1.step3.value.labelEnd",
                labelStart: "travel.product1.travel1.step3.value.labelStart",
                nameEnd: "end_date",
                nameStart: "start_date",
                options: {
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 1,
                  minStart: 0
                }
              }
            ]
          ]
        },
        {
          isPreselected: false,
          label: "travel.insurance.iberia_2.iberia_2_world.label",
          value: "iberia_2_world",
          description: "travel.insurance.iberia_2.iberia_2_world.description",
          criterias: [
            [
              {
                name: "destination_area",
                label: "travel.product1.travel1.step1.label",
                type: FieldType.LIST,
                required: true,
                description: "Select the destination area.",
                items: [
                  {
                    label: "travel.product1.travel1.step1.value1.label",
                    value: "area1",
                    asButton: true,
                    description: "travel.product1.travel1.step1.value1.desc"
                  },
                  {
                    label: "travel.product1.travel1.step1.value2.label",
                    value: "area2",
                    asButton: true
                  },
                  {
                    label: "travel.product1.travel1.step1.value3.label",
                    value: "area3",
                    asButton: true
                  }
                ]
              }
            ],
            [
              {
                name: "travelers.adults",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                options: {
                  min: 1,
                  max: 1000,
                  step: 1
                },
                default_value: 10
              },
              {
                name: "travelers.children",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              },
              {
                name: "travelers.seniors",
                label:
                  "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                type: FieldType.COUNTER,
                description:
                  "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 1
                },
                default_value: 0
              }
            ],
            [
              {
                name: "booking_date",
                label: "travel.product1.travel1.step4.label",
                type: FieldType.DATE,
                required: true,
                description: "Select the shipping date",
                options: {
                  max: 0,
                  min: -182
                }
              }
            ],
            [
              {
                name: "travel_cost",
                label: "travel.product1.travel1.step6.label",
                type: FieldType.CURRENCY,
                required: false,
                placeholder: "euro",
                description: "travel.product1.travel1.step6.value.desc",
                options: {
                  min: 0,
                  max: 1000,
                  step: 5
                },
                default_value: 0
              }
            ],
            [
              {
                name: "travel_date",
                label: "travel.product1.travel1.step3.label",
                type: FieldType.DATE_RANGE,
                required: true,
                description: "travel.product1.travel1.step3.desc",
                labelEnd: "travel.product1.travel1.step3.value.labelEnd",
                labelStart: "travel.product1.travel1.step3.value.labelStart",
                nameEnd: "end_date",
                nameStart: "start_date",
                options: {
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 1,
                  minStart: 0
                }
              }
            ]
          ]
        }
      ]
    }
  ]
};
