const listProducts = JSON.parse(localStorage.getItem("listProducts"));
renderProducts(listProducts);
function renderProducts(data) {
  let container = "";
  data.forEach((user, index) => {
    const tbody = document.querySelector("tbody");
    container += `
  <tr>
                  <td>${index + 1}</td>
                  <td>${user.name}</td> 
                  <td><img src="../img/${user.img}"></td>
                  <td>${user.price}</td>
                  <td>
                  <div class="action">
                 
                  <button class="btnEdit" onclick="handleEdit(${
                    user.id
                  })">Sửa</button>
                  <button class="btnDelete" onclick="handleDelete(${
                    user.id
                  })">Xóa</button>
                  </div>                
                  </td>
          
  </tr>`;
    tbody.innerHTML = container;
  });
}
function handleDelete(id) {
  let listProduct = JSON.parse(localStorage.getItem("listProducts"));
  listProduct = listProduct.filter((item) => {
    return item.id !== id; //return để trả về MẢNG SẢN PHẨM CÒN LẠI
  });
  renderProducts(listProduct);
  localStorage.setItem("listProducts", JSON.stringify(listProduct));
}

function handleAdd() {
  const id = document.querySelector("#id").value;
  const idName = document.querySelector("#idName").value;
  const idImg = document.querySelector("#idImg").value;
  const idPrice = document.querySelector("#idPrice").value;
  if (!id || !idName || !idImg || !idPrice) {
    window.alert("Vui Lòng nhập đầy đủ thông tin sản phẩm!");
  } else {
    console.log(idImg);
    let linkImg = idImg.slice(12);
    console.log(linkImg);
    const newProduct = {
      id: id,
      name: idName,
      img: linkImg,
      price: idPrice,
    };
    const listProduct = JSON.parse(localStorage.getItem("listProducts"));
    listProduct.push(newProduct);
    localStorage.setItem("listProducts", JSON.stringify(listProduct));
    renderProducts(listProduct);
  }
}

function handleEdit(idPro) {
  let data = listProducts.find((item) => {
    return item.id === idPro;
  });
  console.log(data);
  const idProductEdit = document.querySelector("#idEdit");
  const idNameEdit = document.querySelector("#idNameEdit");
  const idPriceEdit = document.querySelector("#idPriceEdit");
  // listProducts.forEach((item, index) => {
  //   if (idPro == item.id) {
  idProductEdit.value = data.id;
  idNameEdit.value = data.name;
  idPriceEdit.value = data.price;

  // const btnUpdate = document.querySelector("#btnUpdate");
  // btnUpdate.setAttribute("click", `handleUpdate(${idPro})`);

  //   }
  // });
}
function handleUpdate() {
  let idProductEdit = document.querySelector("#idEdit").value;
  let idNameEdit = document.querySelector("#idNameEdit").value;
  let idPriceEdit = document.querySelector("#idPriceEdit").value;
  let idImgEdit = document.querySelector("#idImgEdit").value;
  const listPro = JSON.parse(localStorage.getItem("listProducts"));
  let linkImg = idImgEdit.slice(12);
  const proUpdate = {
    id: idProductEdit,
    name: idNameEdit,
    price: idPriceEdit,
    img: linkImg,
    quantity: 1,
  };
  console.log(proUpdate.id);

  listPro.forEach((item, index) => {
    if (proUpdate.id == item.id) {
      item.id = Number(proUpdate.id);
      item.img = proUpdate.img;
      item.name = proUpdate.name;
      item.quantity = proUpdate.quantity;
      item.price = proUpdate.price;
    }
  });
  localStorage.setItem("listProducts", JSON.stringify(listPro));
  renderProducts(listPro);
  // idProductEdit = "";
  // idNameEdit = "";
  // idPriceEdit = "";
  // idImgEdit = "";
}
function handleSearch() {
  let valiu = document.querySelector("#input-search").value;
  const listPro = JSON.parse(localStorage.getItem("listProducts"));
  let searchPro = listPro.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(valiu.toLowerCase() || valiu == item.id);
  });
  renderProducts(searchPro);
}
