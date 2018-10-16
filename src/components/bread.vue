<template>
<div class="">
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item v-for="b in $store.state.bread" :key="b.title" :to="{path:b.path}">{{b.title}}</el-breadcrumb-item>
	</el-breadcrumb>
</div>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
