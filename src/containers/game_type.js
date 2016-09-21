import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {questions} from '../actions/index';


export class GameType extends Component {
	constructor(props){
		super(props);

		console.log(this.props.questionList);
	}

	render(){
		return (
			<div>
				<div className={`container ${this.props.questionList.length ? 'hide' : ''}`}>
					<div className="row">
						<div className="game-instructions">
							<h3 className="centered">Can you match the state to its flag?</h3>
							<ul>
								<li>Click on a potential answer choice to SELECT it</li>
								<li>Click SUBMIT from the buttons below to ANSWER the question</li>
								<li>Choose wisely, once you click SUBMIT, the answer choice is locked in</li>
								<li>The results of your game will appear once all questions have been answered</li>
								<li>Select a game of 10, 20, or 50 questions to begin</li>
							</ul>
							<ul className="game-type">
								<li>
									<button 
									type="button" 
									className="btn btn-secondary" 
									onClick={() => this.props.questions(10)}>
										10
									</button>
								</li>
								<li>
									<button 
									type="button" 
									className="btn btn-secondary" 
									onClick={() => this.props.questions(20)}>
										20
									</button>
								</li>
								<li>
									<button 
									type="button" 
									className="btn btn-secondary" 
									onClick={() => this.props.questions(50)}>
										50
									</button>
								</li>
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
		questionList: state.questions
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({questions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameType);


