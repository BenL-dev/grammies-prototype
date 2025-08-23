// Multi-Language System for Grammar Games
// Supports German, English, Chinese with localStorage persistence

class LanguageSystem {
    constructor() {
        this.currentLanguage = this.loadLanguage();
        this.translations = this.getTranslations();
        this.initializeLanguageSystem();
    }

    loadLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && ['de', 'en', 'zh'].includes(langParam)) {
            localStorage.setItem('grammarGamesLanguage', langParam);
            return langParam;
        }

        // Check localStorage
        const stored = localStorage.getItem('grammarGamesLanguage');
        if (stored && ['de', 'en', 'zh'].includes(stored)) {
            return stored;
        }

        // Default to German
        return 'de';
    }

    saveLanguage(lang) {
        localStorage.setItem('grammarGamesLanguage', lang);
        this.currentLanguage = lang;
    }

    getTranslations() {
        return {
            // German translations
            de: {
                // Meta data
                pageTitle: 'Grammar Games - 10-Min Grammatik für Kinder',
                
                // Language Selector
                languageLabel: 'Sprache',
                languages: {
                    de: 'Deutsch',
                    en: 'English',
                    zh: '中文'
                },

                // Navigation
                backButton: '← Zurück',
                
                // Variants
                variantA: 'Variante A: 10-Min Games',
                variantB: 'Variante B: Multisensory Grammar',

                // Hero Section (index.html)
                ageRange: 'Für Kinder 4-10 Jahre',
                heroHeadlineA: '10-Minuten Grammatik-Games',
                heroHeadlineB: 'Multisensorische Grammatik für zu Hause',
                heroSublineA: 'Spielerisch, multisensorisch, kurz und strukturiert - Grammatik lernen war noch nie so einfach!',
                heroSublineB: 'Interaktive Lernmethoden für eine ganzheitliche Sprachentwicklung Ihres Kindes!',
                
                // Value Props
                playful: 'Spielerisch',
                multisensory: 'Multisensorisch',
                timeLimit: 'Nur 10 Minuten',
                structured: 'Strukturiert',
                
                // Buttons
                viewExampleGames: 'Beispiel-Games ansehen',
                
                // Preview Section (preview.html)
                previewTitle: 'So funktionieren unsere Grammar Games',
                previewSubtitle: 'Printable Karten mit einfachen Routinen für zu Hause',
                
                // Game examples
                characterWordGame: '🎯 Charakter-Wortarten-Spiel',
                characterSentenceGame: '🏗️ Charakter-Sätze-Spiel',
                
                // Game elements
                learningFriends: '🌟 Unsere Lern-Freunde helfen beim Sortieren!',
                charactersBuilding: '🎭 Die Charaktere bauen einen Satz!',
                perfectSentence: '✨ "I play games!" ✨',
                sentenceStructure: '👧 Pronoun + 🎮 Verb + 🎲 Noun = Perfect Sentence!',
                
                // Routine steps
                miniRoutine: '🔄 Mini-Routine (5 Schritte):',
                step1: 'Karten mischen',
                step2: 'Ein Wort vorlesen',
                step3: 'Farbcode erklären',
                step4: 'Richtige Box finden',
                step5: 'Erfolg feiern! 🎉',
                
                // Word categories (stay in English for grammar learning)
                nouns: 'NOUNS',
                verbs: 'VERBS',
                adjectives: 'ADJECTIVES',
                nounDesc: 'Things & People',
                verbDesc: 'Action Words',
                adjectiveDesc: 'Describing Words',
                
                // Grammar exercise elements (stay in English)
                grammarGame1: 'Grammar Game #1',
                nounVerbAdj: 'Noun • Verb • Adjective',
                perfectSentence: '✨ "I play games!" ✨',
                sentenceStructure: '👧 Pronoun + 🎮 Verb + 🎲 Noun = Perfect Sentence!',
                
                // Analytics labels
                currentVariant: 'Aktuelle Variante:',
                pageViews: 'Page Views:',
                nextScreen: 'Nächster Screen:',
                targetCTR: 'Ziel-CTR:',
                targetCTRValue: '→ Games ansehen',
                journeyComplete: '🏆 Journey Complete:',
                emailSubmitted: '✓ Email Submitted',
                hypothesisFulfilled: 'Hypothese erfüllt:',
                testing: 'Testend...',
                actions: 'Actions:',
                
                // Age Chooser (chooser.html)
                ageQuestion: 'Wie alt ist Ihr Kind?',
                ageSubtitle: 'Wir zeigen Ihnen die passenden Grammar Games',
                
                age46: '4-6 Jahre',
                age46Desc: 'Spielerische Grundlagen',
                age46Examples: 'Beispiel-Spiele:',
                age46Game1: '🐱 Tier-Wörter sortieren',
                age46Game2: '🌈 Farben-Adjektive',
                age46Game3: '🏃‍♂️ Action-Verben',
                
                age710: '7-10 Jahre',
                age710Desc: 'Strukturierte Grammatik',
                age710Examples: 'Beispiel-Spiele:',
                age710Game1: '📝 Sätze konstruieren',
                age710Game2: '⚡ Zeit-Formen-Quiz',
                age710Game3: '🔤 Wortarten-Memory',
                
                // Feedback
                perfect: '✓ Perfekt!',
                ageSelected: 'Altersgruppe ausgewählt',
                redirecting: 'Leite Sie weiter zu personalisierten Inhalten...',
                ageSpecificText: 'Super! Wir haben passende Spiele für {age}-Jährige zusammengestellt.',
                
                // Next buttons
                suitableGames: 'Passende Spiele für mein Kind',
                
                // Email Capture (capture.html)
                freeStarterPack: 'Kostenloses Starter-Pack erhalten',
                starterPackDesc: '3 sofort einsetzbare Grammar Games + Anleitung per E-Mail',
                personalPack: 'Ihr persönliches Starter-Pack:',
                
                // Pack contents
                packItem1: '3 Printable Game-Karten',
                packItem2: 'Schritt-für-Schritt Anleitung',
                packItem3: 'Altersgerechte Schwierigkeit',
                packItem4: 'Je nur 10 Minuten',
                
                // Age-specific packs
                starterPack46: 'Ihr Starter-Pack für 4-6 Jahre:',
                pack46Item1: 'Tier-Wörter Sortier-Spiel',
                pack46Item2: 'Farben-Adjektive Memory',
                pack46Item3: 'Action-Verben Pantomime',
                pack46Item4: 'Eltern-Anleitung (einfach erklärt)',
                
                starterPack710: 'Ihr Starter-Pack für 7-10 Jahre:',
                pack710Item1: 'Sätze-Konstruktor Spiel',
                pack710Item2: 'Zeit-Formen-Quiz Karten',
                pack710Item3: 'Wortarten-Memory Advanced',
                pack710Item4: 'Fortgeschrittene Anleitung',
                
                // Form
                emailPlaceholder: 'Ihre E-Mail-Adresse',
                namePlaceholder: 'Ihr Vorname (optional)',
                getStarterPack: '🎁 Kostenloses Starter-Pack erhalten',
                
                // Trust indicators
                freeUnbinding: '✓ Kostenlos & unverbindlich',
                immediateDownload: '✓ Sofortiger Download',
                noSpam: '✓ Keine Spam-Mails',
                
                // Thank You (thankyou.html)
                thankYou: 'Vielen Dank!',
                packOnTheWay: 'Ihr Starter-Pack ist unterwegs',
                
                // Confirmation details
                emailSent: 'E-Mail gesendet',
                checkInbox: 'Prüfen Sie Ihren Posteingang (auch Spam-Ordner)',
                immediatelyAvailable: 'Sofort verfügbar',
                pdfReady: 'PDFs direkt zum Ausdrucken',
                getStarted: 'Loslegen',
                gamesReady: 'Spiele für Ihr Kind bereit',
                gamesReadyAge: 'Spiele für {age}-Jährige bereit',
                
                // Actions
                moreGames: 'Mehr Spiele ansehen',
                startOver: 'Nochmal von vorne',
                
                // Success metrics
                prototypeSuccess: '🎯 Prototype Erfolgreich!',
                emailSubmitRate: 'Email Submit Rate',
                screenJourney: 'Screen Journey',
                variantTested: 'Variant Tested',
                hypothesisStatus: 'Hypothese-Status: ',
                toTest: 'Zu testen',
                target: 'Ziel: ≥8-12% Email Submit Rate',
                
                // Analytics labels
                currentVariant: 'Aktuelle Variante:',
                pageViews: 'Page Views:',
                nextScreen: 'Nächster Screen:',
                targetCTR: 'Ziel-CTR:',
                journeyComplete: '🏆 Journey Complete:',
                emailSubmitted: '✓ Email Submitted',
                hypothesisFulfilled: 'Hypothese erfüllt:',
                testing: 'Testend...',
                actions: 'Actions:',
                
                // Form validation
                validEmailRequired: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
                sending: '📧 Wird gesendet...',

                // Analytics Panel Labels (Age Chooser)
                ageChooserTitle: '📊 Screen 3: Age Chooser',
                previewToChooserCTR: 'Preview → Chooser CTR:',
                nextScreenChooser: 'Nächster Screen:',
                conversionGoal: 'Conversion-Ziel:',
                ageSelection: 'Altersauswahl',
                segmentation: 'Segmentierung:',
                ageSegmentation: '4-6 vs 7-10',

                // Analytics Panel Labels (Hero)
                heroTitle: '📊 Screen 1: Hero',
                targetCTR: 'Ziel-CTR:',

                // Analytics Panel Labels (Preview)
                previewAnalyticsTitle: '📊 Screen 2: Preview',
                heroToPreviewCTR: 'Hero → Preview CTR:',
                engagementGoal: 'Engagement-Ziel:',
                gameInterest: 'Game-Interesse',

                // Analytics Panel Labels (Email Capture)
                captureTitle: '📊 Screen 4: Email Capture',
                chooserToCaptureCTR: 'Chooser → Capture CTR:',
                submitGoal: '🎯 Ziel:',
                submitTarget: '8-12% Submit',
                mainConversion: 'Hauptkonversion:',
                criticalScreen: '★ Kritischer Screen',

                // Analytics Panel Labels (Thank You)
                thankyouTitle: '📊 Screen 5: Thank You',
                actions: 'Actions:',
                moreRestart: 'Mehr | Restart',
            },

            // English translations
            en: {
                // Meta data
                pageTitle: 'Grammar Games - 10-Min Grammar for Children',
                
                // Language Selector
                languageLabel: 'Language',
                languages: {
                    de: 'Deutsch',
                    en: 'English',
                    zh: '中文'
                },

                // Navigation
                backButton: '← Back',
                
                // Variants
                variantA: 'Variant A: 10-Min Games',
                variantB: 'Variant B: Multisensory Grammar',

                // Hero Section
                ageRange: 'For Children Ages 4-10',
                heroHeadlineA: '10-Minute Grammar Games',
                heroHeadlineB: 'Multisensory Grammar at Home',
                heroSublineA: 'Playful, multisensory, short and structured - learning grammar has never been so easy!',
                heroSublineB: 'Interactive learning methods for comprehensive language development of your child!',
                
                // Value Props
                playful: 'Playful',
                multisensory: 'Multisensory',
                timeLimit: 'Only 10 Minutes',
                structured: 'Structured',
                
                // Buttons
                viewExampleGames: 'View Sample Games',
                
                // Preview Section
                previewTitle: 'How our Grammar Games work',
                previewSubtitle: 'Printable cards with simple routines for home',
                
                // Game examples
                characterWordGame: '🎯 Character Word Types Game',
                characterSentenceGame: '🏗️ Character Sentence Building Game',
                
                // Game elements
                learningFriends: '🌟 Our learning friends help with sorting!',
                charactersBuilding: '🎭 The characters build a sentence!',
                perfectSentence: '✨ "I play games!" ✨',
                sentenceStructure: '👧 Pronoun + 🎮 Verb + 🎲 Noun = Perfect Sentence!',
                
                // Routine steps
                miniRoutine: '🔄 Mini-Routine (5 Steps):',
                step1: 'Shuffle cards',
                step2: 'Read a word aloud',
                step3: 'Explain color code',
                step4: 'Find correct box',
                step5: 'Celebrate success! 🎉',
                
                // Word categories
                nouns: 'NOUNS',
                verbs: 'VERBS',
                adjectives: 'ADJECTIVES',
                nounDesc: 'Things & People',
                verbDesc: 'Action Words',
                adjectiveDesc: 'Describing Words',
                
                // Grammar exercise elements (stay in English)
                grammarGame1: 'Grammar Game #1',
                nounVerbAdj: 'Noun • Verb • Adjective',
                perfectSentence: '✨ "I play games!" ✨',
                sentenceStructure: '👧 Pronoun + 🎮 Verb + 🎲 Noun = Perfect Sentence!',
                
                // Age Chooser
                ageQuestion: 'How old is your child?',
                ageSubtitle: 'We\'ll show you the appropriate Grammar Games',
                
                age46: '4-6 Years',
                age46Desc: 'Playful Foundations',
                age46Examples: 'Example Games:',
                age46Game1: '🐱 Animal Word Sorting',
                age46Game2: '🌈 Color Adjectives',
                age46Game3: '🏃‍♂️ Action Verbs',
                
                age710: '7-10 Years',
                age710Desc: 'Structured Grammar',
                age710Examples: 'Example Games:',
                age710Game1: '📝 Sentence Construction',
                age710Game2: '⚡ Tense Quiz',
                age710Game3: '🔤 Word Types Memory',
                
                // Feedback
                perfect: '✓ Perfect!',
                ageSelected: 'Age group selected',
                redirecting: 'Redirecting you to personalized content...',
                ageSpecificText: 'Great! We have suitable games for {age}-year-olds ready.',
                
                // Next buttons
                suitableGames: 'Suitable Games for My Child',
                
                // Email Capture
                freeStarterPack: 'Get Free Starter Pack',
                starterPackDesc: '3 ready-to-use Grammar Games + Instructions via Email',
                personalPack: 'Your personal Starter Pack:',
                
                // Pack contents
                packItem1: '3 Printable Game Cards',
                packItem2: 'Step-by-Step Instructions',
                packItem3: 'Age-appropriate Difficulty',
                packItem4: 'Only 10 Minutes Each',
                
                // Age-specific packs
                starterPack46: 'Your Starter Pack for 4-6 Years:',
                pack46Item1: 'Animal Words Sorting Game',
                pack46Item2: 'Color Adjectives Memory',
                pack46Item3: 'Action Verbs Pantomime',
                pack46Item4: 'Parent Guide (Simply Explained)',
                
                starterPack710: 'Your Starter Pack for 7-10 Years:',
                pack710Item1: 'Sentence Builder Game',
                pack710Item2: 'Tense Quiz Cards',
                pack710Item3: 'Advanced Word Types Memory',
                pack710Item4: 'Advanced Instructions',
                
                // Form
                emailPlaceholder: 'Your Email Address',
                namePlaceholder: 'Your First Name (optional)',
                getStarterPack: '🎁 Get Free Starter Pack',
                
                // Trust indicators
                freeUnbinding: '✓ Free & Non-binding',
                immediateDownload: '✓ Immediate Download',
                noSpam: '✓ No Spam Emails',
                
                // Thank You
                thankYou: 'Thank You!',
                packOnTheWay: 'Your Starter Pack is on the way',
                
                // Confirmation details
                emailSent: 'Email Sent',
                checkInbox: 'Check your inbox (including spam folder)',
                immediatelyAvailable: 'Immediately Available',
                pdfReady: 'PDFs ready to print',
                getStarted: 'Get Started',
                gamesReady: 'Games ready for your child',
                gamesReadyAge: 'Games for {age}-year-olds ready',
                
                // Actions
                moreGames: 'View More Games',
                startOver: 'Start Over',
                
                // Success metrics
                prototypeSuccess: '🎯 Prototype Successful!',
                emailSubmitRate: 'Email Submit Rate',
                screenJourney: 'Screen Journey',
                variantTested: 'Variant Tested',
                hypothesisStatus: 'Hypothesis Status: ',
                toTest: 'To Test',
                target: 'Target: ≥8-12% Email Submit Rate',
                
                // Analytics labels
                currentVariant: 'Current Variant:',
                pageViews: 'Page Views:',
                nextScreen: 'Next Screen:',
                targetCTR: 'Target CTR:',
                targetCTRValue: '→ View Games',
                journeyComplete: '🏆 Journey Complete:',
                emailSubmitted: '✓ Email Submitted',
                hypothesisFulfilled: 'Hypothesis Fulfilled:',
                testing: 'Testing...',
                actions: 'Actions:',
                
                // Form validation
                validEmailRequired: 'Please enter a valid email address.',
                sending: '📧 Sending...',

                // Analytics Panel Labels (Age Chooser)
                ageChooserTitle: '📊 Screen 3: Age Chooser',
                previewToChooserCTR: 'Preview → Chooser CTR:',
                nextScreenChooser: 'Next Screen:',
                conversionGoal: 'Conversion Goal:',
                ageSelection: 'Age Selection',
                segmentation: 'Segmentation:',
                ageSegmentation: '4-6 vs 7-10',

                // Analytics Panel Labels (Hero)
                heroTitle: '📊 Screen 1: Hero',
                targetCTR: 'Target CTR:',

                // Analytics Panel Labels (Preview)
                previewAnalyticsTitle: '📊 Screen 2: Preview',
                heroToPreviewCTR: 'Hero → Preview CTR:',
                engagementGoal: 'Engagement Goal:',
                gameInterest: 'Game Interest',

                // Analytics Panel Labels (Email Capture)
                captureTitle: '📊 Screen 4: Email Capture',
                chooserToCaptureCTR: 'Chooser → Capture CTR:',
                submitGoal: '🎯 Goal:',
                submitTarget: '8-12% Submit',
                mainConversion: 'Main Conversion:',
                criticalScreen: '★ Critical Screen',

                // Analytics Panel Labels (Thank You)
                thankyouTitle: '📊 Screen 5: Thank You',
                actions: 'Actions:',
                moreRestart: 'More | Restart',

                // Hypothesis Status Messages
                hypothesisExcellent: '🎉 Excellent! ({rate}%)',
                hypothesisConfirmed: '✅ Hypothesis Confirmed! ({rate}%)',
                hypothesisBelow: '📊 Below Target ({rate}%)',

                // JavaScript Alert/Confirm Messages
                moreGamesFeature: '🎮 More Games Feature!\n\nIn the real application:\n• Additional Game Packages\n• Premium Content\n• Age-specific Recommendations\n• Community Features\n\nThis would lead to an extended catalog.',
                restartJourneyConfirm: '🔄 Restart Journey?\n\nThis will:\n• Reset Analytics\n• Start a new session\n• Return to Hero Screen\n\nContinue?',
                additionalGamesMessage: '🎮 More games would be shown here...\n\nIn the real app:\n• Additional Game Packages\n• Premium Content\n• Personalized Recommendations',
            },

            // Chinese translations
            zh: {
                // Meta data
                pageTitle: 'Grammar Games - 儿童10分钟语法学习',
                
                // Language Selector
                languageLabel: '语言',
                languages: {
                    de: 'Deutsch',
                    en: 'English',
                    zh: '中文'
                },

                // Navigation
                backButton: '← 返回',
                
                // Variants
                variantA: '选项A: 10分钟游戏',
                variantB: '选项B: 多感官语法',

                // Hero Section
                ageRange: '适合4-10岁儿童',
                heroHeadlineA: '10分钟语法游戏',
                heroHeadlineB: '家庭多感官语法学习',
                heroSublineA: '游戏化、多感官、简短且结构化 - 语法学习从未如此简单！',
                heroSublineB: '互动学习方法，全面提高您孩子的语言发展！',
                
                // Value Props
                playful: '游戏化',
                multisensory: '多感官',
                timeLimit: '仅需10分钟',
                structured: '结构化',
                
                // Buttons
                viewExampleGames: '查看示例游戏',
                
                // Preview Section
                previewTitle: '我们的语法游戏如何运作',
                previewSubtitle: '家庭使用的可打印卡片和简单程序',
                
                // Game examples
                characterWordGame: '🎯 角色词汇分类游戏',
                characterSentenceGame: '🏗️ 角色造句游戏',
                
                // Game elements
                learningFriends: '🌟 我们的学习伙伴帮助分类！',
                charactersBuilding: '🎭 角色们正在造句！',
                perfectSentence: '✨ "I play games!" ✨',
                sentenceStructure: '👧 代词 + 🎮 动词 + 🎲 名词 = 完美句子！',
                
                // Routine steps
                miniRoutine: '🔄 迷你练习 (5步)：',
                step1: '洗牌',
                step2: '大声读单词',
                step3: '解释颜色代码',
                step4: '找到正确的盒子',
                step5: '庆祝成功！🎉',
                
                // Word categories
                nouns: 'NOUNS',
                verbs: 'VERBS',
                adjectives: 'ADJECTIVES',
                nounDesc: 'Things & People',
                verbDesc: 'Action Words',
                adjectiveDesc: 'Describing Words',
                
                // Grammar exercise elements (stay in English)
                grammarGame1: 'Grammar Game #1',
                nounVerbAdj: 'Noun • Verb • Adjective',
                perfectSentence: '✨ "I play games!" ✨',
                sentenceStructure: '👧 Pronoun + 🎮 Verb + 🎲 Noun = Perfect Sentence!',
                
                // Age Chooser
                ageQuestion: '您的孩子几岁？',
                ageSubtitle: '我们将为您展示适合的语法游戏',
                
                age46: '4-6岁',
                age46Desc: '游戏化基础',
                age46Examples: '示例游戏：',
                age46Game1: '🐱 动物单词分类',
                age46Game2: '🌈 颜色形容词',
                age46Game3: '🏃‍♂️ 动作动词',
                
                age710: '7-10岁',
                age710Desc: '结构化语法',
                age710Examples: '示例游戏：',
                age710Game1: '📝 句子构造',
                age710Game2: '⚡ 时态测验',
                age710Game3: '🔤 词汇分类记忆',
                
                // Feedback
                perfect: '✓ 完美！',
                ageSelected: '年龄组已选择',
                redirecting: '正在为您跳转到个性化内容...',
                ageSpecificText: '太好了！我们为{age}岁的孩子准备了合适的游戏。',
                
                // Next buttons
                suitableGames: '适合我孩子的游戏',
                
                // Email Capture
                freeStarterPack: '获取免费入门包',
                starterPackDesc: '3个即用语法游戏 + 邮件指导',
                personalPack: '您的个人入门包：',
                
                // Pack contents
                packItem1: '3张可打印游戏卡',
                packItem2: '分步指导说明',
                packItem3: '适龄难度',
                packItem4: '每个仅需10分钟',
                
                // Age-specific packs
                starterPack46: '您的4-6岁入门包：',
                pack46Item1: '动物词汇分类游戏',
                pack46Item2: '颜色形容词记忆',
                pack46Item3: '动作动词表演',
                pack46Item4: '家长指南（简单解释）',
                
                starterPack710: '您的7-10岁入门包：',
                pack710Item1: '句子构造器游戏',
                pack710Item2: '时态测验卡',
                pack710Item3: '高级词汇分类记忆',
                pack710Item4: '进阶指导',
                
                // Form
                emailPlaceholder: '您的邮箱地址',
                namePlaceholder: '您的名字（可选）',
                getStarterPack: '🎁 获取免费入门包',
                
                // Trust indicators
                freeUnbinding: '✓ 免费且无约束',
                immediateDownload: '✓ 立即下载',
                noSpam: '✓ 无垃圾邮件',
                
                // Thank You
                thankYou: '谢谢您！',
                packOnTheWay: '您的入门包正在路上',
                
                // Confirmation details
                emailSent: '邮件已发送',
                checkInbox: '请检查您的收件箱（包括垃圾邮件文件夹）',
                immediatelyAvailable: '立即可用',
                pdfReady: '可直接打印的PDF',
                getStarted: '开始',
                gamesReady: '为您的孩子准备的游戏',
                gamesReadyAge: '为{age}岁孩子准备的游戏',
                
                // Actions
                moreGames: '查看更多游戏',
                startOver: '重新开始',
                
                // Success metrics
                prototypeSuccess: '🎯 原型成功！',
                emailSubmitRate: '邮件提交率',
                screenJourney: '屏幕旅程',
                variantTested: '测试变体',
                hypothesisStatus: '假设状态：',
                toTest: '待测试',
                target: '目标：≥8-12% 邮件提交率',
                
                // Analytics labels
                currentVariant: '当前变体：',
                pageViews: '页面浏览量：',
                nextScreen: '下一屏：',
                targetCTR: '目标点击率：',
                targetCTRValue: '→ 查看游戏',
                journeyComplete: '🏆 旅程完成：',
                emailSubmitted: '✓ 邮件已提交',
                hypothesisFulfilled: '假设实现：',
                testing: '测试中...',
                actions: '操作：',
                
                // Form validation
                validEmailRequired: '请输入有效的邮箱地址。',
                sending: '📧 发送中...',

                // Analytics Panel Labels (Age Chooser)
                ageChooserTitle: '📊 屏幕3：年龄选择',
                previewToChooserCTR: '预览→选择器点击率：',
                nextScreenChooser: '下一屏：',
                conversionGoal: '转化目标：',
                ageSelection: '年龄选择',
                segmentation: '细分：',
                ageSegmentation: '4-6岁vs7-10岁',

                // Analytics Panel Labels (Hero)
                heroTitle: '📊 屏幕1：英雄',
                targetCTR: '目标点击率：',

                // Analytics Panel Labels (Preview)
                previewAnalyticsTitle: '📊 屏幕2：预览',
                heroToPreviewCTR: '英雄→预览点击率：',
                engagementGoal: '参与目标：',
                gameInterest: '游戏兴趣',

                // Analytics Panel Labels (Email Capture)
                captureTitle: '📊 屏幕4：邮箱收集',
                chooserToCaptureCTR: '选择器→收集点击率：',
                submitGoal: '🎯 目标：',
                submitTarget: '8-12%提交',
                mainConversion: '主要转化：',
                criticalScreen: '★ 关键屏幕',

                // Analytics Panel Labels (Thank You)
                thankyouTitle: '📊 屏幕5：谢谢',
                actions: '操作：',
                moreRestart: '更多 | 重新开始',

                // Hypothesis Status Messages
                hypothesisExcellent: '🎉 太棒了！({rate}%)',
                hypothesisConfirmed: '✅ 假设证实！({rate}%)',
                hypothesisBelow: '📊 未达目标 ({rate}%)',

                // JavaScript Alert/Confirm Messages
                moreGamesFeature: '🎮 更多游戏功能！\n\n在真实应用中：\n• 额外的游戏包\n• 高级内容\n• 特定年龄段推荐\n• 社区功能\n\n这将带来扩展的目录。',
                restartJourneyConfirm: '🔄 重新开始旅程？\n\n这将：\n• 重置分析\n• 开始新会话\n• 返回英雄屏幕\n\n继续？',
                additionalGamesMessage: '🎮 这里会显示更多游戏...\n\n在真实应用中：\n• 额外的游戏包\n• 高级内容\n• 个性化推荐',
            }
        };
    }

    initializeLanguageSystem() {
        try {
            console.log('🚀 Initializing Language System...');
            this.addLanguageSelector();
            this.updatePageContent();
            console.log(`🌍 Language system initialized: ${this.currentLanguage}`);
        } catch (error) {
            console.error('❌ Error initializing language system:', error);
        }
    }

    addLanguageSelector() {
        // Create language selector HTML - simplified version for debugging
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <div class="language-dropdown" style="position: fixed; top: 20px; right: 20px; z-index: 1001;">
                <button class="language-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';" style="padding: 12px 18px; background: rgba(255, 255, 255, 0.15); color: white; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 25px; font-size: 14px; cursor: pointer;">
                    🌍 ${this.t('languages.' + this.currentLanguage)}
                </button>
                <div class="language-options" style="display: none; position: absolute; top: 100%; right: 0; background: rgba(255, 255, 255, 0.95); border-radius: 15px; padding: 10px; min-width: 160px; margin-top: 8px;">
                    <button onclick="console.log('German clicked'); window.languageSystem.changeLanguage('de')" style="display: block; width: 100%; padding: 12px 16px; border: none; background: none; color: #2c3e50; cursor: pointer; border-radius: 10px; text-align: left; font-size: 14px;" class="${this.currentLanguage === 'de' ? 'active' : ''}">
                        🇩🇪 ${this.t('languages.de')}
                    </button>
                    <button onclick="console.log('English clicked'); window.languageSystem.changeLanguage('en')" style="display: block; width: 100%; padding: 12px 16px; border: none; background: none; color: #2c3e50; cursor: pointer; border-radius: 10px; text-align: left; font-size: 14px;" class="${this.currentLanguage === 'en' ? 'active' : ''}">
                        🇬🇧 ${this.t('languages.en')}
                    </button>
                    <button onclick="console.log('Chinese clicked'); window.languageSystem.changeLanguage('zh')" style="display: block; width: 100%; padding: 12px 16px; border: none; background: none; color: #2c3e50; cursor: pointer; border-radius: 10px; text-align: left; font-size: 14px;" class="${this.currentLanguage === 'zh' ? 'active' : ''}">
                        🇨🇳 ${this.t('languages.zh')}
                    </button>
                </div>
            </div>
        `;

        // Add CSS for language selector
        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                position: fixed;
                top: 10px;
                right: 120px;
                z-index: 1001;
            }

            .language-dropdown {
                position: relative;
            }

            .language-btn {
                padding: 12px 18px;
                background: rgba(255, 255, 255, 0.15);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 25px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(15px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                font-family: 'Poppins', sans-serif;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .language-btn:hover {
                background: rgba(255, 255, 255, 0.25);
                border-color: rgba(255, 255, 255, 0.4);
                box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
                transform: translateY(-2px);
            }

            .language-options {
                position: absolute;
                top: 100%;
                right: 0;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                backdrop-filter: blur(20px);
                padding: 10px;
                min-width: 160px;
                display: none;
                margin-top: 8px;
                z-index: 1002;
                border: 1px solid rgba(255, 255, 255, 0.3);
            }

            .language-options.open {
                display: block;
                animation: fadeInUp 0.3s ease;
            }

            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .language-options button {
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100%;
                padding: 12px 16px;
                border: none;
                background: none;
                color: #2c3e50;
                cursor: pointer;
                border-radius: 10px;
                text-align: left;
                font-size: 14px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
                transition: all 0.2s ease;
            }

            .language-options button:hover {
                background: rgba(102, 126, 234, 0.1);
                transform: translateX(2px);
            }

            .language-options button.active {
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
                transform: translateX(2px);
                box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
            }
        `;
        document.head.appendChild(style);

        // Insert language selector into page (wait for DOM to be ready)
        if (document.body) {
            document.body.insertBefore(languageSelector, document.body.firstChild);
        } else {
            // Wait for DOM to be ready
            document.addEventListener('DOMContentLoaded', () => {
                document.body.insertBefore(languageSelector, document.body.firstChild);
            });
        }
    }

    toggleDropdown() {
        // Simplified version - not needed with inline onclick
        console.log('Toggle dropdown called');
    }

    changeLanguage(lang) {
        console.log('🔄 changeLanguage called with:', lang);

        // Check if languageSystem exists
        if (!window.languageSystem) {
            console.error('❌ window.languageSystem is not available');
            return;
        }

        console.log('Current language:', this.currentLanguage);
        console.log('Available languages:', ['de', 'en', 'zh']);
        console.log('Language is valid:', ['de', 'en', 'zh'].includes(lang));
        console.log('Language is different:', lang !== this.currentLanguage);

        if (['de', 'en', 'zh'].includes(lang) && lang !== this.currentLanguage) {
            console.log('✅ Language change conditions met, proceeding...');

            this.saveLanguage(lang);
            console.log('💾 Language saved to localStorage');

            // Update URL parameter
            const url = new URL(window.location);
            url.searchParams.set('lang', lang);
            window.history.replaceState(null, '', url);
            console.log('🔗 URL updated with lang parameter');

            // Update page content
            console.log('📝 Updating page content...');
            this.updatePageContent();

            // Update dropdown button text
            console.log('🔘 Updating dropdown button...');
            this.updateDropdownButton();

            // Close dropdown
            const options = document.querySelector('.language-options');
            if (options) {
                options.style.display = 'none';
                console.log('📂 Dropdown closed');
            }

            console.log(`🌍 Language changed to: ${lang}`);
            console.log('🎉 Language change completed!');
        } else {
            console.log('❌ Language change conditions not met');
        }
    }
    
    updateDropdownButton() {
        const languageBtn = document.querySelector('.language-btn');
        if (languageBtn) {
            languageBtn.innerHTML = `🌍 ${this.t('languages.' + this.currentLanguage)}`;
        }

        // Update active state in dropdown options
        document.querySelectorAll('.language-options button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.onclick && btn.onclick.toString().includes(this.currentLanguage)) {
                btn.classList.add('active');
            }
        });
    }

    t(key, params = {}) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${this.currentLanguage}`);
                return key;
            }
        }
        
        // Replace parameters
        if (typeof value === 'string') {
            Object.keys(params).forEach(param => {
                value = value.replace(`{${param}}`, params[param]);
            });
        }
        
        return value;
    }

    updatePageContent() {
        // Update document title
        document.title = this.t('pageTitle');

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage === 'zh' ? 'zh-CN' : this.currentLanguage;

        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const params = element.getAttribute('data-translate-params');
            const parsedParams = params ? JSON.parse(params) : {};

            element.textContent = this.t(key, parsedParams);
        });

        // Update form placeholders
        const emailInput = document.getElementById('email-input');
        const nameInput = document.getElementById('name-input');
        if (emailInput) emailInput.placeholder = this.t('emailPlaceholder');
        if (nameInput) nameInput.placeholder = this.t('namePlaceholder');

        // Update language selector button
        // Note: This is handled by updateDropdownButton() function, so we don't need to do it here

        // Update dynamic content that doesn't have data-translate attributes
        this.updateDynamicContent();

        // Update variant UI if analytics exists
        if (window.analytics) {
            window.analytics.updateVariantUI(window.analytics.sessionData.variant);
        }
    }

    updateDynamicContent() {
        // Update hero content based on current variant
        const heroHeadline = document.getElementById('hero-headline');
        const heroSubline = document.getElementById('hero-subline');

        if (heroHeadline && heroSubline && window.analytics && window.analytics.sessionData) {
            const variant = window.analytics.sessionData.variant;
            if (variant === 'A') {
                heroHeadline.textContent = this.t('heroHeadlineA');
                heroSubline.textContent = this.t('heroSublineA');
            } else if (variant === 'B') {
                heroHeadline.textContent = this.t('heroHeadlineB');
                heroSubline.textContent = this.t('heroSublineB');
            }
        }

        // Update pack content in capture page if age is selected
        const packTitle = document.getElementById('pack-title');
        const packContents = document.getElementById('pack-contents');

        if (packTitle && packContents && window.analytics && window.analytics.sessionData) {
            const age = window.analytics.sessionData.ageSelected;
            if (age === '4-6') {
                packTitle.textContent = this.t('starterPack46');
                packContents.innerHTML = `
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; margin-bottom: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">🐱</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack46Item1')}</span>
                    </div>
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; margin-bottom: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">🌈</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack46Item2')}</span>
                    </div>
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; margin-bottom: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">🏃‍♂️</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack46Item3')}</span>
                    </div>
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">📖</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack46Item4')}</span>
                    </div>
                `;
            } else if (age === '7-10') {
                packTitle.textContent = this.t('starterPack710');
                packContents.innerHTML = `
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; margin-bottom: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">📝</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack710Item1')}</span>
                    </div>
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; margin-bottom: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">⚡</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack710Item2')}</span>
                    </div>
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; margin-bottom: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">🔤</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack710Item3')}</span>
                    </div>
                    <div class="pack-item" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                        <div class="icon" style="font-size: 1.5em; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #FF8A95, #FFB3BA); border-radius: 50%;">🎯</div>
                        <span style="font-weight: 500; color: #2c3e50;">${this.t('pack710Item4')}</span>
                    </div>
                `;
            }
        }

        // Update age selection text in thankyou page
        const selectedAgeText = document.getElementById('selected-age-text');
        if (selectedAgeText && window.analytics && window.analytics.sessionData) {
            const age = window.analytics.sessionData.ageSelected;
            if (age) {
                selectedAgeText.textContent = this.t('gamesReadyAge', { age: age });
            }
        }

        // Update button texts that might be dynamically changed
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn && submitBtn.textContent && (submitBtn.textContent === '📧 Wird gesendet...' || submitBtn.textContent === '📧 Sending...')) {
            submitBtn.textContent = this.t('sending');
        }

        // Update selection text in chooser
        const selectionText = document.getElementById('selection-text');
        if (selectionText && window.analytics && window.analytics.sessionData) {
            const age = window.analytics.sessionData.ageSelected;
            if (age) {
                selectionText.textContent = this.t('ageSpecificText', { age: age });
            }
        }

        // Update variant buttons specifically
        const variantBtns = document.querySelectorAll('.variant-btn');
        variantBtns.forEach(btn => {
            const translateAttr = btn.getAttribute('data-translate');
            if (translateAttr) {
                btn.textContent = this.t(translateAttr);
            }
        });

        // Update hypothesis status text if it exists
        const hypothesisStatus = document.getElementById('hypothesis-status');
        if (hypothesisStatus && window.analytics && window.analytics.sessionData) {
            const analytics = window.analytics.sessionData;
            const captureViews = analytics.screens.capture || 1;
            const emailSubmits = analytics.clicks.emailSubmit || 0;
            const submitRate = (emailSubmits / captureViews) * 100;

            if (submitRate >= 12) {
                hypothesisStatus.textContent = this.t('hypothesisExcellent', { rate: submitRate.toFixed(1) });
                hypothesisStatus.style.color = '#4CAF50';
            } else if (submitRate >= 8) {
                hypothesisStatus.textContent = this.t('hypothesisConfirmed', { rate: submitRate.toFixed(1) });
                hypothesisStatus.style.color = '#FFC107';
            } else {
                hypothesisStatus.textContent = this.t('hypothesisBelow', { rate: submitRate.toFixed(1) });
                hypothesisStatus.style.color = '#ff6b6b';
            }
        }
    }

    // Utility function for scripts to update specific content
    updateElement(elementId, translationKey, params = {}) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = this.t(translationKey, params);
        }
    }
}

// Global instance - create when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('📄 DOM loaded, creating Language System...');
        window.languageSystem = new LanguageSystem();
        console.log('✅ Language System created successfully');
    });
} else {
    console.log('📄 DOM already loaded, creating Language System...');
    window.languageSystem = new LanguageSystem();
    console.log('✅ Language System created successfully');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    const options = document.getElementById('language-options');
    
    if (dropdown && !dropdown.contains(event.target) && options) {
        options.classList.remove('open');
    }
});
