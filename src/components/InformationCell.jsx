var React = require('react');

var InformationCell = React.createClass({
  render: function() {
    var contentStyle = {
      padding: 8
    }

    var mainContentStyle = {
      color: "#5e5e5e",
      fontSize: "1.4em",
      fontWeight: "bold"
    }

    var mainLabelStyle = {
      color: "#8e8e8e"
    }

    return (
      <div className="panel" style={contentStyle}>
        <div className="panel-heading">
          <div className="row" style={mainContentStyle}>{this.props.mainContent}</div>
          <div className="row" style={mainLabelStyle}>{this.props.mainLabel}</div>
        </div>
        <div className="panel-body"></div>
      </div>
    );
  }
});

module.exports = InformationCell;
