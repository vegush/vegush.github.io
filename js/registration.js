$(document).ready(function () {
  function showMessage(message, isValid) {
    if (isValid) {
      $("#staticBackdropLabel").text("Успех");
      $("#closeMessage").on("click", function () {
        location.replace("#");
      });
      $("#closeX").on("click", function () {
        location.replace("#");
      });
    } else {
      $("#staticBackdropLabel").text("Ошибка");
    }

    $(".modal-body").text(message);
    $("#staticBackdrop").modal("show");
  }

  var validEmail = false;
  var notNull = false;

  // function validateEmail(email) {
  //   var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,6}$/i;
  //   return re.test(email);
  // }

  // $("#regForm").keydown(function (e) {
  //   if (e.keyCode == 13) {
  //     e.preventDefault();
  //     return false;
  //   }
  // });

  // console.log("REMEMBER ME");
  // if (name === "" || email === "" || password === "") {
  //   showMessage("Пожалуйста, заполните все поля", notNull);
  // } else {
  //   notNull = true;
  // }

  // Проверка введенной почты
  // if (!validateEmail(email)) {
  //   showMessage("Некорректный формат электронной почты", validEmail);
  // } else {
  //   validEmail = true;
  // }

  // ОБРАБОТЧИК ФОРМЫ РЕГИСТРАЦИИ ------------------------
  document.getElementById("reg").addEventListener("submit", function (event) {
    event.preventDefault();

    // Подготавливаем и отправляем в php файл данные с формы
    const formData = new FormData(this);
    fetch("../php/ajax_reg_data.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          showMessage("Пользователь успешно зарегистрирован!", true);
          this.reset();
        } else {
          showMessage("Такой E-mail уже зарегестрирован.", false);
        }
      })
      .catch((error) => {
        console.log("Ошибка:", error);
        showMessage("Произошла ошибка при отправке данных.", false);
      });
  });

  // СООБЩЕНИЕ В КОНСОЛЬ ------------------
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let users = {};

  function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  submit.addEventListener("click", () => {
    const userNewName = name.value;
    const userNewEmail = email.value;
    const userNewPassword = password.value;

    const user = new User(userNewName, userNewEmail, userNewPassword);

    console.log(user);
  });
});
