import axios from 'axios';

axios.get('http://localhost:8000//lessons/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was an error!', error);
  });