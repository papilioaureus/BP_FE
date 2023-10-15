<!-- Main Page for Skull and Account Navigation -->
<template>
  <section>
    <!-- Navigation Bar -->
    <div id="navigationBar" class="navContainer">
      <button @click="navigateTo('/accounts')">Accounts</button>
      <button @click="navigateTo('/skull')">Skull</button>
      <button @click="navigateTo('/')">Home</button>
    </div>

    <!-- Main Content -->
    <main>
      <h1>Welcome to IE Bank!</h1>
      <subtitle>Your Reliable Banking Ally</subtitle>
      <figure>
        <img src="../assets/header-image.png" alt="IE Bank Visual" />
      </figure>
      <div id="actionButtons">
        <router-link to="/skull">
          <button>What is the Skull?</button>
        </router-link>
        <router-link to="/accounts">
          <button>View Accounts</button>
        </router-link>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
/* Navigation Styling */
.navContainer {
  background: #b7e2f3;
  text-align: center;
  padding: 15px;
}

.navContainer button {
  margin: 15px;
  font-size: 25px;
  color: #270b59;
  cursor: pointer;
}

/* Main Content Styling */
main {
  text-align: center;
}

h1 {
  margin-top: 30px;
  font-size: 55px;
}

subtitle {
  display: block;
  font-size: 20px;
  margin-bottom: 30px;
}

figure img {
  width: 810px;
  height: 310px;
  margin: 40px auto;
  display: block;
}

#actionButtons {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

#actionButtons button {
  padding: 15px;
  width: 230px;
  height: 60px;
  font-size: 18px;
  cursor: pointer;
}
</style>
