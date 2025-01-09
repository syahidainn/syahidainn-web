import { Libre_Baskerville, Libre_Caslon_Text } from "next/font/google";

export const libre_baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-libre_baskerville",
});

export const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-libre_caslon_text",
});
