//REFERENCES
card = document.getElementById("dvCard");

for(i = 0; i < 16; i++) {
    function generateCard(face) {
        this.face = face;
    }
    let randomFace = Math.round(Math.random() * 4);
    console.log(randomFace);
}