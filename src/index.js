import React from 'react';
import ReactDOM from 'react-dom';
import DotEnv from 'dotenv';
import App from './App';

DotEnv.config();

ReactDOM.render(<App />, document.getElementById('root'));
