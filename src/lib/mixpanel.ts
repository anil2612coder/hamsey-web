import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '33f3c8cff1e76f375778b5962a0c0d33';

let isInitialized = false;

export const initMixpanel = () => {
    if (isInitialized || typeof window === 'undefined') return;

    if (MIXPANEL_TOKEN) {
        mixpanel.init(MIXPANEL_TOKEN, {
            debug: process.env.NODE_ENV === 'development',
            track_pageview: true,
            persistence: 'localStorage',
        });
        isInitialized = true;
    } else {
        console.warn('Mixpanel token not found. Analytics disabled.');
    }
};

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isInitialized) {
        console.log('[Mixpanel Mock]', eventName, properties);
        return;
    }
    mixpanel.track(eventName, properties);
};

export const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    trackEvent('Page Viewed', {
        page: pageName,
        ...properties,
    });
};

// Specific tracking functions for download page
export const trackStoreButtonClicked = (
    store: 'app_store' | 'play_store',
    source: string,
    campaign: string
) => {
    trackEvent('Store Button Clicked', {
        store,
        source,
        campaign,
        timestamp: new Date().toISOString(),
    });
};

export const trackDownloadPageViewed = (source: string, campaign: string) => {
    trackEvent('Download Page Viewed', {
        source,
        campaign,
        timestamp: new Date().toISOString(),
    });
};
