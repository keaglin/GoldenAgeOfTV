
// Object containing all of the card answers
var flashcards = [
    {
        Answer: "Big Bang Theory",
    },
    {
        Answer: "Netflix",
    },
    {
        Answer: "House of Cards",
    },
    {
        Answer: "The Handmaids Tale",
    },
    {
        Answer: "This is Us",
    },
    {
        Answer: "The Deuce",
    },
    {
        Answer: "Insecure",
    },
    {
        Answer: "Game of Thrones",
    }
    ];

// The user is expected to input the answer to questions 1-8, one at a time. Upon clicking the 'submit' button, the users response will be recorded and if it is correct, they will be told to move on to the next card/question. 
// If incorrect, the user will be informed of the wrong-ness and told to try again.
// contribution from Maike
// Once the user answers correctly, the 'submit' button is disabled so no more or new information can be added at that point.
// Whether the answer is right or wrong, an alert will pop up with the determination.
var question1Answer = "Big Bang Theory"
var card1StartButton = document.querySelectorAll('button')[0]
card1StartButton.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-compilation').value
        console.log(answer)
    if (answer === "Big Bang Theory") {
        console.log("Correct!")
         alert("Correct! Clearly you're a genius like Sheldon, please continue to the next card!")
         card1StartButton.setAttribute('disabled', true)
    } else {
        console.log("Wrong!")
        alert("Wrong. Try again!")
    }
    })

var question2Answer = "Netflix"
var card2Button = document.querySelectorAll('button')[1]
card2Button.addEventListener('click', function () {
    let answer = document.querySelector('#answer-blockbuster').value
        console.log(answer)
    if (answer === "Netflix") {
            console.log("Correct!")
             alert("Correct! Avoid taking time to Netflix and chill, instead move on to card #3")
             card2Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})

var question3Answer = "House of Cards"
var card3Button = document.querySelectorAll('button')[2]
card3Button.addEventListener('click', function () {
    let answer = document.querySelector('#answer-whitehouse').value
        console.log(answer)
    if (answer === "House of Cards") {
            console.log("Correct!")
             alert("Correct! Move on to card #4")
             card3Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})

var question4Answer = "The Handmaids Tale"
var card4Button = document.querySelectorAll('button')[3]
card4Button.addEventListener('click', function () {
   
    let answer = document.querySelector('#answer-hulu').value
        console.log(answer)

    if (answer === "The Handmaids Tale") {
            console.log("Correct - Peace be the Fruit!")
             alert("Correct! Move on to card #5")
             card4Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})

var question5Answer = "This is Us"
var card5Button = document.querySelectorAll('button')[4]
card5Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-tissues').value
        console.log(answer)

    if (answer === "This is Us") {
            console.log("Correct! [TIU catch phrase]")
             alert("Correct! Move on to card #6")
             card5Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})

var question6Answer = "The Deuce"
var card6Button = document.querySelectorAll('button')[5]
card6Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-twins').value
        console.log(answer)

    if (answer === "The Deuce") {
            console.log("Correct! [TD catch phrase]")
             alert(".button")
             card6Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})

var question7Answer = "Insecure"

var card7Button = document.querySelectorAll('button')[6]
card7Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-issa').value
        console.log(answer)

    if (answer === "Insecure") {
            console.log("Correct! [I catch phrase]")
             alert("Correct! Move on to card #7")
             card7Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})

var question8Answer = "Game of Thrones"
var card8Button = document.querySelectorAll('button')[7]
card8Button.addEventListener('click', function () {
    
    let answer = document.querySelector('#answer-iron').value
        console.log(answer)

    if (answer === "Game of Thrones") {
            console.log("Correct! [Winter catch phrase]")
             alert("Correct! Move on to card #7")
             card8Button.setAttribute('disabled', true)
    } else {
            console.log("Wrong!")
            alert("Wrong. Try again!")
    }
})
