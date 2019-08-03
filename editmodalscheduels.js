$('#metermodal').click(function(event){
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var body = e.data('value');
    $("#myModal").modal("show");
    document.getElementById("meterdiv").style.visibility = "initial";
    document.getElementById("modaltitle").innerHTML = "Meters Selection";
});
$('#routemodal').click(function(event){
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var body = e.data('value');
    $("#myModal").modal("show");
    document.getElementById("meterdiv").style.visibility = "hidden";
    document.getElementById("modaltitle").innerHTML = "Route Selection";
});