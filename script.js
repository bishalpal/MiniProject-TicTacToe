let music = new Audio("./resources/music.mp3");
let turn = new Audio("./resources/ting.mp3");
let gameover = new Audio("./resources/gameover.mp3");
let gameend = false;
let pturn = 'X';

// Function to change the turn
const changeTurn = ()=> {
    return pturn === 'X' ? '0' : 'X';
};

// Function to check for a win
const checkwin = ()=> {
    // let winconditions = [
    //     [0,1,2],    // rows
    //     [3,4,5],
    //     [6,7,8],
    //     [0,3,6],    // cols
    //     [1,4,7],
    //     [2,5,8],
    //     [0,4,8],    // diagonals
    //     [2,4,6]
    // ];
    let boxtexts = Array.from(document.getElementsByClassName('boxtext'));

    // rows
    if((boxtexts[0].innerText !== '') && (boxtexts[0].innerText === boxtexts[1].innerText)
        && (boxtexts[0].innerText === boxtexts[2].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[0].innerText} Won !`;
        gameend = true;
    }
    if((boxtexts[3].innerText !== '') && (boxtexts[3].innerText === boxtexts[4].innerText)
        && (boxtexts[3].innerText === boxtexts[5].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[3].innerText} Won !`;
        gameend = true;
    }
    if((boxtexts[6].innerText !== '') && (boxtexts[6].innerText === boxtexts[7].innerText)
        && (boxtexts[6].innerText === boxtexts[8].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[6].innerText} Won !`;
        gameend = true;
    }


    // columns
    if((boxtexts[0].innerText !== '') && (boxtexts[0].innerText === boxtexts[3].innerText)
        && (boxtexts[0].innerText === boxtexts[6].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[6].innerText} Won !`;
        gameend = true;
    }
    if((boxtexts[1].innerText !== '') && (boxtexts[1].innerText === boxtexts[4].innerText)
        && (boxtexts[1].innerText === boxtexts[7].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[1].innerText} Won !`;
        gameend = true;
    }
    if((boxtexts[2].innerText !== '') && (boxtexts[2].innerText === boxtexts[5].innerText)
        && (boxtexts[2].innerText === boxtexts[8].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[2].innerText} Won !`;
        gameend = true;
    }


    // diagonals
    if((boxtexts[0].innerText !== '') && (boxtexts[0].innerText === boxtexts[4].innerText)
        && (boxtexts[0].innerText === boxtexts[8].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[0].innerText} Won !`;
        gameend = true;
    }
    if((boxtexts[2].innerText !== '') && (boxtexts[2].innerText === boxtexts[4].innerText)
        && (boxtexts[2].innerText === boxtexts[6].innerText)
    ) {
        document.getElementsByClassName('info')[0].innerText = `${boxtexts[2].innerText} Won !`;
        gameend = true;
    }
    
};

// Game logic
// music.play();
let boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === '') {
            boxtext.innerText = pturn;
            pturn = changeTurn();
            turn.play();
            checkwin();
            if(!gameend) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + pturn;
            }
            else {
                gameover.play();
                document.getElementsByClassName('imgBox')[0].getElementsByTagName('img')[0].style.width = "200px";
            }
        }
    });
});


// add onclick listener on Reset button
reset.addEventListener('click', ()=> {
    Array.from(document.getElementsByClassName('boxtext')).forEach(element =>{
        element.innerText = "";
    });
    document.getElementsByClassName('imgBox')[0].getElementsByTagName('img')[0].style.width = "0px";
    gameend = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + pturn;
});

