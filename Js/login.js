const login = document.querySelector("#login");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const infoEmail = document.querySelector("#infoEmail").value;
  const passWord = document.querySelector("#passWord").value;

  const newError = {
    isError: false,
    emailMSG: "",
    passWordMSG: "",
  };

  const regxEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!infoEmail.match(regxEmail)) {
    newError.isError = true;
    newError.emailMSG = "Email không đúng định dạng - Vui lòng nhập lại";
  }
  if (!passWord) {
    newError.isError = true;
    newError.passWordMSG = "Vui lòng nhập mật khẩu";
  }
  const accountsLocal = JSON.parse(localStorage.getItem("TrungNguyenLG")) || [];
  let userLogin; //UNDERFINED
  accountsLocal.forEach((user) => {
    if (infoEmail == user.email && passWord == user.passWord) {
      userLogin = user;
      delete user.passWord;
    }
    if (infoEmail !== user.email) {
      newError.isError = true;
      newError.emailMSG = "Email không đúng định dạng - Vui lòng nhập lại";
    }
    if (passWord !== user.passWord) {
      newError.isError = true;
      newError.passWordMSG = "Vui lòng nhập mật khẩu";
    }
  });
  if (userLogin) {
    //CÓ GIÁ TRỊ OBJECT RỒI THÌ VÀO
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    window.location = "/";
  }
  renderError(newError);
});
function renderError(error) {
  const email_MSG = document.querySelector("#email_MSG");
  const password_MSG = document.querySelector("#password_MSG");
  email_MSG.innerHTML = error.emailMSG;
  password_MSG.innerHTML = error.passWordMSG;
}

//TẠO TÀI KHOẢN ADMIN
const loginForm = document.getElementById("#login");
const emailInput = document.getElementById("#infoEmail");
const passwordInput = document.getElementById("#passWord");
const errorMsg = document.getElementById("error-msg");

const adminAccount = {
  email: "zuongtu@gmail.com",
  password: "dt147896",
};

loginForm.addEventListener("submit", (v) => {
  v.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (adminAccount.email === email && adminAccount.password === password) {
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem("Admin", JSON.stringify(adminAccount));
    // Chuyển hướng đến trang admin.html
    window.location.href = "./Page/manager-user.html";
  } else {
    // Đăng nhập thất bại
    errorMsg.textContent = "Email hoặc mật khẩu không đúng.";
  }
});
