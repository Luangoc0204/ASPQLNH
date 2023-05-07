// Lấy đối tượng nút "Xóa"
const removeButton = document.querySelector('.remove');

removeButton.addEventListener('click', () => {
  const product = removeButton.parentNode; // Lấy phần tử cha của nút "Xóa"
  product.remove(); // Xóa phần tử sản phẩm khỏi giỏ hàng
});