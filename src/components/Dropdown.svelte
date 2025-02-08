<script>
    export let title = ""; // Parent will provide the title
    /**
   * @type {any[]}
   */
     export let items = []; // Parent will provide the dropdown items
  </script>
  
  <style>
    *{
      font-family: 'Montserrat', sans-serif;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
  
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 150px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
  
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-family: "Montserrat", sans-serif;
    }
  
    .dropdown-content a:hover {
      background-color: #f1f1f1;
      color: #3431e3;
    }
  
    .dropdown:hover .dropdown-content {
      display: block;
    }
  
    .dropdown-title {
      cursor: pointer;
      text-decoration: none;
      color: #7b7a7a;
      font-family: "Montserrat", sans-serif;
      font-size: 1rem;
    }
  
    .dropdown-title:hover {
      color: #3431e3;
    }
  </style>
  
  <div class="dropdown">
    <span class="dropdown-title">{title}</span>
    <div class="dropdown-content">
      {#each items as item}
        <a href={item.link}>{item.name}</a>
      {/each}
    </div>
  </div>
  