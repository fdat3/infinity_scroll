const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Declare API

count = 30;
const apiKEY = 'lggWbghl8imfrNmluJbFMaOsb88EE3pitxkHtL57EBU';
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKEY}&count=${count}`;

// Call API

let totalImages = 0;
let ready = false;
let photosArray = [];

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        // Display Photos
        displayPhotos();
    } catch (error) {
        // Catch Error
        console.log(error);
    }
}

// Display Photos

function displayPhotos() {
    imagesLoaded = 0;

    totalImages = photosArray.length;

    photosArray.forEach((photo) => {
        // Create tag <a> when scroll
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })

        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Add tag <img> to <a> and <a> to DOM
        img.addEventListener('load', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

// Set Attribute

function setAttributes(element, attribute) {
    for (const key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

// Image Loaded 

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = false;
    }
}

// Scroll Infinite

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
})

getPhotos();