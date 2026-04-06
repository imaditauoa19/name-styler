let currentFilter = 'all';

// خرائط الحروف الإنجليزية لتوليد خطوط تلقائية
const fonts = {
    circle: { a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ' },
    square: { a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: ' get', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉' },
    bold: { a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣', k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭', u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳' }
};

// قاموس تبديل الحروف العربية لإنشاء "خطوط عربية" مزخرفة
const arabicStyles = [
    {
        // ستايل 1: خط (هہذآ آلخہطہ)
        map: { 'ا':'آ', 'ب':'بہ', 'ت':'تہ', 'ث':'ثہ', 'ج':'جہ', 'ح':'حہ', 'خ':'خہ', 'د':'د', 'ذ':'ذ', 'ر':'ر', 'ز':'ز', 'س':'سہ', 'ش':'شہ', 'ص':'صہ', 'ض':'ضه', 'ط':'طه', 'ظ':'ظه', 'ع':'ع', 'غ':'غ', 'ف':'فه', 'ق':'قه', 'ك':'كہ', 'ل':'ل', 'م':'مہ', 'ن':'نہ', 'ه':'هہ', 'و':'و', 'ي':'ي' }
    },
    {
        // ستايل 2: خط (هےـِذآ آلخےـطےـ)
        map: { 'ا':'آ', 'ب':'بّـ', 'ت':'تُـ', 'ث':'ثًـ', 'ج':'جَـ', 'ح':'حًـ', 'خ':'خٌـ', 'س':'سًـ', 'ش':'شّـ', 'ص':'صِـ', 'ض':'ضًـ', 'ط':'طٌـ', 'ظ':'ظٌـ', 'ع':'عَـ', 'غ':'غّـ', 'ف':'فُـ', 'ق':'قَـ', 'ك':'ڪ', 'ل':'لَـ', 'م':'مِـ', 'ن':'نٌـ', 'ه':'هِـ', 'ي':'يّـ' }
    },
    {
        // ستايل 3: خط (هـ༈ۖ҉ـذآ خـ༈ۖ҉ـط)
        map: { 'ا':'آ', 'ب':'بـ༈ۖ҉ـ', 'ت':'تـ༈ۖ҉ـ', 'ث':'ثـ༈ۖ҉ـ', 'ج':'جـ༈ۖ҉ـ', 'ح':'حـ༈ۖ҉ـ', 'خ':'خـ༈ۖ҉ـ', 'س':'سـ༈ۖ҉ـ', 'ش':'شـ༈ۖ҉ـ', 'ص':'صـ༈ۖ҉ـ', 'ض':'ضـ༈ۖ҉ـ', 'ع':'عـ༈ۖ҉ـ', 'غ':'غـ༈ۖ҉ـ', 'ف':'فـ༈ۖ҉ـ', 'ق':'قـ༈ۖ҉ـ', 'ك':'كـ༈ۖ҉ـ', 'ل':'لـ༈ۖ҉ـ', 'م':'مـ༈ۖ҉ـ', 'ن':'نـ༈ۖ҉ـ', 'ه':'هـ༈ۖ҉ـ', 'ي':'يـ༈ۖ҉ـ' }
    },
    {
        // ستايل 4: خط (هِذآ آلَخـــــــط)
        map: { 'ا':'آ', 'ب':'بّ', 'ت':'تُ', 'ث':'ثً', 'ج':'جَ', 'ح':'حً', 'خ':'خٌ', 'س':'سً', 'ش':'شّ', 'ص':'صِ', 'ض':'ضً', 'ط':'طٌ', 'ظ':'ظٌ', 'ع':'عَ', 'غ':'غّ', 'ف':'فُ', 'ق':'قَ', 'ك':'ڪ', 'ل':'لَ', 'م':'مِ', 'ن':'نٌ', 'ه':'هِ', 'ي':'يّ' }
    }
];

function applyFont(text, fontMap) {
    return text.toLowerCase().split('').map(char => fontMap[char] || char).join('');
}

function applyArabicFont(text, styleMap) {
    return text.split('').map(char => styleMap[char] || char).join('');
}

function generateAllDecorations() {
    const input = document.getElementById('username').value.trim();
    const resultsContainer = document.getElementById('results');
    const statsText = document.getElementById('stats-text');
    resultsContainer.innerHTML = '';

    if (!input) {
        statsText.innerText = "اكتب شيئاً لتبدأ السحر...";
        return;
    }

    let allDecorations = [];
    const isArabic = /[\u0600-\u06FF]/.test(input);

    if (isArabic) {
        arabicStyles.forEach(style => {
            allDecorations.push({ type: 'ar', text: applyArabicFont(input, style.map) });
        });
        const chars = input.split('');
        allDecorations.push({ type: 'ar', text: chars.join('ـ') }); 
        allDecorations.push({ type: 'ar', text: chars.join('ْ') }); 
        allDecorations.push({ type: 'ar', text: chars.join('ٰ') }); 
        allDecorations.push({ type: 'ar', text: chars.join('۪') }); 
    }

    const rawTemplates = [
        `︻╦̵̵͇̿̿̿̿╤── [NAME]`, `[NAME] ╾━╤デ╦︻`, `▄︻デ[NAME]══━一`, `⌐╦╦═─ [NAME]`, `︻┳デ═— [NAME]`, `︻┻┳═一 [NAME]`, `︻┳═一 [NAME]`, `╾━╤デ╦︻ [NAME]`, `[NAME] ︻┳═一`, `[NAME] ⌐╦def═─`,
        `亗 [NAME] 亗`, `♛ [NAME] ♛`, `♚ [NAME] ♚`, `『★』[NAME]『★』`, `꧁༒ [NAME] ༒꧂`, `♛[NAME]♛`, `★彡 [NAME] 彡★`, `【☆ [NAME] ☆】`, `꧁ [NAME] ꧂`, `✧[NAME]✧`, `༺ [NAME] ༻`, `᚛ [NAME] ᚜`,
        `ム [NAME]`, `王 [NAME]`, `女 [NAME]`, `気 [NAME]`, `神 [NAME]`, `龍 [NAME]`, `血 [NAME]`, `死 [NAME]`, `愛 [NAME]`, `空 [NAME]`, `忍 [NAME]`, `影 [NAME]`, `[NAME] 侍`, `[NAME] 鬼`, `[NAME] 闇`, `々[NAME]々`, `彡[NAME]彡`, `ツ [NAME] ツ`, `〆 [NAME] 〆`, `父 [NAME] 父`,
        `𓆩 [NAME] 𓆪`, `𓆩[NAME]𓆪`, `𓅓 [NAME] 𓅓`, `𓃠 [NAME] 𓃠`, `𓆗 [NAME] 𓆗`, `𓆙 [NAME] 𓆙`, `𓂀 [NAME] 𓂀`, `𓁹 [NAME] 𓁹`, `𓋹 [NAME] 𓋹`, `𓍝 [NAME] 𓍝`, `𓃬 [NAME] 𓃬`, `𓆣 [NAME] 𓆣`, `𓅔 [NAME] 𓅔`, `𓄿 [NAME] 𓄿`, `𓆃 [NAME] 𓆃`,
        `【[NAME]】`, `『[NAME]』`, `「[NAME]」`, `〖[NAME]〗`, `《[NAME]》`, `⎝[NAME]⎠`, `⎨[NAME]⎬`, `﹃[NAME]﹄`, `◥ [NAME] ◤`, `⫷ [NAME] ⫸`, `⪻ [NAME] ⪼`, `╰‿╯ [NAME]`, `⌈[NAME]⌉`, `⌊[NAME]⌋`, `⟦[NAME]⟧`,
        `☠️ [NAME] ☠️`, `🔥 [NAME] 🔥`, `☬[NAME]☬`, `♜[NAME]♜`, `🔱 [NAME] 🔱`, `✨ [NAME] ✨`, `☣️ [NAME] ☣️`, `⚕️ [NAME] ⚕️`, `☠ [NAME] ☠`, `×[NAME]×`, `® [NAME] ®`, `々[NAME]★`, `๛ [NAME] ๛`, `气 [NAME] 气`,
        `๑ [NAME] ๑`, `۞ [NAME] ۞`, `✿ [NAME] ✿`, `⚡︎ [NAME] ⚡︎`, `★ [NAME] ★`, `✪ [NAME] ✪`, `✧ [NAME] ✧`, `✦ [NAME] ✦`, `☽ [NAME] ☽`, `☾ [NAME] ☾`, `♡ [NAME] ♡`, `⚓ [NAME] ⚓`, `⚔ [NAME] ⚔`,
        `凸(•‿•)凸 [NAME]`, `¯\\_(ツ)_/¯ [NAME]`, `( ͡° ͜ʖ ͡°) [NAME]`, `(╯°□°）╯ [NAME]`, `≧◉◡◉≦ [NAME]`, `ʕ•ᴥ•ʔ [NAME]`, `(•◡•) [NAME]`, `ಠ_ಠ [NAME]`,
        `࿇ [NAME] ࿇`, `༒ [NAME] ༒`, `𖤍 [NAME] 𖤍`, `𖣘 [NAME] 𖣘`, `𒀱 [NAME] 𒀱`, `᪥ [NAME] ᪥`, `࿐ [NAME] ࿐`, `☯ [NAME] ☯`, `🕉 [NAME] 🕉`, `『ツ』[NAME]`, `【女】[NAME]`, `「神」[NAME]`, `〖死〗[NAME]`, `《龍》[NAME]`
    ];

    rawTemplates.forEach(template => {
        allDecorations.push({ type: 'ar', text: template.replace('[NAME]', input) });
    });

    if (isArabic) {
        const fancyArabic = applyArabicFont(input, arabicStyles[0].map);
        rawTemplates.slice(0, 10).forEach(template => {
            allDecorations.push({ type: 'ar', text: template.replace('[NAME]', fancyArabic) });
        });
    }

    if (/^[a-zA-Z0-9 ]+$/.test(input)) {
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.circle) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.square) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.bold) });
        allDecorations.push({ type: 'en', text: input.toUpperCase().split('').join(' ') });
        allDecorations.push({ type: 'en', text: `xX_${input}_Xx` });
    }

    const symStyles = [
        `︻╦̵̵͇̿̿̿̿╤── ${input}`, `${input} ╾━╤デ╦︻`, `▄︻デ${input}══━一`, 
        `ʚ ${input} ɞ`, `๑ ${input} ๑`, `۞ ${input} ۞`, `✿ ${input} ✿`, 
        `☾ ${input} ☾`, `⚡︎ ${input} ⚡︎`
    ];
    symStyles.forEach(text => allDecorations.push({ type: 'sym', text }));

    let renderedCount = 0;
    allDecorations.forEach(item => {
        if (currentFilter === 'all' || item.type === currentFilter) {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerText = item.text;
            div.onclick = () => copyText(item.text); 
            resultsContainer.appendChild(div);
            renderedCount++;
        }
    });

    statsText.innerText = `تم تفجير ${renderedCount} شكلاً مختلفاً لزخرفتك!`;
}

