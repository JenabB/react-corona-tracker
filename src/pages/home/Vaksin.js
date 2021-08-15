import React, { useState, useEffect } from "react";
import { getVaksin } from "../../data/endpoint";
const Vaksin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVaksin().then((data) => setData(data));
  });

  return (
    <div>
      {data ? (
        <div className="text-center m-8 lg:w-3/5 w-5/6 mx-auto shadow-lg rounded-lg pb-8">
          <div className="bg-blue-400 text-white py-4 rounded-t-lg mb-4">
            <h1>Total Sasaran</h1>
            <h2>{data.totalsasaran}</h2>
          </div>

          <div className="grid grid-cols-3 mb-4">
            <div>
              <h1>Lansia</h1>
              <h2>{data.sasaranvaksinlansia}</h2>
            </div>
            <div>
              <h1>Petugas Publik</h1>
              <h2>{data.sasaranvaksinpetugaspublik}</h2>
            </div>
            <div>
              <h1>SDMK</h1>
              <h2>{data.sasaranvaksinsdmk}</h2>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h1>Vaksinasi 1</h1>
              <p>{data.vaksinasi1}</p>
            </div>
            <div>
              <h1>Vaksinasi 2</h1>
              <p>{data.vaksinasi2}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Vaksin;
