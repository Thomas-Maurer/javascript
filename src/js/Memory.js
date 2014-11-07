// A simple object with constructor.
var mesImages = new Object({});
mesImages.addresses = new Array( "memory01", "memory02","memory03","memory04","memory05","memory06", "memory01", "memory02","memory03","memory04","memory05","memory06");
//Doc ready
$( document ).ready(function () {
	random();
	$( "a" ).click(function (event) {
	var id = event.target.id;
	  $( "#"+id ).toggleClass('opaque');
});
});

var random = function (){
	mesImages.addresses = _.shuffle(mesImages.addresses);
	$.each(mesImages.addresses, function (index, value) {
    if (index == 6) {
      $( ".container" ).append( "<div class='row'></div>");
    }else{
  		$( ".container" ).append( "<div class='col-md-2'><a href='#' class='thumbnail'><img class='faded' id="+index+" src='css/asset/"+value+".png' alt='...''></a></div>" );
	}
  });
};

