console.log('Assets . home.js loaded for ');
    
    let input = document.getElementById("myInput");

    // // Execute a function when the user releases a key on the keyboard
    // input.addEventListener("keyup", function(event) {
    //   // Number 13 is the "Enter" key on the keyboard
    //   if (event.keyCode === 13) {
    //     // Cancel the default action, if needed
    //     event.preventDefault();
    //     // Trigger the button element with a click
    //     document.getElementById("myBtn").click();
    //   }
    // });
    var col=0;
    function myFunction1() {
col1=input.value;
col1=col1||0;
console.log(col1);
    }

    function myFunction(ind) {
        // Declare variables
        let filter, table, tr, td, i, txtValue;
console.log(col,'fgf');
col=ind || col;
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      console.log(col)
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[col || 0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }