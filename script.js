const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];

  
  let time = 10;
  let score = 0;

  function shuffler(arr) {
    let wordShuffle = [Math.floor(Math.random()*words.length)]
    return arr[wordShuffle] 
  }
  
  let random = document.querySelector('#randomWord')
    let randomWord = shuffler(words)
    function getDom() {
    
    random.innerHTML = randomWord
  }

  getDom()

  const input = document.querySelector('#text');
  input.addEventListener('input', updateValue)
  
let palabraIngresada = ''

  function updateValue(e) {
   palabraIngresada = e.target.value 

    if (palabraIngresada == randomWord) {
        console.log('felicitaciones sabes escribir');
        time += 3
        randomWord.innerHTML = ''
        randomWord = shuffler(words)
        getDom()
        input.value = ''
        updateScore()
    } 
    }
    

    let timeSpan = document.querySelector('#timeSpan')
    
    let modal = document.querySelector('.main')

    function actualizarTiempo() {
        time--
        timeSpan.innerHTML = `${time}s`

        if (time === 0) {
            clearInterval(timeInterval)
            modal.classList.add('mainDos')
            gameOver()

        }
    }   

    let timeInterval = setInterval(actualizarTiempo,1000);
       
    let scoreActual = document.querySelector('#score')

    function updateScore() {
        score += 1
        scoreActual.innerHTML = `${score}`
    }

    function gameOver() {
        let youLost = document.querySelector('#end-game-container')
        let noTime = document.createElement("h2")
        let finalScore = document.createElement("h3")
        let playAgain = document.createElement("button")

        noTime.append('Te quedaste sin tiempo!')
        finalScore.append(`Final Score ${score}`)
        playAgain.innerHTML = ('<button onclick="location.reload()">Volvé a empezar</button>')

        youLost.append(noTime, finalScore, playAgain)
    }
              
      

        
        
       
          
    
   
 
  



  

 
  
   

   
 

