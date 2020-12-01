import axios from 'axios';

const baseUrl = 'https://prept-template-6f65e.firebaseio.com/';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

export default { getQuestions };
