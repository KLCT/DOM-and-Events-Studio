// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const flightStat = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const ship = document.getElementById("rocket");
    let count = 0;
    let inTheAir = 0;
    let newHeight = 0;
    let downCount = 0;

    takeOff.addEventListener("click", function(event){
        let confirm = window.confirm("Confirm shuttle is ready for takeoff");

        if(confirm){
            flightStat.innerText = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            newHeight = 10000;
            height.innerText = newHeight;
        }
        inTheAir += 1;
        event.stopPropagation();
    })

    landing.addEventListener("click", function(event){
        let alert = window.alert("The shuttle is landing. Landing gear engaged.");

        flightStat.innerText = "The shuttle  has landed.";
        background.style.backgroundColor = "green";
        height.innerText = 0;
        ship.style.padding = "";
        event.stopPropagation();
    })

    abort.addEventListener("click", function(event){
        let confirm = window.confirm("Confirm you want to abort");

        if(confirm){
            flightStat.innerText = "Mission Aborted";
            background.style.backgroundColor = "green";
            height.innerText = 0;
            ship.style.padding = "";
        }
        event.stopPropagation();
    })

    up.addEventListener("click", function(event){
        count++;
        let x = 10*count;
        if(inTheAir !== 0){
            newHeight = (x*1000);
            height.innerText = newHeight+10000;
            x = x+10;
            ship.style.paddingBottom = String(x) + "px";
        } else{
            alert("Shuttle must takeoff FIRST!!!!");
        }
        if(height.innerText > 50000){
            background.style.backgroundColor = "black";
        }
        event.stopPropagation();
    })

    down.addEventListener("click", function(event){
        count++;
        let x = 10*count;
        ship.style.paddingTop = String(x) + "px";
        newHeight = (x*(-1000));
        height.innerText = newHeight-10000;
        event.stopPropagation();
    })

    right.addEventListener("click", function(event){
        count++;
        let x = 10*count;
        ship.style.paddingLeft = String(x) + "px";
        event.stopPropagation();
    })

    left.addEventListener("click", function(event){
        count++;
        let x = 10*count;
        ship.style.paddingRight = String(x) + "px";
        event.stopPropagation();
    })

}

window.addEventListener("load", init);