// Google Analytics types
declare global {
  interface Window {
    gtag: Gtag.Global;
    dataLayer: Record<string, any>[];
  }

  namespace Gtag {
    interface Gtag {
      (command: 'config', targetId: string, config?: ControlParams | EventParams | ConfigParams | any): void;
      (command: 'set', targetId: string, config: CustomParams | boolean | string): void;
      (command: 'set', config: CustomParams): void;
      (command: 'js', config: Date): void;
      (command: 'event', eventName: string, eventParams?: ControlParams | EventParams | CustomParams): void;
      (command: 'get', targetId: string, fieldName: FieldNames, callback: (field: string | any) => void): void;
      (command: 'consent', consentArg: string, params: ConsentParams): void;
    }

    interface ControlParams {
      groups?: string | string[];
      send_to?: string | string[];
      event_callback?: () => void;
      event_timeout?: number;
    }

    interface EventParams {
      checkout_option?: string;
      checkout_step?: number;
      content_id?: string;
      content_type?: string;
      coupon?: string;
      currency?: string;
      description?: string;
      fatal?: boolean;
      items?: Item[];
      method?: string;
      number?: string;
      promotions?: Promotion[];
      screen_name?: string;
      search_term?: string;
      shipping?: Currency;
      tax?: Currency;
      transaction_id?: string;
      value?: number;
      event_label?: string;
      event_category?: string;
    }

    type Currency = string | number;

    interface CustomParams {
      [key: string]: any;
    }

    interface ConfigParams {
      page_title?: string;
      page_path?: string;
      anonymize_ip?: boolean;
      allow_google_signals?: boolean;
      allow_ad_personalization_signals?: boolean;
      send_page_view?: boolean;
    }

    interface Item {
      brand?: string;
      category?: string;
      creative_name?: string;
      creative_slot?: string;
      id?: string;
      location_id?: string;
      name?: string;
      price?: Currency;
      quantity?: number;
    }

    interface Promotion {
      creative_name?: string;
      creative_slot?: string;
      id?: string;
      name?: string;
    }

    type FieldNames = 'client_id' | 'session_id' | 'g1' | string;

    interface ConsentParams {
      ad_personalization?: 'granted' | 'denied';
      ad_user_data?: 'granted' | 'denied';
      ad_storage?: 'granted' | 'denied';
      analytics_storage?: 'granted' | 'denied';
      region?: string[];
      wait_for_update?: number;
    }

    interface Global {
      (command: 'config', targetId: string, config?: ControlParams | EventParams | ConfigParams | any): void;
      (command: 'set', targetId: string, config: CustomParams | boolean | string): void;
      (command: 'set', config: CustomParams): void;
      (command: 'js', config: Date): void;
      (command: 'event', eventName: string, eventParams?: ControlParams | EventParams | CustomParams): void;
      (command: 'get', targetId: string, fieldName: FieldNames, callback: (field: string | any) => void): void;
      (command: 'consent', consentArg: string, params: ConsentParams): void;
    }
  }
}

export {};
