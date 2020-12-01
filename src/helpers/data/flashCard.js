import axios from 'axios';

const baseUrl = 'https://prept-template-6f65e.firebaseio.com/';

const getFlashCards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const createFlashCard = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

export default { getFlashCards, createFlashCard };
