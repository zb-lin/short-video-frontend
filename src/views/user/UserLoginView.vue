<template>
  <div id="userLoginView">
    <a-button
      type="primary"
      status="danger"
      @click="handleClick"
      shape="round"
      size="large"
      style="margin-right: 20px; margin-left: 10px"
    >
      <template #icon>
        <icon-user />
      </template>
      <template #default>登陆</template>
    </a-button>
    <a-modal
      v-model:visible="visible"
      title="登录后免费畅享高清视频"
      @cancel="handleCancel"
      @ok="handleSubmit"
      okText="登陆"
      cancelText="取消"
    >
      <a-form :model="form">
        <a-form-item field="userAccount" label="账号">
          <a-input v-model="form.userAccount" placeholder="请输入账号" />
        </a-form-item>
        <a-form-item
          field="userPassword"
          tooltip="密码不少于 8 位"
          label="密码"
        >
          <a-input-password
            v-model="form.userPassword"
            placeholder="请输入密码"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();
const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
const handleCancel = () => {
  visible.value = false;
};
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败, " + res.message);
  }
  visible.value = false;
  console.log(form);
};
</script>
