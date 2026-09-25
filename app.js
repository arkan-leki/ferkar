/* ==========================================================================
   Ferkar — language switching + small UI behaviour
   Three languages: English (LTR), Kurdish Sorani (RTL), Arabic (RTL).
   ========================================================================== */

const T = {
  en: {
    navAbout:"About", navServices:"Services", navWork:"Work", navTeam:"Team", navContact:"Contact", navCta:"Start a Project",
    heroBadge:"Tech Entrepreneurship Agency",
    heroL1:"Build Bold.", heroL2:"Launch Fast.", heroL3:"Scale Smart.",
    heroSub:"Ferkar partners with founders and startups to turn ideas into products, businesses, and market leaders.",
    heroCta1:"Start Your Journey", heroCta2:"See Our Work",
    tagline:"Ideas to Reality",
    subtag:"Technology · Education · Business Development",
    aboutKicker:"Who We Are", stat1n:"40+", stat1l:"Startups Launched", stat2n:"92%", stat2l:"Client Retention", stat3n:"6", stat3l:"Years of Experience", stat4n:"3", stat4l:"Countries Served", statsCta:"Work with us →", aboutH2:"Two disciplines. One team.",
    aboutSub:"Most agencies sell you a promise and subcontract the work. Ferkar is two people who do it themselves — one engineer who builds the product, one designer who builds the business around it.",
    aboutC1t:"We build, we don't resell",
    aboutC1d:"Everything you see here was designed and shipped by this team. No outsourcing, no white-labelling.",
    aboutC2t:"Local language, real RTL",
    aboutC2d:"Kurdish, Arabic and English — with proper right-to-left layout, not a translated template bolted on afterwards.",
    svcKicker:"What We Do", svcH2:"Everything you need to build and grow",
    svcSub:"From zero to traction — we cover every stage of a startup's journey.",
    svc1t:"Strategy & Business", svc1d:"Validating the idea, structuring the company, positioning, and pricing — before a line of code is written.",
    svc2t:"Design & Brand", svc2d:"Brand identity, product interfaces, and marketing assets that make a small company look established.",
    svc3t:"Web & Mobile Apps", svc3d:"Full-stack development for web platforms and mobile apps — production-ready, shipped, in the stores.",
    svc4t:"Engineering & Growth", svc4d:"Custom systems, integrations, APIs, deployment and hosting — plus the marketing that gets you users.",
    byHazhar:"Business", byArkan:"Development",
    workKicker:"Our Work", workH2:"What we've built",
    workSub:"Live systems, published apps and real clients — not screenshots of mockups.",
    devTitle:"Development", devSub:"Built by Arkan — full-stack engineer.",
    kOwned:"Our product", kClient:"Client work",
    cRtl:"RTL · 4 languages", cOffline:"Offline-first", cPrinter:"Thermal printing",
    wGihan:"Multi-tenant retail ERP and POS. Sales, stock ledgers, customer debts, cash boxes, multi-store, staff permissions and profit reporting.",
    wZuba:"Wholesale and distribution ERP. Bulk invoicing, multi-warehouse stock, trader accounts, payments and reporting.",
    wKapitan:"Offline tablet POS for cafés and counter businesses. Menu ordering and Bluetooth thermal receipt printing.",
    wFerga:"Trilingual education marketplace connecting students with tutors, schools and centres. Published on Google Play.",
    wJumla:"B2B wholesale marketplace for the Iraqi market — Arabic-first, with Kurdish and English, seller onboarding and RFQ flows.",
    wShaz:"Live marketing site for a print and advertising company. Sorani Kurdish, full right-to-left, with a contact flow.",
    wPoshya:"Trilingual multi-vendor marketplace with video reels and search. Built for Kurdish, Arabic and English shoppers.",
    designTitle:"Design & Marketing", designSub:"Led by Hazhar — brand, interface and growth.",
    d1t:"Brand Identity", d1d:"Logos, colour systems and typography built for companies that need to look credible from day one.",
    d2t:"Product & UI Design", d2d:"Interfaces designed for Kurdish and Arabic users — right-to-left first, not mirrored afterwards.",
    d3t:"Digital Marketing", d3d:"Social campaigns, content and paid promotion for startups with limited budgets and real targets.",
    todoT:"To fill in:", todoD:"Hazhar's real case studies go here — client names, before/after, results and images. Replace these three cards with real projects before this page goes public.",
    teamKicker:"The Team", teamH2:"Who you're actually working with",
    teamSub:"Small on purpose. The people who plan your project are the people who deliver it.",
    roleArkan:"Full-Stack Developer",
    bioArkan:"6+ years building production systems. Specialises in POS, ERP and multi-tenant platforms with true Arabic, Kurdish and Persian right-to-left support. Ships to the App Store and Google Play.",
    roleHazhar:"Design & Business",
    bioHazhar:"Brand design, marketing and business development — the side that finds the clients, shapes the offer, and makes the product look and sound like it belongs.",
    cBrand:"Brand identity", cUi:"UI design", cMktg:"Marketing", cBiz:"Business development",
    growT:"Growing:", growD:"More team members will be added here as Ferkar grows — each with their own section, the same way these two are split.",
    ctKicker:"Get In Touch", ctaTitle:"Talk to us directly", ctaSub:"No forms, no waiting. Message us on WhatsApp and you\u2019ll usually get an answer the same day.", ctaWa:"WhatsApp", ctaWaSub:"Fastest — message us now", ctaMail:"Email", ctH2:"Ready to build something?",
    ctSub:"Tell us about your idea. We'll come back with a clear plan — the scope, the timeline and the cost, in plain language.",
    ctLoc:"Kalar Mall, Kalar, Sulaymaniyah, Iraq", mapName:"Kalar Mall", mapOpen:"Open in Maps", mapDir:"Get directions", ctReply:"Reply within 24 hours",
    fName:"Your Name", fEmail:"Email Address", fMsg:"Tell us about your project", fSend:"Send Message",
    footTag:"Building the future, one startup at a time. Technology, education and business development from Kalar, Iraq.",
    footNav:"Explore", footContact:"Contact", footRights:"All rights reserved.", footBuilt:"Designed and built in-house."
  },

  ku: {
    navAbout:"دەربارە", navServices:"خزمەتگوزاریەکان", navWork:"کارەکان", navTeam:"تیم", navContact:"پەیوەندی", navCta:"دەستپێکردنی پڕۆژە",
    heroBadge:"ئاژانسی کارآفرینی تەکنەلۆژی",
    heroL1:"بە ئازایی بنیاد بنێ.", heroL2:"بە خێرایی بڵاوی بکەوە.", heroL3:"بە زیرەکی گەورەی بکە.",
    heroSub:"فێرکار لەگەڵ دامەزرێنەران و ستارتهاپەکان کار دەکات بۆ ئەوەی بیرۆکە بکەن بە بەرهەم، بازرگانی و پێشەنگانی بازاڕ.",
    heroCta1:"دەست پێبکە", heroCta2:"کارەکانمان ببینە",
    tagline:"لە بیرۆکەوە بۆ واقیع",
    subtag:"تەکنەلۆژی · خوێندن · گەشەپێدانی بازرگانی",
    aboutKicker:"ئێمە کێین", stat1n:"+٤٠", stat1l:"ستارتاپی دەستپێکراو", stat2n:"٪٩٢", stat2l:"مانەوەی کڕیار", stat3n:"٦", stat3l:"ساڵ ئەزموون", stat4n:"٣", stat4l:"وڵاتی خزمەتکراو", statsCta:"کار لەگەڵ ئێمە بکە →", aboutH2:"دوو پسپۆڕی. یەک تیم.",
    aboutSub:"زۆربەی ئاژانسەکان بەڵێن دەفرۆشن و کارەکە دەدەن بە کەسانی تر. فێرکار دوو کەسن کە خۆیان کارەکە دەکەن — یەک ئەندازیار کە بەرهەمەکە دروست دەکات، یەک دیزاینەر کە بازرگانییەکەی لە دەوری بنیاد دەنێت.",
    aboutC1t:"ئێمە دروست دەکەین، دووبارە نافرۆشین",
    aboutC1d:"هەموو ئەوەی لێرە دەبینیت لەلایەن ئەم تیمەوە دیزاین و دروست کراوە. بێ دەرەکی و بێ ناوی تر.",
    aboutC2t:"زمانی خۆجێیی، RTL ی ڕاستەقینە",
    aboutC2d:"کوردی، عەرەبی و ئینگلیزی — بە ڕێکخستنی دروستی ڕاست بۆ چەپ، نەک قاڵبێکی وەرگێڕدراو.",
    svcKicker:"ئەوەی ئێمە دەیکەین", svcH2:"هەموو ئەوەی پێویستتە بۆ بنیادنانی و گەشەکردن",
    svcSub:"لە سفرەوە بۆ سەرکەوتن — هەموو قۆناغەکانی گەشەی ستارتێک دەگرینەوە.",
    svc1t:"ستراتیژی و بازرگانی", svc1d:"پشتڕاستکردنەوەی بیرۆکە، ڕێکخستنی کۆمپانیا، پێگە و نرخ — پێش نووسینی یەک دێڕ کۆد.",
    svc2t:"دیزاین و براند", svc2d:"ناسنامەی براند، ڕووکاری بەرهەم و کەرەستەی بازاڕگەری کە کۆمپانیایەکی بچووک وەک دامەزراوێک دەردەخات.",
    svc3t:"ئەپی وێب و مۆبایل", svc3d:"گەشەپێدانی فولستاک بۆ پلاتفۆرمی وێب و ئەپی مۆبایل — ئامادە بۆ بەرهەمهێنان، بڵاوکراوە لە ستۆرەکان.",
    svc4t:"ئەندازیاری و گەشەکردن", svc4d:"سیستەمی تایبەت، یەکخستن، API، بڵاوکردنەوە و هۆستینگ — لەگەڵ بازاڕگەری بۆ بەدەستهێنانی بەکارهێنەر.",
    byHazhar:"بازرگانی", byArkan:"گەشەپێدان",
    workKicker:"کارەکانمان", workH2:"ئەوەی دروستمان کردووە",
    workSub:"سیستەمی زیندوو، ئەپی بڵاوکراوە و کڕیاری ڕاستەقینە — نەک وێنەی نموونە.",
    devTitle:"گەشەپێدان", devSub:"لەلایەن ئارکان — ئەندازیاری فولستاک.",
    kOwned:"بەرهەمی ئێمە", kClient:"کاری کڕیار",
    cRtl:"RTL · ٤ زمان", cOffline:"بێ ئینتەرنێت", cPrinter:"چاپەری گەرمی",
    wGihan:"سیستەمی فرۆشتن و کۆگای فرەکرێیەر. فرۆشتن، تۆمارەکانی کۆگا، قەرزی کڕیار، سندوقی پارە، چەند لق، دەسەڵاتی کارمەند و ڕاپۆرتی قازانج.",
    wZuba:"سیستەمی دابەشکردن و کۆی فرۆشتن. پسووڵەی کۆ، کۆگای فرە، حیسابی بازرگان، پارەدان و ڕاپۆرت.",
    wKapitan:"سیستەمی فرۆشتنی تابلێت بێ ئینتەرنێت بۆ کافێ و دوکانەکان. داواکاری لیست و چاپکردنی وەسڵ بە بلوتوث.",
    wFerga:"پلاتفۆرمی فێرکاری سێزمانی کە قوتابیان بە مامۆستا، قوتابخانە و ناوەندەکان دەبەستێتەوە. لە Google Play بڵاوکراوەتەوە.",
    wJumla:"بازاڕگەری کۆی B2B بۆ بازاڕی عێراق — عەرەبی سەرەکی، لەگەڵ کوردی و ئینگلیزی.",
    wShaz:"ماڵپەڕی بازاڕگەری زیندوو بۆ کۆمپانیایەکی چاپ و ڕیکلام. سۆرانی، ڕاست بۆ چەپ.",
    wPoshya:"بازاڕگەری فرەفرۆشیار سێزمانی لەگەڵ ڤیدیۆ و گەڕان.",
    designTitle:"دیزاین و بازاڕگەری", designSub:"بە سەرکردایەتی هەژار — براند، ڕووکار و گەشەکردن.",
    d1t:"ناسنامەی براند", d1d:"لۆگۆ، سیستەمی ڕەنگ و فۆنت بۆ کۆمپانیاکان کە پێویستە لە ڕۆژی یەکەمەوە باوەڕپێکراو دەربکەون.",
    d2t:"دیزاینی بەرهەم و UI", d2d:"ڕووکار بۆ بەکارهێنەرانی کوردی و عەرەبی — ڕاست بۆ چەپ لە سەرەتاوە.",
    d3t:"بازاڕگەری دیجیتاڵ", d3d:"کەمپینی سۆشیال میدیا، ناوەڕۆک و ڕیکلامی پارەدان بۆ ستارتهاپەکان.",
    todoT:"بۆ پڕکردنەوە:", todoD:"پڕۆژە ڕاستەقینەکانی هەژار لێرە دادەنرێن — ناوی کڕیار، پێش/دوای، ئەنجام و وێنەی کارەکە.",
    teamKicker:"تیمەکە", teamH2:"ئەوانەی کارت لەگەڵ دەکەن",
    teamSub:"بچووک بە مەبەست. ئەوانەی پلانی پڕۆژەکەت دادەنێن هەمان ئەوانەن کە جێبەجێی دەکەن.",
    roleArkan:"ئەندازیاری فولستاک",
    bioArkan:"٦+ ساڵ بنیادنانی سیستەمی بەرهەمهێنان. پسپۆڕ لە POS، ERP و پلاتفۆرمی فرەکرێیەر بە پاڵپشتی ڕاستەقینەی کوردی، عەرەبی و فارسی. بڵاوکردنەوە لە App Store و Google Play.",
    roleHazhar:"دیزاین و بازرگانی",
    bioHazhar:"دیزاینی براند، بازاڕگەری و گەشەپێدانی بازرگانی — ئەو لایەنەی کڕیار دەدۆزێتەوە و بەرهەمەکە وا دەکات شایستە دەربکەوێت.",
    cBrand:"ناسنامەی براند", cUi:"دیزاینی UI", cMktg:"بازاڕگەری", cBiz:"گەشەپێدانی بازرگانی",
    growT:"گەشەکردن:", growD:"ئەندامی زیاتری تیم لێرە زیاد دەکرێن کاتێک فێرکار گەشە دەکات.",
    ctKicker:"پەیوەندیمان پێوە بکە", ctaTitle:"ڕاستەوخۆ قسەمان لەگەڵ بکە", ctaSub:"فۆرم نییە، چاوەڕوانی نییە. لە واتساپ پەیامێکمان بۆ بنێرە — زۆرجار هەمان ڕۆژ وەڵام دەگریتەوە.", ctaWa:"واتساپ", ctaWaSub:"خێراترین — ئێستا پەیام بنێرە", ctaMail:"ئیمەیڵ", ctH2:"ئامادەیت شتێک بنیاد بنێیت؟",
    ctSub:"بیرۆکەکەت بۆمان بنێرە. بە پلانێکی ڕوون دەگەڕێینەوە — ئاست، کات و تێچوو، بە زمانی سادە.",
    ctLoc:"کەلار مۆڵ، کەلار، سلێمانی، عێراق", mapName:"کەلار مۆڵ", mapOpen:"لە نەخشە بیکەرەوە", mapDir:"ڕێنمایی بگەڕێ", ctReply:"وەڵام لە ماوەی ٢٤ کاتژمێر",
    fName:"ناوت", fEmail:"ئیمەیڵ", fMsg:"دەربارەی پڕۆژەکەت بۆمان بنێرە", fSend:"نامە بنێرە",
    footTag:"بنیادنانی داهاتوو، ستارتێک بە ستارتێک. تەکنەلۆژی، خوێندن و گەشەپێدانی بازرگانی لە کەلارەوە.",
    footNav:"گەڕان", footContact:"پەیوەندی", footRights:"هەموو مافەکان پارێزراون.", footBuilt:"دیزاین و بنیادنانی ناوخۆیی."
  },

  ar: {
    navAbout:"من نحن", navServices:"الخدمات", navWork:"أعمالنا", navTeam:"الفريق", navContact:"تواصل", navCta:"ابدأ مشروعك",
    heroBadge:"وكالة ريادة أعمال تقنية",
    heroL1:"ابنِ بجرأة.", heroL2:"أطلق بسرعة.", heroL3:"انمُ بذكاء.",
    heroSub:"فيركار تتعاون مع المؤسسين والشركات الناشئة لتحويل الأفكار إلى منتجات وشركات ورواد في السوق.",
    heroCta1:"ابدأ رحلتك", heroCta2:"شاهد أعمالنا",
    tagline:"من الفكرة إلى الواقع",
    subtag:"تقنية · تعليم · تطوير أعمال",
    aboutKicker:"من نحن", stat1n:"+٤٠", stat1l:"شركة ناشئة", stat2n:"٩٢٪", stat2l:"الاحتفاظ بالعملاء", stat3n:"٦", stat3l:"سنوات خبرة", stat4n:"٣", stat4l:"دول", statsCta:"اعمل معنا →", aboutH2:"تخصصان. فريق واحد.",
    aboutSub:"معظم الوكالات تبيعك وعداً وتُسند العمل لغيرها. فيركار شخصان يقومان بالعمل بنفسيهما — مهندس يبني المنتج، ومصمم يبني الأعمال حوله.",
    aboutC1t:"نبني، ولا نعيد البيع",
    aboutC1d:"كل ما تراه هنا صُمم ونُفّذ بواسطة هذا الفريق. بلا إسناد خارجي وبلا أسماء مستعارة.",
    aboutC2t:"لغة محلية ودعم RTL حقيقي",
    aboutC2d:"الكردية والعربية والإنجليزية — بتصميم صحيح من اليمين إلى اليسار، وليس قالباً مترجماً.",
    svcKicker:"ما نقوم به", svcH2:"كل ما تحتاجه للبناء والنمو",
    svcSub:"من الصفر إلى الانطلاق — نغطي كل مرحلة في رحلة الشركة الناشئة.",
    svc1t:"الاستراتيجية والأعمال", svc1d:"التحقق من الفكرة، هيكلة الشركة، التموضع والتسعير — قبل كتابة سطر واحد من الكود.",
    svc2t:"التصميم والهوية", svc2d:"هوية بصرية، واجهات منتج، ومواد تسويقية تجعل شركة صغيرة تبدو راسخة.",
    svc3t:"تطبيقات الويب والموبايل", svc3d:"تطوير متكامل لمنصات الويب وتطبيقات الموبايل — جاهزة للإنتاج، منشورة في المتاجر.",
    svc4t:"الهندسة والنمو", svc4d:"أنظمة مخصصة، تكاملات، واجهات برمجية، نشر واستضافة — مع التسويق الذي يجلب المستخدمين.",
    byHazhar:"أعمال", byArkan:"تطوير",
    workKicker:"أعمالنا", workH2:"ما قمنا ببنائه",
    workSub:"أنظمة حيّة وتطبيقات منشورة وعملاء حقيقيون — لا صور نماذج.",
    devTitle:"التطوير", devSub:"بإنجاز أركان — مهندس متكامل.",
    kOwned:"منتجنا", kClient:"عمل لعميل",
    cRtl:"RTL · ٤ لغات", cOffline:"يعمل دون إنترنت", cPrinter:"طباعة حرارية",
    wGihan:"نظام مبيعات ومخزون متعدد المستأجرين. بيع، سجلات مخزون، ديون العملاء، صناديق نقد، فروع متعددة، صلاحيات وتقارير أرباح.",
    wZuba:"نظام توزيع وبيع بالجملة. فواتير جملة، مخزون متعدد المستودعات، حسابات التجار، مدفوعات وتقارير.",
    wKapitan:"نظام نقاط بيع على تابلت يعمل دون إنترنت للمقاهي والمحلات. طلب من القائمة وطباعة حرارية بالبلوتوث.",
    wFerga:"منصة تعليمية بثلاث لغات تربط الطلاب بالمدرسين والمدارس والمراكز. منشورة على Google Play.",
    wJumla:"سوق جملة B2B للسوق العراقي — بالعربية أولاً، مع الكردية والإنجليزية.",
    wShaz:"موقع تسويقي حيّ لشركة طباعة وإعلان. بالكردية السورانية ودعم كامل لليمين إلى اليسار.",
    wPoshya:"سوق متعدد البائعين بثلاث لغات مع فيديوهات وبحث.",
    designTitle:"التصميم والتسويق", designSub:"بقيادة هەژار — الهوية والواجهة والنمو.",
    d1t:"الهوية البصرية", d1d:"شعارات وأنظمة ألوان وخطوط لشركات تحتاج أن تبدو موثوقة من اليوم الأول.",
    d2t:"تصميم المنتج والواجهات", d2d:"واجهات مصممة للمستخدمين الكرد والعرب — من اليمين إلى اليسار من البداية.",
    d3t:"التسويق الرقمي", d3d:"حملات تواصل اجتماعي ومحتوى وإعلانات مدفوعة لشركات ناشئة بميزانيات محدودة.",
    todoT:"للاستكمال:", todoD:"تُوضع هنا مشاريع هەژار الحقيقية — أسماء العملاء، قبل/بعد، النتائج وصور العمل.",
    teamKicker:"الفريق", teamH2:"من تعمل معه فعلاً",
    teamSub:"صغير عن قصد. من يخطط لمشروعك هو من ينفذه.",
    roleArkan:"مهندس متكامل",
    bioArkan:"أكثر من ٦ سنوات في بناء أنظمة إنتاجية. متخصص في نقاط البيع وأنظمة ERP والمنصات متعددة المستأجرين بدعم حقيقي للعربية والكردية والفارسية. النشر على App Store و Google Play.",
    roleHazhar:"التصميم والأعمال",
    bioHazhar:"تصميم الهوية والتسويق وتطوير الأعمال — الجانب الذي يجد العملاء ويشكّل العرض ويجعل المنتج يبدو كما ينبغي.",
    cBrand:"الهوية البصرية", cUi:"تصميم الواجهات", cMktg:"التسويق", cBiz:"تطوير الأعمال",
    growT:"في نمو:", growD:"سيُضاف أعضاء جدد إلى الفريق هنا مع نمو فيركار.",
    ctKicker:"تواصل معنا", ctaTitle:"تحدّث إلينا مباشرة", ctaSub:"لا نماذج ولا انتظار. راسلنا على واتساب وستحصل على رد في الغالب في اليوم نفسه.", ctaWa:"واتساب", ctaWaSub:"الأسرع — راسلنا الآن", ctaMail:"البريد الإلكتروني", ctH2:"جاهز لبناء شيء؟",
    ctSub:"أخبرنا عن فكرتك. سنعود إليك بخطة واضحة — النطاق والمدة والتكلفة، بلغة بسيطة.",
    ctLoc:"مول كلار، كلار، السليمانية، العراق", mapName:"مول كلار", mapOpen:"افتح في الخرائط", mapDir:"احصل على الاتجاهات", ctReply:"الرد خلال ٢٤ ساعة",
    fName:"الاسم", fEmail:"البريد الإلكتروني", fMsg:"أخبرنا عن مشروعك", fSend:"إرسال",
    footTag:"نبني المستقبل، شركة ناشئة تلو الأخرى. تقنية وتعليم وتطوير أعمال من كلار، كردستان.",
    footNav:"استكشف", footContact:"تواصل", footRights:"جميع الحقوق محفوظة.", footBuilt:"تصميم وبناء داخلي."
  }
};

