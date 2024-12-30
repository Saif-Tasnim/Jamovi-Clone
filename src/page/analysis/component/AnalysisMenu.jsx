import growth from "../../../assets/growth.png";
import effect from "../../../assets/effect.png";
import frequency from "../../../assets/frequency.png";
import regression from "../../../assets/regression.png";
import t_test from "../../../assets/comparison.png";
import anova from "../../../assets/fasting-time.png";

const AnalysisMenu = () => {
  return (
    <div className="flex items-center gap-8">
      <button className="flex flex-col items-center gap-2">
        <img src={growth} alt="exploration" className="w-6 h-6" />
        <p className="text-sm">Exploration</p>
      </button>
      <button className="flex flex-col items-center gap-2">
        <img src={t_test} alt="T-Test" className="w-6 h-6" />
        <p className="text-sm">T_Tests</p>
      </button>
      <button className="flex flex-col items-center gap-2">
        <img src={anova} alt="Anova" className="w-6 h-6" />
        <p className="text-sm">Anova</p>
      </button>
      <button className="flex flex-col items-center gap-2">
        <img src={regression} alt="regression" className="w-6 h-6" />
        <p className="text-sm">Regression</p>
      </button>
      <button className="flex flex-col items-center gap-2">
        <img src={frequency} alt="frequency" className="w-6 h-6" />
        <p className="text-sm">Frequency</p>
      </button>
      <button className="flex flex-col items-center gap-2">
        <img src={effect} alt="effect" className="w-6 h-6" />
        <p className="text-sm">Factor</p>
      </button>
    </div>
  );
};

export default AnalysisMenu;
