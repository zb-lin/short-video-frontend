<template>
  <el-button style="margin-top: 8px; height: 35px; width: 90px" :icon="Plus">
    <el-text tag="b">上传</el-text>
  </el-button>
  <el-dialog
    v-model:visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    :closable="closable"
  >
    <el-form :model="form">
      <h2 style="text-align: center">上传视频</h2>
      <el-form-item field="title" tooltip="请输入视频的标题" label="title">
        <el-input v-model="form.title" placeholder="请输入视频的标题" />
      </el-form-item>
      <el-form-item field="content" tooltip="请输入视频的描述" label="content">
        <el-input v-model="form.content" placeholder="请输入视频的描述" />
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="form.tags">
          <el-row :gutter="20">
            <el-col>
              <el-checkbox value="知识">知识</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="游戏">游戏</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="娱乐">娱乐</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="二次元">二次元</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="音乐">音乐</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="美食">美食</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="体育">体育</el-checkbox>
            </el-col>
            <el-col>
              <el-checkbox value="时尚">时尚</el-checkbox>
            </el-col>
          </el-row>
        </el-checkbox-group>
      </el-form-item>
      <el-upload
        class="upload-demo"
        drag
        action="http://localhost:8081/api/file/upload"
        multiple
        :data="data"
        :withCredentials="true"
        :onSuccess="(response?: any) => getUrl(response)"
        style="text-align: center"
      >
        <el-icon class="el-icon--upload">
          <upload-filled />
        </el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </el-form>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { VideoControllerService } from "../../../generated";
import { Plus, UploadFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const handleClick = () => {
  visible.value = true;
};
const visible = ref(false);
const closable = ref(false);
const data = ref({ biz: "video" });

let form = ref({
  content: "",
  tags: [],
  title: "",
  url: "",
});
const getUrl = (response: any) => {
  form.value.url = response.data.filepath;
};
const handleOk = async () => {
  const res = await VideoControllerService.addVideoUsingPost(form.value);
  if (res.code === 0) {
    ElMessage({
      message: "上传成功",
      type: "success",
    });
  } else {
    ElMessage.error("上传失败，" + res.message);
  }
  console.log(form.value);
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
</script>
<style scoped></style>
