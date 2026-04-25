// ══════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════
const DEFAULT_LEVEL = 'A2';

const VOCAB = [
  // GREETINGS A1
  {de:"Hallo",en:"مرحباً",type:"int.",cat:"greetings",level:"A1",example:"Hallo, wie geht es dir?"},
  {de:"Guten Morgen",en:"صباح الخير",type:"int.",cat:"greetings",level:"A1",example:"Guten Morgen! Schläfst du gut?"},
  {de:"Guten Tag",en:"مساء الخير (نهاراً)",type:"int.",cat:"greetings",level:"A1",example:"Guten Tag, Frau Schmidt."},
  {de:"Guten Abend",en:"مساء الخير",type:"int.",cat:"greetings",level:"A1",example:"Guten Abend! Wie war Ihr Tag?"},
  {de:"Auf Wiedersehen",en:"مع السلامة",type:"int.",cat:"greetings",level:"A1",example:"Auf Wiedersehen! Bis morgen."},
  {de:"Tschüss",en:"باي (غير رسمي)",type:"int.",cat:"greetings",level:"A1",example:"Tschüss, bis später!"},
  {de:"Bitte",en:"من فضلك / عفواً",type:"adv.",cat:"greetings",level:"A1",example:"Bitte, helfen Sie mir."},
  {de:"Danke",en:"شكراً",type:"int.",cat:"greetings",level:"A1",example:"Danke schön für alles!"},
  {de:"Entschuldigung",en:"عذراً / آسف",type:"int.",cat:"greetings",level:"A1",example:"Entschuldigung, wo ist die Toilette?"},
  {de:"Ja",en:"نعم",type:"adv.",cat:"greetings",level:"A1",example:"Ja, ich verstehe."},
  {de:"Nein",en:"لا",type:"adv.",cat:"greetings",level:"A1",example:"Nein, das stimmt nicht."},

  // NUMBERS/TIME A1
  {de:"die Uhr",en:"الساعة",type:"n.f.",cat:"numbers",level:"A1",example:"Es ist drei Uhr."},
  {de:"heute",en:"اليوم",type:"adv.",cat:"numbers",level:"A1",example:"Heute lerne ich Deutsch."},
  {de:"morgen",en:"غداً",type:"adv.",cat:"numbers",level:"A1",example:"Morgen habe ich einen Termin."},
  {de:"gestern",en:"أمس",type:"adv.",cat:"numbers",level:"A1",example:"Gestern war ich müde."},
  {de:"die Woche",en:"الأسبوع",type:"n.f.",cat:"numbers",level:"A1",example:"Diese Woche arbeite ich viel."},
  {de:"der Monat",en:"الشهر",type:"n.m.",cat:"numbers",level:"A1",example:"Im nächsten Monat reise ich."},
  {de:"das Jahr",en:"السنة",type:"n.n.",cat:"numbers",level:"A1",example:"Dieses Jahr lerne ich Deutsch."},
  {de:"jetzt",en:"الآن",type:"adv.",cat:"numbers",level:"A1",example:"Ich lerne jetzt Deutsch."},

  // FOOD A1/A2
  {de:"das Frühstück",en:"الفطور",type:"n.n.",cat:"food",level:"A1",example:"Ich esse jeden Morgen Frühstück."},
  {de:"das Mittagessen",en:"الغداء",type:"n.n.",cat:"food",level:"A1",example:"Das Mittagessen ist um 12 Uhr."},
  {de:"das Abendessen",en:"العشاء",type:"n.n.",cat:"food",level:"A1",example:"Wir essen Abendessen um 19 Uhr."},
  {de:"das Brot",en:"الخبز",type:"n.n.",cat:"food",level:"A1",example:"Ich esse gerne Brot mit Butter."},
  {de:"die Milch",en:"الحليب",type:"n.f.",cat:"food",level:"A1",example:"Ich trinke jeden Tag Milch."},
  {de:"das Wasser",en:"الماء",type:"n.n.",cat:"food",level:"A1",example:"Können Sie mir Wasser bringen?"},
  {de:"der Kaffee",en:"القهوة",type:"n.m.",cat:"food",level:"A1",example:"Ich trinke morgens immer Kaffee."},
  {de:"das Fleisch",en:"اللحم",type:"n.n.",cat:"food",level:"A2",example:"Ich esse kein Fleisch."},
  {de:"das Gemüse",en:"الخضروات",type:"n.n.",cat:"food",level:"A2",example:"Gemüse ist sehr gesund."},
  {de:"die Speisekarte",en:"قائمة الطعام",type:"n.f.",cat:"food",level:"A2",example:"Darf ich die Speisekarte sehen?"},
  {de:"die Rechnung",en:"الفاتورة",type:"n.f.",cat:"food",level:"A2",example:"Können wir bitte die Rechnung haben?"},
  {de:"bestellen",en:"يطلب (طعاماً)",type:"v.",cat:"food",level:"A2",example:"Ich möchte ein Schnitzel bestellen."},

  // TRAVEL A2/B1
  {de:"der Bahnhof",en:"محطة القطار",type:"n.m.",cat:"travel",level:"A1",example:"Wie komme ich zum Bahnhof?"},
  {de:"der Flughafen",en:"المطار",type:"n.m.",cat:"travel",level:"A1",example:"Der Flughafen ist sehr groß."},
  {de:"das Ticket",en:"التذكرة",type:"n.n.",cat:"travel",level:"A1",example:"Ich kaufe ein Ticket nach Berlin."},
  {de:"der Zug",en:"القطار",type:"n.m.",cat:"travel",level:"A1",example:"Der Zug fährt um 10 Uhr ab."},
  {de:"das Hotel",en:"الفندق",type:"n.n.",cat:"travel",level:"A1",example:"Das Hotel liegt im Zentrum."},
  {de:"die Unterkunft",en:"الإقامة / السكن",type:"n.f.",cat:"travel",level:"A2",example:"Ich suche eine günstige Unterkunft."},
  {de:"der Reisepass",en:"جواز السفر",type:"n.m.",cat:"travel",level:"A2",example:"Ich brauche meinen Reisepass."},
  {de:"umsteigen",en:"يتحول (يغير وسيلة نقل)",type:"v.",cat:"travel",level:"B1",example:"Ich muss in Frankfurt umsteigen."},
  {de:"die Verspätung",en:"التأخير",type:"n.f.",cat:"travel",level:"B1",example:"Der Zug hat eine Verspätung von 30 Minuten."},
  {de:"hin und zurück",en:"ذهاباً وإياباً",type:"expr.",cat:"travel",level:"A2",example:"Ich möchte ein Ticket hin und zurück."},

  // WORK B1/B2
  {de:"der Beruf",en:"المهنة",type:"n.m.",cat:"work",level:"A2",example:"Was ist Ihr Beruf?"},
  {de:"die Stelle",en:"الوظيفة",type:"n.f.",cat:"work",level:"B1",example:"Ich habe eine neue Stelle gefunden."},
  {de:"die Bewerbung",en:"طلب التوظيف",type:"n.f.",cat:"work",level:"B1",example:"Ich schreibe eine Bewerbung."},
  {de:"das Vorstellungsgespräch",en:"مقابلة العمل",type:"n.n.",cat:"work",level:"B1",example:"Morgen habe ich ein Vorstellungsgespräch."},
  {de:"das Gehalt",en:"الراتب",type:"n.n.",cat:"work",level:"B1",example:"Wie hoch ist das Gehalt?"},
  {de:"der Arbeitgeber",en:"صاحب العمل",type:"n.m.",cat:"work",level:"B1",example:"Mein Arbeitgeber ist sehr nett."},
  {de:"die Kündigung",en:"إشعار الفصل / الاستقالة",type:"n.f.",cat:"work",level:"B2",example:"Er hat die Kündigung erhalten."},
  {de:"die Überstunden",en:"الساعات الإضافية",type:"n.pl.",cat:"work",level:"B1",example:"Ich mache viele Überstunden."},
  {de:"das Praktikum",en:"التدريب العملي",type:"n.n.",cat:"work",level:"B1",example:"Ich mache ein Praktikum bei einer Firma."},
  {de:"verhandeln",en:"يتفاوض",type:"v.",cat:"work",level:"B2",example:"Wir müssen über das Gehalt verhandeln."},

  // HOME A2/B1
  {de:"die Wohnung",en:"الشقة",type:"n.f.",cat:"home",level:"A1",example:"Ich suche eine neue Wohnung."},
  {de:"das Zimmer",en:"الغرفة",type:"n.n.",cat:"home",level:"A1",example:"Wie viele Zimmer hat die Wohnung?"},
  {de:"die Küche",en:"المطبخ",type:"n.f.",cat:"home",level:"A1",example:"Die Küche ist sehr modern."},
  {de:"das Schlafzimmer",en:"غرفة النوم",type:"n.n.",cat:"home",level:"A1",example:"Das Schlafzimmer ist groß."},
  {de:"die Miete",en:"الإيجار",type:"n.f.",cat:"home",level:"A2",example:"Die Miete ist sehr teuer."},
  {de:"der Vermieter",en:"المالك / المؤجر",type:"n.m.",cat:"home",level:"B1",example:"Der Vermieter ist freundlich."},
  {de:"umziehen",en:"ينتقل إلى مكان جديد",type:"v.",cat:"home",level:"B1",example:"Wir ziehen nächsten Monat um."},
  {de:"die Nebenkosten",en:"المصاريف الإضافية",type:"n.pl.",cat:"home",level:"B1",example:"Die Nebenkosten sind hoch."},

  // HEALTH A2/B1
  {de:"der Arzt",en:"الطبيب",type:"n.m.",cat:"health",level:"A1",example:"Ich gehe zum Arzt."},
  {de:"das Krankenhaus",en:"المستشفى",type:"n.n.",cat:"health",level:"A1",example:"Das Krankenhaus ist in der Nähe."},
  {de:"die Apotheke",en:"الصيدلية",type:"n.f.",cat:"health",level:"A1",example:"Ich brauche Medikamente aus der Apotheke."},
  {de:"die Krankenkasse",en:"التأمين الصحي",type:"n.f.",cat:"health",level:"B1",example:"Die Krankenkasse zahlt alles."},
  {de:"der Termin",en:"الموعد",type:"n.m.",cat:"health",level:"A2",example:"Ich habe einen Termin beim Zahnarzt."},
  {de:"das Rezept",en:"الوصفة الطبية",type:"n.n.",cat:"health",level:"A2",example:"Der Arzt hat mir ein Rezept gegeben."},
  {de:"die Allergie",en:"الحساسية",type:"n.f.",cat:"health",level:"B1",example:"Ich habe eine Allergie gegen Penicillin."},
  {de:"sich erholen",en:"يتعافى / يرتاح",type:"v.refl.",cat:"health",level:"B1",example:"Ich brauche Zeit, um mich zu erholen."},

  // NATURE A2/B1
  {de:"das Wetter",en:"الطقس",type:"n.n.",cat:"nature",level:"A1",example:"Wie ist das Wetter heute?"},
  {de:"die Sonne",en:"الشمس",type:"n.f.",cat:"nature",level:"A1",example:"Die Sonne scheint."},
  {de:"der Regen",en:"المطر",type:"n.m.",cat:"nature",level:"A1",example:"Es gibt Regen heute."},
  {de:"der Schnee",en:"الثلج",type:"n.m.",cat:"nature",level:"A1",example:"Im Winter gibt es viel Schnee."},
  {de:"der Wind",en:"الريح",type:"n.m.",cat:"nature",level:"A2",example:"Es weht ein starker Wind."},
  {de:"die Temperatur",en:"درجة الحرارة",type:"n.f.",cat:"nature",level:"A2",example:"Die Temperatur beträgt 25 Grad."},
  {de:"das Gewitter",en:"العاصفة الرعدية",type:"n.n.",cat:"nature",level:"B1",example:"Heute Nacht gibt es ein Gewitter."},
  {de:"die Umwelt",en:"البيئة",type:"n.f.",cat:"nature",level:"B1",example:"Wir müssen die Umwelt schützen."},

  // EMOTIONS B1/B2
  {de:"sich freuen",en:"يفرح / يسعد",type:"v.refl.",cat:"emotions",level:"A2",example:"Ich freue mich auf den Urlaub."},
  {de:"sich ärgern",en:"يغضب / يضايق",type:"v.refl.",cat:"emotions",level:"B1",example:"Er ärgert sich über den Stau."},
  {de:"enttäuscht",en:"خائب الأمل",type:"adj.",cat:"emotions",level:"B1",example:"Ich bin sehr enttäuscht."},
  {de:"aufgeregt",en:"متحمس / متوتر",type:"adj.",cat:"emotions",level:"B1",example:"Ich bin aufgeregt vor dem Examen."},
  {de:"überrascht",en:"مندهش",type:"adj.",cat:"emotions",level:"B1",example:"Sie war sehr überrascht."},
  {de:"das Vertrauen",en:"الثقة",type:"n.n.",cat:"emotions",level:"B2",example:"Vertrauen ist wichtig in einer Beziehung."},
  {de:"die Einsamkeit",en:"الوحدة",type:"n.f.",cat:"emotions",level:"B2",example:"Er leidet unter Einsamkeit."},
  {de:"begeistert",en:"متحمس جداً",type:"adj.",cat:"emotions",level:"B1",example:"Ich bin von Deutsch begeistert."},

  // IMPORTANT VERBS B1/B2
  {de:"verstehen",en:"يفهم",type:"v.",cat:"verbs",level:"A1",example:"Ich verstehe Sie nicht."},
  {de:"erklären",en:"يشرح",type:"v.",cat:"verbs",level:"A2",example:"Können Sie das erklären?"},
  {de:"benutzen",en:"يستخدم",type:"v.",cat:"verbs",level:"A2",example:"Wie benutze ich das?"},
  {de:"bedeuten",en:"يعني",type:"v.",cat:"verbs",level:"A2",example:"Was bedeutet dieses Wort?"},
  {de:"entscheiden",en:"يقرر",type:"v.",cat:"verbs",level:"B1",example:"Ich kann mich nicht entscheiden."},
  {de:"vorschlagen",en:"يقترح",type:"v.",cat:"verbs",level:"B1",example:"Ich schlage vor, morgen zu treffen."},
  {de:"sich vorstellen",en:"يتخيل / يقدم نفسه",type:"v.refl.",cat:"verbs",level:"A2",example:"Darf ich mich vorstellen?"},
  {de:"abhängen von",en:"يعتمد على",type:"v.",cat:"verbs",level:"B1",example:"Das hängt von der Situation ab."},
  {de:"berücksichtigen",en:"يأخذ بعين الاعتبار",type:"v.",cat:"verbs",level:"B2",example:"Bitte berücksichtigen Sie meinen Vorschlag."},
  {de:"gewährleisten",en:"يضمن",type:"v.",cat:"verbs",level:"B2",example:"Wir gewährleisten die Qualität."},

  // ADJECTIVES B1/B2
  {de:"wichtig",en:"مهم",type:"adj.",cat:"adjectives",level:"A2",example:"Das ist sehr wichtig."},
  {de:"schwierig",en:"صعب",type:"adj.",cat:"adjectives",level:"A2",example:"Diese Aufgabe ist sehr schwierig."},
  {de:"notwendig",en:"ضروري",type:"adj.",cat:"adjectives",level:"B1",example:"Es ist notwendig, Deutsch zu lernen."},
  {de:"ausreichend",en:"كافٍ",type:"adj.",cat:"adjectives",level:"B1",example:"Das ist nicht ausreichend."},
  {de:"erheblich",en:"كبير / ملحوظ",type:"adj.",cat:"adjectives",level:"B2",example:"Es gibt erhebliche Unterschiede."},
  {de:"grundlegend",en:"أساسي / جوهري",type:"adj.",cat:"adjectives",level:"B2",example:"Das ist ein grundlegendes Problem."},
  {de:"zufrieden",en:"راضٍ / مرتاح",type:"adj.",cat:"adjectives",level:"B1",example:"Ich bin mit meiner Arbeit zufrieden."},
  {de:"geduldig",en:"صبور",type:"adj.",cat:"adjectives",level:"B1",example:"Man muss geduldig sein."},
];

