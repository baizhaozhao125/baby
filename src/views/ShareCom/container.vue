<template>
	<div>
		<router-view />
		<home-footer></home-footer>
	</div>
</template>

<script>
	import HomeFooter from "../pages/footer";
	export default {
		data() {
			return {
			}
		},
		components: {
			HomeFooter
		},
	}
</script>

<style>
</style>
