$('#edit1').click(function(event){
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var body = e.data('value');
    $("#myModal1").modal("show");
    document.getElementById("Nameinput1").setAttribute('value','xyz');
    document.getElementById("Noteinput1").value = "xyz";
   
    document.getElementById("editb").style.visibility = "initial";
});
$('#view1').click(function(event){
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var body = e.data('value');
    $("#myModal1").modal("show");
    document.getElementById("Nameinput1").setAttribute('value','xyz');
    document.getElementById("Noteinput1").value = "xyz";
    document.getElementById("editb").style.visibility = "hidden";
});
