import {QUESTIONS} from '../actions/index';

var questionNumbers = function(number){
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
	return array.map((number) => {
		return {
			question: questions[number],
			active: false,
			// previous: false,
			// next: true,
			correct: false
		}
	});
}

export default function(state = [], action){
	switch (action.type){
		case QUESTIONS:
			// console.log(action.payload);
			// console.log(questionNumbers(action.payload));
			console.log(questionList(questionNumbers(action.payload)));
			return questionList(questionNumbers(action.payload));
	}

	return state
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
  {question: states[0], option1: states[0], option2: states[9], option3: states[4], option4: states[12], option5: states[21], option6: states[22]},
  {question: states[1], option1: states[13], option2: states[1], option3: states[8], option4: states[3], option5: states[20], option6: states[41]},
  {question: states[2], option1: states[12], option2: states[14], option3: states[2], option4: states[6], option5: states[19], option6: states[40]},
  {question: states[3], option1: states[10], option2: states[15], option3: states[31], option4: states[3], option5: states[18], option6: states[42]},
  {question: states[4], option1: states[19], option2: states[16], option3: states[41], option4: states[9], option5: states[4], option6: states[43]},
  {question: states[5], option1: states[31], option2: states[17], option3: states[21], option4: states[12], option5: states[49], option6: states[5]},
  {question: states[6], option1: states[32], option2: states[18], option3: states[11], option4: states[15], option5: states[16], option6: states[6]},
  {question: states[7], option1: states[33], option2: states[19], option3: states[12], option4: states[18], option5: states[7], option6: states[44]},
  {question: states[8], option1: states[34], option2: states[20], option3: states[13], option4: states[8], option5: states[31], option6: states[45]},
  {question: states[9], option1: states[35], option2: states[40], option3: states[9], option4: states[21], option5: states[32], option6: states[39]},
  {question: states[10], option1: states[36], option2: states[10], option3: states[14], option4: states[24], option5: states[33], option6: states[38]},
  {question: states[11], option1: states[11], option2: states[37], option3: states[12], option4: states[27], option5: states[21], option6: states[5]},
  {question: states[12], option1: states[13], option2: states[12], option3: states[15], option4: states[30], option5: states[44], option6: states[37]},
  {question: states[13], option1: states[13], option2: states[1], option3: states[12], option4: states[33], option5: states[43], option6: states[0]},
  {question: states[14], option1: states[37], option2: states[14], option3: states[17], option4: states[30], option5: states[42], option6: states[1]},
  {question: states[15], option1: states[38], option2: states[15], option3: states[18], option4: states[36], option5: states[41], option6: states[2]},
  {question: states[16], option1: states[39], option2: states[2], option3: states[16], option4: states[3], option5: states[31], option6: states[28]},
  {question: states[17], option1: states[40], option2: states[3], option3: states[19], option4: states[17], option5: states[41], option6: states[48]},
  {question: states[18], option1: states[41], option2: states[4], option3: states[20], option4: states[18], option5: states[21], option6: states[18]},
  {question: states[19], option1: states[42], option2: states[19], option3: states[49], option4: states[39], option5: states[11], option6: states[1]},
  {question: states[20], option1: states[43], option2: states[5], option3: states[48], option4: states[13], option5: states[20], option6: states[21]},
  {question: states[21], option1: states[44], option2: states[6], option3: states[47], option4: states[43], option5: states[0], option6: states[21]},
  {question: states[22], option1: states[45], option2: states[7], option3: states[22], option4: states[40], option5: states[1], option6: states[39]},
  {question: states[23], option1: states[46], option2: states[8], option3: states[46], option4: states[23], option5: states[2], option6: states[38]},
  {question: states[24], option1: states[47], option2: states[9], option3: states[11], option4: states[2], option5: states[3], option6: states[24]},
  {question: states[25], option1: states[48], option2: states[10], option3: states[45], option4: states[25], option5: states[4], option6: states[37]},
  {question: states[26], option1: states[49], option2: states[26], option3: states[44], option4: states[4], option5: states[5], option6: states[17]},
  {question: states[27], option1: states[20], option2: states[27], option3: states[2], option4: states[42], option5: states[6], option6: states[16]},
  {question: states[28], option1: states[21], option2: states[28], option3: states[43], option4: states[1], option5: states[7], option6: states[15]},
  {question: states[29], option1: states[22], option2: states[29], option3: states[42], option4: states[0], option5: states[8], option6: states[14]},
  {question: states[30], option1: states[23], option2: states[41], option3: states[30], option4: states[5], option5: states[9], option6: states[13]},
  {question: states[31], option1: states[24], option2: states[42], option3: states[31], option4: states[17], option5: states[10], option6: states[3]},
  {question: states[32], option1: states[25], option2: states[32], option3: states[41], option4: states[18], option5: states[19], option6: states[4]},
  {question: states[33], option1: states[33], option2: states[43], option3: states[40], option4: states[22], option5: states[18], option6: states[5]},
  {question: states[34], option1: states[26], option2: states[44], option3: states[2], option4: states[43], option5: states[17], option6: states[34]},
  {question: states[35], option1: states[27], option2: states[45], option3: states[4], option4: states[33], option5: states[16], option6: states[35]},
  {question: states[36], option1: states[11], option2: states[28], option3: states[6], option4: states[13], option5: states[36], option6: states[6]},
  {question: states[37], option1: states[37], option2: states[46], option3: states[8], option4: states[5], option5: states[15], option6: states[7]},
  {question: states[38], option1: states[19], option2: states[47], option3: states[10], option4: states[6], option5: states[29], option6: states[38]},
  {question: states[39], option1: states[30], option2: states[39], option3: states[12], option4: states[7], option5: states[28], option6: states[9]},
  {question: states[40], option1: states[31], option2: states[40], option3: states[14], option4: states[8], option5: states[27], option6: states[10]},
  {question: states[41], option1: states[32], option2: states[48], option3: states[41], option4: states[9], option5: states[26], option6: states[14]},
  {question: states[42], option1: states[33], option2: states[49], option3: states[16], option4: states[29], option5: states[42], option6: states[16]},
  {question: states[43], option1: states[34], option2: states[43], option3: states[18], option4: states[28], option5: states[25], option6: states[18]},
  {question: states[44], option1: states[12], option2: states[27], option3: states[44], option4: states[27], option5: states[24], option6: states[20]},
  {question: states[45], option1: states[10], option2: states[3], option3: states[20], option4: states[26], option5: states[45], option6: states[22]},
  {question: states[46], option1: states[9], option2: states[36], option3: states[2], option4: states[46], option5: states[23], option6: states[24]},
  {question: states[47], option1: states[47], option2: states[4], option3: states[24], option4: states[30], option5: states[11], option6: states[26]},
  {question: states[48], option1: states[8], option2: states[5], option3: states[26], option4: states[44], option5: states[11], option6: states[48]},
  {question: states[49], option1: states[7], option2: states[6], option3: states[28], option4: states[43], option5: states[49], option6: states[28]}
];









