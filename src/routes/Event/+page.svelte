<script>
// @ts-nocheck

  import Nav from "../../components/Nav.svelte";
  import EventCard from "../../components/EventCard.svelte";
  import EventDetails from "../../components/EventDetails.svelte"
  
  import Contact from "../../components/Contact.svelte";

  // Carousel images
  const images = [
    "hope_event.jpg",
    "hope_event1.png",
    "hope _event_2.png",
  ];

  // All events categorized by year
  const allEvents = {
    2023: [
      { id: 1, title: "AV² 2.0", date: "Jan 2023", image: "jan_2023.jpg" },
      { id: 2, title: "Career Guidance Program", date: "Sep 2023", image: "pic2.png" },
      { id: 3, title: "Youth Conference", date: "Aug 2023", image: "aug_2023.jpg" },
    ],
    2022: [
      { id: 4, title: "Leadership Program", date: "Jun 2022", image: "hope3_200.png" },
      { id: 5, title: "Tech Workshop", date: "Feb 2022", image: "tech_2022.jpg" },
    ],
    2021: [
      { id: 4, title: "Leadership Program", date: "Jun 2022", image: "hope3_200.png" },
    ],
    2020 :[
      { id: 4, title: "Leadership Program", date: "Jun 2022", image: "hope3_200.png" },
    ],
    2019:[
      { id: 4, title: "Leadership Program", date: "Jun 2022", image: "hope3_200.png" },
    ],
  };

  // Reactive variables
  let selectedYear = "2023"; // Default year
  let events = allEvents[selectedYear];

  // Handle year selection
  const showEvents = (year) => {
    selectedYear = year;
    events = allEvents[year];
  };
</script>

<Nav />

<!-- Hero Carousel Section -->
<section class="hero">
  
  <EventCard {images} />
</section>

<!-- Year Selection Buttons -->
<section class="year-buttons">
  <button 
    on:click={() => showEvents("2023")} 
    class:selected={selectedYear === "2023"} 
    class:selected-button={selectedYear === "2023"}>
    2023
  </button>
  <button 
    on:click={() => showEvents("2022")} 
    class:selected-button={selectedYear === "2022"}>
    2022
  </button>
  <button 
    on:click={() => showEvents("2021")} 
    class:selected-button={selectedYear === "2021"}>
    2021
  </button>
  <button 
    on:click={() => showEvents("2020")} 
    class:selected-button={selectedYear === "2020"}>
    2020
  </button>
  <button 
    on:click={() => showEvents("2019")} 
    class:selected-button={selectedYear === "2019"}>
    2019
  </button>
</section>

<!-- Events Grid -->
<section class="events">
  <h2>Events {selectedYear}</h2>
  <div class="events-grid">
    {#each events as event}
      <div class="event-card">
        <img src={"/" + event.image} alt={event.title} />
        <h3>{event.title}</h3>
        
        {#if selectedYear === "2023"}
          <p>{event.date}</p>
          <a href="/jan2023" class="see-more">See more</a>
        {/if}
      </div>
    {/each}
  </div>
</section>


<style>
  /* General Styles */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  /* Hero Section */
  /* Year Buttons */
  .year-buttons {
    display: flex;
    justify-content:left;
    gap: 1rem;
    margin:  1%;
  }

  .year-buttons button {
     /* background-color: #e0e0e0;  */
     border: none;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    border-radius: 20px;
    cursor: pointer; 
     /* transition: background-color 0.3s ease;  */
    color: #3431e3;
    font-size: larger;
  }

  .year-buttons button:hover {
    background-color: #f1cb20;
    color: #333;
  }

  .year-buttons button[selected] {
    background-color: #3431e3;
    color: white;
  }

  /* Events Section */
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
    border-radius: 0%;
    box-shadow: 0 2px 4px rgba(82, 82, 82, 0.1);
    width: 300px;
    overflow: hidden;
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

  /* See More Button */
  .see-more {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background-color: #e61f2f;
    color: white;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .see-more:hover {
    background-color: #b71c1c;
  }
</style>
<Contact/>
