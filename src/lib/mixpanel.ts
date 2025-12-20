import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '33f3c8cff1e76f375778b5962a0c0d33';

let isInitialized = false;

export const initMixpanel = (callback?: () => void) => {
    if (typeof window === 'undefined') return;

    if (isInitialized) {
        callback?.();
        return;
    }

    if (MIXPANEL_TOKEN) {
        mixpanel.init(MIXPANEL_TOKEN, {
            debug: process.env.NODE_ENV === 'development',
            track_pageview: false, // We'll track manually
            persistence: 'localStorage',
            loaded: () => {
                isInitialized = true;
                console.log('[Mixpanel] Initialized successfully');
                callback?.();
            }
        });
    } else {
        console.warn('Mixpanel token not found. Analytics disabled.');
    }
};

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isInitialized) {
        console.log('[Mixpanel] Not initialized, event not sent:', eventName, properties);
        return;
    }
    console.log('[Mixpanel] Tracking:', eventName, properties);
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
    campaign: string,
    callback?: () => void
) => {
    if (!isInitialized) {
        console.log('[Mixpanel] Not initialized, redirecting immediately');
        callback?.();
        return;
    }

    mixpanel.track('Store Button Clicked', {
        store,
        source,
        campaign,
        timestamp: new Date().toISOString(),
    }, {
        send_immediately: true
    }, () => {
        console.log('[Mixpanel] Store button click tracked, redirecting...');
        callback?.();
    });
};

export const trackDownloadPageViewed = (source: string, campaign: string) => {
    trackEvent('Download Page Viewed', {
        source,
        campaign,
        timestamp: new Date().toISOString(),
    });
};
