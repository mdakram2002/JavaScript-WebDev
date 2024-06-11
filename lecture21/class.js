console.log("EveryThing is Fine: ");

class Human {
    // Properties

    name = "Akram"  // Public
    #age = 22;      // Private (private mark = #)
    wt = 50;        // Public
    ht = 5.7;       // Public

    // Behaviour
    // runnig() {
    //     console.log("i'm runnig at the age of: ", this.#age); // if any user define is private then access to using this keyWord "this.#"
    // }
    walking() {
        console.log("i'm walking");
    }

    get fetchAge() {
        return this.#age;
    }

    set modifyAge(val) {
        this.#age = val;
    }
}
let obj = new Human();

console.log(obj.name);
console.log(obj.wt);
console.log(obj.ht);

// obj.runnig();

obj.walking();
obj.set();
