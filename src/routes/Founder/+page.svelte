<script>
  import Contact from "../../components/Contact.svelte";
import Nav from "../../components/Nav.svelte";

    
  </script>
  <Nav/>
  <!-- Founder Page -->

  <div class="founder-page">
 
    <img
      src="founder_banner.jpg"  
      alt="Founder" class="banner"
    />
    <h3 class="tit">founder</h3>
 
    <div class="founder-container">
      <div class="founder-image">
        <img
          src="founder_Image_palani.jpg"  
          alt="Founder"
        />
      </div>
  
      <div class="founder-info">
        <h1>Palaniappan Vairavan</h1>
        <h2>Founder</h2>
        <p>
            Mr. Palaniappan Vairavan is an educator, entrepreneur, and a visionary who 
            believes that education can alleviate most of the key challenges faced by society today. 
            He is the president of HOPE3 Foundation and the Dean of the Computer Science 
            department of HOPE3 Varsity. Palani has been volunteering with many educational 
            nonprofit organizations since 2016 to level the playing field for the circumstantially
            challenged students. He provided the impetus for conception of HOPE3 by identifying the 
            need for providing educational opportunities of the highest quality for the talented 
            students who lack the resources or exposure. He teaches data structures, algorithms, 
            web and mobile app development in HOPE3 Varsity.

            
        </p>
        <p>
            Professionally he works at Amazon Corporation, Washington as a Senior Software Engineer. 
            He holds a MS in Computer Science from East Carolina University. 
            On the personal front he loves playing tennis and outdoor activities with his family.
            He can be reached at <a href="mailto:palani@hope3.org">palani@hope3.org</a>.
        </p>
  
        <!-- Video Section -->
        <div class="founder-video">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/embedded-video-link" 
            title="What is Hope3 Foundation?"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="founder-page">
    
  
    <div class="founder-container">
      <div class="founder-image">
        <img
          src="founder_Image_1.png"  
          alt="Founder"
        />
      </div>
  
      <div class="founder-info">
        <h1>Neelakandan Venkataraman</h1>
        <h2>co-founder</h2>
        <p>
            Neelakandan Venkataraman is passionate about learning and teaching. 
            Neelakandan has been part of the Hope 3 Foundation as a member in 
            governing body since the inception of the non profit organization. 
            Neelakandan is motivated to create a change through personal and social 
            awareness â€“ especially within the upcoming generation. 
            In addition to being an advisor to the Hope 3 foundation 
            long term strategy and regular activities, Neelakandan enjoys 
            connecting with students through Soft Skills club, as part of Hope3 Varsity.
        </p>
        <p>
            Professionally, Neelakandan is a Director of Hardware 
            Engineering at Microsoft Devices, designing products 
            like Surface computers, Xbox and Hololens. 
            Prior to joining Microsoft, Neelakandan has been 
            designing automotive and Marine engines in India, 
            Germany and US. Neelakandan has a Masters in Business 
            Administration degree from University of Wisconsin and 
            Bachelors of Mechanical Engineering from Kumaraguru College of Technology, 
            Coimbatore, India. Neelakandan can be reached at  <a href="mailto:palani@hope3.org">palani@hope3.org</a>.
        </p>
  
        <!-- Video Section -->
        <div class="founder-video">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/embedded-video-link" 
            title="What is Hope3 Foundation?"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="founder-page">
    <div class="founder-container">
      <div class="founder-image">
        <img
          src="founder_Image_meenakshi.jpg"  
          alt="Founder"
        />
      </div>
        <div class="founder-info">
        <h1>Dr. Meenakshi Sundaram</h1>
        <h2>Co-founder</h2>
        <p>
            Dr. Meenakshi Sundaram is an educator, scientist, and a yoga, 
            meditation enthusiast. He is one of the founding members of HOPE3 
            Foundation and is the president of HOPE3 Varsity the educational wing 
            of HOPE3 Foundation. He believes in education that is actionable and 
            education that builds a seeking (research) mindset.Meenakshi actively 
            engages in a wide variety of HOPE3 Varsity classes as a mentor and many 
            a time as a student. He is also a certified breathwork and meditation 
            instructor with the Art of Living Foundation.
        </p>
        <p>
            Meenakshi works in Intel Corporation, Oregon as an process engineer 
            helping in the manufacturing process of semiconductor chips.
            He holds a MS, PhD from Cornell University, New York in Mechanical Engineering, 
            and a M Tech in Computational Science from Indian Institute of Science, 
            Bangalore. He can be reached at  <a href="https://www.hope3.org/meenakshi.sundaram@hope3.org">meenakshi.sundaram@hope3.org</a>.
        </p>
  
        <!-- Video Section -->
        <div class="founder-video">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/embedded-video-link" 
            title="What is Hope3 Foundation?"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* General Reset */
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      color: #333;
      line-height: 1.6;
      background-color: #f8f9fa;
    }
    
   .banner{
    margin-top: 0%;
   }
    /* Founder Page Container */
    .founder-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }
  
    /* Founder Container */
    .founder-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      margin-bottom: 2rem;
      /* background: #fff; */
      /* border-radius: 10px; */
      /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
      padding: 2rem;
    }
  
    /* Founder Image */
    .founder-image img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 2px solid #e63946; /* Red border around the circle */
      object-fit: cover;

    }
  
    /* Founder Info */
    .founder-info {
      margin-left: 2rem;
      max-width: 700px;
    }
  
    .founder-info h1 {
      font-size: 2.5rem;
      color: #333;
    }
  
    .founder-info h2 {
      font-size: 1.5rem;
      color: #6c757d; /* Subtle gray for the subtitle */
    }
  
    .founder-info p {
      margin-top: 1rem;
      font-size: 1rem;
      color: #555;
    }
  
    .founder-info a {
      color: #007bff;
      text-decoration: none;
    }
  
    .founder-info a:hover {
      text-decoration: underline;
    }
  
    /* Founder Video */
    .founder-video iframe {
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(26, 35, 196, 0.1);
      margin-left: 0%;
      
    }
  
    @media (max-width: 768px) {
    .banner {
      width: 100%;
      margin-top: 1%;
    }

    .tit {
      font-size: 35px;
      width: 100%;
      
    }

    .founder-container {
      flex-direction: column;
      text-align: center;
      padding: 1rem;
    }

    .founder-info {
      margin: 1rem 0;
    }

    .founder-info h1 {
      font-size: 2rem;
    }

    .founder-info h2 {
      font-size: 1.25rem;
    }

    .founder-info p {
      font-size: 0.9rem;
    }

    .founder-image img {
      width: 180px;
      height: 180px;
    }

    .founder-video iframe {
      width: 100%;
      max-width: 360px;
      height: 200px;
    }
  }

  /* Tablet View */
  @media (max-width: 1024px) {
    .banner {
      width: 100%;
    }

    .tit {
      font-size: 40px;
      text-align: center;
      width: 100%;
    }

    .founder-container {
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;
    }

    .founder-info {
      text-align: center;
      margin: 1rem 0;
    }

    .founder-info h1 {
      font-size: 2.2rem;
    }

    .founder-info h2 {
      font-size: 1.3rem;
    }

    .founder-info p {
      font-size: 0.95rem;
    }

    .founder-image img {
      width: 200px;
      height: 200px;
    }

    .founder-video iframe {
      width: 90%;
      height: 200px;
    }
  }

  /* Desktop View */
  @media (min-width: 1025px) {
    .tit {
      font-size: 50px;
      padding-left: 5%;
      text-align: left;
      width: 110%;
    }

    .founder-container {
      flex-direction: row;
      justify-content: flex-start;
    }

    .founder-info {
      text-align: left;
      margin-left: 2rem;
    }

    .founder-video iframe {
      width: 360px;
      height: 200px;
    }
  }
  
    .text-capitalize {
      background-color: rgb(155, 228, 228);
      width: 100%;
      height: 50px;
      margin-top: auto;
      font-family: 'Courier New', Courier, monospace;
      font-size: 40px;
      color: #858789;
    }
    .tit{
        background-color: rgb(187, 239, 246);
        font-size: 50px;
        font-weight: 500;
        color: rgb(104, 104, 102);
        padding-left: 5%;
        font-family: Montserrat, sans-serif;
        margin: 0;
        width: 110%;
    }
        
    
    .img {
        height: auto;
        width: 100%;
        display: block;
        margin: 0%;
        margin-top: 0%;
    }
  </style>
  <Contact/>