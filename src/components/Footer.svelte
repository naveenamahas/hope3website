<script>
  let pointerPosition = { x: 0, y: 0 };

  /**
 * @param {{ clientX: any; clientY: any; }} event
 */
  function handlePointerMove(event) {
    pointerPosition = { x: event.clientX, y: event.clientY };
  }
</script>

<style>
  
  .statistics-container {
    display: flex;
    justify-content:space-evenly;
    background-image: url('/homepage.jpg'); 
    padding: 90px;
    border-radius: 2px; 
    width: 95%; 
} 

.stat-icon img {
    width: 70px; /* Adjust size */
    height: 70px; /* Adjust size */
    filter: grayscale(100%); /* Apply grayscale if needed */
    }

.stat-value {
    font-size: 2.3rem;
    font-weight: bold;
    color: #58595b;
}

.stat-label {
    font-size: 2rem;
    color: #585956;
}

.cta-section {
text-align: center;
margin-top: 20px;
}

.cta-section p {
margin: 10px 0;
color: #6b6b6b;
font-family: "Montserrat", sans-serif;
font-size: medium;
}

.highlight {
font-weight: bold;
color: #f57c00;
}

.join-button {
margin: 50px;
padding: 10px 20px;
background-color: #ffd600;
color: #444;
border: none;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
text-decoration: none; /* Remove underline */
display: inline-block; /* Ensure it behaves like a button */
}

.join-button:hover {
background-color: #ffb700;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
.statistics-container {
  padding: 50px 20px;
  flex-direction: row;
  justify-content: space-evenly;
  background-image: none;
  background-color: #f3d826;
}

.stat-box {
  margin: 10px 0;
}

.statistics-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 20px;
  padding: 20px 20px;
}

.statistics-container > .stat-box:nth-child(1),
.statistics-container > .stat-box:nth-child(2),
.statistics-container > .stat-box:nth-child(2) {
  justify-self: center;
  padding-left: 10%;
}


.statistics-container > .stat-box:nth-child(4),
.statistics-container > .stat-box:nth-child(5) {
  justify-self: center;
  padding-left: 90%;
}

.stat-value {
  font-size: 2rem;
}

.stat-label {
  font-size: 1.4rem;
}
}

@media (max-width: 768px) {
.stat-box {
  max-width: 120px;
}

.stat-value {
  font-size: 1.8rem;
}

.stat-label {
  font-size: 1.2rem;
}

.cta-section p {
  font-size: 0.9rem;
}

.join-button {
  font-size: 0.9rem;
  padding: 8px 16px;
}
}
</style>  

<!-- Svelte Component -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="statistics-container" on:mousemove={handlePointerMove}>
<div class="stat-box">
  <div class="stat-icon">
    <img src="calendar_icon.png" alt="Calendar Icon" />
  </div>
  <div class="stat-value">2+</div>
  <div class="stat-label">Years</div>
</div>
<div class="stat-box">
  <div class="stat-icon">
    <img src="three_people_icon.png" alt="Volunteers Icon" />
  </div>
  <div class="stat-value">50+</div>
  <div class="stat-label">Volunteers</div>
</div>
<div class="stat-box">
  <div class="stat-icon">
    <img src="grad_hat_icon.png" alt="Students Icon" />
  </div>
  <div class="stat-value">100+</div>
  <div class="stat-label">Students</div>
</div>
<div class="stat-box">
  <div class="stat-icon">
    <img src="univ_icon.png" alt="Courses Icon" />
  </div>
  <div class="stat-value">15+</div>
  <div class="stat-label">Courses</div>
</div>
<div class="stat-box">
  <div class="stat-icon">
    <img src="donar_icon_2.png" alt="Donors Icon" />
  </div>
  <div class="stat-value">30+</div>
  <div class="stat-label">Donors</div>
</div>
</div>

<div class="cta-section">
  <p>
    Join <span class="highlight">Hope3</span> and help provide education to all the economically
    challenged families.<br/> Don't be held back by all the barriers to your success.<br/>
    <span class="highlight">Join Hope3</span> today and attain the resources to chase your dreams!
  </p>
  <p>
    None left behind. Everyone has an opportunity to rise and achieve. <br/> 
    We lift others by providing them financial and educational support along their journey for a bright future.
  </p>
  <!-- <button class="join-button">Join Us</button> -->
  <a href="/hope3website/getinvoce" class="join-button">Join Us</a>
</div>
