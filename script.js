let currentFilter = 'all';

// خرائط الحروف الإنجليزية
const fonts = {
    circle: { a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ' },
    square: { a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉' },
    bold: { a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣', k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭', u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳' },
    italic: { a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫', k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵', u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻' },
    gothic: { a: '𝔄', b: '𝔅', c: 'ℭ', d: '𝔇', e: '𝔈', f: '𝔉', g: '𝔊', h: 'ℌ', i: 'ℑ', j: '𝔍', k: '𝔎', l: '𝔏', m: '𝔐', n: '𝔑', o: '𝔒', p: '𝔓', q: '𝔔', r: 'ℜ', s: '𝔖', t: '𝔗', u: '𝔘', v: '𝔙', w: '𝔚', x: '𝔛', y: '𝔜', z: 'ℨ' },
    double: { a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫' },
    smallCaps: { a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ' },
    inverted: { a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z' },
    strike: { a: 'a̶', b: 'b̶', c: 'c̶', d: 'd̶', e: 'e̶', f: 'f̶', g: 'g̶', h: 'h̶', i: 'i̶', j: 'j̶', k: 'k̶', l: 'l̶', m: 'm̶', n: 'n̶', o: 'o̶', p: 'p̶', q: 'q̶', r: 'r̶', s: 's̶', t: 't̶', u: 'u̶', v: 'v̶', w: 'w̶', x: 'x̶', y: 'y̶', z: 'z̶' },
    tiny: {'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃' }
};

// قواميس الزخرفة العربية
const arabicStyles = [
    { map: { 'ا':'آ', 'ب':'بہ', 'ت':'تہ', 'ث':'ثہ', 'ج':'جہ', 'ح':'حہ', 'خ':'خہ', 'د':'د', 'ذ':'ذ', 'ر':'ر', 'ز':'ز', 'س':'سہ', 'ش':'شہ', 'ص':'صہ', 'ض':'ضّه', 'ط':'طه', 'ظ':'ظه', 'ع':'ع', 'غ':'غ', 'ف':'فه', 'ق':'قه', 'ك':'كہ', 'ل':'ل', 'م':'مہ', 'ن':'نہ', 'ه':'هہ', 'و':'و', 'ي':'ي' } },
    { map: { 'ا':'آ', 'ب':'بّـ', 'ت':'تُـ', 'ث':'ثًـ', 'ج':'جَـ', 'ح':'حًـ', 'خ':'خٌـ', 'س':'سًـ', 'ش':'شّـ', 'ص':'صِـ', 'ض':'ضًـ', 'ط':'طٌـ', 'ظ':'ظٌـ', 'ع':'عَـ', 'غ':'غّـ', 'ف':'فُـ', 'ق':'قَـ', 'ك':'ڪ', 'ل':'لَـ', 'م':'مِـ', 'ن':'نٌـ', 'ه':'هِـ', 'ي':'يّـ' } },
    { map: { 'ا':'آ', 'ب':'بـ༈ۖ҉ـ', 'ت':'تـ༈ۖ҉ـ', 'ث':'ثـ༈ۖ҉ـ', 'ج':'جـ༈ۖ҉ـ', 'ح':'حـ༈ۖ҉ـ', 'خ':'خـ༈ۖ҉ـ', 'س':'سـ༈ۖ҉ـ', 'ش':'شـ༈ۖ҉ـ', 'ص':'صـ༈ۖ҉ـ', 'ض':'ضـ༈ۖ҉ـ', 'ع':'عـ༈ۖ҉ـ', 'غ':'غـ༈ۖ҉ـ', 'ف':'فـ༈ۖ҉ـ', 'ق':'قـ༈ۖ҉ـ', 'ك':'كـ༈ۖ҉ـ', 'ل':'لـ༈ۖ҉ـ', 'م':'مـ༈ۖ҉ـ', 'ن':'نـ༈ۖ҉ـ', 'ه':'هـ༈ۖ҉ـ', 'ي':'يـ༈ۖ҉ـ' } },
    { map: { 'ا':'آ', 'ب':'بّ', 'ت':'تُ', 'ث':'ثً', 'ج':'جَ', 'ح':'حً', 'خ':'خٌ', 'س':'سً', 'ش':'شّ', 'ص':'صِ', 'ض':'ضً', 'ط':'طٌ', 'ظ':'ظٌ', 'ع':'عَ', 'غ':'غّ', 'ف':'فُ', 'ق':'قَ', 'ك':'ڪ', 'ل':'لَ', 'م':'مِ', 'ن':'نٌ', 'ه':'هِ', 'ي':'يّ' } }
];

// خرائط الأرقام
const numberStyles = {
    circles: { '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨' },
    solidCircles: { '0': '⓿', '1': '❶', '2': '❷', '3': '❸', '4': '❹', '5': '❺', '6': '❻', '7': '❼', '8': '❽', '9': '❾' },
    doubleStruck: { '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡' },
    small: { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }
};

// أكواد البيو
const ffBios = [
    { name: "توثيق", code: "[b][c][ffff00] Ⓥ┊[00FF00] SUPERSTAR —͟͞͞★" },
    { name: "كمبيوتر", code: "[b][c][ffd319] PC PLAYER [FF9933] 모ꄍ" },
    { name: "قناص", code: "[b][c][00FF00] ටᴘ┋[ffd319] SNIPER [FF0000] ︻╦デ╤━╼" },
    { name: "فخم", code: "[ffd319][b][c] ✿ㅤ♬︎ㅤ☆ㅤ亗ㅤ〆ㅤ☃︎ ㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ㏾ㅤ㏾" },
    { name: "سيجار", code: "[b][6D7B8D]ᝰ‌[ffffff]▂▂[ffa000]▂" },
    { name: "برشلونة", code: "[b]F.C.B\n[A50044]██[004D98]██\n[004D98]██[A50044]██" },
    { name: "ريال", code: "[b]R.M.A\n[Ffffff]██[0A1A57]██\n[0A1A57]██[ffffff]██" },
    { name: "إنستا", code: "[b][c]╭─╮\n︱◯֯︱ɪɴꜱᴛᴀ حط اسمك [ff00ff]\n╰─╯" },
    { name: "بينق", code: "[FF0000] ᯤ 9 9 9 +" },
    { name: "نبض", code: "[ff0000]ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ⁷" },
    { name: "علم الجزائر (رموز)", code: "[008751]█[ffffff]☪[ff0000]✧[ffffff]█" },
    { name: "علم المغرب (رموز)", code: "[ff0000]█[00ff00]★[ff0000]█" },
    { name: "علم تونس (رموز)", code: "[ff0000]█[ffffff]☪[ff0000]█" },
    { name: "علم فلسطين (رموز)", code: "[000000]█[ffffff]█[008000]█\n[ff0000]▼" },
    { name: "علم السعودية", code: "[b][006c35]███[ffffff]⚔[006c35]███" },
  { name: "علم الإمارات", code: "[ff0000]█[008000]█[ffffff]█[000000]█" },
   { name: "علم مصر", code: "[b][ff0000]███\n[ffffff]█[ffd700]🦅[ffffff]█\n[000000]███" },
   { name: "علم سوريا", code: "[b][ff0000]███\n[ffffff]★ ★\n[000000]███" },
    { name: "شحن البطارية", code: "[b][00ff00]🔋 [ffffff]████████▒ 99%" },
    { name: "شعار V الذهبي", code: "[b][c][ffd700]Ⓥ [ffffff] اكتب اسمك" },
    { name: "بروفايل فخم", code: "[b][c][00ffff]━━━━●──────\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻" },
    { name: "مستطيلات متداخلة", code: "[b][c][ff0055]«« [ffffff] STERBEN [ff0055] »»" },
    { name: "نظام التشفير", code: "[b][c][808080][ SYSTEM ERROR 404 ]" },
   { name: "مربعات الشطرنج", code: "[b][c][ffffff]▀▄▀▄ [ff0000] CHESS [ffffff] ▀▄▀▄" },
   { name: "لانهاية", code: "[b][c][00ffcc] ∞ [ffffff] INFINITY [00ffcc] ∞ " },
   { name: "كود البطارية", code: "[b][00ff00] [||||||||||] 100%" },
   { name: "برواز ملكي", code: "[b][c][ffffff]╔════════════════╗\n[ffd700]  YOUR NAME HERE  \n[ffffff]╚════════════════╝" },
         { name: "إشارة الرادار", code: "[b][c][00ff00]  ▂ ▃ ▄ ▅ ▆ ▇ █ [ffffff] 100%" },
        { name: "جمجمة رعب", code: "[b][c][ffffff]☠️ [ff0000] K I L L E R [ffffff] ☠️" },
        { name: "اسم ملون 1", code: "[b][ff0000]S[ffff00]T[00ff00]E[00ffff]R[0000ff]B[ff00ff]E[ff0000]N" },
        { name: "تيك توك", code: "[b][c][00ffff]ᴛɪᴋ [ffffff]ᴛᴏᴋ [ff0055] حط اسمك" },
        { name: "كود الأوفلاين", code: "[b][c][808080]● Offline [ffffff] (عدت لاحقاً)" },
        { name: "قلب مكسور", code: "[b][c][ff0000]💔 [808080] sᴀᴅ sᴛᴏʀʏ" },
        { name: "رتبة هيرويك", code: "[b][c][ff0000]──[ HEROIC ]──" },
        { name: "مستوى ليفل", code: "[b][ffd700]LEVEL: [ffffff] 100 [ff0000]🔥" },
        { name: "قراصنة", code: "[b][c][000000]🏴‍☠️ [ffffff] 𝕻𝕴𝕽𝕬𝕿𝕰𝕾" },
        { name: "زاوية حادة", code: "[b][c][00ffcc]◤ [ffffff] اسمك هنا [00ffcc] ◢" },
        { name: "اقتباس عميق", code: "[b][i][ffffff]\"الصمت هو لغتي\"" }

];

// أكواد الألوان
const ffColors = [
    { name: "أحمر", code: "[FF0000]", bg: "#FF0000" }, { name: "أخضر", code: "[00FF00]", bg: "#00FF00" },
    { name: "أزرق", code: "[0000FF]", bg: "#0000FF" }, { name: "أصفر", code: "[FFFF00]", bg: "#FFFF00" },
    { name: "أبيض", code: "[FFFFFF]", bg: "#FFFFFF" }, { name: "أسود", code: "[000000]", bg: "#000000" },
    { name: "ذهبي", code: "[FFD700]", bg: "#FFD700" }, { name: "بنفسجي", code: "[FF00FF]", bg: "#FF00FF" },
    { name: "وردي", code: "[FF1493]", bg: "#FF1493" }, { name: "برتقالي", code: "[FF8C00]", bg: "#FF8C00" },
    { name: "رمادي", code: "[808080]", bg: "#808080" }, { name: "سماوي", code: "[00FFFF]", bg: "#00FFFF" },
    { name: "ليموني", code: "[ADFF2F]", bg: "#ADFF2F" }, { name: "بنفسجي غامق", code: "[4B0082]", bg: "#4B0082" },
    { name: "بني", code: "[8B4513]", bg: "#8B4513" }, { name: "عنابي", code: "[800000]", bg: "#800000" },
    { name: "كحلي", code: "[000080]", bg: "#000080" }
];

// الرموز الضخمة
const ffSymbols = [
    '亗', '♛', '♚', '★', '✪', '✧', '✦', '☽', '☾', '♕', '♔', 'ꄍ', 'Ⓥ', '—͟͞͞★', '⚜',
    'ム', '王', '☃︎', '気', 'ᯤ 9 9 9 +', '모', '血', '死', '愛', '空', '忍', '◯֯', 'ﮩ٨ـﮩﮩ٨ـ', '鬼', 'ට', '々', '彡', 'ツ', '〆', '父', '卍', '气', '๛', '乇', 'ใ',
    '𓆩', '𓆪', '𓅓', '𓃠', '𓆗', '𓆙', '𓂀', '𓁹', '𓋹', '𓍝', '𓃬', '𓆣', '𓅔', '𓄿', '𓆃',
    '⚔', '⚒', '⚓', '🏹', '💣',
    '【', '】', '『', '』', '「', '」', '〖', '〗', '《', '》', '⎝', '⎠', '⎨', '⎬', '﹃', '﹄', '◥', '◤', '⫷', '⫸', '⪻', '⪼', '⌈', '⌉', '⌊', '⌋', '⟦', '⟧',
    '࿇', '༒', '𖤍', '𖣘', '𒀱', '᪥', '࿐', '☯', '🕉', '☸', '𓆩♡𓆪', '꧁', '꧂', '༺', '༻', '᚛', '᚜',
    '⚡︎', '×', '÷', '＋', '－', '％', '＠', '＃', '＆', '＊', '☠', '☣', '☢', '❂', '❃', '❄', '❅', '❆', '❈', '❉', '❊', '❋',
    '♩', '♪', '♫', '♬', '♭', '♮', '♯', '■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '◄', '▼', '▽', '▾', '▿', '◀', '◁', '◂', '◃', '◅',
    '၄', '么', 'ϟ', '玄', 'あ', '幺', '夂', '༆', 'ゑ', '→', 'Ξ', '特', 'ꪇ', '✓', '☂', 'ℵ', '←', '神', '✿', 'ƬψƬ', '³²⁰', 'シ', '×͜×', '〄',
    '♜', '♝', '♞', '♟', '☚', '☛', '☜', '☝', '☞', '☟', '✌', '☩', '⋆', '✢', '✣', '✤', '✥', '✩', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '-‘๑’-', '✽', '✾', '❀', '❁', '❃', '❋', '☼', '☀', '☁', '☄', '☇', '☈', '⊙', '☉', '℃', '℉', '°', '❅', '✺', '☦', '☓', '♁', 'Ⓐ', '☭', '☪', '𖤐', 'Ϟ', '⺓', 'ξ', 'ነ', '่', '♡', '؁', '؀', '༺ཌ༈༈ད༻', '༺༻', '♧', '🇮', '﷼', 'ﷻ', '﷽', 'ッ', 'Ω', '۞', '۩', '✟', '۝', '道', '凸', '个', '¤', '品', '〠', '𖤍', 'ᶠᶸᶜᵏᵧₒᵤ', '⍆', '⍅', '⇭', '', '', '𖠃', '𖠅', '𖠆', '𖠊', '𖡒', '𖡗', '𖣩', '〰', '𖥓', '𖥏', '𖥎', '𖥌', '𖥋', '𖥊', '𖥈', '𖥅', '𖥃', '𖥂', '𖥀', '𖤼', '𖤹', '𖤸', '𖤷', '𖤶', '𖤭', '𖤫', '𖤪', '𖤨', '𖤧', '𖤥', '𖤤', '𖤣', '𖤢', '𖤡', '𖤟', '𖤞', '𖤝', '𖤜', '𖤛', '𖤚', '𖤘', '𖤙', '𖤗', '𖤕', '𖤓', '𖤒', 'ဏ', '࿘', '࿗', '࿖', '࿕', '࿑', '࿌', '࿋', '࿊', '࿉', '࿈', '࿇', '࿅', '࿄', '࿃', '࿂', '༼', '༽', '༗', '༖', '༕', '⏝', '⏜', '߷', 'ܛ', '׀','⚔'
    
];

// كلمات الكلان
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
    { left: '乂', right: '乂' }, { left: '亗', right: '亗' }, { left: '乡', right: '乡' },
    { left: '『', right: '』' }, { left: '⸎', right: '⸎' }, { left: '♛', right: '♛' },
    { left: '◥', right: '◤' }, { left: '᚛', right: '᚜' }
];

// القوالب الأساسية
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

// ==========================================
// 2. دوال النسخ والرسائل الاحترافية
// ==========================================
function copyText(text, name = "") {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`تم نسخ ${name || text} بنجاح ✅`);
    });
}

function showToast(message) {
    let toast = document.getElementById("ff-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "ff-toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<b>${message}</b>`;
    toast.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: rgba(233, 69, 96, 0.95); color: white; padding: 12px 25px;
        border-radius: 50px; font-family: 'Cairo', sans-serif; font-size: 14px;
        z-index: 99999; box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.2); transition: all 0.5s ease;
    `;
    setTimeout(() => {
        toast.style.bottom = '10px';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 1500);
}

// ==========================================
// 3. دوال توليد الزخرفة وتطبيق الحروف والأرقام
// ==========================================

// دالة واحدة متطورة للإنجليزي (تدمج الحروف والأرقام)
function applyFont(text, fontMap, numMap = null) {
    return text.toLowerCase().split('').map(char => {
        if (numMap && numMap[char]) return numMap[char]; 
        return fontMap[char] || char; 
    }).join('');
}

// دالة واحدة متطورة للعربي (تدمج الحروف والأرقام)
function applyArabicFont(text, styleMap, numMap = null) {
    return text.split('').map(char => {
        if (numMap && numMap[char]) return numMap[char];
        return styleMap[char] || char;
    }).join('');
}

function filterType(type) {
    currentFilter = type;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if(event) event.target.classList.add('active');
    generateAllDecorations();
}

function generateAllDecorations() {
    const input = document.getElementById('username').value.trim();
    const resultsContainer = document.getElementById('results');
    const statsText = document.getElementById('stats-text');
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';

    if (!input) {
        if(statsText) statsText.innerText = "اكتب شيئاً لتبدأ السحر...";
        return;
    }

    let allDecorations = [];
    
    // شروط فحص ذكية لمعرفة لغة الكتابة
    const hasArabic = /[\u0600-\u06FF]/.test(input);
    const hasEnglish = /[a-zA-Z]/.test(input);

    // ==========================================
    // إذا كان النص يحتوي على عربي (وغير مختلط بالإنجليزي)
    // ==========================================
    if (hasArabic && !hasEnglish) {
        arabicStyles.forEach(style => {
            // نمرر خريطة الأرقام حتى تتزخرف الأرقام مع العربي
            allDecorations.push({ type: 'ar', text: applyArabicFont(input, style.map, numberStyles.circles) });
        });
        
        const chars = input.split('');
        allDecorations.push({ type: 'ar', text: chars.join('ـ') }); 
        allDecorations.push({ type: 'ar', text: chars.join('ْ') }); 
        allDecorations.push({ type: 'ar', text: chars.join('ٰ') }); 
        allDecorations.push({ type: 'ar', text: chars.join('۪') }); 

        // إضافة القوالب للنص العربي فقط
        rawTemplates.forEach(template => {
            allDecorations.push({ type: 'ar', text: template.replace('[NAME]', input) });
        });
        
        const fancyArabic = applyArabicFont(input, arabicStyles[0].map, numberStyles.solidCircles);
        rawTemplates.slice(0, 10).forEach(template => {
            allDecorations.push({ type: 'ar', text: template.replace('[NAME]', fancyArabic) });
        });
    } 
    // ==========================================
    // إذا كان النص إنجليزي فقط (أو أرقام فقط)
    // ==========================================
    else {
        // زخرفة الإنجليزي مع دمج خرائط الأرقام
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.circle, numberStyles.circles) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.square, numberStyles.circles) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.bold, numberStyles.solidCircles) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.italic, numberStyles.doubleStruck) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.gothic, numberStyles.small) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.double, numberStyles.doubleStruck) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.smallCaps, numberStyles.small) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.tiny, numberStyles.small) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.inverted) });
        allDecorations.push({ type: 'en', text: applyFont(input, fonts.strike) });
        allDecorations.push({ type: 'en', text: input.toUpperCase().split('').join(' ') });
        allDecorations.push({ type: 'en', text: input.toUpperCase().split('').join('　') });
        allDecorations.push({ type: 'en', text: `xX_${input}_Xx` });
        allDecorations.push({ type: 'en', text: input.toUpperCase() });
        allDecorations.push({ type: 'en', text: input.toLowerCase() });

        // إضافة القوالب للنص الإنجليزي فقط
        rawTemplates.forEach(template => {
            allDecorations.push({ type: 'en', text: template.replace('[NAME]', input) });
        });
    }

    // عرض النتائج بناءً على الفلتر النشط أو اللغة
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

    if(statsText) statsText.innerText = `تم تفجير ${renderedCount} شكلاً مختلفاً لزخرفتك!`;
}

