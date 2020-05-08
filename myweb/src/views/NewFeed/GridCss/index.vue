<template src='./template.html'></template>

<script>
import ShowDemo from './ShowDemo'
export default {
	name: 'GridCss',
	components:{
		ShowDemo,
	},
	data: () => ({
		show: false,
		activePost: true,
		items: [
			{ title: 'Lưu bài viết', icon: 'save' },
			{ title: 'Đánh dấu bài viết', icon: 'emoji_flags' },
			{ title: 'Share bài viết dưới dạng', icon: 'reply' },
		],
	}),
}
</script>

<style src='./style.css'>
</style>