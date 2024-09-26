/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "uncannyxmen.net",
				port: "",
				pathname: "/sites/**",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/cards/",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{
						key: "Access-Control-Allow-Origin",
						value: "https://uncannyxmen.net",
					},
					{ key: "Access-Control-Allow-Methods", value: "GET" },
					{
						key: "Access-Control-Allow-Headers",
						value:
							"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
