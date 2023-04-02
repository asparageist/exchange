import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from '.js/template.js';

function getRates () {
  const url = `https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/latest/{nation}`
}