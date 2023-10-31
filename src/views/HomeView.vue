<template>
  <ul
    v-infinite-scroll="load"
    class="infinite-list"
    style="overflow: auto; margin-left: 0"
  >
    <li v-for="video in dataList" :key="video.id" class="infinite-list-item">
      <el-card style="height: 650px">
        <el-row>
          <el-avatar
            :size="50"
            :src="video.user.userAvatar"
            style="margin-left: 200px"
          />
          <el-space direction="vertical">
            <el-text tag="b" style="margin-left: 7px; margin-bottom: 0"
              >{{ video.user.userName }}
            </el-text>
            <el-text tag="p" style="margin-left: 7px; margin-bottom: 4px"
              >{{ video.content }}
            </el-text>
          </el-space>
          <el-button
            type="warning"
            style="margin-left: 350px; height: 40px; width: 100px"
            size="large"
            plain
            >关注
          </el-button>
        </el-row>
        <el-row>
          <video
            :src="video.url"
            controls
            width="300"
            height="540"
            preload="auto"
            style="margin-left: 250px; margin-top: 20px"
          ></video>
          <el-space direction="vertical">
            <el-button
              type="info"
              circle
              style="margin-top: 300px; margin-left: 20px"
              size="large"
            >
              <span class="icon iconfont icon-aixin"></span>
            </el-button>
            <el-text style="margin-left: 20px">{{ video.thumbNum }}</el-text>
            <el-button
              type="info"
              circle
              style="margin-top: 5px; margin-left: 20px; font-size: 20px"
              size="large"
            >
              <span class="icon iconfont icon-pinglun"></span>
            </el-button>
            <el-text style="margin-left: 20px">{{ video.thumbNum }}</el-text>
            <el-button
              type="info"
              circle
              style="margin-top: 5px; margin-left: 20px; font-size: 20px"
              size="large"
              :icon="Star"
            >
            </el-button>
            <el-text style="margin-left: 20px">{{ video.favourNum }}</el-text>
          </el-space>
        </el-row>
      </el-card>
    </li>
  </ul>
  <!--    <icon-heart size="40" @click="doThumb(1)" />-->
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { VideoControllerService } from "../../generated";
import { ElMessage } from "element-plus";
import { Star } from "@element-plus/icons-vue";

onMounted(() => {
  loadData();
});
const defaultAvatar = ref("http://s32x7tly6.hn-bkt.clouddn.com/head2.jpg");

const loadData = async () => {
  const res = await VideoControllerService.recommendUsingGet();
  if (res.code === 0) {
    dataList.value = res.data;
    console.log(dataList.value);
  } else {
    ElMessage.error("请求失败");
  }
};
const load = async () => {
  count.value += 2;
};
const defaultVideo = ref(
  "http://s32x7tly6.hn-bkt.clouddn.com/video/1719245355229995009/5gLHiZCS-Download.mp4"
);
const count = ref(0);
const dataList = ref([]);
</script>
<style scoped>
.box_relative {
  position: absolute;
  right: 30px;
  top: 50%;
  z-index: 11;
}

.infinite-list {
  height: 595px;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
