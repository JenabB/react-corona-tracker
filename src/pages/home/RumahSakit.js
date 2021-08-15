import React, { useState, useEffect } from "react";
import { getProvinsi, getKota, getHospital } from "../../data/endpoint";
import Select from "react-select";

const RumahSakit = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [selectedProv, setSelectedProv] = useState("");
  const [kota, setKota] = useState([]);
  const [selectedKota, setSelectedKota] = useState("");
  const [type] = useState(1);
  const [hospitals, setHospitals] = useState([]);

  const provinsiOptions = provinsi.map((d) => ({ label: d.name, value: d.id }));
  const kotaOptions = kota.map((d) => ({ label: d.name, value: d.id }));

  useEffect(() => {
    getProvinsi().then((data) => setProvinsi(data.provinces));
    getKota(selectedProv).then((data) => setKota(data.cities));
    getHospital(selectedProv, selectedKota, type).then((data) =>
      setHospitals(data.hospitals)
    );
  }, [selectedKota, selectedProv, type]);

  return (
    <div className="mt-10 p-6 shadow-lg bg-gray-200">
      <h1 className="text-center text-3xl mb-8">Rumah Sakit</h1>
      <div className="grid grid-cols-2 w-3/4 mx-auto">
        <div className="mx-5">
          <label>Provinsi</label>
          <Select
            options={provinsiOptions}
            onChange={(e) => setSelectedProv(e.value)}
          />
        </div>
        <div className="mx-5">
          <label>Kota</label>
          <Select
            options={kotaOptions}
            onChange={(e) => setSelectedKota(e.value)}
          />
        </div>
      </div>

      <div className="mt-10">
        {hospitals ? (
          <div className="grid lg:grid-cols-3">
            {hospitals.map((h) => (
              <div className="bg-white shadow m-2 p-4 rounded">
                <h1>{h.address}</h1>
                <h1>{h.bed_availability}</h1>
                <h1>{h.info}</h1>
                <h1>{h.name}</h1>
                <h1>{h.phone}</h1>
                <h1>{h.queue}</h1>
              </div>
            ))}
          </div>
        ) : (
          <h1>Loading..</h1>
        )}
      </div>
    </div>
  );
};

export default RumahSakit;
