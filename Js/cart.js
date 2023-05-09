const listCart = JSON.parse(localStorage.getItem("TrungNguyenLG"));
renderCarts(listCart);
function renderCarts(data) {
  const tbody = document.querySelector("tbody");

  let contentTbody = "";

  data.forEach((item, index) => {
    item.cart.forEach((product, index) => {
      contentTbody += `
  <td>
        <input id="choose" type="text"/> </td>
                  <td>${product.name}</td>
                  <td> <img src="../img/${product.img}"/> </td>
                  <td>${product.price}</td>
                  <td >
                  <div class="dotPlus">
                    <button class="plusMinus" onclick="minus('${
                      product.id
                    }')">-</button>
                  <input class="valueDot" value='${product.quantity}'/>
                  <button class="plusMinus" onclick="plus('${
                    product.id
                  }')">+</button></div>
               </td> 
               <td>${Number(product.price) * Number(product.quantity)}</td>
                  <td >
                  <button onclick='handleDelete('${
                    product.id
                  }')'>Xóa</button>                  
                   </tr>`;
      tbody.innerHTML = contentTbody;
    });
  });

  //item.cart là trong cart có nhiều đối tượng đơn hàng
}
function minus(id) {
  listCart.forEach((item, index) => {
    item.cart.forEach((product, index) => {
      if (product.id == id) {
        if (product.quantity <= 1) {
          window.alert("nhập hơn 0");
        } else {
          product.quantity = Number(product.quantity) - 1;
        }
      }
    });
  });
  localStorage.setItem("TrungNguyenLG", JSON.stringify(listCart));
  renderCarts(listCart);
}
function plus(id) {
  listCart.forEach((item, index) => {
    item.cart.forEach((product, index) => {
      if (product.id == id) {
        product.quantity = Number(product.quantity) + 1;
      }
    });
  });
  localStorage.setItem("TrungNguyenLG", JSON.stringify(listCart));
  renderCarts(listCart);
}
function handleDelete(id) {
  let product = JSON.parse(localStorage.getItem("TrungNguyenLG"));
  product = product.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem("listProducts", JSON.stringify(product));
}
function handlePay() {
  const localPro = JSON.parse(localStorage.getItem("TrungNguyenLG"));
  let totalCount = 0;
  localPro.forEach((item) => {
    item.cart.forEach((product) => {
      totalCount += Number(product.price) * Number(product.quantity);
    });
  });
  const number = document.querySelector("#valueTotaly");
  console.log(number);
  number.innerHTML = totalCount;
  const userPay = {};
  localStorage.setItem("Totaly", JSON.stringify(totalCount));
}
