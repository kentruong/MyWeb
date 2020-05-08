<template src="./template.html"></template>

<script>
import TopBar from '@/components/Layout/TopBar'
import SlideGroups from './SlideGroups'
import CreatePost from './CreatePost'
import GridCss from './GridCss'
import ShowPost from './ShowPost'
import ActionCssByVarName from './ActionCssByVarName'
export default {
	name: 'NewFeed',
	components: {
		TopBar,
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
		items: [
			{ title: 'TEAM FREE TRAFFIC IAM7DUM', notifys: 6, avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-0/cp0/c23.0.50.50a/p50x50/30171220_246006642634638_2426418724822949323_o.jpg?_nc_cat=104&_nc_sid=ca434c&_nc_ohc=Ne-Rl150lRMAX9Kt6xP&_nc_ht=scontent.fsgn2-1.fna&oh=d94375d4954a5ecacc70110ebc1b390f&oe=5ED7B828' },
			{ title: 'King Of Dragon-Ball', notifys: 1, avatar: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t31.0-1/cp0/c0.0.40.40a/p40x40/14372276_1650885318559376_3295928168180470388_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=84lQnqaBY34AX--tK3R&_nc_ht=scontent.fsgn2-2.fna&oh=0d4bc2c16c999609baaa334439552566&oe=5ED8CB0B' },
			{ title: 'Baby Group', notifys: '9+', avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/17903700_1888303541439928_8500911693822663824_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=-sdQDOxClcQAX8wNOCX&_nc_ht=scontent.fsgn2-1.fna&oh=237081d79f2e208403aa62f9d1ff4d82&oe=5EDA7F0F' },
			{ title: 'Hội cá cảnh Sài Gòn', notifys: '8', avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/c16.0.50.50a/p50x50/43016118_1740726542704963_1987639937498873856_n.jpg?_nc_cat=111&_nc_sid=ca434c&_nc_ohc=cn1TtuXXQXMAX8JkgJV&_nc_ht=scontent.fsgn2-1.fna&oh=041f8f88cacb231d23546de84c7c0308&oe=5ED95E3A' },
		],
		listFriends:[
			{ name: 'Hoài Quang Trần',  link: 'https://anh.24h.com.vn/upload/3-2015/images/2015-09-08/1441709618-1441706318-1.jpg' },
			{ name: 'Nam Nguyễn',  link: 'https://live.staticflickr.com/65535/49182256117_e2b8333487_h.jpg' },
			{ name: 'Khoa Trương',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/30124647968_b3414caa6f_o.jpg' },
			{ name: 'Dung Doan',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44387790_339752183449114_8808347882458447872_o.jpg' },
			{ name: 'Le Danh Thach',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/31303654508_4fbcd3fbf8_o.jpg' },
			{ name: 'Nguyen Trung HieuNguyen Trung Hieu',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52476594_673361356412645_5002462501162450944_o.jpg' },
			{ name: 'Ly ly',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43274300574_91a04e1d18_o.jpg' },
			{ name: 'Maria Ozawa',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52173545_2293459274219264_3745613405151559680_o.jpg' },
			{ name: 'Mimi',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43274301034_fbc0e949a2_o.jpg' },
			{ name: 'Kaka',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087440165_4eb77e1a10_o.jpg' },
			{ name: 'Park Ki Ho',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43993075861_5d12e1bb0c_o.jpg' },
			{ name: 'Lee Youn Min',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/42183822570_431c40ec7f_o.jpg' },
			{ name: 'My Tam',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/32541591468_647cd72d04_h.jpg' },
			{ name: 'Ung Hoang Phuc',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/45690393734_4eae1b2435_k.jpg' },
			{ name: 'Ly Hai',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087481675_3969d2e92c_o.jpg' },
			{ name: 'Dam Vinh Hưng',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/32541602898_453ec1f646_k.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43944618752_743d974de6_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52476594_673361356412645_5002462501162450944_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52608987_2377191975625959_1978409266800754688_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52387600_318171622388076_6684015465393553408_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/53435070_885583448444562_3877105714409242624_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44326263482_48e7cf6acb_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44326263972_e3a21084b0_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44073659292_8b7dd442ae_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087767775_00c7ce2f47_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087767355_c128281ebb_o.jpg' },
			// { name: '',  link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43944869572_23a113a9fb_o.jpg' },
		]
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