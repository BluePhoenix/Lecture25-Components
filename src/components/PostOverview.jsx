var React = require('react');
var PostData = require('./PostData.jsx');

var PostOverview = React.createClass({
  render: function () {
    var footerStyle = {
      color: "#FFFFFF",
      background: "#525757"
    };

    var postStyle = {
      minHeight: 80
    };

    if (this.props.postBackground) {
      postStyle.background = this.props.postBackground;
    };

    return (
      <div className="col-sm-12">
        <div className="panel">
          <div className="panel-heading" style={postStyle}>
          </div>
          <div className="panel-footer" style={footerStyle}>
            <div className="row">
              <div className="col-sm-4">
                <PostData mainContent="15080" bottomLabel="Shot Views" />
              </div>
              <div className="col-sm-4">
                <PostData mainContent="12000" bottomLabel="Likes" />
              </div>
              <div className="col-sm-4">
                <PostData mainContent="5100" bottomLabel="Comments" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PostOverview;
