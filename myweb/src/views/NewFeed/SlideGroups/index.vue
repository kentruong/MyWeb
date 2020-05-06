<template src='./template.html'></template>

<script>
export default {
    name: 'SlideGroups',
	data: () => ({
		model: null,
		multiple: false,
		mandatory: false,
		showArrows: true,
		prevIcon: false,
		nextIcon: false,
        centerActive: false,
        listSlide:[
            {images: 'https://luxury-inside.vn/data/uploads/2019/07/eli-wit3.jpg',name: 'Scarlet Witch'},
            {images: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2019_09_13_329_32183043/fa21015b851b6c45350a.jpg',name: 'Black Widow'},
            {images: 'https://image1.thegioitre.vn/2017/05/27/kul_news_wonder-woman-7.png', name: 'Wonder Woman'},
            {images: 'https://upload.wikimedia.org/wikipedia/vi/3/3c/Captainamerica.jpeg', name: 'Caption American'},
            {images: 'https://gamek.mediacdn.vn/zoom/700_438/2018/6/24/avata-15298217002141001979206.jpg', name: 'The Hulk'},
            {images: 'https://anh.24h.com.vn/upload/1-2013/images/2013-03-08/1362734403-FANBOY_GENERIC.jpg', name: 'Iron Man'},
            {images: 'https://genk.mediacdn.vn/2018/12/19/5-15451526579671665110675.jpg', name: 'Doctor Strange'},
            {images: 'https://vcdn-giaitri.vnecdn.net/2018/02/19/settopblackpanther-1519020125_1200x0.jpg', name: 'Black Panther'},
            {images: 'https://img.fansubvn.com/data/film/Spider-Man-Far-From-Home-Spider-Man-Nguoi-Nhen-Xa-Nha.jpg', name: 'Spider-Man'},
            {images: 'https://i.pinimg.com/originals/00/6e/24/006e246c5099f9c2249730116804b496.png', name: 'Thor'},
            {images: 'https://media1.popsugar-assets.com/files/thumbor/3ULXZL-xJazanqVY8gZY732fyvU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/06/11/903/n/1922283/c99cdd316d455f70_poster_gold_mantis/i/Mantis.jpg', name: ''},
        ]
	}),
}
</script>

<style>
</style>