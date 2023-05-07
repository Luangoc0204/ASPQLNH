// hiển thị modal cart
const shopCart = document.querySelector(".header-cart");
const modal = document.getElementById("modal-cart");
modal.classList.add("stardust-popover__popover--hide");

shopCart.addEventListener("mouseenter", () => {
    modal.style.visibility = "visible";
    modal.classList.add("stardust-popover__popover--show");
    modal.classList.remove("stardust-popover__popover--hide");
});
shopCart.addEventListener("mouseleave", () => {
    if (!shopCart.contains(event.relatedTarget)) {
        modal.classList.remove("stardust-popover__popover--show");
        modal.classList.add("stardust-popover__popover--hide");
        setTimeout(() => {
        modal.style.visibility = "hidden";
        }, 200);
    }
});
// hiển thị modal infor
const user_info = document.querySelector(".header-info");
const modal_user = document.getElementById("modal-info");
modal_user.classList.add("stardust-popover__popover--hide");

user_info.addEventListener("mouseenter", () => {
    modal_user.style.visibility = "visible";
    modal_user.classList.add("stardust-popover__popover--show");
    modal_user.classList.remove("stardust-popover__popover--hide");
});
user_info.addEventListener("mouseleave", () => {
    if (!user_info.contains(event.relatedTarget)) {
        modal_user.classList.remove("stardust-popover__popover--show");
        modal_user.classList.add("stardust-popover__popover--hide");
        setTimeout(() => {
        modal_user.style.visibility = "hidden";
        }, 200);
    }
});
    