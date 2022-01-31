const container = document.querySelector('#container');


function create(){

    for(let i = 1 ; i<=256 ; i++){

const boxes = document.createElement("div");
boxes.classList.add("boxes")

boxes.addEventListener("mouseover",function(e){
            e.target.style.backgroundColor="blue";
        })
 container.appendChild(boxes)
    }
    
}

create()


function clear(){

    document.getElementById("container").innerHTML=""

}

const mini = document.getElementById("btn");
mini.addEventListener('click', function myFunction() {

    clear();
   userPlays();
})


function userPlays(){
let userInput = prompt("Enter a number between 10 and 100");
if(userInput>100 || userInput<10 ){alert("INPUT NEEDS TO BE BETWEEN 10 AND 100");
create()
}

else{

for (let i = 0 ; i<=userInput*userInput ; i++){

    const flexWidth= 640/userInput 
    const flexHeight= 640/userInput

    const flexis = document.createElement("div");
    flexis.classList.add("flexis")
    flexis.style.width = flexWidth + "px"
    flexis.style.height = flexHeight + "px"
    
    flexis.addEventListener("mouseover",function(e){
                e.target.style.backgroundColor="blue";
            })
     container.appendChild(flexis)
        }

}
  }
            