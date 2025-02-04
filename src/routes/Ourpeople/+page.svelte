<script>
    import Contact from "../../components/Contact.svelte";
    import Nav from "../../components/Nav.svelte";
    import { onMount } from "svelte";

    let activeIndex = 0;
    const successCards = [
    [
        { img: "meena.png", name: "Dr. Meenakshi Sundaram", desc: "Intel, USA" },
        { img: "srivathsan.png", name: "Dr. Srivathsan", desc: "OHSU Knight Cancer Institute, USA" },
        { img: "founder.png", name: "Dr. Hari Lakshmanan", desc: "OHSU Knight Cancer Institute, USA" },
        { img: "srinivasan.png", name: "Dr. Srinivasan", desc: "Broadcom Inc, USA" }
    ],
    [
        { img: "p2.png", name: "Mr Uday", desc: "Entrepreneur, USA" },
        { img: "p3.png", name: "Mr Balaji Ganesan", desc: "Ex tcs employee, George mason grad student, USA" },
        { img: "p4.png", name: "Mrs Usha", desc: " USA" },
        { img: "p5.png", name: "Mr Anirudh", desc: "Net Health, USA" }
    ],
    [
        { img: "p6.png", name: "Ms Anitha", desc: "Google, USA" },
        { img: "p7.png", name: "Mr Abinandan", desc: "Microsoft, USA" },
        { img: "p8.png", name: "Mr Sivakumar", desc: "Intel, USA" },
        { img: "p9.png", name: "Mrs Mina Kalyan", desc: "Life Coach, Seattle, USA" }
    ]
];
let interval=0;

onMount(() => {
    interval = setInterval(() => {
        activeIndex = (activeIndex + 1) % successCards.length;
    }, 5000);

    return () => clearInterval(interval);
});



const usaBoard = [
        { name: "Mr Arumugam", title: "Biology Teacher, TN Govt School", image: "a1.png" },
        { name: "Mr Vishvakraj", title: "Govt of California, USA", image: "founder.png" },
        { name: "Mr Anirudh", title: "Net Health, USA", image: "p5.png" },
        { name: "Mr.Ramesh", title: "Mugavari Foundation", image: "a4.png" },
    ];
const admission= [
        { name: "Mr Arumugam", title: "Biology Teacher, TN Govt School", image: "a1.png" },
        { name: "Mr Karthik Babu", title: "Manhattan Associates, USA", image: "a2.png" },
        { name: "Mrs Krithika", title: " USA", image: "krithika.png" },
        { name: "Mr Uday", title: "Entrepreneur, USA" ,image: "p2.png", },
        { name: "Mr Ganesh", title: "USA", image: "a5.png" },
    ];
// const finance= [
//         { name: "Mr Vishvakraj", title: "Govt of California, USA", image: "a1.png" },
//         { name: "Mr Karthik Babu", title: "Manhattan Associates, USA", image: "a2.png" },
//         { name: "Mr Ganesh", title: "AlixPartners,USA", image: "a5.png" },
//         { name: "Mr Raghul", title: "CTS, India" ,image: "raghul.png", },
//         { name: "Mr Saravanan", title: "Accenture, India", image: "volunteer.png" },
//     ];

const relation= [ 
        { name: "Mr Sivakumar", title: "Hope3, India", image: "shiva.png" },
        { name: "Mr Ganesh", title: "AlixPartners,USA", image: "a5.png" },
        { name: "Mr Karthik Babu", title: "Manhattan Associates, USA", image: "a2.png" },
        { name: "Mrs Ramu Palaniappan", title: "Amazon,USA", image: "ramu.png" },
    ];
const media=[
    { name: "Mr Sivakumar", title: "Hope3, India", image: "shiva.png" },
    { name: "Mr Ravishankar", title: "CTS, India", image: "ravi_desk.png" },
];

    
let currentRow = 0;
  const itemsPerRow = 2; // Show 2 items per row on mobile

  // const finance= [
