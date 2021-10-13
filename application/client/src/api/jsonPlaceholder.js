import axios from "axios";

// From the Mastering JS website https://masteringjs.io
// The axios.create() function creates a new Axios instance. When you require('axios'), you get back an[sic] the default Axios instance.
// The reason why you would create an instance is to set custom defaults for your application.
// Another common use case is setting the baseURL for all requests. This is convenient so you don't have to type out the absolute URL every time.

// const axios = require('axios').create({
//   baseURL: 'https://httpbin.org'
// });

// // Sends request to 'https://httpbin.org/get' 
// const res = await axios.get('/get?hello=world');



export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})