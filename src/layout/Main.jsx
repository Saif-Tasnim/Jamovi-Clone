import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import SpreadSheetLayout from "../component/SpreadSheetLayout";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SpreadSheetLayout />
    </>
  );
};

export default Main;
