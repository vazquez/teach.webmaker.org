var React = require('react');

var PlaceholderPage = require('./placeholder-page.jsx');

var JoinPage = React.createClass({
  render: function() {
    return <PlaceholderPage
      title="Join Us"
      githubIssue={154}
    />;
  }
});

module.exports = JoinPage;
