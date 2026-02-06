import { Urbanist } from "next/font/google";

export const gopher = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-gopher",
});
