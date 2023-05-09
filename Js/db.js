const TNLG = [
  {
    id: 1,
    email: "zuongtu225@gmail.com",
    confirmPassWord: "dt147896",
    passWord: "dt147896",
  },
];

const TNLGcheck = JSON.parse(localStorage.getItem("TrungNguyenLG")) || [];

if (!TNLGcheck) {
  //NẾU CHƯA CÓ GIÁ TRỊ THÌ PUSH vào
  localStorage.setItem("TrungNguyenLG"), JSON.stringify(TNLG);
}
