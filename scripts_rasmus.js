let datepicker = document.querySelector(".date");
let date = datepicker.value; 
let end_date;

let cam_picker = document.querySelector("#camera");
let position = cam_picker.value; 

cam_picker.addEventListener("change", function(){
    document.querySelector(".slideshow-container").innerHTML = "";

    let position = cam_picker.value; 
    console.log(position);
    let RoverName = "curiosity"; // we can do a switch here where case 1 = curiosity, case 2 = ??? etc
    //let SolNumber = 1000;
    //let pageNr = 2;
    let ApiKey = 'VgavwUC9voBguJRtX3UTeFOTIz8lAmsFfDMnTD4W';
    //let img = document.getElementById("img");
    //let new_date = end_date;
  
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + RoverName + "/photos?earth_date=" + end_date + "&camera=" + position + "&api_key=" + ApiKey;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        let data = myJson;
        //console.log(data.photos[2].img_src);

      for (let index =0; index < 1; index++) {
          const photo = data.photos[index];
          console.log(photo);

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
          console.log(position);
    
      }  
    }); 
});

datepicker.addEventListener("change", function(){
    document.querySelector(".slideshow-container").innerHTML = "";
    let input = this.value;   
    console.log(input);
    end_date = input; 
    let RoverName = "curiosity"; // we can do a switch here where case 1 = curiosity, case 2 = ??? etc
    //let SolNumber = 1000;
    //let pageNr = 2;
    let ApiKey = 'VgavwUC9voBguJRtX3UTeFOTIz8lAmsFfDMnTD4W';
    //let img = document.getElementById("img");
    //let new_date = end_date;
  

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + RoverName + "/photos?earth_date=" + end_date + "&api_key=" + ApiKey;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        let data = myJson;
        console.log(data.photos[2].img_src);

      for (let index = 0; index < 1; index++) {
          const photo = data.photos[index];
          console.log(photo);

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
          console.log(position);
    
      }  
    }); 
    })

    
