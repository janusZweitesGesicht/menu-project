let usernow2 = JSON.parse(localStorage.getItem("usernow"));
let allusers = JSON.parse(localStorage.getItem("allusers"));
let allcreatedtours = [];
let createdTour = {
  name: "",
  opis: "",
  county: "",
  maxpeopl: "",
  duration: "",
  foto: "",
};
let body = document.getElementsByTagName("body")[0];
let fotocka = document.querySelector(".fotocka");
let sname = document.querySelector(".name");
let v1;
let topis = document.querySelector(".topis");
let v2;
let county = document.querySelector(".county");
let v3;
let maxpeopl = document.querySelector(".maxpeopl");
let v4;
let duration = document.querySelector(".duration");
let v5;
let c1 = false;
let j = false;
let a = false;
let za = false;
let eba = false;
let lsa = false;
//!
// let update = () => {
//   for (let j = 0; j < allusers.length; j++) {
//     if (allusers[j].username == usernow2.username) {
//       allusers.splice(j, 1);
//       allusers.push(usernow2);
//       localStorage.setItem("allusers", JSON.stringify(allusers));
//       console.log(allusers[j]);
//     }
//   }
// };

sname.addEventListener("blur", () => {
  j = true;
  v1 = sname.value;
  createdTour.name = v1;
  console.log(sname.value);
  if (v1 != "" && v4 != "" && v3 != "" && v4 != "" && v5 != "" && c1 == true) {
    creatbuttton.addEventListener("click", test);
  }
});

topis.addEventListener("blur", () => {
  a = true;
  v2 = topis.value;
  createdTour.opis = v2;
  console.log(topis.value);
  if (v1 != "" && v4 != "" && v3 != "" && v4 != "" && v5 != "" && c1 == true) {
    creatbuttton.addEventListener("click", test);
  }
});

county.addEventListener("blur", () => {
  //   za = true;
  v3 = county.value;
  createdTour.county = v3;
  console.log(county.value);
  if (v1 != "" && v4 != "" && v3 != "" && v4 != "" && v5 != "" && c1 == true) {
    creatbuttton.addEventListener("click", test);
  }
});

maxpeopl.addEventListener("blur", () => {
  //   eba = true;
  v4 = maxpeopl.value;
  createdTour.maxpeopl = v4;
  console.log(maxpeopl.value);
  if (v1 != "" && v4 != "" && v3 != "" && v4 != "" && v5 != "" && c1 == true) {
    creatbuttton.addEventListener("click", test);
  }
});

duration.addEventListener("blur", () => {
  //   lsa = false;
  v5 = duration.value;
  createdTour.duration = v5;
  console.log(duration.value);
  if (v1 != "" && v4 != "" && v3 != "" && v4 != "" && v5 != "" && c1 == true) {
    creatbuttton.addEventListener("click", test);
  }
});

////
let fotobutton = document.querySelector(".fotobutton");
let avas = [];
let selected = false;
let s;
let tablo;
// let tof = false;
const tablof = () => {
  c1 = true;
  //   tof = true;
  fotobutton.removeEventListener("click", tablof);
  tablo = document.createElement("div");
  tablo.classList.add("tablo");
  tablo.style.display = "grid";
  for (let i = 0; i < 6; i++) {
    let photo = document.createElement("div");
    photo.classList.add("photo");
    photo.classList.add("avas" + [i + 1]);
    tablo.append(photo);
    avas.push(photo);
    let idk = () => {
      /*for (let j = 0; j < avas.length; j++) {
        if (avas[j].classList[2] == "selected") {
        }
      }*/ if (!selected) {
        avas[i].classList.add("selected");
        selected = true;
        okButton.addEventListener("click", lets);
        s = avas[i];
      } else {
        for (let r = 0; r < avas.length; r++) {
          avas[r].classList.remove("selected");
        }
        avas[i].classList.add("selected");
        selected = true;
        okButton.addEventListener("click", lets);
        s = avas[i];
      }
    };
    avas[i].addEventListener("click", idk);
  }
  let okButton = document.createElement("button");
  okButton.classList.add("newButton");
  okButton.innerText = "Подтвердить";
  tablo.append(okButton);
  body.append(tablo);
  let o;
  function lets() {
    console.log("going func lets");
    o = window.getComputedStyle(fotocka).background;
    console.log(o);
    fotocka.style.background = window.getComputedStyle(s).background;
    //  usernow2.avatarka = window.getComputedStyle(s).background;
    s.style.background = o;
    tablo.style.display = "none";
    fotobutton.removeEventListener("click", tablof);
    //  localStorage.setItem("usernow", JSON.stringify(usernow2));
    //!  update();
  }
  createdTour.name = sname.value;
  createdTour.opis = topis.value;
  createdTour.county = county.value;
  createdTour.maxpeopl = maxpeopl.value;
  createdTour.duration = duration.value;
  if (
    v1 != "" &&
    v4 != "" &&
    v3 != "" &&
    v4 != "" &&
    v5 != "" &&
    c1 == true &&
    v1 != "undefined" &&
    v4 != "undefined" &&
    v3 != "undefined" &&
    v4 != "undefined" &&
    v5 != "undefined" &&
    j == true &&
    a == true
  ) {
    creatbuttton.addEventListener("click", test);
  }
};

fotobutton.addEventListener("click", tablof);

fotobutton.addEventListener("click", () => {
  tablo.style.display = "grid";
});

let creatbuttton = document.querySelector(".creatbuttton");

let test = () => {
  createdTour.name = sname.value;
  createdTour.opis = topis.value;
  createdTour.county = county.value;
  createdTour.maxpeopl = maxpeopl.value;
  createdTour.duration = duration.value;
  createdTour.foto = window.getComputedStyle(fotocka).background;
  allcreatedtours.push(createdTour);
  localStorage.setItem("createdTour", JSON.stringify(createdTour));
  localStorage.setItem("allcreatedtours", JSON.stringify(allcreatedtours));
  creatbuttton.removeEventListener("click", test);
};
