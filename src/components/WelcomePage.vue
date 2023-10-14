<template>
  <div id="app">
    <header>
      <h1>Welcome to IE Bank!</h1>
    </header>

    <main>
      <section id="services">
        <h2>Money Management Services</h2>
        <p>At IE Bank, we provide an array of sophisticated money management solutions tailored to cater to your individual or business needs. Our services ensure your finances are managed efficiently, aiming to augment your wealth and financial security.</p>
      </section>

      <nav id="navigation">
        <button @click="goToAccountsPage">Go to Accounts Page</button>
        <a href="https://example.com/skull.jpg" target="skull">View Skull</a>
      </nav>
    </main>

    <footer>
      <p>&copy; 2023 XYZ Bank - Your Trusted Fainancial Partner</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    goToAccountsPage() {
      this.$router.push('/AppAccounts');
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

header {
  margin-bottom: 50px;
}

#services {
  margin-bottom: 50px;
}

nav button {
  margin-right: 20px;
}
</style>
