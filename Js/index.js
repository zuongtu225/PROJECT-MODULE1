const accountLogin = JSON.parse(localStorage.getItem("userLogin"));
if (accountLogin) {
  render_user(accountLogin);
}

const listProducts = [
  {
    id: 1,
    img: "product1.jpg",
    name: "Cà Phê Sữa Success - 100ml",
    price: 29000,
    type: "chai",
    quantity: 1,
  },
  {
    id: 2,
    img: "product2.jpg",
    name: "Cà Phê Sữa Success - 100ml",
    price: 25000,
    type: "chai",
    quantity: 1,
  },
  {
    id: 3,
    img: "product3.jpg",
    name: "Bạc Xỉu – 100ml",
    price: 29000,
    type: "chai",
    quantity: 1,
  },
  {
    id: 4,
    img: "product4.jpg",
    name: "Bạc Xỉu",
    price: 55000,
    type: "chai",
    quantity: 1,
  },
  {
    id: 5,
    img: "product5.jpg",
    name: "Cà Phê Sữa Success  ",
    price: 55000,
    type: "chai",
    quantity: 1,
  },
  {
    id: 6,
    img: "product6.jpg",
    name: "Cà Phê Đen Success  ",
    price: 49000,
    type: "chai",
    quantity: 1,
  },
  {
    id: 7,
    img: "pro11.png",
    name: "Trung Nguyên Legend Classic – Hộp 24 gói",
    price: 110000,
    type: "hoatan",
    quantity: 1,
  },
  {
    id: 8,
    img: "pro22.jpg",
    name: "Legend Classic – Bịch 50 gói",
    price: 130000,
    type: "hoatan",
    quantity: 1,
  },
  {
    id: 9,
    img: "pro66.jpg",
    name: "Legend Passiona – 14 Sticks",
    price: 160000,
    type: "hoatan",
    quantity: 1,
  },

  {
    id: 10,
    img: "pro77.jpg",
    name: "Legend Cappuccino Hazelnut – 12 Sticks",
    price: 170000,
    type: "hoatan",
    quantity: 1,
  },

  {
    id: 11,
    img: "pro88.jpg",
    name: "Legend Cappuccino Mocha 12 sticks",
    price: 270000,
    type: "hoatan",
    quantity: 1,
  },
  {
    id: 12,
    img: "pro33.jpg",
    name: "Cà Phê G7 Hòa Tan Đen",
    price: 470000,
    type: "hoatan",
    quantity: 1,
  },
  {
    id: 13,
    img: "pro44.jpg",
    name: "G7 2in1 hộp 15 sachets",
    price: 270000,
    type: "hoatan",
    quantity: 1,
  },

  {
    id: 14,
    img: "pro55.jpg",
    name: "Cà phê hòa tan G7 Gu Mạnh X2",
    price: 600000,
    type: "hoatan",
    quantity: 1,
  },
];
localStorage.setItem("listProducts", JSON.stringify(listProducts));

// render product
const listProductLocal = JSON.parse(localStorage.getItem("listProducts"));
const listProduct1 = listProductLocal.filter((item) => item.type === "chai");
function render_user(user) {
  const render_user = document.querySelector("#render-user-right");
  let content = `
          <li>
          <a href="#" class="login">${user.username}</a>
          </li> <li>
          <a href="#" class="login">Thông tin cá nhân </a>
          </li> 
          <li>
          <a href="#" onclick="handleLogout()" class="login">Đăng Xuất</a>
          </li>          
          <li>
            <a href="./Page/cart.html">
              <i class="bx bxs-cart-alt cart"></i>
            </a>
      </li>`;
  render_user.innerHTML = content;
}
function renderProducts() {
  const container1 = document.querySelector(".container1");
  let containerRender1 = "";
  listProduct1.forEach((pro1, index) => {
    containerRender1 += `
    <div class="product1">
     <i class='bx bx-cart-add' onclick="addProduct(${pro1.id})" ></i>
      <img src='./img/${pro1.img}' alt="" >
      <p><b>${pro1.name}</b></p>
      <p>${pro1.price}<i class='bx bx-purchase-tag'></i></p>  <br>   
        <button class="buyBTN" onclick="buyNow(${pro1.id})">Mua Ngay</button> 
      <button class="detailBTN" onclick="getDetail(${pro1.id})">Chi tiết</button> 
      </div>`;
  });
  container1.innerHTML = containerRender1;
  //--------------------------------------------------------

  const container2 = document.querySelector(".container2");
  const listProduct2 = listProductLocal.filter(
    (item) => item.type === "hoatan"
  );
  let containerRender2 = "";
  listProduct2.forEach((pro2, index) => {
    containerRender2 += `<div class="product1">
    <i class='bx bx-cart-add' onclick="addProduct(${pro2.id})"></i>
      <img src="./img/${pro2.img}" alt="" >
      <p><b>${pro2.name}</b></p>
      <p>${pro2.price}<i class='bx bx-purchase-tag'></i></p><br>          
        <button class="buyBTN" onclick="buyNow(${pro2.id})">Mua Ngay</button>    
      <button class="detailBTN" onclick="getDetail(${pro2.id})">Chi tiết</button> 
  </div>`;
  });
  container2.innerHTML = containerRender2;
}
renderProducts();
function addProduct(idPlus) {
  // kiểm tra đăng nhập chưa
  const listUserLocal = JSON.parse(localStorage.getItem("TrungNguyenLG"));
  const listProducts = JSON.parse(localStorage.getItem("listProducts"));
  //B3 Tìm sản phẩm object trong Mảng
  const product = listProducts.find((item, index) => item.id === idPlus);

  // trả về true false the same return item.id = idplus;
  if (accountLogin) {
    //B1 đăng nhập rồi thì ĐƯỢC PHÉP THÊM VÀO GIỎ HÀNG
    listUserLocal.forEach((user, index) => {
      if (accountLogin.email == user.email) {
        //B2 nếu đúng là tài khoản đó thì kiểm tra tiếp có cart hay chư
        let isDulicate = false; //ko có
        user.cart.forEach((item, index) => {
          //kiểm tra sản phẩm có trùng sp cũ ko là cart
          if (item.id === product.id) {
            item.quantity += 1;
            isDulicate = true;
          }
        });
        if (!isDulicate) {
          user.cart.push(product);
        }
        // isDulicate = true;
      }
      localStorage.setItem("TrungNguyenLG", JSON.stringify(listUserLocal));
    });
  } else {
    //chưa ĐĂNG NHẬP thì HỎI CÓ MUỐN ĐĂNG NHẬP KO
    const confirm = confirm("Vui lòng đăng nhập để mua hàng!");
    if (confirm) {
      window.location = "./Page/login.html";
    }
  }
  localStorage.setItem("TrungNguyenLG", JSON.stringify(listUserLocal));
}
function getDetail(idProduct) {
  window.location = `http://127.0.0.1:5500/product_detail.html?id=${idProduct}`;
}
// --------------------------------------------------->>>>>
function buyNow(idProduct) {
  let userPay = JSON.parse(localStorage.getItem("userLogin"));
  if (userPay) {
    window.location = `./Page/cart.html?id=${idProduct}`;
  } else {
    window.location = `./Page/login.html`;
  }
}
function handleLogout() {
  localStorage.removeItem("userLogin");
  window.location = "/";
}
// ------thêm vào giỏ-----------//

// search

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
