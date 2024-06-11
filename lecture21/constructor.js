console.log("EveryThing is Fine: ");

class Human {
    // Properties

    name = "Akram"  // Public
    #age = 22;      // Private (private mark = #)
    #wt = 50;        // Private
    #ht = 5.7;       // Private

    constructor(newAge, newHeight, newWieght) {

        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWieght;
    }

    // Behaviour
    runnig() {
        console.log("i'm runnig");
    }
    walking() {
        console.log("i'm walking");
    }

    get fetchWt() {
        return this.#wt;
    }

    set modifyWt(val) {
        this.#wt = val;
    }
}

let obj = new Human(22, 6, 50);

console.log(obj.age);
console.log(obj.ht);
console.log(obj.fetchWt);
