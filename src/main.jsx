// Main entry point for the application
var React = require('react');
var ReactDOM = require('react-dom');
var InformationContainer = require('./components/InformationContainer.jsx');
var MetricsBanner = require('./components/MetricsBanner.jsx');
var PostOverview = require('./components/PostOverview.jsx')

ReactDOM.render(<InformationContainer />, document.getElementById('goals'));
ReactDOM.render(<MetricsBanner />, document.getElementById('metrics'));
ReactDOM.render(<PostOverview postBackground="#02A0D6" />, document.getElementById('post-1'));
ReactDOM.render(<PostOverview postBackground="#D364B7" />, document.getElementById('post-2'));
