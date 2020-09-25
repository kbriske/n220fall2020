let x = mouseX;
let y = mouseY; 
  
function setup() { 
      
    // Create Canvas 
    createCanvas(500, 500); 
} 
   
function draw() { 
      
    // Set the background color 
    background(200);  
      
    // SEt the filled color 
    fill('green'); 
      
    // Set the font size 
    textSize(25); 
      
    text('Click mouse to change color', 30, 30); 
      
    // Fill color according to mouseClicked()  
    fill(valueX, 255-valueY, 255-valueX); 
      
    // Draw ellipse   
    rect(mouseX, mouseY, 25, 30); 

} 
  
function mouseClicked() { 
    function draw() {
        rect(x,y,25,30);
    }
} 