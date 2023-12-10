import clsx from 'clsx';

import { lusitana } from '@/fonts/fonts';

import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
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
        className={clsx([
          'container-fluid vh-100 text-center',
          lusitana.className,
        ])}
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
