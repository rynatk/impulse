import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import App from './components/App.jsx';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

const Browser_API_Key_1 = 'AIzaSyCxguGbtEDDai2iyvvbtrBjDwFojAVwctc';

$(() => {
  console.log('hello!');
  let router = new Router();

  ReactDOM.render(
    <App router={router} />,
    document.getElementById('app')
  );
});
