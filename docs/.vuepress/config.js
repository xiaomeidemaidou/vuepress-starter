/*
 * @Author: He Xiaomei
 * @Date: 2021-08-04 16:14:26
 * @LastEditors: He Xiaomei
 * @LastEditTime: 2021-08-04 16:59:17
 */
module.exports = {
  title: "Hello Vuepress",
  description: "Just Playing around",
  base: "/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "marko知识点", link: "/marko" },
      { text: "vue基础知识点", link: "/vue/basicKnowledge" },
      { text: "vue重要知识点", link: "/vue/importantKnowledge" },
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
