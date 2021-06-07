/**
 * This file contains the validate object
 * Validation is kept in a separate object for maintainability
 */
 class ValidateGeometry {
    /**
     * Validate the correct number of parameters 
     * (Not necessary since Javascript ignores additional parameters in function calls, but I like to be tidy)
     * @param {number} numParam The number of parameters that you are testing for
     * @param {Array} arrArgs   The arguments array
     * @throws Will hrow an error if the number of arguments is incorrect
     * @returns {boolean}
     */
    Parameters(numParam, arrArgs) {
        if (arrArgs.length !== numParam) {
            throw new Error('Incorrect number of parameters')
        }    
        return true
    }

    /**
     * Validate the parameters are all numbers
     * @param {Array} arrArgs   The arguments array
     * @throws Will throw an error if any of the arguments is not a number
     * @returns {boolean}
     */
    Numeric(arrArgs) {
        let validateArgs = Array.from(arrArgs);
        validateArgs.forEach(element => {
            if (!(typeof element === 'number')) {
                    throw new Error('All parameters must be numerical.')
            } 
        })
        return true
    }

    /**
     * Validate the parameters are all positive numbers
     * @param {Array} arrArgs   The arguments array
     * @throws Will throw an error if any of the arguments are less than 1
     * @returns {boolean}
     */
    Positive(arrArgs) {
        let validateArgs = Array.from(arrArgs);
        validateArgs.forEach(element => {
            if (parseInt(element, 10) < 1) {
                throw new Error('All parameters must be greater than zero.')
            }
        })
        return true
    }

    /**
     * Validate that the parameters create a valid triangle
     * @param {Array} arrArgs   The arguments array
     * @throws Will throw an error if the length of any side violates the triangle inequality
     * @returns {boolean}
     */
    isTriangle(arrArgs) {
        if(this.Parameters(3, arrArgs) && this.Numeric(arrArgs) && this.Positive(arrArgs)) {
            let elements = Array.from(arrArgs);
            if(!(elements[0] + elements[1] > elements[2])
                || !(elements[1] + elements[2] > elements[0])
                || !(elements[2] + elements[0] > elements[1])) {
                    throw new Error('These sides do not make a triangle')
            }
        }
        return true
    }
 }

 module.exports = {ValidateGeometry}