import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementQuestion, decrementQuestion} from '../actions/index';

export class GameProgression extends Component {
	constructor(props){
		super(props);

		console.log(`currentQuestion: ${this.props.currentQuestion}`);
	}

	render(){
		var currentQuestion = this.props.currentQuestion;
		var questions = this.props.questions;
		return (
			<div className="container">
				<div className="row">
					<ul className="game-progression">
						<li> {/* need to disable button if user is on the first question*/}
							<button 
								type="button" 
								className="btn btn-secondary"
								onClick={() => this.props.decrementQuestion(currentQuestion)}
								disabled={currentQuestion === 0 || !questions.length}>
									Previous
							</button>
						</li>
						<li>
							<button 
							type="button" 
							className="btn btn-secondary" 
							disabled={!questions.length}> {/*need to disable if no answer choice selected (selected === false)*/}
								Submit
							</button>
						</li>
						<li> {/* need to disable button if user is on the last question*/}
							<button 
								type="button" 
								className="btn btn-secondary"
								onClick={() => this.props.incrementQuestion(currentQuestion, questions.length)}
								disabled={currentQuestion === questions.length - 1 || !questions.length}>
									Next
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

// enable selection of answer choices (add CSS etc.)
// need to disable if no answer choice selected (selected === false)


function mapStateToProps(state){
	return {
		currentQuestion: state.currentQuestion,
		questions: state.questions
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({incrementQuestion, decrementQuestion}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameProgression);


