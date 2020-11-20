<template>
  <div class="home">
    <h1>This is an home page</h1>
    <a-button type="danger" @click="handleClick">点我啊</a-button>
    {{newCount}}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
	setup() {
		const store = useStore()
		const data = reactive({
			count: 0
		})

		const handleClick = () => {
			store.commit('addCount')
			console.log(store)
		}

		const newCount = computed(() => {
			return store.getters.getCount
		})

		return {
			...toRefs(data),
			handleClick,
			newCount
		}
	}
})

</script>
