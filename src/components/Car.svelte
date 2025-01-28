<script>
    export let name;
    export let title;
    export let location;
    export let description;
    export let imageUrl;
    export let onClick;
  </script>
  
  <div class="card">
    <img src={imageUrl} alt={name} />
    <div class="card-content">
      <h2>{name}</h2>
      <p>{title}, {location}</p>
      <p>{description}</p>
      <button on:click={onClick}>See More</button>
    </div>
  </div>
  
  <style>
    .card {
        border: 1px solid rgb(219, 214, 214);
    width: 83% !important;
    margin: auto;
    height: 100%;
    color: gray;
    margin-left: 1%;
    margin-right: 1%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    img {
      width: 100%;
      height: auto;
    }
    .card-content {
      padding: 2px;
    }
    button {
      background-color: #e74c3c;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #c0392b;
    }
  </style>
  