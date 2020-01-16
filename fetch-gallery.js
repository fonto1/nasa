// fetching a page of photos from curiosity:

let RoverName = 'curiosity'; // we can do a switch here where case 1 = curiosity, case 2 = ??? etc
let SolNumber = 1000;
let pageNr = 2;
let ApiKey = 'VgavwUC9voBguJRtX3UTeFOTIz8lAmsFfDMnTD4W';
let img = document.getElementById("img");

// let ULR = `https://api.nasa.gov/mars-photos/api/v1/rovers/${RoverName}/photos?sol=${SolNumber}&page=${pageNr}&api_key=${ApiKey}`;
let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + RoverName + "/photos?sol=" + SolNumber +"&page=" + pageNr + "&api_key=" + ApiKey;


fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    // console.log(myJson);
    let data = myJson;
    let photos = data.photos;

    let galleryArray = photos.slice(0, 12);
    // console.log(galleryArray);

    galleryArray.forEach(photo => {
      let wrapper = document.createElement("div");
      wrapper.classList.add("mySlides");
      wrapper.classList.add("fade");
      let imageWrapper = document.createElement("div");
      imageWrapper.classList.add("imagewrapper");
      let image = document.createElement("img");
      image.classList.add("image");
      image.src = photo.img_src;
      imageWrapper.appendChild(image);
      wrapper.appendChild(imageWrapper);
      let parentElement = document.querySelector(".slideshow-container");
      parentElement.insertAdjacentElement('afterbegin', wrapper);
    });
});


