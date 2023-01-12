// let elems = document.querySelectorAll(".elem");
// let parent = document.querySelector(".parent");
let draggeblrBloks = document.querySelectorAll(".draggbles");
let traschcon = document.querySelector(".delete");
let inputs = document.querySelectorAll("input[data-rule]"); //нахождение всех input'ов с 'data-rule'
// let img = new Image();
// img.src = "dragtodelete.PNG";
let sitelogin = document.querySelector(".sitelogin");
let changebutton = document.querySelector(".changebutton");
let body = document.getElementsByTagName("body")[0];
let photo = document.querySelector(".photo");
let checker = document.querySelector("#themecheck");

draggeblrBloks.forEach((el, i) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", i);
    event.dataTransfer.setDragImage(traschcon, event.offsetX, event.offsetY); //вместо img можно передать ссылку на doom el
  });
});

traschcon.addEventListener("dragover", (event) => {
  event.preventDefault();
});
traschcon.addEventListener("drop", (event) => {
  console.log(event.dataTransfer.getData("text"));
  traschcon.appendChild(draggeblrBloks[event.dataTransfer.getData("text")]);
  draggeblrBloks[event.dataTransfer.getData("text")].remove();
});
let value;
let usernow2 = JSON.parse(localStorage.getItem("usernow"));
let allusers = JSON.parse(localStorage.getItem("allusers"));
document.querySelector(".inputform1").value = usernow2.name;
document.querySelector(".inputform2").value = usernow2.surname;
sitelogin.innerHTML = usernow2.username;
photo.style.background = usernow2.avatarka;
if (usernow2.theme == "abnormal") {
  checker.checked = true;
  document
    .querySelector('[title="theme"]')
    .setAttribute(
      "href",
      `abnormal.css`
    );
    .setAttribute("href", `abnormal.css`);
} else {
  document
    .querySelector('[title="theme"]')
    .setAttribute(
      "href",
      `normal.css`
    ); // Помещаем путь к файлу темы в пустой link в head
  document.querySelector('[title="theme"]').setAttribute("href", `normal.css`); // Помещаем путь к файлу темы в пустой link в head
}
for (let input of inputs) {
  input.addEventListener("blur", () => {
    let ruls = input.dataset.rule;
    console.log(ruls);
    value = input.value;
    switch (ruls) {
      case "name":
        usernow2.name = value;
        localStorage.setItem("usernow", JSON.stringify(usernow2));
        update();
        break;
      case "surname":
        usernow2.surname = value;
        localStorage.setItem("usernow", JSON.stringify(usernow2));
        update();
        break;
    }
  });
}
let checkval;
let theme = "normal";
checker.onclick = function () {
  try {
    checkval = document.querySelector("input[type=checkbox]:checked").value;
    theme = "abnormal";
    usernow2.theme = theme;
    localStorage.setItem("usernow", JSON.stringify(usernow2));
    somthing();
    update();
  } catch (Err) {
    theme = "normal";
    usernow2.theme = theme;
    localStorage.setItem("usernow", JSON.stringify(usernow2));
    somthing();
    update();
  }
};

let update = () => {
  for (let j = 0; j < allusers.length; j++) {
    if (allusers[j].username == usernow2.username) {
      allusers.splice(j, 1);
      allusers.push(usernow2);
      localStorage.setItem("allusers", JSON.stringify(allusers));
      console.log(allusers[j]);
    }
  }
};

let avas = [];
let selected = false;
let s;
let tablo;
// let tof = false;
const tablof = () => {
  //   tof = true;
  changebutton.removeEventListener("click", tablof);
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
    o = window.getComputedStyle(photo).background;
    console.log(o);
    photo.style.background = window.getComputedStyle(s).background;
    usernow2.avatarka = window.getComputedStyle(s).background;
    s.style.background = o;
    tablo.style.display = "none";
    changebutton.removeEventListener("click", tablof);
    localStorage.setItem("usernow", JSON.stringify(usernow2));
    update();
  }
};

changebutton.addEventListener("click", tablof);

changebutton.addEventListener("click", () => {
  tablo.style.display = "grid";
});
//! ВСЕ ПЕРЕХОДЫ
let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  //TODO переход на главную страницу
});


//!ПЕРЕДЕЛАТЬ ССЫЛКИ
let somthing = () => {
  if (usernow2.theme == "abnormal") {
    document
      .querySelector('[title="theme"]')
      .setAttribute(
        "href",
        `abnormal.css`
      );
      .setAttribute("href", `abnormal.css`);
  } else {
    document
      .querySelector('[title="theme"]')
      .setAttribute(
        "href",
        `normal.css`
      ); // Помещаем путь к файлу темы в пустой link в head
      .setAttribute("href", `normal.css`); // Помещаем путь к файлу темы в пустой link в head
  }
};
