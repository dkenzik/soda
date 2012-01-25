/* Author: Stanislav Venzerul
 */


//Make the navigation link highlights work when clicking on the page. 
$(document).ready(function() {
	var str = location.href.toLowerCase();
	$("ul.nav li a").each(function() {
		if(str.indexOf(this.href.toLowerCase()) > -1) {
			$("li.active").removeClass("active");
			$(this).parent().addClass("active");
		}
	});
})
