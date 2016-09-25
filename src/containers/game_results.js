import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newGame} from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames';


export class GameResults extends Component {
	constructor(props){
		super(props);

	}

	renderResults(){
		var questions = this.props.questions;
		var currentQuestion = this.props.currentQuestion;

		return questions.map((question, index) => {
			var status = classNames({
				'wrong': !question.correct,
				'right': question.correct
			});
			return (
				<li className={status} 
						key={index}>

					<ul className="results-row">
						<li>
							<img 
									className="results-flag" 
									src={`../../assets/images/state_flag/${question.question.answer}StateFlag.svg.png`} 
									alt={question.question.answer} />
						</li>
						<li>
							<ul className="maps">
								<li>
									<img 
										className="results-map"
										src={`../../assets/images/state_location/${question.question.answer}StateLocation.svg.png`}
										alt={question.question.answer} />
										<span>Correct Answer: {question.question.answer}</span>
								</li>
								<li>
									<img 
										className="results-map"
										src={`../../assets/images/state_location/${question.selected ? question.selected: "Texas"}StateLocation.svg.png`}
										alt={question.selected ? question.selected: "Texas"} />
										<span>Your Answer: {question.selected}</span>
								</li>
							</ul>
						</li>
					</ul>

					

				</li>
			);
		})
	}

	render(){
		var currentQuestion = this.props.currentQuestion;
		var questions = this.props.questions;
		var completed = questions.filter((question) => {
				return question.answered
		});
		var correct = questions.filter((question) => {
				return question.correct;
		});

		const transitionOptions = {
			transitionName: "roll",
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 500
		};

		return (
			<div>
				<div className={`container ${completed.length === questions.length && questions.length ? '' : 'hide'}`}>
					<div className="row">
						<div className="game-results">
							<ul className="game-again centered">
								<li className="pull-left">
									<h3>Results: <span>{correct.length}/{questions.length}</span></h3>
								</li>
								<li className="pull-right">
									<h3
										onClick={() => this.props.newGame(0)}
										className="">
											New Game 
									</h3>
								</li>
							</ul>
								<ul>
									<ReactCSSTransitionGroup {... transitionOptions}>
										{ questions.length ? this.renderResults() : ''}
									</ReactCSSTransitionGroup>
								</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		currentQuestion: state.currentQuestion,
		questions: state.questions
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({newGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResults);

