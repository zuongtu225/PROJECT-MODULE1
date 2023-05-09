const url = new URL(document.URL);
const idProduct = url.searchParams.get("id"); //TÌM TRONG PARAM LẤY ID id là cái key đặt khi click
renderDetail(idProduct);
function renderDetail(idPro) {
  const listProductLocal = JSON.parse(localStorage.getItem("listProducts"));
  let Product = listProductLocal.find((item, index) => item.id == idPro);
  const card = document.querySelector("#card");
  console.log(Product, 11);
  console.log(Product.name, 22);
  let content = ` <div class="info-img">
      <img src="../img/${Product.img}" alt="">
    </div>
    <div class="info-product" id="renderDetail">
      <a class="home" href="./index.html">Trang chủ</a>
      <br>
      <br>
      <h2>${Product.name}</h2>
      <p>___</p> <br>


      <p><b>${Product.price}</b></p> <br>
      <p>Legend Cappu Hazelnut là sự kết hợp giữa mùi vị hạt dẻ ấm nồng và những hạt cà phê chất lượng nhất. Lần đầu tiên tại Việt Nam, duy nhất chỉ có ở Trung Nguyên Legend đã tạo ra sản phẩm cà phê hòa tan phong cách Ý. Legend Cappu Hazelnut sẽ giúp tiết kiệm thời gian trong cuộc sống bận rộn.</p>
      <br>
      <p>Với loại hộp 12 gói nhỏ rất tiện dụng, có thể mang tới văn phòng để sử dụng hàng ngày hoặc mang theo trong các chuyến đi xa.</p>
      <br>
      <p><b>Khối lượng:</b>  Hộp 12 sticks x 18gr</p>

      <br>
      <button class="btn-">-</button>
      <button class="btnPlus">+ </button>
      <br>
      <br>
      <div class="btn-buy">
      <button class="btn1">THÊM VÀO GIỎ</button>
      <button class="btn2">MUA NGAY</button>
      </div>
    </div>`;
  card.innerHTML = content;
}
