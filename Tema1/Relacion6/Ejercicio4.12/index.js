var col = prompt("Introduce el numero de columnas")
col=parseInt(col)
var height =prompt("Introduce el alto de las celdas")
var width = prompt("Introduce el ancho de las celdas")


document.write("<table border=\"0\", cellspacing=\"2\", bgcolor=\"black\", width=\""+width*col+"\"><tr bgcolor=\"white\", height=\""+height+"\">")
for (let i=1; i<=col; i++){
    if (i%2==0){
        document.write("<td width=\""+width+"\" > &nbsp;</td>")
    } else {
        document.write("<td bgcolor=\"black\", width=\""+width+"\" > &nbsp;</td>")
    }
}
document.write("</tr></table>")
