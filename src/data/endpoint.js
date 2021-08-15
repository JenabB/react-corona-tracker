import CONFIG from "./config";

// get kumulatif covid
export const getKumulatif = async () => {
  let url = `${CONFIG.BASE_URL}`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

//get data vaksin
export const getVaksin = async () => {
  const url = `${CONFIG.VAKSIN}`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.response));
};

//get all provinsi
export const getProvinsi = async () => {
  const url = `${CONFIG.GET_ALL_PROVINSI}`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.response));
};

//get all kota
export const getKota = async (provinsi) => {
  const url = `${CONFIG.GET_ALL_KOTA}${provinsi}`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.response));
};

//get all hospital
//provinceid=51prop&cityid=5171&type=1
export const getHospital = async (provinsi, kota, type) => {
  const url = `${CONFIG.GET_ALL_HOSPITAL}${provinsi}&cityid=${kota}&type=${type}`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.response));
};
