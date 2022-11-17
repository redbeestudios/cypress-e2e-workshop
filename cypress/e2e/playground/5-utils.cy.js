/// Importamos cypress
/// <reference types="cypress" />

/// Cypress viene con cierta funcionalidades que nos van a ayudar con nuestras pruebas. 
/// Repasemos algunas de ellas

describe("Utilidades de Cypress", () => {
    beforeEach(() => {
      cy.visit("https://the-internet.herokuapp.com/");
    });

    //Podemos reutilizar código creando Comandos. Los comandos son funciones agregadas al archivo command.js
    it("Commands", () => {
      cy.contains("Form Authentication").click();
      cy.login('tomsmith','SuperSecretPassword!')
      cy.get('#flash').should('be.visible').and('include.text','You logged into a secure area!')
    });
  
    // Podemos manejar los datos de pruebas usando Fixtures. Los fixtures son archivos json que contiene datos de pruebas
    it("Fixtures", () => {
      cy.fixture('user.json').then((userData) => {
        cy.contains("Form Authentication").click();
        cy.login(userData.username,userData.password)
        cy.get('#flash').should('be.visible').and('include.text','You logged into a secure area!')
      })
    });

    // Podemos manipular con facilidad las Cookies de nuestro sitio. 
    // Tambien mediante plugins se pueden manipular el LocalStorage.
    // Esto nos puede servir para acceder a urls o elementos que necesiten cookies
    it("Cookies", () => {
      cy.getCookie('newCookie').should('be.null')
      cy.setCookie('newCookie','newValue')
      cy.getCookie('newCookie').should('have.property','value','newValue')
      cy.clearCookie('newCookie')
      cy.getCookie('newCookie').should('be.null')  
    });

    // Podemos manipular el localStorage usando *windows* o
    it("LocalStorage", () => {
      var mensaje = localStorage.getItem('mensaje')
      expect(mensaje).be.null
      localStorage.setItem('mensaje', 'hola mundo')
      mensaje = localStorage.getItem('mensaje')
      expect(mensaje).be.eq('hola mundo')
    });
  
    // Podemos modificar atributos y estilos CSS mediante el método invoke()
    it("Modificar atributos de elementos", () => {
      cy.get('.heading').invoke('text','New Text')
      cy.contains('New Text').invoke('attr','style','color:red')
    });

    it.only("Eventos en el Navegador", () => {
        cy.contains('JavaScript Alerts').click()

        const stub = cy.stub()
        cy.on ('window:alert', stub)

        cy.contains('Click for JS Alert').click().then(()=>{
          expect(stub.getCall(0)).to.be.calledWith('I am a JS Alert')
        })
      });
    });
  