const usrFlavorString = prompt(
  "Please enter a list of froyo flavors separated by commas.",
  "vanilla,vanilla,strawberry,chocolate,coffee"
  );

const usrFlavorArray = usrFlavorString.split(",");
const froyo = {}

for (flavor in usrFlavorArray){
  let flavName = (usrFlavorArray[flavor]);
  //If flavor exists object is increased by 1, if it doesn't value is set to 1
  froyo[flavName] = froyo[flavName] +1 || 1; 
}
console.table(froyo);


