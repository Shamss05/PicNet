// Select all explore items
const exploreItems = document.querySelectorAll('.explore-item');
// Add click event listener to each explore item
exploreItems.forEach(item => {
    // Handle click on the entire explore item
    item.addEventListener ('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        // Check if clicked item has an image or a video
        const img = this.querySelector('img');
        const video = this.querySelector('video');
        if (video){
            const videoSrc = video.src;
            zoomVideo(video.src);
        }
        else if (img) {
            const imgSrc = img.src;
            zoomImage(img.src);
        }
    });
    // Prevent clicks on icons (including reel icon) from bubbling up to the explore item
    const icons = item.querySelectorAll('.heart-icon, .reel-icon');
    icons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
        });
    });
});
// Function to create a zoomed container for images
function zoomImage(imgSrc) {
    const zoomedContainer = createZoomedContainer();
    const zoomedImg = document.createElement('img');
    zoomedImg.src = imgSrc;
    zoomedContainer.appendChild(zoomedImg);
    document.body.appendChild(zoomedContainer);
}
// Function to create a zoomed container for videos
function zoomVideo(videoSrc) {
    const zoomedContainer = createZoomedContainer();
    const zoomedVideo = document.createElement('video');
    zoomedVideo.src = videoSrc;
    zoomedVideo.controls = true; // Show video controls
    zoomedVideo.autoplay = true; // Autoplay video
    zoomedContainer.appendChild(zoomedVideo);
    document.body.appendChild(zoomedContainer);
}
// Function to create a generic zoomed container
function createZoomedContainer() {
    const zoomedContainer = document.createElement('div');
    zoomedContainer.classList.add('zoomed-container');
    // Close zoomed container when clicked outside
    zoomedContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        document.body.removeChild(zoomedContainer);
    });    
    return zoomedContainer;
}
// Close zoomed container when clicked outside of it
document.addEventListener('click', function() {
    const zoomedContainer = document.querySelector('.zoomed-container');
    if (zoomedContainer) {
        document.body.removeChild(zoomedContainer);
    }
});


