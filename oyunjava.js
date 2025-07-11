function getRandomSubset(array, size) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

const imageQuestions = [

  
  {
    "question_tr": "Fransız Devrimi hangi olayla başlamıştır?",
    "question_en": "Which event marked the beginning of the French Revolution?",
    "answers_tr": ["Versailles Antlaşması", "Bastille Baskını", "Waterloo Savaşı", "Viyana Kongresi"],
    "answers_en": ["Treaty of Versailles", "Storming of the Bastille", "Battle of Waterloo", "Congress of Vienna"],
    "correct": 1
  },
  {
    "question_tr": "Berlin Duvarı'nın yıkılması neyin sembolüdür?",
    "question_en": "What did the fall of the Berlin Wall symbolize?",
    "answers_tr": ["İkinci Dünya Savaşı'nın başlangıcı", "Soğuk Savaş'ın sonu", "Avrupa Birliği'nin kuruluşu", "Kore Savaşı'nın sonu"],
    "answers_en": ["Start of World War II", "End of the Cold War", "Foundation of the European Union", "End of the Korean War"],
    "correct": 1
  },
  {
    "question_tr": "Magna Carta hangi ülkenin tarihinde önemli bir belgedir?",
    "question_en": "In which country's history is the Magna Carta a significant document?",
    "answers_tr": ["Fransa", "Almanya", "İngiltere", "İtalya"],
    "answers_en": ["France", "Germany", "England", "Italy"],
    "correct": 2
  },
  {
    "question_tr": "İlk yazılı kanunlar hangi uygarlığa aittir?",
    "question_en": "Which civilization is known for the first written laws?",
    "answers_tr": ["Yunanlar", "Sümerler", "Mısırlılar", "Romalar"],
    "answers_en": ["Greeks", "Sumerians", "Egyptians", "Romans"],
    "correct": 1
  },
  {
    "question_tr": "İstanbul'un fethi hangi padişah döneminde gerçekleşti?",
    "question_en": "Under which sultan was the conquest of Istanbul completed?",
    "answers_tr": ["Yavuz Sultan Selim", "Fatih Sultan Mehmet", "Kanuni Sultan Süleyman", "II. Bayezid"],
    "answers_en": ["Selim I", "Mehmed the Conqueror", "Suleiman the Magnificent", "Bayezid II"],
    "correct": 1
  },
  {
    "question_tr": "Amerikan Bağımsızlık Bildirgesi hangi yılda yayımlandı?",
    "question_en": "In which year was the American Declaration of Independence published?",
    "answers_tr": ["1776", "1789", "1812", "1750"],
    "answers_en": ["1776", "1789", "1812", "1750"],
    "correct": 0
  },
  {
    "question_tr": "Sanayi Devrimi hangi ülkede başladı?",
    "question_en": "In which country did the Industrial Revolution begin?",
    "answers_tr": ["Fransa", "İngiltere", "Almanya", "ABD"],
    "answers_en": ["France", "England", "Germany", "USA"],
    "correct": 1
  },
  {
    "question_tr": "Soğuk Savaş döneminde NATO'nun karşısında kurulan askeri ittifak hangisidir?",
    "question_en": "Which military alliance was formed in opposition to NATO during the Cold War?",
    "answers_tr": ["Avrupa Birliği", "Varşova Paktı", "Bağdat Paktı", "Birleşmiş Milletler"],
    "answers_en": ["European Union", "Warsaw Pact", "Baghdad Pact", "United Nations"],
    "correct": 1
  },
  {
    "question_tr": "İlk çağda demokrasiyle yönetilen şehir devleti hangisiydi?",
    "question_en": "Which ancient city-state was ruled by democracy?",
    "answers_tr": ["Sparta", "Atina", "Roma", "Babil"],
    "answers_en": ["Sparta", "Athens", "Rome", "Babylon"],
    "correct": 1
  },
  {
    "question_tr": "Birinci Dünya Savaşı'nı başlatan olay nedir?",
    "question_en": "What event triggered World War I?",
    "answers_tr": ["Versailles Antlaşması", "Sarajevo Suikastı", "Berlin Duvarı'nın yıkılması", "Lusitania'nın batırılması"],
    "answers_en": ["Treaty of Versailles", "Assassination in Sarajevo", "Fall of the Berlin Wall", "Sinking of the Lusitania"],
    "correct": 1
  },
  {
    "question_tr": "Roma İmparatorluğu ikiye ne zaman ayrıldı?",
    "question_en": "When was the Roman Empire divided into two?",
    "answers_tr": ["Milattan Önce 27", "Milattan Sonra 476", "Milattan Sonra 395", "Milattan Önce 509"],
    "answers_en": ["27 BC", "476 AD", "395 AD", "509 BC"],
    "correct": 2
  },
  {
    "question_tr": "Mısır'daki piramitler hangi amaçla yapılmıştır?",
    "question_en": "What was the primary purpose of the pyramids in Egypt?",
    "answers_tr": ["Tapınak olarak", "Kraliyet mezarları", "Askeri üs", "Gözlemevi"],
    "answers_en": ["Temples", "Royal tombs", "Military base", "Observatory"],
    "correct": 1
  },
  {
    "question_tr": "Tarihte 'Kara Ölüm' olarak bilinen felaket nedir?",
    "question_en": "What is the disaster known as the 'Black Death' in history?",
    "answers_tr": ["Volkanik patlama", "Veba salgını", "Savaş", "Kıtlık"],
    "answers_en": ["Volcanic eruption", "Plague", "War", "Famine"],
    "correct": 1
  },
  {
    "question_tr": "Osmanlı Devleti'nin ilk başkenti neresiydi?",
    "question_en": "What was the first capital of the Ottoman Empire?",
    "answers_tr": ["İstanbul", "Edirne", "Bursa", "Ankara"],
    "answers_en": ["Istanbul", "Edirne", "Bursa", "Ankara"],
    "correct": 2
  },
  {
    "question_tr": "II. Dünya Savaşı sırasında Japonya'ya atılan atom bombaları hangi şehirleri hedef aldı?",
    "question_en": "Which cities were targeted by atomic bombs during World War II?",
    "answers_tr": ["Tokyo ve Osaka", "Kyoto ve Hiroshima", "Hiroşima ve Nagazaki", "Nagasaki ve Kobe"],
    "answers_en": ["Tokyo and Osaka", "Kyoto and Hiroshima", "Hiroshima and Nagasaki", "Nagasaki and Kobe"],
    "correct": 2
  },
  {
    "question_tr": "Reform hareketi hangi din adamı tarafından başlatıldı?",
    "question_en": "Who initiated the Reformation movement?",
    "answers_tr": ["Martin Luther", "Jean Calvin", "Thomas More", "Desiderius Erasmus"],
    "answers_en": ["Martin Luther", "John Calvin", "Thomas More", "Desiderius Erasmus"],
    "correct": 0
  },
  {
    "question_tr": "Truva Savaşı'nı anlatan destanın adı nedir?",
    "question_en": "What is the name of the epic that tells the story of the Trojan War?",
    "answers_tr": ["Odysseia", "Aeneis", "İlyada", "Beowulf"],
    "answers_en": ["Odyssey", "Aeneid", "Iliad", "Beowulf"],
    "correct": 2
  },
  {
    "question_tr": "İlk Türk devleti hangisidir?",
    "question_en": "Which was the first Turkish state?",
    "answers_tr": ["Göktürkler", "Hunlar", "Uygurlar", "Selçuklular"],
    "answers_en": ["Göktürks", "Huns", "Uyghurs", "Seljuks"],
    "correct": 1
  },
  {
    "question_tr": "Haçlı Seferleri'nin temel amacı neydi?",
    "question_en": "What was the main purpose of the Crusades?",
    "answers_tr": ["Yeni topraklar fethetmek", "Ticaret yollarını ele geçirmek", "Kudüs'ü geri almak", "İslamiyet'i yaymak"],
    "answers_en": ["To conquer new lands", "To seize trade routes", "To reclaim Jerusalem", "To spread Islam"],
    "correct": 2
  },
  {
    "question_tr": "İlk Çağ'da Anadolu'da kurulan ilk medeniyetlerden biri hangisidir?",
    "question_en": "Which is one of the earliest civilizations founded in Anatolia during the Ancient Age?",
    "answers_tr": ["Urartular", "Hititler", "Frigler", "Lidyalılar"],
    "answers_en": ["Urartians", "Hittites", "Phrygians", "Lydians"],
    "correct": 1
  },
  {
    "question_tr": "Mustafa Kemal Atatürk'ün liderlik ettiği savaş hangisidir?",
    "question_en": "Which war was led by Mustafa Kemal Atatürk?",
    "answers_tr": ["Birinci Dünya Savaşı", "Kurtuluş Savaşı", "Çanakkale Savaşı", "Kore Savaşı"],
    "answers_en": ["World War I", "War of Independence", "Gallipoli Campaign", "Korean War"],
    "correct": 1
  },
  {
    "question_tr": "İlk deniz aşırı keşifler hangi ülkenin öncülüğünde başlamıştır?",
    "question_en": "Which country led the first overseas explorations?",
    "answers_tr": ["İspanya", "Portekiz", "İngiltere", "Fransa"],
    "answers_en": ["Spain", "Portugal", "England", "France"],
    "correct": 1
  },
  {
    "question_tr": "Yüz Yıl Savaşları hangi iki ülke arasında olmuştur?",
    "question_en": "The Hundred Years' War was fought between which two countries?",
    "answers_tr": ["Fransa ve Almanya", "İngiltere ve Fransa", "İspanya ve Portekiz", "İtalya ve Avusturya"],
    "answers_en": ["France and Germany", "England and France", "Spain and Portugal", "Italy and Austria"],
    "correct": 1
  },
  {
    "question_tr": "İlk kadın hakları beyannamesi nerede yayınlandı?",
    "question_en": "Where was the first women's rights declaration published?",
    "answers_tr": ["Londra", "New York", "Paris", "Seneca Falls"],
    "answers_en": ["London", "New York", "Paris", "Seneca Falls"],
    "correct": 3
  },
  {
    "question_tr": "Roma'da halkın temsilcilerine ne ad verilirdi?",
    "question_en": "What were the representatives of the people called in Ancient Rome?",
    "answers_tr": ["Senatör", "Praetor", "Tribün", "Konsül"],
    "answers_en": ["Senator", "Praetor", "Tribune", "Consul"],
    "correct": 2
  },
  {
    "question_tr": "Rönesans hareketi ilk olarak hangi ülkede başladı?",
    "question_en": "In which country did the Renaissance movement first begin?",
    "answers_tr": ["Fransa", "İtalya", "İspanya", "Almanya"],
    "answers_en": ["France", "Italy", "Spain", "Germany"],
    "correct": 1
  },
  {
    "question_tr": "Hangi antik uygarlık Mısır hiyerogliflerini çözdü?",
    "question_en": "Which ancient civilization deciphered Egyptian hieroglyphs?",
    "answers_tr": ["Romalılar", "Yunanlar", "Fransızlar", "Persler"],
    "answers_en": ["Romans", "Greeks", "French", "Persians"],
    "correct": 2
  },
  {
    "question_tr": "İkinci Dünya Savaşı'nın başlama nedeni olarak kabul edilen olay nedir?",
    "question_en": "What event is considered the starting point of World War II?",
    "answers_tr": ["Fransa'nın işgali", "Polonya'nın işgali", "Pearl Harbor saldırısı", "Berlin Duvarı'nın inşası"],
    "answers_en": ["Invasion of France", "Invasion of Poland", "Attack on Pearl Harbor", "Construction of Berlin Wall"],
    "correct": 1
  },
  {
    "question_tr": "İlk kağıt parayı basan medeniyet hangisidir?",
    "question_en": "Which civilization first issued paper money?",
    "answers_tr": ["Araplar", "Çinliler", "Türkler", "Yunanlar"],
    "answers_en": ["Arabs", "Chinese", "Turks", "Greeks"],
    "correct": 1
  },
  {
    "question_tr": "İlk Olimpiyat Oyunları nerede düzenlenmiştir?",
    "question_en": "Where were the first Olympic Games held?",
    "answers_tr": ["Atina", "Sparta", "Olimpia", "Roma"],
    "answers_en": ["Athens", "Sparta", "Olympia", "Rome"],
    "correct": 2
  },
  {
    "question_tr": "Napolyon Bonapart hangi ülkede imparator olmuştur?",
    "question_en": "In which country did Napoleon Bonaparte become emperor?",
    "answers_tr": ["İtalya", "İspanya", "Fransa", "Almanya"],
    "answers_en": ["Italy", "Spain", "France", "Germany"],
    "correct": 2
  },
  {
    "question_tr": "Mustafa Kemal Atatürk'ün doğduğu şehir hangisidir?",
    "question_en": "What city was Mustafa Kemal Atatürk born in?",
    "answers_tr": ["İstanbul", "Selanik", "Ankara", "Saraybosna"],
    "answers_en": ["Istanbul", "Thessaloniki", "Ankara", "Sarajevo"],
    "correct": 1
  },
  {
    "question_tr": "İslamiyet’in doğuşuna yakın dönemde Bizans'ın en büyük rakibi hangi devletti?",
    "question_en": "Which empire was the Byzantine Empire's main rival around the birth of Islam?",
    "answers_tr": ["Roma", "Sasani", "Hun", "Osmanlı"],
    "answers_en": ["Rome", "Sassanid", "Hun", "Ottoman"],
    "correct": 1
  },
  {
    "question_tr": "Küba Füze Krizi hangi iki ülke arasında yaşanmıştır?",
    "question_en": "Which two countries were involved in the Cuban Missile Crisis?",
    "answers_tr": ["ABD ve Almanya", "ABD ve Küba", "ABD ve SSCB", "SSCB ve İngiltere"],
    "answers_en": ["USA and Germany", "USA and Cuba", "USA and USSR", "USSR and UK"],
    "correct": 2
  },
  {
    "question_tr": "Hititlerin başkenti neresiydi?",
    "question_en": "What was the capital of the Hittite Empire?",
    "answers_tr": ["Efes", "Ankara", "Hattuşaş", "Troya"],
    "answers_en": ["Ephesus", "Ankara", "Hattusa", "Troy"],
    "correct": 2
  },
  {
    "question_tr": "Birleşmiş Milletler hangi yıl kurulmuştur?",
    "question_en": "In what year was the United Nations founded?",
    "answers_tr": ["1919", "1945", "1939", "1951"],
    "answers_en": ["1919", "1945", "1939", "1951"],
    "correct": 1
  },
  {
    "question_tr": "Osmanlı Devleti'ni sona erdiren antlaşma hangisidir?",
    "question_en": "Which treaty marked the end of the Ottoman Empire?",
    "answers_tr": ["Lozan Antlaşması", "Mondros Ateşkesi", "Sevr Antlaşması", "Mudanya Ateşkesi"],
    "answers_en": ["Treaty of Lausanne", "Armistice of Mudros", "Treaty of Sèvres", "Armistice of Mudanya"],
    "correct": 2
  },
  {
    "question_tr": "Tarihteki ilk medeniyetlerden biri olan Sümerler hangi bölgede yaşamıştır?",
    "question_en": "Where did the Sumerians, one of the earliest civilizations, live?",
    "answers_tr": ["Mısır", "Anadolu", "Mezopotamya", "İran"],
    "answers_en": ["Egypt", "Anatolia", "Mesopotamia", "Iran"],
    "correct": 2
  },
  {
    "question_tr": "Roma İmparatorluğu'nun resmi dini haline gelen din hangisidir?",
    "question_en": "Which religion became the official religion of the Roman Empire?",
    "answers_tr": ["Musevilik", "Hristiyanlık", "İslam", "Paganizm"],
    "answers_en": ["Judaism", "Christianity", "Islam", "Paganism"],
    "correct": 1
  },
  {
    "question_tr": "İlk Türk alfabesi olarak bilinen alfabe hangisidir?",
    "question_en": "What is the name of the first known Turkish alphabet?",
    "answers_tr": ["Latin", "Göktürk", "Arap", "Uygur"],
    "answers_en": ["Latin", "Göktürk", "Arabic", "Uyghur"],
    "correct": 1
  },
  {
    "question_tr": "Avrupa’da Reform hareketlerinin en çok yayıldığı ülke hangisidir?",
    "question_en": "Which country saw the widest spread of the Reformation in Europe?",
    "answers_tr": ["İngiltere", "Almanya", "Fransa", "İtalya"],
    "answers_en": ["England", "Germany", "France", "Italy"],
    "correct": 1
  },
  {
    "question_tr": "Tarihte bilinen ilk kadın hükümdar kimdir?",
    "question_en": "Who is known as the first female ruler in history?",
    "answers_tr": ["I. Elizabeth", "Cleopatra", "Tomris Hatun", "Hatshepsut"],
    "answers_en": ["Elizabeth I", "Cleopatra", "Tomyris", "Hatshepsut"],
    "correct": 3
  },
  {
    "question_tr": "İlk Çağ’da Anadolu’da para hangi medeniyet tarafından kullanılmaya başlanmıştır?",
    "question_en": "Which civilization first used money in Ancient Anatolia?",
    "answers_tr": ["Hititler", "Lidyalılar", "Frigler", "Urartular"],
    "answers_en": ["Hittites", "Lydians", "Phrygians", "Urartians"],
    "correct": 1
  },
  {
    "question_tr": "Hangi Osmanlı padişahı halifelik unvanını almıştır?",
    "question_en": "Which Ottoman sultan assumed the title of caliph?",
    "answers_tr": ["Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "Fatih Sultan Mehmet", "II. Abdülhamit"],
    "answers_en": ["Selim I", "Suleiman the Magnificent", "Mehmed the Conqueror", "Abdulhamid II"],
    "correct": 0
  },
  {
    "question_tr": "Roma’daki meşhur Colosseum ne amaçla kullanılmıştır?",
    "question_en": "What was the purpose of the Colosseum in Rome?",
    "answers_tr": ["Saray", "Tapınak", "Tiyatro", "Gladyatör dövüşleri"],
    "answers_en": ["Palace", "Temple", "Theatre", "Gladiator fights"],
    "correct": 3
  },
  {
    "question_tr": "Osmanlı'da ilk anayasayı hazırlayan padişah kimdir?",
    "question_en": "Which sultan prepared the first constitution in the Ottoman Empire?",
    "answers_tr": ["II. Mahmut", "I. Abdülmecid", "II. Abdülhamit", "I. Murat"],
    "answers_en": ["Mahmud II", "Abdulmejid I", "Abdulhamid II", "Murad I"],
    "correct": 2
  },
  {
    "question_tr": "Hristiyanlığın doğduğu bölge neresidir?",
    "question_en": "Where did Christianity originate?",
    "answers_tr": ["İtalya", "Anadolu", "Filistin", "Yunanistan"],
    "answers_en": ["Italy", "Anatolia", "Palestine", "Greece"],
    "correct": 2
  },
  {
    "question_tr": "İlk insan fosilleri hangi kıtada bulunmuştur?",
    "question_en": "On which continent were the earliest human fossils found?",
    "answers_tr": ["Asya", "Avrupa", "Afrika", "Amerika"],
    "answers_en": ["Asia", "Europe", "Africa", "America"],
    "correct": 2
  },
  {
    "question_tr": "Mısır'da mumyalama işleminin temel amacı nedir?",
    "question_en": "What was the main purpose of mummification in Egypt?",
    "answers_tr": ["Koku yaymamak", "Vücudu korumak", "Estetik", "Tıp eğitimi"],
    "answers_en": ["To avoid smell", "To preserve the body", "Aesthetic reasons", "Medical training"],
    "correct": 1
  },
  {
    "question_tr": "Amerikan İç Savaşı'nın temel nedeni neydi?",
    "question_en": "What was the main cause of the American Civil War?",
    "answers_tr": ["Vergiler", "Toprak anlaşmazlıkları", "Kölelik", "Dış politika"],
    "answers_en": ["Taxes", "Land disputes", "Slavery", "Foreign policy"],
    "correct": 2
  }
];

const advancedQuestions = [
  
  {
    "question_tr": "Sanayi Devrimi'nin İngiltere'de başlamasının en önemli nedeni nedir?",
    "question_en": "What was the main reason the Industrial Revolution began in England?",
    "answers_tr": ["Sömürgelerin olmaması", "Nüfusun az olması", "Doğal kaynak zenginliği", "Demokrasinin yaygınlığı"],
    "answers_en": ["Lack of colonies", "Low population", "Abundance of natural resources", "Widespread democracy"],
    "correct": 2
  },
  {
    "question_tr": "Soğuk Savaş döneminde 'Demir Perde' terimi neyi ifade eder?",
    "question_en": "What did the term 'Iron Curtain' refer to during the Cold War?",
    "answers_tr": ["Sovyet silah teknolojisi", "Avrupa'daki komünist-faşist ayrımı", "Doğu ve Batı Avrupa arasındaki bölünme", "NATO-SSCB antlaşması"],
    "answers_en": ["Soviet weapon technology", "Communist-fascist divide in Europe", "Division between Eastern and Western Europe", "NATO-USSR treaty"],
    "correct": 2
  },
  {
    "question_tr": "Magna Carta’nın İngiliz tarihinde önemi nedir?",
    "question_en": "What is the significance of the Magna Carta in English history?",
    "answers_tr": ["Parlamentonun kurulması", "Kralın yetkilerinin sınırlandırılması", "Sömürgelerin genişlemesi", "İngiltere'nin birleşmesi"],
    "answers_en": ["Establishment of Parliament", "Limitation of royal power", "Expansion of colonies", "Unification of England"],
    "correct": 1
  },
  {
    "question_tr": "Haçlı Seferlerinin Avrupa üzerindeki en kalıcı etkisi nedir?",
    "question_en": "What was the most lasting effect of the Crusades on Europe?",
    "answers_tr": ["Nüfus artışı", "Ticaret yollarının kapanması", "Doğu ile kültürel etkileşim", "Feodalizmin güçlenmesi"],
    "answers_en": ["Population growth", "Closure of trade routes", "Cultural interaction with the East", "Strengthening of feudalism"],
    "correct": 2
  },
  {
    "question_tr": "Amerikan Bağımsızlık Bildirgesi'nin temel felsefi dayanağı nedir?",
    "question_en": "What is the main philosophical basis of the U.S. Declaration of Independence?",
    "answers_tr": ["Katoliklik", "Mutlak monarşi", "Aydınlanma düşüncesi", "Feodal gelenekler"],
    "answers_en": ["Catholicism", "Absolute monarchy", "Enlightenment thought", "Feudal traditions"],
    "correct": 2
  },
  {
    "question_tr": "Meiji Restorasyonu’nun Japonya üzerindeki en önemli etkisi nedir?",
    "question_en": "What was the major impact of the Meiji Restoration on Japan?",
    "answers_tr": ["Feodalizmin güçlenmesi", "İzole bir yapıya dönüş", "Sanayileşmenin hızlanması", "Tarım ekonomisinin baskın hale gelmesi"],
    "answers_en": ["Strengthening of feudalism", "Return to isolation", "Rapid industrialization", "Dominance of agricultural economy"],
    "correct": 2
  },
  {
    "question_tr": "Berlin Duvarı'nın yıkılması neyi simgeler?",
    "question_en": "What does the fall of the Berlin Wall symbolize?",
    "answers_tr": ["Sosyalizmin güçlenmesi", "Batı bloğunun çöküşü", "Soğuk Savaş'ın sonu", "Almanya'nın bölünmesi"],
    "answers_en": ["Strengthening of socialism", "Collapse of the Western bloc", "End of the Cold War", "Division of Germany"],
    "correct": 2
  },
  {
    "question_tr": "1789 Fransız Devrimi sonucunda ortaya çıkan fikirlerden hangisi yaygınlaşmıştır?",
    "question_en": "Which idea became widespread after the 1789 French Revolution?",
    "answers_tr": ["Mutlakiyetçilik", "Milliyetçilik", "Feodalizm", "Dini otorite"],
    "answers_en": ["Absolutism", "Nationalism", "Feudalism", "Religious authority"],
    "correct": 1
  },
  {
    "question_tr": "Wilson İlkeleri'nin amacı neydi?",
    "question_en": "What was the main aim of Wilson's Fourteen Points?",
    "answers_tr": ["Almanya'ya yaptırım uygulamak", "Avrupa'da sömürgecilik kurmak", "Kalıcı barışı sağlamak", "SSCB'yi çevrelemek"],
    "answers_en": ["Sanction Germany", "Establish colonialism in Europe", "Ensure lasting peace", "Contain the USSR"],
    "correct": 2
  },
  {
    "question_tr": "İlk modern anayasaya sahip ülke hangisidir?",
    "question_en": "Which country had the first modern constitution?",
    "answers_tr": ["ABD", "Fransa", "İngiltere", "Almanya"],
    "answers_en": ["USA", "France", "England", "Germany"],
    "correct": 0
  },
  {
    "question_tr": "Truman Doktrini'nin temel amacı nedir?",
    "question_en": "What was the main goal of the Truman Doctrine?",
    "answers_tr": ["Sömürgeciliği desteklemek", "Komünizmin yayılmasını önlemek", "Almanya'yı birleştirmek", "Çin'i desteklemek"],
    "answers_en": ["Support colonialism", "Prevent the spread of communism", "Unify Germany", "Support China"],
    "correct": 1
  },
  {
    "question_tr": "Saltanatın kaldırılması hangi yılda gerçekleşmiştir?",
    "question_en": "In which year was the Ottoman sultanate abolished?",
    "answers_tr": ["1920", "1921", "1922", "1923"],
    "answers_en": ["1920", "1921", "1922", "1923"],
    "correct": 2
  },
  {
    "question_tr": "İkinci Dünya Savaşı sonrası Almanya nasıl bir yapıya büründü?",
    "question_en": "What was Germany's status after World War II?",
    "answers_tr": ["Federasyon oldu", "İkiye bölündü", "Monarşiye döndü", "Tarafsız ülke oldu"],
    "answers_en": ["Became a federation", "Divided into two", "Returned to monarchy", "Became neutral"],
    "correct": 1
  },
  {
    "question_tr": "İngiliz Parlamentosu’nun iki kanadı nelerdir?",
    "question_en": "What are the two chambers of the British Parliament?",
    "answers_tr": ["Alt Meclis ve Senato", "Lordlar Kamarası ve Avam Kamarası", "Millet Meclisi ve Lordlar Meclisi", "Avam Meclisi ve Asiller Meclisi"],
    "answers_en": ["Lower House and Senate", "House of Lords and House of Commons", "National Assembly and Lords", "Commons and Nobles"],
    "correct": 1
  },
  {
    "question_tr": "Orta Çağ’da skolastik düşünce hangi kurum tarafından desteklenmiştir?",
    "question_en": "Which institution supported scholasticism in the Middle Ages?",
    "answers_tr": ["Krallıklar", "Üniversiteler", "Kilise", "Loncalar"],
    "answers_en": ["Kingdoms", "Universities", "Church", "Guilds"],
    "correct": 2
  },
  {
    "question_tr": "Tanzimat Fermanı’nın ilan edilmesindeki temel amaç nedir?",
    "question_en": "What was the main aim of the Tanzimat Edict?",
    "answers_tr": ["Padişahı güçlendirmek", "Avrupa’yı taklit etmek", "Devleti modernleştirmek", "Yeni toprak kazanmak"],
    "answers_en": ["Strengthen the sultan", "Imitate Europe", "Modernize the state", "Gain new territories"],
    "correct": 2
  },
  {
    "question_tr": "Amerikan iç savaşı sonrası kölelik hangi belge ile kaldırılmıştır?",
    "question_en": "Which document abolished slavery after the American Civil War?",
    "answers_tr": ["Bağımsızlık Bildirgesi", "Emancipation Proclamation", "Bill of Rights", "Gettysburg Konuşması"],
    "answers_en": ["Declaration of Independence", "Emancipation Proclamation", "Bill of Rights", "Gettysburg Address"],
    "correct": 1
  },
  {
    "question_tr": "Osmanlı Devleti'nin 1876 Anayasası hangi gelişmenin sonucudur?",
    "question_en": "The 1876 Ottoman Constitution was a result of which development?",
    "answers_tr": ["Tanzimat", "Islahat", "Meşrutiyet", "Hicaz Demiryolu"],
    "answers_en": ["Tanzimat", "Islahat", "Constitutional Monarchy", "Hejaz Railway"],
    "correct": 2
  },
  {
    "question_tr": "İlk Çağ’da yazının bulunmasının en önemli etkisi nedir?",
    "question_en": "What was the main impact of the invention of writing in Ancient times?",
    "answers_tr": ["Ekonomiyi canlandırdı", "Dinlerin yayılmasını sağladı", "Tarihi devirlerin başlamasını sağladı", "Göçleri hızlandırdı"],
    "answers_en": ["Boosted the economy", "Spread religions", "Started historical ages", "Accelerated migrations"],
    "correct": 2
  },
  {
    "question_tr": "Avrupa’daki Reform hareketlerinin sonucu olarak ne olmuştur?",
    "question_en": "What resulted from the Reformation movements in Europe?",
    "answers_tr": ["Katolikliğin güçlenmesi", "Protestanlığın ortaya çıkması", "Skolastik düşüncenin yayılması", "Ortodoksluğun sona ermesi"],
    "answers_en": ["Strengthening of Catholicism", "Emergence of Protestantism", "Spread of scholasticism", "End of Orthodoxy"],
    "correct": 1
  },
  {
    "question_tr": "Kavimler Göçü’nün Avrupa üzerindeki etkilerinden biri nedir?",
    "question_en": "What was one effect of the Migration Period on Europe?",
    "answers_tr": ["Roma'nın güçlenmesi", "Feodalizmin başlaması", "Skolastik düşüncenin doğması", "İngiltere’nin kurulması"],
    "answers_en": ["Strengthening of Rome", "Beginning of feudalism", "Birth of scholasticism", "Formation of England"],
    "correct": 1
  },
  {
    "question_tr": "Sefarad Yahudileri hangi padişah döneminde Osmanlı’ya kabul edilmiştir?",
    "question_en": "During which sultan’s reign were the Sephardic Jews accepted into the Ottoman Empire?",
    "answers_tr": ["Yavuz Sultan Selim", "II. Bayezid", "Kanuni Sultan Süleyman", "I. Murad"],
    "answers_en": ["Selim I", "Bayezid II", "Suleiman the Magnificent", "Murad I"],
    "correct": 1
  },
  {
    "question_tr": "İlk Çağ’da en gelişmiş denizci uygarlık hangisidir?",
    "question_en": "Which was the most advanced seafaring civilization in Ancient times?",
    "answers_tr": ["Hititler", "Asurlular", "Fenikeliler", "Urartular"],
    "answers_en": ["Hittites", "Assyrians", "Phoenicians", "Urartians"],
    "correct": 2
  },
    {
    "question_tr": "Rönesans hareketleri Avrupa'da hangi alanın gelişmesini hızlandırmıştır?",
    "question_en": "The Renaissance accelerated the development of which field in Europe?",
    "answers_tr": ["Tarım", "Askeri taktikler", "Bilim ve sanat", "Sömürgecilik"],
    "answers_en": ["Agriculture", "Military tactics", "Science and art", "Colonialism"],
    "correct": 2
  },
  {
    "question_tr": "İkinci Meşrutiyet'in ilan edilmesinde hangi grubun etkisi büyüktür?",
    "question_en": "Which group's influence was significant in the proclamation of the Second Constitutional Era?",
    "answers_tr": ["Yeniçeriler", "İttihat ve Terakki Cemiyeti", "Divan üyeleri", "Osmanlı halkı"],
    "answers_en": ["Janissaries", "Committee of Union and Progress", "Divan members", "Ottoman people"],
    "correct": 1
  },
  {
    "question_tr": "Avrupa’da 'Yeni Çağ' hangi olayla başlamıştır?",
    "question_en": "Which event marks the beginning of the 'Modern Age' in Europe?",
    "answers_tr": ["Fransız Devrimi", "İstanbul’un Fethi", "Rönesans", "Sanayi Devrimi"],
    "answers_en": ["French Revolution", "Conquest of Constantinople", "Renaissance", "Industrial Revolution"],
    "correct": 1
  },
  {
    "question_tr": "Marshall Planı'nın amacı neydi?",
    "question_en": "What was the main goal of the Marshall Plan?",
    "answers_tr": ["SSCB'yi işgal etmek", "Avrupa'yı komünizmden uzak tutmak", "Almanya'yı bölmek", "Asya'yı kalkındırmak"],
    "answers_en": ["Invade USSR", "Keep Europe away from communism", "Divide Germany", "Develop Asia"],
    "correct": 1
  },
  {
    "question_tr": "İlk yazılı antlaşma olarak kabul edilen Kadeş Antlaşması kimler arasında imzalanmıştır?",
    "question_en": "Who signed the earliest known written treaty, the Treaty of Kadesh?",
    "answers_tr": ["Hititler ve Mısırlılar", "Urartular ve Sümerler", "Asurlular ve Elamlar", "Frigler ve Lidyalılar"],
    "answers_en": ["Hittites and Egyptians", "Urartians and Sumerians", "Assyrians and Elamites", "Phrygians and Lydians"],
    "correct": 0
  },
  {
    "question_tr": "Osmanlı’da ilk kez halkın yönetime katıldığı rejim aşağıdakilerden hangisidir?",
    "question_en": "Which regime first allowed public participation in governance in the Ottoman Empire?",
    "answers_tr": ["Saltanat", "Meşrutiyet", "Teokratik düzen", "Mutlak monarşi"],
    "answers_en": ["Sultanate", "Constitutional monarchy", "Theocratic rule", "Absolute monarchy"],
    "correct": 1
  },
  {
    "question_tr": "İtalya'nın siyasi birliğini kurmasında en çok etkili olan lider kimdir?",
    "question_en": "Who was the most influential leader in unifying Italy?",
    "answers_tr": ["Napolyon", "Garibaldi", "Bismarck", "Mussolini"],
    "answers_en": ["Napoleon", "Garibaldi", "Bismarck", "Mussolini"],
    "correct": 1
  },
  {
    "question_tr": "İlk çağda parayı icat eden medeniyet hangisidir?",
    "question_en": "Which ancient civilization invented money?",
    "answers_tr": ["Asurlular", "Sümerler", "Lidyalılar", "Mısırlılar"],
    "answers_en": ["Assyrians", "Sumerians", "Lydians", "Egyptians"],
    "correct": 2
  },
  {
    "question_tr": "İngiltere'de 1688'de yaşanan 'Şanlı Devrim' sonucu ne olmuştur?",
    "question_en": "What was the result of the 'Glorious Revolution' in England in 1688?",
    "answers_tr": ["Cumhuriyet ilan edildi", "Katoliklik yasaklandı", "Parlamenter sistem güçlendi", "İngiltere ikiye bölündü"],
    "answers_en": ["Republic declared", "Catholicism banned", "Parliamentary system strengthened", "England divided"],
    "correct": 2
  },
  {
    "question_tr": "Osmanlı'da ilk nüfus sayımı hangi padişah döneminde yapılmıştır?",
    "question_en": "During whose reign was the first census conducted in the Ottoman Empire?",
    "answers_tr": ["II. Mahmud", "I. Abdülhamid", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman"],
    "answers_en": ["Mahmud II", "Abdul Hamid I", "Selim I", "Suleiman the Magnificent"],
    "correct": 0
  },
  {
    "question_tr": "Soğuk Savaş döneminde Bağlantısızlar Hareketi'nin amacı neydi?",
    "question_en": "What was the goal of the Non-Aligned Movement during the Cold War?",
    "answers_tr": ["SSCB'yi desteklemek", "NATO’ya katılmak", "Her iki bloktan da bağımsız kalmak", "ABD'ye karşı savaşmak"],
    "answers_en": ["Support the USSR", "Join NATO", "Remain independent of both blocs", "Fight the USA"],
    "correct": 2
  },
  {
    "question_tr": "Sümerler'in tarih için en önemli katkısı nedir?",
    "question_en": "What is the most important contribution of the Sumerians to history?",
    "answers_tr": ["Çömlekçilik", "Tekerlek", "Yazı", "Takvim"],
    "answers_en": ["Pottery", "Wheel", "Writing", "Calendar"],
    "correct": 2
  },
  {
    "question_tr": "Berlin Kongresi (1884-85) neyi düzenlemiştir?",
    "question_en": "What was organized at the Berlin Conference (1884-85)?",
    "answers_tr": ["Balkan sınırları", "Afrika’nın paylaşımı", "Asya'nın sömürgeleşmesi", "Orta Doğu petrol paylaşımı"],
    "answers_en": ["Balkan borders", "Partition of Africa", "Colonization of Asia", "Middle East oil distribution"],
    "correct": 1
  },
  {
    "question_tr": "İngiltere'de Sanayi Devrimi’nin başlamasında aşağıdakilerden hangisi en az etkilidir?",
    "question_en": "Which of the following had the least influence on the start of the Industrial Revolution in England?",
    "answers_tr": ["Maden kaynakları", "Bilimsel gelişmeler", "Koloni gelirleri", "Kıtlık ve açlık"],
    "answers_en": ["Mineral resources", "Scientific developments", "Colonial income", "Famine and hunger"],
    "correct": 3
  },
  {
    "question_tr": "Osmanlı Devleti'nde Batı tarzı eğitim ilk kez hangi alanda başlamıştır?",
    "question_en": "In which field did Western-style education first begin in the Ottoman Empire?",
    "answers_tr": ["Din", "Askeriye", "Tıp", "Edebiyat"],
    "answers_en": ["Religion", "Military", "Medicine", "Literature"],
    "correct": 1
  },
  {
    "question_tr": "İlk Çağ'da Mezopotamya'nın verimli olması hangi gelişmeye yol açmıştır?",
    "question_en": "What did Mesopotamia's fertility in Ancient times lead to?",
    "answers_tr": ["Denizciliğin gelişmesine", "Tarım topluluklarının oluşmasına", "Göçebe yaşamın yayılmasına", "Savaşların azalmasına"],
    "answers_en": ["Advancement of seafaring", "Formation of agricultural societies", "Spread of nomadic life", "Reduction of wars"],
    "correct": 1
  },
  {
    "question_tr": "İkinci Dünya Savaşı'nın Pasifik Cephesi'nde ABD’nin üstünlüğünü sağlayan olay hangisidir?",
    "question_en": "Which event gave the USA an advantage in the Pacific Front during WWII?",
    "answers_tr": ["Hiroşima’nın bombalanması", "Midway Muharebesi", "Pearl Harbor saldırısı", "Japonya'nın teslim olması"],
    "answers_en": ["Bombing of Hiroshima", "Battle of Midway", "Attack on Pearl Harbor", "Surrender of Japan"],
    "correct": 1
  },
  {
    "question_tr": "Orta Çağ Avrupa’sında skolastik düşünce neye dayanıyordu?",
    "question_en": "What was scholastic thought in Medieval Europe based on?",
    "answers_tr": ["Deney", "Mantık", "Dinî otorite", "Bilimsel yöntem"],
    "answers_en": ["Experiment", "Logic", "Religious authority", "Scientific method"],
    "correct": 2
  },
  {
    "question_tr": "Mustafa Kemal Atatürk'ün Samsun’a çıkış tarihi nedir?",
    "question_en": "What is the date of Mustafa Kemal Atatürk's arrival in Samsun?",
    "answers_tr": ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"],
    "answers_en": ["19 May 1919", "23 April 1920", "29 October 1923", "30 August 1922"],
    "correct": 0
  },
  {
    "question_tr": "Roma İmparatorluğu ikiye ne zaman ayrılmıştır?",
    "question_en": "When was the Roman Empire divided into two?",
    "answers_tr": ["313", "395", "476", "1453"],
    "answers_en": ["313", "395", "476", "1453"],
    "correct": 1
  },
  {
    "question_tr": "Ünlü 'Yurtta sulh, cihanda sulh' sözü kime aittir?",
    "question_en": "Who said the famous phrase 'Peace at home, peace in the world'?",
    "answers_tr": ["İsmet İnönü", "Winston Churchill", "Mustafa Kemal Atatürk", "Abraham Lincoln"],
    "answers_en": ["Ismet Inonu", "Winston Churchill", "Mustafa Kemal Atatürk", "Abraham Lincoln"],
    "correct": 2
  },
  {
    "question_tr": "Reform hareketleri öncelikle hangi alanda başlamıştır?",
    "question_en": "In which area did the Reformation movements primarily begin?",
    "answers_tr": ["Eğitim", "Din", "Ekonomi", "Sanat"],
    "answers_en": ["Education", "Religion", "Economy", "Art"],
    "correct": 1
  },
  {
    "question_tr": "İlk Çağ’da ticaret kolonileri kuran uygarlık hangisidir?",
    "question_en": "Which ancient civilization established trade colonies?",
    "answers_tr": ["Mısırlılar", "Fenikeliler", "Sümerler", "Hititler"],
    "answers_en": ["Egyptians", "Phoenicians", "Sumerians", "Hittites"],
    "correct": 1
  },
  {
    "question_tr": "Wilson İlkeleri'nin Osmanlı ile ilgili maddesi neyi öngörüyordu?",
    "question_en": "What did Wilson's principle regarding the Ottoman Empire propose?",
    "answers_tr": ["Osmanlı'nın topraklarını genişletmesi", "Azınlıkların haklarının korunması", "Saltanatın güçlendirilmesi", "İngiltere'nin manda yönetimi kurması"],
    "answers_en": ["Expansion of Ottoman lands", "Protection of minority rights", "Strengthening the sultanate", "British mandate rule"],
    "correct": 1
  }
];


const finalQuestions = [
  {
    "question_tr": "Bizans İmparatorluğu döneminde 532'de çıkan Nika Ayaklanması kime karşı yapılmıştır?",
    "question_en": "Against whom was the Nika Revolt in the Byzantine Empire in 532 directed?",
    "answers_tr": ["I. Konstantin", "Justinianus", "Herakleios", "II. Theodosius"],
    "answers_en": ["Constantine I", "Justinian I", "Heraclius", "Theodosius II"],
    "correct": 1
  },
  {
    "question_tr": "Abbasi Halifesi Memun’un kurduğu ve birçok bilim adamının yer aldığı önemli kurum hangisidir?",
    "question_en": "Which important institution was founded by Abbasid Caliph Al-Ma'mun and housed many scholars?",
    "answers_tr": ["El Ezher Üniversitesi", "Beytülhikme", "Medresetü’z-Zehra", "Endülüs Akademisi"],
    "answers_en": ["Al-Azhar University", "Bayt al-Hikma", "Medresetü’z-Zehra", "Andalusian Academy"],
    "correct": 1
  },
  {
    "question_tr": "İlk Çağ’da Hammurabi Kanunları'nın amacı neydi?",
    "question_en": "What was the purpose of Hammurabi's Code in the Ancient Age?",
    "answers_tr": ["Köleliği yasallaştırmak", "Tarımı teşvik etmek", "Adaleti sağlamak", "Dinî kuralları yaymak"],
    "answers_en": ["Legalize slavery", "Encourage agriculture", "Establish justice", "Spread religious rules"],
    "correct": 2
  },
  {
    "question_tr": "Osmanlı’da Tanzimat Fermanı hangi padişah döneminde ilan edilmiştir?",
    "question_en": "During which sultan’s reign was the Tanzimat Edict proclaimed in the Ottoman Empire?",
    "answers_tr": ["II. Mahmud", "Abdülmecid", "Abdülaziz", "I. Mahmud"],
    "answers_en": ["Mahmud II", "Abdulmejid", "Abdulaziz", "Mahmud I"],
    "correct": 1
  },
  {
    "question_tr": "Tarihte ilk defa 'ikili yönetim' sistemini uygulayan Türk devleti hangisidir?",
    "question_en": "Which Turkic state was the first in history to implement the 'dual rule' system?",
    "answers_tr": ["Hunlar", "Göktürkler", "Uygurlar", "Akhunlar"],
    "answers_en": ["Huns", "Göktürks", "Uyghurs", "Hephthalites"],
    "correct": 1
  },
  {
    "question_tr": "Viyana Kongresi'nin ana amacı neydi?",
    "question_en": "What was the main goal of the Congress of Vienna?",
    "answers_tr": ["Sömürge paylaşımı", "Avrupa'da monarşiyi yeniden kurmak", "Sanayi devrimini yaymak", "Fransız İhtilali'ni desteklemek"],
    "answers_en": ["Colonial division", "Restore monarchy in Europe", "Spread the industrial revolution", "Support French Revolution"],
    "correct": 1
  },
  {
    "question_tr": "İlk Türk matbaası kim tarafından ve hangi yılda kurulmuştur?",
    "question_en": "Who founded the first Turkish printing press and in which year?",
    "answers_tr": ["Ali Kuşçu - 1600", "Takiyüddin - 1570", "İbrahim Müteferrika - 1727", "Katip Çelebi - 1650"],
    "answers_en": ["Ali Kuşçu - 1600", "Taqi al-Din - 1570", "İbrahim Müteferrika - 1727", "Kâtip Çelebi - 1650"],
    "correct": 2
  },
  {
    "question_tr": "Haçlı Seferleri sırasında kurulan Urfa Kontluğu hangi devlete aitti?",
    "question_en": "Which state established the County of Edessa during the Crusades?",
    "answers_tr": ["İngiltere", "Bizans", "Fransa", "Haçlılar"],
    "answers_en": ["England", "Byzantium", "France", "Crusaders"],
    "correct": 3
  },
  {
    "question_tr": "Çin kaynaklarında adı 'Avarlar' olarak geçen Türk topluluğu hangisidir?",
    "question_en": "Which Turkic group was referred to as 'Avars' in Chinese sources?",
    "answers_tr": ["Uygurlar", "Ak Hunlar", "Juan-Juanlar", "Kırgızlar"],
    "answers_en": ["Uyghurs", "Hephthalites", "Rourans", "Kyrgyz"],
    "correct": 2
  },
  {
    "question_tr": "Sasaniler ile Bizans arasında yapılan ve İslamiyet'in yayılmasını kolaylaştıran savaş hangisidir?",
    "question_en": "Which war between the Sassanids and Byzantines facilitated the spread of Islam?",
    "answers_tr": ["Kadisiye Savaşı", "Ninova Savaşı", "Bedir Savaşı", "Mekke'nin Fethi"],
    "answers_en": ["Battle of Qadisiyyah", "Battle of Nineveh", "Battle of Badr", "Conquest of Mecca"],
    "correct": 1
  },
  {
    "question_tr": "Anadolu Selçuklularında 'İkta Sistemi' hangi amaca hizmet ederdi?",
    "question_en": "What was the main function of the 'Iqtā system' in the Anatolian Seljuk state?",
    "answers_tr": ["Vergi toplamak", "Toprakların satışını sağlamak", "Asker yetiştirmek ve devlete yük olmamak", "Saray masraflarını karşılamak"],
    "answers_en": ["Tax collection", "Land sale", "Train soldiers and ease state burden", "Cover palace expenses"],
    "correct": 2
  },
  {
    "question_tr": "Osmanlı’da 'İltizam Sistemi' neyle ilgilidir?",
    "question_en": "What is the 'Iltizam System' in the Ottoman Empire related to?",
    "answers_tr": ["Eğitim", "Vergi toplama", "Tarikatlar", "Denizcilik"],
    "answers_en": ["Education", "Tax collection", "Religious orders", "Naval affairs"],
    "correct": 1
  },
  {
    "question_tr": "Kutsal Roma Germen İmparatorluğu’nun ilk imparatoru kimdir?",
    "question_en": "Who was the first emperor of the Holy Roman Empire?",
    "answers_tr": ["Frederick Barbarossa", "Charlemagne", "Otto I", "Maximilian I"],
    "answers_en": ["Frederick Barbarossa", "Charlemagne", "Otto I", "Maximilian I"],
    "correct": 2
  },
  {
    "question_tr": "Timur’un 1402 Ankara Savaşı sonrası Anadolu'da neden olduğu durum nedir?",
    "question_en": "What was the result in Anatolia after Timur’s victory in the Battle of Ankara in 1402?",
    "answers_tr": ["Osmanlı’nın topraklarını ikiye ayırdı", "Beyliklerin yeniden bağımsız olması", "Osmanlı'nın Hristiyanlaşması", "Osmanlı’nın deniz gücü arttı"],
    "answers_en": ["Ottomans were divided in two", "Beyliks regained independence", "Ottomans Christianized", "Ottoman navy strengthened"],
    "correct": 1
  },
  {
    "question_tr": "Endülüs Emevi Devleti’nin yıkılmasından sonra kurulan küçük Müslüman beyliklere ne ad verilir?",
    "question_en": "What were the small Muslim principalities called after the fall of the Umayyads of Andalusia?",
    "answers_tr": ["Mütevekkiller", "Endülüsler", "Taifalar", "Fatımiler"],
    "answers_en": ["Mutawakkils", "Andalusians", "Taifas", "Fatimids"],
    "correct": 2
  },
  {
    "question_tr": "Katolik Reformu’nu (Karşı Reform) başlatan ve Engizisyon Mahkemelerini kuran kurum hangisidir?",
    "question_en": "Which institution initiated the Catholic Reformation and established the Inquisition Courts?",
    "answers_tr": ["Cizvit Tarikatı", "Roma Senatosu", "Avignon Papalığı", "Doğu Ortodoks Kilisesi"],
    "answers_en": ["Jesuit Order", "Roman Senate", "Avignon Papacy", "Eastern Orthodox Church"],
    "correct": 0
  },
  {
    "question_tr": "Osmanlı'da 'Lale Devri' neyi sembolize eder?",
    "question_en": "What does the 'Tulip Era' symbolize in the Ottoman Empire?",
    "answers_tr": ["Savaş ve fetih", "Avrupa'yla etkileşim ve kültürel değişim", "Ekonomik kriz", "İsyan dönemi"],
    "answers_en": ["War and conquest", "European interaction and cultural change", "Economic crisis", "Era of rebellions"],
    "correct": 1
  },
  {
    "question_tr": "Tarih yazıcılığında 'annalistik' yöntem nedir?",
    "question_en": "What is the 'annalistic' method in historiography?",
    "answers_tr": ["Olayların yorumlanması", "Yıllara göre kronolojik yazım", "Kroniklerin şiirle anlatımı", "Mitolojik olaylara dayalı yazım"],
    "answers_en": ["Interpretation of events", "Chronological writing by years", "Poetic chronicling", "Mythology-based writing"],
    "correct": 1
  },
  {
    "question_tr": "İlk defa laik bir anayasa hangi devlette ilan edilmiştir?",
    "question_en": "Which state was the first to declare a secular constitution?",
    "answers_tr": ["Fransa", "Osmanlı", "Meksika", "Amerika Birleşik Devletleri"],
    "answers_en": ["France", "Ottoman Empire", "Mexico", "United States"],
    "correct": 2
  },
  {
    "question_tr": "Roma'da 'Pleb' kelimesi neyi ifade ederdi?",
    "question_en": "What did the term 'Pleb' refer to in Rome?",
    "answers_tr": ["Asiller", "Köleler", "Halk sınıfı", "Din adamları"],
    "answers_en": ["Nobility", "Slaves", "Common people", "Clergy"],
    "correct": 2
  },
  {
    "question_tr": "Yunan şehir devletleri arasında yapılan ve Atina'nın üstünlüğünü hedefleyen savaşlar hangileridir?",
    "question_en": "Which wars among Greek city-states aimed to establish Athenian dominance?",
    "answers_tr": ["Troya Savaşları", "Peloponez Savaşları", "Marathon Savaşı", "Delphi Savaşları"],
    "answers_en": ["Trojan Wars", "Peloponnesian Wars", "Battle of Marathon", "Delphi Wars"],
    "correct": 1
  },
  {
    "question_tr": "Osmanlı’da merkezi otoriteyi zayıflatan ve tımar sisteminin bozulmasına neden olan en büyük etken nedir?",
    "question_en": "What was the main factor that weakened central authority and disrupted the timar system in the Ottoman Empire?",
    "answers_tr": ["Celali İsyanları", "Kapıkulu Ocağı", "Deniz savaşları", "Medrese eğitimi"],
    "answers_en": ["Celali Rebellions", "Janissary Corps", "Naval wars", "Madrasah education"],
    "correct": 0
  },
  {
    "question_tr": "Doğu Roma’nın son imparatoru kimdir?",
    "question_en": "Who was the last emperor of the Eastern Roman Empire?",
    "answers_tr": ["I. Justinianus", "I. Konstantin", "XI. Konstantinos", "Teodora"],
    "answers_en": ["Justinian I", "Constantine I", "Constantine XI", "Theodora"],
    "correct": 2
  },
  {
    "question_tr": "1830 İhtilalleri sonucunda bağımsızlığını kazanan ilk Slav devleti hangisidir?",
    "question_en": "Which was the first Slavic state to gain independence after the 1830 revolutions?",
    "answers_tr": ["Bulgaristan", "Hırvatistan", "Sırbistan", "Polonya"],
    "answers_en": ["Bulgaria", "Croatia", "Serbia", "Poland"],
    "correct": 2
  },
  {
    "question_tr": "Roma Cumhuriyeti döneminde, senatoya karşı halkın çıkarlarını savunan görevlilere ne ad verilirdi?",
    "question_en": "In the Roman Republic, what were the officials called who represented the interests of the plebeians against the Senate?",
    "answers_tr": ["Pretor", "Edil", "Tribün", "Konsül"],
    "answers_en": ["Praetor", "Aedile", "Tribune", "Consul"],
    "correct": 2
  },
  {
    "question_tr": "Ortaçağ Avrupası'nda, skolastik düşüncenin temellerini atan filozof kimdir?",
    "question_en": "Who is the philosopher credited with laying the foundations of scholasticism in Medieval Europe?",
    "answers_tr": ["Thomas Aquinas", "Boethius", "Augustinus", "Anselmus"],
    "answers_en": ["Thomas Aquinas", "Boethius", "Augustine", "Anselm"],
    "correct": 3
  },
  {
    "question_tr": "Harsha'nın Hindistan'da hüküm sürdüğü dönem hangi dinî ve kültürel özelliklerle bilinir?",
    "question_en": "Which religious and cultural features characterize the reign of Harsha in India?",
    "answers_tr": ["İslam'ın yayılması", "Budizm'in zirveye ulaşması ve Çin'le diplomasi", "Hindu kast sisteminin kaldırılması", "Hristiyanlığın etkisi"],
    "answers_en": ["Spread of Islam", "Buddhism reaching its peak and diplomacy with China", "Abolition of Hindu caste system", "Christian influence"],
    "correct": 1
  },
  {
    "question_tr": "İslam tarihinde Mu'tezile mezhebinin etkisi en çok hangi Abbasî halifesi döneminde hissedilmiştir?",
    "question_en": "During which Abbasid caliph's reign was the Mu'tazilite school most influential?",
    "answers_tr": ["Harun Reşid", "Me'mun", "Mutasım", "Müstansır"],
    "answers_en": ["Harun al-Rashid", "Al-Ma'mun", "Al-Mu'tasim", "Al-Mustansir"],
    "correct": 1
  },
  {
    "question_tr": "Hannibal Barca'nın İkinci Pön Savaşı'ndaki en büyük stratejik başarısı nedir?",
    "question_en": "What was Hannibal Barca’s greatest strategic achievement during the Second Punic War?",
    "answers_tr": ["Roma ile barış imzalamak", "Alpler'i geçerek Roma'ya yaklaşmak", "İspanya'yı fethetmek", "Afrika'ya sefer düzenlemek"],
    "answers_en": ["Signing peace with Rome", "Crossing the Alps to approach Rome", "Conquering Spain", "Launching a campaign to Africa"],
    "correct": 1
  },
  {
    "question_tr": "Mısır'da Amarna Dönemi olarak bilinen dönemi başlatan firavun kimdir?",
    "question_en": "Which pharaoh initiated the Amarna Period in Egypt?",
    "answers_tr": ["Ramses II", "Tutankhamun", "Akhenaton", "Seti I"],
    "answers_en": ["Ramses II", "Tutankhamun", "Akhenaten", "Seti I"],
    "correct": 2
  },
  {
    "question_tr": "Orta Asya'da Maniheizm’i devlet dini ilan eden ilk Türk devleti hangisidir?",
    "question_en": "Which was the first Turkic state in Central Asia to declare Manichaeism as the state religion?",
    "answers_tr": ["Göktürkler", "Uygurlar", "Hazarlar", "Kimekler"],
    "answers_en": ["Göktürks", "Uyghurs", "Khazars", "Kimeks"],
    "correct": 1
  },
  {
    "question_tr": "Paleolitik çağda insanların kullandığı ilk sanat biçimi nedir?",
    "question_en": "What was the first form of art used by humans during the Paleolithic Age?",
    "answers_tr": ["Heykel", "Seramik", "Duvar resimleri", "Müzik aletleri"],
    "answers_en": ["Sculpture", "Pottery", "Cave paintings", "Musical instruments"],
    "correct": 2
  },
  {
    "question_tr": "Ortaçağ İslam dünyasında optik üzerine çığır açan 'Kitab el-Menazır' adlı eserin yazarı kimdir?",
    "question_en": "Who is the author of the groundbreaking medieval Islamic work on optics, 'Kitab al-Manazir'?",
    "answers_tr": ["Farabi", "İbn Sina", "İbnü’l-Heysem", "Biruni"],
    "answers_en": ["Al-Farabi", "Avicenna", "Ibn al-Haytham", "Al-Biruni"],
    "correct": 2
  },
  {
    "question_tr": "Antik Mezopotamya’da Sümerlerde 'Ziggurat'lar ne amaçla inşa edilirdi?",
    "question_en": "For what purpose were ziggurats built in ancient Sumerian civilization?",
    "answers_tr": ["Depo", "Tapınak", "Kral mezarı", "Okul"],
    "answers_en": ["Storage", "Temple", "Royal tomb", "School"],
    "correct": 1
  },
  {
    "question_tr": "Osmanlı'da Şeyhülislamın fetvalarına dayalı olarak yayımlanan devlet kararlarına ne ad verilirdi?",
    "question_en": "What were the state decisions called that were based on the Şeyhülislam's fatwas in the Ottoman Empire?",
    "answers_tr": ["Buyruk", "Berat", "Ferman", "Kazaskername"],
    "answers_en": ["Order", "Patent", "Decree", "Judge's Edict"],
    "correct": 2
  },
  {
    "question_tr": "Eski Çin'de kullanılan 'Mandate of Heaven' kavramı neyi ifade ederdi?",
    "question_en": "What did the 'Mandate of Heaven' represent in ancient China?",
    "answers_tr": ["Tanrıların kralı cezalandırma hakkı", "Kralların ölümsüzlüğü", "Halkın dini görevleri", "Askeri stratejiler"],
    "answers_en": ["Gods' right to punish the king", "Immortality of kings", "People’s religious duties", "Military strategies"],
    "correct": 0
  },
  {
    "question_tr": "İlk defa modern anlamda diplomasi uygulayan İtalyan düşünür kimdir?",
    "question_en": "Which Italian thinker is credited with practicing diplomacy in its modern form for the first time?",
    "answers_tr": ["Pico della Mirandola", "Dante", "Niccolò Machiavelli", "Boccaccio"],
    "answers_en": ["Pico della Mirandola", "Dante", "Niccolò Machiavelli", "Boccaccio"],
    "correct": 2
  },
  {
    "question_tr": "Vikinglerin 10. yüzyılda kurduğu ve İslam topraklarıyla ticaret yapan Rus prensliği hangisidir?",
    "question_en": "Which Rus principality founded by Vikings in the 10th century traded with Islamic lands?",
    "answers_tr": ["Novgorod", "Kiev Knezliği", "Moskova Dükalığı", "Litvanya Birliği"],
    "answers_en": ["Novgorod", "Kievan Rus", "Duchy of Moscow", "Lithuanian Union"],
    "correct": 1
  },
  {
    "question_tr": "İlk tarihçi olarak kabul edilen ve 'Tarihler' adlı eseri yazan kişi kimdir?",
    "question_en": "Who is considered the first historian and wrote the work called 'Histories'?",
    "answers_tr": ["Tukididis", "Plutarkhos", "Herodot", "Strabon"],
    "answers_en": ["Thucydides", "Plutarch", "Herodotus", "Strabo"],
    "correct": 2
  },
  {
    "question_tr": "Afrika kıtasında yazılı anayasa ile kurulan ilk bağımsız ülke hangisidir?",
    "question_en": "Which was the first independent African country established with a written constitution?",
    "answers_tr": ["Nijerya", "Gana", "Liberya", "Sudan"],
    "answers_en": ["Nigeria", "Ghana", "Liberia", "Sudan"],
    "correct": 2
  },
  {
    "question_tr": "Fransız Aydınlanmasının doğrudan etkisiyle yayımlanan ünlü ansiklopedi projesi kim tarafından başlatıldı?",
    "question_en": "Who initiated the famous encyclopedia project influenced directly by the French Enlightenment?",
    "answers_tr": ["Voltaire", "Diderot", "Rousseau", "Montesquieu"],
    "answers_en": ["Voltaire", "Diderot", "Rousseau", "Montesquieu"],
    "correct": 1
  },
  {
    "question_tr": "Bizans İmparatorluğu’nun 'ikonoklazm' politikası neyi hedeflemiştir?",
    "question_en": "What was the aim of the 'iconoclasm' policy in the Byzantine Empire?",
    "answers_tr": ["Putperestliğe geri dönmek", "İkonaların yasaklanması", "İslam’la uzlaşma", "Kilisenin güçlendirilmesi"],
    "answers_en": ["Return to paganism", "Ban on icons", "Reconciliation with Islam", "Strengthening the Church"],
    "correct": 1
  },
  {
    "question_tr": "Roma'nın doğu ve batı olarak ikiye ayrılması hangi imparator döneminde gerçekleşmiştir?",
    "question_en": "Under which emperor did the division of the Roman Empire into East and West occur?",
    "answers_tr": ["Diocletianus", "Nero", "Constantinus", "Justinianus"],
    "answers_en": ["Diocletian", "Nero", "Constantine", "Justinian"],
    "correct": 0
  },
  {
    "question_tr": "Büyük Selçuklu veziri Nizamülmülk’ün siyasetname adlı eseri ne amaçla yazılmıştır?",
    "question_en": "For what purpose was Nizam al-Mulk’s book 'Siyasatnama' written in the Great Seljuk Empire?",
    "answers_tr": ["Dini kurallar öğretmek", "Beylerin eğitimi", "Devlet yönetimi için öğütler vermek", "Askeri taktikler öğretmek"],
    "answers_en": ["Teach religious rules", "Train beys", "Provide advice on statecraft", "Teach military tactics"],
    "correct": 2
  },
  {
    "question_tr": "Mısır'daki İskenderiye Kütüphanesi hangi antik hükümdar döneminde kurulmuştur?",
    "question_en": "Under which ancient ruler was the Library of Alexandria established in Egypt?",
    "answers_tr": ["Sezar", "Büyük İskender", "Ptolemaios I", "Kleopatra"],
    "answers_en": ["Caesar", "Alexander the Great", "Ptolemy I", "Cleopatra"],
    "correct": 2
  },
  {
    "question_tr": "Amerikan Bağımsızlık Savaşı’na ilham veren temel felsefi akım hangisidir?",
    "question_en": "Which philosophical movement inspired the American War of Independence?",
    "answers_tr": ["Romantizm", "Empirizm", "Aydınlanma", "Skolastik"],
    "answers_en": ["Romanticism", "Empiricism", "Enlightenment", "Scholasticism"],
    "correct": 2
  },
  {
    "question_tr": "1215 yılında Magna Carta’yı imzalayan İngiliz kralı kimdir?",
    "question_en": "Which English king signed the Magna Carta in 1215?",
    "answers_tr": ["John", "Henry II", "Richard I", "Edward I"],
    "answers_en": ["John", "Henry II", "Richard I", "Edward I"],
    "correct": 0
  },
  {
    "question_tr": "İkinci Dünya Savaşı sırasında Nazi Almanyası’nın Sovyetler Birliği’ne saldırı planına ne ad verilmiştir?",
    "question_en": "What was the name of Nazi Germany’s plan to invade the Soviet Union during WWII?",
    "answers_tr": ["Deniz Aslanı Harekâtı", "Barbarossa Harekâtı", "Merkür Harekâtı", "Seelöwe Harekâtı"],
    "answers_en": ["Operation Sea Lion", "Operation Barbarossa", "Operation Mercury", "Operation Seelöwe"],
    "correct": 1
  }
];




// Kullanıcının seçtiği dil
const currentLang = localStorage.getItem('language') || 'tr';

// Soru dizisini seçilen dile göre dönüştür
function getLocalizedQuestions(questions, lang) {
  return questions.map(q => ({
    question: lang === 'en' ? q.question_en : q.question_tr,
    answers: lang === 'en' ? q.answers_en : q.answers_tr,
    correct: q.correct,
    youtubeLink: q.youtubeLink || null,
    image: q.image || null,
    audio: q.audio || null,
  }));
}

// Her havuzdan 5 soru seç
const randomFirst5 = getRandomSubset(getLocalizedQuestions(imageQuestions, currentLang), 5);
const randomSecond5 = getRandomSubset(getLocalizedQuestions(advancedQuestions, currentLang), 5);
const randomThird5 = getRandomSubset(getLocalizedQuestions(finalQuestions, currentLang), 5);

const allQuestions = [
  ...randomFirst5,
  ...randomSecond5,
  ...randomThird5,
];

let currentQuestionIndex = 0;
let quizOver = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const progressContainer = document.getElementById("question-progress");
const mediaContainer = document.getElementById("media-container");

let ytPlayer = null;
let ytPlayerReady = false;

// YouTube API yükle
(function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);
})();

