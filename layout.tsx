import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Tempora Mail — Fast. Private. Temporary.',
  description: 'A clean temporary email demo. Real email reception requires provider and domain configuration.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
