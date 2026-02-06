import { gopher } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Maya Reynolds, PsyD",
  description: "Licensed Clinical Psychologist (Fictional Therapist)",
  icons: {
    icon: "/maya-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gopher.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
