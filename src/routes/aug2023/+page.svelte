<script>
    // @ts-nocheck
    import Carousel from "../../components/Carousel.svelte";
    import Nav from "../../components/Nav.svelte";
  
    let showFullText = {};
  
    const eventDetails = [
        {
          id: 1,
          title: "Setting Up",
          subtitle:"'By Us For Us'",
          description: " The stage wa setted and geared up for the event with a touch of excitement and lots of fun All of us savored a delightful breakfast,while the aroma of freshly brewed coffee and the taste of idly and pongal filled the air",
          images: ["aug_setup_1.png", "aug_setup_2.png", "aug_setup_3.png"],
        },
        {
          id: 2,
          title: "Welcome Note",
          subtitle:"'Setting the stage'",
          description: "The introduction by meenakshi anna captivated all of them by eloquently elucidating the paramount significance of education, painting it as the transformative cornerstone of progress and the key to unlocking vast opportunities Meenakshi Anna's introduction captivated everyone by eloquently explaining the paramount significance of education, portraying it as the transformative cornerstone of progress and the key to unlocking vast opportunities.",
          images: ["aug_welcome_note.png", "aug_welcome_note_1.png"],
        },
        {
          id: 3,
          title: "Knowing each other session",
          subtitle:"'Getting to know each other'",
          description: "Getting to know one another was a playful and unique experience as we teamed up based on our shared birth months, forging connections and laughter in this delightful, birth-month-themed game. Forming connections and sharing laughter through a delightful, birth-month-themed game made getting to know each other a playful and distinctive experience as we grouped ourselves based on our common birth months.",
          images: ["aug_introduction.png", "aug_introduction_1.png"],
        },
        {
          id: 4,
          title: "Oral presentation",
          subtitle:"'Internationalisation of Rupee'",
          description: "next was the oral presentation in which Harini dived deeply into the intricate topic of the internationalization of the Indian rupee, unraveling its economic significance and the potential global implications. With a wealth of data , all of us were left with a profound understanding of India's currency on the global stage. Following that was the oral presentation by Harini, delving deeply into the intricate subject of the internationalization of the Indian rupee, unveiling its economic significance and potential global implications. With a wealth of data, everyone gained a profound understanding of India's currency in the global arena.",
          images: ["aug_oral_presentation.png", "aug_oral_presentation_1.png", "aug_oral_presentation_2.png"],
        },
        {
          id: 5,
          title: "Team Buliding Game",
          subtitle:"'Dreamwork Teamwork'",
          description: "gokul and alumni team organised a problem solving game in which random tasks and hints were given. All the students were very interestingly decoding all the hints provided by their anna's and akka's, even palani anna and meenakshi anna joined their teams and started solving. Everything was very interesting and they had a great take away from the game. Team spirit, problem solving skills, leadership skills, communication skills, out of the box analyzing, litsening skills, etc were the learnings of tge game.",
          images: ["aug_team_build_1.png", "aug_team_build_2.png", "aug_team_build_3.png"],
        },
        {
          id: 6,
          title: "Paper Rocket Event",
          subtitle:"'Finding yourself'",
          description: "Gokul led the next event, focusing on the theme 'Things end, but memories last forever.' Participants were given a piece of paper to create paper rockets, and we signed them before they were collected and preserved for the next event, serving as a timeless reminder of our shared experiences.",
          images: ["aug_paper_rocket_1.png", "aug_paper_rocket_2.png"],
        },
        {
          id: 7,
          title: "Alumni Talk",
          subtitle:"'Alumni Gathering'",
          description: "Palani anna and meenakshi anna initiated discussions with alumni of hope3 to intimately understand the future plans, fostering a deeper connection and aligning the organization's goals with their aspirations 'Palani Anna and Meenakshi Anna commenced discussions with Hope3 alumni, aiming to gain an intimate understanding of their future plans. This initiative aimed to foster a deeper connection and align the organization's goals with the aspirations of the alumni.",
          images: ["aug_aluminis_meet.png", "aug_aluminis_meet_1.png"],
        },
        {
          id: 8,
          title: "Arjava Team Talk",
          subtitle:"'Arjava Team '",
          description: "In a touching moment of recognition, the unsung heroes of Team Arjava, who had tirelessly worked behind the scenes for the event's grand success, were honored and invited to the stage to share their thoughts. Their heartfelt words conveyed that this event had been nothing short of spectacular, a testament to their dedication and collective effort During a heartfelt acknowledgment, the often unrecognized heroes from Team Arjava, who had worked tirelessly behind the scenes for the event's remarkable success, were honored. They were invited to the stage to share their thoughts, expressing how the event had truly been spectacular, showcasing their dedication and collective effort.",
          images: ["aug_arjava_meet.png", "aug_arjava_meet_1.png", "aug_arjava_meet_2.png"],
        },
        {
          id: 9,
          title: "Donor interaction",
          subtitle:"'Meeting Donors'",
          description: "every students were very much engaged with all the donors, had a variety of questions to be asked from both the sides, donors were curious about students though process and they were amzed by their astonishing questions. Questions regarding pollution, AI, life experiences and what not, every field was covered by their questions. Students learned to get a broader perspective from a set of people(donors) over different countries.Every student was highly engaged with all the donors, having a variety of questions from both sides. The donors were curious about the students' thought process and were amazed by their astonishing questions. Questions on pollution, AI, life experiences, and various other topics were raised, covering a wide array of fields. Students learned to gain a broader perspective from a diverse group of people (donors) from different countries.",
          images: ["aug_donor_intraction.png", "aug_donor_intraction_1.png", "aug_donor_intraction_2.png"],
        },
        {
          id: 10,
          title: "Lunch",
          subtitle:"'Lunch Break'",
          description: "When auditory nourishment is in short supply, a modest culinary offering can fill the void, beckoning us to savor the flavors and satisfy our appetites. As lunchtime arrived, the beautiful takeaway from our students to one another was the act of selflessly serving with love, a reminder of the powerful connections and bonds that can be forged through simple acts of kindness.When there's a lack of auditory stimulation, a simple culinary gesture can substitute, inviting us to relish the tastes and fulfill our hunger. As lunchtime approached, the heartwarming gift exchanged among our students was the selfless act of serving with love, reminding us of the impactful connections and relationships that can arise from acts of kindness.",
          images: ["aug_lunch.png", "aug_lunch_1.png"],
        },
        {
          id: 11,
          title: "Culturals",
          subtitle:"'Right Brain Fun'",
          description: "A moment to be cherished, energised, everyone of us surrendered to the irresistible rhythm, allowing our legs to flow with the music's pulse. We danced with the uninhibited grace of peacocks, utterly absorbed in the moment, lost in the music, and carried away by the joy that poured from our hearts. The songs were chose by our disco masters Harini, Chakravarthy ,Prabha & dance led by Prabha, bharkavi, meenakshi anna, shiva anna, palani anna and everyone joined the troop.",
          images: ["aug_culture_1.png", "aug_culture_2.png", "aug_culture_3.png"],
        },
        {
          id: 12,
          title: "Personality Development",
          subtitle:"'Gender equality'",
          description: "In the backdrop of a captivating setting, the event on personality development and leadership unfurled as a dynamic platform for growth and empowerment which was led by Hope3 alumins Preethi and Rajalakshmi",
          images: ["aug_personality_1.png", "aug_personality_2.png", "aug_personality_3.png"],
        },
        {
          id: 13,
          title: "Exercise",
          subtitle:"'Exercising through games'",
          description: "Meenakshi anna kickstarted the day with invigorating workouts to boost energy levels , enhance physical health, to cultivate inner peace and mindfulness through meditation",
          images: ["aug_exercies_1.png", "aug_exercies_2.png"],
        },
        {
          id: 14,
          title: "Poster Presentation",
          subtitle:"'Student Conference'",
          description: "Students showcased their 6-month educational journey through vibrant and informative poster presentations, providing a vivid snapshot of the knowledge, skills, and insights they have acquired during this period. These displays illuminated the fruits of their diligent studies, offering a visual feast of intellectual growth and achievement.",
          images: ["aug_ppt_1.png","aug_ppt_2.png","aug_ppt_3.png","aug_ppt_4.png","aug_ppt_5.png"],
        },
        {
          id: 15,
          title: "Natchiyappan speech",
          subtitle:"'Natchiyappan's Talk'",
          description: "Nachiappan, who is all-set to pursue his higher education abroad, offered straightforward and informative guidance on the pathway to foreign studies. He demystified the process, sharing valuable insights and advice for those with aspirations to pursue education abroadNachiappan, fully prepared to pursue higher education abroad, provided clear and informative guidance on the journey toward foreign studies. He simplified the process, offering valuable insights and advice for individuals aspiring to pursue education overseas.",
          images: ["aug_nachiyappan_speech.png", "aug_nachiyappan_speech_1.png"],
        },
        {
            id: 16,
            title: "Rufina mam speech",
            subtitle: "Rufina's Speech", 
            description: "The central message conveyed by Rufina Ma'am was a timeless one: 'Always heed and respect our elders,' emphasizing the enduring importance of listening and learning from those with greater experience and wisdom. Rufina Ma'am delivered the motivational speech. Mam's central message was timeless: 'Always heed and respect our elders,' emphasizing the enduring importance of listening and learning from individuals with greater experience and wisdom.",
            images: ["aug_ruffina_mam_speech.png", "aug_ruffina_mam_speech_1.png"]
            },

        {
          id: 17,
          title: "Arivarasan Speech",
          subtitle:"'Arivarasan's Address'",
          description: "As the name 'Arivarasan' suggests, he graced the occasion by sharing a wealth of knowledge and intriguing facts, captivating the eager students who were always eager to learn from him. His presence and insights created a memorable educational experience, leaving an indelible mark on all those fortunate to be in attendance Arivarasan Anna enriched the occasion by imparting a wealth of knowledge and intriguing facts, captivating the enthusiastic students who were always eager to learn from him. His presence and insights crafted a memorable educational experience, leaving an indelible mark on all those fortunate to attend",
          images: ["aug_arivarasan_speech.png", "aug_arivarasan_speech_1.png"],
        },
        {
          id: 18,
          title: "Award Ceremony",
          subtitle:"'Encouraging the best'",
          description: "At the prize distribution for the winners, we underscored that participation is more than just victory; it's about recognizing and celebrating the spirit of striving, improving, and discovering one's potential. Each award symbolized not only an achievement but also the invaluable journey of self-discovery and growth that every participant embarked upon",
          images: ["aug_award_1.png", "aug_award_2.png","aug_award_3.png","aug_award_4.png","aug_award_5.png","aug_award_6.png","aug_award_7.png","aug_award_8.png","aug_award_9.png","aug_award_10.png","aug_award_11.png","aug_award_12.png","aug_award_13.png","aug_award_14.png","aug_award_15.png"],
        },
        {
          id: 19,
          title: "Feedback session with a cup of tea",
          subtitle:"'Tea and Feedback Session'",
          description: "The feedback session delved into the intricacies of the event, exploring areas for potential improvement and understanding what aspects had resonated most with the students. Conversations also revolved around planning the next event, refining poster presentations, and enhancing the dissemination of knowledge and efforts, all while enjoying a cup of tea and snacks, fostering a collaborative atmosphere of learning During the feedback session, there was an exploration of the event's intricacies, focusing on potential areas for improvement and identifying the aspects that resonated most with the students. Discussions also centered around planning the next event, refining poster presentations, and improving the dissemination of knowledge and efforts. All of this occurred while enjoying a cup of tea and snacks, fostering a collaborative atmosphere conducive to learning.",
          images: ["aug_feed_back_session.png", "aug_feed_back_session_1.png", "aug_feed_back_session_2.png"],
        },
        {
          id: 20,
          title: "Conclusion And Goodbyes",
          subtitle:"'Bye Bye'",
          description: "In a heartfelt moment of gratitude, 'thank you' felt insufficient to convey the depth of our emotions; a sense of fulfillment enveloped us after the two-day event, leaving us already missing all those who had contributed to its success. Karthick Sir extended thank-you notes to all the generous hearts who had played a direct or indirect role in the event's triumph, recognizing that a single 'thank you' could not adequately express our profound appreciation",
          images: ["aug_thanks_note_1.png", "aug_thanks_note_2.png", "aug_thanks_note_3.png"],
        },
        
      ];
    // Toggle the visibility of the full description for an event
    function toggleReadMore(id) {
      showFullText[id] = !showFullText[id];
    }
  </script>
  
  <Nav />
  <section class="events-page">
    <h1>Event 2023</h1>
    <div class="events-grid">
      {#each eventDetails as event}
        <div class="event-card">
          <!-- Carousel -->
          <Carousel images={event.images} class="event-carousel" />
  
          <!-- Title -->
          <h3>{event.title}</h3>
          <h4>{event.subtitle}</h4>
  
          <!-- Description with toggle -->
          <p>
            {#if showFullText[event.id]}
              {event.description}
            {:else}
              {event.description.substring(0, 100)}...
            {/if}
            <a href="#" on:click|preventDefault={() => toggleReadMore(event.id)}>
              {showFullText[event.id] ? "Read Less" : "Read More"}
            </a>
          </p>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .event-card {
      background: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      overflow: hidden;
      
      max-width: 280px;
      margin: 0 auto;
    }
  
    .event-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      /* border-top-left-radius: 10px;
      border-top-right-radius: 10px; */
    }
   
  
    .event-card p {
      padding: 0.8rem;
      font-size: 0.9rem;
      color: #555;
      text-align: left;
      font-family: 'Montserrat', sans-serif;
      line-height: 1.7;
    }
  
    .event-card a {
    display: block;  /* Makes the link take up full width */
    text-align: left; /* Aligns the text to the left */
    color: red;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    padding: 0.8rem; /* Ensures consistent spacing */
}

  
    .event-card a:hover {
      text-decoration: underline;
    }
  
    .events-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Define three columns per row */
      gap: 1.5rem;
      margin: 0 auto;
      max-width: 1200px;
    }
  
    .events-page h1 {
      text-align: center;
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
      color: #0078d4;
      background-color: rgba(184, 237, 237, 0.915);
      padding: 1rem;
      border-radius: 5px;
    }
  
    /* .next-button {
      text-align: center;
      margin: 1.5rem 0;
    }
   */
    /* .next-button button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      background-color: #0078d4;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    } */
  
    
    @media (max-width: 768px) {
    .events-grid {
      grid-template-columns: 1fr; 
    }
  }
  
  </style>
  