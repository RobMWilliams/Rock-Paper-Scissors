function enlargeImage(img) {
    img.style.transform = "scale(1.2)"; // increase the scale of the image
    img.style.transition = "transform 0.5s"; // add a smooth transition effect
  }
  
  function resetImage(img) {
    img.style.transform = "scale(1)"; // reset the scale of the image
    img.style.transition = "transform 0.5s"; // add a smooth transition effect
  }
  