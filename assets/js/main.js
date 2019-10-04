let customName = document.getElementById('customName');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

// Raw Text Strings
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, ' +
    'they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, ' +
    'but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Event Listener
randomize.addEventListener('click', result);

// Functions
function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}
function result(){
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx", xItem);
    newStory = newStory.replace(":insertx", xItem);
    newStory = newStory.replace(":inserty:" , yItem );
    newStory = newStory.replace(":insertz:" , zItem);

    if(customName.value !== ""){
        newStory = newStory.replace("Bob" , customName.value);
    }
    if(document.getElementById("uk").checked) {
        let weight = Math.round(300/14) + ' stone';
        let temperature =  Math.round(5 / 9 * (94-32)) + " centigrade";

        newStory = newStory.replace("94 fahrenheit" , temperature);
        newStory = newStory.replace("300 pounds" , weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}