import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>Metaverse Chalange</title>
        <link
          rel='icon'
          href='https://cdn.dribbble.com/users/2973/screenshots/16757947/media/c56c56d24f8c591ff753faa15ea4a033.png?compress=1&resize=400x300'
        />
      </Head>

      <div className='max-w-screen-2xl mx-auto'>
        <Header />
        <Messages />
      </div>
    </div>
  );
}
