<template>
 <header>
        <div class="container">
    <form id="log" action="" method="post">
      <h3>Login</h3>
      
      <fieldset>
        <input  type="text" id="name" placeholder="Your name" required autofocus>
      </fieldset>
      <fieldset>
        <input type="password" id="password" placeholder="Your password" required>
      </fieldset>
      
      <fieldset>
        <button name="submit" type="submit" id="log-submit" data-submit="Sending">Login</button>
        
      </fieldset>
    </form>
  </div>
 </header>
</template>

<script>
export default {
  name: Login
}
</script>

<style> 


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background-image: url('src/assets/img/img1.jpg');
}

.container {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
}

#log input {
  font: 400 12px/16px "Lato", sans-serif;
}

#log {
  background:#f3eeee7e;
  padding: 25px;
  margin: 50px 0;
}

#log h3 {
  color: #3f4954;
  display: block;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 25px;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
  
}

#log input {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#log input:hover {
  border: 1px solid #aaa;
}

#log button {
  cursor: pointer;
  border: none;
  background: rgb(75, 182, 209);
  color: #fff;
  padding: 10px;
  font-size: 14px;
  width: 100%;
}

#log button:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}


