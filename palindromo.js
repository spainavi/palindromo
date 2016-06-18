	var palindromo=prompt("dime un palindromo");
	var palindromo=palindromo.toLowerCase();
	var palindromo1=palindromo.replace(/\s/g, '');
	var  palin1="";
	var respuesta = (palin1==palindromo1) ? "tienes un palindromo" : "no tienes un palindromo" ;	
	

	for ( var i=palindromo1.length - 1; i>=0 ; i--){
		palin1=palin1+palindromo1[i];
		alert(respuesta);
	};
	    

        /*if (palin1==palindromo1){
			alert("tienes un palindromo")
	   
		}else{
			alert("no tienes un palindromo")
		};*/