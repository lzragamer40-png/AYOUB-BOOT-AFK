const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'achkhassek.aternos.me',
        port: 27162,
        username: 'Pikachu_Bot',
        // هنا حددنا النسخة اللي كتعادل بروتوكول 769
        version: '1.21.3', 
        hideErrors: true
    });

    bot.on('spawn', () => {
        console.log('✅ ناضي! البوت دخل للسيرفر بنجاح.');
    });

    bot.on('error', (err) => {
        console.log('❌ مشكل:', err.message);
    });

    bot.on('end', () => {
        console.log('🔄 انقطع الاتصال، كيحاول يرجع...');
        setTimeout(createBot, 15000);
    });
}

createBot();
