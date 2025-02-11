
type EventNames = 
  | 'waitlist_join'
  | 'button_click'
  | 'section_view'
  | 'scroll_milestone'
  | 'navigation_click'
  | 'social_card_click'
  | 'form_start'
  | 'form_complete';

interface AnalyticsEvent {
  eventName: EventNames;
  properties?: Record<string, any>;
}

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js' | 'set',
      eventName: string,
      eventParameters?: any
    ) => void;
  }
}

// Main tracking function
export const trackEvent = ({ eventName, properties = {} }: AnalyticsEvent) => {
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Scroll depth tracking
export const initScrollTracking = () => {
  let milestones = new Set([25, 50, 75, 100]);
  let tracked = new Set<number>();

  const calculateScrollPercentage = () => {
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    return Math.round((scrollPosition / documentHeight) * 100);
  };

  const handleScroll = () => {
    const scrollPercentage = calculateScrollPercentage();
    
    milestones.forEach(milestone => {
      if (scrollPercentage >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        trackEvent({
          eventName: 'scroll_milestone',
          properties: { percentage: milestone }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

// Navigation tracking
export const trackNavigation = (sectionName: string) => {
  trackEvent({
    eventName: 'navigation_click',
    properties: { section: sectionName }
  });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent({
    eventName: 'button_click',
    properties: { button: buttonName, location }
  });
};

// Waitlist form tracking
export const trackWaitlistForm = (status: 'start' | 'complete', email?: string) => {
  trackEvent({
    eventName: status === 'start' ? 'form_start' : 'form_complete',
    properties: {
      form: 'waitlist',
      ...(email && { email_domain: email.split('@')[1] })
    }
  });
};

// Social card interaction tracking
export const trackSocialCardClick = (platform: string) => {
  trackEvent({
    eventName: 'social_card_click',
    properties: { platform }
  });
};
