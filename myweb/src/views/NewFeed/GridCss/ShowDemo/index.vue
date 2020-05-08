<template src="./template.html"></template>

<script>
export default {
	name: "ShowDemo",
	data: () => ({
		dialog: false,
		gallerys: [
			{ link: 'https://anh.24h.com.vn/upload/3-2015/images/2015-09-08/1441709618-1441706318-1.jpg' },
			{ link: 'https://live.staticflickr.com/65535/49182256117_e2b8333487_h.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/30124647968_b3414caa6f_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44387790_339752183449114_8808347882458447872_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/31303654508_4fbcd3fbf8_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52476594_673361356412645_5002462501162450944_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43274300574_91a04e1d18_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52173545_2293459274219264_3745613405151559680_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43274301034_fbc0e949a2_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087440165_4eb77e1a10_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43993075861_5d12e1bb0c_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/42183822570_431c40ec7f_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/32541591468_647cd72d04_h.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/45690393734_4eae1b2435_k.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087481675_3969d2e92c_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/32541602898_453ec1f646_k.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43944618752_743d974de6_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52476594_673361356412645_5002462501162450944_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52608987_2377191975625959_1978409266800754688_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52387600_318171622388076_6684015465393553408_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/53435070_885583448444562_3877105714409242624_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44326263482_48e7cf6acb_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44326263972_e3a21084b0_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44073659292_8b7dd442ae_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087767775_00c7ce2f47_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087767355_c128281ebb_o.jpg' },
			{ link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43944869572_23a113a9fb_o.jpg' },
		]
	}),
}
</script>

<style>
.show-demo .gallery {
	background-color: #f9f7f6;
	grid-gap: 10px;
	display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 7rem);
}

.show-demo .gallery .div-items {
	background-color: #cccccc; /* Used if the image is unavailable */
	/* width: 50px; */
	height: auto; /* You must set a specified height */
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover; /* Resize the background image to cover the entire container */
}
</style>