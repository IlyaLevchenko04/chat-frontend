import { Link } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "@shared/hooks/redux";
import { ROUTER_BOOK } from "@shared/constants/router-book";
import { logout } from "@redux/user-slice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="p-[16px] flex gap-2 h-[70px] items-center justify-between">
      <Link to={ROUTER_BOOK.root} className="[&.active]:font-bold">
        Home
      </Link>

      {user && (
        <div>
          <p>Hello, {user.name}</p>
          <button
            className="w-full p-[4px] bg-blue-500 text-white text-[12px] rounded-md hover:bg-blue-600 transition"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};
