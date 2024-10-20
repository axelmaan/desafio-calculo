
precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let valor = 400000
let cantidad = 0;

document.getElementById("btnsumar").addEventListener("click",function(){
    valor+=precio
    cantidad++
    refresh()
}) 

document.getElementById("btnrestar").addEventListener("click",function(){
    if(valor>0){
        valor-=precio
        cantidad--
        if(valor<0){
            valor=0
            }
        if (cantidad<0){
            cantidad=0
        }    
        refresh()
    }

}) 

function refresh() {
    document.getElementById ("valor-total").innerText=valor
    document.getElementById ("cantidad").innerText=cantidad
}
