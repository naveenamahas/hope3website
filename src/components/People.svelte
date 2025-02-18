<script>
    import { onMount } from "svelte";

    let startIndex = 0;
    let imagesPerView = 4; // Default for large screens

    const partners = [
        { image: "ssf_desk.png", name: "Shooting Stars Foundation", link: "https://shooting-stars-foundation.org/" },
        { image: "abdulkalam_desk.png", name: "Abdul Kalam Foundation", link: "https://apjabdulkalamfoundation.org/" },
        { image: "mugavari_desk.png", name: "Mugavari Foundation", link: "https://www.mugavarifoundation.org/" },
        { image: "namco_desk.png", name: "Namco", link: "https://namcoindia.org.in" },
        { image: "tnf_desk.png", name: "TNF", link: "https://tnfindia.org/" },
        { image: "abj desktop.png", name: "Dr. APJ Foundation", link: "https://www.drabdulkalamtrust.org/" }
    ];
   

    function nextSlide() {
        if (startIndex + imagesPerView < partners.length) {
            startIndex += imagesPerView; // Move forward by imagesPerView
        }
    }

    function prevSlide() {
        if (startIndex - imagesPerView >= 0) {
            startIndex -= imagesPerView; // Move back by imagesPerView
        }
    }

    function updateImagesPerView() {
    const width = window.innerWidth;
    if (width < 600) {
        imagesPerView = 2; // Mobile - 2 images
    } else if (width < 1024) {
        imagesPerView = 3; // Tablet - 2 images
    } else {
        imagesPerView = 4; // Desktop - 4 images
    }
    startIndex = 0; // Reset index when resizing
}


    onMount(() => {
        updateImagesPerView();
        window.addEventListener("resize", updateImagesPerView);
        return () => window.removeEventListener("resize", updateImagesPerView);
    });
</script>

<style>
    .carousel-container {
        text-align: center;
        padding: 30px;
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
        gap: 80px;
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
        width: 120px;
    }

    .logo-container a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: rgb(90, 134, 228);
       
    }
    .logo-container a:hover {
    color: rgb(57, 57, 238);
}

    .logo-container img {
        width: 130px;
        height: auto;
        border-radius: 50%;
        border: 2px solid gray;
        transition: transform 0.3s;
        margin: 20px;
    }

    .logo-container img:hover {
        transform: scale(1.1);
    }

    .logo-container p {
        font-size: 14px;
        font-weight: bold;
        margin-top: 0%;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .carousel {
            gap: 70px;
        }
        .logo-container img {
            width: 130px;
        }
    }

    @media (max-width: 600px) {
        .carousel-container h2 {
        font-size: 1.8rem;
        color: #4a4a4a;
        }
        .carousel {
            gap: 15px;
        }
        .logo-container img {
            width: 110px;
        }
    }
</style>

<div class="carousel-container">
    <h2>Non Profit Partners</h2>

    <div class="carousel">
        <button class="arrow" on:click={prevSlide} disabled={startIndex === 0}>&#10094;</button>

        {#each partners.slice(startIndex, startIndex + imagesPerView) as partner}
            <div class="logo-container">
                <a href={partner.link} target="_blank">
                    <img src={partner.image} alt={partner.name} />
                    <p>{partner.name}</p>
                </a>
            </div>
        {/each}

        <button class="arrow" on:click={nextSlide} disabled={startIndex + imagesPerView >= partners.length}>&#10095;</button>
    </div>
</div>

