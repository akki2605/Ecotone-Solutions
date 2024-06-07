//get photos for projects 

document.addEventListener("DOMContentLoaded", function() {
    const viewPhotosLink = document.getElementById('view-photos');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const popupImg = document.getElementById('popup-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const photos = [
        'images/projects/photo1.jpg',
        'images/projects/photo2.jpg',
        'images/projects/photo3.jpg',
        'images/projects/photo4.jpg',
        'images/projects/photo5.jpg',
        'images/projects/photo6.jpg',
        'images/projects/photo7.jpg',
        'images/projects/photo8.jpg',
        'images/projects/photo9.jpg',
        'images/projects/photo10.jpg',
        'images/projects/photo11.jpg',
        'images/projects/photo12.jpg',
        'images/projects/photo13.jpg',
        'images/projects/photo14.jpg',
        'images/projects/photo15.jpg',

    ];

    let currentPhotoIndex = 0;
    
    // Preload images
    const preloadedImages = photos.map(src => {
        const img = new Image();
        img.src = src;
        console.log
        return img;
    });

    function showPhoto(index) {
        if (index >= 0 && index < photos.length) {
            popupImg.src = preloadedImages[index].src;
            currentPhotoIndex = index;
        }
    }

    viewPhotosLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPhoto(0);
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', function() {
        showPhoto((currentPhotoIndex - 1 + photos.length) % photos.length);
    });

    nextBtn.addEventListener('click', function() {
        showPhoto((currentPhotoIndex + 1) % photos.length);
    });
});