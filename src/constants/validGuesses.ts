import { CONFIG } from './config'

export const VALIDGUESSES = [
  'aàyke',
  'aàyco',
  'aàyŋo',
  'aàymo',
  'aàyro',
  'aàyho',
  'aàywo',
  'aàyño',
  'aàyoo',
  'aàyxo',
  'ààywa',
  'ààywu',
  'ààyap',
  'ààyin',
  'ààyàr',
  'ààyur',
  'ààyir',
  'ààyxa',
  'ààyco',
  'acapi',
  'acapa',
  'acapo',
  'òòmpa',
  'adeca',
  'adoap',
  'adehe',
  'adexe',
  'adeur',
  'adeir',
  'adexa',
  'adeco',
  'ahñàŋ',
  'àhñàŋ',
  'ahtwì',
  'àhtwì',
  'ììmpa',
  'akwup',
  'akwuu',
  'àľdòk',
  'hààne',
  'ààmpa',
  'apaàu',
  'àptap',
  'apyaŋ',
  'àpyaŋ',
  'ařiìy',
  'ařiìi',
  'arùmi',
  'arùma',
  'arùmo',
  'atini',
  'atani',
  'atoni',
  'ùumpa',
  'ayŋop',
  'aymap',
  'ayŋwo',
  'ayrip',
  'ayhop',
  'aywop',
  'ayñop',
  'ayoop',
  'aytwo',
  'aycoo',
  'hàayè',
  'ayèŋo',
  'ayèma',
  'ayèri',
  'ayèho',
  'ayèwo',
  'ayèño',
  'ayèoo',
  'ayèca',
  'hàaya',
  'hàayo',
  'ayèhe',
  'ayèxe',
  'ayèur',
  'ayèir',
  'ayèxa',
  'ayèco',
  'aŋwap',
  'aŋwup',
  'aŋxap',
  'aŋcop',
  'aŋaca',
  'aŋoap',
  'aŋahe',
  'aŋaxe',
  'aŋaur',
  'aŋair',
  'aŋaxa',
  'aŋaco',
  'aŋapi',
  'aŋapa',
  'aŋapo',
  'cacap',
  'cowpa',
  'cappa',
  'cañpa',
  'caypa',
  'carpa',
  'cahep',
  'caxep',
  'caxap',
  'cacop',
  'campa',
  'camŋo',
  'camma',
  'camri',
  'camho',
  'camwo',
  'camño',
  'camoo',
  'camip',
  'cayaò',
  'cayao',
  'càyaò',
  'caŋni',
  'caŋre',
  'cehla',
  'cèhla',
  'àampa',
  'cekpa',
  'cèkpa',
  'cekku',
  'cerañ',
  'cèrañ',
  'cewpa',
  'cèwpa',
  'cewwu',
  'cexŋo',
  'cexma',
  'cexri',
  'cexho',
  'cexwo',
  'cexño',
  'cexoo',
  'cexni',
  'cexco',
  'cexpa',
  'cèxpa',
  'cexxu',
  'hàciì',
  'cohmo',
  'cokpa',
  'còkpa',
  'cokku',
  'còoni',
  'còore',
  'hàcòo',
  'còoco',
  'còyni',
  'còyre',
  'òompa',
  'cumou',
  'hàcuù',
  'cuxpa',
  'cùxpa',
  'cuxxu',
  'cyoòo',
  'daŋwo',
  'datwo',
  'dacoo',
  'hàdai',
  'hàdoa',
  'dacaw',
  'dadyu',
  'dàdyu',
  'daley',
  'dalco',
  'daloo',
  'dalaa',
  'dalii',
  'dalee',
  'ìimpa',
  'daliu',
  'dappa',
  'dàppa',
  'dappu',
  'darpa',
  'darni',
  'darey',
  'darre',
  'darke',
  'darco',
  'dařey',
  'dařre',
  'dařii',
  'dàtni',
  'dàtre',
  'dàtiu',
  'daxpa',
  'dàxpa',
  'daxxu',
  'daŋpa',
  'dàŋpa',
  'daŋŋu',
  'dèewa',
  'deľpa',
  'dèľpa',
  'deľľu',
  'deymà',
  'dèymà',
  'dìmpa',
  'dìmni',
  'dìmey',
  'dìmre',
  'dìmke',
  'dìmco',
  'hàdľò',
  'dľòŋo',
  'dľòma',
  'dľòri',
  'dľòho',
  'dľòwo',
  'dľòño',
  'dľòoo',
  'doyni',
  'doyre',
  'doini',
  'doire',
  'doani',
  'doare',
  'downi',
  'dowre',
  'dopni',
  'dopre',
  'doñni',
  'doñre',
  'dorni',
  'dorre',
  'dodùu',
  'dodùa',
  'dodùo',
  'dòkpa',
  'dòkku',
  'dùcut',
  'dùkře',
  'dùruŋ',
  'dùuni',
  'dùure',
  'dùani',
  'dùare',
  'dùoni',
  'dùore',
  'dùuhi',
  'dùxŋo',
  'dùxma',
  'dùxri',
  'dùxho',
  'dùxwo',
  'dùxño',
  'dùxoo',
  'dyàoo',
  'dyàoa',
  'dyèed',
  'dyoni',
  'dyore',
  'dyani',
  'dyare',
  'ehřoo',
  'èhřoa',
  'èhřow',
  'èhřàp',
  'èhřàñ',
  'èhřày',
  'èhřàr',
  'emàwa',
  'entao',
  'èntaa',
  'erata',
  'èrata',
  'eyàwa',
  'halpa',
  'hàlpa',
  'hallu',
  'halŋo',
  'halma',
  'halri',
  'halho',
  'halwo',
  'halño',
  'haloo',
  'halip',
  'hamri',
  'hàmri',
  'haòni',
  'haòre',
  'hàhaò',
  'haòco',
  'hapep',
  'hapoa',
  'hapow',
  'hapap',
  'hapeñ',
  'hapey',
  'haper',
  'hapop',
  'hatou',
  'hàxux',
  'haypa',
  'hàypa',
  'hayyu',
  'hexyò',
  'hèxyò',
  'hèypa',
  'hèyni',
  'hèyey',
  'hèyre',
  'hèyke',
  'hèyco',
  'hèyèw',
  'heŋha',
  'hèŋha',
  'hìxtè',
  'hoàwa',
  'hompa',
  'hòmpa',
  'hàhou',
  'hàhòa',
  'hùlay',
  'hùlai',
  'hurpa',
  'hùrpa',
  'hurru',
  'hùyŋo',
  'hùyma',
  'hùyri',
  'hùyho',
  'hùywo',
  'hùyño',
  'hùyoo',
  'hwuni',
  'hwani',
  'hwoni',
  'hyani',
  'hyare',
  'hàhya',
  'hyaco',
  'hyèkù',
  'hyoni',
  'hyore',
  'hàhyo',
  'hyoco',
  'hyooa',
  'hyoow',
  'hyoup',
  'hyouñ',
  'hyouy',
  'hyour',
  'hyowo',
  'hyòwì',
  'iaŋŋo',
  'iaŋma',
  'iaŋri',
  'iaŋho',
  'iaŋwo',
  'iaŋño',
  'iaŋoo',
  'ìcuni',
  'ìcuco',
  'ìcani',
  'ìcaco',
  'ìconi',
  'ìcoco',
  'ìcuľo',
  'ipèdi',
  'ipiko',
  'ìpiko',
  'itata',
  'ìtata',
  'itini',
  'itire',
  'hàiti',
  'itico',
  'iŋeŋo',
  'iŋema',
  'iŋeri',
  'iŋeho',
  'iŋewo',
  'iŋeño',
  'iŋeoo',
  'iŋeip',
  'iŋeři',
  'kañañ',
  'kàñañ',
  'kařpa',
  'kàřpa',
  'kařřu',
  'kařud',
  'kàřud',
  'katyu',
  'kàtyu',
  'kaxàľ',
  'keŋwo',
  'ketwo',
  'kecoo',
  'hàkei',
  'hàkoa',
  'kècto',
  'kècta',
  'kedùu',
  'kedùa',
  'kedùo',
  'kedùy',
  'kèdùy',
  'kehyo',
  'kehya',
  'kemyà',
  'kèmyà',
  'kenùt',
  'kènùt',
  'keppa',
  'kèppa',
  'keppu',
  'keroa',
  'kèroa',
  'keryo',
  'kèryo',
  'ketŋo',
  'ketma',
  'ketri',
  'ketho',
  'ketño',
  'ketoo',
  'ketya',
  'kètya',
  'kexey',
  'kèxey',
  'kinŋo',
  'kinma',
  'kinri',
  'kinho',
  'kinwo',
  'kinño',
  'kinoo',
  'kokay',
  'kòkay',
  'kowèř',
  'křeni',
  'křere',
  'hàkře',
  'křeco',
  'kreye',
  'kreyo',
  'krèye',
  'kuŋwo',
  'kùŋwo',
  'kuyke',
  'kutwo',
  'kùtwo',
  'kucoo',
  'kùcoo',
  'kuàwa',
  'kumpa',
  'kùmpa',
  'hàkuu',
  'kùhwe',
  'kùhwo',
  'kumìp',
  'kumoa',
  'kumow',
  'kumap',
  'kumìñ',
  'kumìy',
  'kumìr',
  'kumop',
  'kunpa',
  'kùnpa',
  'kunnu',
  'kuñet',
  'kùñet',
  'kuñix',
  'kùñix',
  'kupey',
  'kùpŋo',
  'kùpma',
  'kùpri',
  'kùpho',
  'kùpwo',
  'kùpño',
  'kùpoo',
  'kupii',
  'kùrŋo',
  'kùrma',
  'kùrri',
  'kùrho',
  'kùrwo',
  'kùrño',
  'kùroo',
  'kùray',
  'kuřey',
  'kùřey',
  'kuxpa',
  'kùxpa',
  'kuxxu',
  'kuypa',
  'kùypa',
  'kuyyu',
  'kwapi',
  'kwatu',
  'kwàtu',
  'kwayo',
  'kwaya',
  'kwayi',
  'kwaye',
  'kweet',
  'kweľo',
  'kwèľi',
  'kwèti',
  'hàkwi',
  'kwiŋo',
  'kwima',
  'kwiri',
  'kwiho',
  'kwiwo',
  'kwiño',
  'kwioo',
  'kwica',
  'hàkwa',
  'hàkwo',
  'kwihe',
  'kwixe',
  'kwiur',
  'kwiir',
  'kwixa',
  'kwico',
  'kwiiy',
  'kwiii',
  'kwoni',
  'kwòko',
  'kyèey',
  'kyùŋo',
  'kyùma',
  'kyùri',
  'kyùho',
  'kyùwo',
  'kyùño',
  'kyùoo',
  'kyùii',
  'kyueŋ',
  'kyùeŋ',
  'lacap',
  'lowpa',
  'lappa',
  'lañpa',
  'laypa',
  'larpa',
  'lahep',
  'laxep',
  'laxap',
  'lacop',
  'ľakpa',
  'ľakni',
  'ľakey',
  'ľakre',
  'ľakke',
  'ľakco',
  'ľakna',
  'làrpa',
  'larru',
  'latpa',
  'làtpa',
  'lattu',
  'latuu',
  'làwpa',
  'làwwu',
  'lepni',
  'lepre',
  'ľeřpa',
  'ľèřpa',
  'ľeřřu',
  'ľeřey',
  'ľeřre',
  'ľeřii',
  'ľewpa',
  'ľèwpa',
  'ľewwu',
  'ľeypa',
  'ľeyni',
  'ľeyey',
  'ľeyre',
  'ľeyke',
  'ľeyco',
  'ľiìco',
  'ľììca',
  'ľiìho',
  'ľììhe',
  'ľiìxo',
  'ľììxe',
  'ľììur',
  'ľììir',
  'ľììxa',
  'ľììco',
  'lììŋo',
  'lììma',
  'lììri',
  'lììho',
  'lììwo',
  'lììño',
  'lììoo',
  'liìii',
  'lìxka',
  'lìxko',
  'ľoàwa',
  'ľompa',
  'ľòmpa',
  'hàľou',
  'hàloi',
  'hàloa',
  'lolop',
  'loloa',
  'lolow',
  'lolap',
  'loloñ',
  'loloy',
  'lolor',
  'lomau',
  'lomiu',
  'ľomwò',
  'loppa',
  'lopni',
  'lopey',
  'lopre',
  'lopke',
  'lopco',
  'lòpwa',
  'lòpwo',
  'loxpa',
  'lòxpa',
  'loxxu',
  'ľòyax',
  'hàľui',
  'ľumni',
  'ľumre',
  'ľumwa',
  'ľumwu',
  'ľumap',
  'ľumin',
  'ľumur',
  'ľumir',
  'ľumxa',
  'ľumco',
  'èempa',
  'lureu',
  'ľuxpa',
  'ľuxni',
  'ľuxey',
  'ľuxre',
  'ľuxke',
  'ľuxco',
  'lùyat',
  'ľwoni',
  'ľwore',
  'hàľwo',
  'ľwoco',
  'mamap',
  'mamoa',
  'mamow',
  'mamañ',
  'mamay',
  'mamar',
  'mamop',
  'mañpa',
  'mañop',
  'mañwa',
  'mañwu',
  'mañap',
  'mañin',
  'mañip',
  'mañar',
  'mañep',
  'mañur',
  'mañir',
  'mañxa',
  'mañco',
  'manay',
  'mànay',
  'màtla',
  'mecap',
  'mowpa',
  'meppa',
  'meñpa',
  'meypa',
  'merpa',
  'mehep',
  'mexep',
  'mexap',
  'mecop',
  'mèdey',
  'meemè',
  'meemo',
  'mèemè',
  'mehñu',
  'mèhñu',
  'meľwa',
  'meľwu',
  'meľap',
  'meľin',
  'meľer',
  'meľur',
  'meľir',
  'meľxa',
  'meľco',
  'meľŋo',
  'meľma',
  'meľri',
  'meľho',
  'meľwo',
  'meľño',
  'meľoo',
  'mexpa',
  'mèxpa',
  'mexxu',
  'mexŋu',
  'mèxŋu',
  'miroo',
  'mìroa',
  'mìrow',
  'mìrèp',
  'mìrèñ',
  'mìrèy',
  'mìrèr',
  'mitpa',
  'mìtpa',
  'mittu',
  'mìyee',
  'miyòe',
  'miŋni',
  'miŋre',
  'moàwa',
  'mompa',
  'mòmpa',
  'hàmou',
  'muñpa',
  'muñni',
  'muñey',
  'muñre',
  'muñke',
  'muñco',
  'mupey',
  'mùpŋo',
  'mùpma',
  'mùpri',
  'mùpho',
  'mùpwo',
  'mùpño',
  'mùpoo',
  'mupii',
  'mùŋuy',
  'mùŋui',
  'mwàľi',
  'mwèki',
  'mwìni',
  'mwìre',
  'hàmwì',
  'mwìco',
  'mwoni',
  'mwore',
  'hàmwo',
  'mwoco',
  'hàmye',
  'myeŋo',
  'myema',
  'myeri',
  'myeho',
  'myewo',
  'myeño',
  'myeoo',
  'naàwa',
  'nampa',
  'nàmpa',
  'hànau',
  'naàca',
  'naoap',
  'naàhe',
  'naàxe',
  'naàur',
  'naàir',
  'naàxa',
  'naàco',
  'naare',
  'naaii',
  'naoaa',
  'naore',
  'nakip',
  'nakoa',
  'nakow',
  'nakap',
  'nakiñ',
  'nakiy',
  'nakir',
  'nakop',
  'namap',
  'namoa',
  'namow',
  'namañ',
  'namay',
  'namar',
  'namop',
  'ñañpa',
  'ñañni',
  'ñañey',
  'ñañre',
  'ñañke',
  'ñañco',
  'nañpa',
  'nañop',
  'nañwa',
  'nañwu',
  'nañap',
  'nañin',
  'nañip',
  'nañar',
  'nañep',
  'nañur',
  'nañir',
  'nañxa',
  'nañco',
  'nanap',
  'nanoa',
  'nanow',
  'nanañ',
  'nanay',
  'nanar',
  'nanop',
  'naxpa',
  'nàxpa',
  'naxxu',
  'ñàxni',
  'nàxte',
  'nayap',
  'nayoa',
  'nayow',
  'nayañ',
  'nayay',
  'nayar',
  'nayop',
  'ñayña',
  'ñayño',
  'ñàyña',
  'ñeàwa',
  'ñempa',
  'ñèmpa',
  'hàñeu',
  'neàwa',
  'nempa',
  'nèmpa',
  'hàneu',
  'ñekpa',
  'ñekni',
  'ñekey',
  'ñekre',
  'ñekke',
  'ñekco',
  'ñèkwo',
  'nenaa',
  'ñenaa',
  'ñetpa',
  'ñetŋo',
  'ñetma',
  'ñetri',
  'ñetho',
  'ñetwo',
  'ñetño',
  'ñetoo',
  'ñetip',
  'ñèxey',
  'ñèypa',
  'ñèyni',
  'ñèyey',
  'ñèyre',
  'ñèyke',
  'ñèyco',
  'ñeŋpa',
  'ñèŋpa',
  'ñeŋŋu',
  'ñeŋna',
  'ñiľki',
  'ñiľko',
  'ñìľki',
  'ñìñiy',
  'ñìñii',
  'ñixme',
  'ñìxme',
  'ñiŋpa',
  'ñiŋni',
  'ñiŋey',
  'ñiŋre',
  'ñiŋke',
  'ñiŋco',
  'ñuhño',
  'ñuhum',
  'ñùhum',
  'ñùmke',
  'ñùmŋo',
  'ñùmmo',
  'ñùmma',
  'ñùmro',
  'ñùmri',
  'ñùmho',
  'ñùmwo',
  'ñùmño',
  'ñùmoo',
  'ñumpa',
  'ñumni',
  'ñumey',
  'ñumre',
  'ñumke',
  'ñumco',
  'ñuppa',
  'ñupni',
  'ñupey',
  'ñupre',
  'ñupke',
  'ñupco',
  'ñùyey',
  'ñùyre',
  'òdoni',
  'òdore',
  'òdani',
  'òdare',
  'oohyo',
  'ootir',
  'ùùmpa',
  'oxtèy',
  'oxtèi',
  'òŋeni',
  'òŋere',
  'òŋŋex',
  'powke',
  'papke',
  'pañke',
  'payke',
  'parke',
  'paŋwo',
  'patwo',
  'pacoo',
  'hàpai',
  'paàca',
  'paoap',
  'paàhe',
  'paàxe',
  'paàur',
  'paàir',
  'paàxa',
  'paàco',
  'pahiy',
  'pahii',
  'pakpa',
  'pàkpa',
  'pakku',
  'paket',
  'pañpa',
  'pañop',
  'pañwa',
  'pañwu',
  'pañap',
  'pañin',
  'pañip',
  'pañar',
  'pañep',
  'pañur',
  'pañir',
  'pañxa',
  'pañco',
  'papap',
  'papoa',
  'papow',
  'papañ',
  'papay',
  'papar',
  'papop',
  'papai',
  'pařey',
  'pařre',
  'pařii',
  'pawey',
  'pawre',
  'pawii',
  'paxpa',
  'paxni',
  'paxey',
  'paxre',
  'paxke',
  'paxco',
  'pelpa',
  'pèlpa',
  'pellu',
  'pelya',
  'pèlya',
  'pexpì',
  'pèxpì',
  'peypa',
  'pèypa',
  'peyyu',
  'peŋaľ',
  'pèŋaľ',
  'pinpa',
  'pinŋo',
  'pinma',
  'pinri',
  'pinho',
  'pinwo',
  'pinño',
  'pinoo',
  'pinip',
  'pìnpa',
  'pinnu',
  'pitya',
  'pìtya',
  'plàat',
  'pòdey',
  'pòdre',
  'pòdii',
  'hàprì',
  'hàpra',
  'hàpro',
  'prixi',
  'přore',
  'přoii',
  'pròto',
  'pròti',
  'pròta',
  'pròte',
  'pùeti',
  'pumpa',
  'pùmpa',
  'pummu',
  'pyaha',
  'pyaho',
  'pyàha',
  'pyaro',
  'pyàri',
  'pyòyi',
  'řakey',
  'řakoo',
  'řàkwa',
  'řàkwu',
  'řakaa',
  'řàkap',
  'řàkin',
  'řakii',
  'řàkar',
  'řakee',
  'řàkur',
  'řàkir',
  'řàkxa',
  'řàkco',
  'řàkàn',
  'řappa',
  'řàppa',
  'řappu',
  'řawpa',
  'řàwpa',
  'řawwu',
  'rawèt',
  'ràwèt',
  'raŋey',
  'raŋre',
  'raŋii',
  'raŋoo',
  'raŋaa',
  'raŋee',
  'řècex',
  'řèrpa',
  'řèrni',
  'řèrey',
  'řèrre',
  'řèrke',
  'řèrco',
  'řèrep',
  'řèree',
  'řetey',
  'řetre',
  'řetii',
  'rewpa',
  'rewni',
  'rewey',
  'rewre',
  'rewke',
  'rewco',
  'řeyni',
  'řiŋoo',
  'řimaa',
  'řirii',
  'řiyey',
  'řiyre',
  'řihoo',
  'řiwoo',
  'řiñoo',
  'řiooo',
  'řiire',
  'řìñaw',
  'řiŋŋo',
  'řiŋma',
  'řiŋri',
  'řiŋho',
  'řiŋwo',
  'řiŋño',
  'řoŋwo',
  'řotwo',
  'řocoo',
  'hàřoi',
  'řodřà',
  'řòľax',
  'řoľey',
  'řoñèŋ',
  'řorŋo',
  'řorma',
  'řorri',
  'řorho',
  'řorwo',
  'řorño',
  'řoroo',
  'řorwa',
  'řorwu',
  'řorap',
  'řorin',
  'řoror',
  'řorur',
  'řorir',
  'řorxa',
  'řorco',
  'ruŋop',
  'rumap',
  'ruŋwo',
  'rurip',
  'ruypa',
  'ruhop',
  'ruwop',
  'ruñop',
  'ruoop',
  'rutwo',
  'rucoo',
  'řuàwa',
  'řumpa',
  'řùmpa',
  'hàřuu',
  'ruàwa',
  'rumpa',
  'rùmpa',
  'hàruu',
  'rumni',
  'rumre',
  'runŋo',
  'runma',
  'runri',
  'runho',
  'runwo',
  'runño',
  'runoo',
  'řupni',
  'řupre',
  'ruppa',
  'rùppa',
  'ruppu',
  'řurey',
  'řurre',
  'řurii',
  'řurke',
  'řurŋo',
  'řùrŋo',
  'řurmo',
  'řùrma',
  'řurro',
  'řùrri',
  'řurho',
  'řùrho',
  'řurwo',
  'řùrwo',
  'řurño',
  'řùrño',
  'řuroo',
  'řùroo',
  'ruxpa',
  'rùxpa',
  'ruxxu',
  'rùxte',
  'ruŋpa',
  'rùŋpa',
  'ruŋŋu',
  'řyàax',
  'tampa',
  'tàmpa',
  'tammu',
  'tamau',
  'tamèy',
  'tanni',
  'tanre',
  'tàñwo',
  'tàñwa',
  'tàpel',
  'tatap',
  'tatoa',
  'tatow',
  'tatañ',
  'tatay',
  'tatar',
  'tatop',
  'tàxwe',
  'hàtèi',
  'teini',
  'teire',
  'hàtei',
  'teico',
  'terpa',
  'tèrpa',
  'terru',
  'tetpa',
  'tetni',
  'tetey',
  'tetre',
  'tetke',
  'tetco',
  'texpa',
  'tèxpa',
  'texxu',
  'tìcay',
  'tiìca',
  'tioap',
  'tiìhe',
  'tiìxe',
  'tiìur',
  'tiìir',
  'tiìxa',
  'tiìco',
  'tikti',
  'tìkti',
  'tilkè',
  'tilko',
  'tìlkè',
  'tiñak',
  'tippa',
  'tìppa',
  'tippu',
  'tipau',
  'tirpa',
  'tìrpa',
  'tirru',
  'tirik',
  'tìrik',
  'tirra',
  'tirro',
  'tìrùk',
  'tlaxa',
  'tlàxa',
  'topco',
  'toyuk',
  'tòyuk',
  'traaa',
  'tràaa',
  'treŋo',
  'treŋa',
  'treŋi',
  'treŋe',
  'tròni',
  'tròre',
  'hàtrò',
  'tròco',
  'tuxpa',
  'tùxpa',
  'tùxta',
  'tuxye',
  'tùxye',
  'tuŋey',
  'tuŋre',
  'tuŋii',
  'hàtwe',
  'tweřa',
  'twèřa',
  'hàtwi',
  'twiŋo',
  'twima',
  'twiri',
  'twiho',
  'twiwo',
  'twiño',
  'twioo',
  'twico',
  'twaco',
  'twoco',
  'twixo',
  'tyare',
  'tyoaa',
  'tyore',
  'tyaàn',
  'tyako',
  'tyàko',
  'tyàka',
  'tyàki',
  'tyàke',
  'tyika',
  'tyixe',
  'tyìxe',
  'tyuko',
  'tyùki',
  'hàuca',
  'hàuco',
  'ùhluy',
  'ùhlui',
  'ùmiŋo',
  'ùmima',
  'ùmiri',
  'ùmiho',
  'ùmiwo',
  'ùmiño',
  'ùmioo',
  'ùmiii',
  'ùmuco',
  'uñoni',
  'uñani',
  'uñini',
  'uñeni',
  'hàwai',
  'hàwoa',
  'waľpa',
  'wàľpa',
  'waľľu',
  'wañuù',
  'wañuo',
  'wàñuù',
  'warmo',
  'wàrmà',
  'hàwei',
  'wèdaà',
  'wèdek',
  'wèdiy',
  'wèdio',
  'wèdii',
  'wèdoo',
  'wèdoa',
  'wèdow',
  'wèdip',
  'wèdiñ',
  'wèdir',
  'wèľke',
  'wèľŋo',
  'wèľmo',
  'wèľma',
  'wèľro',
  'wèľri',
  'wèľho',
  'wèľwo',
  'wèľño',
  'wèľoo',
  'welwè',
  'wèlwè',
  'èèmpa',
  'weñpa',
  'weñni',
  'weñey',
  'weñre',
  'weñke',
  'weñco',
  'wèwko',
  'wèwki',
  'wexpa',
  'wèxpa',
  'wexxu',
  'weypa',
  'wèypa',
  'weyyu',
  'wiŋpa',
  'wiŋni',
  'wiŋey',
  'wiŋre',
  'wiŋke',
  'wiŋco',
  'wľaco',
  'wľaca',
  'wľoco',
  'wľahe',
  'wľaxe',
  'wľaur',
  'wľair',
  'wľaxa',
  'woani',
  'woare',
  'woaco',
  'wohut',
  'wòhut',
  'wùkey',
  'wukeo',
  'wùkei',
  'wukoo',
  'wùkoa',
  'wùkow',
  'wùkep',
  'wùkeñ',
  'wùker',
  'wyàaŋ',
  'xàlŋa',
  'xàlŋo',
  'xampa',
  'xàmpa',
  'xammu',
  'xàxay',
  'xeani',
  'xeare',
  'xippa',
  'xìppa',
  'xippu',
  'xixpa',
  'xìxpa',
  'xixxu',
  'xlàam',
  'xniìñ',
  'xocid',
  'xòcid',
  'xòdiŋ',
  'xòeni',
  'xòani',
  'xòoni',
  'xòľay',
  'xoľao',
  'xòľai',
  'xomaa',
  'xòmaa',
  'xoxòx',
  'xòxòx',
  'xucta',
  'xùcta',
  'xùľŋo',
  'xùľma',
  'xùľri',
  'xùľho',
  'xùľwo',
  'xùľño',
  'xùľoo',
  'xùuľo',
  'xùuľa',
  'xùuľi',
  'xùuľe',
  'xyàař',
  'yàyni',
  'yàyco',
  'yàini',
  'yàico',
  'yoani',
  'yoaco',
  'yowni',
  'yowco',
  'yàpni',
  'yàpco',
  'yàñni',
  'yàñco',
  'yàrni',
  'yàrco',
  'yaàwa',
  'yampa',
  'yàmpa',
  'hàyau',
  'hàyàa',
  'yaàŋà',
  'yaàŋa',
  'yaàŋo',
  'yarni',
  'yarco',
  'yatye',
  'yàtye',
  'yaxŋa',
  'yàxŋa',
  'yaŋuy',
  'yekpa',
  'yèkpa',
  'yekku',
  'yeřyi',
  'yèřyi',
  'yèŋoa',
  'yèŋow',
  'yèŋup',
  'yèŋuñ',
  'yèŋuy',
  'yèŋur',
  'yìhma',
  'yìhmo',
  'yìhmi',
  'yoàwa',
  'yompa',
  'yòmpa',
  'hàyou',
  'hàyoa',
  'yòcap',
  'yowpa',
  'yòppa',
  'yòñpa',
  'yòypa',
  'yòrpa',
  'yòhep',
  'yòxep',
  'yòxap',
  'yòcop',
  'yokri',
  'yòkri',
  'yoľpa',
  'yoľŋo',
  'yoľma',
  'yoľri',
  'yoľho',
  'yoľwo',
  'yoľño',
  'yoľoo',
  'yoľip',
  'yoľni',
  'yoľre',
  'yòmiy',
  'yòmio',
  'yòmii',
  'youŋo',
  'youma',
  'youri',
  'youho',
  'youwo',
  'youño',
  'youoo',
  'yoxpa',
  'yòxpa',
  'yoxxu',
  'yoypa',
  'yoyyu',
  'yoyau',
  'yuypa',
  'yuyni',
  'yuyey',
  'yuyre',
  'yuyke',
  'yuyco',
  'ŋàaco',
  'ŋàaca',
  'ŋàaci',
  'ŋàace',
  'ŋañaà',
  'ŋàpat',
  'ŋařpa',
  'ŋařni',
  'ŋařey',
  'ŋařre',
  'ŋařke',
  'ŋařco',
  'ŋarno',
  'ŋàrnè',
  'ŋawka',
  'ŋàwka',
  'ŋaypa',
  'ŋàypa',
  'ŋayyu',
  'ŋeŋop',
  'ŋemap',
  'ŋeŋwo',
  'ŋerip',
  'ŋeypa',
  'ŋehop',
  'ŋewop',
  'ŋeñop',
  'ŋeoop',
  'ŋetwo',
  'ŋecoo',
  'ŋedap',
  'ŋedoa',
  'ŋedow',
  'ŋedañ',
  'ŋeday',
  'ŋedar',
  'ŋedop',
  'ŋèdal',
  'ŋèrup',
  'ŋèruy',
  'ŋèrui',
  'ŋirìŋ',
  'ŋìrìŋ',
  'ŋirùp',
  'ŋìrùp',
  'ŋiŋyà',
  'ŋìŋyà',
  'hàŋlu',
  'ŋluŋo',
  'ŋluma',
  'ŋluri',
  'ŋluho',
  'ŋluwo',
  'ŋluño',
  'ŋluoo',
  'ŋolpa',
  'ŋolni',
  'ŋoley',
  'ŋolre',
  'ŋolke',
  'ŋolco',
  'ŋuŋoo',
  'ŋumaa',
  'ŋurii',
  'ŋuyey',
  'ŋuyre',
  'ŋuhoo',
  'ŋuwoo',
  'ŋuñoo',
  'ŋuooo',
  'ŋuire',
  'ŋulke',
  'ŋulŋo',
  'ŋùlŋo',
  'ŋulmo',
  'ŋùlma',
  'ŋulro',
  'ŋùlri',
  'ŋulho',
  'ŋùlho',
  'ŋulwo',
  'ŋùlwo',
  'ŋulño',
  'ŋùlño',
  'ŋuloo',
  'ŋùloo',
  'ŋuľwa',
  'ŋuľwu',
  'ŋuľap',
  'ŋuľin',
  'ŋuľur',
  'ŋuľir',
  'ŋuľxa',
  'ŋuľco',
  'ŋuxni',
  'ŋuxre',
  'ŋweey',
  'ŋweei',
  'ŋweeu',
  'ŋyati',
  'ŋyato',
  'ŋyata',
  'ŋyate',
  'ŋyèki',
  'ŋyuľi',
  'ŋyuľo',
  'ŋyuľa',
  'ŋyuľe',
  'pèxtu',
  'pèxto',
  'tiľok',
  'pèxku',
]
if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
