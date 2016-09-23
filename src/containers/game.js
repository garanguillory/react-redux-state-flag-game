import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {select} from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames';


export class Game extends Component {
	constructor(props) {
		super(props);
	}

	onFormSubmit(event){
		event.preventDefault();
		// enable user to hit Enter to submit 
		// an answer choice
		// need to wrap submit button in a form
	}
		
	renderAnswerChoices(number){
		var questions = this.props.questions;
		var select = this.props.select;
		var currentQuestion = this.props.currentQuestion;

		return questions[number].question.options.map((option, index) => {
			var chosen = classNames({
				'selected': questions[number].selected === option,
				'correct': questions[number].answered && questions[number].selected === option && option === questions[number].question.answer,
				'incorrect': questions[number].answered && questions[number].selected === option && option !== questions[number].question.answer
			});
				return (
					<li className="answer-choice" 
							onClick={() => select(option, currentQuestion)}
							key={index}>
						<img 
							className={chosen}
							src={`../../assets/images/state_location/${questions.length ? option : "Texas"}StateLocation.svg.png`}
							alt={questions.length ? option : "Texas"} />
					</li>
				);
		});
	}


	renderQuestion(number = 0){
		var questions = this.props.questions;
		return (
			<img 
				className="flag" 
				src={`../../assets/images/state_flag/${questions.length ? questions[number].question.answer : "Texas"}StateFlag.svg.png`} 
				alt={questions.length ? questions[number].question.answer : "Texas"} />
		);
	}



	render(){
		var currentQuestion = this.props.currentQuestion;
		var questions = this.props.questions;
		var completed = questions.filter((question) => {
				return question.answered
		});

		const transitionOptions = {
			transitionName: "slide",
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 500
		};

		return (
				<div className={`container ${completed.length === questions.length ? 'hide' : ''}`}>
					{questions.length ? <div className="row centered"> <h4> Question #{currentQuestion + 1} </h4> </div> : ''}
					<div className="row">
						<ul className="game-layout centered">
							<li>
					  		<ul>
						  		<ReactCSSTransitionGroup transitionName="slide-from-left" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
							  		{ questions.length ? this.renderAnswerChoices(currentQuestion).filter((item, index)=> {return index % 2 === 0}) : ''}
							  	</ReactCSSTransitionGroup>
					  		</ul>
							</li>
							<li>
								<ReactCSSTransitionGroup transitionName="drop-in" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
									{ questions.length ? this.renderQuestion(currentQuestion) : ''}
								</ReactCSSTransitionGroup>
							</li>
							<li>
								<ul>
									<ReactCSSTransitionGroup transitionName="slide-from-right" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
							    	{ questions.length ? this.renderAnswerChoices(currentQuestion).filter((item, index)=> {return index % 2 !== 0}) : ''}
							    </ReactCSSTransitionGroup>
						    </ul>
							</li>
						</ul>
			    </div>
			  </div>
		);

	}

} // end of class Game

function mapStateToProps(state){
	return {
		questions: state.questions,
		currentQuestion: state.currentQuestion
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({select}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);










