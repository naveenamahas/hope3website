<script>
  import Contact from "../../components/Contact.svelte";
  import Nav from "../../components/Nav.svelte";

  function openDonationLink() {
    window.open('https://www.paypal.com/paypalme/hope3org', '_blank');
  }

  /**
   * @type {string | null}
   */
  let openSection = null; // Track opened section

  /**
   * @param {string | null} section
   */
  function toggleSection(section) {
    openSection = openSection === section ? null : section;
  }
</script>

<style>
  *{
    font-family: Montserrat, sans-serif !important;
  }
  /* Desktop View */
  .section-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    text-align: center;
    flex-wrap: wrap;
  }

  .form-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
    margin: 10px;
    background-color: transparent; /* No background color */
    color: black; /* Default text color */
  }
  .form-card.donar {
    display: flex;
    flex-direction: column;
  }

  .form-card.donar .button.donate {
    margin-top: auto;
  }

  /* Button Colors */
  .button {
    display: block;
    width: 100%;
    padding: 10px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }

  .submit { background-color: #ffcc00; }
  .sign-in { background-color: #007bff; }
  .donate { background-color: #e63946; }

  input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .recaptcha {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .recaptcha input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  .tit {
    background-color: rgb(236, 231, 231);
    font-size: 50px;
    font-weight: 500;
    color: rgb(104, 104, 102);
    padding-left: 5%;
    font-family: Montserrat, sans-serif;
    margin: 0;
  }
  .subtitle{
    text-align: center;
    font-family: Montserrat, sans-serif !important;
    color: #828282;
  }
  .img {
    height: auto;
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  /* Mobile Accordion View */
  .accordion {
    display: none;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }

  .accordion-item {
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    border-radius: 5px;
    overflow: hidden;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    color: white;
  }

  .student { background-color: #ffcc00; }
  .volunteer { background-color: #007bff; }
  .donor { background-color: #e63946; }

  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .accordion-item.open .accordion-content {
    max-height: 500px;
    padding: 20px;
    border: 1px solid #ddd;
  }

  /* Hide Desktop and Show Accordion on Mobile */
  @media (max-width: 768px) {
    .section-container {
      display: none;
    }

    .accordion {
      display: block;
    }
    .subtitle{
      font-size: 1.2rem;
    }
  }
</style>

<Nav />
<div>
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img class="img" src="getinvolved.jpg" alt="Image of our team members" title="Our People">
</div>
<div>
  <h1 class="tit">Get Involved</h1>
</div>
<h1 class="subtitle"> Let's get started.Choose an option.</h1>
<!-- Desktop View -->
<div class="section-container">
  <div class="form-card">
    <h3>I Want to be a Student</h3>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="District" />
    <input type="text" placeholder="What is your Passion?" />
    <input type="email" placeholder="Email" />
    <input type="tel" placeholder="Contact No" />
    <div class="recaptcha">
      <input type="checkbox" /> I'm not a robot
    </div>
    <button class="button submit">Submit</button>
  </div>

  <div class="form-card">
    <h3>I Want to Volunteer</h3>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="District" />
    <input type="text" placeholder="Where do you volunteer?" />
    <input type="email" placeholder="Email" />
    <input type="tel" placeholder="Contact No" />
    <div class="recaptcha">
      <input type="checkbox" /> I'm not a robot
    </div>
    <button class="button sign-in">Sign Me In</button>
  </div>

  <div class="form-card donar">
    <h3>I Want to Donate</h3>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="tel" placeholder="Contact No" />
    <div class="recaptcha">
      <input type="checkbox" /> I'm not a robot
    </div>
    <button class="button donate" on:click={openDonationLink}>Donate Now</button>
  </div>
</div>

<!-- Mobile View Accordion -->
<div class="accordion">
  <div class="accordion-item {openSection === 'student' ? 'open' : ''}">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="accordion-header student" on:click={() => toggleSection('student')}>
      I Want to be a Student     
    </div>
    <div class="accordion-content">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="District" />
      <input type="text" placeholder="What is your Passion?" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Contact No" />
      <button class="button submit">Submit</button>
    </div>
  </div>

  <div class="accordion-item {openSection === 'volunteer' ? 'open' : ''}">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="accordion-header volunteer" on:click={() => toggleSection('volunteer')}>
      I Want to Volunteer
    </div>
    <div class="accordion-content">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="District" />
      <input type="text" placeholder="Where do you volunteer?" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Contact No" />
      <button class="button sign-in">Sign Me In</button>
    </div>
  </div>

  <div class="accordion-item {openSection === 'donor' ? 'open' : ''}">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="accordion-header donor" on:click={() => toggleSection('donor')}>
      I Want to Donate
    </div>
    <div class="accordion-content">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Contact No" />
      <button class="button donate" on:click={openDonationLink}>Donate Now</button>
    </div>
  </div>
</div>

<p style="text-align: center; padding: 20px;">
  You must be 16 years or older to use hope3.org. By clicking the above buttons, you agree to our Terms of Use and Privacy Policy.
</p>

<Contact />