const SENTENCES = [
  {de:"Ich heiße Ahmed und komme aus Saudi-Arabien.",ar:"اسمي أحمد وأنا من المملكة العربية السعودية.",cat:"daily",level:"A1"},
  {de:"Wie viel kostet das?",ar:"كم يكلف هذا؟",cat:"shopping",level:"A1"},
  {de:"Wo ist die nächste U-Bahn-Station?",ar:"أين أقرب محطة مترو؟",cat:"directions",level:"A1"},
  {de:"Ich möchte ein Zimmer für zwei Nächte reservieren.",ar:"أريد حجز غرفة لمدة ليلتين.",cat:"travel",level:"A2"},
  {de:"Können Sie bitte langsamer sprechen?",ar:"هل يمكنك التحدث بشكل أبطأ من فضلك؟",cat:"daily",level:"A1"},
  {de:"Ich lerne seit drei Monaten Deutsch.",ar:"أتعلم الألمانية منذ ثلاثة أشهر.",cat:"daily",level:"A2"},
  {de:"Ich hätte gerne den Salat und ein Glas Wasser.",ar:"أرغب في السلطة وكوب ماء.",cat:"shopping",level:"A2"},
  {de:"Der Zug nach München fährt auf Gleis fünf ab.",ar:"القطار إلى ميونخ يغادر من الرصيف الخامس.",cat:"travel",level:"A2"},
  {de:"Ich suche eine Stelle als Ingenieur.",ar:"أبحث عن وظيفة كمهندس.",cat:"work",level:"B1"},
  {de:"Könnten Sie mir bitte das wiederholen?",ar:"هل يمكنك تكرار ذلك من فضلك؟",cat:"daily",level:"A2"},
  {de:"Ich habe starke Kopfschmerzen und etwas Fieber.",ar:"لدي صداع شديد وبعض الحمى.",cat:"health",level:"A2"},
  {de:"Es tut mir leid, ich komme heute zu spät.",ar:"آسف، سأتأخر اليوم.",cat:"work",level:"A2"},
  {de:"Meiner Meinung nach ist das eine gute Idee.",ar:"في رأيي، هذه فكرة جيدة.",cat:"social",level:"B1"},
  {de:"Ich bin damit einverstanden, aber ich habe ein paar Bedenken.",ar:"أوافق على ذلك، لكن لدي بعض المخاوف.",cat:"work",level:"B1"},
  {de:"Würde es Ihnen passen, wenn wir uns morgen treffen?",ar:"هل سيناسبك أن نلتقي غداً؟",cat:"social",level:"B1"},
  {de:"Ich würde das anders machen, wenn ich an Ihrer Stelle wäre.",ar:"كنت سأفعل ذلك بشكل مختلف لو كنت مكانك.",cat:"social",level:"B2"},
  {de:"Obwohl ich müde bin, muss ich noch arbeiten.",ar:"على الرغم من تعبي، يجب أن أعمل.",cat:"daily",level:"B1"},
  {de:"Die Möglichkeiten, Deutsch zu lernen, sind vielfältig.",ar:"إمكانيات تعلم الألمانية متعددة.",cat:"daily",level:"B2"},
  {de:"Ich wäre Ihnen dankbar, wenn Sie mir dabei helfen könnten.",ar:"سأكون ممتناً لك إذا تمكنت من مساعدتي في ذلك.",cat:"social",level:"B2"},
  {de:"Könnten Sie mir bitte den Weg zum Rathaus erklären?",ar:"هل يمكنك شرح الطريق إلى دار البلدية؟",cat:"directions",level:"B1"},
  {de:"Ich fahre jeden Tag mit dem Fahrrad zur Arbeit.",ar:"أذهب إلى العمل كل يوم بالدراجة.",cat:"daily",level:"A2"},
  {de:"Was empfehlen Sie? Ich bin zum ersten Mal hier.",ar:"ماذا توصي؟ أنا هنا لأول مرة.",cat:"shopping",level:"A2"},
  {de:"Ich interessiere mich sehr für deutsche Kultur.",ar:"أنا مهتم جداً بالثقافة الألمانية.",cat:"social",level:"B1"},
  {de:"Haben Sie einen früheren Zug?",ar:"هل لديكم قطار أبكر؟",cat:"travel",level:"B1"},
  {de:"Ich gehe lieber zu Fuß, wenn das Wetter schön ist.",ar:"أفضّل المشي عندما يكون الطقس جميلاً.",cat:"daily",level:"B1"},
];

