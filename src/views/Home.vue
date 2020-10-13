<template>
  <div class="home">
    首页
    <a-button type="danger">点我</a-button>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    
  },
})
export default class Home extends Vue {}
</script>
