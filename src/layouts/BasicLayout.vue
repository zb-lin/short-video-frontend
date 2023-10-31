<template>
  <div id="BasicLayout">
    <el-container>
      <el-header class="header" height="40px">
        <GlobalHeader />
        <el-divider style="margin: 0" />
      </el-header>
      <el-container>
        <el-aside>
          <el-col :span="16">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @select="handleSelect"
            >
              <el-menu-item
                v-for="item in visibleRoutes"
                :key="item.path"
                :index="item.path"
              >
                <el-icon>
                  <House v-if="item.name === '推荐'" />
                  <User v-else-if="item.name === '已关注'" />
                  <Compass v-else />
                </el-icon>
                <el-text tag="b"> {{ item.name }}</el-text>
              </el-menu-item>
            </el-menu>
            <el-divider />
            <el-link
              :underline="false"
              href="https://github.com/zb-lin?tab=repositories"
              ><span
                class="icon iconfont icon-github-fill"
                style="margin-left: 10px"
              ></span
            ></el-link>
          </el-col>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import { computed, ref } from "vue";
import { routes } from "@/router/routes";
import checkAccess from "@/access/checkAccess";
import { useStore } from "vuex";
import { Compass, House, User } from "@element-plus/icons-vue";
import router from "@/router";

const store = useStore();
const selectedKeys = ref(["/"]);
const collapsed = ref(false);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
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
const handleSelect = (key: string, keyPath: string[]) => {
  router.push({
    path: key,
  });
};
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