const RTL = ["ku", "ar"];

const WA_NUMBER = "9647706947874";
const WA_MSG = {
  en: "Hi Ferkar, I'd like to talk about a project.",
  ku: "سڵاو فێرکار، دەمەوە لەبارەی پڕۆژەیەک قسە بکەم.",
  ar: "مرحباً فيركار، أريد التحدث عن مشروع."
};
const MAIL_SUBJECT = {
  en: "Project enquiry", ku: "داواکاری پڕۆژە", ar: "استفسار عن مشروع"
};

function apply(lang){
  const dict = T[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = RTL.includes(lang) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });

  // placeholders on the contact form
  const ph = { en:{name:"Your name",email:"you@example.com",message:"What are you building?"},
               ku:{name:"ناوت",email:"you@example.com",message:"چی دروست دەکەیت؟"},
               ar:{name:"اسمك",email:"you@example.com",message:"ماذا تبني؟"} }[lang];
  const f = document.querySelector("form.formcard");
  if (f && ph){
    if (f.name)    f.name.placeholder    = ph.name;
    if (f.email)   f.email.placeholder   = ph.email;
    if (f.message) f.message.placeholder = ph.message;
  }

  document.querySelectorAll("[data-set]").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.set === lang)));

  // contact CTAs follow the language, so the message arrives in the visitor's own words
  const wa = document.getElementById("waMain");
  if (wa) wa.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MSG[lang] || WA_MSG.en);
  const mail = document.getElementById("mailMain");
  if (mail) mail.href = "mailto:info@ferga.app?subject=" + encodeURIComponent(MAIL_SUBJECT[lang] || MAIL_SUBJECT.en);

  try { localStorage.setItem("ferkar_lang", lang); } catch(e){}
}

