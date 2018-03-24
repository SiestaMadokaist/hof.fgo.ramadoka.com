const firebaseConfig = {
  apiKey: 'AIzaSyDrm4X3SOicSQx8obbg85cPY_69zS8WZGw',
  databaseUrl: 'https://fgo-ramadoka-com.firebaseio.com',
  authDomain: 'fgo-ramadoka-com.firebaseapp.com',
  projectId: 'fgo-ramadoka-com',
  messagingSenderId: '618702326185'
};

const configDevOffice = {
  API_HOST: 'http://10.20.254.88:3030',
  IMAGE_HOST: 'http://10.20.254.88:8000',
  firebase: firebaseConfig,
};

const configDevHome = {
  API_HOST: 'http://192.168.1.101:3030',
  IMAGE_HOST: 'http://192.168.1.101:8000',
  firebase: firebaseConfig,
};

const configDev = {
  API_HOST: 'http://localhost:3030',
  IMAGE_HOST: 'http://localhost:8000',
  firebase: firebaseConfig,
};

const configProd = {
  API_HOST: 'https://fgo.ramadoka.com',
  IMAGE_HOST: 'https://fgo.ramadoka.com',
  firebase: firebaseConfig,
};

module.exports = configDev;
