import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

`;
    })
    .join("");
};

console.log(galleryItems);
