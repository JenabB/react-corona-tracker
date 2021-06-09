import CONFIG from './config';

export const getCountries = async () => {
  let url = `${CONFIG.BASE_URL}/countries`;
  return fetch(url)
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
