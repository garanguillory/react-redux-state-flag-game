import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementQuestion, decrementQuestion, answer} from '../actions/index';

import classNames from 'classnames';

export class GameProgression extends Component {
	constructor(props){
		super(props);

		
	}

	render(){
		var currentQuestion = this.props.currentQuestion;
		var questions = this.props.questions;

		return (
			<div className={`container ${!questions.length ? 'hide' : ''}`}>
				<div className="row">
					<ul className="game-progression">
						<li>
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
							onClick={() => this.props.answer(questions[currentQuestion].selected, currentQuestion)}
							disabled={!questions.length || !questions[currentQuestion].selected || questions[currentQuestion].answered} >
								Submit
							</button>
						</li>
						<li>
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
} // end GameProgression class

// need to disable if no answer choice selected (selected === false)


function mapStateToProps(state){
	return {
		currentQuestion: state.currentQuestion,
		questions: state.questions
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({incrementQuestion, decrementQuestion, answer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameProgression);