function onYouTubeIframeAPIReady() {
  ytPlayerReady = true;
  showQuestion();
}

startQuiz();

function startQuiz() {
  generateProgressBoxes();
  if (ytPlayerReady) {
    showQuestion();
  }
}

function generateProgressBoxes() {
  progressContainer.innerHTML = '';
  for (let i = 0; i < 15; i++) {
    const box = document.createElement('div');
    box.classList.add('progress-box');
    if (i < 5) box.style.backgroundColor = 'gray';
    else if (i < 10) box.style.backgroundColor = 'purple';
    else box.style.backgroundColor = 'yellow';
    box.textContent = (i + 1);
    progressContainer.appendChild(box);
  }
}

function showQuestion() {
  nextBtn.disabled = true;
  nextBtn.style.display = "none";
  nextBtn.textContent = currentLang === 'en' ? "Next" : "Sonraki";
  mediaContainer.innerHTML = "";
  answersEl.innerHTML = "";
  quizOver = false;

  if (currentQuestionIndex >= allQuestions.length) return;

  const question = allQuestions[currentQuestionIndex];
  questionEl.textContent = question.question;

  // YouTube video varsa ve player hazırsa göster
  if (question.youtubeLink && ytPlayerReady) {
    if (!ytPlayer) {
      const playerDiv = document.createElement('div');
      playerDiv.id = "youtube-player";
      mediaContainer.appendChild(playerDiv);

      ytPlayer = new YT.Player('youtube-player', {
        height: '300',
        width: '100%',
        videoId: question.youtubeLink,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
          fs: 0
        },
        events: {
          'onReady': (event) => {
            event.target.stopVideo();
          }
        }
      });

      createYouTubeControls();
    } else {
      ytPlayer.loadVideoById(question.youtubeLink);
      ytPlayer.stopVideo();
    }
  } else {
    if (ytPlayer) {
      ytPlayer.stopVideo();
      mediaContainer.innerHTML = "";
      ytPlayer = null;
      removeYouTubeControls();
    }
    if (question.image) {
      const img = document.createElement("img");
      img.src = question.image;
      img.alt = currentLang === 'en' ? "Question Image" : "Soru Görseli";
      img.style.maxWidth = "100%";
      mediaContainer.appendChild(img);
    } else if (question.audio) {
      const audio = document.createElement("audio");
      audio.src = question.audio;
      audio.controls = true;
      mediaContainer.appendChild(audio);
    }
  }

  question.answers.forEach((answer, index) => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(btn, index, question.correct));
    answersEl.appendChild(btn);
  });

  updateProgressHighlight();
}

