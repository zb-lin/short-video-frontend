<template>
  <a-row align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <icon-tiktok-color size="35px" href="http://localhost:8080/" />
          </div>
        </a-menu-item>
        <GlobalSearch />
      </a-menu>
    </a-col>
    <a-col flex="70px">
      <a-button type="text" status="normal">
        <a-row>
          <icon-notification />
        </a-row>
        <a-row>通知</a-row>
      </a-button>
    </a-col>
    <a-col flex="70px">
      <a-button type="text" status="normal">
        <a-row>
          <icon-message />
        </a-row>
        <a-row>私信</a-row>
      </a-button>
    </a-col>
    <a-col flex="70px">
      <a-button type="text" status="normal">
        <a-row>
          <icon-plus-circle />
        </a-row>
        <a-row> 投稿</a-row>
      </a-button>
    </a-col>
    <a-col flex="100px">
      <div>
        <UserLoginView v-if="!store.state.user" />
        <a-popover position="br" v-else-if="store.state.user">
          <a-avatar
            trigger-type="mask"
            style="margin-right: 20px; margin-left: 10px"
          >
            <img
              alt="avatar"
              :src="store.state.user?.userAvatar ?? defaultAvatar"
            />
            <template #trigger-icon></template>
          </a-avatar>
          <template #content>
            <p>Here is the text content</p>
            <p>Here is the text content</p>
          </template>
        </a-popover>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import UserLoginView from "@/views/user/UserLoginView.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";

const router = useRouter();
const selectedKeys = ref(["/"]);
const store = useStore();
const defaultAvatar = ref("http://s32x7tly6.hn-bkt.clouddn.com/head2.jpg");

router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
// 默认主页
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "lzb123",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 3000);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
}
</style>
