/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const coreConfig = {
    images: {
        remotePatterns: [{ hostname: "utfs.io" }],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    compiler: {
        styledComponents: true
    },


    async rewrites() {
        return [
            {
                source: "/ingest/static/:path*",
                destination: "https://us-assets.i.posthog.com/static/:path*",
            },
            {
                source: "/ingest/:path*",
                destination: "https://us.i.posthog.com/:path*",
            },
        ];
    },
};

import { withSentryConfig } from "@sentry/nextjs";

const config = withSentryConfig(
    coreConfig,
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        // Suppresses source map uploading logs during build
        silent: true,
        org: "t3gg",
        project: "t3-gallery-video",
    },
    // @ts-ignore
    {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Transpiles SDK to be compatible with IE11 (increases bundle size)
        transpileClientSDK: true,

        // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
        // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
        // side errors will fail.
        tunnelRoute: "/monitoring",

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,

        // Enables automatic instrumentation of Vercel Cron Monitors.
        // See the following for more information:
        // https://docs.sentry.io/product/crons/
        // https://vercel.com/docs/cron-jobs
        automaticVercelMonitors: true,
    },

);

export default config;
// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// await import('./src/env.js')
//
// /** @type {import('next').NextConfig} */
// const coreConfig = {
//     images: {
//         remotePatterns: [
//             { hostname: 'utfs.io' },
//         ],
//     },
//     typescript: {
//         ignoreBuildErrors: true,
//     },
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// }
//
// import { withSentryConfig } from '@sentry/nextjs'
//
//
// export default config
//
//
// // Injected content via Sentry wizard below
//
// const { withSentryConfig } = require("@sentry/nextjs");
//
// module.exports = withSentryConfig(
//   module.exports,
//   {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options
//
//     org: "deepnarayan",
//     project: "t3todo",
//
//     // Only print logs for uploading source maps in CI
//     silent: !process.env.CI,
//
//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
//
//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,
//
//     // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//     // This can increase your server load as well as your hosting bill.
//     // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//     // side errors will fail.
//     // tunnelRoute: "/monitoring",
//
//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,
//
//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,
//
//     // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
//     // See the following for more information:
//     // https://docs.sentry.io/product/crons/
//     // https://vercel.com/docs/cron-jobs
//     automaticVercelMonitors: true,
//   }
// );
