var React = require('react');

var Grandchild = React.createClass({

	getInitialState: function() {
		return {
			number: 0
		}
	},

	render: function() {

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Grandchild</h3>
				</div>
				<div className="panel-body text-center">
					<h1>{this.state.number + 4*this.props.number}</h1>
				</div>
			</div>

		)
	}
});

module.exports = Grandchild;