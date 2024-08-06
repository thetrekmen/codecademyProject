class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }
    get title() {
        return this._title;
    }
    get isCheckedout() {
        return this._isCheckedOut;
    }
    get ratings() {
        const ratingsGenerator = (numberOfFansVoted) => {
            for (let count = 0; count < numberOfFansVoted; count++) {
                const fanRating = Math.floor(Math.random() * 5) + 1;
                this._ratings.push(fanRating)
            } return this._ratings
        };
        const numberOfFansVoted = Math.floor(Math.random() * 10)
        return ratingsGenerator(numberOfFansVoted);
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }

    getAverageRating() {
        let ratingsSum = this._ratings.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0);
        // return ratingsSum
        const ratingsAverage = ratingsSum / this._ratings.length;
        return ratingsAverage;
    }

    addRating(individualRatings) {
        this._ratings.push(individualRatings);
    }
}


class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}


class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}


class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs
    }

    shuffle() {
        let shuffledSongs = [];
        let originalSongs = this._songs;
        for (let i = originalSongs.length; i > 0; i--) {
            let counter = Math.floor(Math.random() * i)
            shuffledSongs.push(this._songs[counter])
            originalSongs.splice(counter, 1)
        }
        return shuffledSongs
    }
}


const Drizzit3 = new Book('Drizzit 3', 'R.A. Salvator', 400);
console.log(Drizzit3.title)
console.log(Drizzit3.author)
console.log(Drizzit3.pages)
console.log(Drizzit3.isCheckedout)
Drizzit3.toggleCheckOutStatus()
console.log(Drizzit3.isCheckedout)
console.log(`fan ratings: [${Drizzit3.ratings}]`)
console.log(`average rating: ${Drizzit3.getAverageRating()}`)

const speed = new Movie('Speed', 'Jan de Bont', 116);
console.log(speed.title)
console.log(speed.director)
console.log(speed.runTime)
console.log(speed.isCheckedout)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedout)
speed.addRating(5)
speed.addRating(4)
speed.addRating(5)
console.log(`average rating: ${speed.getAverageRating()}`)

const theCarter3 = new CD('The Carter 3', 'Lil Wayne', ["The Twist",
    "Smooth",
    "Mack the Knife",
    "How Do I Live",
    "Party Rock Anthem",
    "I Gotta Feeling",
    "Macarena (Bayside Boys Mix)",
    "Physical",
    "You Light Up My Life",
    "Hey Jude"]);
console.log(theCarter3.title);
console.log(theCarter3.artist);
console.log(theCarter3.songs);
console.log(theCarter3.shuffle());