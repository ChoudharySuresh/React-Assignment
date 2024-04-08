import { tableHeding, tableData } from "../../Utils/Constant";
const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto h-[20rem]">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-black">
            <tr>
              {tableHeding.map((item) => {
                return (
                  <th key={item.id} scope="col" className="px-3 py-2">
                    <div
                      className={`flex flex-col gap-2 ${
                        item.id === 1 ? `items-start px-4` : `items-end`
                      }`}
                    >
                      <h1>{item.name}</h1>
                      <p>{item.views}</p>
                      <img src={item.chart} />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => {
              return (
                <tr key={item.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.name}
                  </th>
                  <td className="text-[0.7rem] text-end">{item.pageViews}</td>
                  <td className="text-[0.7rem] text-end">
                    {item.uniquePageViews}
                  </td>
                  <td className="text-[0.7rem] text-end">
                    {item.avgTimeOnPage}
                  </td>
                  <td className="text-[0.7rem] text-end">{item.extrances}</td>
                  <td className="text-[0.7rem] text-end">{item.exit}</td>
                  <td className="text-[0.7rem] text-end">{item.pageValue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
