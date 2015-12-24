var React = require('react');

var PostData = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <div className="row">{this.props.mainContent}</div>
        <div className="row">{this.props.bottomLabel}</div>
      </div>
    );
  }
});

module.exports = PostData;
