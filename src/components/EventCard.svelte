<script>
// @ts-nocheck

    import { onMount } from "svelte";
  
    export let images = [];
    let currentImage = 0;
  
    /**
   * @type {number | undefined}
   */
    let interval;
  
    const nextImage = () => {
      currentImage = (currentImage + 1) % images.length;
    };
  
    const prevImage = () => {
      currentImage = (currentImage - 1 + images.length) % images.length;
    };
  
    onMount(() => {
      interval = setInterval(nextImage, 7000); // Auto-rotate images every 7 seconds
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="carousel">
    {#each images as image, index}
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img
        src={image}
        alt="Hero Image"
        class:active={index === currentImage}
      />
    {/each}
  
    
    <div class="arrow left" on:click={prevImage}>&#10094;</div>
  
    <div class="arrow right" on:click={nextImage}>&#10095;</div>
  </div>
  
  <style>
    .carousel {
      position: relative;
      width: 100%;
      height: 60vh;
      overflow: hidden;
    }
  
    .carousel img {
       position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      margin-top: 0%; 
    }
  
    .carousel img.active {
      opacity: 1;
    }
  
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      z-index: 10;
      user-select: none;
    }
  
    .arrow.left {
      left: 1rem;
    }
  
    .arrow.right {
      right: 1rem;
    }
  </style>
  