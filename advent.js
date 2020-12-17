//this array will keep track of the days that have been clicked
let daysOpened = [JSON.parse(localStorage.getItem('clickedDays'))];

let icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];

  //reassign the icons to the randomList


const boxes = document.querySelectorAll('.num');
//this function will run when we click on a box
icons = randomizeIcons(icons);
function handleBoxClick(event){
  const clickBox = event.currentTarget.dataset.day;
  const today = new Date();
  //compares todays date to the boxes
if(today.getDate() >= Number(clickBox)){
  //console.log('Go ahead Open it')
  //show emoji for that today
  console.log(icons[Number(clickBox)]);
  const day = event.currentTarget;
  //grab html element for the day we clicked
  day.innerHTML = icons[Number(clickBox)]
  storeDaysClicked(Number(clickBox));

}else{
  console.log('No peaking, You CANT open it yet')
}


  //console.log(today.getDate());
  //console.log(clickBox);
}

console.log(boxes);

//add event listener to each and every box
boxes.forEach(function(box){
box.addEventListener('click',handleBoxClick);
});

//this function will store in localStorage days that have been clicked
function storeDaysClicked(day){
  //add the leckevent to local storage
  //first check if their is a clickedday in local storage
if (!localStorage.getItem('clickedDays')){//clickedDays does NOT exist
  daysOpened = [];
}else {//their is something in clickDays
  daysOpened = JSON.parse(localStorage.getItem('clickedDays'));
}
if(!daysOpened.includes(day)){//if the number is not already in the array
daysOpened.push(day);
}
localStorage.setItem('clickDays', JSON.stringify(daysOpened));


}//end of storeDaysClicked

// this will randomize the emojis
function randomizeIcons(oldList){
  let randomList= [];
  if (!localStorage.getItem('icons')){// their is not a list in local storage
    //randomize icons and place in local storage
    while(oldList.length > 0){
      //random index form the old icons left from the oldList
  const index = Math.floor(Math.random()*oldList.length);
  //put random item in old list into the new list
  randomList.push(oldList[index]);
  //remove item from the old list
  oldList.splice(index,1); //start at index and remove 1 item
    }
    //put the random list into our local localStorage
    localStorage.setItem('icons',JSON.stringify(randomList));
  }else {//their is a list of randomized icons
    randomList= JSON.parse(localStorage.getItem('icons'));
    //TODO --> show the clicked clicked boxes on the page

}
return randomList;
}//end of randomizeIcons

//this function will showw the prevsiuly clicked boxes
showClickedBoxes();
function showClickedBoxes(){
  if (daysOpened !== null){//if there is something in there
    boxes.forEach(function(box){
      const day = Number(box.dataset.day);
      if(daysOpened.includes(day)){
      box.innerHTML = icons[day];}
    });

  }
}//end of showClickedBoxes

//TODO ----------->
//randomize list of emojis
//keep track of day hat have been clicked
//and show the emoji when the page loads

//this function will reset the calendar
function resetCalendar(){
  //only reset if they say yes to a propmt
  const anwser = confirm('Are you sure you want to reset the calendar? This action cannot be undone?');
  if (anwser){


//clear all items in local storage
  localStorage.clear();
  //reload the page
  document.location.reload();
}
}//end of reset Calendar

//add rest button to the boottom of the Calendar
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Calendar';
//add event listener
resetButton.addEventListener('click',resetCalendar);
//place the button on the page
 //grab the footer
 const footer = document.querySelector('footer');
 //add the button to the footer after the opening the currentTarget
 footer.insertAdjacentElement('afterbegin',resetButton);
 //afterbegin ,beforebegin, beforeend ,afterend

//add a little style
footer.style.textAlign = 'center';
footer.style.paddingTop = '20px';






//end of line
