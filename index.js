const Attack = document.getElementById("attack")
const nextRound = document.getElementById("next-round")
const startGame = document.getElementById("startgame")
const P1S = document.getElementById("p1s")
const P2S = document.getElementById("p2s")
const P1Win = document.getElementById("P1Win")
const P2Win = document.getElementById("P2Win")
const Player1Turn = document.getElementById("player1turn")
const Player2Turn = document.getElementById("player2turn")
const Player1Score = document.getElementById("player1Score")
const Player2Score = document.getElementById("player2Score")
const msg = document.getElementById("msg")
let player1score = 10
let player2score = 10
let player1isWinner = false
let player2isWinner = true
let randomNumber = 0 
let p1win=0
let p2win =0
let n1
let n2
let player1Turn = true


startGame.addEventListener("click",function(){
    startGame.classList.remove("Dblock")
    startGame.classList.add("Dnone")
    Attack.classList.add("Dblock")
    Attack.classList.remove("Dnone")
    turn()
})


function turn(){
    n1 = Math.floor(Math.random()*6) +1
    if(n1 === 1 || n1 === 3 || n1 === 5){
        player1Turn = true
        msg.textContent = "Player 1 Turn"
        Player1Turn.classList.add("active")
        Player2Turn.classList.remove("active")
        P1S.classList.remove("active")
        P2S.classList.add("active")
    }
    else
    {
        player1Turn = false
        msg.textContent = "Player 2 Turn"
        Player2Turn.classList.add("active")
        Player1Turn.classList.remove("active")
        P1S.classList.add("active")
        P2S.classList.remove("active")
    }
    return player1Turn
   }

nextRound.addEventListener("click",()=>{
    msg.classList.remove("current-winner")
    turn()
    Attack.classList.add("Dblock")
    Attack.classList.remove("Dnone")
    nextRound.classList.remove("Dblock")
    nextRound.classList.add("Dnone")
    player1score = 10
    Player1Score.textContent = player1score
    player2score = 10
    Player2Score.textContent = player2score
})

Attack.addEventListener("click" , ()=>
    {
    
        if(player1Turn){
        msg.textContent = "Player 1 Turn"
        Player1Turn.classList.add("active")
        Player2Turn.classList.remove("active")
        P1S.classList.remove("active")
        P2S.classList.add("active")
        randomNumber = Math.floor(Math.random()*5)+1
        console.log(randomNumber)
        player2score -= randomNumber
        Player2Score.textContent = player2score

            if(player2score <= 0){
                player2score = 0
                Player2Score.textContent = player2score
                console.log("player 1 won the game")
                player1isWinner = true
                if(player1isWinner){
                    p1win +=1
                    P1Win.textContent = p1win
                    msg.textContent = "player 1 won the game"
                    Attack.classList.remove("Dblock")
                    Attack.classList.add("Dnone")
                    nextRound.classList.add("Dblock")
                    nextRound.classList.remove("Dnone")
                    msg.classList.add("current-winner")
                    if(p1win > 3){
                        msg.textContent = "Player 1 Won the Game"
                        msg.classList.add("player1-background")
                        nextRound.classList.add("Dnone")
                        nextRound.classList.remove("Dblock")
                        nextRound.classList.add("Dnone")
                        nextRound.classList.remove("Dblock")

                    }
                    
                }
            }
             player1Turn = false
        }   


        else {
        msg.textContent = "Player 2 Turn"
        Player2Turn.classList.add("active")
        Player1Turn.classList.remove("active")
        P1S.classList.add("active")
        P2S.classList.remove("active")
        randomNumber = Math.floor(Math.random()*5)+1
        console.log(randomNumber)
        player1score -= randomNumber
        Player1Score.textContent = player1score
            if(player1score <= 0){
                player1score = 0
                Player1Score.textContent = player1score
                console.log("player 2 won the game")
                player2isWinner = true
                if(player2isWinner){
                    p2win += 1
                    P2Win.textContent = p2win
                    msg.textContent = "player 2 won the game"
                    Attack.classList.remove("Dblock")
                    Attack.classList.add("Dnone")
                    nextRound.classList.add("Dblock")
                    nextRound.classList.remove("Dnone")
                    msg.classList.add("current-winner")
                    if(p2win > 3){
                        msg.textContent = "Player 2 is the Winner"
                        msg.classList.add("player2-background")
                        nextRound.classList.add("Dnone")
                        nextRound.classList.remove("Dblock")
                        nextRound.classList.add("Dnone")
                        nextRound.classList.remove("Dblock")
                    }
                    
                }
            }
             player1Turn = true
        }    
    
    
})