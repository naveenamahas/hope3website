<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    subject: "",
    message: "",
  };

  // @ts-ignore
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data:", formData);
  }
</script>

<div class="container">
  <div class="left-section">
    <img src="logo.png" alt="Hope Foundation Logo" />
    <div>
      <!-- <p><strong>HOPE3 FOUNDATION</strong></p>
      <p>2135, 204th PL NE, Sammamish, <br>WA - 98074</p>
      <p>contact@hope3.org <br>425-200-4370</p> -->
      <address class="mt-4 footeraddr">
        <span class="title">Hope3 Foundation</span>
        <br>2135, 204th PL NE, Sammamish,<br>WA - 98074
        <p class="mt-1">contact@hope3.org<br>425-200-4370</p>
      </address>
      <span class="approval">US IRS 501(C)(3) approved organization<br>(Tax ID:83-4354181)</span>
      
    </div>
    
    <div class="footer-links">
      <div>
        <a href="/">Home</a>
        <!-- <a href="/hop3website/Dropdown">Who We Are</a> -->
        <a href="/hope3website/Ourpeople">Our People</a>
        <a href="/hope3website/Success">Success Stories</a>
        <a href="/hope3website/getinvoce">Get Involved</a>
        <a href="/hope3website/Event">Event</a>
      </div>
      <div class="link">
        <a href="/hope3website/Founder">Founders</a>
        <a href="/hope3website/Mission">Mission/Vision</a>
        <a href="/hope3website/Finance">Financials</a>
        <a href="/hope3website/Admission">Admissions</a>
      </div>
    </div>
    <div class="social-icons">
      
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a href="https://www.facebook.com/hope3org/"><i class="fab fa-facebook"></i></a>
      <!-- svelte-ignore a11y_consider_explicit_label -->
     <a href="https://www.linkedin.com/company/hope3org/"><i class="fab fa-linkedin"></i></a>
     <!-- svelte-ignore a11y_consider_explicit_label -->
     <a href="https://www.youtube.com/channel/UCbtzvET5Ev2spcIDWraFguA"><i class="fab fa-youtube"></i></a> 
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a href="https://www.instagram.com/hope3org/"><i class="fab fa-instagram"></i></a>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a href="https://twitter.com/hope3org"><i class="fab fa-twitter"></i></a>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a href="https://www.pinterest.com/hope3org/"><i class="fab fa-pinterest"></i></a>
    </div>
  </div>

  <div class="right-section">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <input
          type="text"
          placeholder="First Name*"
          bind:value={formData.firstName}
          required
        />
        <input
          type="text"
          placeholder="Last Name*"
          bind:value={formData.lastName}
          required
        />
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email*" bind:value={formData.email} required />
        <input type="tel" placeholder="Phone*" bind:value={formData.phone}  required/>
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="WhatsApp"
          bind:value={formData.whatsapp}
          required
        />
        <input
          type="text"
          placeholder="Address*"
          bind:value={formData.address}
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Subject*"
          bind:value={formData.subject}
          required
        />
      </div>
      <div class="form-group">
        <textarea placeholder="Message" bind:value={formData.message}
        required
        ></textarea>
      </div>
      <div class="recaptcha">
        <input type="checkbox" id="recaptcha" />
        <label for="recaptcha">I'm not a robot</label>
      </div>
      <button type="submit">CONTACT US</button>
    </form>
  </div>
</div>

<style>
  
  .container {
    display: flex;
    justify-content: space-between;
    padding: 20px 10%;
    background-color: #e7e5e5f3;
  }
  .approval {
    font-size: small;
    font-weight: bolder;
    font-family: Montserrat, sans-serif !important;
}

.title {
    margin-top: 1.5rem !important;
    font-weight: bold;
    font-family: Montserrat, sans-serif !important;
    
}
address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
    
}
  .left-section {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .left-section img {
    width: 150px;
    margin-bottom: 20px;
  }
  
  .footer-links {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }

  .footer-links div {
    display: flex;
    flex-direction: column;
  }

  .footer-links a {
    color: #000;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .footer-links a:hover {
    color: blue;
  }

  .social-icons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }
  /* .social-icons i {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900;
} */

  .social-icons a {
    font-size: 20px;
    color: #333;
    text-decoration: none;
  }
  .social-icons a:hover {
    color: #000;
  }
  .right-section {
    width: 50%;
  }

  form {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .form-group {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  textarea {
    height: 80px;
  }

  .recaptcha {
    margin-top: 10px;

    font-size: 12px;

    color: #333;
  }

  .recaptcha input {
    margin-right: 10px;
  }

  button {
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  width: 40%;  
  margin-top: 15px;
  display: block;  
  margin-left: auto;  
  margin-right: auto; 
  text-align: center;
}


  button:hover {
    background-color: #e0a800;
  }
  .link {
    display: inline-block;

    margin-right: 10px;

    color: #000;

    text-decoration: none;

    font-size: 14px;
  }

  
  /* Responsive Styling */

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;

      padding: 20px;
    }

    .left-section,
    .right-section {
      width: 100%;
      
    }

    .left-section img {
      width: 120px;

      margin-bottom: 15px;
    }

    .footer-links {
      text-align: center;
    }

    .footer-links a {
      font-size: 12px;

      margin-bottom: 8px;
    }

    .social-icons {
    display: flex;
    justify-content: center; 
    gap: 20px; 
    margin-top: 40px; 
    padding-bottom: 20px; 
  }

  .social-icons a {
    font-size: 24px; 
  }
    button {
      width: 50%;

      padding: 12px;

      font-size: 12px;
    }

    .form-group {
      flex-direction: column;
    }

    .form-group input,
    .form-group textarea {
      width: 90%;
    }

    

    /* Hide header links in responsive view */

    .footer-links {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .footer-links a {
      font-size: 10px;
    }

    .social-icons {
    gap: 15px; 
    margin-top: 30px;
  }

  .social-icons a {
    font-size: 22px; 
  }

    .left-section p {
      font-size: 15px;
      gap: 10px;
    }
  }

  /* Styling the ReCAPTCHA Section */

  .recaptcha {
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .recaptcha input {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid #ccc;
    transition: border-color 0.3s ease;
  }

  .recaptcha input:checked {
    background-color: #4caf50; /* Green color when checked */
    border-color: #4caf50;
  }

  .recaptcha label {
    font-size: 14px;
    color: #333;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
  }

  .recaptcha input:hover {
    border-color: #ff9800;
  }

  .recaptcha input:focus {
    outline: none;
    border-color: #2196f3; /* Blue outline when focused */
  }

  .recaptcha input:checked + label {
    font-weight: bold; /* Make label bold when checkbox is checked */
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons a {
    text-decoration: none;
    color: #333;
    font-size: 24px;
    transition: color 0.3s;
  }

  .social-icons a:hover {
    color: #007bff42; /* Change color on hover */
  }
</style>
