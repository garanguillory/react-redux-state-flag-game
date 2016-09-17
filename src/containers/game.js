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
		// number will be the current question
		// filter left and right based on odd/even option#
		// re-insert the <ul></ul>
	renderAnswerChoices(number){
		var questions = this.props.questions;
		var select = this.props.select;
		var currentQuestion = this.props.currentQuestion;
		// var highlight = function(option){
		// 	if(!questions[number].answered){
		// 		return option === questions[number].selected ? 'selected' : '';
		// 	} else if(questions[number].answered){
		// 		return questions[number].selected === questions[number].question.answer ? console.log(this) : '';
		// 	}
		// };

		return questions[number].question.options.map((option, index) => {
				return (
					<li className="answer-choice" 
							onClick={() => select(option, currentQuestion)}
							key={index}>
						<img 
							className={option === questions[number].selected ? 'selected' : ''}
							src={`../../assets/images/state_location/${questions.length ? option : "Texas"}StateLocation.svg.png`}
							alt={questions.length ? option : "Texas"}/>
					</li>
				);
		});
	}

	// renderAnswerChoices(direction, number = 0){
	// 	var questions = this.props.questions;
	// 	var select = this.props.select;
	// 	var currentQuestion = this.props.currentQuestion;

	// 	if(direction === 'left'){
	// 		return (
	// 			<ul>
	// 				<li className="answer-choice" 
	// 						onClick={() => select(questions[number].question.option1, currentQuestion)}>
	// 					<img src={`../../assets/images/state_location/${questions.length ? questions[number].question.option1 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option1 : "Texas"}/>
	// 				</li>
	//   			<li className="answer-choice" onClick={() => select(questions[number].question.option2, currentQuestion)}>
	//   				<img src={`../../assets/images/state_location/${questions.length ? questions[number].question.option2 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option2 : "Texas"}/>
	//   			</li>
	//   			<li className="answer-choice" onClick={() => select(questions[number].question.option3, currentQuestion)}>
	// 	  			<img src={`../../assets/images/state_location/${questions.length ? questions[number].question.option3 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option3 : "Texas"}/>
	// 	  		</li>
 //  			</ul>
	// 		);
	// 	}
	// 	if(direction === 'right'){
	// 		return (
	// 			<ul>
	// 				<li className="answer-choice" onClick={() => select(questions[number].question.option4, currentQuestion)}>
	// 					<img src={`../../assets/images/state_location/${questions.length ? questions[number].question.option4 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option4 : "Texas"}/>
	// 				</li>
	//   			<li className="answer-choice" onClick={() => select(questions[number].question.option5, currentQuestion)}>
	// 	  			<img src={`../../assets/images/state_location/${questions.length ? questions[number].question.option5 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option5 : "Texas"}/>
	//   			</li>
	//   			<li className="answer-choice" onClick={() => select(questions[number].question.option6, currentQuestion)}>
	// 	  			<img src={`../../assets/images/state_location/${questions.length ? questions[number].question.option6 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option6 : "Texas"}/>
	//   			</li>
	// 			</ul>
	// 		);
	// 	}
	// }

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
					<div className="row">
				  	<div className="left-column">
				  		{/*this.renderAnswerChoices('left',currentQuestion)*/}
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










