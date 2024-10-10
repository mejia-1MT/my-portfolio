/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Existing SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // New loader for PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]", // Keep the original file name and extension
            outputPath: "static/", // Output directory for the files
            publicPath: "/_next/static/", // Public URL of the output directory
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
