let myHealth = 100
let enemyHealth = 100
let x;
let y;
let enemydamage = [10, 20]
let imgblastoise;
let damagelog;
function setup(){
    createCanvas(500, 500)
    imgblastoise = loadImage('blastoise.png');
}
function draw(){
    background(255)
    fill(100)
    square(0, 0, 250)
    fill(100)
    square(250, 250, 250)
    fill(51)
    rect(0, 320, 250, 60)
    fill('Yellow')
    text("punch", 110, 340, 100, 100)
    fill(51)
    rect(0, 380, 250, 60)
    fill('Yellow')
    text("blast", 110, 400, 100, 100)
    fill(51)
    text("My health",0, 255, 100, 100)
    fill(51)
    text("Enemy health", 250, 0, 100, 100 )

    if(mouseX > 0 && mouseX < 250 && mouseY > 320 && mouseY < 380){
        fill(100)
        rect(0, 320, 250, 60, 20)
        fill('yellow')
        text("punch", 110, 340, 100, 100)
    }
    if(mouseX > 0 && mouseX < 250 && mouseY > 380 && mouseY < 440){
        fill(100)
        rect(0, 380, 250, 60, 20)
        fill('Yellow')
        text("blast", 110, 400, 100, 100)
    }
    //Player Health length
    if(myHealth == 100){
        y = 250
    }
    if(myHealth == 90){
        y = 225
    }
    if(myHealth == 80){
        y = 200
    }
    if(myHealth == 70){
        y = 175
    }
    if(myHealth == 60){
        y = 150
    }
    if(myHealth == 50){
        y = 125
    }
    if(myHealth == 40){
        y = 100
    }
    if(myHealth == 30){
        y = 75
    }
    if(myHealth == 20){
        y = 50
    }
    if(myHealth == 10){
        y = 25 
    }
    if(myHealth <= 0){
        y = 0 
        fill('red',)
        text("You Lose! Refresh Page!", 250, 250, 100, 100)
    }
    //enemy health bar length
    if(enemyHealth == 100){
        x = 250
    }
    if(enemyHealth == 90){
        x = 225
    }
    if(enemyHealth == 80){
        x = 200
    }
    if(enemyHealth == 70){
        x = 175
    }
    if(enemyHealth == 60){
        x = 150
    }
    if(enemyHealth == 50){
        x = 125
    }
    if(enemyHealth == 40){
        x = 100
    }
    if(enemyHealth == 30){
        x = 75
    }
    if(enemyHealth == 20){
        x = 50
    }
    if(enemyHealth == 10){
        x = 25 
    }
    if(enemyHealth <= 0){
        x = 0 
        fill('purple')
        text("You Win! Refresh Page!", 250, 250, 100, 100)
    }
    fill('red')
    rect(0, 270, y, 20)
    fill('red')
    rect(250, 20, x, 20)   
}

function mouseClicked(){
    if(mouseX > 0 && mouseX < 250 && mouseY > 320 && mouseY <380){
        enemyHealth = enemyHealth - 10
        myHealth = myHealth - enemydamage[Math.round(Math.random())]
    }
    if(mouseX > 0 && mouseX < 250 && mouseY > 380 && mouseY < 440){
        enemyHealth = enemyHealth - 30
        myHealth = myHealth - enemydamage[Math.round(Math.random())]
    }
}