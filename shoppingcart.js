//this selects all elements in the document with the class .addtobag
let shoppingbag = document.querySelectorAll(".addtobag");

//Creating an array of the items in my store.
let items = [
  {
    name: "The Sailor",
    tag: "sailorhat",
    price: 50,
    inCart: 0
  },
  {
    name: "The Fedora",
    tag: "fedorahat",
    price: 65,
    inCart: 0
  },
  {
    name: "The Cap",
    tag: "cap",
    price: 20,
    inCart: 0
  }
];

//1. Adding a loop instead of writing the code four times. This will loop through all shopping bags starting from 0 to 3. There will be an incremenet of one each time it loops.
//2. Creating an event using a function so that each time I click on the add to bag button, something happens.
for (let i = 0; i < shoppingbag.length; i++) {
  shoppingbag[i].addEventListener("click", () => {
    bagNumbers();
  });
}
//Creating a function to state how many hats I am adding to the cart. Local storage ensures the data stays in the shopping bag until removed.
function bagNumbers() {
  let hatNumbers = localStorage.getItem("bagNumbers");
  console.log(hatNumbers);
  //Using console.log to check what data type it will return
  console.log(typeof hatNumbers);

  //You can use parseInt to convert a string into a number. Checking this works with console.log
  hatNumbers = parseInt(hatNumbers);
  console.log(typeof hatNumbers);

  //if statement = 1. if there are already products in my shopping bag, must add 1 more hat to the total. 2. if there isn't anything in the shopping bag, add that 1 item
  if (hatNumbers) {
    localStorage.setItem("bagNumbers", hatNumbers, +1);
    document.querySelector(".bag").textContent = hatNumbers + 1;
  } else {
    localStorage.setItem("bagNumbers", 1);
    document.querySelector(".bag").textContent = 1;
  }
}
//struggling with adding values to bag. will continue tomorrow.
