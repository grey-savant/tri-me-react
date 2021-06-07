const {ValidateGeometry} = require('../utils/validate-geometry');

/**
 * This file contains the triangle object.
 */
class Triangle {
    /**
     * @param {number} a;
     * @param {number} b;
     * @param {number} c;
     */

    constructor(a, b, c) {
        const arrArgs = Array.from(arguments);
        const convertedArgs = [];
        arrArgs.forEach(element => convertedArgs.push(this.convertParams(element))); 
        const validateTriangle = new ValidateGeometry();
        validateTriangle.isTriangle(convertedArgs);

        /** @private @const */
        this.a = arrArgs[0];

        /** @private @const */
        this.b = arrArgs[1];

        /** @private @const */
        this.c = arrArgs[2];
    }

    /**
     * Test function
     * @returns {string}
     */
    ping() {
        return (`I'm here.`);
    }

    /** @return {number} */
    getA() {
        return this.a;
    }

    /** @return {number} */
    getB() {
        return this.a;
    }

    /** @return {number} */
    getC() {
        return this.a;
    }

    /**
     * Strict integer parsing converts string values into numbers or NaN
     * @param {*} val 
     * @return {*} Numeric value or NaN
     */
    convertParams (val) {  
        if (/^[-+]?(\d+|Infinity)$/.test(val)) {
            return Number(val)
        } else {
            return val
        }
    }

    /**
     * Returns a string describing the type of the triangle 
     * based on the constructor parameters
     * @param {*} a 
     * @param {*} b 
     * @param {*} c 
     * @return {string} String describing the type of triangle described by the inputs
     */
    Type(a, b, c) {
        if (this.a === this.b && this.b === this.c) {
            return (`Equilateral Triangle`)
        } else if (this.a === this.b || this.b === this.c || this.c === this.a) {
            return (`Isoceles Triangle`)
        } else {
            return (`Scalene Triangle`)
        }
    }
}

module.exports = { Triangle };