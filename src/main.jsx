// Main entry point for the application
var React = require('react');
var ReactDOM = require('react-dom');
var InformationCell = require('./components/InformationCell.jsx')

ReactDOM.render(<InformationCell mainContent="20" mainLabel="New followers added this month" />, document.getElementById('goals'));
