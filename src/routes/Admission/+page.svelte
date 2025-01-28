<script>
    import Contact from "../../components/Contact.svelte";
    import Nav from "../../components/Nav.svelte";
  </script>
  
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      color: #333;
    }
  
    h1 {
      text-align: center;
      color: #555;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .timeline {
  position: relative;
  margin: 2rem auto;
  width: 80%;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: #edeae1;
  transform: translateX(-50%);
  z-index: 1;
}

.step {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
}

.step:nth-child(odd) {
  flex-direction: row-reverse;
}

.step-content {
  width: 45%;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
}
.step-content1{
    width: 45%;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 55%;

}
.step-content1 h3{
    text-align: center;
   
}
.step-content h3{
   text-align: center;
    margin-left: 10px;
}
.step-content p{
    margin: 10px;
}
.step img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.step-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  z-index: 3;
}

    .form {
      margin-top: 2rem;
      padding: 1rem;
      text-align: center;
      background: #f5f5f4;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 100%;
      max-width: 600px;
      margin: 2rem auto;
      margin-bottom: 0%;
    }
  
    .form input,
    .form select {
      padding: 0.5rem;
      margin: 0.5rem;
      width: calc(100% - 1rem);
      max-width: 80%;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .form button {
  background-color: #e6c318;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem auto; 
  display: block;
}

    .form button:hover {
      background-color: #d4ae15;
    }
    .process-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
}

.process-step {
  text-align: center;
  width: 30%;
  margin-top: 5%;
}

.circle-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.circle-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.section{
    font-size: 20.2px;
    color: #828181;
    align-items: center;
    text-align: center;
}
.step-content2 h3{
margin-left: 50%;
font-size: 2.5rem;
color: #d4ab15;
}
.step-content2 p{
    
    text-align: center;
}
.container{
    background-color: #f3ca26;
    margin-bottom: 0%;
    
}
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .timeline::before {
    display: none; /* Hides the center line */
  }

  .step {
    flex-direction: column;
    align-items: center;
  }

  .step img {
  position: static;
  margin-bottom: 1rem;
  transform: none;
}


  .step-content,
  .step-content1 {
    width: 90%;
    margin: 1rem auto;
    text-align: center;
  }

  .step-content2 h3 {
    font-size: 2rem;
    margin-left: 0;
  }

  .process-container {
    flex-direction: column;
    margin-top: 2rem;
  }

  .process-step {
    width: 90%;
    margin-bottom: 2rem;
  }

  .circle-image {
    width: 100px;
    height: 100px;
  }

  .form {
    padding: 1rem;
    width: 90%;
  }

  .form input,
  .form select {
    width: calc(100% - 1rem);
    max-width: 100%;
  }

  .form button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  .step img {
    width: 60px;
    height: 60px;
  }

  .circle-image {
    width: 80px;
    height: 80px;
    margin-top: 0%;
  }

  .process-step h3 {
    font-size: 1.2rem;
  }

  .process-step p {
    font-size: 0.9rem;
  }

  .form input,
  .form select {
    font-size: 0.9rem;
  }

  .form button {
    font-size: 1rem;
  }
}



  </style>
  
  <Nav />
  
<div>
    <h1>So, how can YOU enroll?</h1>
     <p class="section">Our Process, It's pretty simple, really!,
        <br>
        If you are a top performer in school and every passionate about acheiving high-we 
        are here to help you. <br>
        Our admission process will make sure that it is a WIN-WIN for both students and the organization</p>

  <div class="timeline">
    
    <!-- Step 1 -->
    <div class="step">
      
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="process_icon_desk_1.png" alt="Step 1 Image"  class="step-marker"/>
      <div class="step-content1">
        <h3>Initial Application</h3>
        <p>Application link shared soon after higher secondary exam results. Provide your 10th and 12th marks for initial screening.</p>
      </div>
    </div>
  
    <!-- Step 2 -->
    <div class="step">
      
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="process_icon_desk_2.png" alt="Step 2 Image"  class="step-marker"/>
      <div class="step-content">
        <h3>Eligibility Interview</h3>
        <p>Our team will conduct interviews to assess eligibility and provide guidance.</p>
      </div>
    </div>
  
    <!-- Step 3 -->
    <div class="step">
     
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="process_icon_desk_3.png" alt="Step 3 Image"  class="step-marker" />
      <div class="step-content1">
        <h3>Varsity Onboarding</h3>
        <p>Conduct aptitude tests to assess your skills for the varsity program.</p>
      </div>
    </div>
  
    <!-- Step 4 -->
    <div class="step">
      
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="process_icon_desk_4.png" alt="Step 4 Image"  class="step-marker"/>
      <div class="step-content">
        <h3>Professional Interview</h3>
        <p>Our educational professionals will interview students for admission and provide guidance on college selection.</p>
      </div>
    </div>
  
    <!-- Step 5 -->
    <div class="step">
     
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="process_icon_desk_5.png" alt="Step 5 Image"  class="step-marker"/>
      <div class="step-content1">
        <h3>Final Varsity Onboarding</h3>
        <p>Varsity Team conducts several aptitude tests to assess your aptitude for the varsity program.</p>
      </div>
    </div>

    <div class="step">
     
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="process_icon_desk _last.png" alt="Step 6 Image"  class="step-marker"/>
        <div class="step-content2">
           <h3 >Congratulation</h3>
         
        </div> 
      </div>
  </div>
</div>
  
  <div class="container">
    <div class="process-container">
        <div class="process-step">
          <div class="circle-image">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="process_1_icon.png" alt="Step 1 Image" />
          </div>
          <h3>Scholarship</h3>
          <p>We will conduct background checks and the correctness of the candidate's eligibility.</p>
        </div>
        <div class="process-step">
          <div class="circle-image">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="process_2_icon.png" alt="Step 2 Image" />
          </div>
          <h3>Full Support</h3>
          <p>Get tuition from our professional team, including support in labs, dubs, and more.</p>
        </div>
        <div class="process-step">
          <div class="circle-image">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="process_3_icon.png" alt="Step 3 Image" />
          </div>
          <h3>Close Escort</h3>
          <p>Even after completing your degree, we accompany you until you choose your workplace.</p>
        </div>
      </div>
    <div class="form">
        <h2>I Want to Be a Student</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Area" />
        <select>
          <option value="">What's Your College Major?</option>
          <option value="science">Science</option>
          <option value="commerce">Commerce</option>
          <option value="arts">Arts</option>
        </select>
        <button>Submit</button>
      
    </div>
</div>
     

  <Contact />
  