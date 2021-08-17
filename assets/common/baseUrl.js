import { Platform } from 'react-native'

//let baseURL = 'https://easy-shop-test.azurewebsites.net/api/v1/';

let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'http://6b901bd03946.ngrok.io/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/'
}



export default baseURL;
