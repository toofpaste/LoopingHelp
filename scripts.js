
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var ans = [];


    blanks.forEach(function(blank) {//assinging blanks[0] to our variable blank on the first loop. then blank = blanks[1] on the 2nd loops. etc etc etc.....


      var userInput = $("input#" + blank).val(); //getting users answers and jumping to the next element in the blanks array using the forEach looping method


      ans.push(userInput); //pushing user inputted answers into our ans array
    });
    var i = 0;
    ans.sort(); //sorting ans array alphabetically


    var loudAns = ans.map(function(word){ //steps through the answer array and assigns it to variable word. The function then returns the uppercased word and it is mapped into the loudAns array we created. It then loops and repeats the process for the next word in the original ans array
      return word.toUpperCase();
    });



    //the for loop and the while loop both work the same way as the forEach loop does. The main difference being that we define how many times we want it to loop inside of our parameter. For EX: we created variable i and made it 0. by saying (i < 6) and by adding 1 to i every loop, we are telling the loop to run 6 times. writing it as (i <= 5) would achieve the same number of loops.







  while(i < 6){
      //since blanks[i] (blanks[0] on the first loop) is the first element in the array. it equals "item1" we want to identify that it is a class we are referencing so we add the "." in front of "item1" so together it equals ".item1"

    $("." + blanks[i]).text(loudAns[i]); //since i = 0 blanks[i] is the same as blanks[0] same with loudAns[i] its grabbing the first element at loudAns[0] because i === 0 at this time

       i += 1; //after grabbing everything out of index blanks[0] and loudAns[0] we want to move onto the next element in the array. so we add 1 to i which is at 0. So i is now 1 after this line of code runs. Now the loop starts over. if you look back up our blanks[i] and loudAns[i] (which were previously blanks[0] and loudAns[0]) are now blanks[1] and loudAns[1] because we added 1 to i. Changing its value to 1. this repeats over and over until our statement (i < 6) is no longer true. This will check every index in our array from blanks[0] up to blanks[5]. and same with loudAns[0] to loudAns[5]

    };


  //this same loop written as a for loop would look like this
  //for(var i = 0; i < 6; i += 1){
  //looped code here
  //}


  //basically it goes for([varible definition]var i = 0; [equation to define number of loops]i < 6; [increment the variable]i += 1);

  //what a for loop would look like to accomplish the same thing as the while loop

  for(var i = 0; i < 6; i += 1){
    $("." + blanks[i]).text(loudAns[i]);
  }; //as you see the interior code is the same except we move the i += 1 inside of the loop parameters itself. Which is where we declare variable i as well.


  //if the length of the array we are looping through is a length that is defined by the user (the amount of elements in the array changes) use arrayName.length instead of the "6" in (i < 6) so the while loop changes to while(i <= arrayName.length) and the for loop changes to for(var i = 0; i <= arrayName.length; i += 1); It needs the <= sign instead of the < sign so that the last element inside of the array gets used. For Ex. if our array has 6 elements we want the loop to run 6 times. 1 time for each element. and (i < 6) will only run to through the 5th element. But (i <= 6) will run when i === 6;


// (i <= arrayName.length) will always run the same amount of time that a forEach function loop would. (if you increment i by 1);




    $("#list ").show();

    event.preventDefault();
  });
});
