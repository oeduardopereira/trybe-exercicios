import { log } from 'console';
import fetch from 'node-fetch';

fetch('https://dummyjson.com/quotes/random')
    .then((response) => console.log(response));

fetch("https://api.goprogram.ai/inspiration")
  .then(response => console.log(response.json()))
  .then(data => console.log(`"${data.quote}" | ${data.author}`));
