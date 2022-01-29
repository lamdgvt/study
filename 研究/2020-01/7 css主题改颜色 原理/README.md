
```
(1) 传统
<link href="reset.css" rel="stylesheet" type="text/css">
<link href="default.css" rel="stylesheet" type="text/css" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" type="text/css" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" type="text/css" title="Basic">

没有title属性,rel属性值仅仅是stylesheet的 <link> 无论如何都会加载并渲染,如reset.css;
有title属性,rel属性值仅仅是stylesheet的 <link> 作为默认样式CSS文件加载并渲染,如default.css;
有title属性,rel属性值同时包含alternate stylesheet的 <link> 作为备选样式CSS文件加载,默认不渲染如red.css和green.css;


(2) Element-UI 有换肤功能
先把默认主题文件中涉及到颜色的 CSS 值替换成关键词：https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L250-L274
根据用户选择的主题色生成一系列对应的颜色值：https://github.com/ElementUI/theme-preview/blob/master/src/utils/formula.json
把关键词再换回刚刚生成的相应的颜色值：https://github.com/ElementUI/theme-preview/blob/master/src/utils/color.js
直接在页面上加 style 标签，把生成的样式填进去：https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L198-L211

(3) less 的 modifyVars 基于编译
handleColorChange (color) {
    less.modifyVars({  // 调用 `less.modifyVars` 方法来改变变量值'
         @themeColor':color
         })
    .then(() => {
         console.log('修改成功');
    });
};

(4) css 变量方法
body {
   --themeColor:#000;
}
.main {
   color: var(--themeColor);
}

document.body.style.setProperty('--themeColor', '#ff0000');
```