function createYouTubeControls() {
  if (document.getElementById("yt-controls")) return;

  const controlsDiv = document.createElement("div");
  controlsDiv.id = "yt-controls";
  controlsDiv.style.marginTop = "10px";

  const back10Btn = document.createElement("button");
  back10Btn.textContent = "⏪ 10s";
  back10Btn.style.marginRight = "10px";
  back10Btn.addEventListener("click", () => {
    if (!ytPlayer) return;
    const currentTime = ytPlayer.getCurrentTime();
    ytPlayer.seekTo(Math.max(0, currentTime - 10), true);
  });
  controlsDiv.appendChild(back10Btn);

  const playPauseBtn = document.createElement("button");
  playPauseBtn.id = "yt-play-pause";
  playPauseBtn.textContent = "▶️";
  playPauseBtn.style.marginRight = "10px";
  controlsDiv.appendChild(playPauseBtn);

  const forward10Btn = document.createElement("button");
  forward10Btn.textContent = "10s ⏩";
  forward10Btn.style.marginRight = "10px";
  forward10Btn.addEventListener("click", () => {
    if (!ytPlayer) return;
    const currentTime = ytPlayer.getCurrentTime();
    const duration = ytPlayer.getDuration();
    ytPlayer.seekTo(Math.min(duration, currentTime + 10), true);
  });
  controlsDiv.appendChild(forward10Btn);

  const volumeControl = document.createElement("input");
  volumeControl.id = "yt-volume";
  volumeControl.type = "range";
  volumeControl.min = 0;
  volumeControl.max = 100;
  volumeControl.value = 100;
  controlsDiv.appendChild(volumeControl);

  mediaContainer.appendChild(controlsDiv);

  playPauseBtn.addEventListener("click", () => {
    if (!ytPlayer) return;
    const playerState = ytPlayer.getPlayerState();
    if (playerState === YT.PlayerState.PLAYING) {
      ytPlayer.pauseVideo();
      playPauseBtn.textContent = "▶️";
    } else {
      ytPlayer.playVideo();
      playPauseBtn.textContent = "⏸️";
    }
  });

  volumeControl.addEventListener("input", () => {
    if (!ytPlayer) return;
    ytPlayer.setVolume(volumeControl.value);
  });
}

