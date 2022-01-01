import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const APP_NAME = publicRuntimeConfig.WEBSITE_NAME;
export const APP_DESCRIPTION = publicRuntimeConfig.WEBSITE_DESCRIPTION;
export const API_URL = publicRuntimeConfig.PRODUCTION
	? "https://kevinurielfonseca.me"
	: "http://localhost:5000";
export const PUBLIC_URL = publicRuntimeConfig.PRODUCTION
	? "kevinurielfonseca.vercel.app"
	: "http://localhost:3000";
export const KEVINFONSECA_URL = "https://kevinurielfonseca.me/";
