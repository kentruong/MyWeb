<template src="./template.html"></template>

<script>
import TopBar from '@/components/Layout/TopBar'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import SlideGroups from './SlideGroups'
import CreatePost from './CreatePost'
import GridCss from './GridCss'
import ShowPost from './ShowPost'
import ActionCssByVarName from './ActionCssByVarName'
export default {
	name: 'NewFeed',
	components: {
		TopBar,
		LeftBar,
		RightBar,
		SlideGroups,
		CreatePost,
		GridCss,
		ShowPost,
		ActionCssByVarName
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
		quanlydo: false,
		loadingButton: false,
		
		
	}),
	methods: {
		closePost() {
			console.log('Con truyền lên Cha');
			this.statusPost = false;
		},
		Post() {
			this.statusPost = !this.statusPost
			this.name = 'New Your Name'
		},
		reload() {
			this.loadingButton = !this.loadingButton;
			location.reload();
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