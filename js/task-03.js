const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulGallery = document.querySelector('.gallery');
const imagesGallery = document.querySelectorAll('img');
const markup = images.map((image) =>
  `<li class='listImg'><img src='${image.url}' alt='${image.alt}'></li>`).join('');

ulGallery.insertAdjacentHTML('beforeend', markup);

imagesGallery.forEach((imageGallery) => { 
  imageGallery.style = `
  border-radius: 15px;
  width: 100%;
  magrin: auto;
  `
})

ulGallery.style =
  `
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  `;