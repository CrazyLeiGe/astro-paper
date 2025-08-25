export const SITE = {
  website: "https://www.d1lab.com/", // 用你已部署的域名替换此处内容
  author: "疯狂的石头",
  profile: "null",
  desc: "一个互联网上的冲浪者，有一颗爱好折腾的心。",
  title: "D1实验室",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15分钟
  showArchives: true,
  showBackButton: true, // 在帖子详情中显示返回按钮
  editPost: {
    enabled: false,
    text: "编辑页面",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // HTML语言代码。将其留空，默认值将为“en”
  timezone: "Asia/Shanghai", // 默认的全局时区（IANA格式） https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
