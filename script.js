let currentFilter = 'all';

// خرائط الحروف الإنجليزية لتوليد خطوط تلقائية متنوعة وضخمة
const fonts = {
    circle: { a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ' },
    square: { a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: ' get', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉' },
    bold: { a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣', k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭', u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳' },
    italic: { a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫', k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵', u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻' },
    gothic: { a: '𝔄', b: '𝔅', c: 'ℭ', d: '𝔇', e: '𝔈', f: '𝔉', g: '𝔊', h: 'ℌ', i: 'ℑ', j: '𝔍', k: '𝔎', l: '𝔏', m: '𝔐', n: '𝔑', o: '𝔒', p: '𝔓', q: '𝔔', r: 'ℜ', s: '𝔖', t: '𝔗', u: '𝔘', v: '𝔙', w: '𝔚', x: '𝔛', y: '𝔜', z: 'ℨ' },
    double: { a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫' },
    smallCaps: { a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ' },
    inverted: { a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z' },
    strike: { a: 'a̶', b: 'b̶', c: 'c̶', d: 'd̶', e: 'e̶', f: 'f̶', g: 'g̶', h: 'h̶', i: 'i̶', j: 'j̶', k: 'k̶', l: 'l̶', m: 'm̶', n: 'n̶', o: 'o̶', p: 'p̶', q: 'q̶', r: 'r̶', s: 's̶', t: 't̶', u: 'u̶', v: 'v̶', w: 'w̶', x: 'x̶', y: 'y̶', z: 'z̶' },
    tiny: { a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'ᵠ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ' }
};

// قاموس تبديل الحروف العربية لإنشاء "خطوط عربية" مزخرفة (لم يتم لمسها)
const arabicStyles = [
    { map: { 'ا':'آ', 'ب':'بہ', 'ت':'تہ', 'ث':'ثہ', 'ج':'جہ', 'ح':'حہ', 'خ':'خہ', 'د':'د', 'ذ':'ذ', 'ر':'ر', 'ز':'ز', 'س':'سہ', 'ش':'شہ', 'ص':'صہ', 'ض':'ضّه', 'ط':'طه', 'ظ':'ظه', 'ع':'ع', 'غ':'غ', 'ف':'فه', 'ق':'قه', 'ك':'كہ', 'ل':'ل', 'م':'مہ', 'ن':'نہ', 'ه':'هہ', 'و':'و', 'ي':'ي' } },
    { map: { 'ا':'آ', 'ب':'بّـ', 'ت':'تُـ', 'ث':'ثًـ', 'ج':'جَـ', 'ح':'حًـ', 'خ':'خٌـ', 'س':'سًـ', 'ش':'شّـ', 'ص':'صِـ', 'ض':'ضًـ', 'ط':'طٌـ', 'ظ':'ظٌـ', 'ع':'عَـ', 'غ':'غّـ', 'ف':'فُـ', 'ق':'قَـ', 'ك':'ڪ', 'ل':'لَـ', 'م':'مِـ', 'ن':'نٌـ', 'ه':'هِـ', 'ي':'يّـ' } },
    { map: { 'ا':'آ', 'ب':'بـ༈ۖ҉ـ', 'ت':'تـ༈ۖ҉ـ', 'ث':'ثـ༈ۖ҉ـ', 'ج':'جـ༈ۖ҉ـ', 'ح':'حـ༈ۖ҉ـ', 'خ':'خـ༈ۖ҉ـ', 'س':'سـ༈ۖ҉ـ', 'ش':'شـ༈ۖ҉ـ', 'ص':'صـ༈ۖ҉ـ', 'ض':'ضـ༈ۖ҉ـ', 'ع':'عـ༈ۖ҉ـ', 'غ':'غـ༈ۖ҉ـ', 'ف':'فـ༈ۖ҉ـ', 'ق':'قـ༈ۖ҉ـ', 'ك':'كـ༈ۖ҉ـ', 'ل':'لـ༈ۖ҉ـ', 'م':'مـ༈ۖ҉ـ', 'ن':'نـ༈ۖ҉ـ', 'ه':'هـ༈ۖ҉ـ', 'ي':'يـ༈ۖ҉ـ' } },
    { map: { 'ا':'آ', 'ب':'بّ', 'ت':'تُ', 'ث':'ثً', 'ج':'جَ', 'ح':'حً', 'خ':'خٌ', 'س':'سً', 'ش':'شّ', 'ص':'صِ', 'ض':'ضً', 'ط':'طٌ', 'ظ':'ظٌ', 'ع':'عَ', 'غ':'غّ', 'ف':'فُ', 'ق':'قَ', 'ك':'ڪ', 'ل':'لَ', 'م':'مِ', 'ن':'نٌ', 'ه':'هِ', 'ي':'يّ' } }
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

    // 1. توليد الزخرفة العربية (لم نلمسها بناءً على طلبك)
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

    // 2. إطارات القوالب (مسحت منها كل أسلحة القناصات)
    const rawTemplates = [
        `亗 [NAME] 亗`, `♛ [NAME] ♛`, `♚ [NAME] ♚`, `『★』[NAME]『★』`, `꧁༒ [NAME] ༒꧂`, `♛[NAME]♛`, `★彡 [NAME] 彡★`, `【☆ [NAME] ☆】`, `꧁ [NAME] ꧂`, `✧[NAME]✧`, `༺ [NAME] ༻`, `᚛ [NAME] ᚜`,
        `ム [NAME]`, `王 [NAME]`, `女 [NAME]`, `気 [NAME]`, `神 [NAME]`, `◯֯ [NAME]`, `血 [NAME]`, ` [NAME] ᯤ 9 9 9 + `, `愛 [NAME]`, `空 [NAME]`, `忍 [NAME]`, `影 [NAME]`, `[NAME] 모ꄍ`, `[NAME] 鬼`, `★—͟͞͞ [NAME] `, `々[NAME]々`, `彡[NAME]彡`, `ツ [NAME] ツ`, `〆 [NAME] 〆`, `父 [NAME] 父`,
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

    // 3. قسم الزخرفة الإنجليزية المطور (أطنان من الخطوط الجديدة والمسافات)
    if (/^[a-zA-Z0-9 ]+$/.test(input)) {
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.circle) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.square) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.bold) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.italic) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.gothic) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.double) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.smallCaps) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.tiny) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.inverted) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.strike) });
        
        // مساحة عادية (n a m e)
        allDecorations.push({ type: 'en', text: input.toUpperCase().split('').join(' ') });
        // مساحة مقبولة في ببجي وفري فاير
        allDecorations.push({ type: 'en', text: input.toUpperCase().split('').join('　') });
        allDecorations.push({ type: 'en', text: `xX_${input}_Xx` });
        allDecorations.push({ type: 'en', text: input.toUpperCase() }); // تكبير الاسم
        allDecorations.push({ type: 'en', text: input.toLowerCase() }); // تصغير الاسم
    }

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

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    
    const openPageBtn = document.getElementById('open-firefire-modal');
    const ffPage = document.getElementById('ff-fullscreen-page');
    const pageCloseBtn = document.getElementById('page-close-btn');

    hamburgerBtn.addEventListener('click', () => {
        sideNav.classList.add('open');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sideNav.classList.remove('open');
        ffPage.classList.remove('active');
        clanPage.classList.remove('active'); 
        overlay.classList.remove('active');
    });

    openPageBtn.addEventListener('click', () => {
        sideNav.classList.remove('open'); 
        overlay.classList.remove('active'); 
        ffPage.classList.add('active'); 
    });

    pageCloseBtn.addEventListener('click', () => {
        ffPage.classList.remove('active');
    });

        // مصفوفة شارات الفاير باس التاريخية (يمكنك إضافة المزيد هنا بسهولة)
    // مصفوفة شارات الفاير باس التاريخية (يمكنك إضافة المزيد هنا بسهولة)
    const firePasses = [
        { name: "توثيق", code: "[b][c][ffff00] Ⓥ┊[00FF00] SUPERSTAR —͟͞͞★" },
        { name: "كمبيوتر", code: "[b][c][ffd319] PC PLAYER [FF9933] 모ꄍ" },
        { name: "قناص", code: "[b][c][00FF00] ටᴘ┋[ffd319] SNIPER [FF0000] ︻╦デ╤━╼" },
        { name: "فخم", code: "[ffd319][b][c] ✿ㅤ♬︎ㅤ☆ㅤ亗ㅤ〆ㅤ☃︎ ㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ㏾" },
        { name: "سيجار", code: "[b][6D7B8D]ᝰ‌[ffffff]▂▂[ffa000]▂" },
        { name: "برشلونة", code: "[b]F.C.B\n[A50044]██[004D98]██\n[004D98]██[A50044]██" },
        { name: "ريال", code: "[b]R.M.A\n[Ffffff]██[0A1A57]██\n[0A1A57]██[ffffff]██" },
        { name: "المغرب", code: "[CC0000]█[00FF33]⭐[CC0000]█ [CC0000]" },
        { name: "إنستا", code: "[b][c]╭─╮\n︱◯֯︱ɪɴꜱᴛᴀ حط اسمك [ff00ff]\n╰─╯" },
        { name: "بينق", code: "[FF0000] ᯤ 9 9 9 +" },
        { name: "نبض", code: "[ff0000]ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ⁷" }
    ];

        // مصفوفة الألوان الكاملة للبيو في فري فاير
    const ffColors = [
        // الألوان الأساسية القوية
        { name: "أحمر", code: "[FF0000]" },
        { name: "أخضر", code: "[00FF00]" },
        { name: "أزرق", code: "[0000FF]" },
        { name: "أصفر", code: "[FFFF00]" },
        { name: "أبيض", code: "[FFFFFF]" },
        { name: "أسود", code: "[000000]" },
        
        // ألوان فخمة ومطلوبة
        { name: "ذهبي", code: "[FFD700]" },
        { name: "بنفسجي", code: "[FF00FF]" },
        { name: "وردي", code: "[FF1493]" },
        { name: "برتقالي", code: "[FF8C00]" },
        { name: "رمادي", code: "[808080]" },
        
        // درجات رهيبة ومميزة
        { name: "سماوي", code: "[00FFFF]" },
        { name: "ليموني", code: "[ADFF2F]" },
        { name: "بنفسجي غامق", code: "[4B0082]" },
        { name: "بني", code: "[8B4513]" },
        { name: "عنابي", code: "[800000]" },
        { name: "كحلي", code: "[000080]" }
    ];


    const ffSymbols = [
    // --- الرموز القديمة والأساسية ---
    '亗', '♛', '♚', '★', '✪', '✧', '✦', '☽', '☾', '♕', '♔', 'ꄍ', 'Ⓥ', '—͟͞͞★', '⚜',
    'ム', '王', '☃︎', '気', 'ᯤ 9 9 9 +', '모', '血', '死', '愛', '空', '忍', '◯֯', 'ﮩ٨ـﮩﮩ٨ـ', '鬼', 'ට', '々', '彡', 'ツ', '〆', '父', '卍', '气', '๛', '乇', 'ใ',
    '𓆩', '𓆪', '𓅓', '𓃠', '𓆗', '𓆙', '𓂀', '𓁹', '𓋹', '𓍝', '𓃬', '𓆣', '𓅔', '𓄿', '𓆃',
    '⚔', '⚒', '⚓', '🏹', '💣',
    '【', '】', '『', '』', '「', '」', '〖', '〗', '《', '》', '⎝', '⎠', '⎨', '⎬', '﹃', '﹄', '◥', '◤', '⫷', '⫸', '⪻', '⪼', '⌈', '⌉', '⌊', '⌋', '⟦', '⟧',
    '࿇', '༒', '𖤍', '𖣘', '𒀱', '᪥', '࿐', '☯', '🕉', '☸', '𓆩♡𓆪', '꧁', '꧂', '༺', '༻', '᚛', '᚜',
    '⚡︎', '×', '÷', '＋', '－', '％', '＠', '＃', '＆', '＊', '☠', '☣', '☢', '❂', '❃', '❄', '❅', '❆', '❈', '❉', '❊', '❋',
    '♩', '♪', '♫', '♬', '♭', '♮', '♯', '■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '◄', '▼', '▽', '▾', '▿', '◀', '◁', '◂', '◃', '◅',

    // --- الرموز الجديدة التي أضفتها الآن ---
    '၄', '么', 'ϟ', '玄', 'あ', '幺', '夂', '༆', 'ゑ', '→', 'Ξ', '特', 'ꪇ', '✓', '☂', 'ℵ', '←', '神', '✿', 'ƬψƬ', '³²⁰', 'シ', '×͜×', '〄',
    '♜', '♝', '♞', '♟', '☚', '☛', '☜', '☝', '☞', '☟', '✌', '☩', '⋆', '✢', '✣', '✤', '✥', '✩', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '-‘๑’-', '✽', '✾', '❀', '❁', '❃', '❋', '☼', '☀', '☁', '☄', '☇', '☈', '⊙', '☉', '℃', '℉', '°', '❅', '✺', '☦', '☓', '♁', 'Ⓐ', '☭', '☪', '𖤐', 'Ϟ', '⺓', 'ξ', 'ነ', '่', '♡', '؁', '؀', '༺ཌ༈༈ད༻', '༺༻', '♧', '🇮', '﷼', 'ﷻ', '﷽', 'ッ', 'Ω', '۞', '۩', '✟', '۝', '道', '凸', '个', '¤', '品', '〠', '𖤍', 'ᶠᶸᶜᵏᵧₒᵤ', '⍆', '⍅', '⇭', '', '', '𖠃', '𖠅', '𖠆', '𖠊', '𖡒', '𖡗', '𖣩', '〰', '𖥓', '𖥏', '𖥎', '𖥌', '𖥋', '𖥊', '𖥈', '𖥅', '𖥃', '𖥂', '𖥀', '𖤼', '𖤹', '𖤸', '𖤷', '𖤶', '𖤭', '𖤫', '𖤪', '𖤨', '𖤧', '𖤥', '𖤤', '𖤣', '𖤢', '𖤡', '𖤟', '𖤞', '𖤝', '𖤜', '𖤛', '𖤚', '𖤘', '𖤙', '𖤗', '𖤕', '𖤓', '𖤒', 'ဏ', '࿘', '࿗', '࿖', '࿕', '࿑', '࿌', '࿋', '࿊', '࿉', '࿈', '࿇', '࿅', '࿄', '࿃', '࿂', '༼', '༽', '༗', '༖', '༕', '⏝', '⏜', '߷', 'ܛ', '׀',
    '𖠀', '𖠁', '𖠂', '𖠇', '𖠈', '𖠎', '𖠐', '𖠑', '𖠒', '𖠓', '𖠔', '𖠕', '𖠖', '𖠗', '𖠘', '𖠙', '𖠚', '𖠛', '𖠜', '𖠝', '𖠞', '𖠟', '𖠠', '𖠡', '𖠢', '𖠣', '𖠤', '𖠥', '𖠦', '𖠧', '𖠨', '𖠩', '𖠪', '𖠫', '𖠬', '𖠭', '𖠮', '𖠯', '𖠰', '𖠱', '𖠲', '𖠳', '𖠴', '𖠵', '𖠶', '𖠷', '𖠸', '𖠹', '𖠺', '𖠻', '𖠼', '𖠽', '𖠾', '𖠿', '𖡀', '𖡁', '𖡂', '𖡃', '𖡄', '𖡅', '𖡆', '𖡇', '𖡈', '𖡉', '𖡊', '𖡋', '𖡌', '𖡍', '𖡎', '𖡏', '𖡐', '𖡑', '𖡓', '𖡔', '𖡕', '𖡖', '𖡘', '𖡙', '𖡚', '𖡛', '𖡜', '𖡝', '𖡞', '𖡟', '𖡠', '𖡡', '𖡢', '𖡣', '𖡤', '𖡥', '𖡦', '𖡧', '𖡨', '𖡩', '𖡪', '𖡫', '𖡬', '𖡭', '𖡮', '𖡯', '𖡰', '𖡱', '𖡲', '𖡳', '𖡴', '𖡵', '𖡶', '𖡷', '𖡸', '𖡹', '𖡺', '𖡻', '𖡼', '𖡽', '𖡾', '𖡿', '𖢀', '𖢁', '𖢂', '𖢃', '𖢄', '𖢅', '𖢆', '𖢇', '𖢈', '𖢉', '𖢊', '𖢋', '𖢌', '𖢍', '𖢎', '𖢏', '𖢐', '𖢑', '𖢒', '𖢓', '𖢔', '𖢕', '𖢖', '𖢗', '𖢘', '𖢙', '𖢚', '𖢛', '𖢜', '𖢝', '𖢞', '𖢟', '𖢠', '𖢡', '𖢢', '𖢣', '𖢤', '𖢥', '𖢦', '𖢧', '𖢨', '𖢩', '𖢪', '𖢫', '𖢬', '𖢭', '𖢮', '𖢯', '𖢰', '𖢱', '𖢲', '𖢳', '𖢴', '𖢵', '𖢶', '𖢷', '𖢸', '𖢹', '𖢺', '𖢻', '𖢼', '𖢽', '𖢾', '𖢿', '𖣀', '𖣁', '𖣂', '𖣃', '𖣄', '𖣅', '𖣆', '𖣇', '𖣈', '𖣉', '𖣊', '𖣋', '𖣌', '𖣍', '𖣎', '𖣏', '𖣐', '𖣑', '𖣒', '𖣓', '𖣔', '𖣕', '𖣖', '𖣗', '𖣙', '𖣚', '𖣛', '𖣜', '𖣝', '𖣞', '𖣟', '𖣠', '𖣡', '𖣢', '𖣣', '𖣤', '𖣥', '𖣦', '𖣧', '𖣨', '𖣪', '𖣫', '𖣬', '𖣭', '𖣮', '𖣯', '𖣰', '𖣱', '𖣲', '𖣳', '𖣴', '𖣵', '𖣶', '𖣷', '𖣸', '𖣹', '𖣺', '𖣻', '𖣼', '𖣽', '𖣾'
];


    const firepassContainer = document.getElementById('firepass-container');
    firePasses.forEach(pass => {
        const div = document.createElement('div');
        div.className = 'ff-code-box';
        div.innerText = `${pass.name}\n${pass.code}`;
        div.addEventListener('click', () => copyText(pass.code));
        firepassContainer.appendChild(div);
    });

    const colorsContainer = document.getElementById('colors-container');
    ffColors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'ff-code-box';
        div.innerText = `${color.name}\n${color.code}`;
        div.addEventListener('click', () => copyText(color.code));
        colorsContainer.appendChild(div);
    });

    const symbolsContainer = document.getElementById('symbols-container');
    ffSymbols.forEach(symbol => {
        const span = document.createElement('span');
        span.className = 'ff-symbol-item';
        span.innerText = symbol;
        span.addEventListener('click', () => copyText(symbol));
        symbolsContainer.appendChild(span);
    });

    const openClanBtn = document.getElementById('open-clan-modal');
    const clanPage = document.getElementById('clan-fullscreen-page');
    const clanCloseBtn = document.getElementById('clan-close-btn');
    const generateBtn = document.getElementById('generate-clan-btn');
    const clanOutput = document.getElementById('clan-output');

    openClanBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('active');
        clanPage.classList.add('active');
    });

    clanCloseBtn.addEventListener('click', () => {
        clanPage.classList.remove('active');
    });

    const clanWords = [
        'DEATH', 'GHOST', 'SHADOW', 'DEVIL', 'KILLER', 'VIPER', 'VENOM', 'ZOMBIE', 'VAMPIRE', 'DEMON', 'MONSTER', 'TERROR', 'HORROR', 'DARKNESS', 'NIGHTMARE', 'DOOM', 'BLOOD', 'SKULL', 'BONES', 'GRAVE', 'CURSE', 'HEX', 'WITCH', 'WIZARD', 'PHANTOM', 'SPECTRE', 'BANSHEE', 'REAPER', 'SOUL', 'SPIRIT',
        'STRIKER', 'WARRIOR', 'KNIGHT', 'TITAN', 'MAFIA', 'WOLF', 'NINJA', 'EAGLE', 'FIGHTER', 'SOLDIER', 'HUNTER', 'SNIPER', 'ASSASSIN', 'RAIDER', 'SAVAGE', 'BRUTE', 'CRUSHER', 'SLAYER', 'BUTCHER', 'EXECUTIONER', 'WARLORD', 'GENERAL', 'TROOPER', 'RANGER', 'REBEL', 'OUTLAW', 'BANDIT', 'PIRATE', 'VIKING', 'GLADIATOR',
        'LEGEND', 'BOSS', 'KING', 'LORD', 'GOD', 'EMPEROR', 'CHAMPION', 'MASTER', 'HERO', 'LEADER', 'RULER', 'MONARCH', 'TYRANT', 'DICTATOR', 'SOVEREIGN', 'OVERLORD', 'CONQUEROR', 'DOMINATOR', 'PREDATOR', 'ALFA', 'OMEGA', 'APEX', 'ZENITH', 'SUMMIT', 'PEAK', 'CROWN', 'THRONE', 'SCEPTRE', 'EMPIRE', 'DYNASTY',
        'RAGE', 'FURY', 'STORM', 'THUNDER', 'LIGHTNING', 'BLAZE', 'FIRE', 'INFERNO', 'FLAME', 'CRASH', 'SMASH', 'BREAK', 'RUIN', 'WRECK', 'HAVOC', 'CHAOS', 'PANIC', 'RIOT', 'REVOLT', 'STRIKE', 'ATTACK', 'ASSAULT', 'BLAST', 'BURST', 'EXPLOSION', 'VOLCANO', 'EARTHQUAKE', 'TSUNAMI', 'TORNADO', 'HURRICANE',
        'VIP', 'ELITE', 'PRO', 'GOLD', 'SILVER', 'DIAMOND', 'PLATINUM', 'CRYSTAL', 'GEM', 'JEWEL', 'ROYAL', 'MAJESTIC', 'GRAND', 'NOBLE', 'SUPREME', 'ULTIMATE', 'INFINITE', 'ETERNAL', 'IMMORTAL', 'DIVINE', 'SACRED', 'MYSTIC', 'MAGIC', 'ARCANE', 'SECRET', 'HIDDEN', 'SHADOWY', 'MYSTERIOUS', 'UNKNOWN', 'NAMELESS',
        'TIGER', 'LION', 'PANTHER', 'LEOPARD', 'JAGUAR', 'COUGAR', 'CHETAH', 'BEAR', 'GRIZZLY', 'MAMMOTH', 'SHARK', 'ORCA', 'OCTOPUS', 'KRAKEN', 'DRAGON', 'HYDRA', 'PHOENIX', 'GRIFFIN', 'SPIDER', 'SCORPION', 'COBRA', 'PYTHON', 'ANACONDA', 'VIPER', 'HAWK', 'FALCON', 'RAVEN', 'CROW', 'BAT', 'RAT',
        'CYBER', 'MATRIX', 'VECTOR', 'QUANTUM', 'NEXUS', 'VERTEX', 'AXIS', 'CORE', 'NUCLEUS', 'ATOM', 'PROTON', 'ELECTRON', 'NEUTRON', 'LASER', 'PLASMA', 'CYBORG', 'ROBOT', 'DROID', 'BOT', 'AI'
    ];

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

    function generateRandomClan() {
        const randomWord = clanWords[Math.floor(Math.random() * clanWords.length)];
        const randomDeco = clanDecorations[Math.floor(Math.random() * clanDecorations.length)];
        const spacedWord = randomWord.split('').join(' ');
        const finalName = `${randomDeco.left} ${spacedWord} ${randomDeco.right}`;
        clanOutput.innerText = finalName;
    }

    generateBtn.addEventListener('click', generateRandomClan);

    clanOutput.addEventListener('click', () => {
        if (clanOutput.innerText !== "اضغط لتوليد الاسم...") {
            copyText(clanOutput.innerText);
        }
    });

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
    
    // ربط الدالة بحدث الكتابة في حقل الفحص
    const navCheckInput = document.getElementById('nav-check-input');
    if (navCheckInput) {
        navCheckInput.addEventListener('input', checkNavNameLength);
    }
});
// كود تشغيل روابط الفوتر (نسخة واحدة نهائية ومنظمة)
document.addEventListener('DOMContentLoaded', () => {
    const privacyBox = document.getElementById('privacy');
    const contactBox = document.getElementById('contact');

    // تفعيل رابط سياسة الخصوصية
    const pLink = document.querySelector('a[href="#privacy"]');
    if (pLink) {
        pLink.onclick = (e) => {
            e.preventDefault();
            privacyBox.style.display = 'block';
            contactBox.style.display = 'none'; // إخفاء الصندوق الآخر
            privacyBox.scrollIntoView({ behavior: 'smooth' });
        };
    }

    // تفعيل رابط اتصل بنا
    const cLink = document.querySelector('a[href="#contact"]');
    if (cLink) {
        cLink.onclick = (e) => {
            e.preventDefault();
            contactBox.style.display = 'block';
            privacyBox.style.display = 'none'; // إخفاء الصندوق الآخر
            contactBox.scrollIntoView({ behavior: 'smooth' });
        };
    }
});
