<template src="./template.html"></template>

<script>
export default {
	name: "LeftBar",
	data: () => ({
		name: 'Ken Truong',
		item1s: [
			{ title: 'Messenger', notifys: 6, avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png' },
			{ title: 'Đã lưu', notifys: 1, avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png' },
			{ title: 'Trang', notifys: '9+', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png' },
			{ title: 'Video', notifys: '8', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png' },
			{ title: 'Sự kiện', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png' },
			{ title: 'Nhóm', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png' },
			{ title: 'Trang Gây Quỷ', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png' },
			{ title: 'Kỷ niệm', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png' },
			{ title: 'Bạn bè', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png' },
			{ title: 'Danh sách bạn bè', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png' },
			{ title: 'Nhóm mua và bán', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png' },
			{ title: 'Video chơi game', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/5EU1wNhLmR6.png' },
			{ title: 'Việc làm', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png' },
			{ title: 'Ứng phó khẩn cấp', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png' },
			{ title: 'Trò chơi', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png' },
			{ title: 'Ưu đãi', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png' },
			{ title: 'Đề xuất', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/O_Cx7JLPvEA.png' },
			{ title: 'Thời tiết', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png' },
			{ title: 'Hoạt động quảng cáo gần dây', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png' },
			{ title: 'Video trực tiếp', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png' },
			{ title: 'Messenger nhí', notifys: '', avatar: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png' },
		],
		item2s: [
			{ title: 'TEAM FREE TRAFFIC IAM7DUM', notifys: 6, avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-0/cp0/c23.0.50.50a/p50x50/30171220_246006642634638_2426418724822949323_o.jpg?_nc_cat=104&_nc_sid=ca434c&_nc_ohc=Ne-Rl150lRMAX9Kt6xP&_nc_ht=scontent.fsgn2-1.fna&oh=d94375d4954a5ecacc70110ebc1b390f&oe=5ED7B828' },
			{ title: 'King Of Dragon-Ball', notifys: 1, avatar: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t31.0-1/cp0/c0.0.40.40a/p40x40/14372276_1650885318559376_3295928168180470388_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=84lQnqaBY34AX--tK3R&_nc_ht=scontent.fsgn2-2.fna&oh=0d4bc2c16c999609baaa334439552566&oe=5ED8CB0B' },
			{ title: 'Baby Group', notifys: '9+', avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/17903700_1888303541439928_8500911693822663824_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=-sdQDOxClcQAX8wNOCX&_nc_ht=scontent.fsgn2-1.fna&oh=237081d79f2e208403aa62f9d1ff4d82&oe=5EDA7F0F' },
			{ title: 'Hội cá cảnh Sài Gòn', notifys: '8', avatar: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/c16.0.50.50a/p50x50/43016118_1740726542704963_1987639937498873856_n.jpg?_nc_cat=111&_nc_sid=ca434c&_nc_ohc=cn1TtuXXQXMAX8JkgJV&_nc_ht=scontent.fsgn2-1.fna&oh=041f8f88cacb231d23546de84c7c0308&oe=5ED95E3A' },
		],
		limit: 5,
	}),
	computed: {
		firtArray() {
			return this.item1s.slice(0,this.limit);
		}
	},
	methods: {
		loadmore(){
			console.log('limit')
			return this.limit += 5
		}
	}
}
</script>

<style>
</style>