---
title: 1panel面板Docker安装Umami
description: 1panel面板Docker安装Umami的方法
pubDatetime: 2025-03-02T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
slug: 1panel-Docker-Umami
featured: false
tags:
  - Umami
  - Docker
---
[Umami](https://github.com/umami-software/umami) 是 Google Analytics 的简单、快速、注重隐私的替代方案，1panel面板里的应用商店提供umami使用的是ghcr.io（GitHub 提供的容器镜像注册表服务，允许开发者在 GitHub 上存储、管理和分享 Docker 镜像）下载镜像，在国内网络环境经常连接不上或者速度很慢，此时可以使用镜像加速的方法拉取镜像。
# 镜像地址

```html
https://ghcr.nju.edu.cn
```
# 操作方法

可以在安装应用时，勾选编辑compose文件，将“image:”镜像地址修改为https://ghcr.nju.edu.cn，然后点击确定就可以正常拉取镜像了。
![20250320141952596.webp](https://image.banbo.net/2025/20250821121428587.webp)
```bash
services:
umami:
image: https://ghcr.nju.edu.cn/umami-software/umami:${PANEL_DB_TYPE}-v2.17.0
container_name: ${CONTAINER_NAME}
restart: always
labels:
createdBy: "Apps"
ports:
- ${PANEL_APP_PORT_HTTP}:3000
environment:
DATABASE_TYPE: ${PANEL_DB_TYPE}
DATABASE_URL: ${PANEL_DB_TYPE}://${PANEL_DB_USER}:${PANEL_DB_USER_PASSWORD}@${PANEL_DB_HOST}:${PANEL_DB_PORT}/${PANEL_DB_NAME}
APP_SECRET: ${HASH_SALT}
networks:
- 1panel-network
networks:
1panel-network:
external: true
```