/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

const SideBar = ({ setSideBar }) => {
  return (
    <div className="absolute top-0 left-0 w-56 h-screen z-50">
      <div className="h-20 bg-blue-500 flex justify-center items-center gap-7">
        <RxCross1
          className="w-8 h-8 cursor-pointer"
          onClick={() => setSideBar(false)}
        />
        <h1 className="text-white font-bold px-3 py-1 text-3xl">Jamovi</h1>
      </div>

      <div className="h-full bg-blue-50 pl-6 text-black pt-8">
        <ul className="flex flex-col space-y-5">
          <li className="hover:underline cursor-pointer">New</li>
          <li className="hover:underline cursor-pointer">Open</li>
          <li className="hover:underline cursor-pointer">Special Import</li>
          <li className="hover:underline cursor-pointer">Save</li>
          <li className="hover:underline cursor-pointer">Save As</li>
          <li className="hover:underline cursor-pointer">Export</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
