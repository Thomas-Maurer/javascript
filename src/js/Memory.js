// A simple array with constructor.
var mesImages = new Array( "memory01", "memory02","memory03","memory04","memory05","memory06" );
//Doc ready
$( document ).ready(function() {
	random();
});

var random = function (){
	mesImages = shuffle(mesImages);
	$.each(mesImages, function (index, value) {
  		$( ".row" ).append( "<div class='col-xs-6 col-md-3'><a href='#' class='thumbnail'><img src='css/asset/"+value+".png' alt='...''></a></div>" );
	});
};