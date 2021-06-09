import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCountries } from '../data/endpoint';
import moment from 'moment';
import Select from 'react-select';

const Statistic = () => {
  const [countries, setCountries] = useState([]);
  const [dataByCountry, setDataByCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('ID');
  console.log(dataByCountry);
  const options = countries?.map((c) => ({
    value: c.iso2,
    label: c.name,
  }));

  const handleSelectedCountry = (e) => {
    setSelectedCountry(e.value);
  };
  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data.countries);
    });

    try {
      axios
        .get(`https://covid19.mathdro.id/api/countries/${selectedCountry}`)
        .then((data) => {
          console.log('s', data.data);
          setDataByCountry(data.data);
        });
    } catch (error) {
      console.log(error.response);
    }
  }, [selectedCountry]);
  return (
    <div>
      <h1>Ini stat</h1>
      <Select
        className="px-6"
        options={options}
        onChange={handleSelectedCountry}
      />

      <div className="lg:w-3/5 sm:w-4/5 mx-auto p-8 text-center">
        {dataByCountry ? (
          <div>
            <table className="table-fixed">
              <thead className="text-sm">
                <tr>
                  <th className="w-1/4">Confirmed</th>
                  <th className="w-1/4">Recovered</th>
                  <th className="w-1/4">Deaths</th>
                  <th className="w-1/4">Last Update</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dataByCountry?.confirmed?.value}</td>
                  <td>{dataByCountry?.recovered?.value}</td>
                  <td>{dataByCountry?.deaths?.value}</td>
                  <td>{moment(dataByCountry?.lastUpdate).fromNow()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Statistic;