// ==========================================
// 4. دوال بناء الأقسام الأخرى (الرموز، الألوان، البيو، الكلانات)
// ==========================================
function toggleView(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
}

function displaySymbols() {
    const container = document.getElementById('symbols-container');
    if (container) {
        container.innerHTML = '';
        ffSymbols.forEach(sym => {
            let span = document.createElement('span');
            span.className = 'ff-symbol-item';
            span.innerText = sym;
            span.style.cssText = "cursor:pointer; padding:8px; background:#16213e; color:#fff; border-radius:5px; font-size:20px;";
            span.onclick = () => copyText(sym);
            container.appendChild(span);
        });
    }
}

function displayBios() {
    const container = document.getElementById('bio-container');
    if (container) {
        container.innerHTML = '';
        ffBios.forEach(bio => {
            let div = document.createElement('div');
            div.style.cssText = "cursor:pointer; padding:12px; background:#16213e; color:#fff; border: 1px solid #e94560; border-radius:8px; text-align:right; position:relative; margin-bottom:10px;";
            div.innerHTML = `<span style="color:#e94560; font-weight:bold;">${bio.name}</span><br><small style="font-size:10px; color:#aaa;">${bio.code}</small>`;
            div.onclick = () => copyText(bio.code, bio.name);
            container.appendChild(div);
        });
    }
}

