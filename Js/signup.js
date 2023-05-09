const idForm = document.querySelector("#idForm");
idForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#userName").value;
  const infoEmail = document.querySelector("#infoEmail").value;
  const passWord = document.querySelector("#passWord").value;
  const confirmPassWord = document.querySelector("#confirmPassWord").value;

  const newAccount = {
    // id: TrungNguyenLG[TrungNguyenLG.length - 1].id
    //   ? TrungNguyenLG[TrungNguyenLG.length - 1].id + 1
    //   : 1, //dấu : là [true : false] nếu true thì vế trái nếu false thì vế phải
    cart: [],
    username: userName,
    email: infoEmail,
    passWord: passWord,
    status: true,
    confirmPassWord: confirmPassWord,
    role: 2,
  };

  const newError = validate(newAccount); //HÀM VALIDATE TRẢ VỀ ĐỐI TƯỢNG
  if (newError.isError == false) {
    const TrungNguyenLG =
      JSON.parse(localStorage.getItem("TrungNguyenLG")) || [];
    let isDulicate = false; //a = 0
    TrungNguyenLG.forEach((element) => {
      if (newAccount.email === element.email) {
        isDulicate = true; //a = 5 RẤT CHI LÀ LIÊN QUAN THÈN BÊN NGOÀI
        newError.emailMSG = "Email đã tồn tại";
        renderError(newError);
      }
    });

    if (isDulicate == false) {
      //so sánh
      //a = 5 // a !== 0
      TrungNguyenLG.push(newAccount);
      localStorage.setItem("TrungNguyenLG", JSON.stringify(TrungNguyenLG));
      window.location = "./login.html";
    }
  }
  renderError(newError);
});
function renderError(newError) {
  const email_MSG = document.querySelector("#email_MSG");
  const password_MSG = document.querySelector("#password_MSG");
  const confirmPassword_MSG = document.querySelector("#confirmPassword_MSG");
  email_MSG.innerHTML = newError.emailMSG;
  password_MSG.innerHTML = newError.passWordMSG;
  confirmPassword_MSG.innerHTML = newError.confirmPassWordMSG;
}

function validate(user) {
  const newError = {
    isError: false,
    emailMSG: "",
    passWordMSG: "",
    confirmPassWordMSG: "",
  };
  const regxEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!user.email.match(regxEmail)) {
    newError.isError = true;
    newError.emailMSG = "Email không đúng định dạng - Vui lòng nhập lại";
  }
  if (user.passWord.length < 8 || user.confirmPassWord.length > 30) {
    newError.isError = true;
    newError.passWordMSG =
      "Vui lòng tạo mật khẩu lớn hơn 8 và nhỏ hơn 30 ký tự";
  }
  if (user.passWord !== user.confirmPassWord) {
    newError.isError = true;
    newError.passWordMSG = "Mật khẩu không trùng nhau";
  }

  return newError;
}
