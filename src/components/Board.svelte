<script>
  // Data for the boards
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
    { name: "Mr Raghul", title: "Finance ,Hope3 India Foundation CTS, India ",image: "raghul.png" },
  ];
</script>

<style>
  /* Styling for the board section */
  .board-section {
    text-align: center;
    padding: 2rem;
  }

  .board-section h2 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
    color: #727171;
  }

  .board-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Desktop: 4 items in a row */
  gap: 0.5rem; /* Reduced gap between the profile cards */
  justify-items: center;
  margin-bottom: 2rem;
}

  /* Profile card styling */
  .profile-card {
    text-align: center;
    margin: 1rem;
  }

  .profile-card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .profile-card h3 {
    margin: 0.5rem 0 0.25rem;
    /* font-size: 1.2rem; */
    font-family:"Montserrat", sans-serif ;
  }

  .profile-card p {
    margin: 0;
    color: gray;
    font-size: 0.9rem;
    
  }

  /* Mobile view: 2 items per row */
  @media (max-width: 768px) {
    .board-grid {
      grid-template-columns: repeat(2, 1fr); /* Mobile: 2 items in a row */
    }

    .profile-card img {
      width: 120px;
      height: 120px;
    }

    .profile-card h3 {
      font-size: 1rem;
    }

    .profile-card p {
      font-size: 0.8rem;
    }
  }
</style>

<!-- Main Content -->
<div class="board-section">
  <h2>USA Board</h2>
  <div class="board-grid">
    {#each usaBoard as profile}
      <div class="profile-card">
        <img src={profile.image} alt="{profile.name}" />
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
      </div>
    {/each}
  </div>

  <h2>India Board</h2>
  <div class="board-grid">
    {#each indiaBoard as profile}
      <div class="profile-card">
        <img src={profile.image} alt="{profile.name}" />
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
      </div>
    {/each}
  </div>
</div>
