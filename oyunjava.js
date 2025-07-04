function getRandomSubset(array, size) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

// Sorular hem Türkçe hem İngilizce olarak tanımlandı
const imageQuestions = [
  {
  "question_tr": "Hangi oyunda 'Pikachu' karakteri bulunur?",
  "question_en": "In which game does the character 'Pikachu' appear?",
  "answers_tr": ["Animal Crossing", "Pokémon", "Yu-Gi-Oh!", "Digimon"],
  "answers_en": ["Animal Crossing", "Pokémon", "Yu-Gi-Oh!", "Digimon"],
  "correct": 1
},
{
  "question_tr": "Hangi oyunda 'Arthur Morgan' ana karakterdir?",
  "question_en": "In which game is 'Arthur Morgan' the main character?",
  "answers_tr": ["The Witcher 3", "Far Cry 5", "Red Dead Redemption 2", "Skyrim"],
  "answers_en": ["The Witcher 3", "Far Cry 5", "Red Dead Redemption 2", "Skyrim"],
  "correct": 2
},
{
  "question_tr": "Hangi oyunda 'Gordon Freeman' isimli fizikçi baş kahramandır?",
  "question_en": "In which game is the physicist named 'Gordon Freeman' the main hero?",
  "answers_tr": ["Half-Life", "Portal", "Doom", "Bioshock"],
  "answers_en": ["Half-Life", "Portal", "Doom", "Bioshock"],
  "correct": 0
},
{
  "question_tr": "Hangi oyun serisinin ana teması hayatta kalma ve zombi istilasıdır?",
  "question_en": "Which game series mainly focuses on survival and zombie invasion?",
  "answers_tr": ["Halo", "Call of Duty", "Resident Evil", "FIFA"],
  "answers_en": ["Halo", "Call of Duty", "Resident Evil", "FIFA"],
  "correct": 2
},
{
  "question_tr": "Hangi oyunda 'Ciri' karakteri bulunur?",
  "question_en": "In which game does the character 'Ciri' appear?",
  "answers_tr": ["Dark Souls", "Skyrim", "The Witcher 3", "Dragon Age"],
  "answers_en": ["Dark Souls", "Skyrim", "The Witcher 3", "Dragon Age"],
  "correct": 2
},
{
  "question_tr": "'Link' karakteri hangi oyun serisine aittir?",
  "question_en": "To which game series does the character 'Link' belong?",
  "answers_tr": ["God of War", "Final Fantasy", "Dark Souls", "The Legend of Zelda"],
  "answers_en": ["God of War", "Final Fantasy", "Dark Souls", "The Legend of Zelda"],
  "correct": 3
},
{
  "question_tr": "'Doom Slayer' hangi oyun serisinin kahramanıdır?",
  "question_en": "Doom Slayer is the hero of which game series?",
  "answers_tr": ["Quake", "Wolfenstein", "Half-Life", "DOOM"],
  "answers_en": ["Quake", "Wolfenstein", "Half-Life", "DOOM"],
  "correct": 3
},
{
  "question_tr": "Hangi oyun serisinde 'Lara Croft' karakteri vardır?",
  "question_en": "In which game series does the character 'Lara Croft' appear?",
  "answers_tr": ["God of War", "Assassin's Creed", "Uncharted", "Tomb Raider"],
  "answers_en": ["God of War", "Assassin's Creed", "Uncharted", "Tomb Raider"],
  "correct": 3
},
{
  "question_tr": "Hangi oyun 'Steve' karakterini içerir?",
  "question_en": "Which game includes the character 'Steve'?",
  "answers_tr": ["Fortnite", "Terraria", "Minecraft", "Roblox"],
  "answers_en": ["Fortnite", "Terraria", "Minecraft", "Roblox"],
  "correct": 2
},
{
  "question_tr": "'Mario' ve 'Luigi' hangi oyun serisindendir?",
  "question_en": "'Mario' and 'Luigi' belong to which game series?",
  "answers_tr": ["Crash Bandicoot", "Sonic the Hedgehog", "Pac-Man", "Super Mario Bros."],
  "answers_en": ["Crash Bandicoot", "Sonic the Hedgehog", "Pac-Man", "Super Mario Bros."],
  "correct": 3
},
{
  "question_tr": "Hangi oyun serisi 'Ezio Auditore' karakterini içerir?",
  "question_en": "Which game series features the character 'Ezio Auditore'?",
  "answers_tr": ["Dark Souls", "The Witcher", "Dragon Age", "Assassin's Creed"],
  "answers_en": ["Dark Souls", "The Witcher", "Dragon Age", "Assassin's Creed"],
  "correct": 3
},
{
  "question_tr": "'Solid Snake' hangi oyun serisinin kahramanıdır?",
  "question_en": "Solid Snake is the hero of which game series?",
  "answers_tr": ["Metal Gear Solid", "Call of Duty", "Battlefield", "Halo"],
  "answers_en": ["Metal Gear Solid", "Call of Duty", "Battlefield", "Halo"],
  "correct": 0
},
{
  "question_tr": "'Tetris' hangi tür oyundur?",
  "question_en": "What genre is 'Tetris'?",
  "answers_tr": ["Puzzle", "Strategy", "RPG", "FPS"],
  "answers_en": ["Puzzle", "Strategy", "RPG", "FPS"],
  "correct": 0
},
{
  "question_tr": "'Mega Man' oyunlarında başrol karakterin adı nedir?",
  "question_en": "What is the name of the main character in 'Mega Man' games?",
  "answers_tr": ["Bass", "Mega Man", "Protoman", "Roll"],
  "answers_en": ["Bass", "Mega Man", "Protoman", "Roll"],
  "correct": 1
},
{
  "question_tr": "'Mario' oyunlarında düşman olarak kimler bulunur?",
  "question_en": "Who are the enemies in 'Mario' games?",
  "answers_tr": ["Koopa Troopas", "Ninjas", "Zombies", "Aliens"],
  "answers_en": ["Koopa Troopas", "Ninjas", "Zombies", "Aliens"],
  "correct": 0
},
{
  "question_tr": "Hangi oyun 'Doomguy' karakterini içerir?",
  "question_en": "Which game features the character 'Doomguy'?",
  "answers_tr": ["Wolfenstein", "DOOM", "Half-Life", "Quake"],
  "answers_en": ["Wolfenstein", "DOOM", "Half-Life", "Quake"],
  "correct": 1
},
{
  "question_tr": "Hangi oyun 'Sonic the Hedgehog' karakterine sahiptir?",
  "question_en": "Which game features the character 'Sonic the Hedgehog'?",
  "answers_tr": ["Crash Bandicoot", "Mario Kart", "Sonic the Hedgehog", "Pac-Man"],
  "answers_en": ["Crash Bandicoot", "Mario Kart", "Sonic the Hedgehog", "Pac-Man"],
  "correct": 2
},
{
  "question_tr": "'Call of Duty' oyun serisi hangi türdendir?",
  "question_en": "What genre is the 'Call of Duty' game series?",
  "answers_tr": ["RPG", "FPS", "Strategy", "MOBA"],
  "answers_en": ["RPG", "FPS", "Strategy", "MOBA"],
  "correct": 1
},
{
  "question_tr": "'League of Legends' hangi tür oyun türüne aittir?",
  "question_en": "What genre does 'League of Legends' belong to?",
  "answers_tr": ["Puzzle", "MOBA", "FPS", "RPG"],
  "answers_en": ["Puzzle", "MOBA", "FPS", "RPG"],
  "correct": 1
},
{
  "question_tr": "'Fortnite' hangi tür oyundur?",
  "question_en": "What type of game is 'Fortnite'?",
  "answers_tr": ["Puzzle", "Battle Royale", "Strategy", "RPG"],
  "answers_en": ["Puzzle", "Battle Royale", "Strategy", "RPG"],
  "correct": 1
},
{
  "question_tr": "'Overwatch' oyunu hangi türdendir?",
  "question_en": "What genre is the game 'Overwatch'?",
  "answers_tr": ["Puzzle", "MOBA", "FPS", "RPG"],
  "answers_en": ["Puzzle", "MOBA", "FPS", "RPG"],
  "correct": 2
},
{
  "question_tr": "'Among Us' oyununda amaç nedir?",
  "question_en": "What is the objective in the game 'Among Us'?",
  "answers_tr": ["Sahtekarları bulmak", "Şehir kurmak", "Yarış kazanmak", "İmparatorluğu kurtarmak"],
  "answers_en": ["Find the impostors", "Build a city", "Win a race", "Save the empire"],
  "correct": 0
},
{
  "question_tr": "Hangi oyun serisinde Lara Croft başrol karakteridir?",
  "question_en": "In which game series is Lara Croft the main character?",
  "answers_tr": ["The Last of Us", "Tomb Raider", "Assassin's Creed", "Uncharted"],
  "answers_en": ["The Last of Us", "Tomb Raider", "Assassin's Creed", "Uncharted"],
  "correct": 1
},
{
  "question_tr": "Hangi oyun serisinde 'Master Chief' karakteri başrol oyuncusudur?",
  "question_en": "In which game series is 'Master Chief' the main protagonist?",
  "answers_tr": ["Mass Effect", "Halo", "Gears of War", "Call of Duty"],
  "answers_en": ["Mass Effect", "Halo", "Gears of War", "Call of Duty"],
  "correct": 1
},
  {
  "question_tr": "Popüler Battle Royale oyunu 'Fortnite' hangi şirket tarafından geliştirilmiştir?",
  "question_en": "Which company developed the popular battle royale game 'Fortnite'?",
  "answers_tr": ["Ubisoft", "Valve", "Activision", "Epic Games"],
  "answers_en": ["Ubisoft", "Valve", "Activision", "Epic Games"],
  "correct": 3
},
{
  "question_tr": "'The Legend of Zelda' serisinin ana karakterinin adı nedir?",
  "question_en": "What is the name of the main character in 'The Legend of Zelda' series?",
  "answers_tr": ["Mario", "Zelda", "Ganon", "Link"],
  "answers_en": ["Mario", "Zelda", "Ganon", "Link"],
  "correct": 3
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/mario.jpg",
  "answers_tr": ["Luigi", "Mario", "Wario", "Bowser"],
  "answers_en": ["Luigi", "Mario", "Wario", "Bowser"],
  "correct": 1
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/geralt.jpg",
  "answers_tr": ["Vesemir", "Eskel", "Geralt Of Rivia", "Ciri"],
  "answers_en": ["Vesemir", "Eskel", "Geralt Of Rivia", "Ciri"],
  "correct": 2
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/ellie.jpg",
  "answers_tr": ["Max Caulfield", "Ellie", "Aloy", "Clementine"],
  "answers_en": ["Max Caulfield", "Ellie", "Aloy", "Clementine"],
  "correct": 1
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/kratos.jpg",
  "answers_tr": ["Zeus", "Ares", "Kratos", "Atreus"],
  "answers_en": ["Zeus", "Ares", "Kratos", "Atreus"],
  "correct": 2
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/lara.jpg",
  "answers_tr": ["Ada Wong", "Lara Croft", "Jill Valentine", "Chloe Frazer"],
  "answers_en": ["Ada Wong", "Lara Croft", "Jill Valentine", "Chloe Frazer"],
  "correct": 1
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/arthur.jpg",
  "answers_tr": ["Micah Bell", "Dutch van der Linde", "John Marston", "Arthur Morgan"],
  "answers_en": ["Micah Bell", "Dutch van der Linde", "John Marston", "Arthur Morgan"],
  "correct": 3
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/masterchief.jpg",
  "answers_tr": ["Sergeant Johnson", "Master Chief", "Spartan Locke", "Cortana"],
  "answers_en": ["Sergeant Johnson", "Master Chief", "Spartan Locke", "Cortana"],
  "correct": 1
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/solid_snake.jpg",
  "answers_tr": ["Big Boss", "Raiden", "Liquid Snake", "Solid Snake"],
  "answers_en": ["Big Boss", "Raiden", "Liquid Snake", "Solid Snake"],
  "correct": 3
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/sonic.jpg",
  "answers_tr": ["Shadow", "Knuckles", "Sonic", "Tails"],
  "answers_en": ["Shadow", "Knuckles", "Sonic", "Tails"],
  "correct": 2
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/trevor.jpg",
  "answers_tr": ["Michael", "Franklin", "Trevor", "Niko Bellic"],
  "answers_en": ["Michael", "Franklin", "Trevor", "Niko Bellic"],
  "correct": 2
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/jill.jpg",
  "answers_tr": ["Ada Wong", "Sheva Alomar", "Claire Redfield", "Jill Valentine"],
  "answers_en": ["Ada Wong", "Sheva Alomar", "Claire Redfield", "Jill Valentine"],
  "correct": 3
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/gordon_freeman.jpg",
  "answers_tr": ["Alyx Vance", "Barney Calhoun", "Isaac Kleiner", "Gordon Freeman"],
  "answers_en": ["Alyx Vance", "Barney Calhoun", "Isaac Kleiner", "Gordon Freeman"],
  "correct": 3
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/doomguy.jpg",
  "answers_tr": ["Doomguy", "Marcus Fenix", "B.J. Blazkowicz", "Sarge"],
  "answers_en": ["Doomguy", "Marcus Fenix", "B.J. Blazkowicz", "Sarge"],
  "correct": 0
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/dante.jpg",
  "answers_tr": ["Vergil", "Dante", "Nero", "Trish"],
  "answers_en": ["Vergil", "Dante", "Nero", "Trish"],
  "correct": 1
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/ciri.jpg",
  "answers_tr": ["Geralt", "Triss", "Ciri", "Yennefer"],
  "answers_en": ["Geralt", "Triss", "Ciri", "Yennefer"],
  "correct": 2
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/aloy.jpg",
  "answers_tr": ["Ellie", "Katniss", "Clementine", "Aloy"],
  "answers_en": ["Ellie", "Katniss", "Clementine", "Aloy"],
  "correct": 3
},
{
  "question_tr": "Resimdeki karakter kimdir?",
  "question_en": "Who is the character in the picture?",
  "image": "kolaysoruresim/kirby.jpg",
  "answers_tr": ["King Dedede", "Meta Knight", "Kirby", "Waddle Dee"],
  "answers_en": ["King Dedede", "Meta Knight", "Kirby", "Waddle Dee"],
  "correct": 2
},
{
  "question_tr": "Minecraft’ta hangi malzeme blokları kırmak için en iyisidir?",
  "question_en": "In Minecraft, which material is best for breaking blocks?",
  "answers_tr": ["Tahta", "Demir", "Taş", "Altın"],
  "answers_en": ["Wood", "Iron", "Stone", "Gold"],
  "correct": 1
},
{
  "question_tr": "Pac-Man oyununda amaç nedir?",
  "question_en": "What is the objective in the Pac-Man game?",
  "answers_tr": ["Hayatta kalmak", "Yemekleri toplamak", "Yarış kazanmak", "Zombi avlamak"],
  "answers_en": ["Survive", "Collect food", "Win the race", "Hunt zombies"],
  "correct": 1
},
{
  "question_tr": "Fortnite oyunu hangi türdendir?",
  "question_en": "What genre is the game Fortnite?",
  "answers_tr": ["Battle Royale", "Bulmaca", "Simülasyon", "RPG"],
  "answers_en": ["Battle Royale", "Puzzle", "Simulation", "RPG"],
  "correct": 0
},
{
  "question_tr": "Tetris oyununda hangi şekiller yoktur?",
  "question_en": "Which shapes do not exist in Tetris?",
  "answers_tr": ["T şeklinde", "Zigzag", "Daire", "L şeklinde"],
  "answers_en": ["T-shaped", "Zigzag", "Circle", "L-shaped"],
  "correct": 2
},
{
  "question_tr": "Super Mario’da ana karakter kimdir?",
  "question_en": "Who is the main character in Super Mario?",
  "answers_tr": ["Luigi", "Bowser", "Mario", "Peach"],
  "answers_en": ["Luigi", "Bowser", "Mario", "Peach"],
  "correct": 2
},
{
  "question_tr": "Among Us oyununda oyuncular ne yapar?",
  "question_en": "What do players do in Among Us?",
  "answers_tr": ["Görev yapar ve sahtekârı bulur", "Yarışır", "Savaşır", "Yapboz çözer"],
  "answers_en": ["Complete tasks and find the impostor", "Race", "Fight", "Solve puzzles"],
  "correct": 0
},
{
  "question_tr": "Pac-Man oyununda düşmanlar nasıl adlandırılır?",
  "question_en": "What are the enemies called in Pac-Man?",
  "answers_tr": ["Hayaletler", "Canavarlar", "Zombiler", "Robotlar"],
  "answers_en": ["Ghosts", "Monsters", "Zombies", "Robots"],
  "correct": 0
},
{
  "question_tr": "Sonic the Hedgehog’un en hızlı arkadaşı kimdir?",
  "question_en": "Who is Sonic the Hedgehog’s fastest friend?",
  "answers_tr": ["Tails", "Knuckles", "Shadow", "Amy"],
  "answers_en": ["Tails", "Knuckles", "Shadow", "Amy"],
  "correct": 0
}


];

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
