import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempora Mail — Temporary Email",
  description: "A temporary email interface. Demo mode until an inbound email provider is configured.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
