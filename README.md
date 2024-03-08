# Tarea Servidor Express
Repositorio para las tareas del modulo backend de coderhouse 

Para la tarea servidor express y endpoint
Se debe ejecutar en la consola  [#1589F0] node ApiProducts.js [#1589F0]

# Ejecución del sitio

## http://servidor:8080/products           
Muestra todos los productos (10)

## http://servidor:8080/products?limit
Muestra los primeros limit=numero productos 

## http://servidor:8080/products/1   
Muestra el producto id = 1, puede ser hasta el id 10

## Nuevo producto (metodo POST)
http://localhost:8080/api/products/
title=rueda
description=rueda carbono
price=10000
thumbnail=img_rueda.jpg
code=rcsh1
stock=10&status=true

## agregar producto a carro (metodo POST)
http://localhost:8080/api/cart/
idc=1
idp=1
quantity=10
