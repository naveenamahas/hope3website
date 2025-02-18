<script>
  // @ts-nocheck
  import Board from "./Board.svelte";

  let cards = [
    {
      title: "Education",
      description: [
        "Economic assistance towards an accredited College degree",
        "Learning with peers through collaborative clubs, events, and workshops",
      ],
      fullDescription: [
        "Practical knowledge through interactions with industry experts.",
        "Scholarship opportunities for eligible students."
      ],
      image: "b.jpg",
      showMore: false
    },
    {
      title: "Empowerment",
      description: [
        "Opportunity to lead and be part of initiatives",
        "Discovering inner strengths and understanding soft skills",
      ],
      fullDescription: [
        "Building confidence through leadership programs.",
        "Access to mentoring from professionals."
      ],
      image: "b2.jpg",
      showMore: false
    },
    {
      title: "Entrepreneurship",
      description: [
        "Practicing and testing startup ideas",
        "Exposure and advice from industry experts on Business thinking",
      ],
      fullDescription: [
        "Opportunities to present and promote ideas to clients and investors.",
        "Workshops on business model development."
      ],
      image: "b3.jpg",
      showMore: false
    },
  ];

  function toggleReadMore(index) {
    cards[index].showMore = !cards[index].showMore;
    cards = [...cards]; // Triggers reactivity
  }
</script>

<!-- svelte-ignore css_unused_selector -->
<style>
  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    padding: 1rem 1rem;
  }

  /* Card Section */
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .card {
    background-color: white;
    box-shadow: 0 4px 6px rgba(44, 43, 43, 0.1);
    width: 220px;
    overflow: hidden;
    text-align: left;
    transition: transform 0.2s;
  }

  .card img:hover {
    transform: scale(1.1);
  }

  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
    transition: transform 0.3s ease-in-out;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.8rem;
    margin-top: 1px;
  }

  .card-description {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin-top: 1px;
  }

  .card-description ul {
    padding-left: 1rem;
    list-style: disc;
    margin: 0.5rem 0 1rem 0;
  }

  .read-more {
    display: inline-block;
    margin-top: 1rem;
    color: red;
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
  }

  .read-more:hover {
    text-decoration: underline;
  }

  .how-we-do-it {
    margin-top: 30px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .how-we-do-it img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: height 0.3s ease-in-out;
  }

  /* Content below image (visible in mobile only) */
  .how-we-do-it-content {
    display: none; /* Initially hidden */
    position: absolute;
    bottom: 20px;
    left: 10%;
    width: 80%;
    text-align: center;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 10px;
  }

  /* Buttons for mobile view */
  .how-we-do-it-content .button {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    margin-top: 1rem;
  }

  .how-we-do-it-content .donate {
    background-color: red;
    color: white;
  }

  .how-we-do-it-content .apply {
    background-color: yellow;
    color: black;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .how-we-do-it {
      display: none; 
    }

    .sections {
      display: block; 
    }

    .sections img {
      width: 100%; 
      height: 50vh; 
      object-fit: cover;
    }

    .section h3 {
      font-size: 1.2rem;
    }

    .section p {
      font-size: 1rem;
    }

    .buttons {
      gap: 1rem;
    }
  }

  /* Sections for mobile view below the image */
  .sections {
    display: none; /* Initially hidden */
    margin-top: 50px;
    background-color: rgb(209, 235, 243);
    width: 105%;
   
    
  }

  .section {
    text-align: center;
    margin: 2rem 0;
  }

  .section h3 {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.2rem;
    text-align: center;
    margin-left: 2px;
    font-family: sans-serif;
  }

  .section p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  

  .buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 10px;
    margin-top: 10px;
}
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    cursor: pointer; 
    text-decoration: none;
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

  /* Show the sections in mobile view */
  @media (max-width: 768px) {
    .sections {
      display: block; 
    }
    .sections img {
  width: 100vw; 
  height: auto; 
  display: block; 
  object-fit: cover; 
}

  }
</style>

<div class="container">
  <!-- Card Section -->
  <div class="card-container">
    {#each cards as card, index}
      <div class="card">
        <img src={card.image} alt={card.title} />
        <div class="card-content">
          <h3 class="card-title">{card.title}</h3>
          <ul class="card-description">
            {#each card.description as desc}
              <li>{desc}</li>
            {/each}
            {#if card.showMore}
              {#each card.fullDescription as fullDesc}
                <li>{fullDesc}</li>
              {/each}
            {/if}
          </ul>
          <button class="read-more" on:click={() => toggleReadMore(index)}>
            {card.showMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- "Hope" image section for Desktop (hidden on mobile) -->
  <div class="how-we-do-it">
    <img src="hope.jpg" alt="How We Do It" />
  </div>

  <!-- Sections for mobile view -->
  <div class="sections">
    <!-- Hope image for mobile -->
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="homepage_banner_2_mob.jpg" alt="Hope Image" />
    <div class="section">
      <h3>Labs</h3>
      <p>Learn about our unique and immersive Labs!</p>
    </div>

    <div class="section">
      <h3>Courses</h3>
      <p>Discover our wide array of interactive courses based in all subjects!</p>
    </div>

    <div class="section">
      <h3>Scholarships</h3>
      <p>Looking for financial aid? We award scholarships! Learn more...</p>
    </div>

    <div class="section">
      <h3>Clubs</h3>
      <p>Learn more about how we help in finding clubs and community connections...</p>
    </div>

    <div class="section">
      <h3>Internships</h3>
      <p>Want to work for us? Click to learn more about how you can become an intern!</p>
    </div>
    <div class="buttons">
      <a href="/hope3website/Donor" class="button donate">Donate</a>
      <a href="/hope3website/Apply" class="button apply">Apply</a>

    </div>
  </div>
</div>

<Board />
