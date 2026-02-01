import { gopher } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Maya Reynolds, PsyD",
  description: "Licensed Clinical Psychologist (Fictional Therapist)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gopher.variable}>
      <body className="font-gopher antialiased">{children}</body>
    </html>
  );
}
