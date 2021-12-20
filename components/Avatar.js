import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ username, logOutonPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className='rounded-full bg-black cursor-pointer hover:opacity-75'
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get('username')
      }.svg`}
      layout='fill'
      onClick={() => logOutonPress && logout()}
    />
  );
}

export default Avatar;
