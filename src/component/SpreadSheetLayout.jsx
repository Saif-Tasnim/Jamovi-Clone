import GridSheet from "./GridSheet";

const SpreadSheetLayout = () => {
  return (
    <div className="flex h-[90vh] py-1">
      <GridSheet />
      <div className="flex items-center justify-center flex-1 bg-white">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500">V</div>
          <div className="text-gray-500">version 2.6.19</div>
        </div>
      </div>
    </div>
  );
};

export default SpreadSheetLayout;
