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
		quanlydo: false,
		loadingButton: false,
		items: [
			{ title: 'TEAM FREE TRAFFIC IAM7DUM', notifys: 6, avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-0/cp0/c23.0.50.50a/p50x50/30171220_246006642634638_2426418724822949323_o.jpg?_nc_cat=104&_nc_sid=ca434c&_nc_ohc=Ne-Rl150lRMAX9Kt6xP&_nc_ht=scontent.fsgn2-1.fna&oh=d94375d4954a5ecacc70110ebc1b390f&oe=5ED7B828' },
			{ title: 'King Of Dragon-Ball', notifys: 1, avatar: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t31.0-1/cp0/c0.0.40.40a/p40x40/14372276_1650885318559376_3295928168180470388_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=84lQnqaBY34AX--tK3R&_nc_ht=scontent.fsgn2-2.fna&oh=0d4bc2c16c999609baaa334439552566&oe=5ED8CB0B' },
			{ title: 'Baby Group', notifys: '9+', avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/17903700_1888303541439928_8500911693822663824_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=-sdQDOxClcQAX8wNOCX&_nc_ht=scontent.fsgn2-1.fna&oh=237081d79f2e208403aa62f9d1ff4d82&oe=5EDA7F0F' },
			{ title: 'Hội cá cảnh Sài Gòn', notifys: '8', avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/c16.0.50.50a/p50x50/43016118_1740726542704963_1987639937498873856_n.jpg?_nc_cat=111&_nc_sid=ca434c&_nc_ohc=cn1TtuXXQXMAX8JkgJV&_nc_ht=scontent.fsgn2-1.fna&oh=041f8f88cacb231d23546de84c7c0308&oe=5ED95E3A' },
		],
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