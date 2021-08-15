import { useState, useEffect } from "react";
import { getKumulatif } from "../../data/endpoint";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getKumulatif().then((data) => setData(data));
  });

  return (
    <header>
      <div
        className="bg-green-400 lg:rounded-b-full sm:rounded-b-xl pt-4 px-10"
        style={{ height: "200px" }}
      >
        <h1 className="text-center font-bold text-white mb-4">
          Corona Tracker
        </h1>
        {data ? (
          <div>
            <div>
              <h1>Last update</h1>
            </div>
            <div className="grid grid-cols-4 text-center text-white">
              <div className="shadow rounded-lg mx-3 bg-blue-400 py-6">
                <h1>Confirmed</h1>
                <h2 className="">{data.positif}</h2>
              </div>
              <div className="shadow rounded-lg mx-3 bg-green-500 py-6">
                <h1>Recovered</h1>
                <h2>{data.sembuh}</h2>
              </div>
              <div className="shadow rounded-lg mx-3 bg-yellow-400 py-6">
                <h1>Dirawat</h1>
                <h2>{data.dirawat}</h2>
              </div>
              <div className="shadow rounded-lg mx-3 bg-red-400 py-6">
                <h1>Deaths</h1>
                <h2>{data.meninggal}</h2>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </header>
  );
};

export default Header;
