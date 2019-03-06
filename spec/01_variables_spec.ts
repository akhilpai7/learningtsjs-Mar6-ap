describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x: number | string = 12;

            expect(x).toBe(12);

            x = 13;

            expect(x).toBe(13);

            let y;

            y = 18;
            expect(y).toBe(18);

            y = 'Tacos!';

            expect(y).toBe('Tacos!');

            //x = function () { console.log('Hello, World') }; 



        });
    });
});