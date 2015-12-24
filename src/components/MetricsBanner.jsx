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
          <InformationCell mainContent="1.5k" bottomLabel="New visitors" />
        </div>
        <div className="col-sm-12">
          <InformationCell mainContent="50%" bottomLabel="Bounce Rate" />
        </div>
        <div className="col-sm-12">
          <InformationCell mainContent="28%" bottomLabel="Searches" />
        </div>
        <div className="col-sm-12">
          <InformationCell mainContent="140.5 kb" bottomLabel="Traffic" />
        </div>
      </div>
    );
  }
});

module.exports = MetricsBanner;
