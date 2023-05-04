import { Nunito } from 'next/font/google';

import './globals.css';

// Components
import ClientOnly from './components/ClientOnly';
import NavBar from './components/navbar/NavBar';

import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />

          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />

          <NavBar currentUser={currentUser} />
        </ClientOnly>

        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
