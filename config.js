// إعدادات المصادر الإخبارية
const NEWS_SOURCES = {
    // مصادر حقيقية تعمل (بدون مشاكل CORS)
    all: [
        {
            name: "وكالة الأنباء القطرية",
            url: "https://www.qna.org.qa/ar-sa/rss/latestnews",
            category: "arabic"
        },
        {
            name: "وكالة الأنباء العمانية",
            url: "https://omannews.gov.om/rss",
            category: "arabic"
        }
    ],
    
    breaking: [
        {
            name: "بي بي سي عربي - أهم الأخبار",
            url: "https://feeds.bbci.co.uk/arabic/rss.xml",
            category: "breaking"
        }
    ],
    
    local: [
        {
            name: "الجزيرة نت",
            url: "https://www.aljazeera.net/aljazeerarss/9c752a61-2b73-4335-aa6b-e1eaf7c45cba/aa4491e8-6e66-49e7-9955-ec79822a4236",
            category: "local"
        },
        {
            name: "العربية",
            url: "https://www.alarabiya.net/alarabiarss/section/0/70",
            category: "local"
        }
    ],
    
    arabic: [
        {
            name: "الشرق الأوسط",
            url: "https://aawsat.com/rss.xml",
            category: "arabic"
        },
        {
            name: "البيان",
            url: "https://www.albayan.ae/rss.xml",
            category: "arabic"
        }
    ],
    
    international: [
        {
            name: "رويترز عربي",
            url: "https://ara.reuters.com/rss/ara/reports",
            category: "international"
        }
    ],
    
    sports: [
        {
            name: "كووورة",
            url: "https://www.kooora.com/rss",
            category: "sports"
        }
    ],
    
    economy: [
        {
            name: "أرقام",
            url: "https://www.argaam.com/rss",
            category: "economy"
        }
    ],
    
    tech: [
        {
            name: "إلكتروني",
            url: "https://www.electrony.net/feed/",
            category: "tech"
        }
    ]
};

// بيانات تجريبية للاستخدام عند فشل جلب البيانات الحقيقية
const MOCK_NEWS = [
    {
        id: 1,
        title: "اجتماع طارئ لمجلس الأمن حول الأوضاع في المنطقة",
        description: "يعقد مجلس الأمن الدولي جلسة طارئة اليوم لمناقشة التطورات الأخيرة في المنطقة وسط تصاعد التوتر.",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        source: "وكالة الأنباء القطرية",
        category: "breaking",
        time: "قبل 10 دقائق",
        link: "#"
    },
    {
        id: 2,
        title: "انطلاق القمة الاقتصادية العربية في الرياض",
        description: "تنطلق اليوم أعمال القمة الاقتصادية العربية في العاصمة السعودية الرياض بمشاركة قادة الدول العربية.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
        source: "العربية",
        category: "arabic",
        time: "قبل ساعة",
        link: "#"
    },
    {
        id: 3,
        title: "توقيع اتفاقيات تجارية بقيمة 5 مليارات دولار",
        description: "تم توقيع عدة اتفاقيات 