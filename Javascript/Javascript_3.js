//function for assignment 59 converting a Greek god/goddess name into its Roman equivalent based on attributes
function display_Roman(god) {
 var romangod = god.getAttribute("data-roman-counterpart");
 document.getElementById("romangod").innerHTML = god.innerHTML + " is the same as " + romangod;

}