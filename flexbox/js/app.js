//REFERENCES
container = document.getElementById("container");

items = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

for(i = 0; i < items.length; i++) {
    newEl = document.createElement("div");
    newEl = items[i];
    container.innerHTML = (newEl);
}
