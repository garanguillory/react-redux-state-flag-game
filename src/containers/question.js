import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {addTask} from '../actions/index';

import question from '../questions/questions_and_answers';
console.log(question[0]);

export default class Question extends Component {
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

	renderAnswerChoices(direction){
		if(direction === 'left'){
			return (
				// first three answer choices (will be li's)
				// {this.props.data.map(()=>{})}
				<ul>
					<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${question[0].option1}StateLocation.svg.png`} alt={question[0].option1}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${question[0].option2}StateLocation.svg.png`} alt={question[0].option2}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${question[0].option3}StateLocation.svg.png`} alt={question[0].option3}/></li>
  			</ul>
			);
		}
		if(direction === 'right'){
			return (
				// last three answer choices (will be li's)
				// {this.props.data.map(()=>{})}
				<ul>
					<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${question[0].option4}StateLocation.svg.png`} alt={question[0].option4}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${question[0].option5}StateLocation.svg.png`} alt={question[0].option5}/></li>
	  			<li className="answer-choice"><img className='center-block' src={`../../assets/images/state_location/${question[0].option6}StateLocation.svg.png`} alt={question[0].option6}/></li>
				</ul>
			);
		}
	}



	render(){
		return (
				<div className="container">
					<div className="row">
				  	<div className="left-column">
				  		{this.renderAnswerChoices('left')}
				    </div>
				    <div className="center-column">
				    	<img className="flag" src="../../assets/images/state_flag/LouisianaStateFlag.svg.png"/>
				    </div>
				    <div className="right-column">
				    	{this.renderAnswerChoices('right')}
				    </div>
			    </div>
			  </div>
		);
	}

} // end of class Question

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({addTask: addTask}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(AddTaskForm);










