<script>
    import Contact from "../../components/Contact.svelte";
    import Nav from "../../components/Nav.svelte";
    import { onMount } from "svelte";
    import People from "../../components/People.svelte";
    import Profit from "../../components/Profit.svelte";
  import Success from "../../components/Success1.svelte";
  import Admission3 from "../../components/Admission3.svelte";
  import Finance4 from "../../components/finance4.svelte";
  import Student5 from "../../components/Student5.svelte";
  import Media6 from "../../components/Media6.svelte";

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
    // @ts-ignore
    interval = setInterval(() => {
        activeIndex = (activeIndex + 1) % successCards.length;
    }, 5000);

    return () => clearInterval(interval);
});
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
    
@media (max-width: 768px) {
    .success-title{
        font-size: 1.8rem;
    }

    .success-container {
        flex-wrap: wrap; 
        justify-content: center;
    }

    .card {
        width: 45%; 
    }
}

@media (max-width: 480px) {
    .card {
        width: 50%; 
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
<Success/> 
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
 <Admission3/>
<!-- Finance -->
  <Finance4/>
<!-- Student Relations -->
  <Student5/>
<!-- Hope3 Media -->
  <Media6/>
<!-- Industrial Partners -->
<Profit/>
<!-- Non Industrial Partners -->
<People/>

<Contact/>