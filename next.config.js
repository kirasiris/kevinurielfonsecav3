module.exports = {
	publicRuntimeConfig: {
		WEBSITE_NAME: "Kevin Uriel Fonseca",
		WEBSITE_DESCRIPTION: "Programmer, Geek, Gamer and now Soldier",
		PRODUCTION: true, // True when in public domain and False when in local domain
	},
	images: {
		domains: [
			"gravatar.com",
			"s3-us-west-1.amazonaws.com",
			"befreebucket-for-outputs.s3.amazonaws.com",
			"kevinurielfonseca.me",
		],
		// disableStaticImages: true,
	},
	reactStrictMode: true,
};
