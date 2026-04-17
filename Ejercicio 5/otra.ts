const lado = Number(prompt("Ingrese el lado de tu cuadrado"))
const area = lado * lado
if(area > 25)
{
    alert("El area en mayor a 25")
}
else
{
    if(area < 25)
    {
        alert("El area es menor a 25")
    }
    else
    {
        if (area == 25)
        {
            document.write("El area es igual a 25")
        }
    }
}