<template src="./template.html"></template>

<script>
import TopBar from '@/components/Layout/TopBar'
import SlideGroups from './SlideGroups'
import CreatePost from './CreatePost'
import GridCss from './GridCss'
import ShowPost from './ShowPost'
export default {
	name: 'NewFeed',
	components: {
		TopBar,
		SlideGroups,
		CreatePost,
		GridCss,
		ShowPost
	},
	props: {
		attrs: {
			type: Object,
			default: () => ({}),
		},
	},

	data: vm => ({
		initialDark: vm.$vuetify
			? vm.$vuetify.theme.dark
			: false,
		boilerplate: false,
		tile: false,
		type: 'list-item-avatar-three-line',
		types: [],
		statusPost: false,
		name: '',
	}),
	methods: {
		closePost(){
			console.log('Con truyền lên Cha');
			this.statusPost = false;
		},
		Post() {
			this.statusPost = !this.statusPost
			this.name = 'New Your Name'
		}
	},
	beforeDestroy() {
		if (!this.$vuetify) return
		this.$vuetify.theme.dark = this.initialDark
	},

}
</script>

<style>
</style>