<script>
    /**
   * @type {string | any[]}
   */
     export let images = []; // Array of images
    let currentIndex = 0;
  
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
    };
  
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    };
  </script>
  
  <div class="carousel">
    <button class="arrow left" on:click={prevImage}>&#10094; </button>
    <img src={images[currentIndex]} alt="Event Image" />
    <button class="arrow right" on:click={nextImage}>&#10095;</button>
  </div>
  
  <style>
    .carousel {
      position: relative;
      width: 100%;
     
      
      overflow: hidden;
    }
  
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
     
    }
  
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%); 
      background: rgba(253, 252, 252, 0.2); 
      border: none;
     
      cursor: pointer;
       /* z-index: 40;  */
    }
  
    .left {
      left: 0;
    }
  
    .right {
      right: 0;
    }
  
    /* .arrow:hover {
      background: rgba(0, 0, 0, 0.8);
      color: aliceblue;
    } */
  </style>
  