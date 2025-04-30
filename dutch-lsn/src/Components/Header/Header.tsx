import { UserIcon } from "../Icon/UserIcon";

export const Header = () => {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-semibold">Dutch lessons schedule</h1>
        </div>
        <div className="flex gap-2 items-center">
          <button className="border border-gray-400 rounded py-2.5 px-3  hover:bg-gray-100 transition">
            <UserIcon />
          </button>
          <button className="border border-gray-400 rounded py-2 h px-3 hover:bg-gray-100 transition">
            Login
          </button>
          <button className="border border-gray-400 rounded py-2 h px-3 hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
