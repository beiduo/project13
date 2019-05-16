# 多站点前端项目

这个项目使用使用VUE，但是并非必须，VUE可能也并非最佳选择。

目标是开发、管理和维护大量由同一个主干衍生出来，并且经过不同程度的客制化开发的网站或者web app

## 运行开发环境

```
npm i
npm run dev
```

## 项目打包

```
npm run build
```

## Git分支规范

```
master

trunk

    dev
        feature_
        bug_

    sample
        sample_dev
            sample_feature_
            sample_bug_
```

## 目录和文件规范

### 目录及文件名的定义

目录和文件名必须描述该类、函数、模块、变量等的性质和用途，使用英文，避免出现***1， ***2这样易于混淆的命名

### Vue components

除了App.vue之外，每个VUE组件，都是一个单独的文件夹，分为三个文件：index.vue, index.js, index.scss

文件夹的名字必须与index.js中export的component类的名字完全一致，并遵循Pascal式命名。

- container/ page容器
- components/ 通用组件
- views/ 与路由相关联的组件，每个组件都对应一个路由，并且在命名上保持一致, (例如：路由"admin/dashboard"引用的views组件需要被命名为"AdminDashboard")

### lib

lib文件夹是通用的函数以及常量库，使用首字母小写的驼峰式命名

### store

store内是应用的状态数据的模型及其操作使用逻辑，每个数据对象模型都创建一个单独的model，并使用首字母小写的驼峰式命名。如：users.js, user.js

