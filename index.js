const mineflayer = require('mineflayer');

function startBot() {
    console.log("🚀 جاري محاولة الدخول ببروتوكول ثابت (1.21.4)...");
    
    const bot = mineflayer.createBot({
        host: 'achkhassek.aternos.me',
        port: 27162,
        username: 'Pikachu_Bot',
        // فرض النسخة باش يتجاوز مشكل الـ autoVersion والـ 769/773
        version: '1.21.4', 
        // وقت أطول للاتصال باش نتفاداو ETIMEDOUT
        connectTimeout: 60000 
    });

    bot.on('spawn', () => {
        console.log('✅ ناضي! البوت دخل للسيرفر وخدام.');
    });

    bot.on('error', (err) => {
        console.log('❌ مشكل في الاتصال:', err.message);
        // إلا عطاك ETIMEDOUT، راه السيرفر تقيل أو طافي
    });

    bot.on('end', (reason) => {
        console.log('🔄 انقطع الاتصال بسباب: ' + reason + '. غنعاودو بعد 15 ثانية...');
        setTimeout(startBot, 15000);
    });
}

// تشغيل
startBot();
