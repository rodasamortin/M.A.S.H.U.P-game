let actionSelection =
[
    "Meaning",
    "Act it!",
    "Sing it!",
    "Have a friend answer",
    "Use in a sentence",
    "Picture it"
];

function rollAction()
{
    document.getElementById("number--display__appear").innerHTML = actionSelection[Math.floor(Math.random()* actionSelection.length)];
}

function rollaAction() {
    var number = Math.random()*(7-1) + 1;
    document.getElementById("number--display__appear").innerHTML = Math.floor(number);
}


let wordButton1 = document.querySelector("#wordButton");
//let wordDisplayAppear = document.querySelector("#word--display__appear");

wordButton1.addEventListener("click", wordClickBox);

function wordClickBox() {

    let wordApiUrl = "https://random-word-api.vercel.app/api?words=1";
    
    axios.get(wordApiUrl)
        .then(response => {
            let randomWord = response.data; // Extract the first word from the response

            // Display the random word in the <span> element
  //          wordDisplayAppear.innerHTML = randomWord;
            document.getElementById("word--display__appear").innerHTML = randomWord;
        })
        .catch(error => {
            console.error("Error fetching random word:", error);
            document.getElementById("word--display__appear").innerHTML = "Bye!";
        });


}


/*
> Commented out while trying to fetch random words using API.

TO DO: Once API call is successful, move the API file to new folder name smashApi.js
let wordSelection = [
    "new",
    "good",
    "first",
    "last",
    "long",
    "great",
    "little",
    "own",
    "other",
    "old",
    "right",
    "big",
    "high",
    "different",
    "small",
    "large",
    "next",
    "early",
    "young",
    "important",
    "few",
    "public",
    "bad",
    "able",
    "general",
    "specific",
    "certain",
    "free",
    "open",
    "whole",
    "short",
    "easy",
    "strong",
    "special",
    "clear",
    "recent",
    "late",
    "single",
    "medical",
    "central",
    "common",
    "poor",
    "major",
    "happy",
    "serious",
    "ready",
    "environmental",
    "financial",
    "blue",
    "federal",
    "necessary",
    "military",
    "original",
    "successful",
    "sufficient",
    "electrical",
    "expensive",
    "academic",
    "aware",
    "additional",
    "available",
    "comfortable",
    "traditional",
    "cultural",
    "primary",
    "professional",
    "international",
    "useful",
    "historical",
    "effective",
    "similar",
    "psychological",
    "reasonable",
    "accurate",
    "difficult",


];

function wordClickBox() {
    document.getElementById("word--display__appear").innerHTML= wordSelection[Math.floor(Math.random()* wordSelection.length)];
}
*/