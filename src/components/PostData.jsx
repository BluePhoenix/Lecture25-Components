var React = require('react');

var PostData = React.createClass({
  render: function() {
    var mainContentStyle = {
      fontSize: "1.5em"
    };

    var bottomLabelStyle = {
      opacity: 0.8
    };

    return (
      <div className="text-center">
        <div className="" style={mainContentStyle}>{this.props.mainContent}</div>
        <div className="" style={bottomLabelStyle}>{this.props.bottomLabel}</div>
      </div>
    );
  }
});

module.exports = PostData;
