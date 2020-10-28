<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="/home">
          <user-outlined />
          <router-link to="/home">首页</router-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <video-camera-outlined />
          <router-link to="/about">about</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }" >
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        <a href="http://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015245号</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { getCurrentInstance, reactive, toRefs, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const { ctx } = getCurrentInstance()
    const route = useRoute()
    // const store = useStore()
    
    const data = reactive({
      collapsed: false,
      selectedKeys: []
    });

    watch(
      () => route,
      (val) => {
        data.selectedKeys = [val.fullPath]
      },
      {
        immediate: true,
        deep: true
      }
    );

    return {
      ...toRefs(data) //toRefs 相当于结构，保证数据是响应式的
    }
  }
};
</script>
<style lang="scss">
#components-layout-demo-custom-trigger {
  height: 100%;
  .ant-menu-item a {
    display: inline;
  }
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

