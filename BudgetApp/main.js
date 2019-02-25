var budgetController = (function () {})();

var UIController = (function () {
  //*********** define the constant varible 
  var DOMString = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value'
  }
  //*********** define the constant varible for reuse
  //(if we change the class name,just change here,
  // not every other line)
 //***********

  //*********** expose this to ouside
  return {
    getInput: function () {      
      return {
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDescription).value,
        value: document.querySelector(DOMString.inputValue).value
      };
    },
    getDomString: function () {
      return DOMString;
    }
  }
  //*********** expose this to ouside
})();


// add a select function










//*****************Globle App Controller
var appController = (function (budgetCtro, UICtro) {
  var Domstring = UICtro.getDomString();

  var ctrlAddItem = function (e) {
    // 1 get the value
    var input = UICtro.getInput();

    // 2 add the item to the budget controller
    // 3 add the item to UI
    // 4 calculate the budget
    // 5 display the budget on the UI
  };


  //*****************add the mouse click event
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  //*****************add the mouse click event


  //*****************add the keypress click event
  document.addEventListener("keypress", function (e) {
    //keypress event. no need to add the listerner to querySelector.
    if (e.keyCode == 13 || e.which == 13) { // event object for keypress, 13 represent 'enter' key
      ctrlAddItem(); //DRY principle
    }

  });
  //*****************add the keypress click event



})(budgetController, UIController); //combine with two controller

//*****************Globle App Controller