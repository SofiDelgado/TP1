let numero1 = window.prompt("Escriba un numero: ");
let numero2= window.prompt("Escriba un numero: ");
let numero3 = window.prompt("Escriba un numero: ");

if(numero1>numero2 && numero2>numero3)
{
    alert("El mayor es: "+numero1);
}
else{
    if(numero2>numero1 && numero2>numero3)
    {
        alert("El mayor es: "+numero2)

    }
    else{
        if(numero3>numero1 && numero3>numero1)
       {
        alert("El mayor es: "+numero3);
       }
       else{
        if(numero1 == numero2 && numero2==numero3)
        {
            alert("Los 3 numeros son iguales.")
        }
       } 
    }
}