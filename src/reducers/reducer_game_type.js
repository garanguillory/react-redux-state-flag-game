import {QUESTIONS, SELECTED, ANSWERED, NEW_GAME} from '../actions/index';

function questionNumbers(number){
	var array = []
	while(array.length < number){
	  var randomnumber=Math.floor(Math.random() * 50);
	  var found=false;
	  for(var i=0;i<array.length;i++){
		if(array[i]==randomnumber){found=true;break}
	  }
	  if(!found)array[array.length]=randomnumber;
	}
	return array
};

function questionList(array){
	return array.map((number, index) => {
		return {
			id: index,
			question: questions[number],
			selected: "",
			correct: false,
			answered: false
		}
	});
}

// to select a possible answer choice
const selecting = (state = {}, action, index) => {
	switch (action.type){
		case SELECTED:
		  if(state.id === action.questionNumber){
	  		if(state.selected){
			    return state.selected === action.payload ? {...state, selected: ""} : {...state, selected: action.payload}
	  		} else {
	  			return {...state, selected: action.payload}
	  		}
		  } else {
			  return state
			}
		default:
		  return state
	}
}

// to answer a selected answer choice
const answering = (state = {}, action, index) => {
	switch (action.type){
		case ANSWERED:
		  if(state.id === action.questionNumber && state.selected){
		  	if(state.selected === state.question.answer){
		  		return {...state, answered: true, correct: true}
		  	} else {
		  		return {...state, answered: true, correct: false}
		  	}
		  } else {
			  return state
			}
		default:
		  return state
	}
}

export default function(state = [], action){
	switch (action.type){
		case QUESTIONS:
			return questionList(questionNumbers(action.payload));
		case SELECTED:
			return state.map((question, index) =>
			  selecting(question, action, index)
			)
		case ANSWERED:
			return state.map((question, index) =>
			  answering(question, action, index)
			)
		case NEW_GAME:
			return state = []
		default:
			return state
	}
}



const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'NewHampshire',
  'NewJersey',
  'NewMexico',
  'NewYork',
  'NorthCarolina',
  'NorthDakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'RhodeIsland',
  'SouthCarolina',
  'SouthDakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'WestVirginia',
  'Wisconsin',
  'Wyoming'
];


const questions = [
  {answer: states[0], options: [states[0], states[9], states[4], states[12], states[21], states[22]]},
  {answer: states[1], options: [states[13], states[1], states[8], states[3], states[20], states[41]]},
  {answer: states[2], options: [states[12], states[14], states[2], states[6], states[19], states[40]]},
  {answer: states[3], options: [states[10], states[15], states[31], states[3], states[18], states[42]]},
  {answer: states[4], options: [states[19], states[16], states[41], states[9], states[4], states[43]]},
  {answer: states[5], options: [states[31], states[17], states[21], states[12], states[49], states[5]]},
  {answer: states[6], options: [states[32], states[18], states[11], states[15], states[16], states[6]]},
  {answer: states[7], options: [states[33], states[19], states[12], states[18], states[7], states[44]]},
  {answer: states[8], options: [states[34], states[20], states[13], states[8], states[31], states[45]]},
  {answer: states[9], options: [states[35], states[40], states[9], states[21], states[32], states[39]]},
  {answer: states[10], options: [states[36], states[10], states[14], states[24], states[33], states[38]]},
  {answer: states[11], options: [states[11], states[37], states[12], states[27], states[21], states[5]]},
  {answer: states[12], options: [states[13], states[12], states[15], states[30], states[44], states[37]]},
  {answer: states[13], options: [states[13], states[1], states[12], states[33], states[43], states[0]]},
  {answer: states[14], options: [states[37], states[14], states[17], states[30], states[42], states[1]]},
  {answer: states[15], options: [states[38], states[15], states[18], states[26], states[41], states[2]]},
  {answer: states[16], options: [states[39], states[2], states[16], states[3], states[31], states[28]]},
  {answer: states[17], options: [states[40], states[3], states[19], states[17], states[41], states[48]]},
  {answer: states[18], options: [states[41], states[4], states[20], states[18], states[21], states[31]]},
  {answer: states[19], options: [states[42], states[19], states[49], states[39], states[11], states[1]]},
  {answer: states[20], options: [states[43], states[5], states[48], states[13], states[20], states[21]]},
  {answer: states[21], options: [states[44], states[6], states[47], states[43], states[0], states[21]]},
  {answer: states[22], options: [states[45], states[7], states[22], states[40], states[1], states[39]]},
  {answer: states[23], options: [states[46], states[8], states[0], states[23], states[2], states[38]]},
  {answer: states[24], options: [states[47], states[9], states[11], states[2], states[3], states[24]]},
  {answer: states[25], options: [states[48], states[10], states[45], states[25], states[4], states[37]]},
  {answer: states[26], options: [states[49], states[26], states[44], states[4], states[5], states[17]]},
  {answer: states[27], options: [states[20], states[27], states[2], states[42], states[6], states[16]]},
  {answer: states[28], options: [states[21], states[28], states[43], states[44], states[7], states[29]]},
  {answer: states[29], options: [states[22], states[29], states[42], states[0], states[8], states[14]]},
  {answer: states[30], options: [states[23], states[41], states[30], states[5], states[2], states[13]]},
  {answer: states[31], options: [states[24], states[42], states[31], states[17], states[10], states[3]]},
  {answer: states[32], options: [states[25], states[32], states[41], states[18], states[19], states[4]]},
  {answer: states[33], options: [states[33], states[43], states[40], states[22], states[18], states[5]]},
  {answer: states[34], options: [states[26], states[44], states[2], states[43], states[17], states[34]]},
  {answer: states[35], options: [states[27], states[45], states[4], states[33], states[16], states[35]]},
  {answer: states[36], options: [states[11], states[28], states[6], states[13], states[36], states[46]]},
  {answer: states[37], options: [states[37], states[46], states[8], states[5], states[15], states[7]]},
  {answer: states[38], options: [states[19], states[47], states[10], states[6], states[29], states[38]]},
  {answer: states[39], options: [states[30], states[39], states[12], states[7], states[28], states[9]]},
  {answer: states[40], options: [states[31], states[40], states[14], states[8], states[27], states[10]]},
  {answer: states[41], options: [states[32], states[48], states[41], states[9], states[26], states[14]]},
  {answer: states[42], options: [states[33], states[49], states[16], states[29], states[42], states[22]]},
  {answer: states[43], options: [states[34], states[43], states[49], states[28], states[25], states[18]]},
  {answer: states[44], options: [states[12], states[28], states[27], states[44], states[24], states[20]]},
  {answer: states[45], options: [states[10], states[3], states[20], states[26], states[45], states[22]]},
  {answer: states[46], options: [states[9], states[36], states[2], states[46], states[23], states[24]]},
  {answer: states[47], options: [states[47], states[4], states[24], states[30], states[11], states[26]]},
  {answer: states[48], options: [states[8], states[5], states[26], states[44], states[11], states[48]]},
  {answer: states[49], options: [states[7], states[6], states[28], states[43], states[49], states[28]]}
];









