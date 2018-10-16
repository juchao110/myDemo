<template>
<div id="app">
	<!-- <img src="./assets/logo.png"> -->
	<Bread></Bread>
	<!-- <router-view v-wechat-title="$store.state.title?$store.state.title:$route.meta.title"></router-view> -->
	<router-view></router-view>
</div>
</template>

<script>
import Bread from './components/bread.vue'
export default {
	components: {
		Bread
	},
	name: 'App',
	mounted: function() {
		document.title = this.$store.state.title ? this.$store.state.title : this.$route.meta.title
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
