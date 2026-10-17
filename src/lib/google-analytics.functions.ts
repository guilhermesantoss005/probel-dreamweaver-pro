import { createServerFn } from "@tanstack/react-start";

// GA4 measurement IDs are public browser configuration, not API credentials.
export const getGoogleAnalyticsConfig = createServerFn({ method: "GET" }).handler(() => {
  const measurementId = process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"]?.trim();
  if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) {
    return { measurementId: null };
  }
  return { measurementId };
});