import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/apidata/ApiData';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
