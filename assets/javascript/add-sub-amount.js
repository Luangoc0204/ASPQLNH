// Lấy tất cả các nút "Add" và gắn sự kiện "click" vào chúng
const addButtons = document.querySelectorAll('.add');
addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Tìm phần tử HTML chứa số lượng sản phẩm
    const quantityElement = button.parentNode.querySelector('.quantity');
    
    // Tăng số lượng sản phẩm lên 1
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    
    // Cập nhật số lượng sản phẩm trên trang web
    quantityElement.textContent = quantity;
  });
});

// Lấy tất cả các nút "Remove" và gắn sự kiện "click" vào chúng
const removeButtons = document.querySelectorAll('.sub');
removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Tìm phần tử HTML chứa số lượng sản phẩm
    const quantityElement = button.parentNode.querySelector('.quantity');
    
    // Giảm số lượng sản phẩm xuống 1
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
    }
    
    // Cập nhật số lượng sản phẩm trên trang web
    quantityElement.textContent = quantity;
  });
});