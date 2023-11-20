//The Kelvin temperature scale is used by scientists because they wanted a temperature scale where zero reflects the complete absence of thermal energy.
let kelvin = parseInt(window.prompt("Please put a Kelvin temperature value: "));

//Celsius is similar to Kelvin - the only difference is that Celsius is 273 degrees less than Kelvin.
let celsius = kelvin - 273;

//Fahrenheit is a scale for measuring temperature, in which water freezes at 32 degrees and boils at 212 degrees.
let fahrenheit = Math.floor(celsius * (9/5) + 32);

document.write(`The Kelvin temperature of ${kelvin} is ${fahrenheit} degrees in Fahrenheit.`);
//On Newton's scale, freezing air was 0º, blood heat was 12º and boiling water was 34º.
let newton = Math.floor(celsius * (33/100));
document.write(`<br> The Celsius temperature of ${celsius} is ${newton} in Newton Scale.`);
