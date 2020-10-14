<template>
  <div class="home">
    <h1>This is an home page</h1>
    <a-button type="danger">点我啊</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    
  }
})
export default class Home extends Vue {}
</script>
