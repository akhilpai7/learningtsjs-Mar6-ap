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
        it('using the const keyword', () => {
            const MIN_AGE = 13;

            const ACTOR = {
                name: 'Peter',
                role: 'Chewbacca'
            }
            ACTOR.role = 'Chewie';
        });

        it('still has var but it is bad and you should feel bad if you use it', () => {
            const age = 22;
            if (age >= 21) {
                var oldenough = true;
            }
            expect(oldenough).toBe(true);
        });
    });
    describe('literals', () => {
        it('has numeric literals', () => {
            let first = 10;
            let second = 3.12;
            let salary = 10_000_800;
            let hexNumber = 0xff;
            let binary = 0b101010;
            let octal = 0o744;
        });
        it('has string literals', () => {
            let firstString = 'Hello, World';
            expect(firstString).toBe("Hello, World");

            let story = 'He said "oh my gosh"';
            let author = "Flannel O'Connel";

            let lifeStory = `use back tick
            for multi line 
            strings or place holder`;

            let name = 'Akhil', age = 38;
            let info = `His name is ${name} and his age is ${age}.`;
            console.log(info);
        });
        it('has array literals', () => {
            const things = [];
            things[0] = 'Hello';
            things[1] = 42;
            things[832] = 'Too far';
            things[990] = things;

            expect(things[2]).toBeUndefined();

            const friends: (string | number)[] = [];
            friends[0] = 'David';
            friends[1] = 'Jennifer';
            friends[2] = 42;
        });
    });

});