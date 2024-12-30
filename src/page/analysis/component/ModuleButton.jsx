import add from "../../../assets/add.png";

const ModuleButton = () => {
  return (
    <>
      <button className="flex flex-col items-center gap-2">
        <img src={add} alt="Module" className="w-6 h-6"/>
        <p className="text-sm">Module</p>
      </button>
    </>
  );
};

export default ModuleButton;