const READINGS = [
  {
    level:"A1",
    title:"Ein Tag in Berlin",
    text:"Heute ist Montag. Maria steht um sieben Uhr auf. Sie frühstückt und trinkt Kaffee. Dann fährt sie mit der U-Bahn zur Arbeit. Sie arbeitet in einem Büro. Um zwölf Uhr isst sie Mittagessen mit Kolleginnen. Nach der Arbeit geht sie einkaufen. Abends kocht sie Abendessen und liest ein Buch.",
    translation:"اليوم الاثنين. تستيقظ ماريا الساعة السابعة. تتناول الفطور وتشرب القهوة. ثم تذهب بالمترو إلى العمل. تعمل في مكتب. الساعة الثانية عشرة تأكل الغداء مع زميلاتها. بعد العمل تذهب للتسوق. في المساء تطبخ العشاء وتقرأ كتاباً.",
    questions:[
      {q:"Um wie viel Uhr steht Maria auf?",opts:["Um 6 Uhr","Um 7 Uhr","Um 8 Uhr","Um 9 Uhr"],ans:1},
      {q:"Wie fährt Maria zur Arbeit?",opts:["Mit dem Auto","Mit dem Fahrrad","Mit der U-Bahn","Zu Fuß"],ans:2},
      {q:"Was macht Maria abends?",opts:["Sie geht ins Kino","Sie trifft Freunde","Sie kocht und liest","Sie schläft sofort"],ans:2},
    ]
  },
  {
    level:"A2",
    title:"Im Restaurant",
    text:"Klaus und Anna gehen am Freitagabend in ein Restaurant. Sie bekommen einen Tisch am Fenster. Die Kellnerin bringt die Speisekarte. Klaus bestellt ein Schnitzel mit Pommes. Anna möchte lieber den Fischsalat. Zum Trinken nehmen sie ein Glas Weißwein. Das Essen schmeckt sehr gut. Am Ende bezahlen sie zusammen. Das Abendessen kostet 45 Euro.",
    translation:"يذهب كلاوس وأنا إلى مطعم مساء الجمعة. يحصلون على طاولة بجانب النافذة. تحضر النادلة قائمة الطعام. كلاوس يطلب شنيتسل مع بطاطا مقلية. أنا تفضّل سلطة السمك. للشرب يأخذان كأساً من النبيذ الأبيض. الطعام لذيذ جداً. في النهاية يدفعان معاً. العشاء يكلف 45 يورو.",
    questions:[
      {q:"Wann gehen Klaus und Anna ins Restaurant?",opts:["Mittwochabend","Donnerstagabend","Freitagabend","Samstagabend"],ans:2},
      {q:"Was bestellt Anna?",opts:["Schnitzel","Fischsalat","Pizza","Suppe"],ans:1},
      {q:"Wie viel kostet das Abendessen?",opts:["35 Euro","40 Euro","45 Euro","50 Euro"],ans:2},
    ]
  },
  {
    level:"B1",
    title:"Homeoffice — Vor- und Nachteile",
    text:"Seit der Pandemie arbeiten viele Menschen von zu Hause. Das Homeoffice hat sowohl Vor- als auch Nachteile. Einerseits sparen die Arbeitnehmer Zeit und Geld, weil sie nicht pendeln müssen. Sie können ihre Arbeit flexibler einteilen. Andererseits fehlt vielen der Kontakt mit Kollegen. Manche haben Schwierigkeiten, Arbeit und Freizeit zu trennen. Studien zeigen, dass die Produktivität im Homeoffice oft höher ist, aber die soziale Isolation kann ein Problem sein.",
    translation:"منذ الجائحة، يعمل كثير من الناس من المنزل. العمل عن بُعد له مزايا وعيوب. من ناحية، يوفر الموظفون الوقت والمال لأنهم لا يحتاجون للتنقل. يمكنهم تنظيم عملهم بمرونة أكبر. من ناحية أخرى، يفتقد كثيرون التواصل مع الزملاء. يجد البعض صعوبة في الفصل بين العمل والترفيه. تشير الدراسات إلى أن الإنتاجية في العمل عن بُعد أعلى في الغالب، لكن العزلة الاجتماعية قد تكون مشكلة.",
    questions:[
      {q:"Was ist ein Vorteil des Homeoffice?",opts:["Mehr Kollegen","Kein Pendeln","Mehr Meetings","Bessere Technik"],ans:1},
      {q:"Was ist laut Text ein Nachteil?",opts:["Höhere Kosten","Soziale Isolation","Weniger Freizeit","Schlechte Software"],ans:1},
      {q:"Was zeigen Studien über die Produktivität?",opts:["Sie ist geringer","Sie bleibt gleich","Sie ist oft höher","Es gibt keine Studien"],ans:2},
    ]
  },
  {
    level:"B2",
    title:"Klimawandel und gesellschaftliche Verantwortung",
    text:"Der Klimawandel stellt eine der größten Herausforderungen unserer Zeit dar. Wissenschaftler sind sich einig, dass menschliche Aktivitäten die Hauptursache für die globale Erwärmung sind. Die Folgen sind weitreichend: steigende Meeresspiegel, häufigere Extremwetterereignisse und der Verlust biologischer Vielfalt. Obwohl internationale Abkommen wie das Pariser Klimaabkommen Fortschritte darstellen, sind die bisherigen Maßnahmen nach Ansicht vieler Experten unzureichend. Es bedarf eines grundlegenden Wandels in Wirtschaft, Politik und Gesellschaft, um die Klimaziele zu erreichen.",
    translation:"يمثل تغير المناخ أحد أكبر تحديات عصرنا. يتفق العلماء على أن الأنشطة البشرية هي السبب الرئيسي للاحترار العالمي. العواقب بعيدة المدى: ارتفاع مستويات البحار، وكثرة الظواهر الجوية المتطرفة، وفقدان التنوع البيولوجي. على الرغم من أن الاتفاقيات الدولية مثل اتفاقية باريس للمناخ تمثل تقدماً، فإن التدابير المتخذة حتى الآن غير كافية في رأي كثير من الخبراء. يتطلب الأمر تحولاً جذرياً في الاقتصاد والسياسة والمجتمع لتحقيق أهداف المناخ.",
    questions:[
      {q:"Was ist die Hauptursache des Klimawandels laut Wissenschaftlern?",opts:["Vulkane","Natürliche Zyklen","Menschliche Aktivitäten","Sonneneinstrahlung"],ans:2},
      {q:"Was ist eine Folge des Klimawandels im Text?",opts:["Mehr Regen in Europa","Steigende Meeresspiegel","Kältere Winter","Mehr Wälder"],ans:1},
      {q:"Was sagen Experten über bisherige Maßnahmen?",opts:["Sie sind ausreichend","Sie sind unzureichend","Sie sind zu streng","Es gibt keine Maßnahmen"],ans:1},
    ]
  },
];

const DAILY_PROGRAM_A2_B2 = [
  {slot:"اليومياً — 15 دقيقة",focus:"مراجعة Anki/بطاقات المفردات (15 كلمة: 8 جديدة + 7 مراجعة)."},
  {slot:"اليومياً — 20 دقيقة",focus:"قواعد مركزة: A2/B1 (الأزمنة، الحالات، الروابط، الجمل الفرعية)."},
  {slot:"اليومياً — 20 دقيقة",focus:"استماع موجّه: DW أو Easy German مع تدوين 5 تعابير جديدة."},
  {slot:"اليومياً — 20 دقيقة",focus:"قراءة قصيرة + تلخيص شفهي لمدة 2-3 دقائق."},
  {slot:"اليومياً — 15 دقيقة",focus:"كتابة يوميات بالألمانية (80-120 كلمة) مع تصحيح الأخطاء."},
  {slot:"3 أيام أسبوعياً — 20 دقيقة",focus:"محادثة/نطق: Shadowing + تسجيل صوتي + إعادة."},
  {slot:"نهاية كل أسبوع",focus:"اختبار ذاتي (Hören/Lesen/Wortschatz) وتحديث خطة الأسبوع القادم."},
];

const STUDY_RESOURCES = [
  {name:"DW Learn German",url:"https://learngerman.dw.com",use:"مسار منظم لـ A2-B1 وتمارين استماع وقواعد مع اختبارات."},
  {name:"Easy German",url:"https://www.youtube.com/@EasyGerman",use:"استماع طبيعي للهجة اليومية + ترجمة، ممتاز للتعرض اللغوي اليومي."},
  {name:"TELC",url:"https://www.telc.net",use:"نماذج امتحانات A2/B1/B2 لبناء مهارات الامتحان وإدارة الوقت."},
  {name:"SmarterGerman",url:"https://smartergerman.com",use:"شرح قواعد واضح وخطط تعلم عملية خاصة لـ B1/B2."},
  {name:"Goethe Wortliste",url:"https://www.goethe.de",use:"قوائم المفردات الرسمية لكل مستوى لضبط أهدافك الشهرية."},
];

const ROADMAP_2026 = [
  {key:"2026-04",month:"April 2026",level:"A2+",goal:"تثبيت أساس A2 وإغلاق الفجوات القديمة.",targets:["إنهاء مراجعة A2 الأساسية (الزمن الماضي Perfekt/Präteritum الشائع).","حفظ 180-220 كلمة عالية التكرار.","3 مواضيع كتابة قصيرة (رسالة/موعد/وصف يوم).","2 محادثة أسبوعية قصيرة (5-10 دقائق)."]},
  {key:"2026-05",month:"May 2026",level:"A2+",goal:"الانتقال السلس نحو B1.",targets:["الروابط الأساسية weil, dass, wenn, obwohl.","فهم 70% من مقاطع Easy German القصيرة مع الترجمة.","حل نموذجين TELC A2 كاملين.","كتابة 8 نصوص يومية مصححة."]},
  {key:"2026-06",month:"June 2026",level:"B1-",goal:"بداية B1 بشكل عملي.",targets:["قراءة نصوص B1 القصيرة يومياً (150-220 كلمة).","توسيع المفردات المهنية واليومية (200 كلمة).","تدريب نطق Shadowing لـ 12 مقطع صوتي.","امتحان قياس ذاتي بنهاية الشهر."]},
  {key:"2026-07",month:"July 2026",level:"B1",goal:"تقوية الاستماع والتحدث لمستوى B1.",targets:["محادثة 3 مرات أسبوعياً (15 دقيقة).","تلخيص فيديو/بودكاست يومياً بجمل بسيطة.","حل وحدات قواعد B1 الأكثر تكراراً.","كتابة رسائل رسمية وغير رسمية وفق نمط الامتحان."]},
  {key:"2026-08",month:"August 2026",level:"B1",goal:"ترسيخ B1 وتحسين الدقة.",targets:["3 نماذج TELC B1 (قراءة + استماع + كتابة).","تقليل أخطاء الحالات والإعراب عبر مراجعة مركزة.","بناء بنك جمل جاهزة للامتحان الشفهي.","رفع مدة القراءة اليومية إلى 30 دقيقة."]},
  {key:"2026-09",month:"September 2026",level:"B1+",goal:"التحضير للانتقال إلى B2.",targets:["تعلم تراكيب B2 الأساسية (Nominalisierung/Passiv/Konjunktiv II).","تعرض يومي لمحتوى أبطأ بدون ترجمة أول 10 دقائق.","كتابة مقالات رأي قصيرة (120-160 كلمة).","نموذج B1 نهائي + تحليل نقاط الضعف."]},
  {key:"2026-10",month:"October 2026",level:"B2-",goal:"بدء B2 بالتركيز على الفهم الأكاديمي.",targets:["قراءة مقالات B2 مبسطة 4 مرات أسبوعياً.","مفردات موضوعية: Arbeit, Gesellschaft, Umwelt, Bildung.","نقاشات شفوية منظمة مع أسباب وأمثلة.","حل أجزاء من نماذج TELC/Goethe B2 تدريجياً."]},
  {key:"2026-11",month:"November 2026",level:"B2",goal:"تثبيت إنتاج اللغة (كتابة + تحدث).",targets:["كتابة 2 نص حِجاجي أسبوعياً مع مراجعة الأخطاء المتكررة.","تمارين Hörverstehen B2 شبه يومية.","تدريب على تقديم رأي كامل خلال 2-3 دقائق.","نموذجان امتحان B2 كاملان."]},
  {key:"2026-12",month:"December 2026",level:"B2",goal:"المراجعة النهائية وإنهاء السنة بخطة استمرارية.",targets:["مراجعة شاملة لأخطاء السنة وتحويلها لقائمة شخصية.","اختبار محاكاة نهائي B2 مع توقيت كامل.","تحسين الطلاقة: 20 دقيقة تحدث يومي بلا توقف.","تحديد خطة Jan 2027 (C1 أو تثبيت B2)."]},
];

const DTZ_PDFS = {
  practice: {
    label: "Übungssatz 1 (نموذج تدريبي رسمي)",
    file: "gast_DTZ_UEbungssatz_1.pdf",
    pages: 56,
    note: "نموذج امتحان رسمي كامل للتدريب العملي على نمط الأسئلة."
  },
  handbook: {
    label: "DTZ Handbuch (Prüfungsziele/Testbeschreibung)",
    file: "dtz-handbuch_pdf.pdf",
    pages: 188,
    note: "دليل رسمي مفصل لأهداف الامتحان، آلية التقييم، وبناء الاختبار."
  }
};

const DTZ_MODULES = [
  {name:"Hören",focus:"فهم المقاطع الصوتية والإعلانات والمحادثات اليومية."},
  {name:"Lesen",focus:"فهم النصوص القصيرة والمتوسطة واختيار المعلومات الصحيحة."},
  {name:"Schreiben",focus:"كتابة رسالة/نص واضح ومنظم وفق المطلوب."},
  {name:"Sprechen",focus:"التعريف بالنفس، التفاعل، والتحدث المنظم في مواقف عملية."},
];

const DTZ_PRACTICE_FLOW = [
  "ابدأ بقراءة نظرة عامة من Handbuch لفهم معايير النجاح.",
  "حل Übungssatz 1 كاملاً بوقت حقيقي ودون مقاطعة.",
  "راجع الأخطاء وحدد نمط الضعف (Hören/Lesen/Schreiben/Sprechen).",
  "أعد المحاولة بعد مراجعة مركزة لتحسين الدقة والثبات."
];

