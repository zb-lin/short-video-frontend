<template>
  <div id="userLoginView">
    <el-button
      type="primary"
      status="danger"
      @click="visible = true"
      shape="round"
      size="default"
      style="margin-top: 10px"
    >
      <template #icon>
        <el-icon>
          <User />
        </el-icon>
      </template>
      <template #default>登陆</template>
    </el-button>
    <el-dialog
      v-model="visible"
      @cancel="handleCancel"
      @ok="handleSubmit"
      okText="登陆"
      cancelText="取消"
    >
      <el-form :model="form" label-width="100px">
        <h2 style="text-align: center">登录后免费畅享高清视频</h2>
        <el-form-item field="userAccount" label="账号">
          <el-input
            v-model="form.userAccount"
            placeholder="请输入账号"
            clearable
          />
        </el-form-item>
        <el-form-item
          field="userPassword"
          tooltip="密码不少于 8 位"
          label="密码"
          clearable
        >
          <el-input
            v-model="form.userPassword"
            placeholder="请输入密码"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">登陆</el-button>
          <el-button>取消</el-button>
          <el-link
            type="primary"
            style="margin-left: 300px"
            @click="
              visibleRegister = true;
              visible = false;
            "
            >未有账号?点击注册
          </el-link>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      v-model="visibleRegister"
      @cancel="handleCancelRegister"
      okText="注册"
      cancelText="取消"
    >
      <el-form :model="formRegister" label-width="100px">
        <h2 style="text-align: center">注册用户</h2>
        <el-form-item field="userAccount" label="账号">
          <el-input
            v-model="formRegister.userAccount"
            placeholder="请输入账号"
            clearable
          />
        </el-form-item>
        <el-form-item
          field="userPassword"
          tooltip="密码不少于 8 位"
          label="密码"
          clearable
        >
          <el-input
            v-model="formRegister.userPassword"
            placeholder="请输入密码"
            type="password"
          />
        </el-form-item>
        <el-form-item
          field="userPassword"
          tooltip="密码不少于 8 位"
          label="密码"
          clearable
        >
          <el-input
            v-model="formRegister.checkPassword"
            placeholder="请再次输入密码"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmitRegister"
            >注册
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { h, reactive, ref } from "vue";
import {
  UserControllerService,
  UserLoginRequest,
  UserRegisterRequest,
} from "../../../generated";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { User } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const formRegister = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserRegisterRequest);

const router = useRouter();
const store = useStore();
const visible = ref(false);
const visibleRegister = ref(false);

const handleCancel = () => {
  visible.value = false;
};
const handleCancelRegister = () => {
  visibleRegister.value = false;
};
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  console.log(res.data);
  if (res.code === 0) {
    await store.dispatch("user/getLoginUser");
    ElMessage({
      message: "登陆成功",
      type: "success",
    });
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    ElMessage({
      message: h("p", null, [
        h("span", null, "登录失败 "),
        h("i", { style: "color: teal" }, res.message),
      ]),
    });
  }
  visible.value = false;
  console.log(form);
};
const handleSubmitRegister = async () => {
  const res = await UserControllerService.userRegisterUsingPost(formRegister);
  if (res.code === 0) {
    ElMessage({
      message: "注册成功",
      type: "success",
    });
    visibleRegister.value = false;
    visible.value = true;
  } else {
    ElMessage({
      message: h("p", null, [
        h("span", null, "注册失败 "),
        h("i", { style: "color: teal" }, res.message),
      ]),
    });
  }
  visible.value = false;
  console.log(form);
};
</script>
