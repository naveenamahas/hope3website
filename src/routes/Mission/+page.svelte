<script>
  import Contact from "../../components/Contact.svelte";
  import Nav from "../../components/Nav.svelte";
</script>

<style>
  /* General styling for the page */
  body {
      font-family: Montserrat, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  /* Title Styling */
  .tit {
      background-color: rgb(236, 231, 231);
      font-size: 50px;
      font-weight: 500;
      color: rgb(104, 104, 102);
      padding-left: 5%;
      margin: 0;
      text-align: left; /* Align left on larger screens */
  }

  /* Container layout for general content */
  .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
  }

  /* Section layout for text and images */
  .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      gap: 20px;
      flex-wrap: wrap; /* Ensure wrapping on smaller screens */
  }

  .section:nth-child(odd) {
      flex-direction: row-reverse;
  }

  /* Text Content Styling */
  .text-content {
      flex: 1;
      padding: 20px;
      font-family: "Comic Sans MS", cursive;
      font-size: medium;
      color: rgb(64, 64, 64);
  }

  /* Heading styles */
  .text-content h2 {
      font-size: 2rem;
      color: rgb(64, 64, 64);
      margin-right: 10%;
  }

  /* Paragraph text style */
  .text-content p {
      font-size: 1.2rem;
      color: rgb(105, 104, 104);
      line-height: 1.5;
  }

  /* Styling for images */
  .image1 img {
      width: 75%;
      height: auto;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #58c063;
      border-radius: 0px;
      margin-left: 20%;
  }

  .image img:hover {
      transform: scale(1.1);
  }

  /* Banner Image Styles (for full width) */
  .img {
      width: 100%;
      height: auto; /* Allow the height to adjust based on the image's aspect ratio */
      object-fit: cover; /* Ensure image covers the area without stretching */
      display: block;
      margin: 0;
  }

  /* Responsive Media Queries */
  @media (max-width: 768px) {
      /* Title font size and alignment */
      .tit {
          font-size: 30px;
          text-align: center; /* Center-align title on mobile */
      }

      /* Container padding adjustment */
      .container {
          padding: 10px;
      }

      /* Section layout for stacking content */
      .section {
          flex-direction: column;
          gap: 10px;
      }

      .section:nth-child(odd) {
          flex-direction: column;
      }

      /* Text Content adjustments */
      .text-content {
          font-size: 1rem;
          text-align: center;
          padding: 10px;
      }

      .text-content h2 {
          font-size: 1.5rem;
          margin-right: 0;
      }

      .image1 img {
          width: 100%;
          margin-left: 0;
          border-radius: 10px;
          max-height: 600px;
      }

      /* Image responsiveness */
      .img {
          max-height: 500px; /* Control the max height of the banner image on smaller screens */
      }

      /* List adjustments */
      .text-content ol, .text-content ul {
          padding-left: 20px;
      }

      .text-content li {
          font-size: 1rem;
      }
  }

  /* Additional Styles for Very Small Screens */
  @media (max-width: 480px) {
      .tit {
          font-size: 28px; /* Smaller title font size for very small screens */
      }

      .text-content {
          font-size: 0.9rem; /* Adjust font size for very small screens */
      }

      /* Adjust banner image height on very small screens */
      .img {
          max-height: 350px; /* Smaller height for mobile */
      }
  }
</style>

<Nav />

<!-- Top Banner -->
<div>
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img class="img" src="mission_banner.jpg" alt="Image of our team members" title="Our People" />
</div>

<!-- Title -->
<div>
  <h1 class="tit">Our Mission & Vision</h1>
</div>

<!-- Main Content Container -->
<div class="container">
  <div class="section">
      <div class="image1">
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img src="mission_sub_image_1.jpg" alt="HOPE 3 Mission Image" />
      </div>
      <div class="text-content">
          <h2>HOPE 3 Mission</h2>
          <p>Our mission is to:</p>
          <ol>
              <li>Identify and provide financial assistance for higher education for circumstantially challenged, earnest students.</li>
              <li>Form long-term partnerships with educators, subject matter experts, technology, and media industries.</li>
              <li>
                  Connect students with our educational and industry partners through:
                  <ul>
                      <li>An online mentored, collaborative, immersive learning platform.</li>
                      <li>Projects of relevance to industry and research.</li>
                      <li>Internship opportunities, part-time and full-time job opportunities with our industry partners.</li>
                      <li>Guidance and support for entrepreneurial ventures.</li>
                  </ul>
              </li>
          </ol>
      </div>
  </div>

  <div class="section">
      <div class="image1">
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img src="mission_sub_image 2.jpg" alt="HOPE 3 Vision Image" />
      </div>
      <div class="text-content">
          <h2>HOPE 3 Vision</h2>
          <p>
              Empowering circumstantially <br>challenged, 
              aspiring talent to realize their true <br> potential and become next-generation leaders.
          </p>
      </div>
  </div>
</div>

<!-- Bottom Banner -->
<div>
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src="mission_sub_banner.jpg" alt="HOPE 3 Vision Image" class="img" />
</div>

<Contact />
