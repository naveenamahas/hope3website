<script>
  import Contact from "../../components/Contact.svelte";
  import Nav from "../../components/Nav.svelte";

  
</script>

<style>
  /* .donation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 90vh;
   background: url('donor.png') no-repeat center center/cover; 
    
    text-align: center;
    
  } */
  .donation-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 90vh;
  background: url('/donor.png') no-repeat center center/cover;
  text-align: center;
}

/* White overlay that affects only the background */
.donation-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(218, 218, 218, 0.7); /* Adjust transparency */
  z-index: 1; /* Ensures it stays below content */
}

/* Ensure QR codes and content stay on top */
.donation-box {
  position: relative;
  z-index: 2; /* Places QR codes above the overlay */
  
  padding: 1rem;
  border-radius: 10px;
}

.qr-image {
  width: 150px;
  height: 150px;
}

.donation-box p {
  font-size: 1.9rem; /* Adjust as needed */
  font-weight: bold;
  color: #666; /* Medium-dark gray text */
  text-align: center;
  text-transform: capitalize; /* Adjust to match exact case */
  letter-spacing: 1px;
  text-shadow: 
    3px 3px 6px rgba(255, 255, 255, 0.9),  /* Outer soft glow */
    3px 3px 3px rgba(255, 255, 255, 0.8);  /* Inner soft glow */
}
@media (max-width: 768px) {
  .donation-container {
    flex-direction: column; /* Stack QR code boxes vertically */
    height: auto; /* Adjust height to fit content */
    padding: 20px; /* Add padding for spacing */
  }

  .donation-box {
    width: 100%; /* Make each box take full width */
    max-width: 300px; /* Limit width for better appearance */
    margin: 10px auto; /* Center the boxes */
    text-align: center; /* Keep text aligned */
  }

  .qr-image {
    width: 120px; /* Reduce QR size on small screens */
    height: 120px;
  }

  .donation-box p {
    font-size: 1.5rem; /* Reduce text size for smaller screens */
  }
}


</style>
<Nav/>
<div class="donation-container">
  <div class="donation-box">
    <img src="paypal (1).jpg" alt="Paypal QR Code" class="qr-image" />
    <p>Paypal</p>
  </div>
  <div class="donation-box">
    <img src="facebook.jpg" alt="Facebook QR Code" class="qr-image" />
    <p>Facebook</p>
  </div>
  <div class="donation-box">
    <img src="zelle_updated_image.png" alt="Zelle QR Code" class="qr-image" />
    <p>Zelle</p>
  </div>
</div>
<Contact/>
