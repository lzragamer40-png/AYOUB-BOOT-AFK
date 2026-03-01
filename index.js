const mineflayer = require('mineflayer');

// هاد الكود مجموع ومقاد باش ما يعطيك حتى Error
const botArgs = {
    host: 'achkhassek.aternos.me',
    port: 27162,
    username: 'Pikachu_Bot',
    version: false // غيخليه يكتشف النسخة راسو بلا صداع الراس
};

function startBot() {
    console.log("🚀 جاري تشغيل البوت...");
    const bot = mineflayer.createBot(botArgs);

    bot.on('spawn', () => {
        console.log('✅ البوت دخل للسيرفر! دابا السيرفر غيبقا شاعل 24/7.');
    });

    // حركة باش ما يخرجش AFK
    bot.on('login', () => {
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    bot.on('error', (err) => {
        console.log('❌ وقع مشكل:', err.message);
    });

    bot.on('end', () => {
        console.log('🔄 الاتصال انقطع، كيحاول يرجع بعد 15 ثانية...');
        setTimeout(startBot, 15000);
    });
}

startBot();
