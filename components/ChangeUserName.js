import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import Modal from './Modal';

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='text-sm absolute top-5 right-5'>
        {!isOpen && (
          <button
            className='hover:text-pink-700'
            onClick={() => setIsOpen(true)}>
            Change your Username
          </button>
        )}

        {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      </div>
    </>
  );
}

export default ChangeUserName;
