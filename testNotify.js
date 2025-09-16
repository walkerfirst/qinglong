const notify = require('./sendNotify');

// 测试通知
async function testNotify() {
    const title = '测试通知';
    const content = '这是一条测试通知\n' +
        '发送时间: ' + new Date().toLocaleString();

    try {
        console.log('开始发送测试通知...');
        await notify.sendNotify(title, content);
        console.log('通知发送完成，请检查是否收到消息');
    } catch (error) {
        console.error('发送通知时出错:', error);
    }
}

// 直接执行
testNotify();
