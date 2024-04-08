import { currencyGraphData } from "../../Utils/Constant";
import CurrencyCard from "./CurrencyCard";
const CurrencyGraph = () => {
  return (
    <section className="my-6">
      <div className="flex items-center flex-wrap gap-6">
        {currencyGraphData.map((item) => {
          return <CurrencyCard data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default CurrencyGraph;
