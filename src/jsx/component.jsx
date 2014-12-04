var React = window.React || require('react');
var Hello = React.createClass({
  	render : function () {
  		return (
 			<h1>Hello {this.props.name}</h1>
  			);
  	}
});
module.export = Hello;                  
