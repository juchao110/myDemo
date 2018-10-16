<template>
<div class="hello">
	<h1>{{number}}</h1>
	<p>
		<button type="button" name="button" @click="goAdd(2)">add</button>
		<button type="button" name="button" @click="goMin(2)">min</button>
	</p>
	<el-row :gutter="12">
		<el-col :span="6">
			<div class="grid-content bg-purple">1</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple">2</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple">3</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple">4</div>
		</el-col>
	</el-row>
</div>
</template>

<script>
import {
	mapState,
	mapActions,
	mapMutations,
	mapGetters
} from 'vuex'
export default {
	name: 'HelloWorld',
	data() {
		return {

		}
	},
	computed: {
		...mapState(['number']),
		number() {
			return this.$store.getters.number
		}
		// ...mapGetters(['number'])
	},
	mounted: function() {
		// this.goAdd()
	},
	methods: {
		...mapMutations(['ADD', 'MIN']),
		...mapActions([
			'addNumber', 'minNumber'
		]),
		goAdd(n) {
			this.ADD(n)
		},
		goMin(n) {
			this.MIN(n)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
	margin: 0;
	padding: 0;
}

h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}

.bg-purple {
	background: #ccc
}
</style>
