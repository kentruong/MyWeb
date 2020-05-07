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
		postContent: [],
	}),
	created: function () {
		this.$vueEventBus.$on(
			"createPost",
			val => (this.createPost = val)
		);
		this.$vueEventBus.$on(
			"contentPost",
			val => (this.postContent.unshift(val))
		);
		console.log(this.postContent);
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
		},
		deletePost(index) {
			this.postContent.splice(index,1);
		},
		editPost(){
			console.log('editPost');
		},
		savePost() {
			console.log('savePost');
		},
		notePost() {
			console.log('notePost');
		},
		sharePost() {
			console.log('sharePost');
		},
	},
	watch: {
		// closePost() {
		// 	this.$emit('closePost', this.showPost)
		// }
	}
}
</script>

<style scoped>
.show-post .img-content-post {
	width: 100%;
	height: auto;
}
</style>