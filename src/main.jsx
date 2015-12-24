// Main entry point for the application
var React = require('react');
var ReactDOM = require('react-dom');
var InformationContainer = require('./components/InformationContainer.jsx');
var MetricsBanner = require('./components/MetricsBanner.jsx');

ReactDOM.render(<InformationContainer />, document.getElementById('goals'));
ReactDOM.render(<MetricsBanner />, document.getElementById('metrics'));
