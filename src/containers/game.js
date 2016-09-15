import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addTask} from '../actions/index';


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
		// need to add question number to the parameters
	renderAnswerChoices(direction, number = 0){
		var questions = this.props.questions;

		if(direction === 'left'){
			return (
				<ul>
					<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${questions.length ? questions[number].question.option1 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option1 : "Texas"}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${questions.length ? questions[number].question.option2 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option2 : "Texas"}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${questions.length ? questions[number].question.option3 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option3 : "Texas"}/></li>
  			</ul>
			);
		}
		if(direction === 'right'){
			return (
				<ul>
					<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${questions.length ? questions[number].question.option4 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option4 : "Texas"}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${questions.length ? questions[number].question.option5 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option5 : "Texas"}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${questions.length ? questions[number].question.option6 : "Texas"}StateLocation.svg.png`} alt={questions.length ? questions[number].question.option6 : "Texas"}/></li>
				</ul>
			);
		}
	}

	renderQuestion(number = 0){
		var questions = this.props.questions;
		return (
			<img 
			className="flag" 
			src={`../../assets/images/state_flag/${questions.length ? questions[number].question.question : "Texas"}StateFlag.svg.png`} 
			alt={questions.length ? questions[number].question.question : "Texas"}
			/>
		);
	}



	render(){
		var currentQuestion = this.props.currentQuestion;

		return (
				<div className="container">
					<div className="row">
				  	<div className="left-column">
				  		{this.renderAnswerChoices('left',currentQuestion)}
				    </div>
				    <div className="center-column">
				    	{this.renderQuestion(currentQuestion)}
				    </div>
				    <div className="right-column">
				    	{this.renderAnswerChoices('right',currentQuestion)}
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

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({addTask: addTask}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(AddTaskForm);
export default connect(mapStateToProps)(Game);










