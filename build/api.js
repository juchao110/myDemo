import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: '/site',
  timeout: 15000
});