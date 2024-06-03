const lemonadeGallery = [
    {
        title: "Strawberry Lemonade",
        imageUrl: "../project/img/strawbery.webp"
    },
    {
        title: "Classic Lemonade",
        imageUrl: "../project/img/classic-lemonade.webp"
    },
    {
        title: "Mango Smoothie",
        imageUrl: "../project/img/classic-lemonade.webp"
    }]



     // Function to create lemonade gallery elements
function createLemonadeGalleryElements(container, lemonadeGallery) {
    lemonadeGallery.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('lemonade-product');

        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', product.imageUrl);
        imageElement.setAttribute('alt', `${product.title}`);
        imageElement.setAttribute('loading', 'lazy');

        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;

        productElement.appendChild(imageElement);
        productElement.appendChild(titleElement);

        container.appendChild(productElement);
    });
}



const lemonadeGalleryContainer = document.getElementById('lemonade-gallery');


createLemonadeGalleryElements(lemonadeGalleryContainer, lemonadeGallery);


