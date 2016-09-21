import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newGame} from '../actions/index';

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
							<img 
								className="results-map"
								src={`../../assets/images/state_location/${question.question.answer}StateLocation.svg.png`}
								alt={question.question.answer} />
						</li>
						<li>
							<img 
								className="results-map"
								src={`../../assets/images/state_location/${question.selected ? question.selected: "Texas"}StateLocation.svg.png`}
								alt={question.selected ? question.selected: "Texas"} />
						</li>
					</ul>

					<hr/>

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

		return (
			<div>
				<div className={`container ${completed.length === questions.length && questions.length ? '' : 'hide'}`}>
					<div className="row">
						<div className="game-results">
							<h3 className="centered">
								Play again? 
								<button onClick={() => this.props.newGame(0)} className="btn btn-secondary">
									New Game 
								</button>
							</h3>
							<h3 className="centered">Results: <span>{correct.length}/{questions.length}</span></h3>
								<ul>
									{ questions.length ? this.renderResults() : ''}
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


