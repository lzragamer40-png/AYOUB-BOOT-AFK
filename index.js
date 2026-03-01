const mineflayer = require('mineflayer');

// معلومات السيرفر ديالك من الصورة
const serverConfig = {
    host: 'achkhassek.aternos.me',
    port: 27162,
    username: 'Pikachu_Bot',
    version: false // غيخليه يكتشف النسخة راسو بلا ما نغلطو في الرقم
};

function createBot() {
    console.log("🚀 جاري محاولة الدخول للسيرفر...");
    
    const bot = mineflayer.createBot(serverConfig);

    bot.on('spawn', () => {
        console.log('✅ البوت دخل بنجاح! السيرفر دابا ماغاديش يطفا.');
        // حركة بسيطة باش ما يخرجش AFK
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    bot.on('chat', (username, message) => {
        if (username === bot.username) return;
        if (message === 'hello') bot.chat('Marhba bikom f server!');
    });

    bot.on('error', (err) => {
        console.log('❌ وقع خطأ:', err.message);
    });

    bot.on('end', () => {
        console.log('🔄 الاتصال انقطع، غنعاودو بعد 20 ثانية...');
        setTimeout(createBot, 20000);
    });
}

createBot();
