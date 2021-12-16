import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen'>
      <Head>
        <title>Metaverse Chalange</title>
        <link
          rel='icon'
          href='https://cdn.dribbble.com/users/2973/screenshots/16757947/media/c56c56d24f8c591ff753faa15ea4a033.png?compress=1&resize=400x300'
        />
      </Head>
      <h1>Welcome to the Metaverse Chalange</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
