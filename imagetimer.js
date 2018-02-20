var counter=0;
animate();

function animate(){
	var i;
	x=document.getElementsByClassName("myImage");
	y=document.getElementsByClassName("imagetext");
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
		y[i].style.display="none";	
		
	}
	
	
	
	
	x[counter].style.display="block";
	y[counter].style.display="block";
	
	counter++;
	if (counter >= x.length){counter=0;}
	
	setTimeout(animate,4000);
	
	
}