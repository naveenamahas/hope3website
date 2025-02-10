<script>
  import { onMount } from "svelte";

  let startIndexMedia = 0;
  let startIndexIndia = 0;
  let imagesPerView = 4; // Default for large screens
  let isMobile = false;  // Detect mobile view

  const usaBoard = [
    { name: "Mr Palaniappan", title: "Amazon, USA", image: "palani.png" },
    { name: "Mr Neelakandan Venkataraman", title: "Microsoft, USA", image: "neels.png" },
    { name: "Dr Meenakshi Sundaram", title: "Intel, USA", image: "meenakshi.png" },
    { name: "Mrs Ramu Palaniappan", title: "Amazon, USA", image: "ramu.png" },
  ];

  const indiaBoard = [
    { name: "Mr Manivannan", title: "Founder, Hope3 India Foundation", image: "board.png" },
    { name: "Mr Sivakumar", title: "Managing Trustee, Hope3 India Foundation", image: "shiva.png" },
    { name: "Mr Karthick", title: "Trustee, Hope3 India Foundation", image: "karthik.png" },
    { name: "Mr Raghul", title: "Finance, Hope3 India Foundation CTS, India", image: "raghul.png" },
  ];

  // Functions for usaBoard
  function nextSlideMedia() {
    if (startIndexMedia + imagesPerView < usaBoard.length) {
      startIndexMedia += imagesPerView;
    }
  }
  function prevSlideMedia() {
    if (startIndexMedia - imagesPerView >= 0) {
      startIndexMedia -= imagesPerView;
    }
  }

  // Functions for indiaBoard
  function nextSlideIndia() {
    if (startIndexIndia + imagesPerView < indiaBoard.length) {
      startIndexIndia += imagesPerView;
    }
  }
  function prevSlideIndia() {
    if (startIndexIndia - imagesPerView >= 0) {
      startIndexIndia -= imagesPerView;
    }
  }

  function updateView() {
    const width = window.innerWidth;
    if (width < 768) {
      imagesPerView = 2; // Mobile view - 2 images
      isMobile = true;
    } else {
      imagesPerView = usaBoard.length; // Desktop - Show all
      isMobile = false;
    }
    startIndexMedia = 0;
    startIndexIndia = 0;
  }

  onMount(() => {
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  });
</script>

<style>
  * {
      font-family: 'Montserrat', sans-serif;
  }
  .carousel-container {
    text-align: center;
    padding: 30px;
    background: white;
  }

  .carousel-container h2 {
    font-size: 3rem;
    color: #727171;
    text-align: center;
   margin-top: 0%;
  }

  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }

  .carousel .arrow {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0.5;
  }

  .carousel .arrow:hover {
    opacity: 1;
  }

  .profile-container {
    text-align: center;
    width: 150px;
  }

  .profile-container img {
    width: 130px;
    height: auto;
    border-radius: 50%;
    border: 2px solid gray;
    transition: transform 0.3s;
    margin-bottom: 10px;
  }

  .profile-container img:hover {
    transform: scale(1.1);
  }

  .profile-container h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
  }

  .profile-container p {
    font-size: 14px;
    color: #555;
  }

  @media (max-width: 768px) {
    .carousel-container h2 {
      font-size: 1.8rem;
      color: #4a4a4a;
    }
    .carousel {
      gap: 20px;
    }
    .profile-container img {
      width: 100px;
    }
  }
</style>

<!-- USA Board Section -->
<div class="carousel-container">
  <h2>USA Board</h2>

  <div class="carousel">
    {#if isMobile}
      <button class="arrow" on:click={prevSlideMedia} disabled={startIndexMedia === 0}>&#10094;</button>
    {/if}

    {#each usaBoard.slice(startIndexMedia, startIndexMedia + imagesPerView) as profile}
      <div class="profile-container">
        <img src={profile.image} alt="{profile.name}" />
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
      </div>
    {/each}

    {#if isMobile}
      <button class="arrow" on:click={nextSlideMedia} disabled={startIndexMedia + imagesPerView >= usaBoard.length}>&#10095;</button>
    {/if}
  </div>
</div>

<!-- India Board Section -->
<div class="carousel-container">
  <h2>India Board</h2>

  <div class="carousel">
    {#if isMobile}
      <button class="arrow" on:click={prevSlideIndia} disabled={startIndexIndia === 0}>&#10094;</button>
    {/if}

    {#each indiaBoard.slice(startIndexIndia, startIndexIndia + imagesPerView) as profile}
      <div class="profile-container">
        <img src={profile.image} alt="{profile.name}" />
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
      </div>
    {/each}

    {#if isMobile}
      <button class="arrow" on:click={nextSlideIndia} disabled={startIndexIndia + imagesPerView >= indiaBoard.length}>&#10095;</button>
    {/if}
  </div>
</div>
