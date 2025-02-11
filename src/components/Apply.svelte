<script>
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
    form {
        max-width: 600px;
        margin: auto;
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
    label {
        font-weight: bold;
        display: block;
        margin-top: 10px;
    }
    input {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        margin-top: 20px;
        background: #007bff;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
    }
</style>

<form on:submit|preventDefault={submitForm}>
    <div class="header">
        <img src="logo.png" alt="Hope3 Foundation Logo" class="logo" />
        <h2>Hope3 Foundation</h2>
    </div>
    <label>Student Name: *</label>
    <input type="text" bind:value={studentName} placeholder="Enter name.." required />

    <label>Father Name: *</label>
    <input type="text" bind:value={fatherName} placeholder="Enter father name.." required />

    <label>Mother Name:</label>
    <input type="text" bind:value={motherName} placeholder="Enter mother name.." />

    <label>Mobile Number: *</label>
    <input type="tel" bind:value={mobileNumber} placeholder="Enter mobile number.." required />

    <label>School Name: *</label>
    <input type="text" bind:value={schoolName} placeholder="Enter school name.." required />

    <label>Medium of Instruction: *</label>
    <input type="text" bind:value={mediumOfInstruction} placeholder="Enter medium.." required />

    <label>Date of Birth: *</label>
    <input type="date" bind:value={dateOfBirth} required />

    <label>City / Town: *</label>
    <input type="text" bind:value={city} placeholder="Enter.." required />

    <label>District: *</label>
    <input type="text" bind:value={district} placeholder="Enter district.." required />

    <label>Pincode: *</label>
    <input type="text" bind:value={pincode} placeholder="Enter pincode.." required />

    <label>10th Score: *</label>
    <input type="text" bind:value={tenthScore} placeholder="Enter 10th score.." required />

    <label>12th Half Yearly Score: *</label>
    <input type="text" bind:value={twelfthHalfYearlyScore} placeholder="Enter 12th half yearly score.." required />

    <button type="submit">Submit</button>
</form>