//         { name: "Mr Vishvakraj", title: "Govt of California, USA", image: "a1.png" },
//         { name: "Mr Karthik Babu", title: "Manhattan Associates, USA", image: "a2.png" },
//         { name: "Mr Ganesh", title: "AlixPartners,USA", image: "a5.png" },
//         { name: "Mr Raghul", title: "CTS, India" ,image: "raghul.png", },
//         { name: "Mr Saravanan", title: "Accenture, India", image: "volunteer.png" },
//     ];



  let finance = [
    { id: 1, image: 'a1.png', name: 'Mr Vishvakraj', title: 'Govt of California, USA' },
    { id: 2, image: 'a2.png', name: 'Mr Karthik Babu', title: 'Manhattan Associates, USA' },
    { id: 3, image: 'a5.png', name: 'Mr Ganesh', title: 'AlixPartners,USA' },
    { id: 4, image: 'raghul.png', name: 'Mr Raghul', title: 'CTS, India' },
    { id: 5, image: 'volunteer.png', name: 'Mr Saravanan', title: 'CFO' }
    
    // Add more profiles if needed
  ];

  // Handling the previous row
  function prevRow() {
    if (currentRow > 0) {
      currentRow--;
    }
  }

  // Handling the next row
  function nextRow() {
    if (currentRow < Math.floor(finance.length / itemsPerRow)) {
      currentRow++;
    }
  }
    
</script>

<style>

    /* General Styling */
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: #f9f9f9;
        color: #444;
        text-align: center;
    }

    .img {
        height: auto;
        width: 100%;
        display: block;
        margin: 0 auto;
    }

    .tit {
        font-weight: 900;
        font-size: 2.6rem;
        word-spacing: 0.3rem;
        padding-left: 10%;
        letter-spacing: 0.1rem;
        background-color: rgba(170, 224, 224, 0.916);
        color: rgb(147, 147, 147);
        margin: 0;
        text-align: center;
        padding: 10px 0;
    }

    .fond {
        font-size: 15px;
        color: rgb(118, 117, 117);
        font-family: 'Montserrat', sans-serif;
        line-height: 1.8;
        margin: 30px auto;
        max-width: 800px; 
        text-align: justify;
    }

    .fond p {
        margin: 5 10px;
        padding: 15px 15px;
        background-color: #f9f9f9;
        border-left: 5px solid rgba(170, 224, 224, 0.916);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    /* Success Section Styling */
    .success-section {
        margin: 40px auto;
        padding: 20px;
        max-width: 1200px;
    }

    .success-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #555;
    margin-top: 10px;
}

    .success-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 30px;
        overflow: hidden;
    }

    .card {
        text-align: center;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 200px;
        flex-shrink: 0;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    }

    .card img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #e6e6e6;
        margin-bottom: 15px;
    }

    .card h3 {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 5px;
    }

    .card p {
        font-size: 0.9rem;
        color: #666;
        margin: 0;
    }
    .board-section {
        text-align: center;
        padding: 2rem;
        background-color: #ebe9e9;
        height: 50%;
    }

    .board-section h2 {
        font-size: 3rem;
        margin-top: 10px;
        color: #727171;
    }

    .board-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .profile-card {
        text-align: center;
        margin: 1rem;
    }

    .profile-card img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .profile-card h3 {
        margin: 0.5rem 0 0.25rem;
        font-size: 1.2rem;
    }

    .profile-card p {
        margin: 0;
        color: gray;
        font-size: 0.9rem;
    }
   
    .finance{
        display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
        margin-bottom: 5rem;
        color: #727171;
    }
    /* Finance Section Styling */
.finance-section {
    width: 100%;
    padding: 20px;
}

.image-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.image-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

/* Adjustments for mobile view: show 2 images per row */
@media (max-width: 408px) {
    .image-row {
        flex-wrap: wrap;
        gap: 10px;
    }

    .profile-card {
        width: 45%; /* 2 images per row */
    }

    .arrow-buttons {
        display: block; /* Show arrow buttons on mobile */
    }
}

