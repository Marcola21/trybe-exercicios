const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testa a função MyFizzBuzz', () => {
    it('Testa funcionalidade da função', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('2')).toBe(false);
    })
})