document.querySelectorAll(".color-option").forEach((item) => {
  item.addEventListener("click", (e) => {
    let loader = document.getElementById("loader");

    let newColor = e.currentTarget.getAttribute("id");
    let bgc = e.target.getAttribute("color");

    document.body.style.backgroundColor = bgc;
    loader.firstElementChild.setAttribute("fill", newColor);
    loader.style.display = "block";
    document.getElementById("umbrellaImage").style.display = "none";
    document.getElementById("logo").style.display = "none";

    setTimeout(() => {
      let newUmbrella = new Image();
      newUmbrella.src = `./assests/${newColor}umbrella.png`;

      newUmbrella.onload = function () {
        document.getElementById("loader").style.display = "none";

        document.getElementById("umbrellaImage").style.display = "block";
        let logo = document.getElementById("logo");
        if (!logo.src) {
          logo.style.display = "none";
        } else {
          logo.style.display = "block";
        }
        document.getElementById("umbrellaImage").src = this.src;
      };
    }, 1000);
  });
});

document.getElementById("logoUpload").addEventListener("change", function (e) {
  if (e.target.files[0].size / (1024 * 1024) < 5) {
    let logo = URL.createObjectURL(e.target.files[0]);
    let logImg = document.getElementById("logo");
    let umbrella = document.getElementById("umbrellaImage");
    let loader = document.getElementById("loader");
    document.getElementById("logoName").innerText = e.target.files[0].name;
    console.log(e.target.files[0]);
    umbrella.style.display = "none";
    loader.style.display = "block";
    logImg.style.display = "none";

    setTimeout(() => {
      logImg.src = logo;
      loader.style.display = "none";
      umbrella.style.display = "block";
      logImg.style.display = "block";
    }, 2000);
  }
});
