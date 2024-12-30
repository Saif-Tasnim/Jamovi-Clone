import AnalysisMenu from "./component/AnalysisMenu";
import ModuleButton from "./component/ModuleButton";

const Analysis = () => {
    return (
        <div className="flex justify-between items-center h-20 bg-gray-100 px-5">
            <AnalysisMenu />
            <ModuleButton />
        </div>
    );
};

export default Analysis;