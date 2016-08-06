var React = require('react');

var Grandchild = require('./Grandchild');

var Child = React.createClass({

	getInitialState: function() {
		return {
			number: 0
		}
	},

	render: function() {

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Child</h3>
				</div>
				<div className="panel-body text-center">
					<h1> {this.state.number + 2*this.props.clicks}</h1>
					<Grandchild number={this.state.number + 2*this.props.clicks}/>
				</div>
			</div>
		)
	}

});

module.exports = Child;



