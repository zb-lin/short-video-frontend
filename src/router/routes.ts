import { RouteRecordRaw } from "vue-router";
import UserLoginView from "@/views/user/UserLoginView.vue";
import HomeView from "@/views/HomeView.vue";
import FollowView from "@/views/video/FollowView.vue";
import ExploreView from "@/views/video/ExploreView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: HomeView,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/",
    name: "推荐",
    component: HomeView,
  },
  {
    path: "/video/follow",
    name: "已关注",
    component: FollowView,
    props: true,
  },
  {
    path: "/video/explore",
    name: "探索",
    component: ExploreView,
    props: true,
  },
];
