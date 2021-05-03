// import functions and grab DOM elements
//inputs
const nounOne = document.getElementById('noun-one');
const nounTwo = document.getElementById('noun-two');
const nounThree = document.getElementById('noun-three');
const verbOne = document.getElementById('verb-one');
const verbTwo = document.getElementById('verb-two');
const adjOne = document.getElementById('adj-one');
const adjTwo = document.getElementById('adj-two');
//img
const img = document.getElementById('cover');
//changes
const nounOutputOne = document.getElementById('alonzo-one');
const nounOutputTwo = document.getElementById('alonzo-two');
const nounOutputThree = document.getElementById('alonzo-three');
const nounOutputFour = document.getElementById('branden-one');
const nounOutputFive = document.getElementById('madden-one');
const nounOutputSix = document.getElementById('madden-two');
const nounOutputSeven = document.getElementById('madden-three');
const nounOutputEight = document.getElementById('madden-four');
const verbOutputOne = document.getElementById('dimitra-one');
const verbOutputTwo = document.getElementById('dimitra-two');
const adjOutputOne = document.getElementById('dimitra-three');
const adjOutputTwo = document.getElementById('dimitra-four');
const adjOutputThree = document.getElementById('dj-one');
//button
const btn = document.getElementById('button');
// initialize state
btn.addEventListener('click', () =>{
    const nounOneValue = nounOne.value;
    const nounTwoValue = nounTwo.value;
    const nounThreeValue = nounThree.value;
    const verbOneValue = verbOne.value;
    const verbTwoValue = verbTwo.value;
    const adjOneValue = adjOne.value;
    const adjTwoValue = adjTwo.value;

    //getting words to change
    nounOutputOne.textContent = nounOneValue;
    nounOutputTwo.textContent = nounOneValue;
    nounOutputThree.textContent = nounOneValue;
    nounOutputFour.textContent = nounTwoValue;
    nounOutputFive.textContent = nounThreeValue;
    nounOutputSix.textContent = nounThreeValue;
    nounOutputSeven.textContent = nounThreeValue;
    nounOutputEight.textContent = nounThreeValue;
    verbOutputOne.textContent = verbOneValue;
    verbOutputTwo.textContent = verbTwoValue;
    adjOutputOne.textContent = adjOneValue;
    adjOutputTwo.textContent = adjTwoValue;
    adjOutputThree.textContent = adjTwoValue;

    img.src = "https://i.ytimg.com/vi/rnXUbePYbOk/maxresdefault.jpg";
});

// set event listeners to update state and DOM