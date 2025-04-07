const inputs =document.querySelector(".inputs"),
resetBtn =document.querySelector(".reset-btn"),
hint =document.querySelector(".hint span"),
wrongLetter = document.querySelector(".wrong-letter span"),
gussLeft = document.querySelector(".guess-left span"),
typingInput = document.querySelector(".typing-input");
let word ,maxGuesses,incorrects=[],corrects=[];
function randomWord(){
    // getting random object from wordlist
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxGuesses=8,incorrects=[],corrects=[];
    
    hint.innerHTML= ranObj.hint;
    gussLeft.innerHTML= maxGuesses;
    wrongLetter.innerText = incorrects;
    let html= "";
    for(let i=0;i < word.length; i++){
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML =html;

}

randomWord();

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`)
    && !corrects.includes(key)){
        
        if(word.includes(key)){
         
            for(let i=0;i<word.length;i++){
                //showing matched letter
                if(word[i]=== key){
                    corrects.push(key);

                    inputs.querySelectorAll("input")[i].value=key;
                }

            }
        } else{
            maxGuesses--;
          incorrects.push(` ${key}`);
        }
        gussLeft.innerHTML= maxGuesses;
    wrongLetter.innerText = incorrects;
    }
    
    typingInput.value="";
    setTimeout(()=>{
        if(corrects.length=== word.length){
            alert("Congrats!!")
        }
        else if(maxGuesses<1){
            alert("Game is Over!!")
            for(let i=0;i<word.length;i++){
                //showing matched letter
                
                inputs.querySelectorAll("input")[i].value=word[i];
    
            }
        }
    });
}

resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("keydown",() => typingInput.focus());
document.addEventListener("keydown",() => typingInput.focus());