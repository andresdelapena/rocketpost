
// Analytics utility functions
interface EventParams {
  [key: string]: string | number | boolean;
}

export const trackEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

export const trackPageView = (page_title: string, page_path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title,
      page_path,
      send_to: 'G-M444WRK2KP'
    });
  }
};

export const trackScroll = (depth: number) => {
  trackEvent('scroll_depth', { depth });
};

export const trackSocialCardClick = (platform: string) => {
  trackEvent('social_card_click', { platform });
};

export const trackCTAClick = (button_text: string, button_location: string) => {
  trackEvent('cta_click', { button_text, button_location });
};
