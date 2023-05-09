const listUser = JSON.parse(localStorage.getItem("TrungNguyenLG"));
renderUsers(listUser);
function renderUsers(data) {
  let contentTbody = "";
  data.forEach((user, index) => {
    const tbody = document.querySelector("tbody");
    contentTbody += `
  <tr>
                  <td>${index + 1}</td>
                  <td>${user.username}</td> 
                  <td>${user.email}</td>
                  
                  <td class="${user.status ? "blue status" : "red status"}">${
      user.status ? "ON" : "OFF"
    }</td>
                  <td>
                  <div class="action">
                  
                  <button class="btnEdit" onclick="handleEdit('${
                    user.email
                  }')">Sửa</button>                                  
                  </div>                
                  </td>
                
          
  </tr>`;
    tbody.innerHTML = contentTbody;
  });
}

const handleEdit = (email) => {
  const listUser = JSON.parse(localStorage.getItem("TrungNguyenLG"));
  listUser.forEach((item, index) => {
    if (item.email == email) {
      item.status = !item.status;
    }
  });
  localStorage.setItem("TrungNguyenLG", JSON.stringify(listUser));
  renderUsers(listUser);
};

function handleSearch() {
  let valiu = document.querySelector("#input-search").value;
  const listUser = JSON.parse(localStorage.getItem("TrungNguyenLG"));
  let searchUser = listUser.filter((item) => {
    return item.username
      .toLowerCase()
      .includes(valiu.toLowerCase() || valiu == item.email.toLowerCase());
  });
  renderUsers(searchUser);
}
