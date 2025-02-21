<script>
    import Contact from "../../components/Contact.svelte";
    import Nav from "../../components/Nav.svelte";
  </script>
  
  <Nav />
  
  <!-- Top Banner -->
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img
      class="img"
      src="mission_banner.jpg"
      alt="Image of our team members"
      title="Our People"
    />
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
        <br />
        <p>Our mission is to:</p>
        <ol>
          <li>
            Identify and provide financial assistance for higher education for
            circumstantially challenged, earnest students.
          </li>
          <li>
            Form long-term partnerships with educators, subject matter experts,
            technology, and media industries.
          </li>
          <li>
            Connect students with our educational and industry partners through:
            <ul>
              <li>
                a.An online mentored, collaborative, immersive learning platform.
              </li>
              <li>b.Projects of relevance to industry and research.</li>
              <li>
                c.Internship opportunities, part-time and full-time job
                opportunities with our industry partners.
              </li>
              <li>d.Guidance and support for entrepreneurial ventures.</li>
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
        <br />
        <p>
          Empowering circumstantially <br />challenged, aspiring talent to realize
          their true <br /> potential and become next-generation leaders.
        </p>
      </div>
    </div>
  </div>
  
  <!-- Bottom Banner -->
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="mission_sub_banner.jpg" alt="HOPE 3 Vision Image" class="imgbanner" />
  </div>
  
  <Contact />
  
  <style>
    * {
      font-family: "Poppins", sans-serif !important;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    .tit {
      background-color: rgb(236, 231, 231);
      font-size: 50px;
      font-weight: 500;
      color: rgb(104, 104, 102);
      padding-left: 5%;
      margin: 0;
      text-align: left;
    }
  
    .container {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 40px;
    }
  
    .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      gap: 20px;
      flex-wrap: wrap;
    }
  
    .section:nth-child(odd) {
      flex-direction: row-reverse;
    }
  
    .text-content {
      flex: 1;
      gap: 10px;
      padding: 20px;
      font-family: "Comic Sans MS", cursive;
      font-size: medium;
      color: rgb(64, 64, 64);
      margin-bottom: 10px;
      line-height: 30px;
    }
  
    .text-content h2 {
      font-size: 2rem;
      color: rgb(64, 64, 64);
      margin-right: 10%;
      line-height: 30px;
    }
  
    .text-content p {
      font-size: 1.2rem;
      color: rgb(105, 104, 104);
      line-height: 1.5;
    }
  
    .text-content ul {
      margin-left: 40px;
    }
  
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
  
    .image1 img:hover {
      transform: scale(1.1);
    }
  
    .img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
      margin: 0;
    }
    .imgbanner {
        height:100%;
        width: 100%;
      }
    @media (max-width: 768px) {
      .tit {
        font-size: 30px;
        text-align: center;
      }
  
      .container {
        padding: 10px;
      }
  
      .section {
        flex-direction: column;
        gap: 10px;
      }
  
      .section:nth-child(odd) {
        flex-direction: column;
      }
  
      .text-content {
        font-size: 1rem;
        text-align: center;
        padding: 10px;
        line-height: 1.8;
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
  
      .img {
        max-height: 500px;
      }
  
      .text-content ul {
        margin-left: 20px;
        line-height: 30px;
      }
  
      .text-content li {
        font-size: 1rem;
      }
      .imgbanner {
        height: 150px;
        width: 100%;
      }
    }
  
    
    @media (max-width: 480px) {
      .tit {
        font-size: 28px; 
      }
  
      .text-content {
        font-size: 0.9rem;
      }
      .imgbanner {
        height: 150px;
        width: 100%;
      }
    }
  </style>
  