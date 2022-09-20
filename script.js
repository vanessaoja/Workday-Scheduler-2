//set current day 
var today =
    moment().format("dddd MMMM Do YYYY");

document.getElementById("currentDay").append(today);

// set current hour in a variable
var currentHour = moment().hour();
console.log(currentHour);

var setUpHourBlock = function (hourBlock) {
    console.log(hourBlock)

    // parse hourblock div id into a number
    var hourId = Number.parseInt(hourBlock.id)
    console.log(hourId);

    // save user input into a variable
    var textInputArea = hourBlock.querySelector("input")
    // compare hourblock id to current military time and give each hourblock a class
    if (hourId < currentHour){
        textInputArea.classList.add('past');
    }else if(hourId === currentHour){
        
        textInputArea.classList.add('present');
    }else{
        
        textInputArea.classList.add('future');
    }

    var saveButton = hourBlock.querySelector(".saveBtn")
    console.log(saveButton)

     // get tasks from local storage
     var saveTasks = localStorage.getItem(hourId)
     console.log(saveTasks)
     textInputArea.value = saveTasks

      // save tasks to local storage
    saveButton.addEventListener("click", function () {
        let taskInput = textInputArea.value;
        console.log(taskInput)
        localStorage.setItem(hourId, (taskInput));

    })
}
