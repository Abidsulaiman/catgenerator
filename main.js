function generateCat(){
    let image = document.createElement('img');
    var div = document.getElementById('display')
    image.src = './cat1.jpg';
    image.classList.add('shadow')
    div.appendChild(image);
}


// document.getElementById('toolsRow').style.display = "none"
// let selectedImg = document.createElement('img');
// selectedImg.classList.add('w-100');
// let selectedImgDiv = document.getElementById('selectedImg');
// selectedImg.src = yourChoice.src;
// selectedImgDiv.appendChild(selectedImg);
// generateRandomImg();

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


