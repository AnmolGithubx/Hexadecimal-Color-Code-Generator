let colorPara = document.getElementById('color'); // got element by id and stored in a variable
colorPara.textContent = "#FFFFFF" // set the default value 

document.getElementById('generate').onclick = function(){ // made a function which works on click 
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // math random is used to generate a random color,, math.floor round the number to the nearest integer
    colorPara.textContent = randomColor; //16777245- is the max value of a 24 bit color and this value is used to convert from decimal to hexadecial 
    document.body.style.backgroundColor = randomColor // document ke andr body ke andr style ke andr background-color vahi print ho jo ki hum hexadecimal code bnvayenge 
};