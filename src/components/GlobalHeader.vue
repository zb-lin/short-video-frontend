<template>
  <el-row :wrap="false">
    <!--    logo-->
    <el-col :span="6">
      <img
        style="width: 140px; height: 45px; margin-top: 5px"
        src="../assets/logo.png"
      />
    </el-col>
    <!--    搜索框-->
    <el-col :span="8" :push="2">
      <el-input
        v-model="searchTest"
        placeholder="Please input"
        class="input-with-select"
        size="large"
        style="margin-top: 8px"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </el-col>
    <!--    上传-->
    <el-col :span="2" :push="5">
      <ContributeView />
    </el-col>
    <!--    消息-->
    <el-col
      :span="1"
      :push="5"
      v-if="store.state.user.loginUser.userName !== '未登录'"
    >
      <el-tooltip
        class="box-item"
        effect="dark"
        content="消息"
        placement="bottom"
      >
        <el-icon style="margin-top: 15px" size="25px">
          <Message />
        </el-icon>
      </el-tooltip>
    </el-col>
    <!--    头像-->
    <el-col :span="1" :push="5">
      <el-dropdown
        size="large"
        v-if="store.state.user.loginUser.userName !== '未登录'"
      >
        <el-avatar :size="40" :src="defaultAvatar" style="margin-top: 5px" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人主页</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <UserLoginView
        v-else-if="store.state.user.loginUser.userName === '未登录'"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
import UserLoginView from "@/views/user/UserLoginView.vue";
import ContributeView from "@/views/video/ContributeView.vue";
import { Message, Search } from "@element-plus/icons-vue";

const router = useRouter();
const selectedKeys = ref(["/"]);
const store = useStore();
const defaultAvatar = ref("http://s32x7tly6.hn-bkt.clouddn.com/head2.jpg");
const searchTest = ref("");
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
// 默认主页
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
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
