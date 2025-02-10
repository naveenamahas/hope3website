<script>
    import { onMount } from "svelte";

    let startIndex = 0;
    let imagesPerView = 4; // Default for large screens
    let isMobile = false;  // Detect mobile view

    const partners = [
        { image: "arjava_desk.png", name: "Arjava Technologies", link: "https://www.arjavatech.com" },
        { image: "mugavari_desk.png", name: "Mugavari Foundation", link: "https://www.mugavarifoundation.org" },
        { image: "etutorborad_desk.png", name: "ETutorBoard", link: "https://etutorboard.com" },
        { image: "tngo.png", name: "TNNGO", link: "https://tnngo.org" }
        
    ];

    function nextSlide() {
        if (startIndex + imagesPerView < partners.length) {
            startIndex += imagesPerView;
        }
    }

    function prevSlide() {
        if (startIndex - imagesPerView >= 0) {
            startIndex -= imagesPerView;
        }
    }

    function updateView() {
        const width = window.innerWidth;
        if (width < 768) {
            imagesPerView = 2; // Mobile view - 2 images
            isMobile = true;
        } else {
            imagesPerView = partners.length; // Desktop - Show all
            isMobile = false;
        }
        startIndex = 0;
    }

    onMount(() => {
        updateView();
        window.addEventListener("resize", updateView);
        return () => window.removeEventListener("resize", updateView);
    });
</script>

<style>
    .carousel-container {
        text-align: center;
        padding: 30px;
        background: #f5f5f5;
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
        gap: 50px;
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

    .logo-container {
        text-align: center;
        width: 150px;
    }

    .logo-container a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: black;
    }

    .logo-container img {
        width: 130px;
        height: auto;
        border-radius: 50%;
        border: 2px solid gray;
        transition: transform 0.3s;
        margin-bottom: 10px;
    }

    .logo-container img:hover {
        transform: scale(1.1);
    }

    .logo-container p {
        font-size: 14px;
        font-weight: bold;
    }

    /* Mobile View (768px and below) */
    @media (max-width: 768px) {
        .carousel-container h2 {
        font-size: 1.8rem;
         color: #4a4a4a;
        }
        .carousel {
            gap: 20px;
        }
        .logo-container img {
            width: 100px;
        }
    }
</style>

<div class="carousel-container">
    <h2>Industrial Partners</h2>

    <div class="carousel">
        {#if isMobile}
            <button class="arrow" on:click={prevSlide} disabled={startIndex === 0}>&#10094;</button>
        {/if}

        {#each partners.slice(startIndex, startIndex + imagesPerView) as partner}
            <div class="logo-container">
                <a href={partner.link} target="_blank">
                    <img src={partner.image} alt={partner.name} />
                    <p>{partner.name}</p>
                </a>
            </div>
        {/each}

        {#if isMobile}
            <button class="arrow" on:click={nextSlide} disabled={startIndex + imagesPerView >= partners.length}>&#10095;</button>
        {/if}
    </div>
</div>