const DTZ_TEXT_BLOCKS = {
  rathaus: "Rathaus – Zentralwegweiser: 4. OG Umweltamt (Mülltonnen/Entwässerung) + Gesundheitsamt (Ärzte und Krankenhäuser). 2. OG Sozialamt (soziale Hilfe für Ältere/Behinderungen). 1. OG Verkehrsamt (Führerscheinstelle). EG Bürgeramt (u. a. Kopierer).",
  marienfest: "Marienstraßen-Fest in Neustadt: Buslinie 306 fährt am Sonntag öfter (10–19 Uhr im Viertelstundentakt). Besucher sollen mit öffentlichen Verkehrsmitteln kommen.",
  netcom: "E-Mail von NetCom: Auftragsbestätigung für Internet-Anschluss. Technikertermin am 27.07 (10:30–13:30). Termin bestätigen über 'Termin-Zusage'-Link.",
  ivanov: "Brief von Lehrerin Silke Trautmann an Familie Ivanov: Einladung zum Klassenfest, Teilnahme kostenlos, alle bringen Essen/Getränke mit, Rückmeldung per Telefon/E-Mail oder über Denis.",
  mittag: "Mittagsbetreuung Grundschule: Montag–Freitag 11:00–14:00. Bei 2 Kindern gibt es 15% Ermäßigung. Auch bei Abwesenheit/Krankheit muss die monatliche Gebühr bezahlt werden.",
  hotel: "Beschwerdebrief Hotel 'Zum Löwen': '... (40) Frau und ich ... weil die Beschreibung gut klingt. Aber die Zimmer waren klein und laut. Außerdem hatten wir ... warmes Wasser ... obwohl wir uns sofort beschwert haben ... wir möchten unser Geld ...'",
  handbuch: "Handbuch DTZ: Prüfung auf A2/B1 (GER), Standardsprache (keine Dialekte), Lesen mit 5 Aufgaben/Lesestilen, Teil 5 prüft v. a. Wortschatz/Strukturen/Höflichkeit, emotional belastende Themen (z. B. Krieg/Politik) sind tabu."
};

const DTZ_INTERACTIVE_QUESTIONS = [
  {id:1,module:'Hören',source:'Übungssatz 1, S.10',type:'mc',prompt:'Sie wollen zum Rosengarten. Was müssen Sie tun?',options:['An der Haltestelle „Friedrichring“ umsteigen.','Mit der Straßenbahn 78 fahren.','Mit der U-Bahn-Linie 1 oder 2 fahren.'],answer:0,explain:'Lösungsschlüssel Teil Hören 1: a.'},
  {id:2,module:'Hören',source:'Übungssatz 1, S.10',type:'mc',prompt:'Wer ruft an?',options:['Eine Apotheke.','Eine Arztpraxis.','Eine Versicherung.'],answer:1,explain:'Lösungsschlüssel Teil Hören 1: b.'},
  {id:3,module:'Hören',source:'Übungssatz 1, S.10',type:'mc',prompt:'Was sollen die Fahrgäste tun?',options:['Im Zug sitzen bleiben.','Mit einem anderen Zug weiterfahren.','Mit einem Bus weiterfahren.'],answer:2,explain:'Lösungsschlüssel Teil Hören 1: c.'},
  {id:4,module:'Hören',source:'Übungssatz 1, S.10',type:'mc',prompt:'Wo wohnt Henrik?',options:['An einem Park.','Bei einer Schule.','Neben dem Busbahnhof.'],answer:1,explain:'Lösungsschlüssel Teil Hören 1: b.'},
  {id:5,module:'Hören',source:'Übungssatz 1, S.11',type:'mc',prompt:'Am Sonntag gibt es ...',options:['ein Musikprogramm.','ein Programm für Kinder.','internationale Kurzfilme.'],answer:1,explain:'Lösungsschlüssel Teil Hören 2: b.'},
  {id:6,module:'Hören',source:'Übungssatz 1, S.11',type:'mc',prompt:'Wie sollen Erwachsene „Medinox“ einnehmen?',options:['Dreimal am Tag.','Mit Wasser.','Nur wenn die Ärztin/der Arzt zustimmt.'],answer:1,explain:'Lösungsschlüssel Teil Hören 2: b.'},
  {id:7,module:'Hören',source:'Übungssatz 1, S.11',type:'mc',prompt:'Was läuft in der „Lichtburg“?',options:['Ein Kinderfilm.','Ein Krimi.','Eine Komödie.'],answer:0,explain:'Lösungsschlüssel Teil Hören 2: a.'},
  {id:8,module:'Hören',source:'Übungssatz 1, S.11',type:'mc',prompt:'Wo können Sie Musik hören?',options:['Auf WDR 2.','Auf WDR 3.','Auf WDR 5.'],answer:1,explain:'Lösungsschlüssel Teil Hören 2: b.'},
  {id:9,module:'Hören',source:'Übungssatz 1, S.11',type:'mc',prompt:'Wann kann man nach Würzburg weiterfahren?',options:['Um 09:36 Uhr.','Um 09:58 Uhr.','Um 10:00 Uhr.'],answer:1,explain:'Lösungsschlüssel Teil Hören 2: b.'},

  {id:21,module:'Lesen',source:'Übungssatz 1, S.14–15',type:'mc',contextKey:'rathaus',prompt:'Ihre Großmutter kann nicht mehr alleine kochen und putzen. In welches Stockwerk?',options:['2. OG','4. OG','anderes Stockwerk'],answer:0,explain:'Sozialamt im 2. OG.'},
  {id:22,module:'Lesen',source:'Übungssatz 1, S.14–15',type:'mc',contextKey:'rathaus',prompt:'Sie suchen Informationen über Krankenhäuser in Ihrer Gegend. In welches Stockwerk?',options:['2. OG','3. OG','anderes Stockwerk'],answer:2,explain:'Gesundheitsamt ist im 4. OG, daher "anderes Stockwerk".'},
  {id:23,module:'Lesen',source:'Übungssatz 1, S.14–15',type:'mc',contextKey:'rathaus',prompt:'Sie brauchen einen neuen Führerschein. Wohin?',options:['EG','1. OG','anderes Stockwerk'],answer:1,explain:'Verkehrsamt/Führerscheinstelle im 1. OG.'},
  {id:24,module:'Lesen',source:'Übungssatz 1, S.14–15',type:'mc',contextKey:'rathaus',prompt:'Sie möchten ein wichtiges Dokument kopieren. Wohin?',options:['EG','2. OG','anderes Stockwerk'],answer:0,explain:'Kopierer im Bürgeramt (EG).'},
  {id:25,module:'Lesen',source:'Übungssatz 1, S.14–15',type:'mc',contextKey:'rathaus',prompt:'Sie brauchen eine größere Tonne für Ihren Abfall. Wohin?',options:['EG','4. OG','anderes Stockwerk'],answer:1,explain:'Umweltamt/Mülltonnen im 4. OG.'},

  {id:31,module:'Lesen',source:'Übungssatz 1, S.18',type:'tf',contextKey:'marienfest',prompt:'Am Sonntag fährt die Buslinie 306 öfter als sonst.',answer:true,explain:'Im Text: Viertelstundentakt zwischen 10 und 19 Uhr.'},
  {id:32,module:'Lesen',source:'Übungssatz 1, S.18',type:'mc',contextKey:'marienfest',prompt:'Besucherinnen und Besucher sollen ...',options:['ihr Auto in der Innenstadt parken.','mit öffentlichen Verkehrsmitteln kommen.','nur die Sonderbusse benutzen.'],answer:1,explain:'Im Text werden Besucher ausdrücklich dazu gebeten.'},
  {id:33,module:'Lesen',source:'Übungssatz 1, S.19',type:'tf',contextKey:'netcom',prompt:'Frau Kim bekommt einen neuen Internet-Anschluss.',answer:true,explain:'NetCom bestätigt den Auftrag für den Anschluss.'},
  {id:34,module:'Lesen',source:'Übungssatz 1, S.19',type:'mc',contextKey:'netcom',prompt:'Wie soll Frau Kim den Termin bestätigen?',options:['auf den Link klicken.','den Online-Service nutzen.','einen Brief schreiben.'],answer:0,explain:'Im Text: auf den Link „Termin-Zusage“ klicken.'},
  {id:35,module:'Lesen',source:'Übungssatz 1, S.20',type:'tf',contextKey:'ivanov',prompt:'Frau Trautmann ist die Lehrerin von Denis.',answer:true,explain:'Sie schreibt als Klassenlehrerin.'},
  {id:36,module:'Lesen',source:'Übungssatz 1, S.20',type:'mc',contextKey:'ivanov',prompt:'Familie Ivanov ...',options:['darf zu einer Feier kommen.','muss in der Schule anrufen.','soll für Essen bezahlen.'],answer:0,explain:'Einladung zum Klassenfest, Teilnahme kostenlos.'},
  {id:37,module:'Lesen',source:'Übungssatz 1, S.21',type:'tf',contextKey:'mittag',prompt:'Die Mittagsbetreuung ist am Wochenende geschlossen.',answer:true,explain:'Sie findet Montag bis Freitag statt.'},
  {id:38,module:'Lesen',source:'Übungssatz 1, S.21',type:'tf',contextKey:'mittag',prompt:'Bei zwei Kindern bezahlt man die Hälfte.',answer:false,explain:'Bei 2 Kindern gilt 15% Ermäßigung, nicht 50%.'},
  {id:39,module:'Lesen',source:'Übungssatz 1, S.21',type:'tf',contextKey:'mittag',prompt:'Die Kinder lernen Regeln für das Zusammenleben.',answer:true,explain:'Gruppenregeln und soziales Miteinander sind explizit genannt.'},
  {id:40,module:'Lesen',source:'Übungssatz 1, S.22',type:'mc',contextKey:'hotel',prompt:'(40) ___ Frau und ich haben am letzten Wochenende Urlaub in Ihrem Hotel gemacht ...',options:['ihre','meine','seine'],answer:1,explain:'Lösungsschlüssel Teil Lesen 5: 40 b.'},
  {id:41,module:'Lesen',source:'Übungssatz 1, S.22',type:'mc',contextKey:'hotel',prompt:'(41) ... wir haben Ihr Hotel ausgesucht, ___ die Beschreibung auf Ihrer Website sehr gut klingt.',options:['dass','denn','weil'],answer:2,explain:'Lösungsschlüssel Teil Lesen 5: 41 c.'},
  {id:42,module:'Lesen',source:'Übungssatz 1, S.22',type:'mc',contextKey:'hotel',prompt:'(42) ___ die Zimmer waren klein und laut!',options:['Aber','Obwohl','Trotzdem'],answer:0,explain:'Lösungsschlüssel Teil Lesen 5: 42 a.'},
  {id:43,module:'Lesen',source:'Übungssatz 1, S.22',type:'mc',contextKey:'hotel',prompt:'(43) Außerdem hatten wir während des ganzen Wochenendes ___ warmes Wasser ...',options:['kein','leider','nicht'],answer:0,explain:'Lösungsschlüssel Teil Lesen 5: 43 a.'},
  {id:44,module:'Lesen',source:'Übungssatz 1, S.22',type:'mc',contextKey:'hotel',prompt:'(44) ___ wir uns natürlich sofort nach unserer Ankunft an der Rezeption beschwert haben.',options:['nachdem','obwohl','weil'],answer:1,explain:'Lösungsschlüssel Teil Lesen 5: 44 b.'},
  {id:45,module:'Lesen',source:'Übungssatz 1, S.22',type:'mc',contextKey:'hotel',prompt:'(45) Wir haben uns sehr geärgert und möchten jetzt unser Geld ___.',options:['haben','wechseln','zurück'],answer:2,explain:'Lösungsschlüssel Teil Lesen 5: 45 c.'},

  {id:'H1',module:'Handbuch',source:'DTZ Handbuch, S.26',type:'tf',contextKey:'handbuch',prompt:'Der DTZ basiert auf den Niveaustufen A2 und B1 des GER.',answer:true,explain:'Im Handbuch Kapitel 4 klar benannt.'},
  {id:'H2',module:'Handbuch',source:'DTZ Handbuch, S.48',type:'tf',contextKey:'handbuch',prompt:'Im DTZ werden vor allem Dialekte statt Standardsprache geprüft.',answer:false,explain:'Geprüft wird die bundesdeutsche Standardsprache, Dialekte sind ausgeblendet.'},
  {id:'H3',module:'Handbuch',source:'DTZ Handbuch, S.48',type:'tf',contextKey:'handbuch',prompt:'Der Subtest Lesen enthält fünf Aufgaben mit unterschiedlichen Lesestilen.',answer:true,explain:'Aufgabe 1–5 decken verschiedene Lesestile und Texttypen ab.'},
  {id:'H4',module:'Handbuch',source:'DTZ Handbuch, S.48–49',type:'tf',contextKey:'handbuch',prompt:'In Lesen Aufgabe 5 geht es u. a. um Wortschatz, Strukturen und Höflichkeitsformen.',answer:true,explain:'Das ist explizit im Handbuch beschrieben.'},
  {id:'H5',module:'Handbuch',source:'DTZ Handbuch, S.30',type:'tf',contextKey:'handbuch',prompt:'Themen wie Krieg, Politik und Rassismus sind im DTZ als Aufgabenthemen vorgesehen.',answer:false,explain:'Diese Themen werden im Handbuch als tabu genannt.'},
];

