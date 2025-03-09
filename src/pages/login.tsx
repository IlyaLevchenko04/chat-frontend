import { useState } from 'react';
import { useAppDispatch } from '../shared/hooks/redux';
import { setAnonymus, setUser } from '../redux/user-slice';
import { useRouter } from '@tanstack/react-router';
import { ROUTER_BOOK } from '../constants/router-book';

export const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [nickname, setNickname] = useState('');

  const handleLogin = () => {
    dispatch(setUser(nickname));
    router.navigate({ to: ROUTER_BOOK.root });
  };

  const handleAnonymus = () => {
    dispatch(setAnonymus(true));
    router.navigate({ to: ROUTER_BOOK.root });
  };

  return (
    <div className="fixed top-[71px] inset-0 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-6 p-6 w-full max-w-sm border border-gray-300 rounded-xl bg-white shadow-md">
        <h2 className="text-lg font-semibold text-center">Welcome to Chat</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        <div className="flex flex-col gap-3">
          <button
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
            Continue as {nickname || 'Anonymous'}
          </button>
          <button
            className="w-full p-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
            onClick={handleAnonymus}
          >
            Stay Anonymous
          </button>
        </div>
      </div>
    </div>
  );
};