function displayColors() {
    const container = document.getElementById('colors-container');
    if (container) {
        container.innerHTML = '';
        ffColors.forEach(clr => {
            let div = document.createElement('div');
            div.style.cssText = `cursor:pointer; padding:15px; background:${clr.bg}; color:${clr.name === "أبيض" || clr.name === "أصفر" ? "#000" : "#fff"}; border-radius:8px; text-align:center; font-size:12px; font-weight:bold; border: 1px solid #444;`;
            div.innerText = clr.name;
            div.onclick = () => copyText(clr.code, clr.name);
            container.appendChild(div);
        });
    }
}

function generateRandomClan() {
    const clanOutput = document.getElementById('clan-output');
    if (!clanOutput) return;
    const randomWord = clanWords[Math.floor(Math.random() * clanWords.length)];
    const randomDeco = clanDecorations[Math.floor(Math.random() * clanDecorations.length)];
    const spacedWord = randomWord.split('').join(' ');
    const finalName = `${randomDeco.left} ${spacedWord} ${randomDeco.right}`;
    clanOutput.innerText = finalName;
}

function checkNavNameLength() {
    const input = document.getElementById('nav-check-input');
    const resultDiv = document.getElementById('nav-checker-result');
    if (!input || !resultDiv) return;
    const length = input.value.length;
    if (length === 0) {
        resultDiv.innerText = "اكتب اسماً للفحص...";
        resultDiv.style.color = "#ccc";
    } else if (length <= 12) {
        resultDiv.innerHTML = `عدد الحروف: <span style="color:#00ff00; font-weight:bold;">${length}</span>. مقبول ✅`;
    } else {
        resultDiv.innerHTML = `عدد الحروف: <span style="color:#ff4d4d; font-weight:bold;">${length}</span>. طويل جداً ❌`;
    }
}

