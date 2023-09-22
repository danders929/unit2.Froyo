// Prompts user for list of flavors
const order = prompt(
  "Please enter a list of froyo flavors separated by commas.",
  "vanilla,vanilla,strawberry,chocolate,coffee");

// Splits user input into an array using comma separated values
const usrFlavorArray = order.split(",");


// adds each flavor into the froyo object
function count(flavors){
  const froyo = {}
  for (const flavor of usrFlavorArray){
    // If flavor exists object is increased by 1, if it doesn't value is set to 1
    froyo[flavor] = froyo[flavor] +1 || 1; 
  }
  return froyo;
}
const output = count(usrFlavorArray);
// Executes function using the user input array and displays a table showing the count.

console.table(output);
