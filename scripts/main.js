// Tech Trends Website - Main JavaScript

// 配置
const CONFIG = {
    REPORTS_DIR: 'reports',
    API_BASE: '/api'
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadLatestReport();
    loadArchive();
    setupSubscribeForm();
    animateStats();
});

// 加载最新日报
async function loadLatestReport() {
    const content = document.getElementById('reportContent');
    
    try {
        // 尝试加载最新的日报
        const response = await fetch('/api/latest-report');
        
        if (response.ok) {
            const data = await response.text();
            content.innerHTML = data;
        } else {
            // 如果 API 不可用，加载默认报告
            content.innerHTML = getDefaultReport();
        }
    } catch (error) {
        console.error('加载报告失败:', error);
        content.innerHTML = getDefaultReport();
    }
}

// 加载历史日报
async function loadArchive() {
    const archiveList = document.getElementById('archiveList');
    
    // 模拟数据（实际应从 API 获取）
    const archives = [
        {
            date: '2026-02-02',
            title: 'OpenClaw 生态爆发',
            preview: 'GitHub Trending 显示多个 OpenClaw 相关项目冲榜...'
        },
        {
            date: '2026-02-01',
            title: 'AI Agent 新趋势',
            preview: '多家公司发布 AI Agent 产品，生态持续扩张...'
        },
        {
            date: '2026-01-31',
            title: 'Claude Code 入驻微软',
            preview: 'Hacker News 热议：Claude Code 突然在微软内部...'
        },
        {
            date: '2026-01-30',
            title: 'Waymo 百亿估值',
            preview: '自动驾驶公司 Waymo 寻求 160 亿美元融资...'
        }
    ];
    
    archiveList.innerHTML = archives.map(archive => `
        <a href="#" class="archive-item" data-date="${archive.date}">
            <div class="archive-date">${formatDate(archive.date)}</div>
            <div class="archive-title">${archive.title}</div>
            <div class="archive-preview">${archive.preview}</div>
        </a>
    `).join('');
}

// 设置订阅表单
function setupSubscribeForm() {
    const form = document.getElementById('subscribeForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = form.querySelector('input').value;
        const button = form.querySelector('button');
        
        // 显示加载状态
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 订阅中...';
        button.disabled = true;
        
        // 模拟订阅请求
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 显示成功消息
        button.innerHTML = '<i class="fas fa-check"></i> 订阅成功！';
        button.style.background = '#27ae60';
        
        // 重置表单
        form.querySelector('input').value = '';
        
        // 3秒后恢复
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-paper-plane"></i> 订阅';
            button.style.background = '';
            button.disabled = false;
        }, 3000);
    });
}

// 数字动画
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (isNaN(target) || target === 0) return;
        
        let current = 0;
        const increment = target / 30;
        const duration = 1000;
        const step = duration / 30;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, step);
    });
}

// 格式化日期
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('zh-CN', options);
}

// 默认报告（fallback）
function getDefaultReport() {
    return `
<div class="report">
    <h1>📊 技术趋势日报</h1>
    <div class="report-meta">
        <span>📅 2026年02月02日</span>
        <span>|</span>
        <span>⏰ 23:45</span>
        <span>|</span>
        <span>🔗 GitHub + Hacker News + Twitter</span>
    </div>

    <h2>🔥 AI/ML 动态</h2>

    <div class="trend-item">
        <h3>1. OpenClaw 生态爆发 <span class="importance">⭐⭐⭐⭐⭐</span></h3>
        <p><strong>事件摘要</strong>:</p>
        <ul>
            <li>Cloudflare 发布 <code>moltworker</code> - 在 Cloudflare Workers 上运行 OpenClaw，6316 stars</li>
            <li>Anthony Fu 发布 <code>skills</code> 技能合集 - 2657 stars</li>
            <li>国内社区发布 <code>OpenClawChineseTranslation</code> 汉化版</li>
        </ul>
        <p><strong>受益行业/公司</strong>:
            云服务商（Cloudflare、Vercel）、AI 开发工具公司（Cursor、GitHub Copilot）、中文 AI 社区
        </p>
        <p><strong>影响时间线</strong>: 短期（1-3个月）</p>
    </div>

    <div class="trend-item">
        <h3>2. 轻量化 AI Agent 趋势 <span class="importance">⭐⭐⭐⭐</span></h3>
        <p><strong>事件摘要</strong>:</p>
        <ul>
            <li><code>nanoclaw</code> - Apple 容器中的个人 Claude 助手（2200 stars）</li>
            <li><code>nanobot</code> - 超轻量级 Clawdbot（1414 stars）</li>
            <li>Qwen3-ASR 发布多语言语音识别模型</li>
        </ul>
        <p><strong>受益行业/公司</strong>:
            本地 AI 硬件厂商（Apple、高通）、边缘计算设备商、隐私优先的 AI 应用
        </p>
        <p><strong>影响时间线</strong>: 中期（3-6个月）</p>
    </div>

    <h2>💰 变现机会洞察</h2>
    <div class="trend-item">
        <h3>短期（1-3个月）</h3>
        <ul>
            <li>OpenClaw 技能开发：大量新用户涌入，技能市场需求旺盛</li>
            <li>Claude Code 培训：微软员工需要培训服务</li>
            <li>中文教程/汉化：国内 OpenClaw 热度上升</li>
        </ul>
    </div>

    <div class="quote">
        "OpenClaw 的爆发证明了一件事：开源 AI 代理的'Linux 时刻'已经到来。不同的是，这次不会再等 20 年。"
    </div>

    <div class="report-meta" style="margin-top: 2rem; text-align: center;">
        <em>本报告由 AI 自动生成 | 数据截止: 2026-02-02 23:45</em><br>
        <em>免责声明：仅供参考，不构成投资建议</em>
    </div>
</div>
    `;
}

// 导出函数供外部使用
window.TechTrends = {
    loadLatestReport,
    loadArchive,
    formatDate
};
