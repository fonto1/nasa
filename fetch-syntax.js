// fetching a page of photos from curiosity:

let RoverName = 'curiosity'; // we can do a switch here where case 1 = curiosity, case 2 = ??? etc
let SolNumber = 1000;
let pageNr = 2;
let ApiKey = 'VgavwUC9voBguJRtX3UTeFOTIz8lAmsFfDMnTD4W';
let img = document.getElementById("img");

// let ULR = `https://api.nasa.gov/mars-photos/api/v1/rovers/${RoverName}/photos?sol=${SolNumber}&page=${pageNr}&api_key=${ApiKey}`;
let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + RoverName + "/photos?sol=" + SolNumber + "&page=" + pageNr + "&api_key=" + ApiKey;
let curiosity = document.getElementById("curiosity");
let opportunity = document.getElementById("opportunity");
let spirit = document.getElementById("spirit");
curiosity.addEventListener('click', Click(e));
opportunity.addEventListener('click', Click(e));
spirit.addEventListener('click', Click(e));

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        // console.log(myJson);
        let data = myJson;
        console.log(data.photos[0]);
        img.src = data.photos[0].img_src;
    });