import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementQuestion, decrementQuestion} from '../actions/index';

export class GameProgression extends Component {
	constructor(props){
		super(props);

		console.log(this.props.currentQuestion);
		console.log(this.props.decrementQuestion);
	}

	render(){
		var currentQuestion = this.props.currentQuestion;
		return (
			<div className="container">
				<div className="row">
					<ul className="game-progression">
						<li> {/* need to disable button if user is on the first question*/}
							<button 
								type="button" 
								className="btn btn-secondary"
								onClick={() => this.props.decrementQuestion(currentQuestion)}>
									Previous
							</button>
						</li>
						<li>
							<button type="button" className="btn btn-secondary">Submit</button>
						</li>
						<li> {/* need to disable button if user is on the last question*/}
							<button 
								type="button" 
								className="btn btn-secondary"
								onClick={() => this.props.incrementQuestion(currentQuestion)}>
									Next
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		currentQuestion: state.currentQuestion
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({incrementQuestion, decrementQuestion}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameProgression);


