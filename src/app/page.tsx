import { FaGithub, FaWhatsapp } from 'react-icons/fa';

import WaForm from '@/components/form';
import { DATA } from '../data';
import clsx from 'clsx';
import { lusitana } from '@/fonts/fonts';
import Link from 'next/link';

export const metadata = {
  title: 'Whatsapp Linker',
  description:
    'La forma más fácil de de contactar a tus clientes por whatsapp, sin tener que guardar sus contactos.',
};

const IndexPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="my-auto">
        <h1 className={'text-white'}>
          Ir al chat <FaWhatsapp />
        </h1>
        <WaForm />
      </div>
      <div className="mx-2 my-2 d-flex align-items-end justify-content-end text-end font-monospace fw-light">
        <small>
          {`Desarrollado por `}
          <Link
            href="https://enrique.digital"
            className="text-decoration-none"
          >{`Enrique Gimenez `}</Link>
          <FaGithub />
        </small>
      </div>
    </div>
  );
};

export default IndexPage;
