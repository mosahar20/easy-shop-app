import { Platform } from 'react-native'

// let baseURL = 'https://easy-shop-server1000.herokuapp.com/api/v1/';

let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'http://9b3e-2a02-c7d-31de-9000-1c9b-6aed-96e-ad47.ngrok.io/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/'
}



export default baseURL;





