<template src='./template.html'></template>

<script>
export default {
	name: 'GridCss',
	data: () => ({
		show: false,
		items: [
			{ title: 'Xóa bài viết', icon: 'delete_outline' },
			{ title: 'Lưu bài viết', icon: 'save' },
			{ title: 'Đánh dấu bài viết', icon: 'emoji_flags' },
			{ title: 'Share bài viết dưới dạng', icon: 'reply' },
		],
	}),
}
</script>

<style src='./style.css'>
</style>