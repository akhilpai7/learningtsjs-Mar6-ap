import * as formatters from "../src/formatters";
describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {

            // Named Function

            expect(add(2, 2)).toBe(4);
            function add(a: number, b: number): number {
                return a + b;
            }
            // Anonymous Functions

            const subtract = function (a: number, b: number) {
                return a - b;
            }
            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe!');
                } else {
                    return a / b;
                }
            }

            const age = 21;
            const message = age >= 21 ? "Old Enough" : "Too Young";






            function makeMeASalad(lettuce: string, dressing: string) {
                return {
                    lettuce: 'Using ' + lettuce,
                    with: dressing
                }
            }

            const salad = makeMeASalad('Romain', 'Russian');

            expect(salad.with).toBe('Russian');


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

        it('using rest parameters', () => {

            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(2, 2, 2)).toBe(6);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
    describe('higher order functions', () => {
        /* 
        * - takes one or more functions as arguments (i.e. procedural parameters),
        *-  returns a function as its result. 
        */
        it('takes a function as an argument', () => {

            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);

            expect(formatters.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
            const wrapInStars = formatters.wrap('***');
            expect(wrapInStars('Tacos')).toBe('***Tacos***');
            expect(formatters.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

            //const wrapInCarots: formatters.Transform = (x) => `^^^${x}^^^`;
            const wrapInCarots = formatters.wrap('^^^');
            expect(formatters.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');

            // function wrapInStars(what: string): string {
            //     return `***${what}***`;
            // }

        });

    });
    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('taking a look at every member of an array', () => {
            numbers.forEach((x) => console.log(x));
        });
        describe('methods that return new arrays', () => {
            it('has a filter', () => {
                function isEven(n: number): boolean {
                    return n % 2 === 0;
                }
                const evens = numbers.filter(isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            });
            it('map', () => {

                const doubled = numbers.map(n => n * 2);

                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });
            //expect(true).toBe(true);
            it('do a practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];

                // Give me the makeAndModel of each vehicle with < 100_000 miles
                const lowMileageVehicles = vehicles // Vehicle[{},{},{}]
                    .filter(v => v.mileage < 100_000) // Vehicles[{}, {}]
                    .map(v => v.makeAndModel); // String[] ["", ""]


                expect(lowMileageVehicles).toEqual(['Toyota Prius', 'Ford Explorer']);
            });
            describe('methods that produce a single (scalar) value', () => {
                it('has methods that check the membership of an array', () => {
                    expect(numbers.some(n => n > 8)).toBe(true);
                    expect(numbers.every(n => n % 2 === 0)).toBe(false);
                });
                it('has reduce', () => {

                    expect(numbers.reduce((s, n) => s + n)).toBe(45);
                    expect(numbers.reduce((s, n) => s + n, 100)).toBe(145);
                });

            });
        });

    });

    describe('a demo', () => {
        it('using reduce for something "real"', () => {
            interface Vehicle {
                vin: string;
                makeAndModel: string;
                mileage: number;
            }
            const vehicles: Vehicle[] = [
                { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
            ];

            interface HighestMileageVehicle {
                vin: string;
                mileage: number;
            }

            const seed: HighestMileageVehicle = {
                vin: null,
                mileage: -1
            };

            const answer = vehicles.reduce((p, n) => {
                if (n.mileage > p.mileage) {
                    return {
                        vin: n.vin,
                        mileage: n.mileage
                    };
                } else {
                    return p
                }

            }, seed);

            expect(answer).toEqual({
                vin: '9999',
                mileage: 182000
            });
        });
    });
});