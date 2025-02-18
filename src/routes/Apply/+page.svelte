<!-- <script>
  import Contact from "../../components/Contact.svelte";
  import Nav from "../../components/Nav.svelte";

  let studentName = "";
  let fatherName = "";
  let motherName = "";
  let mobileNumber = "";
  let schoolName = "";
  let mediumOfInstruction = "";
  let dateOfBirth = "";
  let city = "";
  let district = "";
  let pincode = "";
  let tenthScore = "";
  let twelfthHalfYearlyScore = "";

  function submitForm() {
      alert("Form submitted successfully!");
  }
</script>

<style>
  *{
    font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
  }
  form {
      max-width: 600px;
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .header {
      display: flex;
      align-items: center;
      gap: 10px;
  }
  .logo {
      width: 50px;
      height: 50px;
  }
  .form-group {
      display: flex;
      align-items: center;
      margin-top: 10px;
  }
  label {
    font-weight: bold;
    width: 40%;
}

label::after {
    content: " *";
    color: red;
    font-weight: bold;
}

  input {
      width: 60%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button {
    background: #f1e438;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    width: 50%;
}

</style>
<Nav/>
<form on:submit|preventDefault={submitForm}>
  <div class="header">
      <img src="hope3_200.png" alt="Hope3 Foundation Logo" class="logo" />
      <h2>Hope3 Foundation</h2>
  </div>
  
  <div class="form-group">
    <label>Student Name: </label>

      <input type="text" bind:value={studentName} placeholder="Enter name.." required />
  </div>

  <div class="form-group">
      <label>Father Name: </label>
      <input type="text" bind:value={fatherName} placeholder="Enter father name.." required />
  </div>

  <div class="form-group">
      <label>Mother Name:</label>
      <input type="text" bind:value={motherName} placeholder="Enter mother name.." />
  </div>

  <div class="form-group">
      <label>Mobile Number: </label>
      <input type="tel" bind:value={mobileNumber} placeholder="Enter mobile number.." required />
  </div>

  <div class="form-group">
      <label>School Name: </label>
      <input type="text" bind:value={schoolName} placeholder="Enter school name.." required />
  </div>

  <div class="form-group">
      <label>Medium of Instruction: </label>
      <input type="text" bind:value={mediumOfInstruction} placeholder="Enter medium.." required />
  </div>

  <div class="form-group">
      <label>Date of Birth: </label>
      <input type="date" bind:value={dateOfBirth} required />
  </div>

  <div class="form-group">
      <label>City / Town: </label>
      <input type="text" bind:value={city} placeholder="Enter.." required />
  </div>

  <div class="form-group">
      <label>District: </label>
      <input type="text" bind:value={district} placeholder="Enter district.." required />
  </div>

  <div class="form-group">
      <label>Pincode: </label>
      <input type="text" bind:value={pincode} placeholder="Enter pincode.." required />
  </div>

  <div class="form-group">
      <label>10th Score: </label>
      <input type="text" bind:value={tenthScore} placeholder="Enter 10th score.." required />
  </div>

  <div class="form-group">
      <label>12th Half Yearly Score: </label>
      <input type="text" bind:value={twelfthHalfYearlyScore} placeholder="Enter 12th half yearly score.." required />
  </div>

  <div class="button-container">
    <button type="submit">Submit</button>
</div>

</form>
<Contact/> -->
<script>
   import Contact from "../../components/Contact.svelte";
  import Nav from "../../components/Nav.svelte";

  let studentName = "";
  let fatherName = "";
  let motherName = "";
  let mobileNumber = "";
  let schoolName = "";
  let mediumOfInstruction = "";
  let dateOfBirth = "";
  let city = "";
  let district = "";
  let pincode = "";
  let tenthScore = "";
  let twelfthHalfYearlyScore = "";
 

  function submitForm() {
      alert("Form submitted successfully!");
  }
</script>

<style>
  *{
    font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
  }
  .container {
      display: flex;
      max-width: 1000px;
      margin: auto;
     margin-top: 20px;
     margin-bottom: 20px;
      padding: 3px;
      border-radius: 3px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .form-container {
      flex: 1;
      padding: 20px;
  }
  .image-container {
      flex: 1;
      background: url('/student.jpg') no-repeat center center;
      background-size: cover;
      border-radius: 3px;
  }
  .form-group {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
  }
  label {
     font-family:'Montserrat', sans-serif;
      margin-bottom: 2px;
      font-size: 10px;
      font-weight: bold;
  }
  input {
      width: 90%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  .row {
      display: flex;
      gap: 10px;
  }
  .row .form-group {
      flex: 1;
  }
  button {
      margin-top: 20px;
      background: #007bff;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      width: 95%;
  }
  button:hover {
    background-color: #3f90e7;
}

  .title-container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px; /* Space between logo and title */
    margin-bottom: 20px;
}

.logo {
    width: 50px; /* Adjust logo size */
    height: auto;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column; /* Stack form and image vertically on smaller screens */
    }

    .image-container {
        display: none; /* Hide the image on smaller screens */
    }

    .form-container {
        width: 100%; /* Make form container take full width */
        padding: 10px;
    }

    /* Ensure all form fields, including select, have the same width */
    input, select, button {
        width: 100% !important; /* Force full width for all elements */
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .row {
        flex-direction: column; /* Stack the input fields vertically */
    }

    .row .form-group {
        width: 100%;
    }

    /* Optional: Adjust the font size of labels */
    label {
        font-size: 12px;
    }
}


</style>
<Nav/>
<div class="container">
    <div class="form-container">
        <div class="title-container">
            <img src="hope3_200.png" alt="Logo" class="logo">
            <h2 class="title">Hope3 Foundation</h2>
        </div>
        <form on:submit|preventDefault={submitForm}>
          <div class="form-group">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label>Student Name:</label>
            <input type="text" bind:value={studentName} placeholder="" required style="width: 95%;" />
        </div>
        
            <div class="row">
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>Father Name: </label>
                    <input type="text" bind:value={fatherName} placeholder="" required />
                </div>
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>Mother Name:</label>
                    <input type="text" bind:value={motherName} placeholder="" />
                </div>
            </div>
  
            <div class="row">
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>Date of Birth: </label>
                    <input type="date" bind:value={dateOfBirth} required />
                </div>
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>Mobile Number: </label>
                    <input type="tel" bind:value={mobileNumber} placeholder="" required />
                </div>
            </div>
            <div class="row">
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>Medium of Instruction: </label>
                    <select bind:value={mediumOfInstruction} required style="width: 90%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                     
                      <option value="Tamil">Tamil</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  
              <div class="form-group">
                  <!-- svelte-ignore a11y_label_has_associated_control -->
                  <label>School Name: </label>
                  <input type="text" bind:value={schoolName} placeholder="" required />
              </div>
          </div>
            
            <div class="row">
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>City / Town: </label>
                    <input type="text" bind:value={city} placeholder="" required />
                </div>
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>District: </label>
                    <input type="text" bind:value={district} placeholder="" required />
                </div>
            </div>
  
            <div class="row">
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>10th Score: </label>
                    <input type="text" bind:value={tenthScore} placeholder="" required />
                </div>
                <div class="form-group">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label>12th Half Yearly Score: </label>
                    <input type="text" bind:value={twelfthHalfYearlyScore} placeholder="" required />
                </div>
            </div>
  
            <div class="form-group">
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label>Pincode: </label>
                <input type="text" bind:value={pincode} placeholder="" required style="width: 95%;" />
            </div>
  
            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="image-container"></div>
  </div>
  
<Contact/>