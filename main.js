// generate cat

function generateCat(){
    let image = document.createElement('img');
    var div = document.getElementById('display')
    image.src = './cat1.jpg';
    image.classList.add('shadow')
    div.appendChild(image);
}

function clearCat(){
    document.getElementById('display').innerHTML = "";
}


// rock, paper, scissors

function startGame(yourChoice){
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomInt())
    let results = declareWinner(humanChoice, botChoice);
    let message = finalMessage(results); //(message: 'you won', color: 'green')
    rpsFrontEnd(yourChoice.id, botChoice, message);
    setInterval(function(){
        document.location.reload()
    }, 2000)
}

function randomInt(){
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function declareWinner(humanChoice, botChoice){
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    let yourScore = rpsDatabase[humanChoice][botChoice];
    let compScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, compScore];
}

function finalMessage([yourscore, computerscore]){
    if(yourscore === 0){
        return {'message':'You lost', 'color': 'crimson'}
    }else if(yourscore === 0.5){
        return {'message': 'Game tied', 'color': 'orange'}
    }else{
        return {'message': 'You won', 'color': 'teal'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imageDbs = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('toolsRow').remove();
    let humanDiv = document.getElementById('selectedImg');
    let messageDiv = document.getElementById('result');
    let botDiv = document.getElementById('compImg');

    humanDiv.innerHTML = '<img src="' + imageDbs[humanImageChoice] + '" width="100%"/>'
    messageDiv.innerHTML = '<h3 style="color:'+finalMessage.color+'">'+ finalMessage.message + '</h3>'
    botDiv.innerHTML = '<img src="' + imageDbs[botImageChoice] + '" width="100%"/>'

}


// change color of buttons

let all_buttons = document.getElementsByTagName('button');
let copy_buttons = [];

for(let i=0; i < all_buttons.length; i++){
    copy_buttons.push(all_buttons[i].classList[1])
}

function changeColor(select){
    if(select.value === 'red'){
        buttonRed();
    }else if(select.value === 'green'){
        buttonGreen();
    }else if(select.value === 'reset'){
        buttonReset()
    }else{
        buttonRandom();
    }
}

function buttonRed(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonGreen(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_buttons[i])
    }
}

function buttonRandom(){
    let choices = ['btn-danger', 'btn-success', 'btn-primary', 'btn-warning']
    for(let i=0; i<all_buttons.length; i++){
        let randomNum = Math.floor(Math.random() * choices.length)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNum]);
    }
}