import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className='bg-black relative'>
      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-6'>
        <Image
          className='object-cover rounded-full'
          src='https://cdn.dribbble.com/users/1787323/screenshots/11427608/media/8fda96ec0ca9b0477fbd612f709e5c37.png?compress=1&resize=400x300'
          width={200}
          height={200}
        />
        <button
          onClick={authenticate}
          className='bg-cyan-400 rounded-lg p-5 font-bold animate-pulse'>
          Login to the METAVERSE
        </button>
      </div>

      <div className='w-full h-screen relative'>
        <Image src='/background.jpg' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
}

export default Login;
