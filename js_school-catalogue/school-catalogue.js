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
    constructor(name, level, numberOfStudents){
        super(name, 'high', numberOfStudents);
        this._pickupPolicy = 'policy';
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }

    set pickupPolicy(policy){
        if (typeof policy !== 'string' || isNaN(policy)) {
            throw 'Invalid input: pickupPolicy must be entered as a sting.';
        }
        this._pickupPolicy = policy;
    }

}

class Middle extends School {
    constructor(name, level, numberOfStudents){
        super(name, level , numberOfStudents);
    }
}

class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams){
        super(name, level , numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams;
    }

}

// let phyllisEW = new School('Phyllis E. W.', 'Primary', 500);
// console.log(phyllisEW);
// phyllisEW.numberOfStudents = 478;
// console.log(phyllisEW.numberOfStudents);
// console.log(School.pickSubstituteTeacher(["Ms. Angelina Jolie", "Mr. Eric Jones", "Ms. Paris Hilton", "Mr. Kayne West", "Mr. Bob Ziroll"]))

let phyllisEW = new Primary('Phyllis E. W.', 'Primary', 500);
console.log(phyllisEW);