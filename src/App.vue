<template>
  <div id="app">

    <Chat v-if="user"></Chat>
    <Login v-else></Login>
  </div>
</template>

<script>
import Login from './components/Login'
import Chat from './components/Chat'
import firebase from 'firebase'
export default {
  data(){
    return{
      user:firebase.auth().currentUser,

    }
  },
  name: 'App',
  components: {
    Login,
    Chat,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
