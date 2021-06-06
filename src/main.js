import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyDQLjJHA8uTe0CohpDPESCzQ5a-rm48_Yk",
    authDomain: "my-vue-chat-732ac.firebaseapp.com",
    projectId: "my-vue-chat-732ac",
    storageBucket: "my-vue-chat-732ac.appspot.com",
    messagingSenderId: "17786058809",
    appId: "1:17786058809:web:51d1f68ffd6e75e8daf5e8"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => new Vue({
    render: h => h(App),
}).$mount('#app'));


