<script>
  import Board from "./Board.svelte";

    const cards = [
      {
        title: "Education",
        description: [
          "Economic assistance towards an accredited College degree",
          "Learning with peers through collaborative clubs, events, and workshops",
        ],
        image: "b.jpg", // Replace with your image path
        link: "#",
      },
      {
        title: "Empowerment",
        description: [
          "Opportunity to lead and be part of initiatives",
          "Discovering inner strengths and understanding soft skills",
        ],
        image: "b2.jpg", // Replace with your image path
        link: "#",
      },
      {
        title: "Entrepreneurship",
        description: [
          "Practicing and testing startup ideas",
          "Exposure and advice from industry experts on Business thinking",
        ],
        image: "b3.jpg", // Replace with your image path
        link: "#",
      },
    ];
  </script>
  
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
      box-shadow: 0 4px 6px rgba(54, 54, 54, 0.1);
      /* border-radius: 10px; */
      width: 280px;
      overflow: hidden;
      text-align: left;
      transition: transform 0.2s;
    }
  
     .card img:hover {
        transform: scale(1.1);
    } 
  
    .card img {
      width: 100%;
      height: 180px;
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
    }
  
    .card-description {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.5;
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
    }
  
    .read-more:hover {
      text-decoration: underline;
    }
  
    .how-we-do-it {
      margin-top: 30px;
      width: 100%;
      overflow: hidden;
      margin-left: 0%;
    }
   
    
    /* Responsive adjustments */
@media (max-width: 768px) {
  .how-we-do-it {
    flex-direction: column; /* Stack the image and text vertically on mobile */
    text-align: center;
  }

  .how-we-do-it img {
    width: 100%; /* Make the image larger on smaller screens */
    margin-bottom: 50px; /* Add some space between the image and text */
  }

  .how-we-do-it-text h2 {
    font-size: 2rem; /* Reduce the title size on mobile */
  }

  .how-we-do-it-text p {
    font-size: 1rem; /* Adjust text size for mobile */
  }
}

  </style>
  
  <div class="container">
    <!-- Card Section -->
    <div class="card-container">
      {#each cards as card}
        <div class="card">
          <img src={card.image} alt={card.title} />
          <div class="card-content">
            <h3 class="card-title">{card.title}</h3>
            <ul class="card-description">
              {#each card.description as desc}
                <li>{desc}</li>
              {/each}
            </ul>
            <a href={card.link} class="read-more">Read More</a>
          </div>
        </div>
      {/each}
    </div>
  
    <!-- "How We Do It?" Section -->
    <div class="how-we-do-it">
      <img src="hope.jpg" alt="How We Do It" />
    </div>
    
  </div>
  <Board/>
  