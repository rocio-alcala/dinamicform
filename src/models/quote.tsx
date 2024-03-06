export interface Quote {
    context: Record<string, string>;
    quote_expire_at: string;
    products: QuoteProduct[];
    addons?: any; //TO-DO: tipear addons
    payment_modes?: { type: string; provider: { id: string; label: string } }[];
    risks?: any;
    is_pre_contract_required?: boolean;
  }
  
  export interface QuoteProduct {
    quote_code: string;
    name: string;
    is_default_product?: boolean;
    prices?: {
      formula: string;
      total_taxes: number;
      country_taxes: any;
      guarantee_class_prices: any;
      payment_periodicities: any;
      included_commissions: any;
      price_after_discount_incl_tax: number;
      premium_after_discount_excl_tax: number;
      percentage_discount: number;
      total_discount: number;
    };
    attachments?: any;
    consents?: any;
    payment_difference_types?: any;
    disclaimers?: any;
    guarantees: Guarante[];
    addon_codes?: any;
    risks?: any;
    travelers_breakdown?: any;
    product_code?: string;
  }
  
  export interface Guarante {
    code: string;
    label: string;
    is_customizable: boolean;
    base_price_percentage?: number;
    headline?: string;
    limit?: string;
    sub_guarantees: any;
  }