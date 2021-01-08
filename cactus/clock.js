var hour = new Date().getHours ()



if (hour <12 && hour >  1) 
{ document.write("Buna dimineata")
    
}   else if (hour >= 12 && hour >  18) { 
    document.write("Buna ziua")  }
   else if  (hour >= 18 && hour <= 23)  {
    document.write("Buna seara") }
    else { (hour > 23) 
        document.write ("Noapte buna")  }
        