const currentEnv = import.meta.env.VITE_CURRENT_ENV || "development";

const config = {
  development: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL_DEV,
    APP_ENV: import.meta.env.VITE_APP_ENV_DEV || "development",
  },
  production: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL_PROD,
    APP_ENV: import.meta.env.VITE_APP_ENV_PROD || "production",
  },
  staging: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL_STAGING,
    APP_ENV: import.meta.env.VITE_APP_ENV_STAGING || "staging",
  },
};


const currentConfig = config[currentEnv];


if (!currentConfig || !currentConfig.API_BASE_URL) {
  console.error(
    `❌ Invalid environment or missing API_BASE_URL: ${currentEnv}`
  );
  console.error("Available environments:", Object.keys(config));
}

console.log(
  `🚀 Running in ${currentEnv} mode with API: ${currentConfig?.API_BASE_URL}`
);

export default currentConfig;
export const API_BASE_URL = currentConfig?.API_BASE_URL || "";
export const APP_ENV = currentConfig?.APP_ENV || "development";
