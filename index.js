let screen=document.getElementById('screen');               // getting the screen //
buttons=document.querySelectorAll('button');                //this gets us all the buttons //
let screenValue='';                                              // value in our input screen //
for(items of buttons){                                          // for loop advnced //
              items.addEventListener('click',(e)=>{           // "=>" is a short form to of "functions"
    buttonText=e.target.innerText;                         // getting the innertext of buttons //
    console.log(buttonText);
       if (buttonText=='C'){                              // if "c" ie clear button is pressed we clr the screen //
             screenValue ="";
              screen.value=screenValue;                               // clearing or setting the screen to nothing //
      }
      else if (buttonText=='='){ 
          screen.value= eval(screenValue);            // this evaluates the expression provided//
            }
            else {
                screenValue+=buttonText;                       // this will set the value inside of screen to text on button "+=" is used for concatenation//
                  screen.value=screenValue;
            }

})
}

