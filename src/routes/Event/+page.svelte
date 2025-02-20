<script>
  // @ts-nocheck
  import { goto } from "$app/navigation"; // Import goto for navigation
  import Nav from "../../components/Nav.svelte";
  import EventCard from "../../components/EventCard.svelte";
  import EventDetails from "../../components/EventDetails.svelte";
  import Contact from "../../components/Contact.svelte";
  
  // Carousel images
  const images = [
    "hope_event.jpg",
    "hope_event1.png",
    "hope _event_2.png",
  ];
  const yearOrder = ["2023", "2022", "2021", "2020", "2019","2018"];
  // All events categorized by year
  const allEvents = {
    2023: [
      { id: 1, title: "AV² 2.0", date: "Jan 2023", image: "jan_2023.jpg", path: "/hope3website/jan2023" },
      { id: 2, title: "Career Guidance Program", date: "Sep 2023", image: "event.png", path: "/hope3website/sep2023" },
      { id: 3, title: "Youth Conference", date: "Aug 2023", image: "aug_2023.jpg", path: "/hope3website/aug2023" },
    ],
    2022: [
      { id: 4, title: "UPDATE SOON", date: "Jun 2022", image: "hope3_200.png" },
    ],
    2021: [
      { id: 5, title: "UPDATE SOON", date: "Jun 2021", image: "hope3_200.png" },
    ],
    2020: [
      { id: 6, title: "UPDATE SOON", date: "Jun 2020", image: "hope3_200.png" },
    ],
    2019: [
      { id: 7, title: "UPDATE SOON", date: "Jun 2019", image: "hope3_200.png" },
    ],
    2018: [
      { id: 8, title: "UPDATE SOON", date: "Jun 2018", image: "hope3_200.png" },
    ],
  };
  
  // Reactive variables
  let selectedYear = "2023"; 
  let events = allEvents[selectedYear];
  
  // Handle year selection
  const showEvents = (year) => {
    selectedYear = year;
    events = allEvents[year];
  };
  
  const goToEvent = (eventPath) => {
    goto(eventPath);
  };

  </script>
  
  <Nav />
  
  <!-- Hero Carousel Section -->
  <section class="hero">
    <EventCard {images} />
  </section>
  
  <!-- Year Selection Buttons -->
  <section class="year-buttons">
    {#each yearOrder as year}
      <button 
        on:click={() => showEvents(year)} 
        class:selected={selectedYear === year}>
        {year}
      </button>
    {/each}
  </section>
  
  
  <!-- Events Grid -->
  <section class="events">
    <h2>Events {selectedYear}</h2>
    <div class="events-grid">
      {#each events as event}
        <div class="event-card">
          <img 
  src={event.image} 
  alt={event.title} 
  style="width: {selectedYear === '2023' ? '100%' : '100%'}; height: {selectedYear === '2023' ? '150px' : '280px'};"
/>


          <h3>{event.title}</h3>
          <p>{event.date}</p>
  
          {#if event.path}
            <button on:click={() => goToEvent(event.path)} class="see-more">
              See more
            </button>
          {/if}
        </div>
      {/each}
    </div>
  </section>
  
  <Contact/>
  
  <style>
    *{
      margin: 0;
      font-family: Montserrat, sans-serif !important;
    }
  
  
    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #333;
    }
  
    .year-buttons {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping on small screens */
    justify-content: left;
    gap: 1rem;
    margin: 1%;
  }

  .year-buttons button {
    border: none;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    border-radius: 20px;
    cursor: pointer;
    color: #3431e3;
    font-size: larger;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Highlight the active button */
  .year-buttons button.selected {
    background-color: #f1cb20; /* Active button color */
    color: white;
    font-weight: bold;
  }

  .year-buttons button:hover {
    background-color: #f1cb20;
    color: #333;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .year-buttons {
      gap: 0.5rem;
    }

    .year-buttons button {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .year-buttons {
      justify-content: center;
      gap: 0.3rem;
    }

    .year-buttons button {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
    .events {
      text-align: center;
      margin: 1rem 0;
    }
  
    .events-grid {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  
    .event-card {
      background: white;
      box-shadow: 0 2px 4px rgba(82, 82, 82, 0.1);
      width: 300px;
      text-align: center;
      transition: transform 0.3s ease;
    }
  
    .event-card:hover {
      transform: translateY(-5px);
    }
  
    .event-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  
    .event-card h3 {
      margin: 1rem 0 0.5rem;
      font-size: 1.2rem;
      color: #333;
    }
  
    .event-card p {
      color: gray;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  
    .see-more {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      background-color: #e61f2f;
      color: white;
      border-radius: 20px;
      text-decoration: none;
      /* transition: background-color 0.3s ease; */
      cursor: pointer;
    }
  
    .see-more:hover {
      background-color: #b71c1c;
    }
    
  </style>
  