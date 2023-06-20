function gallery (DOMNode) {

    if(DOMNode) {
        const galleryView = document.getElementById('gallery-zone');
        const galleryImage = document.getElementById('gallery-view');
        const closeButton = document.getElementById('close');
        const images = document.querySelectorAll(".container > img");

        const prevButton = document.getElementById('previous');
        const nxtButton = document.getElementById('next');
        const totalImages = images.length;
        let imageIndex;
    
        images.forEach((image, index) => image.addEventListener('click', () => {
            galleryView.style.display = 'flex';
            const referredImage = image.src;
            galleryImage.src= referredImage;
            imageIndex = index;
        }))

        closeButton.addEventListener('click', () => {
            galleryView.style.display = 'none';
            }
        )

        prevButton.addEventListener('click', () => {
            
            if((imageIndex) > 0){
                imageIndex = imageIndex - 1
                galleryImage.src = images[imageIndex].src;
            }else{
                console.log(imageIndex)
                imageIndex = totalImages -1;
                galleryImage.src = images[imageIndex].src;
            }
        })

        nxtButton.addEventListener('click', () => {
            
            if(totalImages - 1 > imageIndex){
                imageIndex = imageIndex + 1;
                galleryImage.src = images[imageIndex].src;
                
            }else{
                imageIndex = 0;
                galleryImage.src = images[imageIndex].src;
                
            }
        })
    }

}

export default gallery;