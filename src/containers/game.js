import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {select} from '../actions/index';


export class Game extends Component {
	constructor(props) {
		super(props);

		// this.state = {task: ''};
		// this.onInputChange = this.onInputChange.bind(this);
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		// console.log(event.target.value);
		// this.setState({task: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		// add task to List
		// this.props.addTask(this.state.task);
		// this.setState({task: ''});
	}
		
	renderAnswerChoices(number){
		var questions = this.props.questions;
		var select = this.props.select;
		var currentQuestion = this.props.currentQuestion;

		var highlight = function(option){
			if(!questions[number].answered){
				return option === questions[number].selected ? 'selected' : '';
			} else if(questions[number].answered){
				return option === questions[number].question.answer ? 'correct' : 'incorrect';
			}
		};

		return questions[number].question.options.map((option, index) => {
				return (
					<li className="answer-choice" 
							onClick={() => select(option, currentQuestion)}
							key={index}>
						<img 
							className={highlight(option)}
							src={`../../assets/images/state_location/${questions.length ? option : "Texas"}StateLocation.svg.png`}
							alt={questions.length ? option : "Texas"}/>
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
			alt={questions.length ? questions[number].question.answer : "Texas"}
			/>
		);
	}



	render(){
		var currentQuestion = this.props.currentQuestion;
		var questions = this.props.questions;
		return (
				<div className="container">
					{questions.length ? <div className="row centered"> <h4> Question Number: {currentQuestion + 1} </h4> </div> : ''}
					<div className="row">
				  	<div className="left-column">
				  		<ul>
					  		{ questions.length ? this.renderAnswerChoices(currentQuestion).filter((item, index)=> {return index % 2 === 0}) : ''}
				  		</ul>
				    </div>
				    <div className="center-column">
				    	{ questions.length ? this.renderQuestion(currentQuestion) : ''}
				    </div>
				    <div className="right-column">
					    <ul>
					    	{questions.length ? this.renderAnswerChoices(currentQuestion).filter((item, index)=> {return index % 2 !== 0}) : ''}
					    </ul>
				    </div>
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










