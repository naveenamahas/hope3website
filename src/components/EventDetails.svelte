<script>
  import Nav from "../components/Nav.svelte";

  // Props to receive event details
  export let title;
  export let date;
  export let image;
  export let description;

  // Example content (replace with dynamic data)
  const eventDetails = {
    title: "Welcome Note",
    date: "Jan 2023",
    image: "/jan_2023.jpg",
    description: `
      During the event, Mr. Shiva introduced the Foundation and Varsity, 
      discussing their mission, vision, and future goals. 
      Mr. Meenakshi highlighted the significance of interactive learning 
      by emphasizing the value of education. He engaged the audience online 
      to facilitate a more enriching educational experience.
    `,
  };
</script>

<Nav />

<section class="event-details">
  <div class="container">
    <img src={eventDetails.image} alt={eventDetails.title} />
    <h1>{eventDetails.title}</h1>
    <p class="date">{eventDetails.date}</p>
    <p class="description">{eventDetails.description}</p>
  </div>
</section>

<style>
  /* Reuse the same styles */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  .event-details {
    text-align: center;
    margin: 2rem 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .date {
    color: gray;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }
</style>
