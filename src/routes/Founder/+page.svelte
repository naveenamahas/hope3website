<script>
  import Contact from "../../components/Contact.svelte";
import Nav from "../../components/Nav.svelte";

    
  </script>
  <!-- svelte-ignore css_unused_selector -->
  <!-- svelte-ignore css_unused_selector -->
  <Nav/>
  <!-- Founder Page -->

  <div class="founder-page">
 
    <img
      src="founder_banner.jpg"  
      alt="Founder" class="banner"
    />
    <h3 class="tit">Founder</h3>
 
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
            He can be reached at 
            
            <a class="mailcolor" href="mailto:palani@hope3.org">neel@hope3.org
              <!-- svelte-ignore a11y_missing_attribute -->
              <img class="mail" src="icons8_mail_32.png">
            </a>
        </p>
  
        <!-- Video Section -->
        <div class="founder-video">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/yBdzHOTwJrQ" 
            title="What is Hope3 Foundation?"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  <div class="founder-page" style="background-color: #e7e5e5f3;">
    
  
    <div class="founder-container" >

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
            Coimbatore, India. Neelakandan can be reached at 
            <br> 
            <a class="mailcolor" href="mailto:neel@hope3.org">neel@hope3.org
              <!-- svelte-ignore a11y_missing_attribute -->
              <img class="mail" src="icons8_mail_32.png">
            </a>
        </p>
  
        <!-- Video Section -->
        <div class="founder-video">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/7ZDF4-hB5Ec" 
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
            Bangalore. He can be reached at  
           
            <a class="mailcolor" href="https://www.hope3.org/meenakshi.sundaram@hope3.org">meenakshi.sundaram@hope3.org
              <!-- svelte-ignore a11y_missing_attribute -->
              <img class="mail" src="icons8_mail_32.png">
            </a>
        </p>
  
        <!-- Video Section -->
        <div class="founder-video">
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/z_n0PqhIuKA" 
            title="What is Hope3 Foundation?"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    
    style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
    background-color: #f8f9fa;
  }

  .founder-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;  
  }

  /* Banner */
  .banner {
    width: 120%;
    height: 280px;
    object-fit: cover;
  }
  .mail {
  vertical-align: bottom;
  width: 2rem;
  position: relative; /* Add relative positioning */
  top: 5px; /* This will move the image 2px from the bottom */
}

  /* Title */
  .tit {
    background-color: rgb(187, 239, 246);
    font-size: 50px;
    font-weight: 500;
    color: rgb(104, 104, 102);
    padding-left: 5%;
    font-family: Montserrat, sans-serif;
    margin: 0;
    width: 95%;
    text-align: left;
  }
  
  /* Founder Container */
  .founder-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin-bottom: 2rem;
    padding: 2rem;
  }

  /* Founder Image */
  .founder-image img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 2px solid #e63946;
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
    color: #6c757d;
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
    border-radius: 1px;
    box-shadow: 4px 4px 6px rgba(30, 39, 205, 0.1);
    margin-left: 0;
  }

  /* Mobile View */


  @media (max-width:320){
    .banner{
      max-height: 50px;
    }
  }
  @media (max-width: 768px) {
    .banner {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }

    .tit {
      font-size: 35px;
      width: 95%;
      text-align: center;
      
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
      width: 100px;
      height: 100px;
    }

    .founder-video iframe {
      width: 100%;
      max-width: 300px;
      height: 150px;
      margin-left: 2px;
    }
  }

  /* Tablet View */
  @media (max-width: 380px) {
    .banner {
     
      height: 100px;
      
    }
    .tit {
      font-size: 35px;
      width: 95%;
      text-align: center;
    }

    .founder-container {
      flex-direction: column;
      text-align: center;
    }

    .founder-info {
      text-align:left;
      margin: 1rem 0;
      color: #858688;
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
      width: 150px;
      height: 150px;
    }

    .founder-video iframe {
      display: table-cell;
    vertical-align: middle;
    padding: 0 15px;
    
    }
  }

  /* Desktop View */
  @media (min-width: 1025px) {
    .banner {
      width: 100%;
      height: auto;
      max-height: 500px;
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
</style>
  <Contact/>