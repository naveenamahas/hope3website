<script>
  import Nav from "../../components/Nav.svelte";

  let images = [
    "personality_develop_2.png",
    "personality_develop_girls_3.png",
    "event.png",
  ];
</script>


<Nav />

<h1>Career Guidance Program</h1>

<div class="container">
  <div class="gallery">
    {#each images as img}
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={img} alt="Career Guidance Image" />
    {/each}
  </div>

  <div class="content">
    <p>
      <strong>Mina</strong> organized a career guidance program for our students to learn 
      about their career options and future plans. This initiative aids our students in 
      envisioning a well-balanced future. She is a certified self-development coach, 
      adept at inner script programming and dismantling limiting beliefs.

      She empowers students with tools to uncover their true selves, recognize their talents, 
      and pursue a fulfilling life. She is committed to spreading body positivity and acceptance. 
      She has won many pageants including Mrs International America Curvy 2023 & 
      Mrs Universe USA -West Coast 2023 to spread the message that beauty is beyond 
      age, size, shape, color & gender.
    </p>
  </div>
</div>
<style>

  .container {
    max-width: 900px;
    margin: auto;
    text-align: center;
    padding: 0 15px;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 75px;
    margin: 20px 0;
  }

  .gallery img {
    width: 100%;
    max-width: 250px; /* Adjusts the max size */
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .content {
    background: white;
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-family: 'Montserrat', sans-serif;
    text-align: justify;
    line-height: 1.7;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #0078d4;
    background-color: rgba(187, 238, 238, 0.915);
    padding: 1rem;
    border-radius: 2px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .gallery {
      flex-direction: column;
      align-items: center;
    }

    .gallery img {
      width: 80%; /* Adjusts for smaller screens */
      max-width: 100%;
    }

    .content {
      padding: 15px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
      padding: 0.8rem;
    }

    .content {
      font-size: 0.9rem;
      padding: 10px;
    }
  }
</style>

