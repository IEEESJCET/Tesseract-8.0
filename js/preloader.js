function preloader() {
  document.getElementById("preloader-logo").innerHTML =
    '<object class="responsive-svg" type="image/svg+xml" data="./images/tess8.svg"></object>'; // Fixed path

  // Prevent scrolling while preloader is active
  document.body.style.overflow = 'hidden';
  
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("desktop").classList.remove("hidden");
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, 4000);
}
