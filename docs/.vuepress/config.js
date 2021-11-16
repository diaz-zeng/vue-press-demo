/*
 * @Date: 2021-11-12 16:15:50
 * @LastEditors: 曾令宇
 * @LastEditTime: 2021-11-12 17:24:55
 * @FilePath: /vue-press-demo/docs/.vuepress/config.js
 */
module.exports = {
    theme: 'vdoing', // 使用npm包主题
    title: '站点名称',
    base: '/vue-press-demo/',
    markdown: {
        toc: {
            includeLevel: [2, 3, 4]
        },
        lineNumber: true // 代码块行号
    },
    themeConfig: {
      	// 导航栏配置
        nav: [
            { text: '首页', link: '/' }, {
                text: '索引',
                link: '/archives/',
                items: [
                    { text: '分类', link: '/categories/' },
                    { text: '标签', link: '/tags/' },
                    { text: '归档', link: '/archives/' },
                ],
            }

        ],
        // sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        author: {
            // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
            name: '你的名字', // 必需
            link: '你的github或者其他个人主页链接', // 可选的
        },
        social: {
            // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/diaz-zeng', // 替换成你的github地址或者删除整个icons字段
                },
            ],
        },
        // 页脚信息
        footer: {
            createYear: 2021, // 博客创建年份
            copyrightInfo:
                '你的名字 | <a href="#" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
        },
    },
    head: [
        [
            'meta',
            {
                name: 'keywords',
                content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
            },
        ],
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    ],
    plugins: [
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        [
            'thirdparty-search',
            {
                thirdparty: [
                    // 可选，默认 []
                    {
                        title: '在MDN中搜索',
                        frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                        behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                    },
                    {
                        title: '在Runoob中搜索',
                        frontUrl: 'https://www.runoob.com/?s=',
                    },
                    {
                        title: '在Vue API中搜索',
                        frontUrl: 'https://cn.vuejs.org/v2/api/#',
                    },
                    {
                        title: '在Bing中搜索',
                        frontUrl: 'https://cn.bing.com/search?q=',
                    },
                    {
                        title: '通过百度搜索',
                        frontUrl: 'https://www.baidu.com/s?wd=',
                    },
                ],
            },
        ],
        [
            'one-click-copy',
            {
                // 代码块复制按钮
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs') // https://day.js.org/
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            },
        ],
    ]
    ,
}

