<template>
  <div id="BasicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout class="layout-demo">
        <a-layout-sider hide-trigger :collapsed="collapsed">
          <a-menu
            :defaultOpenKeys="['1']"
            :defaultSelectedKeys="['0_3']"
            :style="{ width: '100%' }"
          >
            <a-menu-item v-for="item in visibleRoutes" :key="item.path">
              <icon-star v-if="item.name === '推荐'" />
              {{ item.name }}
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <router-view />
        </a-layout>
      </a-layout>
      <a-layout-footer class="footer"></a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import { computed, ref } from "vue";
import { routes } from "@/router/routes";
import checkAccess from "@/access/checkAccess";
import { useStore } from "vuex";

const store = useStore();

const collapsed = ref(false);
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    return checkAccess(
      store.state.user.loginUser,
      item?.meta?.access as string
    );
  });
});
</script>
<style scoped>
#BasicLayout {
}

#BasicLayout .header {
  margin-bottom: 16px;
}

#BasicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#BasicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.layout-demo {
  height: 500px;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
  box-shadow: #eee 1px 1px 5px;
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: white;
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: white;
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
  height: 1300px;
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
