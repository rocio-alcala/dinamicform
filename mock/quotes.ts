import { Quote } from "../src/models/quote";

export const mockQuote: Quote = {
  context: {
    country: "ES",
    currency: "EUR"
  },
  quote_expire_at: "2024-03-31T21:34:00Z",
  products: [
    {
      quote_code:
        "eJyNU8tu2zAQ/BeerUDUy7GORQOkQA9F01x6IVbiSmUgkeqSNGIE+fcuZTt2mkN7JGd3dmaWfBG/owvGjopwEO2L6CHA5EbVO42iFWYBhX6RYvOGzPDkSO2RvHFWtPIKMfYdsm0umA8QomfGb4+fvn55uL/7nChdtIEOfHv3kI6RCG2/nh+/88UEdowwJiHos7XG2IA0ozZAh5NIG6eJm8kwYiCZsHHukJQbVCDY48SKWM5NvhGOzGisAkI4NwYyCzP5oBbuOTdwfV2kjgsX6DgFvzrWcPAqOKVxAQqRWIWs3ld7tMalufnViJX1uqr/ZSbNpi9lOhKENb91/HqHVisNIeVQ5EWV5WUmG3ECOVkKH+CaYY2eV7uynRyLQrxuxEguLm8b7lJqqit6XnSIHCwn7Lnbx079R6Xy/HomVEkLdy3kZne9F3xezNHR3xpL+aOQbVm1eXlTl3mzbepb+TNxsCHL+QzmGTVPn2fjj0/qSHnG98B6Op79scTjelRG88Cmz8tG1rtsW5VlVg1dlcEgq6y/LWQ1yG1Z7XYpF9auYx/+4Ze/w7Xn9OqNeP0Dv+of9Q==",
      name: "Estudiantes Españoles Mini",
      is_default_product: false,
      prices: {
        formula: "1-DAY",
        total_taxes: 0.74,
        country_taxes: [
          {
            name: "Clea",
            tax_amount: 0.03
          }
        ],
        price_after_discount_incl_tax: 20.14,
        premium_after_discount_excl_tax: 19.4,
        percentage_discount: 0,
        total_discount: 0,
        guarantee_class_prices: [
          {
            code: "01",
            label: "Accident",
            premium_after_discount_excl_tax: 0.19,
            total_taxes: 0.01
          },
          {
            code: "13",
            label: "General liability",
            premium_after_discount_excl_tax: 0.19,
            total_taxes: 0.01
          },
          {
            code: "02",
            label: "Sickness",
            premium_after_discount_excl_tax: 17.67,
            total_taxes: 0.63
          },
          {
            code: "17",
            label: "Legal expenses",
            premium_after_discount_excl_tax: 0.19,
            total_taxes: 0.01
          },
          {
            code: "16",
            label: "Miscellaneous financial loss",
            premium_after_discount_excl_tax: 0.19,
            total_taxes: 0.01
          },
          {
            code: "09",
            label: "Damage to property",
            premium_after_discount_excl_tax: 0.19,
            total_taxes: 0.01
          },
          {
            code: "18",
            label: "Assistance",
            premium_after_discount_excl_tax: 0.78,
            total_taxes: 0.03
          }
        ],
        payment_periodicities: [
          {
            description: "upfront",
            periodicity: "R1/P0Y0M0D",
            number_of_payment: 1,
            amount_per_period: 20.14,
            amount_first_payment: 20.14
          }
        ],
        included_commissions: []
      },
      attachments: [
        {
          name: "AXA_ASSISTANCE_VIAJE.pdf",
          is_terms_and_conditions: true,
          included_in_esignature: false,
          content_url:
            "https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/4affc593-7c45-4006-8752-dd6acaf9f737/757315d8-3e70-4eee-9042-b257f855ac15/AXA_ASSISTANCE_VIAJE.pdf"
        },
        {
          name: "IPID_AXA_ASSISTANCE_VIAJE.pdf",
          is_terms_and_conditions: false,
          included_in_esignature: false,
          content_url:
            "https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/4affc593-7c45-4006-8752-dd6acaf9f737/5d5b2245-69a9-4d7b-b320-74513ac4ab2e/IPID_AXA_ASSISTANCE_VIAJE.pdf"
        }
      ],
      consents: [
        {
          code: "DISCLAIMER_byvcILyHL",
          is_mandatory: true,
          is_marketing: false,
          text: 'Mediante el envío de mis datos personales confirmo que he leído y acepto los <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/terminos-legales">términos legales</a> y la <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">política de privacidad</a>.',
          type: "PERSONAL_DATA",
          approval_type: []
        },
        {
          code: "DISCLAIMER_woQsWMujA",
          is_mandatory: true,
          is_marketing: false,
          text: 'Acepto el tratamiento de mis datos personales por parte de INTER PARTNER ASSISTANCE, S.A. con la finalidad de recibir el presupuesto solicitado a través de mail. Puedes obtener más información en el siguiente <a href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad" target="_blank" rel="noopener">link</a></p>',
          type: "SEND_QUOTE",
          approval_type: []
        },
        {
          code: "DISCLAIMER_EOaiHw1-q",
          is_mandatory: true,
          is_marketing: false,
          text: 'Al marcar esta casilla certifico que, antes de suscribirme a mi póliza, he leído toda la información contenida en el  <a target="_blank" href="https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/4affc593-7c45-4006-8752-dd6acaf9f737/5d5b2245-69a9-4d7b-b320-74513ac4ab2e/IPID_AXA_ASSISTANCE_VIAJE.pdf">documento de información del producto</a> de seguro propuesto así como los <a target="_blank" href="https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/4affc593-7c45-4006-8752-dd6acaf9f737/757315d8-3e70-4eee-9042-b257f855ac15/AXA_ASSISTANCE_VIAJE.pdf">términos y condiciones generales</a>  del mismo.',
          type: "PAYMENT",
          approval_type: []
        }
      ],
      payment_difference_types: [],
      disclaimers: [
        {
          code: "DISCLAIMER_KyFNjdkkD",
          text: 'Le informamos de que INTER PARTNER ASSISTANCE S.A., SUCURSAL EN ESPAÑA, tratará sus datos personales para gestionar sus solicitudes y contratación de productos o servicios, así como para remitirle comunicaciones comerciales en base a su perfil de usuario/sus intereses. Puede ejercer sus derechos en el siguiente correo electrónico: protecciondedatos@axa-assistance.es. Puede consultar más información en el siguiente enlace <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">aquí</a> ',
          type: "PERSONAL_DATA",
          approval_type: []
        }
      ],
      guarantees: [
        {
          code: "medical_expenses",
          label:
            "Gastos médicos, quirúrgicos, farmacéuticos y de hospitalización en el extranjero",
          is_customizable: false,
          base_price_percentage: 91,
          headline: "Gastos médicos hasta 50.000 €",
          limit: "50.000 €",
          sub_guarantees: []
        },
        {
          code: "dental_expenses",
          label: "Gastos odontológicos de urgencia en el extranjero",
          is_customizable: false,
          base_price_percentage: 0,
          limit: "200 €",
          sub_guarantees: []
        },
        {
          code: "transport_and_accommodation_expenses_16",
          label: "Gastos de transporte y alojamiento",
          is_customizable: false,
          sub_guarantees: [
            {
              code: "transport_and_accommodation_expenses_repatriation_of_remains",
              label: "Transporte o repatriación de fallecidos",
              limit: "Coste Real"
            },
            {
              code: "transport_and_accommodation_expenses_alone_abroad_companion_accom_non_insured",
              label: "Gastos de estancia del familiar desplazado",
              limit: "(10días/100€ día) hasta 1.000€"
            },
            {
              code: "transport_and_accommodation_expenses_16_alone_abroad_companion_non_insured",
              label:
                "Desplazamiento de un familiar en caso de hospitalización del asegurado",
              limit: "Billete de ida y vuelta"
            },
            {
              code: "transport_and_accommodation_expenses_16_repatriation_of_insured_person",
              label:
                "Transporte o repatriación sanitaria de heridos y enfermos",
              limit: "Coste Real"
            },
            {
              code: "transport_and_accommodation_expenses_16_early_repatriation_of_non_insured",
              label: "Transporte o repatriación del resto de Asegurados",
              limit: "Coste Real"
            },
            {
              code: "transport_and_accommodation_expenses_16_accommdation_of_insured_person",
              label:
                "Gastos de prolongación de estancia en un hotel del asegurado",
              limit: "(10 días/50 € día) hasta 500€"
            },
            {
              code: "transport_and_accommodation_expenses_16_trip_continuation_onward_journey",
              label: "Retorno a país de destino en caso de repatriación médica",
              limit: "Coste Real"
            }
          ]
        },
        {
          code: "travel_assistance",
          label: "Asistencia en viaje",
          is_customizable: false,
          base_price_percentage: 4,
          sub_guarantees: [
            {
              code: "travel_assistance_message_relay",
              label: "Transmisión de mensajes urgentes",
              limit: "Incluido"
            },
            {
              code: "travel_assistance_medical_teleconsultation",
              label: "Video consulta",
              limit: "Incluido"
            },
            {
              code: "travel_assistance_loss_of_keys",
              label: "Pérdida de llaves de la vivienda habitual",
              limit: "75 €"
            },
            {
              code: "travel_assistance_opening_a_safety_deposit_box",
              label: "Apertura y reparación de cofres y cajas de seguridad",
              limit: "175 €"
            },
            {
              code: "travel_assistance_loss_of_credit_card",
              label: "Anulación de tarjetas",
              limit: "Incluido"
            },
            {
              code: "travel_assistance_bailbonds_cash_advance_for_lawyer_fees",
              label:
                "Prestación y/o adelanto de fianzas penales en el extranjero",
              limit: "3.000 €"
            },
            {
              code: "travel_assistance_replacement_prescriptions",
              label:
                "Envío de medicamentos urgentes no existentes en el Extranjero",
              limit: "Incluido"
            }
          ]
        },
        {
          code: "curtailment",
          label:
            "Regreso anticipado por hospitalización o fallecimiento de un familiar, perjuicios graves en el hogar o local del asegurado",
          is_customizable: false,
          base_price_percentage: 1,
          headline: "Regreso anticipado y pérdida de servicios contratados",
          limit: "Billete de ida",
          sub_guarantees: []
        },
        {
          code: "delayed_baggage",
          label: "Demora en la entrega de equipajes",
          is_customizable: false,
          limit: "200 €",
          sub_guarantees: []
        },
        {
          code: "baggage",
          label: "Robo y daños materiales al equipaje",
          is_customizable: false,
          base_price_percentage: 1,
          headline: "Equipaje hasta 1.000€",
          limit: "1.000 €",
          sub_guarantees: []
        },
        {
          code: "missed_connection",
          label: "Pérdida de conexiones",
          is_customizable: false,
          limit: "100 €",
          sub_guarantees: []
        },
        {
          code: "delayed_departure",
          label: "Demora de viaje en la salida del medio de transporte",
          is_customizable: false,
          limit: "100 €",
          sub_guarantees: []
        },
        {
          code: "personal_accident",
          label: "Fallecimiento o invalidez permanente por Accidente",
          is_customizable: false,
          base_price_percentage: 1,
          sub_guarantees: [
            {
              code: "personal_accident_adult",
              label: "Fallecimiento o invalidez permanente por Accidente",
              limit: "30.000 €"
            },
            {
              code: "personal_accident_under_16",
              label:
                "Indemnización por fallecimiento o invalidez permanente por accidente en viaje - menores de 18",
              limit: "3.000 €"
            },
            {
              code: "personal_accident_adult_over_the_maximum_standard_adult_age",
              label:
                "Indemnización por fallecimiento o invalidez permanente por accidente en viaje - mayores de 70",
              limit: "3.000 €"
            }
          ]
        },
        {
          code: "missed_event",
          label: "Pérdida de clases",
          is_customizable: false,
          limit: "1.000 €",
          sub_guarantees: []
        },
        {
          code: "personal_liability_class_13",
          label: "Responsabilidad Civil Privada",
          is_customizable: false,
          base_price_percentage: 1,
          limit: "30.000 €",
          sub_guarantees: []
        },
        {
          code: "legal_expenses",
          label: "Defensa Jurídica en el Extranjero",
          is_customizable: false,
          base_price_percentage: 1,
          limit: "600 €",
          sub_guarantees: []
        }
      ],
      addon_codes: [
        "iberia_b2c_estudiantes_esp_mini_cancellation",
        "iberia_b2c_estudiantes_esp_single_trip_mini_sport"
      ],
      risks: [],
      travelers_breakdown: [],
      product_code: "iberia_b2c_estudiantes_esp_single_trip_mini"
    },
    {
      quote_code:
        "eJyNU8tu2zAQ/BeerUDUy7GORQOkQA9F01x6IVbiSmUgkeqSNGIE+fcuZTt2mkN7JGd3dmaWfBG/owvGjopwEO2L6CHA5EbVO42iFWYBhX6RYvOGzPDkSO2RvHFWtPIKMfYdsm0umA8QomfGb4+fvn55uL/7nChdtIEOfHv3kI6RCG2/nh+/88UEdowwJiHos7XG2IA0ozZAh5NIG6eJm8kwYiCZsHHukJQbVCDY48SKWM5NvhGOzGisAkI4NwYyCzP5oBbuOTdwfV2kjgsX6DgFvzrWcPAqOKVxAQqRWIWs3ld7tMalufnViJX1uqr/ZSbNpi9lOhKENb91/HqHVisNIeVQ5EWV5WUmG3ECOVkKH+CaYY2eV7uynRyLQrxuxEguLm8b7lJqqit6XnSIHCwn7Lnbx079R6Xy/HomVEkLdy3kZne9F3xezNHR3xpL+aOQbVm1eXlTl3mzbepb+TNxsCHL+QzmGTVPn2fjj0/qSHnG98B6Op79scTjelRG88Cmz8tG1rtsW5VlVg1dlcEgq6y/LWQ1yG1Z7XYpF9auYx/+4Ze/w7Vnfgb8wsXrH+DXIGw=",
      name: "Estudiantes Españoles Total",
      is_default_product: false,
      prices: {
        formula: "1-DAY",
        total_taxes: 0.82,
        country_taxes: [
          {
            name: "Clea",
            tax_amount: 0.03
          }
        ],
        price_after_discount_incl_tax: 22.71,
        premium_after_discount_excl_tax: 21.89,
        percentage_discount: 0,
        total_discount: 0,
        guarantee_class_prices: [
          {
            code: "17",
            label: "Legal expenses",
            premium_after_discount_excl_tax: 0.22,
            total_taxes: 0.01
          },
          {
            code: "09",
            label: "Damage to property",
            premium_after_discount_excl_tax: 0.22,
            total_taxes: 0.01
          },
          {
            code: "01",
            label: "Accident",
            premium_after_discount_excl_tax: 0.22,
            total_taxes: 0.01
          },
          {
            code: "16",
            label: "Miscellaneous financial loss",
            premium_after_discount_excl_tax: 0.22,
            total_taxes: 0.01
          },
          {
            code: "13",
            label: "General liability",
            premium_after_discount_excl_tax: 0.22,
            total_taxes: 0.01
          },
          {
            code: "02",
            label: "Sickness",
            premium_after_discount_excl_tax: 19.91,
            total_taxes: 0.71
          },
          {
            code: "18",
            label: "Assistance",
            premium_after_discount_excl_tax: 0.88,
            total_taxes: 0.03
          }
        ],
        payment_periodicities: [
          {
            description: "upfront",
            periodicity: "R1/P0Y0M0D",
            number_of_payment: 1,
            amount_per_period: 22.71,
            amount_first_payment: 22.71
          }
        ],
        included_commissions: []
      },
      attachments: [
        {
          name: "IPID_AXA_ASSISTANCE_VIAJE.pdf",
          is_terms_and_conditions: false,
          included_in_esignature: false,
          content_url:
            "https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/6849f5b3-48bf-4e13-89e5-b2de2de15b9c/3481f3cb-34ff-4b87-8f8f-c1f6282c5f61/IPID_AXA_ASSISTANCE_VIAJE.pdf"
        },
        {
          name: "AXA_ASSISTANCE_VIAJE.pdf",
          is_terms_and_conditions: true,
          included_in_esignature: false,
          content_url:
            "https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/6849f5b3-48bf-4e13-89e5-b2de2de15b9c/df354f01-1e87-4ad4-ac12-c9f3da5da559/AXA_ASSISTANCE_VIAJE.pdf"
        }
      ],
      consents: [
        {
          code: "DISCLAIMER_byvcILyHL",
          is_mandatory: true,
          is_marketing: false,
          text: 'Mediante el envío de mis datos personales confirmo que he leído y acepto los <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/terminos-legales">términos legales</a> y la <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">política de privacidad</a>.',
          type: "PERSONAL_DATA",
          approval_type: []
        },
        {
          code: "DISCLAIMER_woQsWMujA",
          is_mandatory: true,
          is_marketing: false,
          text: 'Acepto el tratamiento de mis datos personales por parte de INTER PARTNER ASSISTANCE, S.A. con la finalidad de recibir el presupuesto solicitado a través de mail. Puedes obtener más información en el siguiente <a href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad" target="_blank" rel="noopener">link</a></p>',
          type: "SEND_QUOTE",
          approval_type: []
        },
        {
          code: "DISCLAIMER_ZwKXucqtV",
          is_mandatory: true,
          is_marketing: false,
          text: 'Al marcar esta casilla certifico que, antes de suscribirme a mi póliza, he leído toda la información contenida en el  <a target="_blank" href="https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/6849f5b3-48bf-4e13-89e5-b2de2de15b9c/3481f3cb-34ff-4b87-8f8f-c1f6282c5f61/IPID_AXA_ASSISTANCE_VIAJE.pdf">documento de información del producto</a> de seguro propuesto así como los <a target="_blank" href="https://neo-bo-prod-documents.s3.eu-central-1.amazonaws.com/travel/products/6849f5b3-48bf-4e13-89e5-b2de2de15b9c/df354f01-1e87-4ad4-ac12-c9f3da5da559/AXA_ASSISTANCE_VIAJE.pdf">términos y condiciones generales</a>  del mismo.',
          type: "PAYMENT",
          approval_type: []
        }
      ],
      payment_difference_types: [],
      disclaimers: [
        {
          code: "DISCLAIMER_KyFNjdkkD",
          text: 'Le informamos de que INTER PARTNER ASSISTANCE S.A., SUCURSAL EN ESPAÑA, tratará sus datos personales para gestionar sus solicitudes y contratación de productos o servicios, así como para remitirle comunicaciones comerciales en base a su perfil de usuario/sus intereses. Puede ejercer sus derechos en el siguiente correo electrónico: protecciondedatos@axa-assistance.es. Puede consultar más información en el siguiente enlace <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">aquí</a> ',
          type: "PERSONAL_DATA",
          approval_type: []
        }
      ],
      guarantees: [
        {
          code: "medical_expenses",
          label:
            "Gastos médicos, quirúrgicos, farmacéuticos y de hospitalización en el extranjero",
          is_customizable: false,
          base_price_percentage: 91,
          headline: "Gastos médicos hasta 100.000 €",
          limit: "100.000 €",
          sub_guarantees: []
        },
        {
          code: "dental_expenses",
          label: "Gastos odontológicos de urgencia en el extranjero",
          is_customizable: false,
          limit: "200 €",
          sub_guarantees: []
        },
        {
          code: "transport_and_accommodation_expenses_16",
          label: "Gastos de transporte y alojamiento",
          is_customizable: false,
          sub_guarantees: [
            {
              code: "transport_and_accommodation_expenses_repatriation_of_remains",
              label: "Transporte o repatriación de fallecidos",
              limit: "Coste Real"
            },
            {
              code: "transport_and_accommodation_expenses_alone_abroad_companion_accom_non_insured",
              label: "Gastos de estancia del familiar desplazado",
              limit: "(10días/100€ día) hasta 1.000€"
            },
            {
              code: "transport_and_accommodation_expenses_16_alone_abroad_companion_non_insured",
              label:
                "Desplazamiento de un familiar en caso de hospitalización del asegurado",
              limit: "Billete de ida y vuelta"
            },
            {
              code: "transport_and_accommodation_expenses_16_repatriation_of_insured_person",
              label:
                "Transporte o repatriación sanitaria de heridos y enfermos",
              limit: "Coste Real"
            },
            {
              code: "transport_and_accommodation_expenses_16_early_repatriation_of_non_insured",
              label: "Transporte o repatriación del resto de Asegurados",
              limit: "Coste Real"
            },
            {
              code: "transport_and_accommodation_expenses_16_accommdation_of_insured_person",
              label:
                "Gastos de prolongación de estancia en un hotel del asegurado",
              limit: "(10 días/50 € día) hasta 500€"
            },
            {
              code: "transport_and_accommodation_expenses_16_trip_continuation_onward_journey",
              label: "Retorno a país de destino en caso de repatriación médica",
              limit: "Coste Real"
            }
          ]
        },
        {
          code: "travel_assistance",
          label: "Asistencia en viaje",
          is_customizable: false,
          base_price_percentage: 4,
          sub_guarantees: [
            {
              code: "travel_assistance_message_relay",
              label: "Transmisión de mensajes urgentes",
              limit: "Incluido"
            },
            {
              code: "travel_assistance_medical_teleconsultation",
              label: "Video consulta",
              limit: "Incluido"
            },
            {
              code: "travel_assistance_loss_of_keys",
              label: "Pérdida de llaves de la vivienda habitual",
              limit: "75 €"
            },
            {
              code: "travel_assistance_opening_a_safety_deposit_box",
              label: "Apertura y reparación de cofres y cajas de seguridad",
              limit: "175 €"
            },
            {
              code: "travel_assistance_loss_of_credit_card",
              label: "Anulación de tarjetas",
              limit: "Incluido"
            },
            {
              code: "travel_assistance_bailbonds_cash_advance_for_lawyer_fees",
              label:
                "Prestación y/o adelanto de fianzas penales en el extranjero",
              limit: "3.000 €"
            },
            {
              code: "travel_assistance_replacement_prescriptions",
              label:
                "Envío de medicamentos urgentes no existentes en el Extranjero",
              limit: "Incluido"
            }
          ]
        },
        {
          code: "curtailment",
          label:
            "Regreso anticipado por hospitalización o fallecimiento de un familiar, perjuicios graves en el hogar o local del asegurado",
          is_customizable: false,
          headline: "Regreso anticipado y pérdida de servicios contratados",
          limit: "Billete de ida",
          sub_guarantees: []
        },
        {
          code: "delayed_baggage",
          label: "Demora en la entrega de equipajes",
          is_customizable: false,
          limit: "200 €",
          sub_guarantees: []
        },
        {
          code: "baggage",
          label: "Robo y daños materiales al equipaje",
          is_customizable: false,
          base_price_percentage: 1,
          headline: "Equipaje hasta 2.000€",
          limit: "2.000 €",
          sub_guarantees: []
        },
        {
          code: "missed_connection",
          label: "Pérdida de conexiones",
          is_customizable: false,
          base_price_percentage: 1,
          limit: "100 €",
          sub_guarantees: []
        },
        {
          code: "delayed_departure",
          label: "Demora de viaje en la salida del medio de transporte",
          is_customizable: false,
          limit: "100 €",
          sub_guarantees: []
        },
        {
          code: "personal_accident",
          label: "Fallecimiento o invalidez permanente por Accidente",
          is_customizable: false,
          base_price_percentage: 1,
          sub_guarantees: [
            {
              code: "personal_accident_adult",
              label: "Fallecimiento o invalidez permanente por Accidente",
              limit: "30.000 €"
            },
            {
              code: "personal_accident_under_16",
              label:
                "Indemnización por fallecimiento o invalidez permanente por accidente en viaje - menores de 18",
              limit: "3.000 €"
            },
            {
              code: "personal_accident_adult_over_the_maximum_standard_adult_age",
              label:
                "Indemnización por fallecimiento o invalidez permanente por accidente en viaje - mayores de 70",
              limit: "3.000 €"
            }
          ]
        },
        {
          code: "missed_event",
          label: "Pérdida de clases",
          is_customizable: false,
          limit: "1.000 €",
          sub_guarantees: []
        },
        {
          code: "personal_liability_class_13",
          label: "Responsabilidad Civil Privada",
          is_customizable: false,
          base_price_percentage: 1,
          limit: "60.000 €",
          sub_guarantees: []
        },
        {
          code: "legal_expenses",
          label: "Defensa Jurídica en el Extranjero",
          is_customizable: false,
          base_price_percentage: 1,
          limit: "600 €",
          sub_guarantees: []
        }
      ],
      addon_codes: [
        "iberia_b2c_estudiantes_esp_total_cancellation",
        "iberia_b2c_estudiantes_esp_single_trip_total_sport"
      ],
      risks: [],
      travelers_breakdown: [],
      product_code: "iberia_b2c_estudiantes_esp_single_trip_total"
    }
  ],
  addons: [
    {
      quote_code:
        "eJx1kMFuAyEMRP+Fc0495mcsLzjIFZitsaNE0f57ybalidLemBkLv/EtfHgzlgxKp3C8hYiGpWWILVE4ipdymF7F96ZwJu3c5CVk+T/shuZ9us3F9Dqlq5LEqQtKdsxzPYuRVkqMen3mUh4J4+DeDiFr8/Up777Aq7tqq+3RoMvKijawIaH9zqGakMKJL5TGD7Vyf+z2k59xICyF/hjptEvg9OVs+/bk0b6JAi/3ArC8RaBuPjqOsn281/tBGSJKpFJ2urB9Ancuoew=",
      name: "Mini Opcional: Seguro de cancelación",
      description:
        "Esta garantía debe contratarse el día de la confirmación de la reserva del viaje, o máximo, dentro de los 7 días posteriores a la misma.",
      is_default_product: false,
      prices: {
        formula: "1-DAY",
        total_taxes: 0.15,
        country_taxes: [
          {
            name: "Clea",
            tax_amount: 0.01
          }
        ],
        price_after_discount_incl_tax: 4.1,
        premium_after_discount_excl_tax: 3.95,
        percentage_discount: 0,
        total_discount: 0,
        guarantee_class_prices: [
          {
            code: "16",
            label: "Miscellaneous financial loss",
            premium_after_discount_excl_tax: 3.95,
            total_taxes: 0.14
          }
        ],
        payment_periodicities: [
          {
            description: "upfront",
            periodicity: "R1/P0Y0M0D",
            number_of_payment: 1,
            amount_per_period: 4.1,
            amount_first_payment: 4.1
          }
        ],
        included_commissions: []
      },
      attachments: [],
      consents: [
        {
          code: "DISCLAIMER_byvcILyHL",
          is_mandatory: true,
          is_marketing: false,
          text: 'Mediante el envío de mis datos personales confirmo que he leído y acepto los <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/terminos-legales">términos legales</a> y la <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">política de privacidad</a>.',
          type: "PERSONAL_DATA",
          approval_type: []
        },
        {
          code: "DISCLAIMER_woQsWMujA",
          is_mandatory: true,
          is_marketing: false,
          text: 'Acepto el tratamiento de mis datos personales por parte de INTER PARTNER ASSISTANCE, S.A. con la finalidad de recibir el presupuesto solicitado a través de mail. Puedes obtener más información en el siguiente <a href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad" target="_blank" rel="noopener">link</a></p>',
          type: "SEND_QUOTE",
          approval_type: []
        }
      ],
      disclaimers: [
        {
          code: "DISCLAIMER_KyFNjdkkD",
          text: 'Le informamos de que INTER PARTNER ASSISTANCE S.A., SUCURSAL EN ESPAÑA, tratará sus datos personales para gestionar sus solicitudes y contratación de productos o servicios, así como para remitirle comunicaciones comerciales en base a su perfil de usuario/sus intereses. Puede ejercer sus derechos en el siguiente correo electrónico: protecciondedatos@axa-assistance.es. Puede consultar más información en el siguiente enlace <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">aquí</a> ',
          type: "PERSONAL_DATA",
          approval_type: []
        }
      ],
      guarantees: [
        {
          code: "cancellation",
          label: "Gastos de anulación de viaje no iniciado",
          is_customizable: false,
          base_price_percentage: 100,
          limit: "Costo de viaje hasta 5.000 € por persona",
          sub_guarantees: []
        },
        {
          code: "curtailment",
          label: "Reembolso de días no disfrutados",
          is_customizable: false,
          limit: "5.000 €",
          sub_guarantees: []
        }
      ],
      risks: [],
      travelers_breakdown: [],
      addon_code: "iberia_b2c_estudiantes_esp_mini_cancellation"
    },
    {
      quote_code:
        "eJx1UUtuQjEMvEvWrLrkMpZfYiJXLx/8QSD07t5A2xQE3XlmLHvGvoajN+OaQegQ9tcQ0XBtGWJLFPbV13U3uYKfTeBEotzqi8j1f1ENzXWyzavJZUIXoRonXrFmxzzXczWSQolRLs++hIfCOHxvu5CleX/S1Rd4Zbu00h4JOncWtGEbEtpfH4pVEjjwmdKYUArrY7Zf/YTDwrLSmxalOwRO38x235482o+jwMstACwfEUjNR8YRVkfdQcdXxlQT7rfjMmhvYmH7AqsYpDY=",
      name: "Mini Opcional: Seguro deportivo",
      is_default_product: false,
      prices: {
        formula: "1-DAY",
        total_taxes: 1.21,
        country_taxes: [
          {
            name: "Clea",
            tax_amount: 0.05
          }
        ],
        price_after_discount_incl_tax: 33.61,
        premium_after_discount_excl_tax: 32.4,
        percentage_discount: 0,
        total_discount: 0,
        guarantee_class_prices: [
          {
            code: "18",
            label: "Assistance",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          },
          {
            code: "02",
            label: "Sickness",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          },
          {
            code: "16",
            label: "Miscellaneous financial loss",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          },
          {
            code: "09",
            label: "Damage to property",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          }
        ],
        payment_periodicities: [
          {
            description: "upfront",
            periodicity: "R1/P0Y0M0D",
            number_of_payment: 1,
            amount_per_period: 33.61,
            amount_first_payment: 33.61
          }
        ],
        included_commissions: []
      },
      attachments: [],
      consents: [
        {
          code: "DISCLAIMER_byvcILyHL",
          is_mandatory: true,
          is_marketing: false,
          text: 'Mediante el envío de mis datos personales confirmo que he leído y acepto los <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/terminos-legales">términos legales</a> y la <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">política de privacidad</a>.',
          type: "PERSONAL_DATA",
          approval_type: []
        },
        {
          code: "DISCLAIMER_woQsWMujA",
          is_mandatory: true,
          is_marketing: false,
          text: 'Acepto el tratamiento de mis datos personales por parte de INTER PARTNER ASSISTANCE, S.A. con la finalidad de recibir el presupuesto solicitado a través de mail. Puedes obtener más información en el siguiente <a href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad" target="_blank" rel="noopener">link</a></p>',
          type: "SEND_QUOTE",
          approval_type: []
        }
      ],
      disclaimers: [
        {
          code: "DISCLAIMER_KyFNjdkkD",
          text: 'Le informamos de que INTER PARTNER ASSISTANCE S.A., SUCURSAL EN ESPAÑA, tratará sus datos personales para gestionar sus solicitudes y contratación de productos o servicios, así como para remitirle comunicaciones comerciales en base a su perfil de usuario/sus intereses. Puede ejercer sus derechos en el siguiente correo electrónico: protecciondedatos@axa-assistance.es. Puede consultar más información en el siguiente enlace <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">aquí</a> ',
          type: "PERSONAL_DATA",
          approval_type: []
        }
      ],
      guarantees: [
        {
          code: "curtailment",
          label: "Interrupción de cursos deportivos",
          is_customizable: false,
          limit: "Hasta 500 € por asegurado y 2.500 € por evento",
          sub_guarantees: []
        },
        {
          code: "hyperbaric_chamber",
          label: "Gastos de cámara hiperbárica",
          is_customizable: false,
          base_price_percentage: 25,
          limit: "5.000 € por asegurado por evento",
          sub_guarantees: []
        },
        {
          code: "specialised_sports_equipment",
          label: "Seguro de equipaje deportivo (robo, pérdida o destrucción)",
          is_customizable: false,
          base_price_percentage: 25,
          limit: "3.000 € por asegurado y 15.000 € por evento",
          sub_guarantees: []
        },
        {
          code: "transport_and_accommodation_expenses_16",
          label: "Gastos de búsqueda y rescate",
          is_customizable: false,
          base_price_percentage: 25,
          limit: "Hasta 5.000 € por asegurado y 25.000 € por evento",
          sub_guarantees: []
        },
        {
          code: "home_help",
          label:
            "Ayuda de domicilio en caso de inmovilización u hospitalización del asegurado más de 5 días",
          is_customizable: false,
          base_price_percentage: 25,
          limit:
            "20 horas dentro de un período máximo de 30 días después de la fecha del evento",
          sub_guarantees: []
        }
      ],
      risks: [],
      travelers_breakdown: [],
      addon_code: "iberia_b2c_estudiantes_esp_single_trip_mini_sport"
    },
    {
      quote_code:
        "eJx1kMFuAyEMRP+Fc0495mcsLzjIFdhbY6JE0f57ybalidLemBkLv/EtfHR1lgxGp3C8hYiORTNETRSO0ks5TK/iuxqcyRqrvIQs/4fN0XubrnZxu07ZzUji1AUld8xzPYuTVUqMdn3mMh4J4+DeDiGb9vUpb32BV3c1rfpo0GVlQx/YkNB/59BcyODEF0rjh1q5PXb7yc84EJZCf4w02iVw+nK2fXvq0b+JAi/3ArC8RaDmfXQcZdt4r+A6bgcRJVIpO17YPgEa4KJj",
      name: "Total Opcional: Seguro de cancelación",
      description:
        "Esta garantía debe contratarse el día de la confirmación de la reserva del viaje, o máximo, dentro de los 7 días posteriores a la misma.",
      is_default_product: false,
      prices: {
        formula: "1-DAY",
        total_taxes: 0.15,
        country_taxes: [
          {
            name: "Clea",
            tax_amount: 0.01
          }
        ],
        price_after_discount_incl_tax: 4.1,
        premium_after_discount_excl_tax: 3.95,
        percentage_discount: 0,
        total_discount: 0,
        guarantee_class_prices: [
          {
            code: "16",
            label: "Miscellaneous financial loss",
            premium_after_discount_excl_tax: 3.95,
            total_taxes: 0.14
          }
        ],
        payment_periodicities: [
          {
            description: "upfront",
            periodicity: "R1/P0Y0M0D",
            number_of_payment: 1,
            amount_per_period: 4.1,
            amount_first_payment: 4.1
          }
        ],
        included_commissions: []
      },
      attachments: [],
      consents: [
        {
          code: "DISCLAIMER_byvcILyHL",
          is_mandatory: true,
          is_marketing: false,
          text: 'Mediante el envío de mis datos personales confirmo que he leído y acepto los <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/terminos-legales">términos legales</a> y la <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">política de privacidad</a>.',
          type: "PERSONAL_DATA",
          approval_type: []
        },
        {
          code: "DISCLAIMER_woQsWMujA",
          is_mandatory: true,
          is_marketing: false,
          text: 'Acepto el tratamiento de mis datos personales por parte de INTER PARTNER ASSISTANCE, S.A. con la finalidad de recibir el presupuesto solicitado a través de mail. Puedes obtener más información en el siguiente <a href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad" target="_blank" rel="noopener">link</a></p>',
          type: "SEND_QUOTE",
          approval_type: []
        }
      ],
      disclaimers: [
        {
          code: "DISCLAIMER_KyFNjdkkD",
          text: 'Le informamos de que INTER PARTNER ASSISTANCE S.A., SUCURSAL EN ESPAÑA, tratará sus datos personales para gestionar sus solicitudes y contratación de productos o servicios, así como para remitirle comunicaciones comerciales en base a su perfil de usuario/sus intereses. Puede ejercer sus derechos en el siguiente correo electrónico: protecciondedatos@axa-assistance.es. Puede consultar más información en el siguiente enlace <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">aquí</a> ',
          type: "PERSONAL_DATA",
          approval_type: []
        }
      ],
      guarantees: [
        {
          code: "cancellation",
          label: "Gastos de anulación de viaje no iniciado",
          is_customizable: false,
          base_price_percentage: 100,
          limit: "Costo de viaje hasta 5.000 € por persona",
          sub_guarantees: []
        },
        {
          code: "curtailment",
          label: "Reembolso de días no disfrutados",
          is_customizable: false,
          limit: "5.000 €",
          sub_guarantees: []
        }
      ],
      risks: [],
      travelers_breakdown: [],
      addon_code: "iberia_b2c_estudiantes_esp_total_cancellation"
    },
    {
      quote_code:
        "eJx1UUFuAjEM/EvOnHrkM5Y3MZGrTZw6DgKh/XsNLQFEe/PMWPaMfQlfQ4xrBqVD2F9CRMNVMkRJFPZ1rOtucgU/ReFI2lnqm8j1f7Eb2uiTlVFNzxMOVapx4hVrHpjneq5GWigx6vnVl7IrjO5724WsMtqL3scC72xTKfJM0KmxorltSGiPPlSrpHDgEyWfUAr352x3/YhuYVnpj5ZONwicfpjttj2NaL+OAi/XALB8RKBuwzN62O51g+5f8amm3MDE7wi9iVrYvgFQiKSt",
      name: "Total Opcional: Seguro deportivo",
      is_default_product: false,
      prices: {
        formula: "1-DAY",
        total_taxes: 1.21,
        country_taxes: [
          {
            name: "Clea",
            tax_amount: 0.05
          }
        ],
        price_after_discount_incl_tax: 33.61,
        premium_after_discount_excl_tax: 32.4,
        percentage_discount: 0,
        total_discount: 0,
        guarantee_class_prices: [
          {
            code: "18",
            label: "Assistance",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          },
          {
            code: "02",
            label: "Sickness",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          },
          {
            code: "16",
            label: "Miscellaneous financial loss",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          },
          {
            code: "09",
            label: "Damage to property",
            premium_after_discount_excl_tax: 8.1,
            total_taxes: 0.29
          }
        ],
        payment_periodicities: [
          {
            description: "upfront",
            periodicity: "R1/P0Y0M0D",
            number_of_payment: 1,
            amount_per_period: 33.61,
            amount_first_payment: 33.61
          }
        ],
        included_commissions: []
      },
      attachments: [],
      consents: [
        {
          code: "DISCLAIMER_byvcILyHL",
          is_mandatory: true,
          is_marketing: false,
          text: 'Mediante el envío de mis datos personales confirmo que he leído y acepto los <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/terminos-legales">términos legales</a> y la <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">política de privacidad</a>.',
          type: "PERSONAL_DATA",
          approval_type: []
        },
        {
          code: "DISCLAIMER_woQsWMujA",
          is_mandatory: true,
          is_marketing: false,
          text: 'Acepto el tratamiento de mis datos personales por parte de INTER PARTNER ASSISTANCE, S.A. con la finalidad de recibir el presupuesto solicitado a través de mail. Puedes obtener más información en el siguiente <a href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad" target="_blank" rel="noopener">link</a></p>',
          type: "SEND_QUOTE",
          approval_type: []
        }
      ],
      disclaimers: [
        {
          code: "DISCLAIMER_KyFNjdkkD",
          text: 'Le informamos de que INTER PARTNER ASSISTANCE S.A., SUCURSAL EN ESPAÑA, tratará sus datos personales para gestionar sus solicitudes y contratación de productos o servicios, así como para remitirle comunicaciones comerciales en base a su perfil de usuario/sus intereses. Puede ejercer sus derechos en el siguiente correo electrónico: protecciondedatos@axa-assistance.es. Puede consultar más información en el siguiente enlace <a target="_blank" href="https://www.axa-assistance-segurodeviaje.es/politica-privacidad">aquí</a> ',
          type: "PERSONAL_DATA",
          approval_type: []
        }
      ],
      guarantees: [
        {
          code: "curtailment",
          label: "Interrupción de cursos deportivos",
          is_customizable: false,
          base_price_percentage: 25,
          limit: "Hasta 500 € por asegurado y 2.500 € por evento",
          sub_guarantees: []
        },
        {
          code: "hyperbaric_chamber",
          label: "Gastos de cámara hiperbárica",
          is_customizable: false,
          base_price_percentage: 25,
          limit: "5.000 € por asegurado por evento",
          sub_guarantees: []
        },
        {
          code: "specialised_sports_equipment",
          label: "Seguro de equipaje deportivo (robo, pérdida o destrucción)",
          is_customizable: false,
          base_price_percentage: 25,
          limit: "3.000 € por asegurado y 15.000 € por evento",
          sub_guarantees: []
        },
        {
          code: "transport_and_accommodation_expenses_16",
          label: "Gastos de búsqueda y rescate",
          is_customizable: false,
          limit: "Hasta 5.000 € por asegurado y 25.000 € por evento",
          sub_guarantees: []
        },
        {
          code: "home_help",
          label:
            "Ayuda de domicilio en caso de inmovilización u hospitalización del asegurado más de 5 días",
          is_customizable: false,
          base_price_percentage: 25,
          limit:
            "20 horas dentro de un período máximo de 30 días después de la fecha del evento",
          sub_guarantees: []
        }
      ],
      risks: [],
      travelers_breakdown: [],
      addon_code: "iberia_b2c_estudiantes_esp_single_trip_total_sport"
    }
  ],
  payment_modes: [
    {
      type: "BIZUM",
      provider: {
        id: "42fd6bab-dc2e-447b-ac67-23e38a22feab",
        label: "Redsys"
      }
    },
    {
      type: "CREDIT_CARD",
      provider: {
        id: "5e3413f2-7c07-43f1-93f7-fa9b3e3c3708",
        label: "Ingenico"
      }
    }
  ],
  risks: [],
  is_pre_contract_required: false
};
