// Own JS
    function addPerson() {
    var node = document.createElement("LI");                 // Create a <li> node
        var sName = document.getElementById("myNewName").value;
            var textnode = document.createTextNode(sName);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
                }
                /*
    function myFilterFunction() {
        var sSearchWord = document.getElementById("myFilterBox").value;
        console.log(sSearchWord);
        } */

// NEWFILTERLIST
function myFilterFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myFilterBox");
  filter = input.value.toUpperCase();

  ul = document.getElementById("myList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerHTML;
    
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}