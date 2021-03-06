import React, { useState, useEffect } from "react";
import { getVaksin } from "../../data/endpoint";
import { commafy } from "../../utils/commafy";

const Vaksin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getVaksin().then((data) => setData(data));
  });

  return (
    <div>
      <h1 className="text-center my-10 text-3xl">Vaksin</h1>
      {data ? (
        <div className="text-center m-8 mt-0 lg:w-3/5 w-5/6 mx-auto shadow-lg rounded-lg pb-8">
          <div className="bg-blue-400 text-white py-4 rounded-t-lg mb-4">
            <h1>Total Sasaran</h1>
            <h2>{commafy(data.totalsasaran)}</h2>
          </div>

          <div className="grid grid-cols-3 mb-4">
            <div>
              <h1>Lansia</h1>
              <h2>{commafy(data.sasaranvaksinlansia)}</h2>
            </div>
            <div>
              <h1>Petugas Publik</h1>
              <h2>{commafy(data.sasaranvaksinpetugaspublik)}</h2>
            </div>
            <div>
              <h1>SDMK</h1>
              <h2>{commafy(data.sasaranvaksinsdmk)}</h2>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h1>Vaksinasi 1</h1>
              <p>{commafy(data.vaksinasi1)}</p>
            </div>
            <div>
              <h1>Vaksinasi 2</h1>
              <p>{commafy(data.vaksinasi2)}</p>
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
