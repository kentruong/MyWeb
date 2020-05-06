<template>
	<div id="app">
		<v-app>
			<!-- Sizes your content based upon application components -->
			<v-content class="pa-0">
				<!-- Provides the application the proper gutter -->
				<v-container fluid class="pa-0">
					<!-- If using vue-router -->
					<router-view></router-view>
				</v-container>
			</v-content>
		</v-app>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
