<template src='./template.html'></template>

<script>
export default {
	name: 'TopBar',
	// data: () => ({
	// 	active: 1,
	// 	currenRoute: '',
	// 	fav: true,
	// 	menu: false,
	// 	message: false,
	// 	hints: true,
	// }),
	data: vm => ({
		initialDark: vm.$vuetify
			? vm.$vuetify.theme.dark
			: false,
		active: 1,
		currenRoute: '',
		fav: true,
		menu: false,
		message: false,
        hints: true,
        menus:[
            {icon: 'home'},
            {icon: 'description'},
            {icon: 'live_tv'},
            {icon: 'textsms'},
		],
		linkFacebook: '<a href="https://www.facebook.com/" target="_blank">Anh Khoa</a>'
	}),

	beforeDestroy() {
		if (!this.$vuetify) return

		this.$vuetify.theme.dark = this.initialDark
	},
}
</script>

<style>
</style>