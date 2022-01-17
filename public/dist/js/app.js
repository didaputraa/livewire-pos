function app(){
	
	$.ajax({
		url:'http://localhost'
	}).done(e=>{
		console.log(200);
	});
}

function replaceUrl(link){
	window.history.replaceState(null, null, link);
}

if(currentURL == baseURL)
{
	
}