// ══════════════════════════════════════════════════════════
//  STORAGE
// ══════════════════════════════════════════════════════════
const store = {
  get:(k,d=null)=>{try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):d}catch{return d}},
  set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}},
};

function getStats(){
  return store.get('dm_stats',{xp:0,xpToday:0,wordsLearned:[],streak:0,lastActive:'',quizHistory:[],dailyXP:[]});
}
function saveStats(s){store.set('dm_stats',s)}
function addXP(n){
  const s=getStats();
  s.xp=(s.xp||0)+n;
  s.xpToday=(s.xpToday||0)+n;
  const today=new Date().toDateString();
  if(s.lastActive!==today){
    s.xpToday=n;
    const yesterday=new Date(Date.now()-864e5).toDateString();
    s.streak=(s.lastActive===yesterday)?(s.streak||0)+1:1;
    s.lastActive=today;
  }
  s.dailyXP=s.dailyXP||[];
  const todayEntry=s.dailyXP.find(e=>e.date===today);
  if(todayEntry)todayEntry.xp=(todayEntry.xp||0)+n;
  else s.dailyXP.push({date:today,xp:n});
  if(s.dailyXP.length>30)s.dailyXP.shift();
  saveStats(s);updateTopbar();
}
function markWordLearned(word){
  const s=getStats();
  if(!s.wordsLearned.includes(word)){s.wordsLearned.push(word);addXP(5);}
  saveStats(s);
}
function updateTopbar(){
  const s=getStats();
  document.getElementById('topbar-streak').textContent=s.streak||0;
  document.getElementById('topbar-xp').textContent=s.xp||0;
  document.getElementById('topbar-words').textContent=(s.wordsLearned||[]).length;
  document.getElementById('sidebar-streak').textContent=(s.streak||0)+' يوم';
}

// ══════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════
const PAGE_TITLES={dashboard:'لوحة التحكم',vocab:'المفردات',sentences:'الجمل',exercises:'التمارين',dtz:'اختبار DTZ',writing:'الكتابة',reading:'القراءة',voice:'النطق',chat:'محادثة AI',progress:'الإحصائيات',settings:'الإعدادات'};
function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>{
    if(n.getAttribute('onclick')&&n.getAttribute('onclick').includes("'"+id+"'"))n.classList.add('active');
  });
  document.getElementById('page-title').textContent=PAGE_TITLES[id]||id;
  if(id==='dashboard')renderDashboard();
  if(id==='vocab')renderVocab();
  if(id==='sentences')renderSentences();
  if(id==='progress')renderProgress();
  if(id==='settings')loadSettings();
  if(id==='reading')renderReadings();
  if(id==='dtz')renderDtzExam();
}
function showTab(id){
  document.getElementById('vocab-flashcard').style.display='none';
  document.getElementById('vocab-list').style.display='none';
  document.getElementById(id).style.display='block';
}

// ══════════════════════════════════════════════════════════
//  SPEECH
// ══════════════════════════════════════════════════════════
function speak(text){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang='de-DE';u.rate=0.85;
  const voices=window.speechSynthesis.getVoices();
  const de=voices.find(v=>v.lang.startsWith('de'));
  if(de)u.voice=de;
  window.speechSynthesis.speak(u);
}
window.speechSynthesis&&window.speechSynthesis.onvoiceschanged;

