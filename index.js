const mineflayer = require('mineflayer');

const botArgs = {
    host: 'achkhassek.aternos.me',
    port: 27162,
    username: 'Pikachu_Bot',
    version: '1.21.4' // دابا النسخة مطابقة للسيرفر 100%
};

function startBot() {
    console.log("🚀 جاري الاتصال بسيرفر 1.21.4...");
    const bot = mineflayer.createBot(botArgs);

    bot.on('spawn', () => {
        console.log('✅ ناضي! البوت دخل للسيرفر وخدام.');
        // كيدير حركة باش ما يخرجش AFK كل 30 ثانية
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    bot.on('error', (err) => {
        console.log('❌ مشكل:', err.message);
    });

    bot.on('end', () => {
        console.log('🔄 انقطع الاتصال، غنعاودو بعد 15 ثانية...');
        setTimeout(startBot, 15000);
    });
}

startBot();
