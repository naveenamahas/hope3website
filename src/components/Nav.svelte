<script>
  import Dropdown from "./Dropdown.svelte";
  // @ts-ignore
  import { browser } from "$app/environment"; // Import browser constant

  const dropdownItems = [
    { name: "Founders", link: "/Founder" },
    { name: "Mission/Vision", link: "/Mission" },
    { name: "Financials", link: "/Finance" },
    { name: "Admissions", link: "/Admission" },
  ];

  let currentPath = browser ? window.location.pathname : '/';
  let showMobileMenu = false;
</script>

<header>
  <div class="header-container">
    <button class="mobile-menu-toggle" on:click={() => (showMobileMenu = !showMobileMenu)}>
      <img src="hamburger_menu.png" alt="Menu icon" />
    </button>
    
    <img src="logo.png" alt="Logo" />
    <nav class="{showMobileMenu ? 'mobile-visible' : ''}">
      <!-- Updated Links with /hope3website -->
      <a href="/hope3website/" class="{currentPath === '/hope3website/' ? 'active' : ''}">Home</a>
      <Dropdown title="Who We Are" items={dropdownItems} />
      <a href="/Ourpeople" class="{currentPath === '/Ourpeople' ? 'active' : ''}">Our People</a>
      <a href="/Success" class="{currentPath === '/Success' ? 'active' : ''}">Success Stories</a>
      <a href="/getinvoce" class="{currentPath === '/getinvoce' ? 'active' : ''}">Get Involved</a>
      <a href="/Event" class="{currentPath === '/Event' ? 'active' : ''}">Event</a>
    </nav>
    <div class="buttons">
      <a href="https://www.hope3.org/donate.html" class="button donate">Donate</a>
      <a href="https://www.hope3.org/apply2024.html" class="button apply">Apply</a>
    </div>
  </div>
</header>

<style>
  /* Header container */
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Mobile menu toggle icon */
  .mobile-menu-toggle {
    display: none; /* Hide by default on desktop */
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    left: 2px; /* Align to the left side */
    top: 2rem; /* Center vertically */
    z-index: 1000; /* Ensure it appears above other elements */
  }

  /* Navigation menu */
  nav {
    display: flex;
    gap: 1rem;
  }

  nav.mobile-visible {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100px; /* Adjust based on header height */
    left: 0;
    background-color: white;
    width: 100%; /* Full width for dropdown */
    padding: 2rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999; /* Ensure it's above other elements */
  }

  nav a {
    text-decoration: none;
    color: #7b7a7a;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }

  nav a:hover {
    color: #3431e3;
  }

  /* Active link styles */
  nav a.active {
    color: #3431e3;
    font-weight: bold;
    text-decoration: underline;
  }

  /* Buttons */
  .buttons {
    display: flex;
    gap: 1rem;
  }

  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    cursor: pointer; 
  }

  .button.apply {
    background-color: #ebd40a;
    color: white;
  }

  .button.donate {
    background-color: orangered;
    color: white;
  }

  .button.apply:hover {
    background-color: #e8cd60;
  }

  .button.donate:hover {
    background-color: #e61f2f;
  }

  /* Mobile menu toggle icon */
  @media (max-width: 768px) {
    .mobile-menu-toggle {
      display: block; /* Show on mobile */
    }
  }

  /* Navigation menu */
  nav {
    display: flex;
    gap: 1rem;
  }

  /* Show mobile menu when toggled */
  nav.mobile-visible {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100px; /* Adjust based on header height */
    left: 0;
    background-color: white;
    width: 100%; /* Full width for dropdown */
    padding: 2rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999; /* Ensure it's above other elements */
  }

  /* Make sure the regular menu is hidden on mobile */
  @media (max-width: 768px) {
    nav {
      display: none; /* Hide navigation links by default on mobile */
    }

    .buttons {
      flex-direction: column; /* Stack buttons vertically */
      gap: 0.5rem; /* Adjust spacing */
      margin-left: 1%;
    }
  }

  /* Default behavior for large screens (desktop) */
  @media (min-width: 769px) {
    .mobile-menu-toggle {
      display: none; /* Hide hamburger menu on desktop */
    }

    nav {
      display: flex; /* Show the nav on desktop */
    }

    .buttons {
      flex-direction: row; /* Display buttons horizontally */
      gap: 1rem; /* Default spacing */
    }
  }

  @media (max-width: 480px) {
    nav a {
      font-size: 0.9rem;
    }

    .button {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }
</style>
