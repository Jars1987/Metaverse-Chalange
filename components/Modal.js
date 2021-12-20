import { useRef } from 'react';
import { useMoralis } from 'react-moralis';

function Modal({ closeModal }) {
  const inputRef = useRef(null);
  const { setUserData } = useMoralis();

  const changeName = () => {
    if (!inputRef.current.value) return;
    setUserData({
      username: inputRef.current.value,
    });
    closeModal();
  };

  return (
    <div className=' w-72 sm:w-80 lg:w-96 rounded-md'>
      <div className=' flex flex-col items-center'>
        <input
          ref={inputRef}
          type='text'
          className='m-5 px-5 py-2  bg-pink-100 rounded-md outline-none text-center font-bold w-48 sm:w-72 lg:w-80 '
          placeholder='New Username'
        />
        <button
          onClick={changeName}
          className='mt-2 bg-fuchsia-700 text-white px-5 py-2 m-5 w-48 sm:w-72 lg:w-80 rounded-md opacity-60 hover:opacity-100 transition ease-in hover:transform hover:scale-105'>
          Submit
        </button>
        <p
          className='cursor-pointer'
          onClick={() => {
            closeModal();
          }}>
          Cancel
        </p>
      </div>
    </div>
  );
}

export default Modal;
