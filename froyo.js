// Prompts user for list of flavors
const order = prompt(
  "Please enter a list of froyo flavors separated by commas.",
  "vanilla,vanilla,strawberry,chocolate,coffee");
// Splits user input into an array using comma separated values
const usrFlavorArray = order.split(",");
const froyo = {}
// adds each flavor into the froyo object
for (flavor in usrFlavorArray){
  let flavName = (usrFlavorArray[flavor]);
  //If flavor exists object is increased by 1, if it doesn't value is set to 1
  froyo[flavName] = froyo[flavName] +1 || 1; 
}



