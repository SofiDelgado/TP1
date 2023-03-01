let frase = prompt("Escriba una frase: ");
numcaracteres = frase.length;
for(let i=0;i<numcaracteres; i++)
{
    if(frase.charAt(i)=="a" ||frase.charAt(i)=="e" ||frase.charAt(i)=="i" ||frase.charAt(i)=="o" ||frase.charAt(i)=="u" )
    {
        document.write(frase.charAt(i));
    }
}