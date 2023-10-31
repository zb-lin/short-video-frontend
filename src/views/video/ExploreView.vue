<script setup lang="ts">
import { onMounted, ref } from "vue";
import { VideoControllerService } from "../../../generated";
import { ElMessage } from "element-plus";

onMounted(() => {
  loadData();
});
const defaultAvatar = ref("http://s32x7tly6.hn-bkt.clouddn.com/head2.jpg");
const dataList = ref([]);

const loadData = async () => {
  const res = await VideoControllerService.recommendUsingGet();
  if (res.code === 0) {
    dataList.value = res.data;
    console.log(dataList.value);
  } else {
    ElMessage.error("请求失败");
  }
};
</script>

<template>
  <el-space wrap size="large">
    <el-col :span="2">
      <el-button round>舞蹈</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>喜剧</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>运动</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>动画</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>漫画</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>表演</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>日常生活</el-button>
    </el-col>
    <el-col :span="2" :offset="1">
      <el-button round>美容护理</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>游戏</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>社会</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>穿搭</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>汽车</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>美食</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>动物</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>家庭</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>戏剧</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>教育</el-button>
    </el-col>
    <el-col :span="2">
      <el-button round>技术</el-button>
    </el-col>
  </el-space>
  <li class="infinite-list-item">
    <el-space wrap size="large">
      <div v-for="video in dataList" :key="video.id">
        <el-card style="height: 600px">
          <el-row>
            <video
              :src="video.url"
              controls
              width="250"
              height="500"
              preload="auto"
            ></video>
          </el-row>
        </el-card>
      </div>
    </el-space>
  </li>
</template>

<style scoped></style>
