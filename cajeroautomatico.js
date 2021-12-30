class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }

}

function entregarDinero() {
    papeles = 0;
    div = 0;
    entregado = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    var dineroporentregar = dinero;
    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if (dinero > 0) {

        resultado.innerHTML = "No puedo darte esa cantidad :(";
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                dineroentregado =+ dineroporentregar;
                    var billete = e.valor;
                    for(var b of caja){
                        if(billete == b.valor){
                            b.cantidad = b.cantidad - e.cantidad; 
                                   
                        }
                    }
                for (var i = 1; i <= e.cantidad; i++) {
                    resultado.innerHTML += "<img src=" + e.imagen.src + " />";
                }
            }
        }
        console.log(caja); 
    }

}


var imagenes = [];
imagenes[5] = "5.png";
imagenes[10] = "10.png";
imagenes[20] = "20.png";
imagenes[50] = "50.png";
imagenes[100] = "100.png";

var caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var dinero = 0;
var dineroentregado = 0;
var entregado = [];
var papeles = 0;
var div = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);