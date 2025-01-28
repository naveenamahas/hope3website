<script>
    import Contact from "../../components/Contact.svelte";
    import Nav from "../../components/Nav.svelte";
</script>
  
  <style>
    .tit {
      background-color: rgb(236, 231, 231);
      font-size: 50px;
      font-weight: 500;
      color: rgb(104, 104, 102);
      padding-left: 5%;
      font-family: Montserrat, sans-serif;
      margin: 0;
    }
  
    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  
    .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      gap: 20px;
    }
  
    .section:nth-child(odd) {
      flex-direction: row-reverse;
    }
  
    .text-content {
      flex: 1;
      padding: 20px;
      font-family: "Comic Sans MS", cursive;
      font-size: medium;
      color: rgb(64, 64, 64);
    }
  
    .text-content h2 {
      font-size: 2rem;
      color: rgb(64, 64, 64);
      margin-right: 10%;
    }
  
    .text-content p {
      font-size: 1.2rem;
      color: rgb(105, 104, 104);
      line-height: 1.5;
    }
  
    /* .image {
      flex: 1;
      border: 3px solid #58c063;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    } */
  
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
    .image img:hover{
      transform: scale(1.1);
    }
  </style>
  
  <Nav />
  
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="img" src="mission_banner.jpg" alt="Image of our team members" title="Our People" />
  </div>
  <div>
    <h1 class="tit">Our Mission & Vision</h1>
  </div>
  
  <div class="container">
    <div class="section">
      <div class="image1">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="mission_sub_image_1.jpg" alt="HOPE 3 Mission Image" /> 
      </div>
      <div class="text-content">
        
        <h2>HOPE 3 Mission</h2>
        <p>
          Our mission is to:
        </p>
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
  <Contact/>