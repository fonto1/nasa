// fetching a page of photos from curiosity:

let RoverName = 'curiosity'; // we can do a switch here where case 1 = curiosity, case 2 = ??? etc
let SolNumber = 1000;
let pageNr = 2;
let ApiKey = 'VgavwUC9voBguJRtX3UTeFOTIz8lAmsFfDMnTD4W';
let img = document.getElementById("img");
let info = document.getElementById("info");
let body = document.querySelector("body");

let curiosity = document.querySelector("#curiosity");
console.log(curiosity);
let opportunity = document.getElementById("opportunity");
let spirit = document.getElementById("spirit");
curiosity.addEventListener('click', Click);
opportunity.addEventListener('click', Click);
spirit.addEventListener('click', Click);





// let ULR = `https://api.nasa.gov/mars-photos/api/v1/rovers/${RoverName}/photos?sol=${SolNumber}&page=${pageNr}&api_key=${ApiKey}`;
let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + RoverName + "/photos?sol=" + SolNumber + "&page=" + pageNr + "&api_key=" + ApiKey;


function Click(e) {
    Rovername = e.target.id;
    console.log(Rovername);


    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            // console.log(myJson);
            let data = myJson;
            console.log(data);
            console.log(data.photos[0]);
            img.innerHTML += `<img src="${data.photos[0].img_src}">`;
            info.style.display ="none";
            
            //img.setAttribute("src") = data.photos[0].img_src;
        })};