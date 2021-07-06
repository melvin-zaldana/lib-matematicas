module.exports = {
    /**
     * Suma de 2 números
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} n1 Número 1 de la suma
     * @param {*} n2 Número 2 de la suma
     * @returns 
     */
    suma: function (n1,n2){
        return (this.esNumero(n1,n2) ? n1+n2: this.mensajeError());
    },
    
    /**
     * Resta de 2 números
     * @example
     * n1 = 3, n2 = 1 => resultado 2
     * @param {*} n1 Número 1 de la resta
     * @param {*} n2 Número 2 de la resta
     * @returns 
     */
    resta: function (n1,n2){
        return (this.esNumero(n1,n2) ? n1-n2: this.mensajeError());
    },

    /**
     * Multiplicación de 2 números
     * @example
     * n1 = 1, n2 = 3 => resultado 3
     * @param {*} n1 Número 1 de la multiplicación
     * @param {*} n2 Número 2 de la multiplicación
     * @returns 
     */
    multiplicacion: function (n1,n2){
        return (this.esNumero(n1,n2) ? n1*n2: this.mensajeError());
    },

    /**
     * División de 2 números
     * @example
     * n1 = 9, n2 = 3 => resultado 3
     * @param {*} n1 Número 1 de la división
     * @param {*} n2 Número 2 de la división
     * @returns 
     */
    dividir: function (n1,n2){
        return (this.esNumero(n1,n2) ? n1/n2: this.mensajeError());
    },
    /**
     * Mensaje de error que se ejecuta cuando algun valor no es númerico
     */
    mensajeError: function() {
        console.log('Uno o dos valores no son númericos');
    },
    /**
     * Función para comprobar si los valores son numericos
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    esNumero: function (n1, n2){
        if(typeof n1 !== 'number' || typeof n2 !== 'number'){
            return false;
        }
        return true;
    }
}