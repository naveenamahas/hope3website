<script>
// @ts-nocheck

  import Contact from "../../components/Contact.svelte";
import Nav from "../../components/Nav.svelte";

    const cards = [
      {
        title: "My ultimate passion and interest lies in the field of computers. During my college years, I collaborated with HOPE3 to create an application named 'Find a Bed'. The purpose of this app is to help people find available hospital beds during the COVID-19 pandemic. As a result of my work in this project, I was able to secure a job at a multinational company. The success of the project was largely attributed to the opportunities provided by HOPE3 Varsity, which allowed us to donate our theoretical knowledge to practical situations.",
        titleTamil: "கம்ப்யூட்டர் மட்டும்தான் என் கனவு passion எல்லாமே. College படிக்கும்போதே Hope3 யோட சேர்ந்து Covid time-ல Bed availability எங்கெல்லாம் இருக்குன்னு தெரிஞ்சுக்க 'Find a bed' என்ற app பண்ணினேன். MNC-ல வேலை கிடைச்சதுக்கு, Hope3 யோட சேர்ந்து பண்ண projects எல்லாம் முக்கிய காரணம். சொல்லி கொடுத்தது மட்டுமல்லாமல் அத practical-லா donate பண்ண platform மும் ஏற்படுத்தி கொடுத்தது Hope3 varsity.",
        achievement: "Completed many projects for clients during college days which earned him a Walmart internship and clinched a job in Ericsson.",
        description: "Completed many projects for clients during college days which earned him a Walmart internship and clinched a job in Ericsson.",
        imageUrl: "amrish.png"
        
      },
      {
        title:"As a BE Computer Science student, I had big aspirations in my life and have been putting in a lot of effort to achieve them. However, I often encountered many doubts that I couldn't find proper clarification or guidance for in college. Fortunately, I found the support I needed through HOPE3, which has helped me tremendously. Thanks to their guidance, I am now working at an MNC.",
        titleTamil:"நான் ஒரு B.E computer science student. எனக்கு பெரிய அளவில சாதிக்கணும்னு ஆசை. அதுக்காக நிறைய முயற்சிகள் பண்ணிட்டே இருப்பேன். அப்ப எனக்கு கேள்விகள் வரும் கல்லூரியில் அதற்கான விடைகளோ வழிகாட்டுதல்களோ கிடைக்கல. Hope3யிடம் அதுக்கான பதில்கள் இருந்தது, கூடவே வழிகாட்டியாகவும் இருந்தாங்க. இப்ப நான் ஒரு பெரிய MNC-ல work பண்ணிட்டு இருக்கேன்.",
        achievement:"Coming from a government school background, I was able to acquire a job at a reputed MNC through determination and skill. work.",
        description:
          "Coming from a government school background, she was able to acquire a job at a reputed MNC through determination and skill.",
        imageUrl: "anitha.png"
      },
      {
        title:"My love for Physics knows no bounds - I am infinitely passionate about understanding its intricacies and gaining a deep understanding of how the world works. Following my 12th-grade studies, I received invaluable support from HOPE3 for my JEE preparation. Not only did they help me prepare for the exam, but they also taught me the importance of yoga and meditation to improve my mental strength. Under the watchful guidance of Dr.Meenakshi Sir, I made tremendous progress and received well-structured guidance. Thanks to HOPE3's unwavering support, I secured a seat at NIT Hamirpur to pursue my love of Physics. I am now embarking on a thrilling journey toward gaining more knowledge and satisfying my thirst for understanding.",
        titleTamil:"Physics பிடிக்கும்னு சொல்றதை விட அது மேல தீவிரமான காதல் என்று சொல்லலாம் என் லட்சியமே physics ஆழமா புரிஞ்சுக்கிறது தான் அது மூலமா இந்த உலகம் எப்படி இயங்குதுன்னு தெரிஞ்சுக்கணும். 12th அப்புறம் JEE preparation பண்ண Hope3 foundation support கிடைத்தது. அது மட்டும் இல்லாம mental strength-கு yoga meditation எல்லாம் கத்து கொடுத்தாங்க. Meenakshi அண்ணா regular-அ என்னோட progress-அ reviews செய்து guide பண்ணாங்க. இப்படி எல்லா விஷயத்திலும் எனக்கு உறுதுணையா இருந்ததின் காரணமா NIT Hamirpur-ல seat கிடைச்சது இப்ப அறிவுக்கான தேடுதல் நல்ல முறையில் பயணிச்சிட்டு இருக்கேன்.",
        achievement:"Cracked the tough JEE exam and is pursuing Engineering Physics at the prestigious National Institute of Technology in Hamirpur.",
        description:
          "Cracked the tough JEE exam and is pursuing Engineering Physics at the prestigious National Institute of Technology in Hamirpur.",
        imageUrl: "arshitha.png"
      },
      {
        title:"Designing is my ultimate passion and I owe a lot of credit to HOPE3 for helping me to discover this interest. They provided me with unwavering support and exposed me to various new technologies in the field of design. Currently, I am working as a Software Developer in a great company and also taking on several design projects. With HOPE3's guidance, I am confident that I will soon be able to establish myself as a professional designer.",
        titleTamil:"என்னோட passion designing அத என்னையே கண்டுபிடிக்க வச்சு அதுல என்னென்ன New Technologies இருக்குன்னு சொல்லி அத explore பண்ணவும் வச்சது Hope3 மீனாட்சி அண்ணா. இப்ப நான் ஒரு நல்ல software company developer-அ வேலை செஞ்சுக்கிட்டே designing சில projects எடுத்து பண்ணிக்கிட்டு வரேன். கூடிய சீக்கிரம் ஒரு professional designer-அ வர முடியும் என்கிற நம்பிக்கை வந்திருக்கு.",
        achievement:"Landed a job at an MNC while studying in college through passion and self-motivation, without the help of on/off campus recruitment.",
        description:
          "Landed a job at an MNC while studying in college through passion and self-motivation, without the help of on/off campus recruitment.",
        imageUrl: "balasaranya.png"
      },
      {
        title:"I believe that simply studying from a book is not enough - I aim to understand every concept in depth. Unfortunately, I can't able to achieve them only through books, Deep down I had an interest to learn more than just books but don't know where to begin. That's when I came to know about HOPE3 Varsity and joined it immediately. Their teaching methodology was simple, clear, and practical, allowing me to fully grasp and understand each topic in depth. Thanks to HOPE3's guidance, I am now working at India's top MNC TCS.",
        titleTamil:"வெறும் புத்தகத்தில் இருந்து மட்டும் படிக்கிறது போதாதுனு நான் நம்புறேன். புத்தகங்களை விட அதிகமா கத்துக்கணும்கிற ஆர்வம் எனக்கு ரொம்பவே இருந்தது, ஆனால் எங்க எப்படி ஆரம்பிக்கிறது என்று தெரியவில்லை. அப்பதான் Hope3 Varsity பத்தி தெரிஞ்சு அதுல சேர்ந்தேன். அவங்க சொல்லிக் கொடுக்கிற முறை வந்து ரொம்ப easy-வும் clear-வும் நடைமுறையில் செயல்படுத்தும் படியாகவும் இருந்தது. ஒவ்வொன்றையும் முழுமையாகவும் ஆழமாகவும் உள்வாங்கிக் கொள்ள உதவியது. Hope3 வழிகாட்டுதலுக்கு நன்றி. நான் இப்போ இந்தியாவின் சிறந்த MNC TCS-இல் வேலை பார்க்கிறேன்.",
        achievement:"Through unwavering confidence and effort, he landed a premium job in one of India's best MNCs.",
        description:
          "Through unwavering confidence and effort, he landed a premium job in one of India's best MNCs.",
        imageUrl: "balaji.png"
      },
      {
        title:"My goal is to earn more to give more. Fortunately, I received timely and inspiring support from HOPE3. They provided me with the proper guidance to follow the correct path to my success. As a result, I am currently employed at an MNC and using my resources to help those in need to the best of my ability.",
        titleTamil:"என்னோட கனவே நல்லா சம்பாதித்து நிறைய பேருக்கு உதவறது தான். அந்த கனவுக்கு பக்கபலமாகவும் தகுந்த நேரங்களில் உறுதுணையாக இருந்து ஊக்கத்தையும் தெளிவையும் கொடுத்தது, என்னை முன்னேற்ற பாதைக்கு செல்ல வெச்சது Hope3 foundation. இப்ப நான் ஒரு MNC company-ல வேலை பார்த்துட்டு, என்னால முடிஞ்ச உதவிகளை செஞ்சுட்டு இருக்கேன்.",
        achievement:"Being from a government school, his focused efforts and grit helped him secure a job as a software developer.",
        description:
          "Being from a government school, his focused efforts and grit helped him secure a job as a software developer.",
        imageUrl: "govindaraman.png"
      },
      {
        title:"I developed a strong interest in the field of innovation and creativity, which led me to join the HOPE3 Varsity Robotics Club. Under the guidance of Meenakshi Anna, an expert from Intel (USA), I have been working on various robotics projects and have achieved significant success. Our team has won several competitions, including second place in a competition held by Bosch (MNC), which also gave me the opportunity to intern with them. Through this experience, I learned that understanding the concepts behind what we learn is the key to success, rather than simply memorizing from books.",
        titleTamil:"எனக்கு creation-ல இருக்கும் ஆர்வத்தினால் Hope3 Varsity Robotics club-ல join பண்ணி, Intel (USA) work பண்ற மீனாட்சி அண்ணா guidance-ல நான் project-லாம் பண்ணிக்கிட்டு வரேன். நிறைய competition-ல கலந்து win பண்றோம். மற்றும் Bosch (MNC) போட்டியில இரண்டாம் இடத்தை பிடித்தது மட்டும் இல்லாமல் அதே companyல internship வாய்ப்பும் கிடைத்தது. வெறுமனே bookல இருக்கிறது மட்டும் படிக்காம ஒவ்வொரு விஷயத்தையும் புரிஞ்சு படிச்சா சாதிக்கலாம் என்கிற நம்பிக்கை வந்து இருக்கு.",
        achievement:"Runner-up in a hackathon conducted by Bosch and as a result got an internship with the company.",
        description:
          "Runner-up in a hackathon conducted by Bosch and as a result got an internship with the company.",
        imageUrl: "Irfana.png"
      },
      {
        title:"A person's thirst for knowledge can be a strong motivator to learn anything in this vast world. Even though I was a commerce student, Hope3 varsity believed in me and encouraged me to learn computer programming. In addition to this, I have always been interested in exploring new skill sets such as product development and soft skills. The HOPE3 varsity clubs provided me with a platform to showcase my talents and hone my skills toward my interest. Although I currently work as a business analyst at a major company, I am still pursuing my dreams and striving towards greater achievements.",
        titleTamil:"ஒரு விஷயத்தை கத்துக்கணும்-ன்ற ஆர்வம் இருந்தா போதும் நம்ம எதை வேணாலும் கத்துக்க முடியும். நான் ஒரு commerce student. இருந்தாலும் நானும் ஒரு computer programming பண்ண முடியும்-னு நம்பிக்கையும் ஊக்கத்தையும் கொடுத்தது Hope3 varsity. அது மட்டுமில்லாமல் எனக்கு நிறைய விஷயங்களை கத்துகிறது பிடிக்கும் எடுத்துக்காட்டு: soft skill, product development, communication club-ல எல்லாம் join பண்ணி படிச்சதோட மட்டும் இல்லாம அதை present பண்ண மேடையும் கொடுத்தது Hope3 varsity. இப்ப நான் ஒரு பெரிய கம்பெனில business analyst வேலை பார்த்துட்டே என்னோட பெரிய கனவுகளை நோக்கி ஓடிட்டு இருக்கேன்.",
        achievement:"The combination of interest and passion guided this government school student to secure a premium job in one of India's top MNCs.",
        description:
          "The combination of interest and passion guided this government school student to secure a premium job in one of India's top MNCs.",
        imageUrl: "Iyappan.png"
      },
      {
        title:"Becoming a doctor was not just a desire, but my ultimate dream. Thanks to Mr.Palani and Mr.Shiva from Hope3, who provided me with the necessary motivation and hope to pursue my dream. Without their guidance, I would have ended up in engineering, a field in which I have no interest. With the help of the HOPE3 foundation, I received funding for a year-long coaching program in a top-class private training Institution. Thanks to their support, I was able to turn my dream into reality today.",
        titleTamil:"Doctor ஆகணும்-னு ஆசை சொல்றத விட கனவு-னு சொல்லலாம். அதுக்கான ஊக்கத்தையும் நம்பிக்கையும் கொடுத்தது Hope3 பழனி அண்ணா மற்றும் சிவா அண்ணா. ஒருவேளை நடக்காம இருந்திருந்தால் எனக்கு விருப்பமில்லாத engineering தான் படிச்சிட்டு இருந்திருப்பேன். அதுக்காக ஒரு வருடம் தனியார் பயிற்சி மையத்தில் சேர்ந்து படிக்க உதவியது Mugavari foundation மற்றும் Hope3 foundation. அந்த confident கொடுத்ததுனால தான் என் கனவ achievement பண்ண முடிஞ்சது.",
        achievement:"Through tenacious effort, she was able crack NEET on her second attempt to secure a seat in an MBBS program.", 
        description:
          "Through tenacious effort, she was able crack NEET on her second attempt to secure a seat in an MBBS program.",
        imageUrl: "janani.png"
      }
    ];
  
    /**
   * @type {{ imageUrl: any; name: any; title: any; location: any; description: any; } | null}
   */
    let selectedCard = null;
  
    /**
   * @param {{ imageUrl: any; name: any; title: any; location: any; description: any; } | null} card
   */
    function showDetails(card) {
      selectedCard = card;
    }
  
    function closeDetails() {
      selectedCard = null;
    }
  </script>
  
  <!-- Grid Layout -->
  {#if selectedCard === null}
  <Nav/>
  <div class="container">
    <h1 class="tittle">Success Stories</h1>
    <div class="grid">
      
      {#each cards as card}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="card" on:click={() => showDetails(card)}>
          <img src={card.imageUrl} alt={card.name} />
          <div class="info">
            <p class="title">{card.description}</p>
            <button>See More</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <Contact/>
  {:else}
  <!-- Details Page -->
  <div class="details-container">
    <div class="left-section">
      <img src={selectedCard.imageUrl} alt={selectedCard.name} />
    </div>
    <div class="right-section">
      <h2>Achievement:</h2>
      <p>{selectedCard.achievement}</p>
      <h2>My Travel with Hope3:</h2>
      <p class="title">{selectedCard.title}</p>
      <p class="description">{selectedCard.titleTamil}</p>
      <button on:click={closeDetails}> Go Back</button>
    </div>
  </div>
  {/if}
<style>

    /* Container */
    .container {
      margin: 0 auto;
    }
  
    /* Grid Layout */
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3 images per row */
      gap: 90px;
      padding: 20px;
    }
  
    /* Card Styles */
    .card {
      background-color: white;
      /* border-radius: 8px; */
      box-shadow:  8px 4px 8px rgba(9, 8, 8, 0.1);
      text-align: center;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      width: 80%;
      margin: 30px;
      gap: 1rem;
    }
  
     .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    } 
  
    .card img {
      width: 100%;
      height: auto;
    }
  
    .card .info {
      padding: 15px;
    }
  
    .card h2 {
      font-size: 1.2rem;
      color: #333;
      margin: 10px 0;
    }
  
    .card .title {
      font-size: 1rem;
      color: #555;
      margin-bottom: 15px;
    }
  
    .card button {
      background-color: #e21f25;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-size: 0.9rem;
    }
  
    .card button:hover {
      background-color: #ef4444;
    }
  
    /* Details Page Styles */
    .details-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 20px;
    }
  
    .left-section {
      flex: 1;
      text-align: center;
    }
  
    .left-section img {
      max-width: 80%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .right-section {
      flex: 2;
      padding: 20px;
    }
  
    .right-section h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
    }
  
    .right-section .title {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 15px;
    }
  
    .right-section .description {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }
  
    .right-section button {
      background-color: #e74c3c;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }
  
    .right-section button:hover {
      background-color: #c0392b;
    }
   
  
    /* Responsive Design */
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(1, 1fr); 
      }
  
      .details-container {
        flex-direction: column;
      }
  
      .left-section img {
        width: 100%;
      }
  
      .right-section {
        padding: 10px;
      }
    }
    .tittle{
      background-color: rgb(236, 231, 231);
        font-size: 35px;
        font-weight: 500;
        color: rgb(104, 104, 102);
        padding-left: 1%;
        padding-right: 8%;
        font-family: Montserrat, sans-serif;
        margin: 0;
        text-align: center;
        
    }
  </style>
  