document.querySelectorAll("[data-set]").forEach(b =>
  b.addEventListener("click", () => apply(b.dataset.set)));

/* mobile menu */
const burger = document.getElementById("burger");
const navlinks = document.getElementById("navlinks");
if (burger && navlinks){
  burger.addEventListener("click", () => {
    const open = navlinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  navlinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navlinks.classList.remove("open");
      burger.setAttribute("aria-expanded","false");
    }));
}

/* footer year */
const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();

/* initial language: ?lang= → saved → browser → English
   ?lang=ku / ?lang=ar let you share a link straight into that language. */
let start = "en";
try {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("ferkar_lang");
  const nav = (navigator.language || "").toLowerCase();
  if (fromUrl && T[fromUrl]) start = fromUrl;
  else if (saved && T[saved]) start = saved;
  else if (nav.startsWith("ckb") || nav.startsWith("ku")) start = "ku";
  else if (nav.startsWith("ar")) start = "ar";
} catch(e){}
apply(start);

/* ==========================================================================
   Scroll behaviour — nav state, GSAP reveals, scroll cues
   ========================================================================== */
(function () {
  const nav = document.querySelector("header.nav");
  const scrollDown = document.getElementById("scrollDown");
  const toTop = document.getElementById("toTop");
  const doc = document.documentElement;

  function onScroll() {
    const y = window.scrollY || doc.scrollTop;

    // nav: transparent over the hero, frosted once you scroll
    if (nav) nav.classList.toggle("scrolled", y > 40);

    // hide the scroll-down cue as soon as the user moves
    if (scrollDown) scrollDown.classList.toggle("hide", y > 140);

    // "back to top" appears near the bottom of the page
    if (toTop) {
      const nearBottom = (window.innerHeight + y) >= (doc.scrollHeight - 380);
      toTop.classList.toggle("show", nearBottom);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  if (scrollDown) {
    scrollDown.addEventListener("click", () => {
      const next = document.querySelector("#about");
      if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---- GSAP scroll reveals ---- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger);

  if (!hasGsap || reduce) {
    // no GSAP (offline, blocked) or the user asked for less motion:
    // keep everything visible rather than leaving content hidden.
    doc.classList.add("no-anim");
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);

  window.gsap.from(".hero-in > *", {
    y: 24, opacity: 0, duration: .8, ease: "power2.out", stagger: .07, delay: .1
  });

  window.gsap.utils
    .toArray(".sec-head, .card, .map-card, .formcard, .contact-list")
    .forEach((el) => {
      window.gsap.from(el, {
        y: 38, opacity: 0, duration: .75, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true }
      });
    });
})();
