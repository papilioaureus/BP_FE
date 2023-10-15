<template>
  <div id="app">
    <header class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <h1>IE Online Banking Services</h1>
    </header>
    <template>
      <div class="button-container">
        <router-link to="/skull" class="button">Skull</router-link>
        <router-link to="/accounts" class="button">Account Management</router-link>
      </div>
    </template>
    <section class="section">
      <h2>Our Mission Statement</h2>
      <p>Get Github and Azure to Cooperate For Once In Their Lives</p>
      <p>Create User Accounts</p>
    </section>
  </div>
</template>


<script>
export default {
  name: 'WelcomePage',
  data() {
    return {
      backgroundImage: require('../assets/images/header-image.png')
    }
  }
}
</script>


<style scoped>
body {
  font-family: Montserrat, sans-serif;
}


.menu {
  background-color: ##4b93d5;
  overflow: hidden;
}


.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}


.menu li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


.header {
  padding: 60px;
  text-align: center;
  color: white;
  background-image: "require(`./assets/images/header-image.png`)";
  background-size: cover;
}


.section {
  padding: 20px;
}


.section h2 {
  color: #1c5c99;
}


.button-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}


.button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: ##4b93d6;
  color: #ffffff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>