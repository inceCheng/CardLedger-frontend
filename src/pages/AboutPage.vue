<template>
  <div id="about" class="about">
    <h1>关于打牌积分系统</h1>
    
    <div class="info-section">
      <h2>系统功能</h2>
      <ul>
        <li>用户注册和登录</li>
        <li>创建和加入游戏房间</li>
        <li>房间内积分转账</li>
        <li>交易记录查看</li>
        <li>移动端适配</li>
      </ul>
    </div>

    <div class="avatar-demo">
      <h2>头像展示</h2>
      <div class="avatar-examples">
        <div class="avatar-item">
          <a-avatar :size="64" src="/user_me.png" />
          <p>我的头像</p>
        </div>
        <div class="avatar-item">
          <a-avatar :size="64" src="/user_other.png" />
          <p>其他用户头像</p>
        </div>
      </div>
    </div>

    <div class="tech-stack">
      <h2>技术栈</h2>
      <p>Vue 3 + TypeScript + Ant Design Vue + Pinia + Vite</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.about h1 {
  color: #1890ff;
  text-align: center;
  margin-bottom: 40px;
}

.about h2 {
  color: #333;
  border-bottom: 2px solid #1890ff;
  padding-bottom: 8px;
  margin: 32px 0 16px 0;
}

.info-section ul {
  list-style-type: none;
  padding: 0;
}

.info-section li {
  background: #f0f2f5;
  margin: 8px 0;
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid #1890ff;
}

.avatar-demo {
  text-align: center;
}

.avatar-examples {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
}

.avatar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.avatar-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.tech-stack {
  text-align: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 32px;
}

.tech-stack p {
  font-size: 16px;
  color: #555;
  margin: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .about {
    padding: 20px 16px;
  }
  
  .avatar-examples {
    gap: 20px;
  }
  
  .about h1 {
    font-size: 24px;
  }
}
</style>
