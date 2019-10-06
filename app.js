const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['bonjour', 'comment allez vous aujord\'hui?', 'flaime de répondre']
const weather = ['je sais pas moi!', 'aucune idée', "regared dehors!"]


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
	console.log('voice is activated, you can speak to micro');
};

recognition.onresult = function(event) {
	const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

btn.addEventListener('click', () => {
	recognition.start();
});

function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();

	if(message.includes('Bonjour')){
		const ft = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = ft;

	}
	if(message.include('Comment sa va?')){
		speech.text = "bien merci";
	}

	
	speech.volume = 1;
	speech.rate = 1;
	

	window.speechSynthesis.speak(speech);
}