// ==========================================
// 5. التشغيل عند تحميل الصفحة
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. تشغيل بناء الأقسام
    displaySymbols();
    displayBios();
    displayColors();

    // 2. تفعيل فاحص الاسم وزخرفة الكتابة
    const usernameInput = document.getElementById('username');
    if (usernameInput) usernameInput.addEventListener('input', generateAllDecorations);

    const navCheckInput = document.getElementById('nav-check-input');
    if (navCheckInput) navCheckInput.addEventListener('input', checkNavNameLength);

    // 3. تفعيل توليد الكلانات
    const generateBtn = document.getElementById('generate-clan-btn');
    const clanOutput = document.getElementById('clan-output');
    if (generateBtn) generateBtn.addEventListener('click', generateRandomClan);
    if (clanOutput) {
        clanOutput.addEventListener('click', () => {
            if (clanOutput.innerText !== "اضغط لتوليد الاسم...") {
                copyText(clanOutput.innerText);
            }
        });
    }

    // 4. تفعيل القائمة الجانبية والنوافذ (Modals)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    const openPageBtn = document.getElementById('open-firefire-modal');
    const ffPage = document.getElementById('ff-fullscreen-page');
    const pageCloseBtn = document.getElementById('page-close-btn');
    const openClanBtn = document.getElementById('open-clan-modal');
    const clanPage = document.getElementById('clan-fullscreen-page');
    const clanCloseBtn = document.getElementById('clan-close-btn');

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => { sideNav.classList.add('open'); overlay.classList.add('active'); });
    if (closeBtn) closeBtn.addEventListener('click', () => { sideNav.classList.remove('open'); overlay.classList.remove('active'); });
    if (overlay) overlay.addEventListener('click', () => { 
        if(sideNav) sideNav.classList.remove('open'); 
        if(ffPage) ffPage.classList.remove('active'); 
        if(clanPage) clanPage.classList.remove('active'); 
        overlay.classList.remove('active'); 
    });

    if (openPageBtn) openPageBtn.addEventListener('click', () => { 
        if(sideNav) sideNav.classList.remove('open'); 
        if(overlay) overlay.classList.remove('active'); 
        if(ffPage) ffPage.classList.add('active'); 
    });
    if (pageCloseBtn) pageCloseBtn.addEventListener('click', () => { ffPage.classList.remove('active'); });

    if (openClanBtn) openClanBtn.addEventListener('click', () => { 
        if(sideNav) sideNav.classList.remove('open'); 
        if(overlay) overlay.classList.remove('active'); 
        if(clanPage) clanPage.classList.add('active'); 
    });
    if (clanCloseBtn) clanCloseBtn.addEventListener('click', () => { clanPage.classList.remove('active'); });

    // 5. تفعيل روابط الفوتر
    const privacyBox = document.getElementById('privacy');
    const contactBox = document.getElementById('contact');
    const pLink = document.querySelector('a[href="#privacy"]');
    const cLink = document.querySelector('a[href="#contact"]');

    if (pLink && privacyBox && contactBox) {
        pLink.onclick = (e) => {
            e.preventDefault();
            privacyBox.style.display = 'block';
            contactBox.style.display = 'none';
            privacyBox.scrollIntoView({ behavior: 'smooth' });
        };
    }
    if (cLink && privacyBox && contactBox) {
        cLink.onclick = (e) => {
            e.preventDefault();
            contactBox.style.display = 'block';
            privacyBox.style.display = 'none';
            contactBox.scrollIntoView({ behavior: 'smooth' });
        };
    }
});
