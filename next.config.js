module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    googleMapsApi: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    emailServiceApi: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    emailTemplateApi: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    emailUserApi: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
  },
};
