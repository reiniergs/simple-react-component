(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Hello = React.createClass({displayName: 'Hello',
  	render : function () {
  		return (
 			React.createElement("h1", null, "Hello ", this.props.name)
  			);
  	}
  	
});


React.render(
  		React.createElement(Hello, {name: "Rey"}),
  		document.getElementById('app')	 
		);

},{}],2:[function(require,module,exports){
var Hello = React.createClass({displayName: 'Hello',
  	render : function () {
  		return (
 			React.createElement("h1", null, "Hello ", this.props.name)
  			);
  	}
  	
});


React.render(
  		React.createElement(Hello, {name: "Rey"}),
  		document.getElementById('app')	   
		);

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9maWxlLmpzIiwiYnVpbGQvanMvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEhlbGxvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnSGVsbG8nLFxuICBcdHJlbmRlciA6IGZ1bmN0aW9uICgpIHtcbiAgXHRcdHJldHVybiAoXG4gXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiSGVsbG8gXCIsIHRoaXMucHJvcHMubmFtZSlcbiAgXHRcdFx0KTtcbiAgXHR9XG4gIFx0XG59KTtcblxuXG5SZWFjdC5yZW5kZXIoXG4gIFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEhlbGxvLCB7bmFtZTogXCJSZXlcIn0pLFxuICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHQgXG5cdFx0KTtcbiIsInZhciBIZWxsbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0hlbGxvJyxcbiAgXHRyZW5kZXIgOiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRyZXR1cm4gKFxuIFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkhlbGxvIFwiLCB0aGlzLnByb3BzLm5hbWUpXG4gIFx0XHRcdCk7XG4gIFx0fVxuICBcdFxufSk7XG5cblxuUmVhY3QucmVuZGVyKFxuICBcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChIZWxsbywge25hbWU6IFwiUmV5XCJ9KSxcbiAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVx0ICAgXG5cdFx0KTtcbiJdfQ==
