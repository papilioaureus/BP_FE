<!-- Home Page -->
<template>
  <div>
    <!-- Set a header tag with 3 buttons; Accounts that should lead to the /accounts page, Skull that should lead to the /skull page and Home Page one that leads to /-->
    <header>
      <nav>
        <a href="/accounts" class="headerElem">Accounts</a>
        <a href="/skull" class="headerElem">Skull</a>
        <a href="/" class="headerElem">Go To Home Page</a>
      </nav>
    </header>

    <h1 id="title" class="text">Welcome to IE Bank!</h1>
    <p id="shortDescription" class="text">Your Trusted Banking Partner</p>
    <img src="../assets/header-image.png" alt="IE Bank" width="800" height="300" />

    <nav id="buttonNav">
      <router-link to="/skull">
        <button type="button" class="btn btn-secondary">What's the Skull?</button>
      </router-link>

      <router-link to="/accounts">
        <button type="button" class="btn btn-secondary">Access Accounts</button>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
header {
  background-color: #b7e2fa;
  padding: 20px;
  text-align: center;
  z-index: 1;
}

.headerElem {
  padding: 20px;
  text-decoration: underline;
  font-size: 30px;
  color: rgb(39, 11, 89);
}

.headerElem:hover {
  background-color: #4242e8;
  color: rgb(18, 8, 48);
}

.text {
  text-align: center;
}

#title {
  margin-top: 40px;
  font-size: 50px;
}

img {
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}

#buttonNav {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  font-size: 15px;
  text-align: center;

  width: 220px;
  height: 50px;
}
</style>