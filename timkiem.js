document.querySelector('.navbar-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi mặc định
    const query = document.querySelector('.search-input').value;
    searchProducts(query);
  });
  
  function searchProducts(query) {
    // Giả sử chúng ta có một mảng dữ liệu sản phẩm
    const products = [
      {
        name: 'Bột cà phê',
        description: 'Bột Cà Phê Truyền Thống, Cà Phê Rang Xay Truyền Thống,...',
        price: '139.000 VNĐ',
        image: 'C:\\TKGDPM\\BaiCuoiKy\\Image\\Screenshot 2024-11-07 160252.png',
        link: 'chitietsanpham.html'
      },
      // Thêm các sản phẩm khác ở đây
    ];
  
    const results = products.filter(product => product.name.includes(query));
    displayProducts(results);
  }
  
  function displayProducts(products) {
    const resultsDiv = document.getElementById('product-results');
    resultsDiv.innerHTML = ''; // Xóa kết quả cũ
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'col-sm-3 poly-prod';
      productDiv.innerHTML = `
        <a href="${product.link}" aria-label="${product.name}">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">${product.name}</h4>
            </div>
            <div class="panel-body">
              <img src="${product.image}" class="img-responsive" alt="${product.name}"/>
              <p>${product.description}</p>
              <p>${product.price}</p>
              <button class="btn btn-primary btn-add-to-cart" onclick="addToCart('${product.name}', ${product.price.replace(' VNĐ', '').replace('.', '')})">
                <a href="#">Thêm vào giỏ hàng</a>
              </button>
            </div>
          </div>
        </a>
      `;
      resultsDiv.appendChild(productDiv);
    });
  }
  
  function addToCart(productName, productPrice) {
    // Hàm xử lý thêm sản phẩm vào giỏ hàng
    console.log(`Thêm ${productName} với giá ${productPrice} vào giỏ hàng`);
  }
  