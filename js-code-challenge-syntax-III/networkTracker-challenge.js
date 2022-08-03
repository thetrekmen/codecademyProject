class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime() {
      const usedData = this.users * 5;
      const extraData = this.data - usedData;
      if (extraData >= 10) {
        return true
      } else {
        return false
      }
    }
  }
  
  
  const library = new Network(60, 9) 
  console.log(library.movieTime())