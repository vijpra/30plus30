function changeReadMore(id) { 
	const mycontent = 
		document.getElementById('more-' + id); 
	const mybutton = 
		document.getElementById('more-button-' + id); 
	const dots = document.getElementById("dots") 

	if (mycontent.style.display === 'none'
		|| mycontent.style.display === '') { 
		mycontent.style.display = 'inline'; 
		dots.style.display = "none"; 
		mybutton.textContent = 'Read Less'; 
	} else { 
		mycontent.style.display = 'none'; 
        mybutton.textContent = 'Read More'; 
        dots.style.display = "inline"; 
       
		
	} 
} 

