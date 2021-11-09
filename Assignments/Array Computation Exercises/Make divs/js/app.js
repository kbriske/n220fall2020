//REFERENCES
dvOut = document.getElementById("dvOut");

let objects = [
    {color: "#FF0000", height: 100, width: 300},
    {color: "#FFFF00", height: 200, width: 200},
    {color: "#FF0000", height: 300, width: 100},
];

for(i = 0; i < objects.length; i++) {
    var newEl = document.createElement("div");
    newEl.style.backgroundColor = objects[i].color;
    newEl.style.height= objects[i].height + "px";
    newEl.style.width = objects[i].width + "px";
    dvOut.appendChild(newEl);
    console.log(newEl);
}


   