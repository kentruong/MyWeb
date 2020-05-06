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
			{ color: 'black ', icon: 'keyboard_arrow_left ' },
			{ color: 'brown ', icon: 'local_florist ' },
			{ color: 'green ', icon: 'fastfood ' },
			{ color: 'blue-grey darken-4', icon: 'category ' },
			{ color: 'deep-orange accent-4', icon: 'museum ' },
			{ color: 'teal darken-4', icon: 'gradient ' },
			{ color: 'lime accent-4', icon: 'shutter_speed ' },
			{ color: 'black', icon: 'account_tree' },
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
	}),
	methods: {
		changValue(event){
			this.text = event.target.value; 
		},
		functionCreatePost() {
			this.dialog = false
			this.$vueEventBus.$emit('createPost', true)
		},
	}

}
</script>

<style>
</style>