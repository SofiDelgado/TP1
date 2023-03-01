let numero = prompt("Escriba un numero: ");
if(numero%3==0 || numero%5==0 ||numero%2==0 ||numero%7==0)
{
    if(numero%2==0)
    {
        document.write("El numero es divisible en 2");
    }
    if(numero%3==0)
    {
        document.write("<br>El numero es divisible en 3");
    }
    if(numero%5==0)
    {
        document.write("<br>El numeroes divisible en 5");
    }
    if(numero%7==0)
    {
        document.write("<br>El numero es divisible en 7");
    }
}
else
{
    alert("El numero "+numero+" no es divisible en 2,3,5 ni 7");
}