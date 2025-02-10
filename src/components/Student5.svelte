<script>
    import { onMount } from "svelte";

    let startIndex = 0;
    let imagesPerView = 4; // Default for large screens
    let isMobile = false;  // Detect mobile view

    const successProfiles = [
        { name: "Mr Sivakumar", title: "Hope3, India", image: "shiva.png" },
        { name: "Mr Ganesh", title: "AlixPartners,USA", image: "a5.png" },
        { name: "Mr Karthik Babu", title: "Manhattan Associates, USA", image: "a2.png" },
        { name: "Mrs Ramu Palaniappan", title: "Amazon,USA", image: "ramu.png" },
    ];

    function nextSlide() {
        if (startIndex + imagesPerView < successProfiles.length) {
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
            imagesPerView = successProfiles.length; // Desktop - Show all
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

    /* Mobile View (768px and below) */
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

<div class="carousel-container">
    <h2>Student Relations</h2>

    <div class="carousel">
        {#if isMobile}
            <button class="arrow" on:click={prevSlide} disabled={startIndex === 0}>&#10094;</button>
        {/if}

        {#each successProfiles.slice(startIndex, startIndex + imagesPerView) as profile}
            <div class="profile-container">
                <img src={profile.image} alt="{profile.name}" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
            </div>
        {/each}

        {#if isMobile}
            <button class="arrow" on:click={nextSlide} disabled={startIndex + imagesPerView >= successProfiles.length}>&#10095;</button>
        {/if}
    </div>
</div>
