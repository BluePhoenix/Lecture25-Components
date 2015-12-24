var React = require('react');

var InformationCell = React.createClass({
  render: function() {
    var headingStyle = {};

    var topLabelStyle = {
      color: "#AAAAAA",
      paddingLeft: 10,
      paddingRight: 10
    };

    var mainContentStyle = {
      color: "#5e5e5e",
      fontSize: "1.5em",
      fontWeight: "bold",
      paddingLeft: 10,
      paddingRight: 10
    };

    var bottomLabelStyle = {
      color: "#8e8e8e",
      paddingLeft: 10,
      paddingRight: 10
    };

    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
      mainContentStyle.color = "#FFFFFF"
      topLabelStyle.color = "#FFFFFF"
    };

    return (
      <div className="panel">
        <div className="panel-heading" style={headingStyle}>
          <div className="row" style={topLabelStyle}>{this.props.topLabel}</div>
          <div className="row" style={mainContentStyle}>{this.props.mainContent}</div>
          <div className="row" style={bottomLabelStyle}>{this.props.bottomLabel}</div>
        </div>
        <div className="panel-body"></div>
      </div>
    );
  }
});

module.exports = InformationCell;