function removeYouTubeControls() {
  const controls = document.getElementById("yt-controls");
  if (controls) controls.remove();
}

function selectAnswer(selectedBtn, index, correctIndex) {
  if (quizOver) return;

  const allAnswers = document.querySelectorAll(".answer");
  allAnswers.forEach(btn => btn.classList.remove("selected", "correct", "wrong"));

  if (index === correctIndex) {
    selectedBtn.classList.add("correct");
    questionEl.textContent = currentLang === 'en' ? "Correct! You can proceed to the next question." : "Doğru! Sonraki soruya geçebilirsin.";
    nextBtn.disabled = false;
    nextBtn.style.display = "inline-block";
  } else {
    selectedBtn.classList.add("wrong");
    questionEl.textContent = currentLang === 'en' ? "Wrong answer! You lost." : "Yanlış cevap! Kaybettiniz.";
    answersEl.innerHTML = "";
    nextBtn.textContent = currentLang === 'en' ? "Try Again" : "Tekrar Dene";
    nextBtn.disabled = false;
    nextBtn.style.display = "inline-block";
    quizOver = true;
    if (ytPlayer) ytPlayer.stopVideo();
  }
}

nextBtn.addEventListener("click", () => {
  if (quizOver) {
    location.reload();
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
      showQuestion();
    } else {
      questionEl.textContent = currentLang === 'en' ? "Quiz completed!" : "Quiz tamamlandı!";
      mediaContainer.innerHTML = "";
      answersEl.innerHTML = "";
      nextBtn.style.display = "none";
      if (ytPlayer) ytPlayer.stopVideo();
      quizOver = true;
    }
  }
});

function updateProgressHighlight() {
  const boxes = document.querySelectorAll(".progress-box");
  boxes.forEach((box, idx) => {
    box.classList.toggle("active", idx === currentQuestionIndex);
  });
}

// Sayfa yüklendiğinde arka plan ve yazı rengini ayarla
window.addEventListener('DOMContentLoaded', () => {
  const darkModeOn = localStorage.getItem('darkMode') === 'true';

  if (darkModeOn) {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';

    const header = document.querySelector('header');
    if (header) {
      header.style.backgroundColor = '#000';
      header.style.color = '#fff';
    }
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';

    const header = document.querySelector('header');
    if (header) {
      header.style.backgroundColor = '#fff';
      header.style.color = '#000';
    }
  }
});
