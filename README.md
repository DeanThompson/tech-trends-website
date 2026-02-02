# 技术趋势日报网站

AI 驱动的技术趋势监控平台，每天自动生成技术趋势日报。

## 功能特性

- 🔥 实时监控 GitHub、Twitter/X、Hacker News 等平台
- 🤖 AI 自动分析和生成日报
- 💡 提供受益行业和变现机会洞察
- 📱 响应式设计，支持移动端
- ⚡ Vercel 自动部署

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **样式**: Tailwind CSS, Font Awesome
- **部署**: Vercel
- **AI**: OpenClaw

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/DeanThompson/tech-trends-website.git
cd tech-trends-website

# 安装依赖（如果需要）
npm install

# 启动本地服务器
npm run dev

# 访问 http://localhost:3000
```

## 构建和部署

```bash
# 构建网站
npm run build

# 部署到 Vercel
vercel --prod
```

## 项目结构

```
tech-trends-website/
├── index.html          # 主页
├── styles/            # 样式文件
│   └── main.css
├── scripts/           # JavaScript 文件
│   ├── main.js        # 前端逻辑
│   └── build.js      # 构建脚本
├── reports/           # 日报文件
├── public/            # 静态资源
├── vercel.json        # Vercel 配置
└── package.json       # 项目配置
```

## 订阅日报

访问网站并输入邮箱地址，即可订阅每日技术趋势日报。

## 许可证

MIT License

---

Built with 🦞 OpenClaw
