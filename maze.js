window.onload= function(){ 
	document.getElementById("boundary1").onmouseover= function(){
		document.getElementById("boundary1").setAttribute("class","boundary youlose");
	};
	
	var entry = document.querySelectorAll("div.boundary");
	console.log("I am here now");
	
	var result= document.getElementById("status");
	function lost(boundary){
		for(i=0;i<boundary.length;i++)
			boundary[i].setAttribute("class", "boundary youlose");
			result.innerHTML = "You lost";		
		}
	
	for(var i=0; i<entry.length;i++){
		entry[i].addEventListener("mouseover", function(){
			console.log("I got here 2");
			lost(entry);
			});
		}	
	var win= document.getElementById("end");
	
	//check to see if any wall has been touched
	
	win.addEventListener("mouseover", function()
	{
		if(result.innerHTML){
		result.innerHTML = "You won!";
		}
	});
	
	//making the start button clickable to restart the maze
	
	var restart = document.getElementById("start");
	restart.addEventListener("click", function(){
		resetMaze();
		
	});
	
	//function to restart
	
	function resetMaze(){
		for(var i=0; i<entry.length;i++){
			entry[i].setAttribute("class", "boundary boundary");
		}
	};
		
	
};

