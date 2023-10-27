<template>
  <div id="UserLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.png" class="logo" />
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href=" https://github.com/zb-lin?tab=repositories" target="_blank"
          >版权所有 违者必究</a
        >
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#UserLayout {
  text-align: center;

  background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png")
    0% 0% / 100% 100%;
}

#UserLayout .header {
  margin-bottom: 16px;
}

#UserLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#UserLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

#UserLayout .logo {
  width: 350px;
  height: 64px;
  margin-top: 40px;
}
</style>
<script setup lang="ts"></script>
