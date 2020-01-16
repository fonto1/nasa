

// fetching a page of photos from curiosity:

let RoverName = "curiosity"; // we can do a switch here where case 1 = curiosity, case 2 = ??? etc
let SolNumber = 1000;
let pageNr = 1;
let ApiKey = "whateverthekey";

let ULR = `https://api.nasa.gov/mars-photos/api/v1/rovers/${RoverName}/photos?sol=${SolNumber}&page=${pageNr}&api-key=${ApiKey}`;
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY


fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    let data = myJson;
  });