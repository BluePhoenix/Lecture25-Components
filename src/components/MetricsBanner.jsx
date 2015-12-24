var React = require('react');
var InformationCell = require('./InformationCell.jsx');

var MetricsBanner = React.createClass({
  render: function() {
    var containerStyle = {
      marginTop: 16,
      marginBottom: 16
    }

    return (
      <div className="row" style={containerStyle}>
        <div className="col-sm-12">
          <InformationCell mainContent="1.5k" mainLabel="New visitors" />
        </div>
        <div className="col-sm-12">
          <InformationCell mainContent="50%" mainLabel="Bounce Rate" />
        </div>
        <div className="col-sm-12">
          <InformationCell mainContent="28%" mainLabel="Searches" />
        </div>
        <div className="col-sm-12">
          <InformationCell mainContent="140.5 kb" mainLabel="Traffic" />
        </div>
      </div>
    );
  }
});

module.exports = MetricsBanner;