// ══════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════
function renderLearningProgram(){
  document.getElementById('daily-program-list').innerHTML=DAILY_PROGRAM_A2_B2.map(item=>`
    <div class="program-item">
      <h4>${item.slot}</h4>
      <p>${item.focus}</p>
    </div>
  `).join('');

  document.getElementById('resource-list').innerHTML=STUDY_RESOURCES.map(resource=>`
    <div class="resource-item">
      <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.name}</a>
      <p>${resource.use}</p>
    </div>
  `).join('');

  const now=new Date();
  const currentKey=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const firstPlan=ROADMAP_2026[0];
  const lastPlan=ROADMAP_2026[ROADMAP_2026.length-1];
  const currentPlan=
    ROADMAP_2026.find(m=>m.key===currentKey)||
    (currentKey<firstPlan.key?firstPlan:lastPlan);
  const monthsLeft=currentKey>lastPlan.key?0:ROADMAP_2026.filter(m=>m.key>=currentKey).length;

  document.getElementById('roadmap-summary').textContent=
    `أنت تبدأ من A2 (وليس من الصفر). الشهر الحالي: ${currentPlan.month} — الهدف: ${currentPlan.goal}. متبقي ${monthsLeft} شهر حتى نهاية 2026.`;

  document.getElementById('roadmap-months').innerHTML=ROADMAP_2026.map(month=>`
    <div class="roadmap-month">
      <div class="roadmap-month-head">
        <div class="roadmap-month-title">${month.month}</div>
        <div class="roadmap-month-level">${month.level}</div>
      </div>
      <div style="font-size:.83rem;color:var(--muted);margin-bottom:8px">${month.goal}</div>
      <ul>${month.targets.map(target=>`<li>${target}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderDashboard(){
  const s=getStats();
  document.getElementById('dash-streak').textContent=s.streak||0;
  document.getElementById('dash-words').textContent=(s.wordsLearned||[]).length;
  document.getElementById('dash-words-total').textContent=VOCAB.length;
  document.getElementById('dash-xp').textContent=s.xp||0;
  document.getElementById('dash-xp-today').textContent=s.xpToday||0;
  const acc=s.quizHistory&&s.quizHistory.length?Math.round(s.quizHistory.reduce((a,q)=>a+q.acc,0)/s.quizHistory.length)+'%':'-';
  document.getElementById('dash-accuracy').textContent=acc;

  // Word of day
  const todayIdx=new Date().getDate()%VOCAB.length;
  const wod=VOCAB[todayIdx];
  document.getElementById('wod-de').textContent=wod.de;
  document.getElementById('wod-en').textContent=wod.en;
  document.getElementById('wod-type').textContent=wod.type;
  document.getElementById('wod-example').textContent=wod.example;
  document.getElementById('wod-level-tag').textContent=wod.level;

  // Sentence of day
  const sodIdx=new Date().getDate()%SENTENCES.length;
  const sod=SENTENCES[sodIdx];
  document.getElementById('sod-de').textContent=sod.de;
  document.getElementById('sod-ar').textContent=sod.ar;

  // Tasks
  const tasks=[
    {name:'مراجعة المفردات (10 بطاقات)',icon:'📖',xp:20,key:'vocab',section:'vocab'},
    {name:'تمرين اليوم (10 أسئلة)',icon:'✏️',xp:30,key:'exercise',section:'exercises'},
    {name:'قطعة قراءة',icon:'📄',xp:15,key:'reading',section:'reading'},
    {name:'كتابة حرة (100 كلمة)',icon:'📝',xp:25,key:'writing',section:'writing'},
    {name:'محادثة مع AI',icon:'🤖',xp:20,key:'chat',section:'chat'},
  ];
  const done=store.get('dm_daily_done_'+new Date().toDateString())||[];
  document.getElementById('daily-tasks').innerHTML=tasks.map(t=>`
    <div class="daily-task ${done.includes(t.key)?'task-done':'task-todo'}">
      <div class="task-icon">${t.icon}</div>
      <div class="task-info">
        <div class="task-name">${t.name}</div>
        <div class="task-meta">+${t.xp} XP</div>
      </div>
      <button class="task-btn ${done.includes(t.key)?'done':''}" onclick="openTask('${t.section}','${t.key}',${t.xp})">
        ${done.includes(t.key)?'✓ مكتمل':'ابدأ'}
      </button>
    </div>
  `).join('');
  renderLearningProgram();
}

function openTask(section,key,xp){
  const today=new Date().toDateString();
  const done=store.get('dm_daily_done_'+today)||[];
  if(!done.includes(key)){done.push(key);store.set('dm_daily_done_'+today,done);addXP(xp);}
  showSection(section);
}

// ══════════════════════════════════════════════════════════
//  DTZ EXAM
// ══════════════════════════════════════════════════════════
let currentDtzDocKey='practice';
let dtzQuizQuestions=[],dtzQuizIdx=0,dtzQuizCorrect=0,dtzQuizAnswered=false;

function normalizeDtzPage(page,maxPages){
  return Math.max(1,Math.min(parseInt(page)||1,maxPages));
}

function getDtzPageInputValue(){
  const pageInput=document.getElementById('dtz-page-input');
  return pageInput ? parseInt(pageInput.value)||1 : 1;
}

function getDtzPdfSrc(docKey,page){
  const doc=DTZ_PDFS[docKey]||DTZ_PDFS.practice;
  const safePage=normalizeDtzPage(page,doc.pages);
  return `${doc.file}#page=${safePage}&view=FitH`;
}

function switchDtzDocument(docKey){
  if(!DTZ_PDFS[docKey])return;
  currentDtzDocKey=docKey;
  const doc=DTZ_PDFS[docKey];
  const pageInput=document.getElementById('dtz-page-input');
  const frame=document.getElementById('dtz-pdf-frame');
  const meta=document.getElementById('dtz-doc-meta');
  if(pageInput){
    pageInput.max=String(doc.pages);
    pageInput.value='1';
  }
  if(frame)frame.src=getDtzPdfSrc(docKey,1);
  if(meta)meta.textContent=`${doc.label} — ${doc.pages} صفحة — ${doc.note} (ملاحظة: قد يختلف دعم فتح الصفحة مباشرة حسب متصفحك).`;
}

function goToDtzPage(){
  const pageInput=document.getElementById('dtz-page-input');
  if(!pageInput)return;
  const doc=DTZ_PDFS[currentDtzDocKey];
  if(!doc)return;
  const safePage=normalizeDtzPage(getDtzPageInputValue(),doc.pages);
  pageInput.value=String(safePage);
  const frame=document.getElementById('dtz-pdf-frame');
  if(frame)frame.src=getDtzPdfSrc(currentDtzDocKey,safePage);
}

function openCurrentDtzInNewTab(){
  if(!DTZ_PDFS[currentDtzDocKey])return;
  const page=getDtzPageInputValue();
  window.open(getDtzPdfSrc(currentDtzDocKey,page),'_blank','noopener,noreferrer');
}

function getDtzQuizContext(q){
  return q.contextKey ? DTZ_TEXT_BLOCKS[q.contextKey] : '';
}

function startDtzInteractiveQuiz(){
  const moduleSel=document.getElementById('dtz-quiz-module-sel');
  const countSel=document.getElementById('dtz-quiz-count-sel');
  const chosenModule=moduleSel?.value||'all';
  const requestedCount=parseInt(countSel?.value)||10;
  const pool=DTZ_INTERACTIVE_QUESTIONS.filter(q=>chosenModule==='all'||q.module===chosenModule);
  if(pool.length===0)return;

  dtzQuizQuestions=[...pool].sort(()=>Math.random()-.5).slice(0,Math.min(requestedCount,pool.length));
  dtzQuizIdx=0;
  dtzQuizCorrect=0;
  dtzQuizAnswered=false;

  document.getElementById('dtz-quiz-empty').style.display='none';
  document.getElementById('dtz-quiz-shell').style.display='block';
  document.getElementById('dtz-quiz-result').style.display='none';

  renderDtzInteractiveQuestion();
}

function resetDtzInteractiveQuiz(){
  dtzQuizQuestions=[];
  dtzQuizIdx=0;
  dtzQuizCorrect=0;
  dtzQuizAnswered=false;
  const empty=document.getElementById('dtz-quiz-empty');
  const shell=document.getElementById('dtz-quiz-shell');
  const result=document.getElementById('dtz-quiz-result');
  if(empty)empty.style.display='block';
  if(shell)shell.style.display='none';
  if(result)result.style.display='none';
}

function renderDtzInteractiveQuestion(){
  const q=dtzQuizQuestions[dtzQuizIdx];
  if(!q)return;
  dtzQuizAnswered=false;

  const total=dtzQuizQuestions.length;
  document.getElementById('dtz-quiz-score-live').textContent=`${dtzQuizCorrect}/${dtzQuizIdx}`;
  document.getElementById('dtz-quiz-fill').style.width=`${(dtzQuizIdx/total)*100}%`;
  document.getElementById('dtz-quiz-next-btn').style.display='none';
  document.getElementById('dtz-quiz-feedback').classList.remove('visible','correct','wrong');

  const context=getDtzQuizContext(q);
  let html=`<div class="question-card">
    <div class="question-type">${q.module} • سؤال ${q.id}</div>
    <div class="dtz-source">${q.source}</div>
    ${context?`<div class="dtz-context">${context}</div>`:''}
    <div class="question-text">${q.prompt}</div>`;

  if(q.type==='mc'){
    html+=`<div class="options">${q.options.map((o,i)=>`<button class="option" onclick="answerDtzMC(${i})">${o}</button>`).join('')}</div>`;
  }else{
    html+=`<div class="options">
      <button class="option" onclick="answerDtzTF(true)">Richtig</button>
      <button class="option" onclick="answerDtzTF(false)">Falsch</button>
    </div>`;
  }

  html+=`</div>`;
  document.getElementById('dtz-quiz-content').innerHTML=html;
}

function showDtzQuizFeedback(correct,q){
  const fb=document.getElementById('dtz-quiz-feedback');
  const expected=q.type==='mc' ? q.options[q.answer] : (q.answer?'Richtig':'Falsch');
  fb.classList.add('visible',correct?'correct':'wrong');
  fb.innerHTML=correct
    ?`✓ إجابة صحيحة (${expected})`
    :`✗ إجابة خاطئة. الصواب: <strong>${expected}</strong>${q.explain?`<br><small>${q.explain}</small>`:''}`;
}

function answerDtzMC(idx){
  if(dtzQuizAnswered)return;
  dtzQuizAnswered=true;
  const q=dtzQuizQuestions[dtzQuizIdx];
  const btns=document.querySelectorAll('#dtz-quiz-content .option');
  btns.forEach(b=>b.disabled=true);
  const correct=idx===q.answer;
  btns[idx].classList.add(correct?'correct':'wrong');
  if(!correct&&btns[q.answer])btns[q.answer].classList.add('correct');
  showDtzQuizFeedback(correct,q);
  if(correct){dtzQuizCorrect++;addXP(5);}
  document.getElementById('dtz-quiz-next-btn').style.display='inline-flex';
}

function answerDtzTF(val){
  if(dtzQuizAnswered)return;
  dtzQuizAnswered=true;
  const q=dtzQuizQuestions[dtzQuizIdx];
  const btns=document.querySelectorAll('#dtz-quiz-content .option');
  btns.forEach(b=>b.disabled=true);
  const correct=val===q.answer;
  if(btns[val?0:1])btns[val?0:1].classList.add(correct?'correct':'wrong');
  if(!correct&&btns[q.answer?0:1])btns[q.answer?0:1].classList.add('correct');
  showDtzQuizFeedback(correct,q);
  if(correct){dtzQuizCorrect++;addXP(5);}
  document.getElementById('dtz-quiz-next-btn').style.display='inline-flex';
}

function nextDtzInteractiveQuestion(){
  dtzQuizIdx++;
  if(dtzQuizIdx>=dtzQuizQuestions.length){
    endDtzInteractiveQuiz();
    return;
  }
  renderDtzInteractiveQuestion();
}

function endDtzInteractiveQuiz(){
  const acc=Math.round((dtzQuizCorrect/dtzQuizQuestions.length)*100);
  const s=getStats();
  s.dtzHistory=s.dtzHistory||[];
  s.dtzHistory.push({date:new Date().toISOString(),score:dtzQuizCorrect,total:dtzQuizQuestions.length,acc});
  if(s.dtzHistory.length>50)s.dtzHistory.shift();
  saveStats(s);
  addXP(10);

  document.getElementById('dtz-quiz-shell').style.display='none';
  document.getElementById('dtz-quiz-result').style.display='block';
  document.getElementById('dtz-quiz-final-score').textContent=`${dtzQuizCorrect}/${dtzQuizQuestions.length}`;
  document.getElementById('dtz-quiz-score-msg').textContent=
    acc>=85?'جاهز جداً لامتحان DTZ 👏':acc>=65?'نتيجة جيدة — واصل التكرار 💪':'أعد التدريب مع مراجعة النصوص الرسمية 📘';
}

function renderDtzExam(){
  const summary=document.getElementById('dtz-summary-grid');
  if(summary){
    summary.innerHTML=`
      <div class="dtz-stat"><div class="num">2</div><div class="lbl">ملفات رسمية مدمجة</div></div>
      <div class="dtz-stat"><div class="num">${DTZ_INTERACTIVE_QUESTIONS.length}</div><div class="lbl">سؤال تفاعلي مستخرج</div></div>
      <div class="dtz-stat"><div class="num">${DTZ_PDFS.practice.pages}</div><div class="lbl">صفحات نموذج التدريب</div></div>
      <div class="dtz-stat"><div class="num">${DTZ_PDFS.handbook.pages}</div><div class="lbl">صفحات الدليل الرسمي</div></div>
    `;
  }

  const modules=document.getElementById('dtz-modules-list');
  if(modules){
    modules.innerHTML=DTZ_MODULES.map(m=>`
      <div class="dtz-item">
        <h4>${m.name}</h4>
        <p>${m.focus}</p>
      </div>
    `).join('');
  }

  const flow=document.getElementById('dtz-flow-list');
  if(flow){
    flow.innerHTML=DTZ_PRACTICE_FLOW.map((step,idx)=>`
      <div class="dtz-item">
        <h4>الخطوة ${idx+1}</h4>
        <p>${step}</p>
      </div>
    `).join('');
  }

  const select=document.getElementById('dtz-doc-select');
  if(select){
    select.innerHTML=Object.entries(DTZ_PDFS).map(([k,v])=>`<option value="${k}">${v.label}</option>`).join('');
    select.value=currentDtzDocKey;
    switchDtzDocument(select.value||currentDtzDocKey);
  }

  resetDtzInteractiveQuiz();
}

// ══════════════════════════════════════════════════════════
//  VOCAB FLASHCARDS
// ══════════════════════════════════════════════════════════
let fcCards=[],fcIndex=0,fcFlipped=false;

function getFilteredVocab(){
  const cat=document.getElementById('vocab-category-select')?.value||'all';
  const lvl=document.getElementById('vocab-level-filter')?.value||'all';
  return VOCAB.filter(w=>(cat==='all'||w.cat===cat)&&(lvl==='all'||w.level===lvl));
}

function renderVocab(){
  fcCards=getFilteredVocab();
  if(fcCards.length===0)fcCards=VOCAB;
  fcIndex=0;fcFlipped=false;
  renderFC();
  renderVocabTable(fcCards);
  document.getElementById('vocab-badge').textContent=getStats().wordsLearned.length;
}

function filterVocab(){
  fcCards=getFilteredVocab();
  fcIndex=0;fcFlipped=false;
  renderFC();
  renderVocabTable(fcCards);
}

function renderFC(){
  if(!fcCards.length)return;
  const w=fcCards[fcIndex];
  document.getElementById('fc-de').textContent=w.de;
  document.getElementById('fc-en').textContent=w.en;
  document.getElementById('fc-type').textContent=w.type+' — '+w.level;
  document.getElementById('fc-example').textContent=w.example;
  document.getElementById('fc-progress').textContent=`بطاقة ${fcIndex+1} من ${fcCards.length}`;
  const card=document.getElementById('flashcard');
  card.classList.remove('flipped');
  fcFlipped=false;
  document.getElementById('fc-controls').style.display='none';
  document.getElementById('fc-nav-btns').style.display='flex';
}

function flipCard(){document.getElementById('flashcard').classList.toggle('flipped');fcFlipped=!fcFlipped;}
function fcFlipAndShow(){
  document.getElementById('flashcard').classList.add('flipped');
  fcFlipped=true;
  document.getElementById('fc-controls').style.display='flex';
  document.getElementById('fc-nav-btns').style.display='none';
}
function fcNext(){fcIndex=(fcIndex+1)%fcCards.length;renderFC();}
function fcPrev(){fcIndex=(fcIndex-1+fcCards.length)%fcCards.length;renderFC();}
function fcAnswer(correct){
  if(correct){markWordLearned(fcCards[fcIndex].de);addXP(3);}
  fcNext();
}

function renderVocabTable(words){
  const tbody=document.getElementById('vocab-tbody');
  if(!tbody)return;
  tbody.innerHTML=words.map(w=>`
    <tr>
      <td class="de">${w.de}</td>
      <td style="color:var(--muted);font-size:.75rem;font-family:'Oswald',sans-serif;text-transform:uppercase">${w.type}</td>
      <td>${w.en}</td>
      <td style="font-style:italic;font-size:.82rem;color:var(--muted)">${w.example}</td>
      <td><span class="level-tag tag-${w.level.toLowerCase()}">${w.level}</span></td>
      <td><button class="speak-btn" onclick="speak('${w.de.replace(/'/,"\\'")}')">🔊</button></td>
    </tr>
  `).join('');
}

// ══════════════════════════════════════════════════════════
//  SENTENCES
// ══════════════════════════════════════════════════════════
function filterSentences(){
  const cat=document.getElementById('sent-cat-filter').value;
  const lvl=document.getElementById('sent-level-filter').value;
  const filtered=SENTENCES.filter(s=>(cat==='all'||s.cat===cat)&&(lvl==='all'||s.level===lvl));
  renderSentencesList(filtered);
}

function renderSentences(){renderSentencesList(SENTENCES);}
function revealAllTranslations(){document.querySelectorAll('.sent-ar').forEach(e=>e.classList.add('visible'));}

function renderSentencesList(list){
  document.getElementById('sentences-list').innerHTML=list.map((s,i)=>`
    <div class="sentence-card">
      <div class="sent-de">${s.de}</div>
      <div class="sent-ar" id="sent-ar-${i}">${s.ar}</div>
      <div class="sent-controls">
        <span class="sent-category">${s.cat}</span>
        <span class="level-tag tag-${s.level.toLowerCase()}" style="margin-left:6px">${s.level}</span>
        <button class="icon-btn" onclick="speak('${s.de.replace(/'/,"\\'")}')">🔊</button>
        <button class="toggle-translate" onclick="document.getElementById('sent-ar-${i}').classList.toggle('visible')">ترجمة</button>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════
//  EXERCISES / QUIZ
// ══════════════════════════════════════════════════════════
let quizQuestions=[],quizIdx=0,quizCorrect=0,quizAnswered=false;
let lastQuizType='mc';

function showExerciseMenu(){
  document.getElementById('exercise-menu').style.display='block';
  document.getElementById('quiz-container').style.display='none';
  document.getElementById('quiz-result').style.display='none';
}

function startQuiz(type){
  lastQuizType=type;
  const lvl=document.getElementById('quiz-level-sel').value;
  const cnt=parseInt(document.getElementById('quiz-count-sel').value);
  const pool=VOCAB.filter(w=>lvl==='all'||w.level===lvl);
  if(pool.length<4){alert('قلة المفردات في هذا المستوى، اختر "كل المستويات"');return;}

  quizQuestions=generateQuestions(type,pool,cnt);
  quizIdx=0;quizCorrect=0;quizAnswered=false;

  document.getElementById('exercise-menu').style.display='none';
  document.getElementById('quiz-container').style.display='block';
  document.getElementById('quiz-result').style.display='none';

  renderQuestion();
}

function generateQuestions(type,pool,cnt){
  const shuffled=[...pool].sort(()=>Math.random()-.5);
  const selected=shuffled.slice(0,cnt);
  return selected.map(word=>{
    if(type==='mc'){
      const wrong=[...pool].filter(w=>w.de!==word.de).sort(()=>Math.random()-.5).slice(0,3);
      const opts=[...wrong,word].sort(()=>Math.random()-.5);
      const ans=opts.findIndex(o=>o.de===word.de);
      return{type:'mc',question:`ما معنى: <em>${word.de}</em>`,opts:opts.map(o=>o.en),ans,word};
    }
    if(type==='fill'){
      const sent=word.example;
      const blanked=sent.replace(new RegExp(word.de,'i'),'______');
      return{type:'fill',question:`أكمل الجملة: <em>${blanked}</em>`,ans:word.de,word};
    }
    if(type==='translate'){
      return{type:'fill',question:`ترجم إلى الألمانية: <em>${word.en}</em>`,ans:word.de,word};
    }
    // match = same as mc but reversed
    const wrong=[...pool].filter(w=>w.en!==word.en).sort(()=>Math.random()-.5).slice(0,3);
    const opts=[...wrong,word].sort(()=>Math.random()-.5);
    const ans=opts.findIndex(o=>o.en===word.en);
    return{type:'mc',question:`ما الكلمة الألمانية لـ: <em>${word.en}</em>`,opts:opts.map(o=>o.de),ans,word};
  });
}

function renderQuestion(){
  const q=quizQuestions[quizIdx];
  if(!q)return;
  quizAnswered=false;
  const total=quizQuestions.length;
  document.getElementById('quiz-score-live').textContent=`${quizCorrect}/${quizIdx}`;
  document.getElementById('quiz-fill').style.width=`${(quizIdx/total)*100}%`;
  document.getElementById('quiz-next-btn').style.display='none';
  document.getElementById('quiz-feedback').classList.remove('visible','correct','wrong');

  let html=`<div class="question-card">
    <div class="question-type">${quizIdx+1} من ${total}</div>
    <div class="question-text">${q.question}</div>`;

  if(q.type==='mc'){
    html+=`<div class="options">${q.opts.map((o,i)=>`
      <button class="option" onclick="answerMC(${i})">${o}</button>
    `).join('')}</div>`;
  } else {
    html+=`<div>
      <input class="fill-input" id="fill-ans" placeholder="اكتب إجابتك..." onkeydown="if(event.key==='Enter')checkFill()">
      <div style="margin-top:10px"><button class="btn-primary" onclick="checkFill()">تحقق</button></div>
    </div>`;
  }
  html+=`</div>`;
  document.getElementById('quiz-content').innerHTML=html;
  if(q.type==='fill')setTimeout(()=>document.getElementById('fill-ans')?.focus(),100);
}

function answerMC(idx){
  if(quizAnswered)return;
  quizAnswered=true;
  const q=quizQuestions[quizIdx];
  const btns=document.querySelectorAll('.option');
  btns.forEach(b=>b.disabled=true);
  const correct=idx===q.ans;
  btns[idx].classList.add(correct?'correct':'wrong');
  if(!correct)btns[q.ans].classList.add('correct');
  showFeedback(correct,q.word);
  if(correct){quizCorrect++;addXP(5);markWordLearned(q.word.de);}
  document.getElementById('quiz-next-btn').style.display='inline-flex';
}

function checkFill(){
  if(quizAnswered)return;
  const inp=document.getElementById('fill-ans');
  if(!inp)return;
  const val=inp.value.trim();
  const q=quizQuestions[quizIdx];
  const correct=val.toLowerCase()===q.ans.toLowerCase();
  inp.disabled=true;
  inp.classList.add(correct?'correct':'wrong');
  quizAnswered=true;
  showFeedback(correct,q.word,q.ans);
  if(correct){quizCorrect++;addXP(5);markWordLearned(q.word.de);}
  document.getElementById('quiz-next-btn').style.display='inline-flex';
}

function showFeedback(correct,word,ans){
  const fb=document.getElementById('quiz-feedback');
  fb.classList.add('visible',correct?'correct':'wrong');
  fb.innerHTML=correct
    ?`✓ إجابة صحيحة! <strong>${word.de}</strong> = ${word.en}`
    :`✗ إجابة خاطئة. الصواب: <strong>${ans||word.de}</strong> = ${word.en}<br><small>${word.example}</small>`;
}

function nextQuestion(){
  quizIdx++;
  if(quizIdx>=quizQuestions.length){endQuizResult();return;}
  renderQuestion();
}

function endQuiz(){showExerciseMenu();}
function endQuizResult(){
  const acc=Math.round((quizCorrect/quizQuestions.length)*100);
  const s=getStats();
  s.quizHistory=s.quizHistory||[];
  s.quizHistory.push({date:new Date().toISOString(),score:quizCorrect,total:quizQuestions.length,acc});
  if(s.quizHistory.length>50)s.quizHistory.shift();
  saveStats(s);addXP(10);

  document.getElementById('quiz-container').style.display='none';
  document.getElementById('quiz-result').style.display='block';
  document.getElementById('final-score').textContent=`${quizCorrect}/${quizQuestions.length}`;
  const msgs=['ممتاز! 🎉','عمل جيد! 💪','جيد، استمر! 📈','حاول مرة أخرى 🔄'];
  document.getElementById('score-msg').textContent=acc>=85?msgs[0]:acc>=65?msgs[1]:acc>=45?msgs[2]:msgs[3];
}

// ══════════════════════════════════════════════════════════
//  WRITING
// ══════════════════════════════════════════════════════════
const WRITING_PROMPTS=[
  "اكتب عن يومك الأمس باللغة الألمانية (50-100 كلمة)",
  "Stell dich auf Deutsch vor! أخبرنا عن نفسك، عمرك، مدينتك وهواياتك.",
  "Beschreibe dein letztes Wochenende. ماذا فعلت في عطلة نهاية الأسبوع؟",
  "Was denkst du über Social Media? اكتب رأيك في وسائل التواصل الاجتماعي.",
  "Schreib einen Brief an einen Freund. اكتب رسالة لصديق تدعوه لزيارتك.",
  "Beschreibe ein Bild: تخيّل منظراً طبيعياً جميلاً وصِفه.",
  "Schreib einen Aufsatz: هل يجب أن يكون التعليم الجامعي مجانياً؟ ناقش.",
];

function loadWritingPrompt(){
  const idx=parseInt(document.getElementById('writing-topic-sel').value);
  document.getElementById('write-prompt').textContent=WRITING_PROMPTS[idx]||WRITING_PROMPTS[0];
  document.getElementById('write-area').focus();
}

function updateCharCount(){
  const n=document.getElementById('write-area').value.length;
  document.getElementById('char-count').textContent=n+' حرف';
}

function clearWriting(){
  document.getElementById('write-area').value='';
  document.getElementById('char-count').textContent='0 حرف';
  document.getElementById('write-ai-response').classList.remove('visible');
}

async function submitWriting(){
  const text=document.getElementById('write-area').value.trim();
  if(text.length<20){alert('اكتب على الأقل 20 حرفاً');return;}
  const apiKey=store.get('dm_api_key','');
  if(!apiKey){alert('أدخل مفتاح API في الإعدادات أولاً');showSection('settings');return;}

  const btn=document.getElementById('write-btn-label');
  btn.innerHTML='<span class="loading-dots"><span></span><span></span><span></span></span>';

  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',max_tokens:1000,
        system:`أنت معلم لغة ألمانية محترف. حلّل النص الألماني التالي وقدم:
1. تقييم عام (من 10)
2. الأخطاء النحوية مع التصحيح
3. اقتراحات لتحسين الأسلوب
4. تعليق تشجيعي
الرد يكون بالعربية مع كتابة الكلمات الألمانية بالخط الأصفر (استخدم HTML)`,
        messages:[{role:'user',content:`النص: "${text}"`}]
      })
    });
    const data=await res.json();
    const reply=data.content?.[0]?.text||'حدث خطأ';
    document.getElementById('write-ai-content').innerHTML=reply;
    document.getElementById('write-ai-response').classList.add('visible');
    addXP(15);
  }catch(e){
    document.getElementById('write-ai-content').textContent='خطأ: '+e.message;
    document.getElementById('write-ai-response').classList.add('visible');
  }
  btn.innerHTML='🤖 تصحيح بالذكاء الاصطناعي';
}

// ══════════════════════════════════════════════════════════
//  READING
// ══════════════════════════════════════════════════════════
function filterReadings(){
  const lvl=document.getElementById('reading-level-sel').value;
  const list=READINGS.filter(r=>lvl==='all'||r.level===lvl);
  renderReadingsList(list);
}

function renderReadings(){renderReadingsList(READINGS);}

function renderReadingsList(list){
  document.getElementById('readings-list').innerHTML=list.map((r,ri)=>`
    <div class="passage-card">
      <div class="passage-meta">
        <span class="level-tag tag-${r.level.toLowerCase()}">${r.level}</span>
        <span style="font-family:'Oswald',sans-serif;font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)">قطعة قراءة</span>
      </div>
      <div class="passage-title">${r.title}</div>
      <div class="passage-text">${r.text}</div>
      <div style="margin-bottom:12px;display:flex;gap:8px">
        <button class="speak-btn" onclick="speak(\`${r.text.replace(/`/g,"'")}\`)">🔊 استمع</button>
        <button class="toggle-translate" onclick="document.getElementById('pt-${ri}').style.display=document.getElementById('pt-${ri}').style.display==='block'?'none':'block'">ترجمة</button>
      </div>
      <div id="pt-${ri}" style="display:none;font-size:.85rem;color:var(--muted);padding:12px;background:var(--surface2);border-radius:var(--radius);margin-bottom:14px;line-height:1.6">${r.translation}</div>
      <div style="font-family:'Oswald',sans-serif;font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:var(--muted);margin-bottom:10px">أسئلة الفهم</div>
      ${r.questions.map((q,qi)=>`
        <div class="comprehension-q">
          <div class="comp-q-text">${qi+1}. ${q.q}</div>
          <div class="comp-options">
            ${q.opts.map((o,oi)=>`<button class="comp-opt" id="copt-${ri}-${qi}-${oi}" onclick="checkComp(${ri},${qi},${oi},${q.ans})">${o}</button>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function checkComp(ri,qi,oi,ans){
  const prefix=`copt-${ri}-${qi}`;
  document.querySelectorAll(`[id^="${prefix}"]`).forEach(b=>b.disabled=true);
  document.getElementById(`${prefix}-${oi}`).classList.add(oi===ans?'correct':'wrong');
  if(oi!==ans)document.getElementById(`${prefix}-${ans}`).classList.add('correct');
  if(oi===ans)addXP(5);
}

// ══════════════════════════════════════════════════════════
//  VOICE
// ══════════════════════════════════════════════════════════
let recognition=null,currentVoiceTarget='',isRecording=false;
let listeningTarget=null;

function setupRecognition(){
  if(!('webkitSpeechRecognition' in window||'SpeechRecognition' in window))return null;
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  const r=new SR();
  r.lang='de-DE';r.continuous=false;r.interimResults=true;
  r.onresult=e=>{
    const t=Array.from(e.results).map(r=>r[0].transcript).join('');
    document.getElementById('voice-transcript').textContent=t;
  };
  r.onend=()=>{
    isRecording=false;
    const mb=document.getElementById('mic-btn');
    if(mb){mb.classList.remove('recording');}
    document.getElementById('voice-status').textContent='اضغط للتسجيل';
    const t=document.getElementById('voice-transcript').textContent;
    if(t&&t!=='سيظهر كلامك هنا...'&&currentVoiceTarget){
      const score=compareStrings(t.toLowerCase(),currentVoiceTarget.toLowerCase());
      showVoiceScore(score);
    }
  };
  r.onerror=()=>{isRecording=false;document.getElementById('voice-status').textContent='خطأ في الميكروفون';};
  return r;
}

function toggleRecording(){
  if(!recognition)recognition=setupRecognition();
  if(!recognition){alert('المتصفح لا يدعم التعرف على الكلام. استخدم Chrome.');return;}
  if(isRecording){recognition.stop();return;}
  isRecording=true;
  document.getElementById('mic-btn').classList.add('recording');
  document.getElementById('voice-status').textContent='جارٍ الاستماع...';
  document.getElementById('voice-transcript').textContent='';
  recognition.start();
}

function compareStrings(a,b){
  const words1=a.split(' ');const words2=b.split(' ');
  const matches=words1.filter(w=>words2.includes(w)).length;
  return Math.round((matches/Math.max(words1.length,words2.length))*100);
}

function showVoiceScore(score){
  const el=document.getElementById('voice-score-display');
  el.innerHTML=`<div style="margin-top:12px;padding:10px;border-radius:var(--radius);background:${score>70?'rgba(74,184,122,.1)':'rgba(212,168,32,.1)'};border:1px solid ${score>70?'rgba(74,184,122,.3)':'rgba(212,168,32,.3)'}">
    <div style="font-family:'Oswald',sans-serif;font-size:1.5rem;color:${score>70?'var(--green)':'var(--gold)'}">${score}%</div>
    <div style="font-size:.8rem;color:var(--muted)">${score>80?'ممتاز! 🎉':score>60?'جيد جداً! 👍':score>40?'جيد، تدرب أكثر':'حاول مرة أخرى'}</div>
  </div>`;
  if(score>60)addXP(10);
}

function newVoiceWord(){
  const w=VOCAB[Math.floor(Math.random()*VOCAB.length)];
  currentVoiceTarget=w.de;
  document.getElementById('voice-target').textContent=w.de;
  document.getElementById('voice-transcript').textContent='سيظهر كلامك هنا...';
  document.getElementById('voice-score-display').innerHTML='';
}

function newVoiceSentence(){
  const s=SENTENCES[Math.floor(Math.random()*SENTENCES.length)];
  currentVoiceTarget=s.de;
  document.getElementById('voice-target').textContent=s.de;
  document.getElementById('voice-transcript').textContent='سيظهر كلامك هنا...';
  document.getElementById('voice-score-display').innerHTML='';
}

function speakTarget(){speak(currentVoiceTarget);}

// Listening Exercise
function newListeningEx(){
  listeningTarget=SENTENCES[Math.floor(Math.random()*SENTENCES.length)];
  document.getElementById('listening-controls').style.display='block';
  document.getElementById('listening-input').value='';
  document.getElementById('listening-result').style.display='none';
  speak(listeningTarget.de);
}
function playListening(){if(listeningTarget)speak(listeningTarget.de);}
function checkListening(){
  const val=document.getElementById('listening-input').value.trim();
  if(!val||!listeningTarget)return;
  const score=compareStrings(val.toLowerCase(),listeningTarget.de.toLowerCase());
  const r=document.getElementById('listening-result');
  r.style.display='block';
  r.style.background=score>70?'rgba(74,184,122,.1)':'rgba(212,64,64,.1)';
  r.style.border=`1px solid ${score>70?'rgba(74,184,122,.3)':'rgba(212,64,64,.3)'}`;
  r.innerHTML=`<div style="margin-bottom:6px;font-family:'Oswald',sans-serif;color:${score>70?'var(--green)':'var(--red)'}">${score}% تطابق</div>
  <div style="font-size:.85rem">النص الصحيح: <span style="font-family:'Fira Code',monospace;color:var(--gold)">${listeningTarget.de}</span></div>
  <div style="font-size:.82rem;color:var(--muted);margin-top:4px">${listeningTarget.ar}</div>`;
  if(score>60)addXP(8);
}
function revealListening(){
  if(!listeningTarget)return;
  const r=document.getElementById('listening-result');
  r.style.display='block';
  r.style.background='rgba(212,168,32,.08)';
  r.style.border='1px solid rgba(212,168,32,.2)';
  r.innerHTML=`<div style="font-family:'Fira Code',monospace;color:var(--gold);margin-bottom:4px">${listeningTarget.de}</div>
  <div style="font-size:.85rem;color:var(--muted)">${listeningTarget.ar}</div>`;
}

// ══════════════════════════════════════════════════════════
//  AI CHAT
// ══════════════════════════════════════════════════════════
let chatHistory=[{role:'assistant',content:'مرحباً! أنا مساعدك لتعلم الألمانية. Ich bin dein Deutschlehrer! يمكنك الكتابة بالألمانية وسأصحح أخطاءك وأساعدك على التحدث بطلاقة. جرب أن تعرّف بنفسك! 🇩🇪'}];

function sendHint(text){
  document.getElementById('chat-input').value=text;
  sendMessage();
}

async function sendMessage(){
  const inp=document.getElementById('chat-input');
  const text=inp.value.trim();
  if(!text)return;
  const apiKey=store.get('dm_api_key','');
  if(!apiKey){
    appendMsg('ai','⚠️ أدخل مفتاح API في الإعدادات أولاً. اضغط على أيقونة الترس في القائمة الجانبية.');
    return;
  }
  inp.value='';
  appendMsg('user',text);
  chatHistory.push({role:'user',content:text});

  const thinkEl=appendMsg('ai','<span class="loading-dots"><span></span><span></span><span></span></span>');

  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',max_tokens:800,
        system:`أنت معلم لغة ألمانية ودود ومتحمس. تهدف إلى مساعدة المتعلم على الوصول لمستوى B2.
قواعد:
- إذا كتب المستخدم بالألمانية، رد بالألمانية وصحح أخطاءه برفق
- إذا كتب بالعربية، رد بالعربية مع إضافة مفردات ألمانية مفيدة
- دائماً شجع المستخدم وأعطه جملاً مفيدة لتعلمها
- أضف تصحيحات الأخطاء في نهاية ردك بهذا الشكل: [تصحيح: الخطأ → الصحيح]
- استخدم emojis لجعل المحادثة ممتعة`,
        messages:chatHistory.map(m=>({role:m.role==='ai'||m.role==='assistant'?'assistant':'user',content:m.content})).filter(m=>typeof m.content==='string')
      })
    });
    const data=await res.json();
    const reply=data.content?.[0]?.text||'حدث خطأ في الاستجابة';
    thinkEl.innerHTML=reply;
    chatHistory.push({role:'assistant',content:reply});
    addXP(8);
  }catch(e){
    thinkEl.innerHTML='❌ خطأ: '+e.message;
  }
}

function appendMsg(role,content){
  const msgs=document.getElementById('chat-messages');
  const div=document.createElement('div');
  div.className=`msg msg-${role}`;
  div.innerHTML=content;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
  return div;
}

// ══════════════════════════════════════════════════════════
//  PROGRESS
// ══════════════════════════════════════════════════════════
let weeklyChart=null;

function renderProgress(){
  const s=getStats();
  document.getElementById('p-streak').textContent=s.streak||0;
  document.getElementById('p-xp').textContent=s.xp||0;
  document.getElementById('p-words').textContent=(s.wordsLearned||[]).length;
  const acc=s.quizHistory&&s.quizHistory.length?Math.round(s.quizHistory.reduce((a,q)=>a+q.acc,0)/s.quizHistory.length)+'%':'-';
  document.getElementById('p-accuracy').textContent=acc;

  // Weekly chart
  const days=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  const today=new Date();
  const labels=[],data=[];
  for(let i=6;i>=0;i--){
    const d=new Date(today.getTime()-i*864e5);
    const ds=d.toDateString();
    labels.push(days[d.getDay()]);
    const entry=(s.dailyXP||[]).find(e=>e.date===ds);
    data.push(entry?entry.xp:0);
  }

  const ctx=document.getElementById('weekly-chart');
  if(weeklyChart)weeklyChart.destroy();
  weeklyChart=new Chart(ctx,{
    type:'bar',
    data:{labels,datasets:[{data,backgroundColor:'rgba(212,168,32,.5)',borderColor:'rgba(212,168,32,1)',borderWidth:1,borderRadius:4}]},
    options:{plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(42,39,34,.5)'},ticks:{color:'#7a7268',font:{family:'Oswald',size:11}}},y:{grid:{color:'rgba(42,39,34,.5)'},ticks:{color:'#7a7268',font:{family:'Oswald',size:11}}}},animation:{duration:600}}
  });

  // Heatmap
  const hm=document.getElementById('heatmap');
  hm.innerHTML='';
  for(let i=29;i>=0;i--){
    const d=new Date(today.getTime()-i*864e5).toDateString();
    const e=(s.dailyXP||[]).find(x=>x.date===d);
    const xp=e?e.xp:0;
    const cls=xp===0?'':xp<30?'l1':xp<60?'l2':xp<100?'l3':'l4';
    hm.innerHTML+=`<div class="hmap-cell ${cls}" title="${d}: ${xp} XP"></div>`;
  }

  // Badges
  const badges=[
    {icon:'🔥',name:'أسبوع متواصل',earned:(s.streak||0)>=7},
    {icon:'📚',name:'50 كلمة',earned:(s.wordsLearned||[]).length>=50},
    {icon:'⭐',name:'500 XP',earned:(s.xp||0)>=500},
    {icon:'🎯',name:'دقة 80%',earned:s.quizHistory&&s.quizHistory.length>=3&&s.quizHistory.reduce((a,q)=>a+q.acc,0)/s.quizHistory.length>=80},
    {icon:'🗣️',name:'محادث',earned:chatHistory.length>=10},
    {icon:'✍️',name:'كاتب',earned:false},
    {icon:'🏆',name:'100 كلمة',earned:(s.wordsLearned||[]).length>=100},
    {icon:'🌟',name:'1000 XP',earned:(s.xp||0)>=1000},
  ];
  document.getElementById('badges-grid').innerHTML=badges.map(b=>`
    <div class="badge ${b.earned?'earned':''}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════════════════════
function loadSettings(){
  const key=store.get('dm_api_key','');
  if(key)document.getElementById('api-key-input').value=key;
  const lvl=store.get('dm_level',DEFAULT_LEVEL);
  document.getElementById('settings-level-sel').value=lvl;
  const goal=store.get('dm_daily_goal',20);
  document.getElementById('settings-daily-goal').value=goal;

  // update chat api notice
  if(key){
    document.getElementById('api-connected').style.display='inline';
    document.getElementById('chat-api-notice').style.opacity='.5';
  }
}

function saveApiKey(){
  const key=document.getElementById('api-key-input').value.trim();
  if(!key){alert('أدخل المفتاح أولاً');return;}
  store.set('dm_api_key',key);
  const msg=document.getElementById('api-save-msg');
  msg.classList.add('visible');
  setTimeout(()=>msg.classList.remove('visible'),2500);
}

function saveSettings(){
  const lvl=document.getElementById('settings-level-sel').value;
  const goal=document.getElementById('settings-daily-goal').value;
  store.set('dm_level',lvl);
  store.set('dm_daily_goal',parseInt(goal));
  document.getElementById('level-select').value=lvl;
  const msg=document.getElementById('settings-save-msg');
  msg.classList.add('visible');
  setTimeout(()=>msg.classList.remove('visible'),2500);
}

function changeLevel(v){store.set('dm_level',v);}

function resetData(){
  if(confirm('هل أنت متأكد؟ سيتم حذف كل بياناتك!')){
    localStorage.removeItem('dm_stats');
    localStorage.removeItem('dm_api_key');
    location.reload();
  }
}

// ══════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════
function init(){
  // Check and update streak
  const s=getStats();
  const today=new Date().toDateString();
  if(s.lastActive!==today){
    const yesterday=new Date(Date.now()-864e5).toDateString();
    if(s.lastActive!==yesterday&&s.streak>0){s.streak=0;saveStats(s);}
    s.lastActive=today;saveStats(s);
  }

  updateTopbar();
  renderDashboard();
  renderVocab();
  renderSentences();
  renderReadings();
  renderDtzExam();

  const savedLevel=store.get('dm_level',DEFAULT_LEVEL);
  document.getElementById('level-select').value=savedLevel;
}

init();
