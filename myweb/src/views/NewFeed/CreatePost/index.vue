<template src='./template.html'></template>

<script>
	export default {
		name: 'CreatePost',
		data: () => ({
			dialog: false,
			e1: 1,
			linkFacebook: "https://www.facebook.com/",
			chooseBackground: true,
			backgrounds: [
				{ color: 'black ', icon: 'keyboard_arrow_left ', id: '1'},
				{ color: 'brown ', icon: 'local_florist ', id: '2' },
				{ color: 'green ', icon: 'fastfood ', id: '3' },
				{ color: 'blue-grey darken-4', icon: 'category ', id: '4' },
				{ color: 'deep-orange accent-4', icon: 'museum ', id: '5' },
				{ color: 'teal darken-4', icon: 'gradient ', id: '1' },
				{ color: 'lime accent-4', icon: 'shutter_speed ', id: '6' },
				{ color: 'black', icon: 'account_tree', id: '7' },
			],
			items: [
				{
					icon: 'public',
					text: 'Công Khai',
					subs: 'Mọi người hoặc ngoài Facebook'
				},
				{
					icon: 'people',
					text: 'Bạn Bè',
					subs: 'Bạn bè của bạn hoặc Facebook'
				},
				{
					icon: 'person',
					text: 'Chỉ Mình Tôi',
					subs: 'Chỉ Mình Tôi'
				},
			],
			model: [1],
			radios: 'radio-1',
			text: " Bạn đang nghĩ gì...",
			placeholders: 'Bạn đang nghĩ gì...',
			setLinkImage: false,
			itemPost: {linkImage: '',content: ''},
			backgroundsId: '', 
			styleBackground: {
				color: 'pink',
				icon: 'style'
			}
		}),
		methods: {
			changValue(event) {
				this.text = event.target.value;
			},
			functionCreatePost() {
				this.dialog = false
				this.$vueEventBus.$emit('contentPost', {img: this.itemPost.linkImage,content: this.itemPost.content,backgroundsId: this.backgroundsId})
				this.$vueEventBus.$emit('createPost', true)
				this.itemPost.linkImage = '';
				this.itemPost.content = '';
				this.styleBackground.color = 'pink';
				this.styleBackground.icon = 'style';
			},
			chooseBackgroundsId(color,icon){
				this.backgroundsId = color;
				this.styleBackground.color = color;
				this.styleBackground.icon = icon;
				this.chooseBackground = !this.chooseBackground;
			}
		}

	}
</script>

<style>
</style>