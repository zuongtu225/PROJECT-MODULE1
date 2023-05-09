const localOdder = JSON.parse(localStorage.getItem("TrungNguyenLG"));
renderUsers(localOdder);
function renderUsers(data) {
  const tbody = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((user, index) => {
    contentTbody += `
   `;
    tbody.innerHTML = contentTbody;
  });
}
