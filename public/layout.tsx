import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: 'Whatsapp Linker',
  description: 'Generador de links de whatsapp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className="container-fluid vh-100 text-center"
        style={{
          background:
            'linear-gradient(0deg, rgba(220,248,198,1) 0%, rgba(7,94,84,1) 100%)',
        }}
      >
        {children}
      </body>
    </html>
  );
}
