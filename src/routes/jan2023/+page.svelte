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
        description: " The evening prior to the event, our enthusiastic students and volunteers came together with great excitement to construct the imaginative poster booths and to set up the stage. The entire ambiance was brimming with humor, merriment, and a sense of togetherness, as everyone worked together to set up for the upcoming family function..",
        images: ["setup.jpg", "setup_1.jpg", "setup_2.jpg"],
      },
      {
        id: 2,
        title: "Welcome Note",
        subtitle:"'Setting the stage'",
        description: "During the event, Mr.Shiva introduced the Foundation and Varsity, discussing their mission, vision, and future goals. Mr.Meenakshi highlighted the significance of interactive learning by emphasizing the value of education ,he engaged with the audience via online to facilitate a more enriching educational experience.",
        images: ["welcome_note.jpg", "welcome_note_1.jpg", "welcome_note_2.jpg"],
      },
      {
        id: 3,
        title: "A Quick Introduction",
        subtitle:"'Getting to know each other'",
        description: "As part of an ice breaker session, the stage was given to our students and volunteers to introduce themselves, allowing them to share their dreams and goals. with the audience. This provided an excellent opportunity for the new students to get to know their peers and allowed everyone to have a chance to speak on the stage.",
        images: ["one_min_intro.jpg", "one_min_intro1.jpg", "one_min_intro2.jpg"],
      },
      {
        id: 4,
        title: "Sharing Life Stories",
        subtitle:"'Connection through authentic sharing'",
        description: "The late-night session provided a safe and non-judgmental space for our students to open up and share their life experiences, both positive and negative, and the lessons they have learned along the way. This session created a strong sense of togetherness and belonging, reassuring our students that they were not alone in their journey through life. The connections formed during this session radiated warmth and brought us all closer together .",
        images: ["storyshare.jpg", "storyshare_1.jpg", "storyshare_2.jpg"],
      },
      {
        id: 5,
        title: "The Tallest Tower",
        subtitle:"'Dreamwork Teamwork'",
        description: "The students were divided into teams and assigned the challenge of building the tallest freestanding tower using a set of provided components such as rolls of newspaper, tape, ropes, wires, clips, and plastic cups. Despite an initial lack of direction, the students worked collaboratively to generate unique and innovative ideas, leading to the construction of impressively tall towers. The competition culminated in a lively display on the stage, where the towers were measured and evaluated. This task fostered a sense of teamwork, leadership, and camaraderie among the participants, creating a vibrant atmosphere of excitement, fun, and friendly competition.",
        images: ["talltower.jpg", "talltower_1.jpg", "talltower_2.jpg"],
      },
      {
        id: 6,
        title: "Treasure Hunt",
        subtitle:"'Finding yourself'",
        description: "Ms.Balsaranya and her team had hidden clues throughout the event venue, and the students were divided into four groups. A single group was chosen to start, and each member was given a clue that led to the next one. The clues ultimately led to the discovery of a treasure, which turned out to be a mirror. This symbolized that the true treasure was the students themselves. This scavenger hunt activity encouraged teamwork, problem-solving, and self-reflection, making it a valuable and memorable experience for all involved.",
        images: ["treasure_hunt_1.png", "treasure_hunt_2.png", "treasure_hunt_3.png"],
      },
      {
        id: 7,
        title: "Introduction To Robotics",
        subtitle:"'Practical Robotics'",
        description: "During the event, our students Ananth, Pooja, and Irfana delivered a general presentation on the fundamental aspects of robotics, including the definition of a robot and its basic components. They also provided a practical example of building a 'Line Follower Robot' and stressed the importance of understanding each component before integrating them into the final product. The audience was highly engaged, and the students received a resounding round of applause for their live demonstration of the Line Follower Robot. Overall, their presentation was informative and captivating, showcasing their knowledge and passion for the field of robotics.",
        images: ["robotics.jpg", "robotics_1.png", "robotics_2.png"],
      },
      {
        id: 8,
        title: "How To Develop A Product",
        subtitle:"'Build Measure Learn'",
        description: "Shamyuktha led an engaging discussion that involved the entire audience, focusing on the iterative process of developing a viable product and bringing it to market. She emphasized the importance of adopting a lean strategy with which involves building a minimum viable product and then measuring and learning from the feedback to refine and improve it. Real-life scenarios were presented to illustrate this approach. Additionally, she discussed the process of identifying and targeting specific customer segments, beginning with early adopters and using feedback to iterate and pivot the design to appeal to a wider market. This interactive session was highly informative and captivating, leaving the audience engrossed for the entire hour.",
        images: ["productdev.jpg", "productdev_1.jpg", "productdev_2.jpg"],
      },
      {
        id: 9,
        title: "Hope3 Varsity App",
        subtitle:"'Developed & Built By Us for Us'",
        description: "Sornam and Shamyuktha distributed a pamphlet that featured a mockup of the initial iteration of the Hope3 Varsity App.The app was designed to help the administration, course facilitators, and students keep track of their sessions, access Zoom links, and review recordings. It would also aid recordings. in monitoring attendance and student participation in the Varsity programs. During the session, both presenters encouraged the students, administrators, and facilitators to >explore the app and provide feedback on any missing aspects. The audience was highly engaged, with many questions and discussions, making it a lively and informative session.",
        images: ["hope3_varsity.jpg", "hope3_varsity_1.jpg", "hope3_varsity_2.jpg"],
      },
      {
        id: 10,
        title: "Website",
        subtitle:"'Ingredients of Web Development'",
        description: "During the discussion, Harisankar, Pavithra, Nithyasri, and Dhivya explained various aspects of web development in a clear and easy-to-understand manner. One of their analogies, which compared HTML to the body and CSS to make-up, resonated with everyone who was present",
        images: ["website.png", "website_1.jpg", "website_2.png"],
      },
      {
        id: 11,
        title: "Culturals",
        subtitle:"'Right Brain Fun'",
        description: "Our lives are enriched by culture, which serves as a vital element that brings harmony. The students organized an entertaining event, which included games such as Anthakshari, Dumb Charades, and dance performances. The ambiance was filled with joviality, cheers, and jubilation. The students were able to unwind and alleviate their stress during the event.",
        images: ["cultural.png", "cultural_1.jpg", "cultural_2.jpg"],
      },
      {
        id: 12,
        title: "Debate",
        subtitle:"'Gender equality'",
        description: "Mr. Thirumeni moderated a spontaneous and energetic debate on the topic of 'Girls vs Boys', with teams composed of members from both genders. This engaging session provided an opportunity for both sides to gain insights into the challenges and capabilities of each gender, and emphasized the significance of valuing, understanding, and empathizing with one another. The time passed by rapidly during this enjoyable event.",
        images: ["debate.jpg", "debate_1.png", "debate_2.jpg"],
      },
      {
        id: 13,
        title: "Game",
        subtitle:"'Exercising through games'",
        description: "On the second day of the event, Mr. Palani made a surprise appearance in the morning, which was heartwarming for many students. Despite facing difficult circumstances, his affection for the students inspired him to attend the event. The session began with some stretching exercises, followed by a spirited game of dodgeball. The event concluded with the traditional game of 'Uriyadi', which dates back to ancient times. Amidst some chaos and confusion, the players were directed to break a hanging pot as the grand finale of the session.",
        images: ["game.png", "game_1.png", "game_2.jpg"],
      },
      {
        id: 14,
        title: "Poster Presentation",
        subtitle:"'Student Conference'",
        description: "At the event, our students showcased 18 technical posters on a wide range of topics, including Purchasing Power Parity, Organic Farming, Batteries, Communication between the Government and Citizens, Briggs Myers Classification for Personality Assessment, RSA Algorithm, Dijkstra's Algorithm, Covid19 Detection using AI ML, and a collection of posters on app development and AWS cloud programming. Furthermore, the oral presenters had their own poster presentations. During this two-and-a-half-hour session, students engaged with one another across various fields, exchanging knowledge and ideas. The pleasure of comprehending and sharing unfamiliar subjects was inseparable",
        images: ["poster_1.png"],
      },
      {
        id: 15,
        title: "Game Analysis",
        subtitle:"'Game dynamics through computer simulation",
        description: "Using Python, Ganesh developed a simulation to analyze and comprehend the Indian game of Paramapatham, also known as Snake & Ladders. He calculated the number of steps required for a player to complete the game, starting with the basic board without any snakes or ladders. He then added a single snake, a single ladder, and the complete game, observing how the distribution changed. Additionally, he explored inventive variations of the game by introducing a die that could produce negative numbers and other modifications that broke the linearity of the game. Overall, Ganesh's work demonstrated the remarkable potential for creativity and >analysis in game design using computer simulations.",
        images: ["game_analyis.jpg", "game_analyis_1.jpg", "game_analyis_2.jpg"],
      },
      {
        id: 16,
        title: "App Development Through Flutter",
        subtitle:"'An overview of mobile app development'",
        description: "Flutter, the open-source framework developed by Google, is widely used for app development, and Pitchumani expertly explained the 'Why? What? How?' of this framework in simple terms that impressed everyone. His approach to mobile app development involved visualizing an app as a network of screens, each programmed to facilitate interaction between a user and a database, possibly located in the cloud. This perspective was similar to a director breaking down a movie for the audience, and the live demonstrations and student questions made the presentation even more engaging.",
        images: ["application.jpg", "application_1.jpg", "application_2.jpg"],
      },
      {
        id: 17,
        title: "Communicate With Our Government",
        subtitle:"'Engaging with Democracy'",
        description: "Gokul shed light on the finer aspects of the Right to Information (RTI) in India, where every citizen has the right to access information from the government. He explained which data is accessible and which is not, and how an ordinary citizen can approach the government to obtain the necessary information. Gokul also directed the audience to relevant websites and mobile apps for establishing communication with the government",
        images: ["communication.jpg", "communication_1.jpg", "communication_2.jpg"],
      },
      {
        id: 18,
        title: "Award Ceremony",
        subtitle:"'Encouraging the best'",
        description: "Our jury went to every poster and identified the incredible presenters, thinkers, and explorers. It was a tough competition and the new buds of Hope3 cracked the first prize. The second prize was jointly won by the Robotics team and the Product development team.The third prize was won by the Soft skills team and the RSA Algorithm team. The Dijikstras Algorithm team, AWS team and Flutter team all received an excellence award. Everyone else was appreciated for their participation. The posters were given to the participants as a souvenir and the recordings of all the poster presentations will be shared online on our channel. .",
        images: ["awards.jpg", "awards_1.jpg", "awards_2.jpg"],
      },
      {
        id: 19,
        title: "Time Capsule",
        subtitle:"'Travelling back in time'",
        description: "We assembled a collection of meaningful items given by each member to create a time capsule that serves as arepresentation of the current era. This capsule was carefully sealed and marked with the date of January 2023, with the intention of opening and reflecting upon its contents in January 2033",
        images: ["thanksnote.png", "thanksnote_1.png"],
      },
      {
        id: 20,
        title: "Conclusion And Goodbyes",
        subtitle:"'Bye Bye'",
        description: "All of our esteemed senior members, including Sridhar, Vimal, Raghul, Jijith, Pavithra, Palani, Ganesh Moorthy, Govindaraman, Iyappan, Amrish, Mani, Aarthi, Preethi, Gokul, Kalaiarasan, Alagesh, Prabha, Ganesh, Madhuri, Keerthana, Balaji, Bala Saranya, Thirumeni, Meena Manivannan, Aarumugam, Shiva, and Karthick came together to extend their best wishes to all of our students for their future endeavours. They also expressed their appreciation and gratitude to the hardworking team that made the event a Grand Success...! As we bid farewell with a sense of gratitude and longing to be together again, our hearts were filled with emotion.",
        images: ["speaker.png", "speaker_1.jpg", "speaker_2.jpg"],
      },
      
    ];
  // Toggle the visibility of the full description for an event
 function toggleReadMore(id) {
    showFullText = { ...showFullText, [id]: !showFullText[id] };
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
    line-height: 1.7;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
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

  .next-button button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .next-button button:hover {
    background-color: #005a9e;
  } */
  @media (max-width: 768px) {
  .events-grid {
    grid-template-columns: 1fr; /* Single column for mobile */
  }
}

</style>
