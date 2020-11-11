//REFERENCES
dvOut = document.getElementById("dvOut");

let objects = [
    {color: "#FF0000", height: 100, width: 300},
    {color: "#FFFF00", height: 200, width: 200},
    {color: "#FF0000", height: 300, width: 100},
];

for(i = 0; i < objects.length; i++) {
    var newEl = document.createElement("div");
    newEl.innerHTML = objects[i].color;
    newEl.innerHTML = objects[i].height;
    newEl.innerHTML = objects[i].width;
    dvOut.appendChild(newEl);
    console.log(newEl);
}


   