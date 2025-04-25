import './globals.css';

export const metadata = {
  title: "Les bonnes pratiques d'écoconception | Collectif Green IT",
  description: "Les bonnes pratiques d'écoconception pour Performance Web",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
