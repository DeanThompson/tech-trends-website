#!/usr/bin/env node
// 构建脚本：复制日报到网站目录

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../tech-trend-monitor/output');
const TARGET_DIR = path.join(__dirname, 'reports');

// 确保目标目录存在
if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// 获取最新的日期文件夹
function getLatestDateDir() {
    if (!fs.existsSync(SOURCE_DIR)) {
        console.error('源目录不存在:', SOURCE_DIR);
        return null;
    }
    
    const dirs = fs.readdirSync(SOURCE_DIR)
        .filter(name => /^\d{4}-\d{2}-\d{2}$/.test(name))
        .sort()
        .reverse();
    
    return dirs[0] || null;
}

// 复制文件
function copyLatestReport() {
    const latestDate = getLatestDateDir();
    
    if (!latestDate) {
        console.log('没有找到日报文件');
        return;
    }
    
    const sourceFile = path.join(SOURCE_DIR, latestDate, 'daily_report.md');
    const targetFile = path.join(TARGET_DIR, `${latestDate}.md`);
    
    if (!fs.existsSync(sourceFile)) {
        console.log('日报文件不存在:', sourceFile);
        return;
    }
    
    // 复制文件
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✅ 已复制日报: ${latestDate}`);
    
    // 更新最新报告链接
    updateLatestReportLink(latestDate);
}

// 更新最新报告链接
function updateLatestReportLink(date) {
    const indexFile = path.join(__dirname, 'index.html');
    
    // 这里可以添加逻辑来更新 HTML 中的最新报告链接
    // 目前使用前端动态加载
}

// 主函数
function main() {
    console.log('🚀 开始构建网站...');
    copyLatestReport();
    console.log('✅ 构建完成！');
}

main();
