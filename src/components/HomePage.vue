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
    <img src="../assets/header-image.png" alt="IE Bank" width="300" height="300" />

    <nav id="buttonNav">
      <router-link to="/skull">
        <button type="button" class="btn btn-secondary">What's the Skull?</button>
      </router-link>

      <router-link to="/accounts">
        <button type="button" class="btn btn-secondary">Click Here to Access Accounts</button>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
header {
  background-color: #cde9f9;
  padding: 20px;
  text-align: center;
  z-index: 1;
}

.headerElem {
  padding: 20px;
  text-decoration: underline;
  font-size: 30px;
  color: black;
}

.headerElem:hover {
  background-color: #4242e8;
  color: black;
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
  font-size: 30px;
  text-align: center;

  width: 150px;
  height: 100px;
}
</style>