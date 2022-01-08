module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    googleMapsApi: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
};
