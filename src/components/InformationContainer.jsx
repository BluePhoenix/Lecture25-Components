var React = require('react');
var InformationCell = require('./InformationCell.jsx');

var InformationContainer = React.createClass({
  render: function() {
    var containerStyle = {
      marginTop: 16,
      marginBottom: 16
    }

    return (
      <div style={containerStyle}>
        <div className="col-sm-4">
          <InformationCell mainContent="20" mainLabel="New followers added this month" />
        </div>
        <div className="col-sm-4">
          <InformationCell mainContent="$ 1250" mainLabel="Average monthly income" />
        </div>
        <div className="col-sm-4">
          <InformationCell mainContent="$ 13865" mainLabel="Yearly Income Goal" />
        </div>
      </div>
    );
  }
});

module.exports = InformationContainer;
