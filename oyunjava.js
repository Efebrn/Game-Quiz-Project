function getRandomSubset(array, size) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

const imageQuestions = [

  
  {
    "question": "Truva Savaşı hangi antik uygarlıklar arasında gerçekleşmiştir?",
    "question_en": "Between which ancient civilizations did the Trojan War occur?",
    "options": [
      {"tr": "Yunanlar ve Troyalılar", "en": "Greeks and Trojans"},
      {"tr": "Mısırlılar ve Hititler", "en": "Egyptians and Hittites"},
      {"tr": "Roma ve Kartaca", "en": "Rome and Carthage"},
      {"tr": "Persler ve Yunanlar", "en": "Persians and Greeks"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Orta Çağda haçlı seferlerinin amacı neydi?",
    "question_en": "What was the purpose of the Crusades in the Middle Ages?",
    "options": [
      {"tr": "Kutsal toprakları ele geçirmek", "en": "To capture the Holy Land"},
      {"tr": "Ticaret yollarını kontrol etmek", "en": "To control trade routes"},
      {"tr": "Yeni topraklar keşfetmek", "en": "To discover new lands"},
      {"tr": "Bilimsel gelişmeyi teşvik etmek", "en": "To promote scientific progress"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Amerikan Bağımsızlık Bildirgesi hangi yılda ilan edilmiştir?",
    "question_en": "In which year was the American Declaration of Independence proclaimed?",
    "options": [
      {"tr": "1776", "en": "1776"},
      {"tr": "1789", "en": "1789"},
      {"tr": "1801", "en": "1801"},
      {"tr": "1754", "en": "1754"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İkinci Dünya Savaşı'nın başlangıç nedeni nedir?",
    "question_en": "What was the cause of the start of World War II?",
    "options": [
      {"tr": "Almanya'nın Polonya'yı işgali", "en": "Germany's invasion of Poland"},
      {"tr": "Sırbistan'ın Avusturya'yı saldırması", "en": "Serbia attacking Austria"},
      {"tr": "Japonya'nın Çin'i işgali", "en": "Japan's invasion of China"},
      {"tr": "ABD'nin Pearl Harbor'a saldırısı", "en": "US attack on Pearl Harbor"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Kutsal Roma İmparatorluğu ne zaman sona erdi?",
    "question_en": "When did the Holy Roman Empire come to an end?",
    "options": [
      {"tr": "1806", "en": "1806"},
      {"tr": "1789", "en": "1789"},
      {"tr": "1815", "en": "1815"},
      {"tr": "1701", "en": "1701"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Büyük Fransız Devrimi'nin liderlerinden biri kimdir?",
    "question_en": "Who was one of the leaders of the French Revolution?",
    "options": [
      {"tr": "Maximilien Robespierre", "en": "Maximilien Robespierre"},
      {"tr": "Napolyon Bonapart", "en": "Napoleon Bonaparte"},
      {"tr": "Louis XVI", "en": "Louis XVI"},
      {"tr": "Georges Clemenceau", "en": "Georges Clemenceau"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Roma İmparatorluğu'nun resmi dili neydi?",
    "question_en": "What was the official language of the Roman Empire?",
    "options": [
      {"tr": "Latince", "en": "Latin"},
      {"tr": "Yunanca", "en": "Greek"},
      {"tr": "Arapça", "en": "Arabic"},
      {"tr": "İbranice", "en": "Hebrew"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Sanayi Devrimi hangi ülkede başlamıştır?",
    "question_en": "In which country did the Industrial Revolution begin?",
    "options": [
      {"tr": "İngiltere", "en": "England"},
      {"tr": "Fransa", "en": "France"},
      {"tr": "Almanya", "en": "Germany"},
      {"tr": "ABD", "en": "USA"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İstanbul'un adı Osmanlı döneminde ne olarak değiştirilmiştir?",
    "question_en": "What was Istanbul called during the Ottoman period?",
    "options": [
      {"tr": "Konstantinopolis", "en": "Constantinople"},
      {"tr": "Byzantion", "en": "Byzantium"},
      {"tr": "Ankara", "en": "Ankara"},
      {"tr": "Smyrna", "en": "Smyrna"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Moğol İmparatorluğu'nun en büyük hükümdarı kimdir?",
    "question_en": "Who was the greatest ruler of the Mongol Empire?",
    "options": [
      {"tr": "Cengiz Han", "en": "Genghis Khan"},
      {"tr": "Kubila Han", "en": "Kublai Khan"},
      {"tr": "Timur", "en": "Tamerlane"},
      {"tr": "Babür Şah", "en": "Babur"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Kuzey Amerika'yı keşfeden İspanyol kaşif kimdir?",
    "question_en": "Who was the Spanish explorer that discovered North America?",
    "options": [
      {"tr": "Hernán Cortés", "en": "Hernán Cortés"},
      {"tr": "Francisco Pizarro", "en": "Francisco Pizarro"},
      {"tr": "Juan Ponce de León", "en": "Juan Ponce de León"},
      {"tr": "Ferdinand Magellan", "en": "Ferdinand Magellan"}
    ],
    "correct_answer_index": 2
  },
  {
    "question": "İngilizler hangi savaşta Amerikan kolonilerine karşı kaybetmiştir?",
    "question_en": "In which war did the British lose to the American colonies?",
    "options": [
      {"tr": "İngiliz-Devrim Savaşı", "en": "English Civil War"},
      {"tr": "Fransız ve Hint Savaşı", "en": "French and Indian War"},
      {"tr": "Amerikan Bağımsızlık Savaşı", "en": "American War of Independence"},
      {"tr": "Yüz Yıl Savaşları", "en": "Hundred Years' War"}
    ],
    "correct_answer_index": 2
  },
  {
    "question": "Soğuk Savaş hangi iki ülke arasında yaşanmıştır?",
    "question_en": "Between which two countries was the Cold War fought?",
    "options": [
      {"tr": "ABD ve Sovyetler Birliği", "en": "USA and Soviet Union"},
      {"tr": "İngiltere ve Almanya", "en": "England and Germany"},
      {"tr": "Fransa ve İtalya", "en": "France and Italy"},
      {"tr": "Çin ve Japonya", "en": "China and Japan"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Piri Reis hangi alanda ünlüdür?",
    "question_en": "In which field is Piri Reis famous?",
    "options": [
      {"tr": "Haritacılık ve denizcilik", "en": "Cartography and navigation"},
      {"tr": "Askeri strateji", "en": "Military strategy"},
      {"tr": "Edebiyat", "en": "Literature"},
      {"tr": "Mimarlık", "en": "Architecture"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İslam dünyasında Altın Çağ hangi döneme denir?",
    "question_en": "What period is called the Golden Age in the Islamic world?",
    "options": [
      {"tr": "8-14. yüzyıllar", "en": "8th to 14th centuries"},
      {"tr": "5-7. yüzyıllar", "en": "5th to 7th centuries"},
      {"tr": "15-17. yüzyıllar", "en": "15th to 17th centuries"},
      {"tr": "17-19. yüzyıllar", "en": "17th to 19th centuries"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Hititler hangi bölgede yaşamıştır?",
    "question_en": "In which region did the Hittites live?",
    "options": [
      {"tr": "Anadolu", "en": "Anatolia"},
      {"tr": "Mısır", "en": "Egypt"},
      {"tr": "Mezopotamya", "en": "Mesopotamia"},
      {"tr": "Yunanistan", "en": "Greece"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Hristiyanlık hangi bölgede doğmuştur?",
    "question_en": "In which region was Christianity born?",
    "options": [
      {"tr": "Filistin", "en": "Palestine"},
      {"tr": "Roma", "en": "Rome"},
      {"tr": "Mısır", "en": "Egypt"},
      {"tr": "Suriye", "en": "Syria"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Emeviler hangi şehirde halifelik merkezi kurmuştur?",
    "question_en": "In which city did the Umayyads establish the caliphate center?",
    "options": [
      {"tr": "Şam", "en": "Damascus"},
      {"tr": "Bağdat", "en": "Baghdad"},
      {"tr": "Kudüs", "en": "Jerusalem"},
      {"tr": "Kahire", "en": "Cairo"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Rönesans hangi alanda büyük ilerlemeler sağlamıştır?",
    "question_en": "In which field did the Renaissance bring great advancements?",
    "options": [
      {"tr": "Sanat ve bilim", "en": "Art and science"},
      {"tr": "Askeri teknoloji", "en": "Military technology"},
      {"tr": "Tarım", "en": "Agriculture"},
      {"tr": "Denizcilik", "en": "Navigation"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
    "question_en": "Who was the founder of the Ottoman Empire?",
    "options": [
      {"tr": "Osman Gazi", "en": "Osman I"},
      {"tr": "Fatih Sultan Mehmet", "en": "Mehmed the Conqueror"},
      {"tr": "Yavuz Sultan Selim", "en": "Selim I"},
      {"tr": "Kanuni Sultan Süleyman", "en": "Suleiman the Magnificent"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Tarihte ilk yazılı kanunlar hangi uygarlığa aittir?",
    "question_en": "Which civilization created the first written laws in history?",
    "options": [
      {"tr": "Babil", "en": "Babylon"},
      {"tr": "Roma", "en": "Rome"},
      {"tr": "Mısır", "en": "Egypt"},
      {"tr": "Hititler", "en": "Hittites"}
    ],
    "correct_answer_index": 3
  },
  {
    "question": "II. Dünya Savaşı sonrası Almanya hangi ikiye bölündü?",
    "question_en": "After World War II, Germany was divided into which two parts?",
    "options": [
      {"tr": "Doğu Almanya ve Batı Almanya", "en": "East Germany and West Germany"},
      {"tr": "Kuzey Almanya ve Güney Almanya", "en": "North Germany and South Germany"},
      {"tr": "Almanya ve Avusturya", "en": "Germany and Austria"},
      {"tr": "Almanya ve Polonya", "en": "Germany and Poland"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Birinci Dünya Savaşı hangi yıl başladı?",
    "question_en": "In which year did World War I start?",
    "options": [
      {"tr": "1914", "en": "1914"},
      {"tr": "1918", "en": "1918"},
      {"tr": "1923", "en": "1923"},
      {"tr": "1905", "en": "1905"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Napolyon Bonapart hangi savaşta yenilmiştir?",
    "question_en": "In which battle was Napoleon Bonaparte defeated?",
    "options": [
      {"tr": "Waterloo Savaşı", "en": "Battle of Waterloo"},
      {"tr": "Trafalgar Savaşı", "en": "Battle of Trafalgar"},
      {"tr": "Austerlitz Savaşı", "en": "Battle of Austerlitz"},
      {"tr": "Leipzig Savaşı", "en": "Battle of Leipzig"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Magna Carta hangi ülkenin tarihinde önemli bir belgedir?",
    "question_en": "Magna Carta is an important document in the history of which country?",
    "options": [
      {"tr": "İngiltere", "en": "England"},
      {"tr": "Fransa", "en": "France"},
      {"tr": "İtalya", "en": "Italy"},
      {"tr": "Almanya", "en": "Germany"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Roma Cumhuriyeti ne zaman sona ermiştir?",
    "question_en": "When did the Roman Republic come to an end?",
    "options": [
      {"tr": "MÖ 27", "en": "27 BC"},
      {"tr": "MS 476", "en": "476 AD"},
      {"tr": "MÖ 44", "en": "44 BC"},
      {"tr": "MS 1453", "en": "1453 AD"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İslam peygamberi Hz. Muhammed hangi şehirde doğmuştur?",
    "question_en": "In which city was the Islamic prophet Muhammad born?",
    "options": [
      {"tr": "Mekke", "en": "Mecca"},
      {"tr": "Medine", "en": "Medina"},
      {"tr": "Kudüs", "en": "Jerusalem"},
      {"tr": "Şam", "en": "Damascus"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İlk medeniyetlerden biri olan Sümerler hangi bölgede yaşamıştır?",
    "question_en": "In which region did the Sumerians, one of the first civilizations, live?",
    "options": [
      {"tr": "Mezopotamya", "en": "Mesopotamia"},
      {"tr": "Nil Vadisi", "en": "Nile Valley"},
      {"tr": "Anadolu", "en": "Anatolia"},
      {"tr": "İndus Vadisi", "en": "Indus Valley"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Kuzey Afrika'da bir zamanlar büyük bir imparatorluk olan Kartaca'nın düşmanları kimlerdi?",
    "question_en": "Who were the enemies of Carthage, a great empire in North Africa?",
    "options": [
      {"tr": "Roma", "en": "Rome"},
      {"tr": "Mısır", "en": "Egypt"},
      {"tr": "Yunanistan", "en": "Greece"},
      {"tr": "Persler", "en": "Persians"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İlk yazıyı kim icat etmiştir?",
    "question_en": "Who invented the first writing system?",
    "options": [
      {"tr": "Sümerler", "en": "Sumerians"},
      {"tr": "Mısırlılar", "en": "Egyptians"},
      {"tr": "Fenikeliler", "en": "Phoenicians"},
      {"tr": "Yunanlar", "en": "Greeks"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Berlin Duvarı ne zaman yıkıldı?",
    "question_en": "When was the Berlin Wall torn down?",
    "options": [
      {"tr": "1989", "en": "1989"},
      {"tr": "1991", "en": "1991"},
      {"tr": "1980", "en": "1980"},
      {"tr": "1995", "en": "1995"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Meşrutiyet hangi ülkede ortaya çıkmıştır?",
    "question_en": "In which country did the Constitutional Monarchy (Meşrutiyet) emerge?",
    "options": [
      {"tr": "Osmanlı İmparatorluğu", "en": "Ottoman Empire"},
      {"tr": "Fransa", "en": "France"},
      {"tr": "Rusya", "en": "Russia"},
      {"tr": "İngiltere", "en": "England"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Mozaik sanatının en gelişmiş örnekleri hangi uygarlığa aittir?",
    "question_en": "The most developed examples of mosaic art belong to which civilization?",
    "options": [
      {"tr": "Bizans", "en": "Byzantine"},
      {"tr": "Roma", "en": "Roman"},
      {"tr": "Yunan", "en": "Greek"},
      {"tr": "Pers", "en": "Persian"}
    ],
    "correct_answer_index": 0
  }
  ,{
    "question": "Napolyon Bonapart hangi ülkeden gelmiştir?",
    "question_en": "Which country was Napoleon Bonaparte from?",
    "options": [
      {"tr": "İtalya", "en": "Italy"},
      {"tr": "Fransa", "en": "France"},
      {"tr": "İspanya", "en": "Spain"},
      {"tr": "Almanya", "en": "Germany"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "İslamiyet'in doğduğu şehir hangisidir?",
    "question_en": "In which city was Islam founded?",
    "options": [
      {"tr": "Medine", "en": "Medina"},
      {"tr": "Mekke", "en": "Mecca"},
      {"tr": "Kudüs", "en": "Jerusalem"},
      {"tr": "Şam", "en": "Damascus"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Kara Harp olarak bilinen savaş hangisidir?",
    "question_en": "Which war is known as the Crimean War?",
    "options": [
      {"tr": "Napolyon Savaşları", "en": "Napoleonic Wars"},
      {"tr": "Kırım Savaşı", "en": "Crimean War"},
      {"tr": "Birinci Dünya Savaşı", "en": "World War I"},
      {"tr": "İkinci Dünya Savaşı", "en": "World War II"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Magna Carta hangi yüzyılda imzalanmıştır?",
    "question_en": "In which century was the Magna Carta signed?",
    "options": [
      {"tr": "14. yüzyıl", "en": "14th century"},
      {"tr": "15. yüzyıl", "en": "15th century"},
      {"tr": "12. yüzyıl", "en": "12th century"},
      {"tr": "13. yüzyıl", "en": "13th century"}
    ],
    "correct_answer_index": 3
  },
  {
    "question": "Büyük İskender hangi bölgeyi fethetmiştir?",
    "question_en": "Which region did Alexander the Great conquer?",
    "options": [
      {"tr": "Pers İmparatorluğu", "en": "Persian Empire"},
      {"tr": "Mısır", "en": "Egypt"},
      {"tr": "Roma İmparatorluğu", "en": "Roman Empire"},
      {"tr": "Kartaca", "en": "Carthage"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Endüstri Devrimi'nin sonucu olarak ne ortaya çıktı?",
    "question_en": "What emerged as a result of the Industrial Revolution?",
    "options": [
      {"tr": "Feodalizm", "en": "Feudalism"},
      {"tr": "Kentleşme", "en": "Urbanization"},
      {"tr": "Orta Çağ", "en": "Middle Ages"},
      {"tr": "Kolonyalizm", "en": "Colonialism"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Atlantis efsanesi hangi kültüre aittir?",
    "question_en": "The legend of Atlantis belongs to which culture?",
    "options": [
      {"tr": "Mısır", "en": "Egyptian"},
      {"tr": "Roma", "en": "Roman"},
      {"tr": "Mezopotamya", "en": "Mesopotamian"},
      {"tr": "Yunan", "en": "Greek"}
    ],
    "correct_answer_index": 3
  },
  {
    "question": "Amerika kıtasını keşfeden kaşif kimdir?",
    "question_en": "Who was the explorer that discovered the Americas?",
    "options": [
      {"tr": "Vasco da Gama", "en": "Vasco da Gama"},
      {"tr": "Cristoforo Colombo", "en": "Christopher Columbus"},
      {"tr": "James Cook", "en": "James Cook"},
      {"tr": "Ferdinand Magellan", "en": "Ferdinand Magellan"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Orta Çağ'da feodal beyler neyi kontrol ederdi?",
    "question_en": "What did feudal lords control during the Middle Ages?",
    "options": [
      {"tr": "Kentleri", "en": "Cities"},
      {"tr": "Deniz yollarını", "en": "Sea routes"},
      {"tr": "Toprakları", "en": "Land"},
      {"tr": "Ticaret yollarını", "en": "Trade routes"}
    ],
    "correct_answer_index": 2
  },
  {
    "question": "Berlin Duvarı hangi yılda yıkılmıştır?",
    "question_en": "In which year was the Berlin Wall demolished?",
    "options": [
      {"tr": "1995", "en": "1995"},
      {"tr": "1985", "en": "1985"},
      {"tr": "1991", "en": "1991"},
      {"tr": "1989", "en": "1989"}
    ],
    "correct_answer_index": 3
  },
  {
    "question": "Rönesans hangi şehirde başlamıştır?",
    "question_en": "In which city did the Renaissance begin?",
    "options": [
      {"tr": "Roma", "en": "Rome"},
      {"tr": "Floransa", "en": "Florence"},
      {"tr": "Paris", "en": "Paris"},
      {"tr": "Venedik", "en": "Venice"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "İnka medeniyeti hangi kıtada yer alır?",
    "question_en": "On which continent was the Inca civilization located?",
    "options": [
      {"tr": "Avrupa", "en": "Europe"},
      {"tr": "Kuzey Amerika", "en": "North America"},
      {"tr": "Asya", "en": "Asia"},
      {"tr": "Güney Amerika", "en": "South America"}
    ],
    "correct_answer_index": 3
  },
  {
    "question": "Orta Çağ'da engizisyon ne amaçla kurulmuştur?",
    "question_en": "What was the purpose of the Inquisition in the Middle Ages?",
    "options": [
      {"tr": "Dini sapkınlıkları cezalandırmak", "en": "Punishing heresy"},
      {"tr": "Ekonomik reformlar", "en": "Economic reforms"},
      {"tr": "Ticaret anlaşmaları yapmak", "en": "Making trade agreements"},
      {"tr": "Bilimsel araştırmalar", "en": "Scientific research"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Hangi savaş Magna Carta'nın imzalanmasına yol açtı?",
    "question_en": "Which war led to the signing of the Magna Carta?",
    "options": [
      {"tr": "Yüz Yıl Savaşları", "en": "Hundred Years' War"},
      {"tr": "Barons' Savaşı", "en": "Barons' War"},
      {"tr": "İngiliz İç Savaşı", "en": "English Civil War"},
      {"tr": "Wars of the Roses", "en": "Wars of the Roses"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Kurtuluş Savaşı hangi devletlere karşı yapılmıştır?",
    "question_en": "Against which countries was the Turkish War of Independence fought?",
    "options": [
      {"tr": "Fransa ve İtalya", "en": "France and Italy"},
      {"tr": "Yunanistan ve İngiltere", "en": "Greece and England"},
      {"tr": "İtalya ve Almanya", "en": "Italy and Germany"},
      {"tr": "Sovyetler ve Almanya", "en": "Soviets and Germany"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Moğol İmparatorluğu'nun kurucusu kimdir?",
    "question_en": "Who was the founder of the Mongol Empire?",
    "options": [
      {"tr": "Timur", "en": "Tamerlane"},
      {"tr": "Cengiz Han", "en": "Genghis Khan"},
      {"tr": "Babür Şah", "en": "Babur"},
      {"tr": "Kubila Han", "en": "Kublai Khan"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "İlk modern anayasayı hangi ülke kabul etmiştir?",
    "question_en": "Which country adopted the first modern constitution?",
    "options": [
      {"tr": "ABD", "en": "USA"},
      {"tr": "Fransa", "en": "France"},
      {"tr": "İngiltere", "en": "England"},
      {"tr": "Rusya", "en": "Russia"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "Rönesansın en ünlü sanatçılarından biri kimdir?",
    "question_en": "Who is one of the most famous artists of the Renaissance?",
    "options": [
      {"tr": "Michelangelo", "en": "Michelangelo"},
      {"tr": "Leonardo da Vinci", "en": "Leonardo da Vinci"},
      {"tr": "Pablo Picasso", "en": "Pablo Picasso"},
      {"tr": "Vincent van Gogh", "en": "Vincent van Gogh"}
    ],
    "correct_answer_index": 1
  },
  {
    "question": "Hangi imparatorluk Moğollar tarafından yıkılmıştır?",
    "question_en": "Which empire was destroyed by the Mongols?",
    "options": [
      {"tr": "Abbasi İmparatorluğu", "en": "Abbasid Empire"},
      {"tr": "Bizans İmparatorluğu", "en": "Byzantine Empire"},
      {"tr": "Osmanlı İmparatorluğu", "en": "Ottoman Empire"},
      {"tr": "Roma İmparatorluğu", "en": "Roman Empire"}
    ],
    "correct_answer_index": 0
  },
  {
    "question": "İstanbul'un fethi hangi padişah döneminde gerçekleşti?",
    "question_en": "During whose reign was the conquest of Istanbul?",
    "options": [
      {"tr": "Yavuz Sultan Selim", "en": "Selim I"},
      {"tr": "Kanuni Sultan Süleyman", "en": "Suleiman the Magnificent"},
      {"tr": "Fatih Sultan Mehmet", "en": "Mehmed the Conqueror"},
      {"tr": "II. Abdülhamid", "en": "Abdulhamid II"}
    ],
    "correct_answer_index": 2
  }
]


const advancedQuestions = [
  {
    "question_tr": "The Elder Scrolls V: Skyrim oyununda hangi ırk büyüde uzmandır?",
    "question_en": "In The Elder Scrolls V: Skyrim, which race is specialized in magic?",
    "answers_tr": ["Altmer", "Nord", "Argonian", "Khajiit"],
    "answers_en": ["Altmer", "Nord", "Argonian", "Khajiit"],
    "correct": 0
  },
  {
    "question_tr": "Valorant oyununda hangi ajan bir iyileştirme yeteneğine sahiptir?",
    "question_en": "Which agent in Valorant has a healing ability?",
    "answers_tr": ["Sage", "Reyna", "Jett", "Breach"],
    "answers_en": ["Sage", "Reyna", "Jett", "Breach"],
    "correct": 0
  },
  {
    "question_tr": "Minecraft'ta Ender Dragon nerede bulunur?",
    "question_en": "Where is the Ender Dragon found in Minecraft?",
    "answers_tr": ["Nether", "Overworld", "End", "The Void"],
    "answers_en": ["Nether", "Overworld", "End", "The Void"],
    "correct": 2
  },
  {
    "question_tr": "The Witcher 3 oyununda Geralt hangi mesleğe sahiptir?",
    "question_en": "What is Geralt's profession in The Witcher 3?",
    "answers_tr": ["Büyücü", "Canavar Avcısı", "Demirci", "Şövalye"],
    "answers_en": ["Mage", "Monster Hunter", "Blacksmith", "Knight"],
    "correct": 1
  },
  {
    "question_tr": "Dark Souls oyununda oyuncunun seviyesini artırmak için hangi kaynak kullanılır?",
    "question_en": "What resource is used to level up in Dark Souls?",
    "answers_tr": ["Ruhlar", "Altın", "Kristaller", "Mana"],
    "answers_en": ["Souls", "Gold", "Crystals", "Mana"],
    "correct": 0
  },
  {
    "question_tr": "Minecraft'ta en çok kullanılan yapı bloğu hangisidir?",
    "question_en": "Which is the most commonly used building block in Minecraft?",
    "answers_tr": ["Taş", "Ahşap", "Toprak", "Cam"],
    "answers_en": ["Stone", "Wood", "Dirt", "Glass"],
    "correct": 1
  },
  {
    "question_tr": "Assassin's Creed Odyssey hangi medeniyette geçmektedir?",
    "question_en": "In which civilization is Assassin's Creed Odyssey set?",
    "answers_tr": ["Mısır", "Roma", "Yunan", "İskandinavya"],
    "answers_en": ["Egypt", "Rome", "Greece", "Scandinavia"],
    "correct": 2
  },
  {
    "question_tr": "League of Legends'ta 'Jungler' rolü ne yapar?",
    "question_en": "What does the 'Jungler' role do in League of Legends?",
    "answers_tr": ["Ormanı temizler ve takıma yardım eder", "Hasar verir", "Desteği sağlar", "Kuleleri savunur"],
    "answers_en": ["Clears jungle and assists team", "Deals damage", "Provides support", "Defends towers"],
    "correct": 0
  },
  {
    "question_tr": "Red Dead Redemption 2'nin yapımcısı hangi firmadır?",
    "question_en": "Which company developed Red Dead Redemption 2?",
    "answers_tr": ["Ubisoft", "Rockstar Games", "Bethesda", "Valve"],
    "answers_en": ["Ubisoft", "Rockstar Games", "Bethesda", "Valve"],
    "correct": 1
  },
  {
    "question_tr": "Overwatch oyununda hangi kahraman teleport yapabilir?",
    "question_en": "Which hero can teleport in Overwatch?",
    "answers_tr": ["Genji", "Reinhardt", "Symmetra", "Soldier: 76"],
    "answers_en": ["Genji", "Reinhardt", "Symmetra", "Soldier: 76"],
    "correct": 2
  },
  {
    "question_tr": "Minecraft'ta Nether Fortress ne işe yarar?",
    "question_en": "What is the purpose of the Nether Fortress in Minecraft?",
    "answers_tr": ["Ejderha avlamak", "Oyunu bitirmek için önemli kaynaklar bulmak", "Ev yapmak", "Oyuncu öldürmek"],
    "answers_en": ["To hunt the dragon", "To find important resources to finish the game", "To build a house", "To kill players"],
    "correct": 1
  },
  {
    "question_tr": "Metal Gear Solid oyununda Snake'in takma adı nedir?",
    "question_en": "What is Snake's nickname in Metal Gear Solid?",
    "answers_tr": ["Big Boss", "Solid Snake", "Venom Snake", "Liquid Snake"],
    "answers_en": ["Big Boss", "Solid Snake", "Venom Snake", "Liquid Snake"],
    "correct": 1
  },
  {
    "question_tr": "Resident Evil serisinde ana düşman genellikle nedir?",
    "question_en": "What is usually the main enemy in the Resident Evil series?",
    "answers_tr": ["Zombi", "Robot", "Uzaylı", "Hayalet"],
    "answers_en": ["Zombie", "Robot", "Alien", "Ghost"],
    "correct": 0
  },
  {
    "question_tr": "World of Warcraft oyununda hangi ırk Alliance tarafında değildir?",
    "question_en": "Which race is not part of the Alliance faction in World of Warcraft?",
    "answers_tr": ["Orc", "Human", "Dwarf", "Gnome"],
    "answers_en": ["Orc", "Human", "Dwarf", "Gnome"],
    "correct": 0
  },
  {
    "question_tr": "Halo oyun serisinde Master Chief'in tam adı nedir?",
    "question_en": "What is Master Chief's full name in the Halo series?",
    "answers_tr": ["John-117", "Marcus Fenix", "James Vega", "Alex Mason"],
    "answers_en": ["John-117", "Marcus Fenix", "James Vega", "Alex Mason"],
    "correct": 0
  },
  {
    "question_tr": "GTA V'de Franklin'in mesleği nedir?",
    "question_en": "What is Franklin's profession in GTA V?",
    "answers_tr": ["Polis", "Motosikletçi", "Galeri Çalışanı", "Çete üyesi"],
    "answers_en": ["Police Officer", "Motorcyclist", "Car Salesman", "Gang Member"],
    "correct": 2
  },
  {
    "question_tr": "The Legend of Zelda'da Link'in ana düşmanı kimdir?",
    "question_en": "Who is Link's main enemy in The Legend of Zelda?",
    "answers_tr": ["Ganondorf", "Bowser", "Ganon", "Zelda"],
    "answers_en": ["Ganondorf", "Bowser", "Ganon", "Zelda"],
    "correct": 0
  },
  {
    "question_tr": "Fortnite oyununda kaç oyuncu aynı anda mücadele eder?",
    "question_en": "How many players compete simultaneously in Fortnite?",
    "answers_tr": ["100", "50", "150", "200"],
    "answers_en": ["100", "50", "150", "200"],
    "correct": 0
  },
  {
    "question_tr": "Valorant oyununda hangi ajan ok kullanır?",
    "question_en": "Which agent uses a bow in Valorant?",
    "answers_tr": ["Raze", "Sova", "Killjoy", "Cypher"],
    "answers_en": ["Raze", "Sova", "Killjoy", "Cypher"],
    "correct": 1
  },
  {
    "question_tr": "Gears of War serisinde ana kahraman kimdir?",
    "question_en": "Who is the main hero in the Gears of War series?",
    "answers_tr": ["Marcus Fenix", "JD Fenix", "Dom Santiago", "Cole Train"],
    "answers_en": ["Marcus Fenix", "JD Fenix", "Dom Santiago", "Cole Train"],
    "correct": 0
  },
  {
    "question_tr": "League of Legends'ta 'Support' rolü genellikle ne yapar?",
    "question_en": "What does the 'Support' role usually do in League of Legends?",
    "answers_tr": ["Hasar verir", "Takımı korur", "Ormanı temizler", "Kule yıkar"],
    "answers_en": ["Deals damage", "Protects the team", "Clears jungle", "Destroys towers"],
    "correct": 1
  },
  {
    "question_tr": "Minecraft'ta Creeper ne yapar?",
    "question_en": "What does a Creeper do in Minecraft?",
    "answers_tr": ["Patlar", "Saldırır", "Şifa verir", "Kaçar"],
    "answers_en": ["Explodes", "Attacks", "Heals", "Runs away"],
    "correct": 0
  },
  {
    "question_tr": "Call of Duty: Warzone'da oyun modu nedir?",
    "question_en": "What is the game mode in Call of Duty: Warzone?",
    "answers_tr": ["Battle Royale", "MOBA", "RPG", "FPS Story"],
    "answers_en": ["Battle Royale", "MOBA", "RPG", "FPS Story"],
    "correct": 0
  },
  {
    "question_tr": "Among Us oyunundaki 'Imposter' ne yapar?",
    "question_en": "What does the 'Imposter' do in Among Us?",
    "answers_tr": ["Oyuncuları sabote eder", "Görev yapar", "Harita keşfeder", "Eşyaları toplar"],
    "answers_en": ["Sabotages players", "Does tasks", "Explores map", "Collects items"],
    "correct": 0
  },
  {
    "question_tr": "Assassin's Creed serisinde 'Animus' ne işe yarar?",
    "question_en": "What is the purpose of 'Animus' in the Assassin's Creed series?",
    "answers_tr": ["Geçmişi yaşatır", "Geleceği gösterir", "Savaşmayı öğretir", "Haritayı açar"],
    "answers_en": ["Allows reliving the past", "Shows the future", "Teaches fighting", "Reveals the map"],
    "correct": 0
  }
  ,{
    question_tr: "Resimdeki karakter kimdir?",
    question_en: "Who is the character in the picture?",
    image: "kolaysoruresim/samira.jpg",
    answers_tr: ["Jinx", "Ahri", "Samira", "Lux"],
    answers_en: ["Jinx", "Ahri", "Samira", "Lux"],
    correct: 2
  },
  {
    question_tr: "Resimdeki karakter hangi oyundan?",
    question_en: "Which game is the character in the picture from?",
    image: "kolaysoruresim/mercy.jpg",
    answers_tr: ["Overwatch", "Fortnite", "Apex Legends", "Valorant"],
    answers_en: ["Overwatch", "Fortnite", "Apex Legends", "Valorant"],
    correct: 0
  },
  {
    question_tr: "Resimdeki karakter kimdir?",
    question_en: "Who is the character in the picture?",
    image: "kolaysoruresim/ken.jpg",
    answers_tr: ["Chun-Li", "Yun", "Ken", "Ryu"],
    answers_en: ["Chun-Li", "Yun", "Ken", "Ryu"],
    correct: 2
  },
  {
    question_tr: "Resimdeki karakter hangi oyundandır?",
    question_en: "Which game is the character in the picture from?",
    image: "kolaysoruresim/neeko.jpg",
    answers_tr: ["League of Legends", "Smite", "Dota 2", "Heroes of the Storm"],
    answers_en: ["League of Legends", "Smite", "Dota 2", "Heroes of the Storm"],
    correct: 0
  },
  {
    question_tr: "Resimdeki karakterin adı nedir?",
    question_en: "What is the name of the character in the picture?",
    image: "kolaysoruresim/john.jpg",
    answers_tr: ["John", "Jake", "Jack", "Jill"],
    answers_en: ["John", "Jake", "Jack", "Jill"],
    correct: 0
  },
  {
    question_tr: "Resimdeki karakter hangi oyun serisindendir?",
    question_en: "Which game series is the character in the picture from?",
    image: "kolaysoruresim/sephiroth.jpg",
    answers_tr: ["Persona", "Final Fantasy", "Fire Emblem", "Tales of"],
    answers_en: ["Persona", "Final Fantasy", "Fire Emblem", "Tales of"],
    correct: 1
  }
  ,{
  question_tr: "Resimdeki karakter hangi oyunda bulunur?",
  question_en: "Which game does the character in the picture appear in?",
  image: "kolaysoruresim/era.jpg",
  answers_tr: ["Fortnite", "Valorant", "Overwatch", "Apex Legends"],
  answers_en: ["Fortnite", "Valorant", "Overwatch", "Apex Legends"],
  correct: 0
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/kayle.jpg",
  answers_tr: ["Sona", "Kayle", "Morgana", "Ahri"],
  answers_en: ["Sona", "Kayle", "Morgana", "Ahri"],
  correct: 1
},
{
  question_tr: "Resimdeki karakter hangi oyundan?",
  question_en: "Which game is the character in the picture from?",
  image: "kolaysoruresim/echo.jpg",
  answers_tr: ["Overwatch", "Valorant", "Apex Legends", "Paladins"],
  answers_en: ["Overwatch", "Valorant", "Apex Legends", "Paladins"],
  correct: 0
},
{
  question_tr: "Resimdeki karakter hangi oyundandır?",
  question_en: "Which game is the character in the picture from?",
  image: "kolaysoruresim/kaisa.jpg",
  answers_tr: ["Smite", "Dota 2", "League of Legends", "Heroes of the Storm"],
  answers_en: ["Smite", "Dota 2", "League of Legends", "Heroes of the Storm"],
  correct: 2
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/isaac.jpg",
  answers_tr: ["Doomguy", "Isaac Clarke", "Gordon Freeman", "Master Chief"],
  answers_en: ["Doomguy", "Isaac Clarke", "Gordon Freeman", "Master Chief"],
  correct: 1
},
{
  question_tr: "Resimdeki karakter hangi oyun serisinden?",
  question_en: "Which game series is the character in the picture from?",
  image: "kolaysoruresim/iso.jpg",
  answers_tr: ["Fortnite", "Apex Legends", "Valorant", "Overwatch"],
  answers_en: ["Fortnite", "Apex Legends", "Valorant", "Overwatch"],
  correct: 2
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/darius.jpg",
  answers_tr: ["Darius", "Tryndamere", "Garen", "Jarvan"],
  answers_en: ["Darius", "Tryndamere", "Garen", "Jarvan"],
  correct: 0
},
{
  question_tr: "Resimdeki karakter hangi oyundan?",
  question_en: "Which game is the character in the picture from?",
  image: "kolaysoruresim/tifa.jpg",
  answers_tr: ["Final Fantasy", "Fire Emblem", "Persona", "Tales of"],
  answers_en: ["Final Fantasy", "Fire Emblem", "Persona", "Tales of"],
  correct: 0
},
{
  question_tr: "Resimdeki karakterin adı nedir?",
  question_en: "What is the name of the character in the picture?",
  image: "kolaysoruresim/phoenix.jpg",
  answers_tr: ["Phoenix", "Sova", "Valor", "Breach"],
  answers_en: ["Phoenix", "Sova", "Valor", "Breach"],
  correct: 0
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/dva.jpg",
  answers_tr: ["Brigitte", "Zarya", "D.Va", "Mei"],
  answers_en: ["Brigitte", "Zarya", "D.Va", "Mei"],
  correct: 2
},
{
  question_tr: "Resimdeki karakter hangi oyunda bulunur?",
  question_en: "Which game does the character in the picture appear in?",
  image: "kolaysoruresim/miss.jpg",
  answers_tr: ["Smite", "Dota 2", "League of Legends", "Heroes of the Storm"],
  answers_en: ["Smite", "Dota 2", "League of Legends", "Heroes of the Storm"],
  correct: 2
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/kayn.jpg",
  answers_tr: ["Yasuo", "Akali", "Kayn", "Zed"],
  answers_en: ["Yasuo", "Akali", "Kayn", "Zed"],
  correct: 2
},
{
  question_tr: "Resimdeki karakter hangi oyundandır?",
  question_en: "Which game is the character in the picture from?",
  image: "kolaysoruresim/delsin.jpg",
  answers_tr: ["Life is Strange", "Infamous: Second Son", "Control", "Detroit: Become Human"],
  answers_en: ["Life is Strange", "Infamous: Second Son", "Control", "Detroit: Become Human"],
  correct: 1
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/amicia.jpg",
  answers_tr: ["Amicia", "Ellie", "Jodie", "Max"],
  answers_en: ["Amicia", "Ellie", "Jodie", "Max"],
  correct: 0
},
{
  question_tr: "Bu karakter hangi oyun serisinin kahramanıdır?",
  question_en: "Which game series is this character the hero of?",
  image: "kolaysoruresim/cole.jpg",
  answers_tr: ["Uncharted", "Infamous", "Tomb Raider", "The Last of Us"],
  answers_en: ["Uncharted", "Infamous", "Tomb Raider", "The Last of Us"],
  correct: 1
},
{
  question_tr: "Resimdeki karakter hangi oyundan?",
  question_en: "Which game is the character in the picture from?",
  image: "kolaysoruresim/arno.jpg",
  answers_tr: ["Assassin's Creed Unity", "Assassin's Creed Odyssey", "Assassin's Creed Valhalla", "Assassin's Creed III"],
  answers_en: ["Assassin's Creed Unity", "Assassin's Creed Odyssey", "Assassin's Creed Valhalla", "Assassin's Creed III"],
  correct: 0
},
{
  question_tr: "Bu karakter hangi oyunun ana kahramanıdır?",
  question_en: "Who is the main character of this game?",
  image: "kolaysoruresim/alan_wake.jpg",
  answers_tr: ["Alan Wake", "Quantum Break", "Max Payne", "Control"],
  answers_en: ["Alan Wake", "Quantum Break", "Max Payne", "Control"],
  correct: 0
},
{
  question_tr: "Resimdeki karakter hangi oyun serisindendir?",
  question_en: "Which game series is the character in the picture from?",
  image: "kolaysoruresim/keira.jpg",
  answers_tr: ["The Witcher", "Dragon Age", "Elden Ring", "GreedFall"],
  answers_en: ["The Witcher", "Dragon Age", "Elden Ring", "GreedFall"],
  correct: 0
},
{
  question_tr: "Resimdeki karakter kimdir?",
  question_en: "Who is the character in the picture?",
  image: "kolaysoruresim/samporter.jpg",
  answers_tr: ["Higgs", "Sam Porter", "Cliff", "Die-Hardman"],
  answers_en: ["Higgs", "Sam Porter", "Cliff", "Die-Hardman"],
  correct: 0
}



];

const finalQuestions = [{
    "question_tr": "Red Dead Redemption 2'de Guarma bölümünde Arthur ve arkadaşlarına yardım eden yerli direniş lideri kimdir?",
    "question_en": "In Red Dead Redemption 2, who is the native resistance leader that helps Arthur and his friends in the Guarma chapter?",
    "answers_tr": ["Leon Rojas", "Fidel Ramos", "Hercule Fontaine", "Javier Escuela"],
    "answers_en": ["Leon Rojas", "Fidel Ramos", "Hercule Fontaine", "Javier Escuela"],
    "correct": 0
  },
  {
    "question_tr": "Red Dead Redemption 2'de Micah Bell'in çete içindeki rolü nedir?",
    "question_en": "What is Micah Bell's role within the gang in Red Dead Redemption 2?",
    "answers_tr": ["Avcı", "Casus", "Hırsız", "Silah Ustası"],
    "answers_en": ["Hunter", "Spy", "Thief", "Gunsmith"],
    "correct": 1
  },
  {
    "question_tr": "Hitman: Absolution'da Diana Burnwood, hangi şehirde kaçırılır?",
    "question_en": "In Hitman: Absolution, in which city is Diana Burnwood kidnapped?",
    "answers_tr": ["Miami", "Chicago", "Las Vegas", "New York"],
    "answers_en": ["Miami", "Chicago", "Las Vegas", "New York"],
    "correct": 1
  },
  {
    "question_tr": "'The Legend of Zelda: Ocarina of Time'da, Link'in çocukken kullandığı kılıcın adı nedir?",
    "question_en": "In 'The Legend of Zelda: Ocarina of Time', what is the name of the sword Link uses as a child?",
    "answers_tr": ["Master Sword", "Biggoron's Sword", "Kokiri Kılıcı", "Dev Bıçağı"],
    "answers_en": ["Master Sword", "Biggoron's Sword", "Kokiri Sword", "Giant's Knife"],
    "correct": 2
  },
  {
    "question_tr": "'Dark Souls' serisinde, 'Anor Londo' şehri hangi iki önemli karakter tarafından korunmaktadır?",
    "question_en": "In the 'Dark Souls' series, which two important characters guard the city of Anor Londo?",
    "answers_tr": ["Solaire ve Oscar", "Ornstein ve Smough", "Gwyn ve Seath", "Artorias ve Ciaran"],
    "answers_en": ["Solaire and Oscar", "Ornstein and Smough", "Gwyn and Seath", "Artorias and Ciaran"],
    "correct": 1
  },
  {
    "question_tr": "Red Dead Redemption 2'de Guarma bölümünde Arthur ve arkadaşlarına yardım eden yerli direniş lideri kimdir?",
    "question_en": "In Red Dead Redemption 2, who is the native resistance leader that helps Arthur and his friends in the Guarma chapter?",
    "answers_tr": ["Leon Rojas", "Fidel Ramos", "Hercule Fontaine", "Javier Escuela"],
    "answers_en": ["Leon Rojas", "Fidel Ramos", "Hercule Fontaine", "Javier Escuela"],
    "correct": 0
  },
  {
    "question_tr": "Red Dead Redemption 2'de Micah Bell'in çete içindeki rolü nedir?",
    "question_en": "What is Micah Bell's role within the gang in Red Dead Redemption 2?",
    "answers_tr": ["Avcı", "Casus", "Hırsız", "Silah Ustası"],
    "answers_en": ["Hunter", "Spy", "Thief", "Gunsmith"],
    "correct": 1
  },
  {
    "question_tr": "Hitman: Absolution'da Diana Burnwood, hangi şehirde kaçırılır?",
    "question_en": "In Hitman: Absolution, in which city is Diana Burnwood kidnapped?",
    "answers_tr": ["Miami", "Chicago", "Las Vegas", "New York"],
    "answers_en": ["Miami", "Chicago", "Las Vegas", "New York"],
    "correct": 1
  },
  {
    "question_tr": "'The Legend of Zelda: Ocarina of Time'da, Link'in çocukken kullandığı kılıcın adı nedir?",
    "question_en": "In 'The Legend of Zelda: Ocarina of Time', what is the name of the sword Link uses as a child?",
    "answers_tr": ["Master Sword", "Biggoron's Sword", "Kokiri Kılıcı", "Dev Bıçağı"],
    "answers_en": ["Master Sword", "Biggoron's Sword", "Kokiri Sword", "Giant's Knife"],
    "correct": 2
  },
  {
    "question_tr": "'Dark Souls' serisinde, 'Anor Londo' şehri hangi iki önemli karakter tarafından korunmaktadır?",
    "question_en": "In the 'Dark Souls' series, which two important characters guard the city of Anor Londo?",
    "answers_tr": ["Solaire ve Oscar", "Ornstein ve Smough", "Gwyn ve Seath", "Artorias ve Ciaran"],
    "answers_en": ["Solaire and Oscar", "Ornstein and Smough", "Gwyn and Seath", "Artorias and Ciaran"],
    "correct": 1
  },
  {
    "question_tr": "'Deus Ex' serisinde, 2072 yılında geçen oyunda baş karakter JC Denton'un tam adı nedir?",
    "question_en": "What is the full name of the main character JC Denton in the 2072-set Deus Ex game?",
    "answers_tr": ["Jonathan Carl Denton", "John Christopher Denton", "Jacob Charles Denton", "James Calvin Denton"],
    "answers_en": ["Jonathan Carl Denton", "John Christopher Denton", "Jacob Charles Denton", "James Calvin Denton"],
    "correct": 1
  },
  {
    "question_tr": "'Bloodborne' oyununda, Oyunun başında yer alan ve oyuncunun geçiş yaptığı ilk alanın adı nedir?",
    "question_en": "In Bloodborne, what is the name of the first area the player accesses at the start of the game?",
    "answers_tr": ["Central Yharnam", "Old Yharnam", "Yasak Ormanlar", "Katedral Mahallesi"],
    "answers_en": ["Central Yharnam", "Old Yharnam", "Forbidden Woods", "Cathedral Ward"],
    "correct": 0
  },
  {
    "question_tr": "'Silent Hill 2' oyununda, James Sunderland'in aradığı kişi kimdir?",
    "question_en": "In Silent Hill 2, who is the person James Sunderland is searching for?",
    "answers_tr": ["Mary Sunderland", "Laura", "Angela Orosco", "Eddie Dombrowski"],
    "answers_en": ["Mary Sunderland", "Laura", "Angela Orosco", "Eddie Dombrowski"],
    "correct": 0
  },
  {
    "question_tr": "'Dark Souls' serisinde 'Lord of Cinder' unvanını alan ilk karakter kimdir?",
    "question_en": "Who is the first character to hold the title 'Lord of Cinder' in the Dark Souls series?",
    "answers_tr": ["Abysswalker Artorias", "Astora'dan Solaire", "Gwyn, Lord of Cinder", "Ornstein"],
    "answers_en": ["Artorias the Abysswalker", "Solaire of Astora", "Gwyn, Lord of Cinder", "Ornstein"],
    "correct": 2
  },
  {
    "question_tr": "'Bloodborne' oyununda 'The Hunter' hangi şehirde görev yapmaktadır?",
    "question_en": "In Bloodborne, in which city does 'The Hunter' operate?",
    "answers_tr": ["Novigrad", "Lothric", "Yharnam", "Skellige"],
    "answers_en": ["Novigrad", "Lothric", "Yharnam", "Skellige"],
    "correct": 2
  },
  {
    "question_tr": "'Dark Souls III' oyunundaki son boss kimdir?",
    "question_en": "Who is the final boss in Dark Souls III?",
    "answers_tr": ["Tanrıların Yiyicisi Aldrich", "Külün Ruhu", "Pontiff Sulyvahn", "Genç Prens Lothric"],
    "answers_en": ["Aldrich, Devourer of Gods", "Soul of Cinder", "Pontiff Sulyvahn", "Lothric, Younger Prince"],
    "correct": 1
  },
  {
    "question_tr": "'Call of Duty: Modern Warfare' (2019) oyununda 'Captain Price'ın tam adı nedir?",
    "question_en": "What is Captain Price's full name in Call of Duty: Modern Warfare (2019)?",
    "answers_tr": ["John Price", "Alex Price", "James Price", "Michael Price"],
    "answers_en": ["John Price", "Alex Price", "James Price", "Michael Price"],
    "correct": 0
  },
  {
    "question_tr": "'Dark Souls II' oyununda Majula kasabası hangi bölgeye bağlıdır?",
    "question_en": "In Dark Souls II, which region is Majula town located in?",
    "answers_tr": ["Drangleic", "Lordran", "Carim", "Anor Londo"],
    "answers_en": ["Drangleic", "Lordran", "Carim", "Anor Londo"],
    "correct": 0
  },
  {
    "question_tr": "'Metal Gear Solid' serisinin yaratıcısı kimdir?",
    "question_en": "Who is the creator of the Metal Gear Solid series?",
    "answers_tr": ["Hideo Kojima", "Shigeru Miyamoto", "Yu Suzuki", "Kazunori Yamauchi"],
    "answers_en": ["Hideo Kojima", "Shigeru Miyamoto", "Yu Suzuki", "Kazunori Yamauchi"],
    "correct": 0
  },
  {
    "question_tr": "'Deus Ex: Human Revolution' oyununda baş karakter Adam Jensen'in mesleği nedir?",
    "question_en": "What is the profession of Adam Jensen, the main character in Deus Ex: Human Revolution?",
    "answers_tr": ["Polis", "Siber güvenlik uzmanı", "Güvenlik danışmanı", "Hacker"],
    "answers_en": ["Police Officer", "Cybersecurity Expert", "Security Consultant", "Hacker"],
    "correct": 2
  },
  {
    "question_tr": "Covenant adlı düşman ordusu hangi oyun serisinde yer alır?",
    "question_en": "In which game series does the enemy army called 'Covenant' appear?",
    "answers_tr": ["Gears of War", "Destiny", "Mass Effect", "Halo"],
    "answers_en": ["Gears of War", "Destiny", "Mass Effect", "Halo"],
    "correct": 3
  },
  {
    "question_tr": "BioShock serisinin temel teması nedir?",
    "question_en": "What is the main theme of the BioShock series?",
    "answers_tr": ["Uzay keşfi", "Denizaltı distopyası", "Zombi istilası", "Ortaçağ fantezisi"],
    "answers_en": ["Space Exploration", "Underwater Dystopia", "Zombie Invasion", "Medieval Fantasy"],
    "correct": 1
  },
  {
    "question_tr": "Portal oyunundaki yapay zekâ karakterin adı nedir?",
    "question_en": "What is the name of the AI character in the Portal game?",
    "answers_tr": ["ADA", "Cortana", "GLaDOS", "S.A.M."],
    "answers_en": ["ADA", "Cortana", "GLaDOS", "S.A.M."],
    "correct": 2
  },
  {
    "question_tr": "Mass Effect serisinde hangi türler 'Reaper' tehdidine karşı birleşir?",
    "question_en": "In the Mass Effect series, which species unite against the 'Reaper' threat?",
    "answers_tr": ["Quarianlar ve Asari", "İnsanlar ve Kroganlar", "Turianlar ve Gethler", "Galaktik Konsey ırkları"],
    "answers_en": ["Quarians and Asari", "Humans and Krogan", "Turians and Geth", "Galactic Council races"],
    "correct": 3
  },
  {
    "question_tr": "Sekiro: Shadows Die Twice oyununda 'Immortality Severance' neyi temsil eder?",
    "question_en": "What does 'Immortality Severance' represent in Sekiro: Shadows Die Twice?",
    "answers_tr": ["Yeni bir silah", "Ölümsüzlüğü sona erdiren ritüel", "Karakterin gizlilik yeteneği", "Düşmanların zayıf noktası"],
    "answers_en": ["A new weapon", "A ritual to end immortality", "The character's stealth ability", "Enemies' weak spot"],
    "correct": 1
  },
  {
    "question_tr": "The Last of Us oyunundaki mantar enfeksiyonu hangi organizmaya dayanır?",
    "question_en": "Which organism is the fungal infection in The Last of Us based on?",
    "answers_tr": ["Cordyceps", "Mycelium", "Aspergillus", "Zygomycota"],
    "answers_en": ["Cordyceps", "Mycelium", "Aspergillus", "Zygomycota"],
    "correct": 0
  },
  {
    "question_tr": "Hollow Knight oyununda hangi bölge ana başlangıç noktasıdır?",
    "question_en": "What is the main starting area in Hollow Knight?",
    "answers_tr": ["Deepnest", "Greenpath", "Dirtmouth", "Crystal Peak"],
    "answers_en": ["Deepnest", "Greenpath", "Dirtmouth", "Crystal Peak"],
    "correct": 2
  },
  {
    "question_tr": "Metal Gear Solid serisinde 'Big Boss' karakterinin gerçek adı nedir?",
    "question_en": "What is the real name of 'Big Boss' in the Metal Gear Solid series?",
    "answers_tr": ["David", "Solidus", "Jack", "Frank"],
    "answers_en": ["David", "Solidus", "Jack", "Frank"],
    "correct": 2
  },
  {
    "question_tr": "Persona 5 oyununda Phantom Thieves grubunun lideri kimdir?",
    "question_en": "Who is the leader of the Phantom Thieves group in Persona 5?",
    "answers_tr": ["Joker", "Skull", "Fox", "Crow"],
    "answers_en": ["Joker", "Skull", "Fox", "Crow"],
    "correct": 0
  },
  {
    "question_tr": "1998 yılında çıkan Grim Fandango oyununda ana karakter hangi departmanda çalışır?",
    "question_en": "In the 1998 game Grim Fandango, which department does the main character work in?",
    "answers_tr": ["Ruhlar Departmanı", "Ölüler Bürosu", "Rehberlik Servisi", "Satış Departmanı"],
    "answers_en": ["Department of Souls", "Office of the Dead", "Guidance Service", "Sales Department"],
    "correct": 3
  },
 
  {
    question_tr: "Bu karakter hangi oyunda oynanır?",
    question_en: "In which game is this character played?",
    answers_tr: ["Dishonored", "Mirror's Edge", "Control", "Prey"],
    answers_en: ["Dishonored", "Mirror's Edge", "Control", "Prey"],
    correct: 1,
    image: "kolaysoruresim/faith.jpeg"
  },
  {
    question_tr: "Bu karakter hangi indie oyundandır?",
    question_en: "This character is from which indie game?",
    answers_tr: ["Dead Cells", "Hyper Light Drifter", "Katana Zero", "Salt and Sanctuary"],
    answers_en: ["Dead Cells", "Hyper Light Drifter", "Katana Zero", "Salt and Sanctuary"],
    correct: 1,
    image: "kolaysoruresim/drifter.jpeg"
  },
  {
    question_tr: "Bu karakter hangi zihin yolculuğu temasını işler?",
    question_en: "Which mind journey theme does this character represent?",
    answers_tr: ["Psychonauts", "Control", "The Medium", "Dreamfall"],
    answers_en: ["Psychonauts", "Control", "The Medium", "Dreamfall"],
    correct: 0,
    image: "kolaysoruresim/psychonauts.jpeg"
  },
  {
    question_tr: "Bu karakter hangi soulslike oyundandır?",
    question_en: "This character is from which soulslike game?",
    answers_tr: ["Mortal Shell", "Blasphemous", "Thymesia", "Salt and Sacrifice"],
    answers_en: ["Mortal Shell", "Blasphemous", "Thymesia", "Salt and Sacrifice"],
    correct: 1,
    image: "kolaysoruresim/blasp.jpeg"
  },
  {
    question_tr: "Bu hangi strateji oyunundan bir görseldir?",
    question_en: "This image is from which strategy game?",
    answers_tr: ["Crusader Kings III", "Europa Universalis 4", "Hearts of Iron 4", "Victoria 3"],
    answers_en: ["Crusader Kings III", "Europa Universalis 4", "Hearts of Iron 4", "Victoria 3"],
    correct: 1,
    image: "kolaysoruresim/eu4.jpeg"
  },
  {
    question_tr: "Bu karakter hangi distopik bilimkurgu oyunundandır?",
    question_en: "This character is from which dystopian sci-fi game?",
    answers_tr: ["Dishonored", "Deus Ex: Human Revolution", "Prey", "BioShock"],
    answers_en: ["Dishonored", "Deus Ex: Human Revolution", "Prey", "BioShock"],
    correct: 0,
    image: "kolaysoruresim/dishonored.jpeg"
  },
  {
    question_tr: "Bu görsel hangi platform oyunundandır?",
    question_en: "This image is from which platformer game?",
    answers_tr: ["Katana ZERO", "Hotline Miami", "Ape Out", "Ruiner"],
    answers_en: ["Katana ZERO", "Hotline Miami", "Ape Out", "Ruiner"],
    correct: 0,
    image: "kolaysoruresim/katana_zero.jpeg"
  },
  {
    question_tr: "Bu karakter hangi roguelike oyundandır?",
    question_en: "This character is from which roguelike game?",
    answers_tr: ["Dead Cells", "Hades", "Enter the Gungeon", "Spelunky 2"],
    answers_en: ["Dead Cells", "Hades", "Enter the Gungeon", "Spelunky 2"],
    correct: 1,
    image: "kolaysoruresim/hades.jpeg"
  },
  {
    question_tr: "Bu karakter hangi 3D aksiyon-macera oyunundandır?",
    question_en: "This character is from which 3D action-adventure game?",
    answers_tr: ["Hellblade: Senua's Sacrifice", "Control", "The Evil Within 2", "Alan Wake"],
    answers_en: ["Hellblade: Senua's Sacrifice", "Control", "The Evil Within 2", "Alan Wake"],
    correct: 0,
    image: "kolaysoruresim/hellblade.jpeg"
  },
  {
    question_tr: "Bu karakter hangi zorlu platform oyundandır?",
    question_en: "This character is from which challenging platformer game?",
    answers_tr: ["Celeste", "Super Meat Boy", "Cuphead", "Ori and the Will of the Wisps"],
    answers_en: ["Celeste", "Super Meat Boy", "Cuphead", "Ori and the Will of the Wisps"],
    correct: 2,
    image: "kolaysoruresim/cuphead.jpeg"
  },
  {
    question_tr: "Bu görsel hangi bilimkurgu FPS oyunundandır?",
    question_en: "This image is from which sci-fi FPS game?",
    answers_tr: ["Destiny 2", "Doom Eternal", "Halo: Combat Evolved", "Prey"],
    answers_en: ["Destiny 2", "Doom Eternal", "Halo: Combat Evolved", "Prey"],
    correct: 3,
    image: "kolaysoruresim/prey.jpeg"
  },
  {
    question_tr: "Bu görsel hangi hayatta kalma oyunundandır?",
    question_en: "This image is from which survival game?",
    answers_tr: ["Rust", "Green Hell", "Subnautica", "The Forest"],
    answers_en: ["Rust", "Green Hell", "Subnautica", "The Forest"],
    correct: 3,
    image: "kolaysoruresim/theforest.jpeg"
  },
  {
    question_tr: "Bu karakter hangi hikaye tabanlı oyun serisindendir?",
    question_en: "This character is from which story-driven game series?",
    answers_tr: ["Final Fantasy", "Kingdom Hearts", "Tales of", "Persona"],
    answers_en: ["Final Fantasy", "Kingdom Hearts", "Tales of", "Persona"],
    correct: 1,
    image: "kolaysoruresim/kingdomhearts.jpeg"
  },
  {
    question_tr: "Bu karakter hangi aksiyon-RPG oyunundandır?",
    question_en: "This character is from which action-RPG game?",
    answers_tr: ["Bloodborne", "Nioh", "Dark Souls", "Sekiro"],
    answers_en: ["Bloodborne", "Nioh", "Dark Souls", "Sekiro"],
    correct: 2,
    image: "kolaysoruresim/darksouls.jpeg"
  },
  {
    question_tr: "Bu görsel hangi şehir simülasyon oyunundandır?",
    question_en: "This image is from which city simulation game?",
    answers_tr: ["SimCity", "Cities: Skylines", "Tropico 6", "Anno 1800"],
    answers_en: ["SimCity", "Cities: Skylines", "Tropico 6", "Anno 1800"],
    correct: 1,
    image: "kolaysoruresim/citiesskylines.jpeg"
  },
  {
    question_tr: "Bu görsel hangi savaş strateji oyunundandır?",
    question_en: "This image is from which war strategy game?",
    answers_tr: ["Age of Empires II", "Company of Heroes", "Total War: Warhammer", "StarCraft II"],
    answers_en: ["Age of Empires II", "Company of Heroes", "Total War: Warhammer", "StarCraft II"],
    correct: 3,
    image: "kolaysoruresim/sc2.jpeg"
  },
  {
    question_tr: "Bu karakter hangi bilimkurgu RPG oyunundandır?",
    question_en: "This character is from which sci-fi RPG game?",
    answers_tr: ["Fallout", "Cyberpunk 2077", "Deus Ex", "Mass Effect"],
    answers_en: ["Fallout", "Cyberpunk 2077", "Deus Ex", "Mass Effect"],
    correct: 3,
    image: "kolaysoruresim/mass_effect.jpeg"
  },
  {
    question_tr: "Bu görsel hangi sıra tabanlı strateji oyunundandır?",
    question_en: "This image is from which turn-based strategy game?",
    answers_tr: ["XCOM 2", "Fire Emblem", "Advance Wars", "Gears Tactics"],
    answers_en: ["XCOM 2", "Fire Emblem", "Advance Wars", "Gears Tactics"],
    correct: 0,
    image: "kolaysoruresim/xcom.jpeg"
  },
  {
    question_tr: "Bu görsel hangi hızlı tempolu aksiyon oyunundandır?",
    question_en: "This image is from which fast-paced action game?",
    answers_tr: ["Ruiner", "Katana ZERO", "Hotline Miami", "Ape Out"],
    answers_en: ["Ruiner", "Katana ZERO", "Hotline Miami", "Ape Out"],
    correct: 2,
    image: "kolaysoruresim/hotline_miami.jpeg"
  },
  {
    question_tr: "Bu görsel hangi post-apokaliptik oyundandır?",
    question_en: "This image is from which post-apocalyptic game?",
    answers_tr: ["This War of Mine", "Frostpunk", "Metro Exodus", "Wasteland 3"],
    answers_en: ["This War of Mine", "Frostpunk", "Metro Exodus", "Wasteland 3"],
    correct: 1,
    image: "kolaysoruresim/frostpunk.jpeg"
  },
  {
    question_tr: "Bu görsel hangi bilimkurgu strateji oyunundandır?",
    question_en: "This image is from which sci-fi strategy game?",
    answers_tr: ["Endless Space", "Stellaris", "Sins of a Solar Empire", "Master of Orion"],
    answers_en: ["Endless Space", "Stellaris", "Sins of a Solar Empire", "Master of Orion"],
    correct: 1,
    image: "kolaysoruresim/stellaris.jpeg"
  },
  {
    question_tr: "Bu karakter hangi interaktif drama oyunundandır?",
    question_en: "This character is from which interactive drama game?",
    answers_tr: ["Heavy Rain", "Detroit: Become Human", "Until Dawn", "Beyond: Two Souls"],
    answers_en: ["Heavy Rain", "Detroit: Become Human", "Until Dawn", "Beyond: Two Souls"],
    correct: 2,
    image: "kolaysoruresim/until.jpeg"
  },
  {
    question_tr: "Bu görsel hangi grafik macera oyunundandır?",
    question_en: "This image is from which graphic adventure game?",
    answers_tr: ["Grim Fandango", "Day of the Tentacle", "Monkey Island", "Thimbleweed Park"],
    answers_en: ["Grim Fandango", "Day of the Tentacle", "Monkey Island", "Thimbleweed Park"],
    correct: 0,
    image: "kolaysoruresim/grim_fandango.jpeg"
  },
  {
    question_tr: "Bu görsel hangi ortaçağ strateji oyunundandır?",
    question_en: "This image is from which medieval strategy game?",
    answers_tr: ["Banished", "Mount & Blade II", "Crusader Kings III", "Kingdom Come: Deliverance"],
    answers_en: ["Banished", "Mount & Blade II", "Crusader Kings III", "Kingdom Come: Deliverance"],
    correct: 3,
    image: "kolaysoruresim/kingdom_come.jpeg"
  },
  {
    question_tr: "Bu görsel hangi hayatta kalma oyundandır?",
    question_en: "This image is from which survival game?",
    answers_tr: ["The Forest", "Subnautica", "Raft", "Green Hell"],
    answers_en: ["The Forest", "Subnautica", "Raft", "Green Hell"],
    correct: 1,
    image: "kolaysoruresim/subnautica.jpeg"
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
