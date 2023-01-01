//document.write('<iframe src="http://google.com/showads.php?google_ad_client='+ google_ad_client+'&google_ad_slot='+google_ad_slot+' margin=0 frameborder=0 scrolling=no allowtransparency=true ></iframe>');
//https://stackoverflow.com/questions/2190801/passing-parameters-to-javascript-files
//https://feather.elektrum.org/book/src.html
//https://mrvirk.com/passing-url-parameters-to-iframe-using-javascript.html
var name = document.getElementById("helper").getAttribute("data-name");
//alert(name); // to view the variable value
document.write('<iframe src="http://localhost/rai.web.id/demo/ads.php?google_ad_client='+name+'" margin=0 frameborder=0 scrolling=no allowtransparency=true></iframe>');
