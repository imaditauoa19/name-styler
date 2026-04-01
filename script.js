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
        // ستايل 1: خط كوفي هادئ
        map: { 'ا':'إآ', 'ب':'بّـ', 'ت':'تُـ', 'ث':'ثًـ', 'ج':'جَـ', 'ح':'حًـ', 'خ':'خٌـ', 'د':'دُ', 'ذ':'ذٌ', 'ر':'رٌ', 'ز':'زً', 'س':'سًـ', 'ش':'شّـ', 'ص':'صِـ', 'ض':'ضًـ', 'ط':'طٌـ', 'ظ':'ظٌـ', 'ع':'عَـ', 'غ':'غّـ', 'ف':'فُـ', 'ق':'قَـ', 'ك':'ڪ', 'ل':'لَـ', 'م':'مِـ', 'n':'نٌـ', 'ه':'هِـ', 'و':'وُ', 'ي':'يّـ' }
    },
    {
        // ستايل 2: خط فخم عريض
        map: { 'ا':'ٵ', 'ب':'بـ', 'ت':'تـ', 'ث':'ثـ', 'ج':'جـ', 'ح':'حـ', 'خ':'خـ', 'س':'سـ', 'ش':'شـ', 'ص':'صـ', 'ض':'ضـ', 'ع':'عـ', 'غ':'غـ', 'ف':'فـ', 'ق':'قـ', 'ك':'كـ', 'ل':'لـ', 'م':'مـ', 'ن':'نـ', 'ه':'هـ', 'ي':'يـ' }
    },
    {
        // ستايل 3: خط الأقواس والتشكيل
        map: { 'ا':'ٱ', 'ب':'ٻ', 'ت':'ٺ', 'ث':'ٽ', 'ج':'ڄ', 'ح':'ح', 'خ':'څ', 'د':'ډ', 'ذ':'ذ', 'ر':'ڕ', 'ز':'ژ', 'س':'ڛ', 'ش':'ڜ', 'ص':'ڝ', 'ض':'ڞ', 'ط':'ٹ', 'ظ':'ظ', 'ع':'؏', 'غ':'ڠ', 'ف':'ڡ', 'ق':'ڦ', 'ك':'ڪ', 'ل':'ڶ', 'م':'۾', 'ن':'ڼ', 'ه':'ھ', 'و':'ۏ', 'ي':'ي' }
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

    // --- 1. توليد "خطوط عربية كاملة" مبنية على القاموس ---
    if (isArabic) {
        arabicStyles.forEach(style => {
            allDecorations.push({ type: 'ar', text: applyArabicFont(input, style.map) });
        });

        // تشكيلات فيزيائية إضافية
        const chars = input.split('');
        allDecorations.push({ type: 'ar', text: chars.join('ـ') }); // كشيدة ممدودة
        allDecorations.push({ type: 'ar', text: chars.join('ْ') }); // سكون
        allDecorations.push({ type: 'ar', text: chars.join('ٰ') }); // ألف خنجرية تجميلية
        allDecorations.push({ type: 'ar', text: chars.join('۪') }); // نقط هندسية
    }

    // --- 2. دمج الأسماء مع قوالب الزخارف والرموز الفخمة ---
    const rawTemplates = [
        `ツ [NAME] ツ`, `彡[NAME]彡`, `★彡 [NAME] 彡★`, `々[NAME]★`, `父[NAME]父`, 
        `【[NAME]】`, `『★』[NAME]『★』`, `☬[NAME]☬`, `♜[NAME]♜`, `〆[NAME]〆`,
        `꧁༒ [NAME] ༒꧂`, `☠️ [NAME] ☠️`, `🔥 [NAME] 🔥`, `『[NAME]』`, 
        `🔱 [NAME] 🔱`, `亗 [NAME] 亗`, `✨ [NAME] ✨`, `♛ [NAME] ♛`, 
        `⫷ [NAME] ⫸`, `╰‿╯ [NAME]`, `气 [NAME] 气`, `๛ [NAME] ๛`
    ];

    // تطبيق القوالب على الاسم العادي
    rawTemplates.forEach(template => {
        allDecorations.push({ type: 'ar', text: template.replace('[NAME]', input) });
    });

    // تطبيق القوالب على الاسم بعد تحويله بالخط العربي الفخم (لدمج الاثنين معاً!)
    if (isArabic) {
        const fancyArabic = applyArabicFont(input, arabicStyles[0].map);
        rawTemplates.slice(0, 10).forEach(template => {
            allDecorations.push({ type: 'ar', text: template.replace('[NAME]', fancyArabic) });
        });
    }

    // --- 3. قسم الزخارف الإنجليزية وتوليد الخطوط ---
    if (/^[a-zA-Z0-9 ]+$/.test(input)) {
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.circle) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.square) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.bold) });
        allDecorations.push({ type: 'en', text: input.toUpperCase().split('').join(' ') });
        allDecorations.push({ type: 'en', text: `xX_${input}_Xx` });
    }

    // --- 4. قسم أسلحة ببجي والرموز النادرة ---
    const symStyles = [
        `︻╦̵̵͇̿̿̿̿╤── ${input}`, `${input} ╾━╤デ╦︻`, `▄︻デ${input}══━一`, 
        `ʚ ${input} ɞ`, `๑ ${input} ๑`, `۞ ${input} ۞`, `✿ ${input} ✿`, 
        `☾ ${input} ☾`, `⚡︎ ${input} ⚡︎`
    ];
    symStyles.forEach(text => allDecorations.push({ type: 'sym', text }));

    // فلترة النتائج وعرضها في الموقع
    let renderedCount = 0;
    allDecorations.forEach(item => {
        if (currentFilter === 'all' || item.type === currentFilter) {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerText = item.text;
            div.onclick = () => copyToClipboard(item.text);
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

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    });
}
