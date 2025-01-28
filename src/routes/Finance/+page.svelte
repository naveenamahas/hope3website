<script>
  import Contact from "../../components/Contact.svelte";
import Nav from "../../components/Nav.svelte";


</script>
<Nav/>
<div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="img" src="finance_banner new.jpg" alt="Image of our team members" title="Our People">
</div>
<div>
    <h1 class="tit">Get Involved</h1>
</div>
<div class="title">
    <h4>EXEMPLARY RECORD OF HOPE3</h4>
    <p>Hope3 Foundation is a US IRS 501(C)(3) approved organization. It was registered in year 2019 and was given Tax ID:83-4354181.</p>
    
    <p>1 Jan 2020 to 31 Dec 2020 is Hope3 Foundation's Fiscal Year 2020. Below are the unaudited financial summary:</p>
</div>
<div class="image">
    <div>
      <img src="revenue_of_2020.jpeg" alt="Revenue Image">
    </div>
    
    <div>
      <img src="expense_of_2020.jpeg" alt="Expense Image">
    </div>
</div>
<Contact/>
<style>
  .tit {
    background-color: rgb(187, 239, 246);
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

  .title {
    margin-bottom: 2%;
    margin-top: 3%;
    text-align: start;
    color: rgb(75, 74, 74);
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-left: 15%;
  }

  .image {
    width: 100%;
    gap:1.5 rem; /* Ensures the container spans the full width */
  }

  .image img {
    width: 70%; /* The image will span the full width of its container */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Removes inline spacing */
    margin-left: 15%; /* Removes extra margins */
    gap:2rem;
    margin-bottom: 3%;
  }
</style>
