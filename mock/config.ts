import { StepType } from "../src/models/types";

export const mockConfig = {
  version: 3,
  additional_questions: [],
  criterias: [
    {
      isPreselected: true,
      isRequired: true,
      label: "travel.insurance.product1.label",
      name: "product",
      summaryLabel: "travel.insurance.product.summaryLabel",
      subProductGroups: [
        {
          isPreselected: false,
          isRequired: true,
          label: "travel.product1.travel1.label",
          name: "subproduct",
          summaryLabel: "travel.product.travel.summaryLabel",
          steps: [
            {
              isRequired: false,
              label: "travel.product1.travel1.step1.label",
              quickLabel: "travel.product1.travel1.step1.quickLabel",
              summaryLabel: "travel.product1.travel1.step1.summaryLabel",
              type: StepType.LIST,
              values: [
                {
                  asButton: true,
                  name: "destination_area",
                  desc: "travel.product1.travel1.step1.value1.desc",
                  label: "travel.product1.travel1.step1.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value1.summaryLabel",
                  value: "2"
                },
                {
                  asButton: true,
                  name: "destination_area",
                  label: "travel.product1.travel1.step1.value2.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value2.summaryLabel",
                  value: "5"
                },
                {
                  asButton: true,
                  name: "destination_area",
                  label: "travel.product1.travel1.step1.value3.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value3.summaryLabel",
                  value: "6"
                }
              ]
            },
            {
              name: "travelers",
              type: StepType.COUNTER,
              label: "travel.product1.travel1.step2.value3.subQuoting.label",
              summaryLabel:
                "travel.product1.travel1.step2.value3.subQuoting.summaryLabel",
              quickLabel:
                "travel.product1.travel1.step2.value3.subQuoting.quickLabel",
              desc: "travel.product1.travel1.step2.value3.subQuoting.desc",
              values: [
                {
                  name: "adults",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value1.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                  min: 1,
                  max: 10
                },
                {
                  name: "children",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value2.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                  min: 0,
                  max: 10
                },
                {
                  name: "seniors",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value3.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value3.desc",
                  min: 0,
                  max: 10
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step3.label",
              quickLabel: "travel.product1.travel1.step3.quickLabel",
              summaryLabel: "travel.product1.travel1.step3.summaryLabel",
              desc: "travel.product1.travel1.step3.desc",
              type: StepType.DATE_RANGE,
              values: [
                {
                  isRequired: true,
                  labelEnd: "travel.product1.travel1.step3.value.labelEnd",
                  summaryLabelEnd:
                    "travel.product1.travel1.step3.value.summaryLabelEnd",
                  labelStart: "travel.product1.travel1.step3.value.labelStart",
                  summaryLabelStart:
                    "travel.product1.travel1.step3.value.summaryLabelStart",
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 1,
                  minStart: 0,
                  nameEnd: "end_date",
                  nameStart: "start_date"
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step4.label",
              quickLabel: "travel.product1.travel1.step4.quickLabel",
              summaryLabel: "travel.product1.travel1.step4.summaryLabel",
              type: StepType.DATE,
              values: [
                {
                  isRequired: true,
                  label: "travel.product1.travel1.step4.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step4.value1.summaryLabel",
                  max: 0,
                  min: -182,
                  nameStart: "bookingDate",
                  name: "booking_date",
                  type: "date"
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step6.label",
              quickLabel: "travel.product1.travel1.step6.quickLabel",
              summaryLabel: "travel.product1.travel1.step6.summaryLabel",
              type: StepType.CURRENCY,
              values: [
                {
                  isRequired: true,
                  currency: "euro",
                  desc: "travel.product1.travel1.step6.value.desc",
                  max: 50000,
                  min: 1,
                  name: "cost",
                  type: "currency"
                }
              ]
            }
          ],
          value: "sub grupo 1",
          valueSummaryLabel: "travel.product1.travel1.value.summaryLabel"
        },
        {
          isPreselected: false,
          isRequired: true,
          label: "travel.product1.travel2.label",
          name: "subproduct",
          summaryLabel: "travel.product.travel.summaryLabel",
          steps: [
            {
              isRequired: false,
              label: "travel.product1.travel1.step1.label",
              quickLabel: "travel.product1.travel1.step1.quickLabel",
              summaryLabel: "travel.product1.travel1.step1.summaryLabel",
              type: StepType.LIST,
              values: [
                {
                  name: "destination_area",
                  asButton: true,
                  desc: "travel.product1.travel1.step1.value1.desc",
                  label: "travel.product1.travel1.step1.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value1.summaryLabel",
                  value: "2"
                },
                {
                  name: "destination_area",
                  asButton: true,
                  label: "travel.product1.travel1.step1.value2.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value2.summaryLabel",
                  value: "5"
                },
                {
                  name: "destination_area",
                  asButton: true,
                  label: "travel.product1.travel1.step1.value3.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value3.summaryLabel",
                  value: "6"
                }
              ]
            },
            {
              name: "travelers",
              type: StepType.COUNTER,
              label: "travel.product1.travel1.step2.value3.subQuoting.label",
              summaryLabel:
                "travel.product1.travel1.step2.value3.subQuoting.summaryLabel",
              quickLabel:
                "travel.product1.travel1.step2.value3.subQuoting.quickLabel",
              desc: "travel.product1.travel1.step2.value3.subQuoting.desc",
              values: [
                {
                  name: "adults",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value1.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                  min: 0,
                  max: 10
                },
                {
                  name: "children",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value2.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                  min: 0,
                  max: 10
                },
                {
                  name: "seniors",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value3.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value3.desc",
                  min: 0,
                  max: 10
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step3.label",
              quickLabel: "travel.product1.travel1.step3.quickLabel",
              summaryLabel: "travel.product1.travel1.step3.summaryLabel",
              desc: "travel.product1.travel1.step3.desc",
              type: StepType.DATE_RANGE,
              values: [
                {
                  isRequired: true,
                  labelEnd: "travel.product1.travel1.step3.value.labelEnd",
                  summaryLabelEnd:
                    "travel.product1.travel1.step3.value.summaryLabelEnd",
                  labelStart: "travel.product1.travel1.step3.value.labelStart",
                  summaryLabelStart:
                    "travel.product1.travel1.step3.value.summaryLabelStart",
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 0,
                  minStart: 1,
                  nameEnd: "end_date",
                  nameStart: "start_date"
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step4.label",
              quickLabel: "travel.product1.travel1.step4.quickLabel",
              summaryLabel: "travel.product1.travel1.step4.summaryLabel",
              type: StepType.DATE,
              values: [
                {
                  isRequired: true,
                  label: "travel.product1.travel1.step4.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step4.value1.summaryLabel",
                  max: 0,
                  min: -182,
                  nameStart: "bookingDate",
                  name: "booking_date",
                  type: "date"
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step6.label",
              quickLabel: "travel.product1.travel1.step6.quickLabel",
              summaryLabel: "travel.product1.travel1.step6.summaryLabel",
              type: StepType.CURRENCY,
              values: [
                {
                  currency: "euro",
                  desc: "travel.product1.travel1.step6.value.desc",
                  max: 50000,
                  min: 1,
                  name: "cost",
                  type: "currency"
                }
              ]
            }
          ],
          value: "sub grupo 2",
          valueSummaryLabel: "travel.product1.travel1.value.summaryLabel"
        }
      ],
      value: "iberia_1",
      valueSummaryLabel: "travel.insurance.product1.value.summaryLabel"
    },
    {
      isPreselected: false,
      isRequired: true,
      name: "product",
      label: "travel.insurance.product2.label",
      summaryLabel: "travel.insurance.product.summaryLabel",
      subProductGroups: [
        {
          isPreselected: true,
          isRequired: true,
          name: "subproduct",
          label: "travel.product1.travel1.label",
          summaryLabel: "travel.product.travel.summaryLabel",
          steps: [
            {
              isRequired: true,
              label: "travel.product1.travel1.step1.label",
              quickLabel: "travel.product1.travel1.step1.quickLabel",
              summaryLabel: "travel.product1.travel1.step1.summaryLabel",
              type: StepType.LIST,
              values: [
                {
                  asButton: true,
                  name: "destination_area",
                  desc: "travel.product1.travel1.step1.value1.desc",
                  label: "travel.product1.travel1.step1.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value1.summaryLabel",
                  value: "2"
                },
                {
                  asButton: true,
                  name: "destination_area",
                  label: "travel.product1.travel1.step1.value2.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value2.summaryLabel",
                  value: "5"
                },
                {
                  asButton: true,
                  name: "destination_area",
                  label: "travel.product1.travel1.step1.value3.label",
                  summaryLabel:
                    "travel.product1.travel1.step1.value3.summaryLabel",
                  value: "6"
                }
              ]
            },
            {
              name: "travelers",
              type: StepType.COUNTER,
              label: "travel.product1.travel1.step2.value3.subQuoting.label",
              summaryLabel:
                "travel.product1.travel1.step2.value3.subQuoting.summaryLabel",
              quickLabel:
                "travel.product1.travel1.step2.value3.subQuoting.quickLabel",
              desc: "travel.product1.travel1.step2.value3.subQuoting.desc",
              values: [
                {
                  name: "adults",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value1.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value1.desc",
                  min: 0,
                  max: 10
                },
                {
                  name: "children",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value2.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value2.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value2.desc",
                  min: 0,
                  max: 10
                },
                {
                  name: "seniors",
                  label:
                    "travel.product1.travel1.step2.value3.subQuoting.value3.label",
                  summaryLabel:
                    "travel.product1.travel1.step2.value3.subQuoting.value3.summaryLabel",
                  desc: "travel.product1.travel1.step2.value3.subQuoting.value3.desc",
                  min: 0,
                  max: 10
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step3.label",
              quickLabel: "travel.product1.travel1.step3.quickLabel",
              summaryLabel: "travel.product1.travel1.step3.summaryLabel",
              desc: "travel.product1.travel1.step3.desc",
              type: StepType.DATE_RANGE,
              values: [
                {
                  isRequired: true,
                  labelEnd: "travel.product1.travel1.step3.value.labelEnd",
                  summaryLabelEnd:
                    "travel.product1.travel1.step3.value.summaryLabelEnd",
                  labelStart: "travel.product1.travel1.step3.value.labelStart",
                  summaryLabelStart:
                    "travel.product1.travel1.step3.value.summaryLabelStart",
                  maxStart: 180,
                  maxEnd: 365,
                  minEnd: 0,
                  minStart: 1,
                  nameEnd: "end_date",
                  nameStart: "start_date"
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step4.label",
              quickLabel: "travel.product1.travel1.step4.quickLabel",
              summaryLabel: "travel.product1.travel1.step4.summaryLabel",
              type: StepType.DATE,
              values: [
                {
                  isRequired: true,
                  label: "travel.product1.travel1.step4.value1.label",
                  summaryLabel:
                    "travel.product1.travel1.step4.value1.summaryLabel",
                  max: 0,
                  min: -182,
                  nameStart: "bookingDate",
                  name: "booking_date",
                  type: "date"
                }
              ]
            },
            {
              isRequired: true,
              label: "travel.product1.travel1.step6.label",
              quickLabel: "travel.product1.travel1.step6.quickLabel",
              summaryLabel: "travel.product1.travel1.step6.summaryLabel",
              values: [
                {
                  currency: "euro",
                  desc: "travel.product1.travel1.step6.value.desc",
                  max: 50000,
                  min: 1,
                  name: "cost",
                  type: "currency"
                }
              ]
            }
          ],
          value: "sub grupo 3",
          valueSummaryLabel: "travel.product1.travel1.value.summaryLabel"
        }
      ],
      value: "iberia_3",
      valueSummaryLabel: "travel.insurance.product1.value.summaryLabel"
    }
  ]
};
