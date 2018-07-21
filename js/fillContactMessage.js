
function VulWaardeInMessage(x, y) {
	
	//x Wat wil je huren? 1=BBQ, 2=Stroomgroep...
	if (x === undefined) {
          x = 0;
    }
	//y Hoelang wil je het huren? 1=1 dag, 2=1 weekend, 3=1 week, 4=1 maand
	if (y === undefined) {
          y = 2;
    } 	
	
	// document.getElementById("optie_lijstje").selectedIndex = x;		//eruit gelaten want dropdown weg
	
	//document.form.optie_lijst.options[document.form.optie_lijst.selectedIndex] = x;
    //var data = document.form.optie_lijst.options[document.form.optie_lijst.selectedIndex].value;
	// case 'optie6': en switch (data) weg
	
	var doorsturen = "";
	var voorhoelang= "";
	
	switch(x) {
    case 0:
        doorsturen = "Ik heb een andere vraag/voorstel/opmerking ";
        break;
    case 1:
        doorsturen = "Ik wens de BBQ te huren op dd/mm/jj ";
        break;
	case 2:
        doorsturen = "Ik wens de stroomgroep te huren op dd/mm/jj ";
        break;
	case 3:
        doorsturen = "Ik wens de koeling te huren op dd/mm/jj ";
        break;
	case 4:
        doorsturen = "Ik wens een werfkast te huren startend op dd/mm/jj en tot dd/mm/jj ";
        break;
	case 5:
        doorsturen = "Ik wens de bierkoeler te huren op dd/mm/jj ";
        break;
	case 6:
        doorsturen = "Ik wens de lampjes te huren op dd/mm/jj ";
        break;
    default:
        
	}
	
	switch(y) {
    case 1:
        voorhoelang = "voor één dag.";
        break;
    case 2:
        voorhoelang = "voor een weekend";
        break;
	case 3:
        voorhoelang = "voor een week.";
        break;
	case 4:
        voorhoelang = "voor een maand.";
        break;
    default:
        
	}
	
 document.getElementById("message").value = doorsturen + voorhoelang;
 
 $('#part1').on('hidden.bs.modal', function (e) {
			$('#contact').focus()
			
			document.getElementsById("contact").focus();
})
}



