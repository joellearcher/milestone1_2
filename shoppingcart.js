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
//2. Creating an event using a function so that each time I click on the add to bag button, something happens. This is for bagNumbers.
for (let i = 0; i < shoppingbag.length; i++) {
  shoppingbag[i].addEventListener("click", () => {
    bagNumbers(items[i]);
  });
}

//This function will check to see if an item exists in the shopping bag first. Must remmeber to call each event created.
function onLoadBagNumbers() {
  let hatNumbers = localStorage.getItem("bagNumbers");

  if (hatNumbers) {
    document.querySelector(".bag span").textContent = hatNumbers;
  }
}

//Creating a function to state how many hats I am adding to the cart. Local storage ensures the data stays in the shopping bag until removed.
function bagNumbers(items) {
  let hatNumbers = localStorage.getItem("bagNumbers");
  //Using console.log to check what data type it will return

  //You can use parseInt to convert a string into a number. Checking this works with console.log
  hatNumbers = parseInt(hatNumbers);

  //if statement = 1. if there are already products in my shopping bag, must add 1 more hat to the total. 2. if there isn't anything in the shopping bag, add that 1 item
  if (hatNumbers) {
    localStorage.setItem("bagNumbers", hatNumbers, +1);
    document.querySelector(".bag span").textContent = hatNumbers + 1;
  } else {
    localStorage.setItem("bagNumbers", 1);
    document.querySelector(".bag span").textContent = 1;
  }
  setItems(items);
}
//Need to check if cart items already exist. Using boolean.
function setItems(items) {
  let bagItems = localStorage.getItem("itemsInCart");
  //Parse JSON into Javascript object
  bagItems = JSON.parse(bagItems);

  //This statement means that if cart items is not null, that means that soemthing else exists. And then increasing whatever is in the cart by 1.
  if (bagItems != null) {
    bagItems[items.tag].inCart += 1;
  } else {
    items.inCart = 1;
    bagItems = {
      [items.tag]: items
    };
  }
  //Need to pass this as a JSON file, not Javascript
  localStorage.setItem("itemsInCart", JSON.stringify(bagItems));
}

onLoadBagNumbers();
//Finishing up for today. I've realised the for loop should be looping through the hat items, not the shopping bag. I'm also a little stuck on the shopping bag not increasing over 2 items, even when clicking numerous times.
//Will continue tomorrow.
