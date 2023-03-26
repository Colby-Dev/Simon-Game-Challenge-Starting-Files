// $(document).keypress(()=>{startGame()})
const buttonColours = ['red','blue','green','yellow']
let gamePattern = []
let userClickedPattern = []
let gameOn = true

$(document).ready(()=>{
    StartGame()
})

function gameSequence(){
    rnds = Math.floor(Math.random()*10)+1
    console.log(rnds)
    for (i=0; i < rnds; i++)
    {
        gamePicks(i)
    }
    return gamePattern
}


function gamePicks(i){
    setTimeout(() => {
    numb = Math.floor(Math.random()*4)
    button = buttonColours[numb]
    gamePattern.push(button)
    $('#'+button).addClass('pressed')
    setTimeout(()=>{$('#'+button).removeClass('pressed')},100)
    audio = new Audio(`sounds/${button}.mp3`)
    audio.play()
    }, 700*i) 
}


function StartGame(){
    $('body').keypress(()=>{
            gameSequence()
            UserSequence()
        
    })
    }
    function UserSequence() {
        $('.btn').click(function(){
            let userChosen = []
            button_clicked = $(this).attr('id')
            userChosen.push('#'+button_clicked)
            userClickedPattern.push(button_clicked)
            $('#'+button_clicked).addClass('pressed')
            setTimeout(()=>{$('#'+button_clicked).removeClass('pressed')},70)
            audio = new Audio(`sounds/${button_clicked}.mp3`)
            audio.play()
            console.log(userClickedPattern)
            console.log(gamePattern)
            setTimeout(()=>{if(userClickedPattern.join() == gamePattern.join()){
                $('#level-title').html('Correct! Press A For The Next Round!')
                }
                else
                {
                    gameOver()

                }
            },5500)

        })
    }

function gameOver(){
    $('body').addClass('game-over')
    setTimeout(() => {
        $('body').removeClass('game-over')
        $('#level-title').html('Game Over!')
        throw new Error('Game Over')

    }, 150);
}

//}