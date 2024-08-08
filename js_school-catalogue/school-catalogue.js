class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        if (typeof this._numberOfStudents !== 'number' || isNaN(this._numberOfStudents)) {
            console.log('Error');
        }
        return this._numberOfStudents;
    }

    set numberOfStudents(classSize) {
        if (typeof classSize !== 'number' || isNaN(classSize)) {
            throw 'Invalid input: numberOfStudents must be set to a Number.';
        }
        this._numberOfStudents = classSize;
    }

    quickFacts() {
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    }

    static pickSubstituteTeacher(arrayOfTeachers) {
        let i = Math.floor(Math.random() * arrayOfTeachers.length);
        return arrayOfTeachers[i]
    }
}

class Primary extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
        this._pickupPolicy = 'policy';
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

    set pickupPolicy(policy) {
        if (typeof policy !== 'string') {
            throw 'Invalid input: pickupPolicy must be entered as a string.';
        }
        this._pickupPolicy = policy;
    }
}

class Middle extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
    }
}

class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

let phyllisEW = new Primary('Phyllis E. W.', 'Primary', 500);
console.log(phyllisEW.name);
console.log(phyllisEW.level);
phyllisEW.numberOfStudents = 478;
console.log(phyllisEW.numberOfStudents);
phyllisEW.pickupPolicy = "Students must be picked up by a parent, guardian, or a family member over the age of 13.";
console.log(phyllisEW.pickupPolicy);

let ketteringMiddle = new Primary('Kettering Middle', 'Middle', 500);
console.log(ketteringMiddle.name);
console.log(ketteringMiddle.level);
ketteringMiddle.numberOfStudents = 652;
console.log(ketteringMiddle.numberOfStudents);

let largoHigh = new Primary('Largo High', 'High', 500);
console.log(largoHigh.name);
console.log(largoHigh.level);
largoHigh.numberOfStudents = 787;
console.log(largoHigh.numberOfStudents)
largoHigh.sportsTeams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
console.log(largoHigh.sportsTeams);
