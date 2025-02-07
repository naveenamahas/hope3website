<script>
  import Dropdown from "./Dropdown.svelte";
  // @ts-ignore
  import { browser } from "$app/environment";

  const dropdownItems = [
    { name: "Founders", link: "/hope3website/Founder" },
    { name: "Mission/Vision", link: "/hope3website/Mission" },
    { name: "Financials", link: "/hope3website/Finance" },
    { name: "Admissions", link: "/hope3website/Admission" },
  ];

  let currentPath = browser ? window.location.pathname : '/hope3website/';
  let showMobileMenu = false;
</script>

<header>
  <div class="header-container">
    <button class="mobile-menu-toggle" on:click={() => (showMobileMenu = !showMobileMenu)}>
      <img src="/hope3website/hamburger_menu.png" alt="Menu icon" />
    </button>

    <img src="/hope3website/logo.png" alt="Logo" />
    
    <nav class="{showMobileMenu ? 'mobile-visible' : ''}">
      <a href="/hope3website/" class="{currentPath === '/hope3website/' ? 'active' : ''}">Home</a>
      <Dropdown title="Who We Are" items={dropdownItems} />
      <a href="/hope3website/Ourpeople" class="{currentPath === '/hope3website/Ourpeople' ? 'active' : ''}">Our People</a>
      <a href="/hope3website/Success" class="{currentPath === '/hope3website/Success' ? 'active' : ''}">Success Stories</a>
      <a href="/hope3website/getinvoce" class="{currentPath === '/hope3website/getinvoce' ? 'active' : ''}">Get Involved</a>
      <a href="/hope3website/Event" class="{currentPath === '/hope3website/Event' ? 'active' : ''}">Event</a>
    </nav>

    <div class="buttons">
      <a href="https://www.hope3.org/donate.html" class="button donate">Donate</a>
      <a href="https://www.hope3.org/apply2024.html" class="button apply">Apply</a>
    </div>
  </div>
</header>

<style>
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    left: 2px;
    top: 2rem;
    z-index: 1000;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav.mobile-visible {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100px;
    left: 0;
    background-color: white;
    width: 100%;
    padding: 2rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
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

  nav a.active {
    color: #3431e3;
    font-weight: bold;
    text-decoration: underline;
  }

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

  @media (max-width: 768px) {
    .mobile-menu-toggle {
      display: block;
    }

    nav {
      display: none;
    }

    nav.mobile-visible {
      display: flex;
    }

    .buttons {
      flex-direction: column;
      gap: 0.5rem;
      margin-left: 1%;
    }
  }

  @media (min-width: 769px) {
    .mobile-menu-toggle {
      display: none;
    }

    nav {
      display: flex;
    }

    .buttons {
      flex-direction: row;
      gap: 1rem;
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
