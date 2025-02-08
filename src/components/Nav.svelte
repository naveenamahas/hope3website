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
      * {
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
  }

  .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 1rem;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: relative;
  }

  .mobile-menu-toggle {
      display: block;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
  }

  .nav-hope-logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      max-width: 140px;
  }

  nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-grow: 1;
  }

  nav.mobile-visible {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      position: absolute;
      top: 60px;
      left: 0;
      background-color: white;
      width: 100%;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 999;
      overflow-x: hidden;
  }

  nav a {
      text-decoration: none;
      color: #7b7a7a;
      font-size: 1rem;
      font-weight: bold;
  }

  nav a:hover {
      color: #0078bd !important;
  }

  nav a.active {
      color: #0078bd !important;
      font-weight: bolder;
}

  .buttons {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
  }

  .button {
      padding: 0.4rem 1rem;
      border: none;
      border-radius: 20px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
  }

  .button.apply {
    background-color: #fcbe04;
    border-color: #ffc107;
      color: white;
      order: 1;
      
  }

  .button.donate {
      background-color: orangered;
      color: white;
      order: 2;
  }

  .button.apply:hover {
    background-color: #e0a800;
    border-color: #d39e00;
    color: black;
  }

  .button.donate:hover {
      background-color: #e61f2f;
  }

  @media (max-width: 768px) {
      .header-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
      }
      .mobile-menu-toggle {
          position: relative;
          left: 0;
          top: auto;
          transform: none;
      }
      .nav-hope-logo {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
      }
      .buttons {
          position: relative;
          right: 0;
          top: auto;
          transform: none;
          flex-direction: column;
         
      }
      nav {
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          display: none;
          width: 100%;
      }
      nav.mobile-visible {
          display: flex;
      }
  }

  @media (min-width: 769px) {
      .mobile-menu-toggle {
          display: none;
      }
      .header-container {
          flex-direction: row;
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
          font-size: 0.6rem;
          padding: 0.4rem 0.8rem;
      }
  }

  /* @media(min-width:1200px) {
      .navbutton {
          margin-top: 2.9em !important;
      }
  }

  .dropdown:hover .dropdown-menu {
      display: block;
  }

  @media(max-width: 340px) {
      .nav-hope-logo {
          transform: translateX(-50%);
          position: relative;
      }
  }

  @media(max-width: 320px) {
      #nav-bar-button {
          position: relative !important;
          top: 7px !important;
          font-size: .5rem;
      }
  } */

</style>
