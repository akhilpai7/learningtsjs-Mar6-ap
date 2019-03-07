//import { formatName as fn } from "../src/formatters";
import * as formatters from "../src/formatters";

describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {
            //Named Function
            function add(a: number, b: number): number {
                return a + b;
            }
            expect(add(2, 2)).toBe(4);

            //Anonymous Functions
            const subtract = function (a: number, b: number) {
                return a - b;
            }
            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => {
                if (b / 0) {
                    throw new Error('Not allowed');
                }
                else {
                    return a / b;
                }
            }

            const age = 21;
            const message = age >= 21 ? 'Old Enough' : 'Too Young';
        });
        it('passing arguments to functions', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('using rest parameters', () => { //high ordered functions: function that takes function as parameter or returns a function

            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(2, 2, 2)).toBe(6);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
    describe('Higher Order Functions', () => {
        /* 
      * - takes one or more functions as arguments (i.e. procedural parameters),
      *-  returns a function as its result. 
      */
        it('takes a function as an argument', () => {

            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);

            expect(formatters.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
            const wrapInStars = wrap('***');
            expect(wrapInStars('Tacos')).toBe('***Tacos***');
            expect(formatters.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

            //const wrapInCarots: formatters.Transform = (x) => `^^^${x}^^^`;
            const wrapInCarots = wrap('^^^');
            expect(formatters.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');

            // function wrapInStars(what: string): string {
            //     return `***${what}***`;
            // }

            function wrap(chars: string): formatters.Transform {
                return (x) => `${chars}${x}${chars}`;
            }
        });
    });
});