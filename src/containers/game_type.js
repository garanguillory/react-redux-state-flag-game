import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {questions} from '../actions/index';


export class GameType extends Component {
	constructor(props){
		super(props);

		// console.log(this.props.questions);
	}

	render(){
		return (
			<div className="container">
				<div className="row">
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
		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({questions}, dispatch);
}

export default connect(null, mapDispatchToProps)(GameType);