// Selected the button
const btn = document.querySelector('#clickbtn');

//adds event listener
btn.addEventListener('click', handleClick);
 
// function to handel the click
function handleClick() {
    //math.floor: rounds to the bottom, math.random produces 0 - 1 = 0.45, 0 - 256, rounded to a whole number
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    // change the bg color of body 
    document.body.style.backgroundColor = bgColor;
}