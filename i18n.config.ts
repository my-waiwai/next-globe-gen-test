import type { Config } from "next-globe-gen";

const config: Config = {
  locales: ["en", "de"],
  defaultLocale: "en",
  messages: {
    originDir: "./public/messages",
  },
};

export default config;
