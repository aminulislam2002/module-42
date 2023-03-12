// alert("How are you?");
const showAlert = () => {
  alert("How are you dosto? taka ace dar dibi?");
};
const confirmAlert = () => {
  const result = confirm("How are you bondhu? taka ace dar dibi?");
  console.log(result);
  if (result === true) {
    alert("Thank you dost.");
  } else {
    alert("Tore aji block korbo");
  }
};
const getInfo = () => {
  const name = prompt("Whats your name?");
  console.log(name);
  if (name === null) {
    alert("Naam na dile kam hobe na! ja fooooot!");
  } else {
    alert("Welcome! aho batija buke aho!");
  }
};
