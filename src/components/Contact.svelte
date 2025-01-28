<script>
// @ts-nocheck

    let formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      whatsapp: '',
      address: '',
      subject: '',
      message: '',
    };
  
    
    
    function handleSubmit(event) 
    {
      event.preventDefault();
      console.log('Form Data:', formData);
    }
  </script>
  
  <!-- svelte-ignore css_unused_selector -->
  <style>
/* .body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  color: #333;
} */

.container {
  display: flex;
  justify-content: space-between;
  padding: 50px 10%;
  background-color: #e7e5e5f3;
}

.left-section {
  width: 40%;
}

.left-section img {
  width: 150px;
  margin-bottom: 20px;
}

.left-section p {
  line-height: 1.6;
  font-size: 14px;
}

.footer-links {
  display: block;
  margin-top: 20px;
}

.footer-links a {
  display: block;
  color: #000;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 5px;
}

.footer-links a:hover {
  color: blue;
}

.social-icons {
  margin-top: 20px;
}

.social-icons a {
  margin-right: 10px;
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
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 50%;
  margin-top: 15px;
  align-items: center;
}

button:hover {
  background-color: #e0a800;
}

.fond {
  font-family: sans-serif, 'Montserrat';
}

.link {
  display: inline-block;
  margin-right: 10px;
  color: #000;
  text-decoration: none;
  font-size: 14px;
}

.contact {
  width: 100%;
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
    text-align: center;
    margin-top: 20px;
  }

  .social-icons a {
    font-size: 18px;
    margin-right: 15px;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 14px;
  }

  .form-group {
    flex-direction: column;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
  }

  .contact {
    margin-right: 0;
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

  .social-icons a {
    font-size: 16px;
  }

  .left-section p {
    font-size: 12px;
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

  </style>
  
  <div class="container">
    <!-- Left Section -->
    <div class="left-section">
      <img src="logo.png" alt="Hope Foundation Logo" />
      <p class= fond>
        HOPE3 FOUNDATION<br />
        2135, 204th PL NE, Sammamish, WA - 98074<br />
        <!-- <a href="mailto:contact@hope3.org">contact@hope3.org</a><br /> -->
         contact@hope3.org<br/>
        425-200-4370<br />
        US IRS 501(C)(3) approved organization<br />
        (Tax ID: 83-4354181)
      </p>
      <div class="footer-links">
        <div>
          <a href="/">Home</a>
          <a href="/Dropdown">Who We Are</a>
          <a href="/Ourpeople">Our People</a>
          <a href="/Success">Success Stories</a>
          <a href="/getinvoce">Get Involved</a>
          <a href="/Event">Event</a>
        </div>
        <div class="link">
          <a href="/Founder">Founders</a>
          <a href="/Mission">Mission/Vision</a>
          <a href="/Finance">Financials</a>
          <a href="/Admission">Admissions</a>
        </div>
      </div>
      <div class="social-icons">
        <!-- <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-pinterest"></i></a> -->
      </div>
    </div>
  
    <!-- Right Section -->
    <div class="right-section">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <input type="text" placeholder="First Name*" value={formData.firstName} />
          <input type="text" placeholder="Last Name*" value={formData.lastName} />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email*" value={formData.email} />
          <input type="tel" placeholder="Phone*" value={formData.phone} />
        </div>
        <div class="form-group">
          <input type="text" placeholder="WhatsApp" value={formData.whatsapp} />
          <input type="text" placeholder="Address*" value={formData.address} />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Subject*" value={formData.subject} />
        </div>
        <div class="form-group">
          <textarea placeholder="Message"value={formData.message}></textarea>
        </div>
        <div class="recaptcha">
          <input type="checkbox" id="recaptcha" />
          <label for="recaptcha">I'm not a robot</label>
        </div>
        <button class="contact" type="submit">CONTACT US</button>
      </form>
    </div>
  </div>
  