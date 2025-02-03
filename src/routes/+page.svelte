<script>
  // @ts-nocheck
  import Footer from "../components/Footer.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import Contact from "../components/Contact.svelte";
  
  let images = [
    "home1.jpg", // Replace with actual image paths
    "home2.jpg",
    "home3.jpg",
  ];
  let currentImage = 0;
  
  let interval;
  
  const nextImage = () => {
    currentImage = (currentImage + 1) % images.length;
  };
  
  const prevImage = () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
  };
  
  onMount(() => {
    interval = setInterval(nextImage, 7000); // Automatically transition
    
    return () => clearInterval(interval);
  });
  
  const dropdownItems = [
    { name: "Founders", link: "#founders" },
    { name: "Mission/Vision", link: "#mission" },
    { name: "Financials", link: "#financials" },
    { name: "Admissions", link: "#admissions" },
  ];
  </script>
  
  <!-- svelte-ignore css_unused_selector -->
  <style>
  /* Global Styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body, html {
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  header img {
    max-height: 50px;
    width: auto;
  }
  
  nav {
    display: flex;
    gap: 2rem;
  }
  
  nav a {
    text-decoration: none;
    color: #7b7a7a;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }
  
  nav a:hover {
    color: #3431e3;
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
  }
  
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }
  
  .button.apply {
    background-color: #ebd40a;
    color: white;
  }
  
  .button.donate {
    background-color: orangered;
    color: white;
  }
  
  .button.apply:hover {
    background-color: #e8cd60;
  }
  
  .button.donate:hover {
    background-color: #e61f2f;
  }
  
  /* Hero Section Styling */
  .hero {
    position: relative;
    height: 60vh;
    overflow: hidden; /* Prevent overflow in hero section */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image doesn't overflow */
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .carousel img.active {
    opacity: 1;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: rgba(229, 227, 227, 0.749);
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
  
  .hero-content {
    position: absolute;
    left: 2rem;
    z-index: 5;
    color: white;
    max-width: 40%;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
  
  .responsive-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 250px;
    margin-left: 70px;
  }
  
  /* Footer Quote Section */
  .fond {
    text-align: center;
    font-family: "Comic Sans MS", cursive;
    color: gray;
    font-size: 1.5rem;
    padding: 1rem;
    margin-top: 0%;
  }
  
  @media (max-width: 768px) {
    header {
      flex-wrap: wrap;
      justify-content: center;
      padding: 1rem;
    }
  
    header img {
      max-height: 40px;
      margin-bottom: 0.5rem;
    }
  
    nav {
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  
    .buttons {
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
  
    .hero-content {
      left: 1rem;
      max-width: 80%;
    }
  
    .hero-content h1 {
      font-size: 2rem;
    }
  
    .hero-content p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    nav a {
      font-size: 0.9rem;
    }
  
    .button {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  
    .hero-content h1 {
      font-size: 1.5rem;
    }
  
    .hero-content p {
      font-size: 0.9rem;
    }
  }
  </style>
  
  <Nav />
  
  <section class="hero">
    <div class="carousel">
      {#each images as image, index}
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src={image} alt="Hero Image" class:active={index === currentImage} />
      {/each}
  
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <div class="arrow left" on:click={prevImage}>&#10094; </div>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <div class="arrow right" on:click={nextImage}>&#10095; </div>
    </div>
  
    {#if currentImage === 0}
      <div class="hero-content">
        <div class="responsive-buttons">
          <a href="https://www.hope3.org/donate.html" class="button donate">Donate</a>
          <a href="https://www.hope3.org/apply2024.html" class="button apply">Apply</a>
        </div>
      </div>
    {/if}
  </section>
  
  <div class="fond">
    <p>
      "Learning gives creativity, creativity leads to thinking, thinking provides 
      <br> knowledge, and knowledge makes you great."
      <br />
      - Abdul Kalam
    </p>
  </div>
  
  <Card />
  <Footer />
  <Contact />
  