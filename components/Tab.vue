<template>
	<view v-if="activeTab === tab.id">

	</view>
</template>

<script>
	import {ref} from 'vue';
	export default {
		props: {
			tab: Object,
			activeTab: Number,
		},
		setup(props) {
			const activeTab = ref(props.activeTab);
			return {
				activeTab,
			};
		},
	};
</script>

<style lang="scss">

</style>