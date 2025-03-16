
const images = [
    "https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/30906509/pexels-photo-30906509/free-photo-of-majestic-snow-covered-mountains-in-banff-canada.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/31084569/pexels-photo-31084569/free-photo-of-vibrant-daisies-cluster-in-full-bloom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/30876790/pexels-photo-30876790/free-photo-of-solitary-figure-embracing-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

updateImage(); // Initial image display