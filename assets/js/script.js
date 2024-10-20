nombre = "Axel" //variable de cadena de texto
edad = 38 // numero entero
nota = 5.0 // numero decimal que utiliza punto

numero1 = 100
numero2 = 50
//alert(numero1 + numero2)

//nombre = prompt ("ingrese su nombre")
//alert("Hola " + nombre)

//num1 = prompt ("ingrese el primer numero")
//num2 = prompt ("ingrese el segundo numero")
//resultado = Number (num1)+ Number (num2)
//alert("el resultado es: " + resultado)


//Manejo de DOM con QUERYSELECTOR, con este selector podemos usar el ID, CLASE o ETIQUETA

elemento = document.querySelector ("h1")

// entre comillas esta la parte que queremos guardar en elemento y guarda todo, valor estilo etc

titulo = document.querySelector ("h1")
titulo.innerHTML=("probando jv para cambiar texto")

// Solicito datos
direccion = prompt ("ingrese direccion")
depto = prompt ("ingrese numero")
comuna = prompt ("comuna")

// Selecciono donde van los datos
let txtdireccion = document.querySelector (".direccion")
let txtdepto = document.querySelector (".depto")
let txtcomuna = document.querySelector (".comuna")

txtdireccion.innerHTML=direccion
txtdepto.innerHTML=depto
txtcomuna.innerHTML=comuna