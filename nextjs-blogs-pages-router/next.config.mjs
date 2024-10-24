const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isDev && {
    env: {
      MONGODB_URI:
        "mongodb+srv://harshit:QcN125pQlQGYmkrT@cluster0.kglxu6p.mongodb.net/my-blogs-dev?retryWrites=true&w=majority&appName=Cluster0",
    },
  }),
  ...(isProd && {
    env: {
      MONGODB_URI:
        "mongodb+srv://harshit:QcN125pQlQGYmkrT@cluster0.kglxu6p.mongodb.net/my-blogs?retryWrites=true&w=majority&appName=Cluster0",
    },
  }),
};

export default nextConfig;
