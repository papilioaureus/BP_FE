<!-- Home Page -->
<template>
  <div>
    <!-- Set a header tag with 3 buttons; Accounts that should lead to the /accounts page, Skull that should lead to the /skull page and Home Page one that leads to /-->
    <header>
      <nav>
        <a href="/" class="headerElem">Home Page</a>
        <a href="/accounts" class="headerElem">Accounts</a>
        <a href="/skull" class="headerElem">Skull</a>
      </nav>
    </header>

    <h1 id="title" class="text">Home Page</h1>
    <p id="shortDescription" class="text">Welcome to the IE Bank</p>
    <!-- Add an Image -->
    <img src="../assets/logo.png" alt="IE Bank" width="300" height="300" />

    <nav id="buttonNav">
      <router-link to="/accounts">
        <button type="button" class="btn btn-secondary">Accounts</button>
      </router-link>

      <router-link to="/skull">
        <button type="button" class="btn btn-secondary">Skull</button>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  z-index: 1;
}

.headerElem {
  padding: 20px;
  text-decoration: none;
  font-size: 20px;
  color: black;
}

.headerElem:hover {
  background-color: #ddd;
  color: black;
}

.text {
  text-align: center;
}

#title {
  margin-top: 30px;
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
  font-size: 20px;
  text-align: center;

  /* Make the buttons the same size regardless of the text */
  width: 100px;
  height: 50px;
}
</style>