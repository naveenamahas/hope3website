<script>
  import Contact from "../../components/Contact.svelte";
  import Nav from "../../components/Nav.svelte";
</script>

<Nav/>

<!-- Top Banner Image -->
<div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="img" src="finance_banner new.jpg" alt="Image of our team members" title="Our People">
</div>

<!-- Title -->
<div>
    <h1 class="tit">Financials</h1>
</div>

<!-- Section Title and Description -->
<div class="title">
    <h4>EXEMPLARY RECORD OF HOPE3</h4>
    <p>Hope3 Foundation is a US IRS 501(C)(3) approved organization. It was registered in year 2019 and was given Tax ID:83-4354181.</p>
    <p>1 Jan 2020 to 31 Dec 2020 is Hope3 Foundation's Fiscal Year 2020. Below are the unaudited financial summary:</p>
</div>

<!-- Image Section with Two Images -->
<div class="image">
    <div>
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="revenue_of_2020.jpeg" alt="Revenue Image">
    </div>
    
    <div>
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="expense_of_2020.jpeg" alt="Expense Image">
    </div>
</div>

<!-- Contact Section -->
<Contact/>

<style>
  *{
    font-family: 'Montserrat', sans-serif; 
  }
  /* Title Styling */
.tit {
  background-color: rgb(187, 239, 246);
  font-size: 50px;
  font-weight: 500;
  color: rgb(104, 104, 102);
  padding-left: 5%;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: center; /* Center the title for better appearance on small screens */
}

/* Banner Image Styling */
.img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
.title {
  margin-bottom: 2%;
  margin-top: 3%;
  text-align: start;
  color: rgb(128, 127, 127);
  font-size: 1.2rem;
  margin-left: 15%;
  padding: 15px 8px;
}
/* Responsive Design for Smaller Screens */
@media (max-width: 768px) {
  .img {
    height: 220px;
  }
  .tit {
    font-size: 2rem; /* Reduce font size */
    text-align: center;
  }
  .title {
    font-size: 12px; /* Adjust description font size */
  }
}

@media (max-width: 480px) {
  .img {
    max-height: 90px;
  }
  .tit {
    font-size: 1.5rem; /* Further reduce font size */
    text-align: center;
  }
  .title {
    font-size: 13px;
  }
}

/* Title Section Styling */


/* Image Section Styling */
.image {
  width: 100%;
  gap: 1.5rem;
}

.image img {
  width: 70%;
  height: auto;
  display: block;
  margin-left: 15%;
  margin-bottom: 3%;
}

</style>
