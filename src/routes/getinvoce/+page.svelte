<script>
    // No script logic for now, just the layout

  import Contact from "../../components/Contact.svelte";
import Nav from "../../components/Nav.svelte";
function openDonationLink() {
    window.open('https://www.paypal.com/paypalme/hope3org', '_blank');
  }

  </script>
  
  <style>
    /* Add CSS styles here based on the existing design */
    .section-container {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      text-align: center;
     
    }
   
  
    /* General Form Card Styling */
.form-card {
  border: 1px solid #ddd; /* Default border */
  border-radius: 0px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

/* Student Form (Blue Outline) */

/* Volunteer Form (Yellow Outline) */

/* Donor Form (Red Outline) */


/* Shared Styles for Buttons */
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

.submit {
  background-color: #007bff; /* Blue */
}

.sign-in {
  background-color: #ffcc00; /* Yellow */
}

.donate {
  background-color: #e63946; /* Red */
}

    input {
      width: 90%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
   
    .button {
      display: block;
      width: 100%;
      padding: 10px;
      border: none;
      color: white;
      border-radius: 20px;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 20px;
    }
  
    .submit {
      background-color: #ffcc00;
    }
  
    .sign-in {
      background-color: #007bff;
    }
  
    .donate {
      background-color: #e63946;
    }
  
    .recaptcha {
      margin: 15px 0;
    }
    .tit{
        background-color: rgb(236, 231, 231);
        font-size: 50px;
        font-weight: 500;
        color: rgb(104, 104, 102);
        padding-left: 5%;
        font-family: Montserrat, sans-serif;
        margin: 0;
    }
        
    
    .img {
        height: auto;
        width: 100%;
        display: block;
        margin: 0 auto;
    }

    
  </style>
  <Nav/>
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="img" src="getinvolved.jpg" alt="Image of our team members" title="Our People">
</div>
<div>
    <h1 class="tit">Get Involved</h1>
</div>
  
    <!-- Student Section -->
    <div class="section-container">
        <!-- Student Section -->
        <div class="form-card student">
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
      
        <!-- Volunteer Section -->
        <div class="form-card volunteer">
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
      
        <!-- Donor Section -->
        <div class="form-card donor">
          <h3>I Want to Donate</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Contact No" />
          <div class="recaptcha">
            <input type="checkbox" /> I'm not a robot
          </div>
          <button 
  class="button donate" 
  on:click={openDonationLink} 
  aria-label="Donate to Hope3 via PayPal">
  Donate Now
</button>
        </div>
      </div>
      
 
  <Contact/>