function filterType(type) {
    currentFilter = type;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    generateAllDecorations();
}

// دالة النسخ الموحدة وظهور الإشعار (Toast)
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.innerText = "تم نسخ: " + text + " 📋";
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    });
}

// تشغيل الأكواد بعد تحميل الصفحة بالكامل لضمان عمل الأزرار
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. برمجة الهامبرغر والنافذة المنبثقة الكاملة ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    
    const openPageBtn = document.getElementById('open-firefire-modal');
    const ffPage = document.getElementById('ff-fullscreen-page');
    const pageCloseBtn = document.getElementById('page-close-btn');

    // فتح القائمة الجانبية (الهامبرغر)
    hamburgerBtn.addEventListener('click', () => {
        sideNav.classList.add('open');
        overlay.classList.add('active');
    });

    // إغلاق القائمة بالضغط على X
    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('active');
    });

    // إغلاق كل شيء بالضغط على التظليل بالخارج
    overlay.addEventListener('click', () => {
        sideNav.classList.remove('open');
        ffPage.classList.remove('active');
        clanPage.classList.remove('active'); // إغلاق صفحة الكلانات أيضاً إذا كانت مفتوحة
        overlay.classList.remove('active');
    });

    // فتح الصفحة الكاملة عند الضغط على زر "زخرفة Bio"
    openPageBtn.addEventListener('click', () => {
        sideNav.classList.remove('open'); // يغلق الهامبرغر أولاً
        overlay.classList.remove('active'); // يخفي التظليل
        ffPage.classList.add('active'); // يظهر صفحة الألعاب الكاملة
    });

    // إغلاق الصفحة الكاملة والعودة للموقع
    pageCloseBtn.addEventListener('click', () => {
        ffPage.classList.remove('active');
    });


    // --- 2. مصفوفات البيانات (الفايرباس، الألوان، الرموز) ---

    // مصفوفة شارات الفاير باس التاريخية (يمكنك إضافة المزيد هنا بسهولة)
    const firePasses = [
        { name: "🌸 فايرباس 1 (ساكورا)", code: "[b][c]樱" },
        { name: "♫فايرباس 2 (هيب هوب)", code: "[b][c]🎧" },
        { name: "♕ فايرباس (الدمار)", code: "[b][c]🔥" },
        { name: "♡ فايرباس (التنين)", code: "[b][c]🐉" },
        { name: "❄️ فايرباس (الجليد)", code: "[b][c]❄️" },
        { name: "🎖️ شارة الـ V الموثقة", code: "[b][c]V" }
    ];

    // مصفوفة الألوان الكاملة
    const ffColors = [
        { name: "🔴 أحمر ساطع", code: "[FF0000]" },
        { name: "🟢 أخضر مشع", code: "[00FF00]" },
        { name: "🔵 أزرق ملكي", code: "[0000FF]" },
        { name: "🟡 أصفر فاقع", code: "[FFFF00]" },
        { name: "🟣 بنفسجي", code: "[FF00FF]" },
        { name: "👑 ذهبي", code: "[FFD700]" }
    ];

    // مصفوفة ضخمة من الرموز النصية النادرة والمفقودة (خالية تماماً من الإيموجيز)
    const ffSymbols = [
        '亗', '♛', '♚', '★', '✪', '✧', '✦', '☽', '☾', '♕', '♔', '⚜', '⚜️', '🔱', '⚜',
        'ム', '王', '女', '気', '神', '龍', '血', '死', '愛', '空', '忍', '影', '侍', '鬼', '闇', '々', '彡', 'ツ', '〆', '父', '卍', '气', '๛', '乇', 'ใ', '囧',
        '𓆩', '𓆪', '𓅓', '𓃠', '𓆗', '𓆙', '𓂀', '𓁹', '𓋹', '𓍝', '𓃬', '𓆣', '𓅔', '𓄿', '𓆃',
        '︻╦̵̵͇̿̿̿̿╤──', '╾━╤デ╦︻', '▄︻デ══━一', '⌐╦╦═─', '︻┳デ═—', '︻┻┳═一', '︻┳═一', '⚔', '⚒', '⚓', '🏹', '💣',
        '【', '】', '『', '』', '「', '」', '〖', '〗', '《', '》', '⎝', '⎠', '⎨', '⎬', '﹃', '﹄', '◥', '◤', '⫷', '⫸', '⪻', '⪼', '⌈', '⌉', '⌊', '⌋', '⟦', '⟧',
        '࿇', '༒', '𖤍', '𖣘', '𒀱', '᪥', '࿐', '☯', '🕉', '☸', '𓆩♡𓆪', '꧁', '꧂', '༺', '༻', '᚛', '᚜',
        '⚡︎', '×', '÷', '＋', '－', '％', '＠', '＃', '＆', '＊', '☠', '☣', '☢', '❂', '❃', '❄', '❅', '❆', '❈', '❉', '❊', '❋',
        '♩', '♪', '♫', '♬', '♭', '♮', '♯', '■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '◄', '▼', '▽', '▾', '▿', '◀', '◁', '◂', '◃', '◄', '◅'
    ];


    // --- 3. توليد الأكواد والعناصر برمجياً داخل الـ HTML ---

    // توليد شارات الفايرباس في الصفحة
    const firepassContainer = document.getElementById('firepass-container');
    firePasses.forEach(pass => {
        const div = document.createElement('div');
        div.className = 'ff-code-box';
        div.innerText = `${pass.name}\n${pass.code}`;
        div.addEventListener('click', () => copyText(pass.code));
        firepassContainer.appendChild(div);
    });

    // توليد الألوان في الصفحة
    const colorsContainer = document.getElementById('colors-container');
    ffColors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'ff-code-box';
        div.innerText = `${color.name}\n${color.code}`;
        div.addEventListener('click', () => copyText(color.code));
        colorsContainer.appendChild(div);
    });

    // توليد الرموز الوفيرة في الصفحة
    const symbolsContainer = document.getElementById('symbols-container');
    ffSymbols.forEach(symbol => {
        const span = document.createElement('span');
        span.className = 'ff-symbol-item';
        span.innerText = symbol;
        span.addEventListener('click', () => copyText(symbol));
        symbolsContainer.appendChild(span);
    });


    // --- 4. برمجة صفحة مولد أسماء الكلانات ---
    const openClanBtn = document.getElementById('open-clan-modal');
    const clanPage = document.getElementById('clan-fullscreen-page');
    const clanCloseBtn = document.getElementById('clan-close-btn');
    const generateBtn = document.getElementById('generate-clan-btn');
    const clanOutput = document.getElementById('clan-output');

    // فتح صفحة الكلانات
    openClanBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('active');
        clanPage.classList.add('active');
    });

    // إغلاق صفحة الكلانات
    clanCloseBtn.addEventListener('click', () => {
        clanPage.classList.remove('active');
    });

    // مصفوفة الكلمات العشوائية
    // مصفوفة تحتوي على 200 كلمة مرعبة وفخمة للكلانات
    const clanWords = [
        // رعب وظلام
        'DEATH', 'GHOST', 'SHADOW', 'DEVIL', 'KILLER', 'VIPER', 'VENOM', 'ZOMBIE', 'VAMPIRE', 'DEMON', 'MONSTER', 'TERROR', 'HORROR', 'DARKNESS', 'NIGHTMARE', 'DOOM', 'BLOOD', 'SKULL', 'BONES', 'GRAVE', 'CURSE', 'HEX', 'WITCH', 'WIZARD', 'PHANTOM', 'SPECTRE', 'BANSHEE', 'REAPER', 'SOUL', 'SPIRIT',
        
        // قتال وحرب
        'STRIKER', 'WARRIOR', 'KNIGHT', 'TITAN', 'MAFIA', 'WOLF', 'NINJA', 'EAGLE', 'FIGHTER', 'SOLDIER', 'HUNTER', 'SNIPER', 'ASSASSIN', 'RAIDER', 'SAVAGE', 'BRUTE', 'CRUSHER', 'SLAYER', 'BUTCHER', 'EXECUTIONER', 'WARLORD', 'GENERAL', 'TROOPER', 'RANGER', 'REBEL', 'OUTLAW', 'BANDIT', 'PIRATE', 'VIKING', 'GLADIATOR',
        
        // قوة وهيمنة
        'LEGEND', 'BOSS', 'KING', 'LORD', 'GOD', 'EMPEROR', 'CHAMPION', 'MASTER', 'HERO', 'LEADER', 'RULER', 'MONARCH', 'TYRANT', 'DICTATOR', 'SOVEREIGN', 'OVERLORD', 'CONQUEROR', 'DOMINATOR', 'PREDATOR', 'ALFA', 'OMEGA', 'APEX', 'ZENITH', 'SUMMIT', 'PEAK', 'CROWN', 'THRONE', 'SCEPTRE', 'EMPIRE', 'DYNASTY',
        
        // تدمير وعنف
        'RAGE', 'FURY', 'STORM', 'THUNDER', 'LIGHTNING', 'BLAZE', 'FIRE', 'INFERNO', 'FLAME', 'CRASH', 'SMASH', 'BREAK', 'RUIN', 'WRECK', 'HAVOC', 'CHAOS', 'PANIC', 'RIOT', 'REVOLT', 'STRIKE', 'ATTACK', 'ASSAULT', 'BLAST', 'BURST', 'EXPLOSION', 'VOLCANO', 'EARTHQUAKE', 'TSUNAMI', 'TORNADO', 'HURRICANE',
        
        // فخامة وغرابة
        'VIP', 'ELITE', 'PRO', 'GOLD', 'SILVER', 'DIAMOND', 'PLATINUM', 'CRYSTAL', 'GEM', 'JEWEL', 'ROYAL', 'MAJESTIC', 'GRAND', 'NOBLE', 'SUPREME', 'ULTIMATE', 'INFINITE', 'ETERNAL', 'IMMORTAL', 'DIVINE', 'SACRED', 'MYSTIC', 'MAGIC', 'ARCANE', 'SECRET', 'HIDDEN', 'SHADOWY', 'MYSTERIOUS', 'UNKNOWN', 'NAMELESS',
        
        // أسماء حيوانات مفترسة
        'TIGER', 'LION', 'PANTHER', 'LEOPARD', 'JAGUAR', 'COUGAR', 'CHETAH', 'BEAR', 'GRIZZLY', 'MAMMOTH', 'SHARK', 'ORCA', 'OCTOPUS', 'KRAKEN', 'DRAGON', 'HYDRA', 'PHOENIX', 'GRIFFIN', 'SPIDER', 'SCORPION', 'COBRA', 'PYTHON', 'ANACONDA', 'VIPER', 'HAWK', 'FALCON', 'RAVEN', 'CROW', 'BAT', 'RAT',
        
        // كلمات تقنية وحديثة
        'CYBER', 'MATRIX', 'VECTOR', 'QUANTUM', 'NEXUS', 'VERTEX', 'AXIS', 'CORE', 'NUCLEUS', 'ATOM', 'PROTON', 'ELECTRON', 'NEUTRON', 'LASER', 'PLASMA', 'CYBORG', 'ROBOT', 'DROID', 'BOT', 'AI'
    ];

    // مصفوفة الزخارف العشوائية
    const clanDecorations = [
        { left: '乂', right: '乂' },
        { left: '亗', right: '亗' },
        { left: '乡', right: '乡' },
        { left: '『', right: '』' },
        { left: '⸎', right: '⸎' },
        { left: '♛', right: '♛' },
        { left: '◥', right: '◤' },
        { left: '᚛', right: '᚜' }
    ];

    // دالة توليد اسم عشوائي
    function generateRandomClan() {
        const randomWord = clanWords[Math.floor(Math.random() * clanWords.length)];
        const randomDeco = clanDecorations[Math.floor(Math.random() * clanDecorations.length)];
        
        // جعل الحروف متباعدة لإعطاء شكل فخم
        const spacedWord = randomWord.split('').join(' ');
        
        const finalName = `${randomDeco.left} ${spacedWord} ${randomDeco.right}`;
        clanOutput.innerText = finalName;
    }

    // تشغيل التوليد عند الضغط على الزر
    generateBtn.addEventListener('click', generateRandomClan);

    // النسخ بمجرد الضغط على المربع
    clanOutput.addEventListener('click', () => {
        if (clanOutput.innerText !== "اضغط لتوليد الاسم...") {
            copyText(clanOutput.innerText);
        }
    });
    // دالة فحص طول الاسم داخل قائمة الهامبرغر
    function checkNavNameLength() {
        const input = document.getElementById('nav-check-input').value;
        const resultDiv = document.getElementById('nav-checker-result');
    
        const length = input.length;
    
      if (length === 0) {
        resultDiv.innerText = "اكتب شيئاً للبدء...";
        resultDiv.className = "nav-checker-result";
        return;
      }
    
      if (length <= 12) {
        resultDiv.innerHTML = `عدد الحروف: <span class="status-good">${length}</span>. مقبول ✅`;
      } else {
        resultDiv.innerHTML = `عدد الحروف: <span class="status-bad">${length}</span>. طويل جداً ❌`;
      }
    }
});
