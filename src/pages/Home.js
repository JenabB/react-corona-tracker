import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCountries } from '../data/endpoint';

import moment from 'moment';

const Home = () => {
  const [data, setData] = useState([]);
  const [dataCountries, setDataCountries] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://covid19.mathdro.id/api').then((data) => {
        setData(data.data);
      });
    } catch (error) {
      console.log(error.response);
    }

    try {
      axios.get(`https://covid19.mathdro.id/api/countries`).then((data) => {
        console.log('s', data.data);
        setDataCountries(data.data);
      });
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <div className="wow">
      <div
        className="bg-green-400 lg:rounded-b-full sm:rounded-b-xl pt-4 px-10"
        style={{ height: '200px' }}
      >
        <h1 className="text-center font-bold text-white mb-4">
          Corona Tracker
        </h1>
        {data ? (
          <div className="grid grid-cols-3 text-center text-white">
            <div className="shadow rounded-lg mx-3 bg-blue-400 py-6">
              <h1>Confirmed</h1>
              <h2 className="">{data.confirmed?.value}</h2>
            </div>
            <div className="shadow rounded-lg mx-3 bg-yellow-400 py-6">
              <h1>Recovered</h1>
              <h2>{data.recovered?.value}</h2>
            </div>
            <div className="shadow rounded-lg mx-3 bg-red-400 py-6">
              <h1>Deaths</h1>
              <h2>{data.deaths?.value}</h2>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
