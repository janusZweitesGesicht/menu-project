let logplate = document.querySelector(".logplate"); //блок для логина
let login = document.querySelector(".login"); //кнопка 'sign in'
let foreror = document.querySelector(".foreror"); //con for errors
let inputs = document.querySelectorAll("input[data-rule]"); //нахождение всех input'ов с 'data-rule'
console.log(inputs); //проверка //TODO убрать

let users = [
  //массив уже созданных пользователей
  {
    avatarka: `rgba(0, 0, 0, 0) url("file:///C:/Users/swjatik227/Desktop/js_projets/2022-2023/tours_site/2nd_projekt/menu-project/cabinet/standart.jfif") no-repeat scroll 0% 0% / cover padding-box border-box`,
    theme: "normal",
    name: "",
    surname: "",
    username: "admin",
    userpass: "swjat1kgod",
  },
  {
    avatarka: `rgba(0, 0, 0, 0) url("file:///C:/Users/swjatik227/Desktop/js_projets/2022-2023/tours_site/2nd_projekt/menu-project/cabinet/standart.jfif") no-repeat scroll 0% 0% / cover padding-box border-box`,
    theme: "normal",
    name: "",
    surname: "",
    username: "swjat",
    userpass: "onpr0st0krut",
  },
  {
    avatarka: `rgba(0, 0, 0, 0) url("file:///C:/Users/swjatik227/Desktop/js_projets/2022-2023/tours_site/2nd_projekt/menu-project/cabinet/standart.jfif") no-repeat scroll 0% 0% / cover padding-box border-box`,
    theme: "normal",
    name: "",
    surname: "",
    username: "annja",
    userpass: "t1ml1d1k",
  },
  {
    avatarka: `rgba(0, 0, 0, 0) url("file:///C:/Users/swjatik227/Desktop/js_projets/2022-2023/tours_site/2nd_projekt/menu-project/cabinet/standart.jfif") no-repeat scroll 0% 0% / cover padding-box border-box`,
    theme: "normal",
    name: "",
    surname: "",
    username: "j",
    userpass: "hzctoet0",
  },
];

class NewUser {
  //класс создающий новых пользователей
  constructor() {
    //alert("создан новый юзер"); //проверка //TODO убрать
    this.avatarka = `rgba(0, 0, 0, 0) url("file:///C:/Users/swjatik227/Desktop/js_projets/2022-2023/tours_site/2nd_projekt/menu-project/cabinet/standart.jfif") no-repeat scroll 0% 0% / cover padding-box border-box`;
    this.theme = "normal";
    this.name = "";
    this.surname = "";
    this.username = inputs[0].value;
    this.userpass = inputs[1].value;
  }
}

//variables for validation
//флаги и тд
let cl = false;
let cp = false;
let checklog;
let checkpass;
let value;
let alreadyСreatedUser = 0;
let qw;

// testi na sowpadenia
let testnasowpadenia = () => {
  console.log("идет проверка на совпадения ников"); //проверка //TODO убрать
  for (let j = 0; j < users.length; j++) {
    if (users[j].username == inputs[0].value) {
      console.log(users[j]); //проверка //TODO убрать
      alreadyСreatedUser++;
      return false; //нахождение совпадение среди уже существующих ников
    }
  }
};

let testnasowpadenia2 = () => {
  console.log("идет проверка на совпадения паролей"); //проверка //TODO убрать
  for (let j = 0; j < users.length; j++) {
    if (users[j].userpass == inputs[1].value) {
      console.log(users[j]); //проверка //TODO убрать
      alreadyСreatedUser++;
      return false; //нахождение совпадение среди уже существующих паролей
    }
  }
};

//functions for error bye validation
let errtext2;
let err = () => {
  //if password is wrong
  if (cp == false) {
    errtext2 = document.createElement("span");
    errtext2.classList.add("errtext2");
    errtext2.innerText =
      "Пароль должен содержать минимум восемь символов,где есть минимум одна буква и одна цифра.";
    foreror.append(errtext2);
    cp = true;
  } else cp = true;
};

let errtext;
let err2 = () => {
  // if login is wrong
  if (cl == false) {
    errtext = document.createElement("span");
    errtext.classList.add("errtext");
    errtext.innerText =
      "Логин должен состоять хотя бы из 1 символа и не повторять другой логин.";
    foreror.append(errtext);
    cl = true;
  } else cl = true;
};

for (let input of inputs) {
  input.addEventListener("blur", () => {
    //при unfocus'e на input
    let ruls = input.dataset.rule; //получение правила 'password' or 'login'
    console.log(ruls); //проверка //TODO убрать
    value = input.value;
    let length = value.length;
    switch (ruls) {
      case "login": //! две самые важные части
        if (testnasowpadenia() == false) {
          //найдено совпадение среди уже существующих ников
          if (testnasowpadenia2() == false) {
            login.addEventListener("click", final2);
          } else {
            checklog = false;
            err2();
            break;
          }
        } else {
          if (/^[A-Za-z0-9_]{1,24}$/g.test(value) == false) {
            checklog = false;
          }
          if (/^[A-Za-z0-9_]{1,24}$/g.test(value) == true) checklog = true;
          console.log(checklog); //проверка //TODO убрать
          break;
        }
      case "password": //! две самые важные части
        if (testnasowpadenia2() == false) {
          //найдено совпадение среди уже существующих паролей
          if (testnasowpadenia() == false) {
            errtext.innerText = "";
            login.addEventListener("click", final2);
          } else {
            checklog = false;
            break;
          }
        } else {
          if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(value) == false) {
            checkpass = false;
          }
          if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(value) == true)
            checkpass = true;
          console.log(checkpass); //проверка //TODO убрать
          break;
        }
    } //начинается проверка всех флагов, запуск фунций
    if (checkpass == false) {
      err();
    }
    if (checklog == false) {
      err2();
    }
    if (checklog == true && cl == true) {
      errtext.innerText = "";
    }
    if (checkpass == true && cp == true) {
      errtext2.innerText = "";
    }
    if (
      checkpass == true &&
      checklog == true &&
      alreadyСreatedUser != 2 &&
      qw != 1
    ) {
      login.addEventListener("click", final);
    }
  });
}

let userInfo; //переменная , которая пихается в localStorage
let final = () => {
  //создать нового пользователя
  userInfo = {
    avatarka: `rgba(0, 0, 0, 0) url("file:///C:/Users/swjatik227/Desktop/js_projets/2022-2023/tours_site/2nd_projekt/menu-project/cabinet/standart.jfif") no-repeat scroll 0% 0% / cover padding-box border-box`,
    theme: "normal",
    name: "",
    surname: "",
    username: "",
    userpass: "",
  };
  userInfo.username = inputs[0].value;
  userInfo.userpass = inputs[1].value;
  localStorage.setItem("usernow", JSON.stringify(userInfo));
  users.push(new NewUser());
  localStorage.setItem("allusers", JSON.stringify(users));
  //alert("вы зарегались"); //проверка //TODO убрать
  login.removeEventListener("click", final);
  qw = 1;
  //TODO переход в личный кабинет с введенным именем пользователя
};

let final2 = () => {
  //вход в уже созданного пользователя
  for (let j = 0; j < users.length; j++) {
    if (users[j].username == inputs[0].value) {
      userInfo = users[j];
    }
  }
  localStorage.setItem("usernow", JSON.stringify(userInfo));
  localStorage.setItem("allusers", JSON.stringify(users));
  //alert("вы вернулись"); //проверка //TODO убрать
  login.removeEventListener("click", final2);
  //TODO переход в личный кабинет с введенным именем пользователя
};
