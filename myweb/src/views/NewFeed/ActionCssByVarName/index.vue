<template src="./template.html"></template>

<script>
export default {
	name: 'ActionCssByVarName',
	data: () => ({
		backGrounDiv: '#8b164a',
		show: true,
		activePost: true,
		items: [
			{ title: 'Xóa bài viết', icon: 'delete_outline' },
			{ title: 'Lưu bài viết', icon: 'save' },
			{ title: 'Đánh dấu bài viết', icon: 'emoji_flags' },
			{ title: 'Share bài viết dưới dạng', icon: 'reply' },
		],
	}),
	computed: {
		textColor() {
			if (this.backGrounDiv == '#fff') {
				return '#000'
			}
		}
	},
	methods: {

	}
}
</script>

<style>
.action-css-by-var-name .result-demo {
	width: 100%;
	/* background: red; */
}
.action-css-by-var-name .result-demo .input-backGrounDiv{
	width: 100%;
	border: 1px solid #03A9F4;
	outline: none;
	height: 40px;
	border-radius: 5px;
}
</style>