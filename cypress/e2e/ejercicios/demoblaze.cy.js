//// Importamos cypress
//// URL: https://www.saucedemo.com/
///<reference types="cypress" />

// Escenario: Autenticación correcta de usuario
// Dadas las credenciales válidas de un usuario
// Cuando inicia sesión
// Entonces ingresa al shop
describe('Autenticación correcta de Usuario', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
    })

    it('Pruebas Login', ()=>{
        cy.get('#login2').click()
        cy.get('#loginusername').type('Taca',{force: true})
        cy.get('#loginpassword').type('tuki',{force: true})
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer .btn-primary').click()
    }) 

})

// Escenario: Autenticación errónea de usuario
// Dadas las credenciales inválidas de un usuario
// Cuando inicia sesión
// Entonces no puede ingresar al shop
describe('Autenticación incorrecta de Usuario', () => {

})

// Escenario: Ordenamiento de producto por mayor precio
// Dado que un usuario se encuentra en la página principal
// Cuando ordena los productos de mayor a menor precio
// Entonces los productos se reordenan con el criterio elegido
describe('Ordenamiento de productos por mayor precio', () => {

})

// Escenario: Agregar un producto al carrito
// Dado que un usuario agrega un producto
// Cuando ingresa al ver el carrito
// Entonces puede ver el producto agregado anteriormente
describe('Agregar producto al carrito de compras', () => {

})

// Escenario: Sumar precio de todos los  productos en el carrito
// Dado que un usuario tienen más de un producto en el carrito de compras
// Cuando hace el checkout
// Entonces el precio total de los item debe ser sumar a la suma de los precios de cada producto
describe('Agregar producto al carrito de compras', () => {

})