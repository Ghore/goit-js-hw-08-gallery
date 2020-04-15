import galleryItems from "./gallery-items.js";

const gallery = galleryItems
  .map(item => {
    const { preview, original, description } = item;
    return tamplate(preview, original, description);
  })
  .join(" ");

// console.log(gallery);

function tamplate(preview, original, description) {
  // console.log(preview, original, description);
  return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
}

const list = document.querySelector(".js-gallery");

list.insertAdjacentHTML("beforeend", gallery);

const modal = document.querySelector(".js-lightbox");

const boxImg = document.querySelector(".lightbox__image");

list.addEventListener("click", clickImg);

function clickImg(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  modal.classList.add("is-open");

  boxImg.setAttribute("src", e.target.dataset.source);
}

modal.addEventListener("click", clickModal);
function clickModal(e) {
  if (e.target.nodeName === "BUTTON") {
    modal.classList.remove("is-open");
    list.removeEventListener("click", clickModal);
  }

 
}

document.addEventListener('keydown', processKeys );
function processKeys(e) {
  if(e.keyCode === 27){
    modal.classList.remove("is-open");
    list.removeEventListener("click", clickModal);
  }
}