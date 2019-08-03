/*
function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("tsearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("dt");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
     
      td = tr[i].getElementsByTagName("td")[0];
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

  $(document).ready(function () {
    
                $('#dt').dataTable({
                    destroy: true,
                    "pageLength": 10,
                    "aaSorting": [],
                    "lengthMenu": [[10, 50, 100, -1], [10, 50, 100, "All"]],
                    "dom": 'T<"clear">lfrtip',
                    "tableTools": {
                        "sSwfPath": "//Vendor/datatables/media/swf/copy_csv_xls_pdf.swf"
                    }
                });
            });
   
    */
			$(document).ready(function() {
				$('#dt').dataTable();
			} );
		