/* Adjustments for desktop view: show all images in a single row without arrows */
@media (min-width: 769px) {
    .image-row {
        flex-wrap: nowrap;
    }

    .profile-card {
        width: 150px; /* Adjust as necessary */
    }

    .arrow-buttons {
        display: none; /* Hide arrow buttons on desktop */
    }
}

.arrow-buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: none; /* Default to hidden */
}

.arrow-buttons button {
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.5rem;
}

.arrow-buttons button:hover {
    background-color: rgba(0, 0, 0, 0.4);
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

  .title
  {
    font-size: 3rem;
    color: #727171;
    align-items: center;
    text-align: center;
    background-color: #ebe9e9;
    margin-bottom: 0%;
    margin-top: 1%;
}
.title1
{
    font-size: 3rem;
    color: #727171;
    align-items: center;
    text-align: center;
    background-color: rgb(255,255,255);
    margin-top: 1%;
    
}
.partner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  
}

.partner-logo {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.partner-link {
  text-decoration: none;
  color: blue;
  margin-top: 5px;
}

/* .partner-wrapper {
  display: flex;
  justify-content: center; 
  flex-wrap: nowrap; 
  gap: 20px; 
  background-color: #ebe9e9;
  padding: 100px;
}
.partner-wrapper2
{
  display: flex;
  justify-content: center; 
  flex-wrap: nowrap; 
  gap: 20px; 
  background-color: rgb(255,255,255);
  padding: 100px;
} */


/* General styles */
.partner-wrapper2 {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  gap: 1px; 
  padding: 30px;
} 

.partner-wrapper {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  gap: 1px; 
  background-color: #f0f0f0; 
  padding: 40px; 
}

.partner-container {
  text-align: center;
  flex-basis: 22%; 
}

.partner-logo {
  max-width: 100%;
  height: auto;
}

.partner-link {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color:black;
}
/* For desktop, 4 partners in a row */
@media (min-width: 768px) {
  .partner-container {
    flex-basis: 22%; 
  }
}

/* For mobile, 1 partner per row */
@media (max-width: 767px) {
  .partner-container {
    flex-basis: 100%;
    margin-bottom: 20px;
  }

  .partner-wrapper,
  .partner-wrapper2 {
    justify-content: center;
  }
}




@media (max-width: 768px) {
        .success-container {
            flex-wrap: wrap;
        }

        .card {
            width: 45%;
        }
    }

    @media (max-width: 480px) {
        .card {
            width: 90%;
        }
    }
</style>

<Nav />

<div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="img" src="im.jpg" alt="Image of our team members" title="Our People">
</div>
<div>
    <h1 class="tit">Our People</h1>
</div>
<div class="fond">
    <p>
        There is an army of people making this HOPE3 a reality. 
        We have industrial partners where our selected students are given 
        the opportunity to have real-world experience while they are still studying in college. 
        Our Board members are the pillars of the organization taking care of all day-to-day activities 
        from admissions, student services, crafting Varsity courses, guiding volunteers, and many more. 
        The Finance team meticulously tracks all income and expenses and makes sure the organization is in 
        compliance with the laws. The Admissions team takes care of the entire interview process starting from 
        initial screening to final Varsity onboarding. HOPE3 Media team assists students to bring out their talents via 
        entertaining online content and help with other design projects. All of this is made possible by the financial 
        support provided by our Donors. Our Alumni offers a great mentorship program to all current students guiding them
        based on their valuable experience.
    </p>
</div>
<!-- Our success -->
 <div class="board-section">
    <h2>Our success</h2>
    <div class="board-grid">
        {#each usaBoard as profile}
            <div class="profile-card">
                <img src={profile.image} alt="{profile.name}" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
            </div>
        {/each}
    </div>
 </div>
 <!-- Varsity -->
<section class="success-section">
    <h2 class="success-title">Varsity</h2>
    <div class="success-container">
        {#each successCards[activeIndex] as card}
            <div class="card">
                <img src={card.img} alt={card.name}>
                <h3>{card.name}</h3>
                <p>{card.desc}</p>
            </div>
        {/each}
    </div>
</section>
<!-- Admissions -->
<div class="board-section">
    <h2>Admissions</h2>
    <div class="board-grid">
        {#each admission as profile}
            <div class="profile-card">
                <img src={profile.image} alt="{profile.name}" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
            </div>
        {/each}
    </div>
 </div>
 <!-- Finance -->
 <div class="finance-section">
    <h2 class="finance">Finance</h2>
    <div class="image-carousel">
      <div class="image-row">
        {#each finance as profile, index (profile.id)}
          <div class="profile-card">
            <img src={profile.image} alt="{profile.name}" />
            <h3>{profile.name}</h3>
            <p>{profile.title}</p>
          </div>
        {/each}
      </div>
      <div class="arrow-buttons">
        <button class="prev" on:click={prevRow}>&#10094;</button>
        <button class="next" on:click={nextRow}>&#10095;</button>
      </div>
    </div>
  </div>
  
 <!-- Student Relations -->
 <div class="board-section">
    <h2>Student Relations</h2>
    <div class="board-grid">
        {#each relation as profile}
            <div class="profile-card">
                <img src={profile.image} alt="{profile.name}" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
            </div>
        {/each}
    </div>
 </div>
<!-- Hope3 Media -->
 <div class="finance-section">
    <h2 class="finance">Hope3 Media</h2>
    <div class="board-grid">
        {#each media as profile}
            <div class="profile-card">
                <img src={profile.image} alt="{profile.name}" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
            </div>
        {/each}
    </div>
 </div>
<!-- Industrial Partners -->


<div class="industrial-partners">
    <h2 class="title">Industrial Partners</h2>
</div> 
<div class="partner-wrapper">
    <div class="partner-container">
        <img src="arjava_desk.png" alt="Arjava Logo" class="partner-logo" />
        <a href="https://www.arjavatech.com" target="_blank" class="partner-link">Arjava Technologies</a>
    </div>
    <div class="partner-container">
        <img src="mugavari_desk.png" alt="Mugavari Logo" class="partner-logo" />
        <a href="https://www.mugavarifoundation.org" target="_blank" class="partner-link">Mugavari Foundation</a>
    </div>
    <div class="partner-container">
        <img src="etutorborad_desk.png" alt="ETutorBoard Logo" class="partner-logo" />
        <a href="https://etutorboard.com" target="_blank" class="partner-link">ETutorBoard</a>
    </div>
    <div class="partner-container">
        <img src="tngo.png" alt="TNNGO Logo" class="partner-logo" />
        <a href="https://tnngo.org" target="_blank" class="partner-link">TNNGO</a>
    </div>
</div>

<!-- Non Profit Partners -->
<h2 class="title1">Non Profit Partners</h2>   
<section class="partner-wrapper2">
    <div class="partner-container">
        <img src="ssf_desk.png" alt="Arjava Logo" class="partner-logo" />
        <a href="https://www.arjavatech.com" target="_blank" class="partner-link">shooting atars foundation</a>
    </div>
    <div class="partner-container">
        <img src="abdulkalam_desk.png" alt="Mugavari Logo" class="partner-logo" />
        <a href="https://apjabdulkalamfoundation.org" target="_blank" class="partner-link">abdul kalam Foundation</a>
    </div>
    <div class="partner-container">
        <img src="mugavari_desk.png" alt="ETutorBoard Logo" class="partner-logo" />
        <a href="https://www.mugavarifoundation.org" target="_blank" class="partner-link">Mugavari Foundation</a>
    </div>
    <div class="partner-container">
        <img src="tngo.png" alt="TNNGO Logo" class="partner-logo" />
        <a href="https://www.drabdulkalamtrust.org" target="_blank" class="partner-link">Namco</a>
    </div>
</section>



<!-- <section class="success-section">
    <h2 class="success-title">Non Profit Partners</h2>
    <div class="success-container">
        {#each Cards[activeIndex] as card}
            <div>
                <img src={card.img} alt={card.name}>
                <h3>{card.name}</h3>
                <p>{card.desc}</p>
            </div>
        {/each}
    </div>
</section> -->
<Contact/>