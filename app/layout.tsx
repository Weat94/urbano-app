export const metadata = {
  title: 'Urbano',
  description: 'Signale les contrôleurs en temps réel dans les transports parisiens',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body>{children}</body>
    </html>
  );
}

