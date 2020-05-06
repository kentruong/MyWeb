<template src="./template.html"></template>

<script>
export default {
	name: "ShowPost",
	props: {
		showPost: Boolean,
		customName: String,
	},
	data: () => ({
		createPost: false,
	}),
	created: function () {
		this.$vueEventBus.$on(
			"createPost",
			val => (this.createPost = val)
		);
	},
	methods: {
		// reverseName() {
		// 	return this.customName.split("").reverse().join("") 	 	
		// },
		hidePost() {
			// this.customName = 'VL bla balblablabla'
			// this.showPost = !this.showPost
			// this.$emit('closePost', this.showPost)
			this.$emit('closePost', 'Hoài')
		}
	},
	watch: {
		// closePost() {
		// 	this.$emit('closePost', this.showPost)
		// }
	}
}
</script>

<style>
</style>