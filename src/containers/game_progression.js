import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementQuestion, decrementQuestion, setQuestion, answer} from '../actions/index';

import classNames from 'classnames';

export class GameProgression extends Component {
	constructor(props){
		super(props);
	}

	renderRemainingQuestions(){
		var questions = this.props.questions;
		return questions.map((question,index) => {
			if(!question.answered){
				return (
					<li className="btn btn-secondary btn-circle" 
							onClick={() => this.props.setQuestion(index)} 	
							key={index}>
						<span>{index + 1}</span>
					</li>
				);
			}
		});
	}

	render(){
		var currentQuestion = this.props.currentQuestion;
		var questions = this.props.questions;
		var completed = questions.filter((question) => {
				return question.answered
		});

		return (
			<div className={`container ${completed.length === questions.length ? 'hide' : ''}`}>
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
				<div className="row">
					<h4 className="centered">Questions Numbers Remaining:</h4>
					<ul className="game-questions-remaining centered">
						{ questions.length ? this.renderRemainingQuestions() : ''}
					</ul>
				</div>
			</div>
		);
	}
} // end GameProgression class


function mapStateToProps(state){
	return {
		currentQuestion: state.currentQuestion,
		questions: state.questions
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({incrementQuestion, decrementQuestion, setQuestion, answer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameProgression);


