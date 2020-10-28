<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{count}}
  </div>
</template>

<script lang="ts">
	import { computed, reactive } from 'vue'
	import { useStore } from 'vuex'
	export default {
		setup() {
			const store = useStore()
			const count = computed(() => {return store.state.count})

			return {
				count
			}
		}
	}
</script>