var React = require('react');

var InformationCell = React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-body">
          <div className="row">{this.props.mainContent}</div>
          <div className="row">{this.props.mainLabel}</div>
        </div>
      </div>
    );
  }
});

module.exports = InformationCell;
