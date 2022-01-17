import axios from 'axios';

export default axios.create({
  baseURL: 'https://images-api.nasa.gov/',
  headers: {
    Authorization: `${process.env.NASA_KEY}`
  }
});
