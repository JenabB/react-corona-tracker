import { useState, useEffect } from "react";
import { getKumulatif } from "../../data/endpoint";
import { commafy } from "../../utils/commafy";

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getKumulatif().then((data) => setData(data));
  });

  return (
    <header>
      <div
        className="bg-green-400 lg:rounded-b-full sm:rounded-b-xl pt-4 px-10"
        style={{ height: "250px" }}
      >
        <h1 className="text-center font-bold text-2xl text-white mb-8">
          Corona Tracker
        </h1>
        {data ? (
          <div>
            <div className="grid grid-cols-4 text-center text-white">
              <div className="shadow rounded-lg mx-3 bg-blue-400 py-6">
                <h1>Confirmed</h1>
                <h2 className="">{commafy(data.positif)}</h2>
              </div>
              <div className="shadow rounded-lg mx-3 bg-green-500 py-6">
                <h1>Recovered</h1>
                <h2>{commafy(data.sembuh)}</h2>
              </div>
              <div className="shadow rounded-lg mx-3 bg-yellow-400 py-6">
                <h1>Dirawat</h1>
                <h2>{commafy(data.dirawat)}</h2>
              </div>
              <div className="shadow rounded-lg mx-3 bg-red-400 py-6">
                <h1>Deaths</h1>
                <h2>{commafy(data.meninggal)}</h2>
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
