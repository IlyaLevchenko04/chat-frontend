import { Link } from '@tanstack/react-router';
import { useAppSelector } from '../../hooks/redux';

export const Header = () => {
  const user = useAppSelector(state => state.user);

  return (
    <header className="p-2 flex gap-2 h-[70px]">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>

      {user.user && (
        <div>
          <p>Hello, {user.user.name}</p>
        </div>
      )}
    </header>
  );
};
