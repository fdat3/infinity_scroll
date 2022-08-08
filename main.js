// const imageContainer = document.getElementById('image-container');
// const loader = document.getElementById('loader');

// let ready = false;
// let imagesLoaded = 0;
// let totalImages = 0;
// let photosArray = [];
// let initialLoad = true;

// // Helper Function to set attributes on DOM Elements

// function setAttributes(element, attributes) {
//     for (const key in attributes) {
//         element.setAttribute(key, attributes[key]);
//     }
// }

// // Create Elements for Links & Photos, add to DOM

// function displayPhotos() {
//     loading();

//     imagesLoaded = 0;

//     totalImages = photosArray.length;

//     // Run function for each object in photosArray
//     photosArray.forEach((photo) => {
//         // Create <a> to link Unsplash
//         const item = document.createElement('a');
//         setAttributes(item, {
//             href: photo.links.html,
//             target: '_blank',
//         });
//         const img = document.createElement('img');
//         setAttributes(img, {
//             src: photo.urls.regular,
//             alt: photo.alt_description,
//             title: photo.alt_description,
//         });
//         // Event Listenner, check when each is finished loading
//         img.addEventListener('load', imageLoaded);
//         item.appendChild(img);
//         imageContainer.appendChild(item);
//     });
//     complete();
// }
// // Unsplash API
// let count = 5;

// const apiKEY = 'lggWbghl8imfrNmluJbFMaOsb88EE3pitxkHtL57EBU';

// const apiURL = `https://api.unsplash.com/photos/random
// ?client_id=${apiKEY}&count=${count}`;

// // Get photos from Unsplash API

// async function getPhotos() {
//     try {
//         const response = await fetch(apiURL);
//         photosArray = await response.json();
//         displayPhotos();
//     } catch (error) {
//         // Catch Error
//         console.log(error)
//     }
// }

// function loading() {
//     loader.hidden = false;
//     imageContainer.hidden = true;
// }

// function complete() {
//     loader.hidden = true;
//     imageContainer.hidden = false;
// }

// // Check to see if scrolling near botto of page, Load more photos

// window.addEventListener('scroll', () => {
//     if (window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 1000 && ready) {
//         ready = false;
//         getPhotos();
//     }
// })

// // Check if all images were loaded
// function imageLoaded() {
//     imagesLoaded++;
//     if (imagesLoaded === totalImages) {
//         ready = true;
//         loader.hidden = true;
//         initialLoad = false;
//         count = 30;
//         apiURL = `https://api.unsplash.com/photos/random
//         ?client_id=${apiKEY}&count=${count}`;
//     }
// }

// getPhotos();
