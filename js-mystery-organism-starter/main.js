// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = function () {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Code below

let randomNumGenerator = function () {
  let number = Math.floor(Math.random() * 100);
  return number
}
const pAequorFactory = (num, array) => {

  return {
    _specimenNum: num,
    _dna: array,

    _mutate() {
      let mutatedDNA = [];
        mutatedDNA.push(this._dna);
      let randomBase = Math.floor(Math.random() * 14);

      if (this._dna[randomBase] === "A") {
        const notA = ['T', 'C', 'G'];
        this._dna[randomBase] = notA[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomBase] === "T") {
        const notT = ['A', 'C', 'G'];
        this._dna[randomBase] = notT[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomBase] === "C") {
        const notC = ['A', 'T', 'G'];
        this._dna[randomBase] = notC[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomBase] === "G") {
        const notG = ['A', 'T', 'C'];
        this._dna[randomBase] = notG[Math.floor(Math.random() * 3)];
      };
      return `this is the MUTATED DNA for specimen #${this._specimenNum}: ${mutatedDNA}` ;
    },

    _compareDNA(otherSpecimen) {
      passed = 0
      current = 14
      for (i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === otherSpecimen._dna[i]) {
          passed++
        } else {
          passed += 0
        }
      }
      function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
     } 

      return `specimen #${this._specimenNum} and specimen #${otherSpecimen._specimenNum} have ${Math.floor(percentage(passed, current))}% DNA in common`
    },

    _willLikelySurvive() {
      passed = 0
      current = 15
      for (i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === "C") {
          passed++
        } else if (this._dna[i] === "G"){
          passed++
        }else {
          passed += 0
        }
      }
      function percentage(partialValue, totalValue) {
        let truth;
        let percentage = Math.floor((100 * partialValue) / totalValue)
        if ((100 * partialValue) / totalValue >= 60) {
          truth = true;
        } else {
          truth = false;
        } return truth;
     }
      return percentage(passed, current)
    }

  };
};

function pAequor30(ElementCount){
  let pAequorSpecimen = [];
  let pAequorSurvived = [];
    for (let i = 0; i < ElementCount; i++) {
        pAequorSpecimen[i] = pAequorFactory((i), mockUpStrand());
        if (pAequorSpecimen[i]._willLikelySurvive() === true) {
          pAequorSurvived.push(pAequorSpecimen[i])
          if (pAequorSurvived.length === 30) {
            break
          }
        }
    } console.log(pAequorSurvived);
}
pAequor30(5000)

/* pAequor_1 = pAequorFactory(randomNumGenerator(), mockUpStrand());
pAequor_2 = pAequorFactory(randomNumGenerator(), mockUpStrand());
pAequor_3 = pAequorFactory(randomNumGenerator(), mockUpStrand());

//console.log( `this is the ORIGINAL DNA for specimen #${pAequor_1._specimenNum}: ${pAequor_1._dna}` );
console.log( pAequor_1._mutate() );
console.log( pAequor_1._willLikelySurvive() )
console.log( pAequor_1._compareDNA(pAequor_3) )

//console.log( `this is the ORIGINAL DNA for specimen #${pAequor_2._specimenNum}: ${pAequor_2._dna}` )
console.log( pAequor_2._mutate() );
console.log( pAequor_2._willLikelySurvive() )
console.log( pAequor_2._compareDNA(pAequor_1) )


//console.log( `this is the ORIGINAL DNA for specimen #${pAequor_2._specimenNum}: ${pAequor_3._dna}` )
console.log( pAequor_3._mutate() );
console.log( pAequor_3._willLikelySurvive() )
console.log( pAequor_3._compareDNA(pAequor_2) ) */




