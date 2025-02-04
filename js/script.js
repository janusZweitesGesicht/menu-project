let input = document.querySelector('.inp');
let tourSearch;
let newTour;
let spanT;
let arr = [];

let vylet = document.querySelector('.vylet');

// let butOfSearch = document.createElement('.buttonOfSearching');
// butOfSearch

let main = document.createElement('div');
main.classList.toggle('main');
let left = document.createElement('button');
   left.classList.add('left');
   left.innerText = '<';
   let right = document.createElement('button');
   right.classList.add('right');
   right.innerText = '>';
   let scr = document.createElement('div');
   scr.classList.add('scr');
   let b1 = document.createElement('div');
   b1.classList.add('b1');
   let b2 = document.createElement('div');
   b2.classList.add('b2');

let logotype = document.querySelector('.logotype');
logotype.addEventListener('click', function(){
   location.reload();
})







let arrTour =[];










let min = document.querySelector('#min');
let plus = document.querySelector('#pl');
let ch = document.querySelector('#ch');
let selCh = document.querySelector('#childs');
let sel = document.querySelectorAll('.q');
let num = document.querySelector('#num').innerHTML;
let x = 0;
let buttonMoreTours = document.querySelector('.moretours');
let tours = document.querySelector('.tours');
let touri = document.querySelector('.touri');
let arrayOfExcursions = [{country:'Германия', name: 'По Мюнхену на велосипеде', background: 'url("../img/exc/minxen.jpeg")'},{country:'Германия', name: 'Берлинская стена', background: 'url("../img/exc/berlin_wall.jpg")'}, {country:'Греция', name: 'Индивидуальные экскурсии на Крите', background: 'url("../img/exc/krit.jpg")'}, {country:'Грузия', name: 'Тбилиси-Мцхета: две древние легенды', background: 'url("../img/exc/tbilisi.jpg")'}, {country:'Египет', name: 'Каир на автобусе', background: 'url("../img/exc/kair.jpeg")'}, {country:'Испания', name: 'Башни Серранос', background: 'url("../img/exc/bashni.jpg")'},{country:'Турция', name: 'Обзорная экскурсия по Стамбулу', background: 'url("../img/exc/istanbul.jpg")'}, {country:'Швейцария', name: 'Тур по Швейцарии', background: 'url("../img/exc/sweatherland.png")'} , {country:'Швеция', name: 'Фьорды и ледники Норвегии', repeat:'none', background: 'url("../img/exc/norway.jpg")'}, {country:'Норвегия', name: 'Фьорды и ледники Норвегии', background: 'url("../img/exc/norway.jpg")'}, {name: 'Однодневная экскурсия в Канди', country: 'Шри-Ланка', background: 'url("../img/exc/kandy-one-day.jpg")'}, {name: 'Однодневная экскурсия в Галле', country: 'Шри-Ланка', background: 'url("../img/exc/galle-one-day.jpg")'}];
let arrayOfTours = [{name: 'Германия', city: ['Дюссельдорф','Мюнхен', 'Росток'], hotels: ['Hyatt Regency Dusseldorf','Sofitel Munich Bayerpost', 'Park Hotel Huebner'], tourists: 2, nights: 7, background: 'url("../img/germany.jpg")', photo: ['url("../img/dusseldorf.jpg")', 'url("../img/miunhen.jpg")', 'url("../img/rostok.jpg")'], text: ['Дюссельдорф – столица земли Северный Рейн – Вестфалия, крупный политический и экономический центр Германии, один из самых богатых городов Германии. Сегодня это ещё и знаменитый центр искусства и моды. Дюссельдорф сегодня – это современный город, в котором жизнь не останавливается ни на секунду! Город насчитывает 800-летнюю историю, но, к сожалению, многие исторические памятники здесь были уничтожены во время войны.', 'Мюнхен – столица земли Бавария, которую местные жители называют «второй столицей Германии». Действительно, этот третий по величине и второй по посещаемости туристами город Германии славится своим имперским размахом, как в архитектурных формах, так и в стиле жизни! Изумительная красота Мюнхена, величественные соборы эпохи барокко и помпезные строения в стиле классицизма дарят Мюнхену все черты,присущие мировым столицам.', 'Росток – один из самых крупных городов-портов Германии . Расположен на Балтийском побережье. Во время войны частично был разрушен, однако многие здания сохранились. Готические церкви и монастыри, старинные здания и башни сегодня определяют внешний вид города. Кроме того, здесь до сих пор дома строятся в североевропейском стиле кирпичной готики.  Отдых в Ростоке – это замечательная возможность удачно соединить экскурсионный  отдых в Ростоке и пляжный отдых в курорте Варнемюнде, расположенный неподалеку от города. Туры в Росток популярны среди любителей спокойного, тихого, познавательного отдыха.']},
 {name: 'Греция', city: ['Остров Кос','Остров Крит', 'Пелопоннесский полуостров'], hotels: [], tourists: 3, nights: 5, background: 'url("../img/greece.jpeg")', photo: ['url("../img/kos.jpg")', 'url("../img/krit.jpg")', 'url("../img/peloponnes.jpg")'], text: ['Крит — самый большой по площади остров в Греции, это родина Зевса и крупный туристический центр на берегу Средиземного моря.  Тут появилась древнейшая минойская цивилизация, а археологические раскопки ведутся до сих пор, ученые находят следы древних дворцов, мечетей, крепостей.', 'Кос - остров с традиционным размеренным укладом жизни. Идеален для неторопливого отдыха, велосипедных прогулок и семейного отдыха.', 'Пелопоннес – самая южная часть центральной Греции – отличается насыщенными экскурсионными программами. Туристы здесь открывают для себя богатое культурно-историческое наследие греков, знакомятся с уникальными достопримечательностями. Существенным плюсом полуострова является удобство совершения из Пелопоннеса однодневных экскурсионных поездок в различные районы Греции. А к небольшим минусам можно отнести лишь длительный трансфер из аэропорта и сравнительно небольшое количество крупных курортных комплексов.']},
 {name: 'Грузия', city: ['Анаклия','Батуми', 'Боржоми'], hotels: [], tourists: 5, nights: 14, background: 'url("../img/georgia.jpg")', photo: ['url("../img/Anaklia.jpg")', 'url("../img/batumi.jpg")', 'url("../img/borjomi.jpg")'], text: ['Анаклия -  это самый молодежный, самый современный из морских курортов Грузии. Здесь ежегодно вырастают новые отели, совершенствуется инфраструктура и сервис. Туристов привлекают достопримечательности, которые можно наблюдать на этом курорте: самый длинный пешеходный мост в Европе через реку Ингури, руины древней крепости и амфитеатр.','Батуми -  Батуми является морскими воротами Грузии. Его название имеет греческий корень и переводится как «глубокая гавань». Курорт расположен в субтропической климатической зоне и знаменит своей буйной экзотической растительностью: магнолии, олеандры, пальмы и кипарисы. Ароматы здесь царят просто неповторимые.', 'Боржоми - Это бальнеологический курорт, наверное, самый известный за пределами Грузии. Он расположен на высоте до 810 м над уровнем моря. Этот курорт стал популярен еще в начале 20 века,главным образом  благодаря целебной минеральной воде,которая и прославила Борожоми во многих странах и  по сей день выпускается с одноименным курорту названием.']}, 
 {name: 'Египет', city: ['Хургада','Макади Бей', 'Таба'], hotels: [], tourists: 2, nights: 10, background: 'url("../img/egypt.jpg")', photo: ['url("../img/hurgada.jpg")', 'url("../img/makadi-bay.jpg")', 'url("../img/taba.jpg")'], text: ['Хургада - Среди курортов Египта на Красном море настоящей жемчужиной считается Хургада. Этот курорт имеет многолетнюю историю и отличается хорошими песчаными пляжами. На большинстве курортных пляжей (за редким исключением) удобный и ровный вход в воду без кораллового дна. Именно поэтому ТОП лучших курортов Египта для отдыха с детьми возглавляет Хургада. В Хургаде прекрасно развита туристическая инфраструктура: здесь расположено множество отелей различной звездности, есть масса вариантов развлечений, также из Хургады удобнее всего отправляться на экскурсии в Каир, Александрию, Луксор', 'Макади-Бей - Туристам, которые хотят размеренного уединенного отдыха, лучше отправляться в Макади-Бей. За территорией отеля здесь не шумит курортный город — вокруг располагается только пустыня. При желании развлечься или совершить шопинг можно отправиться в Хургаду, которая расположена неподалеку. Песок на пляжах Макади-Бей неоднородный, а купаться в большинстве случаев можно только в специальных тапочках из-за кораллового дна.', 'Таба – небольшой курортный город, который расположен на границе Египта и Израиля, в северной части Эйлатского залива. На протяжении нескольких последних лет Таба стала стремительно развиваться, как популярный туристический курорт.']}, 
 {name: 'Испания', city: ['Барселона','Коста-Верде', 'Менорка'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/spain.jpg")', photo: ['url("../img/barcelona.jpg")', 'url("../img/kosta-verde.jpg")', 'url("../img/menorka.jpg")'], text: ['Барселона - Знаменитая Барселона — сердце Испании. Город, который достоин самых ярких эпитетов и восторженных откликов. Ее улицы были местом прогулок гениев, многочисленные таверны всегда с распростертыми объятиями встречали бездельников. Все это происходило под шум волн. ', 'Коста-Верде - Испанский курорт Коста-Верде расположен в северной части побережья. Его береговая линия тянется вдоль Атлантики около 200 км. Главное развлечение и цель приезда большинства туристов из Европы — это рыбалка. Курорты на севере Испании богаты экскурсионными маршрутами, которые в большинстве своем берут начало у древнего порта Льянес, затрагивая на своем пути небольшие живописные деревни,  рассыпанные вокруг.В устье Вильявильоса расположены пляжи, окруженные со всех сторон яблоневыми садами.', 'Менорка - Второй по величине остров Испании — Менорка, очень отличается от других курортов страны. Его еще называют островом огней и ветров. И вовсе не случайно. Эти лучшие курорты Испании на море полны тайн и загадок. Сохранилось много упоминаний о том,что на обрывистых берегах периодически можно увидеть вспыхивающие огни.Что это за вспышки, почему они возникают?  Тайна неизвестного природного явления до сих пор не разгадана.']}, 
 {name: 'Норвегия', city: ['Хафьель','Осло', 'Ставангер'], hotels: [], tourists: 7, nights: 20, background: 'url("../img/norway.jpg")', photo: ['url("../img/hafel.jpg")', 'url("../img/oslo.jpg")', 'url("../img/stavanger.jpg")'], text: ['Осло - столица норвегии.Погода зимой в столице Норвегии тёплая и влажная, температура редко опускается ниже минус 7 градусов. Не удивляйтесь, если в январе пойдёт дождь.  Но Осло — компактный город, и нескольких часов хватит, чтобы неспешно изучить центр .На главной улице — Карла Юхана, расположены ратуша Осло, где вручают Нобелевскую премию (раз в неделю в ратуше устраивают бесплатные экскурсии).', 'Хафьель – горнолыжный курорт, который входит в тройку крупнейших в Норвегии. Он предлагает множество трасс как для начинающих, так и для опытных лыжников. К тому же, здесь есть сноупарки и современная инфраструктура для спорта и отдыха.(64 отеля поблизости)', 'Ставангер – самый богатый город, нефтяная столица Норвегии. Здесь расположены различные образовательные и исследовательские учреждения и институты. К тому же, в 2008 году город был объявлен Культурной столицей Европы.']},
 {name: 'Турция', city: ['Анкара','Анаталья', 'Стамбул'], hotels: [], tourists: 6, nights: 20, background: 'url("../img/turkey.jpg")', photo: ['url("../img/ankara.jpg")', 'url("../img/antaliya.jpg")', 'url("../img/stambul.jpg")'], text: ['Анталья – курортный город, который славится своей Старой гаванью, где швартуются яхты, и пляжами, окруженными огромными отелями. Он расположен на Турецкой Ривьере – участке средиземноморского побережья Турции, который привлекает туристов благодаря прозрачным голубым водам. Ворота Адриана, построенные в честь посетившего Анталью в 130 году римского императора, и возведенная во II веке башня Хыдырлык, откуда открывается превосходный вид на гавань, напоминают о том периоде, когда город был важным портом Римской империи.','Анкара - Это динамичный мегаполис, расположенный на холмах Центральной Анатолии. Это настоящий символ современной Турции, место с которого началась новая эра для турецкого народа. Для посетителей представляют интерес памятники истории Анкары, руины Гордиона, многочисленные музеи города.', 'Стамбул – крупнейший город Турции на берегах пролива Босфор, который разделяет его на европейскую и азиатскую части. В Старом городе сохранились здания различных исторических эпох. В районе Султанахмет расположены возведенный римлянами Ипподром, где в течение многих столетий проводили гонки на колесницах, и Египетский обелиск. Византийский собор Святой Софии славится своим огромным куполом VI века и роскошными христианскими мозаиками.']}, 
 {name: 'Швейцария', city: ['Давос','Озеро Леман', 'Санкт-Мориц'], hotels: [], tourists: 2, nights: 9, background: 'url("../img/sweatherland.png")', photo: ['url("../img/davos.jpg")', 'url("../img/leman.jpg")', 'url("../img/sent-moric.jpg")'], text: ['Давос - самый высокогорный город Швейцарии окружен разными зонами катания, в сумме - 310 км горнолыжных трасс, основные и самые интересные районы отделены друг от друга, для перемещения между ними нужно пользоваться поездом или автобусом.', 'Cанкт-Моритц - самый элитный швейцарский курорт. Вместе с трассами долины Энгадин - 350 км горнолыжных трасс. Стоит иметь ввиду, что их значительная часть разбросана по долинеи не полностью соединена подъемниками, но зоны катания очень красивые.', 'Женевское озеро(озеро Леман) — самое большое в Европе. Вода в нём чистая, но весьма прохладная: купаться можно только в июле-августе. В основном туристов привлекает сюда не столько пляж, сколько чистейший воздух, тёплый климат (летом до +32..+36°C, при этом жара не ощущается) и эффектное сочетание субтропической растительности и заснеженных горных вершин.']}, 
 {name: 'Швеция', city: ['Оре','Стокгольм', 'Висбю'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/sweeden.jpg")', photo: ['url("../img/orejpg.jpg")', 'url("../img/stockholm.jpg")', 'url("../img/visbi.jpg")'], text: ['Висби -  Висби - столица острова Готланд, который находится в Балтийском море. На остров Готланд, расположенный в центре Балтийского моря, туристы попадают паромом (двухчасовая поездка) или на самолете, прибывая в  уникальный и живописный средневековый город Висбю, известный своей городской стеной, вьющимися улочками, вымощенными булыжником, и множеством древних зданий, построенных из камня и дерева, церквей и развалин. Сам вид города свидетельствует о его истории в качестве одного из главных торговых пунктов Ганзейского союза в Средние века.', 'Оре - Оре самый известный горнолыжный курорт Швеции. Находится он в западной части страны, недалеко от границы с Норвегией, у подножья гор, самая высокая из которых - Орескутан, высотой 1429 м над уровнем моря. Перепад высот в предалх Оре в среднем составляет 880 м.','Стокгольм – столица и крупнейший город Швеции, основной административно-политический, промышленный, торговый, финансовый и культурный центр страны - Стокгольм. Стокгольм расположен у пролива, соединяющего озеро Меларен с Балтийским морем.' ]}, 
 {name: 'Шри-Ланка', city: ['Бадулла','Элла', 'Канди'], hotels: [], tourists: 4, nights: 14, background: 'url("../img/shri-lanka.jpg")', photo: ['url("../img/badulla.jpg")', 'url("../img/ella.jpg")', 'url("../img/kandi.jpg")'], text: ['Бадулла хоть и является известным туристическим местом, реально в самом городе делать нечего.  Здесь имеется базовая туристическая инфраструктура, он соединен с крупными городами железной дорогой, но ни пляжей, ни развлечений, ни каких-либо серьезных достопримечательностей здесь нет.А известен городок туристам лишь только благодаря одному из самых крупных и известных водопадов Шри-Ланки - Данхинда', 'Элла - небольшой поселок, расположенный в центральном высокогорье острова Шри-Ланка. Город находится в малонаселенной провинции Ува в окружении гор, покрытых чайными плантациями, тропическими лесами и джунглями. Расстояние от Эллы до международного аэропорта Коломбо составляет 215 км, до Матары - 168 км, в город можно добраться на поезде или автобусе. Неподалеку от города располагаются несколько водопадов разной высоты и  бесчисленное количество чайных плантаций.', 'Канди - Канди является одним из наиболее популярных туристических объектов Шри-Ланки. Самой известной достопримечательностью города является храм зуба Будды (также называемый Шри Далада Малигава), признанный объектом Всемирного наследия ЮНЕСКО. Отели и гесты Канди преимущественно расположены на склонах гор, окружающих рукотворное озеро, с панорамным видом на город.']}];
let germany = document.querySelector('.germany');
let georgia = document.querySelector('.georgia');
let greece = document.querySelector('.greece');
let egypt = document.querySelector('.egypt');
arrayOfTours[0].perem = germany;
arrayOfTours[1].perem = greece;
arrayOfTours[2].perem = georgia;
arrayOfTours[3].perem = egypt;
let blurBlock;
for(let i = 0; i<arrayOfTours.length; i++){
   if(i<4){
      arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background;
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfTours[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfTours[i].name;
      arrayOfTours[i].perem.addEventListener('click', ()=>{
         localStorage.setItem('name', arrayOfTours[i].name);
         localStorage.setItem('city', arrayOfTours[i].city);
         window.location.href = '../html/flags.html';
      });
   }
   else{
      arrayOfTours[i].perem = document.createElement('div');
      arrayOfTours[i].perem.classList.add('tour');

   }
}

buttonMoreTours.addEventListener('click', ()=>{
   buttonMoreTours.innerText = '';
   buttonMoreTours.style.setProperty('--sq-display', 'none');
   buttonMoreTours.style.height = '0%';
   tours.style.height = '1000px';
   tours.style.padding = '0px 0px 50px 0px';
   let secondLine = document.createElement('div');
   let thirdLine = document.createElement('div');
   secondLine.classList.add('tourLine2');
   thirdLine.classList.add('tourLine3');
   tours.append(secondLine);
   tours.append(thirdLine);
   touri.style.height = '33%';

   let spain;
   let norway;
   let turkey;
   let sweatherland;
   let sweeden;
   let shri_lanka;
   let counterCountries = 0;
   let countryTourCreating = (country) => {
      counterCountries++;
      country = document.createElement('div');
      country.classList.add('tour');
      arrayOfTours[counterCountries+3].perem = country;
      if(counterCountries<5) secondLine.append(country)
      else if(counterCountries>4) {
         country.classList.add('tourMarginClass');
         thirdLine.append(country);
      }
   }
   countryTourCreating(spain);
   countryTourCreating(norway);
   countryTourCreating(turkey);
   countryTourCreating(sweatherland);
   countryTourCreating(sweeden);
   countryTourCreating(shri_lanka);
   
   for(let i = 4; i<arrayOfTours.length; i++){
      arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background;
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfTours[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfTours[i].name;
      arrayOfTours[i].perem.addEventListener('click', ()=>{
         localStorage.setItem('name', arrayOfTours[i].name);
         localStorage.setItem('city', arrayOfTours[i].city);
         window.location.href = '../html/flags.html';
      });
  }

})

let allNum = 0;//!переменная общего числа людишек

min.addEventListener('click', ()=>{
   num--;
   if(num < 1)num = 1;
   document.querySelector('#num').innerHTML = num;
   allNum = num;
});

plus.addEventListener('click', ()=>{
   num++;
   if(num > 20)num = 20;
   document.querySelector('#num').innerHTML = num;
   allNum = num;
});

ch.addEventListener('click', ()=>{
   selCh.classList.toggle('tok');
});

// selCh.addEventListener('click', ()=>{
//    let n = document.createElement('div');
//    n.classList.add('newCh');
//    //document.querySelector('.chil').append(n);
// });
let arrayOfHolidayTours = [{name: 'Новый год в Венеции + Бавария', background: 'url("../img/holiday/venecia.jpg")'}, {name: 'Новый год в Афинах' , background: 'url("../img/holiday/afiny.jpg")'}, {name: '8 марта в Исландии', background: 'url("../img/holiday/ireland.jpg")'}, {name:'Очарование Италии', background: 'url("../img/holiday/italy.jpeg")' }, {name:'Рождество на Мальте', background: 'url("../img/holiday/malta.jpg")'}, {name: 'Рождество в отеле Alpina (Гудаури)', background: 'url("../img/holiday/christmas.jpg")'}];
let suggestions_tours_container = document.querySelector('.suggestions-tours-container');
let formBlock = document.querySelector('.formBlock');
let suggestions = document.querySelector('.suggestions');
let toursBlock = document.querySelector('.tours');
let otherOffersContainer = document.createElement('div');
otherOffersContainer.classList.toggle('otherOffersClass');

let ch1 = document.querySelector('.ch1');
let ch2 = document.querySelector('.ch2');
let ch3 = document.querySelector('.ch3');
let ch4 = document.querySelector('.ch4');
let excCounter = 0;
arrayOfExcursions.forEach(el => {
   el.perem = document.createElement('div');
   el.perem.classList.add('tour');
})

arrayOfHolidayTours.forEach(el => {
   el.perem = document.createElement('div');
   el.perem.classList.add('tour');
})
let firstExcLine = document.createElement('div');
let secondExcLine = document.createElement('div');
let thirdExcLine = document.createElement('div');
let spanExcBlock = document.createElement('div');
let firstHolExcLine = document.createElement('div');
let secondHolExcLine = document.createElement('div');
let thirdHolExcLine = document.createElement('div');
let spanHolExcBlock = document.createElement('div');
let tipe = 0;
ch1.classList.add('active');

ch1.addEventListener('click', ch1Func);

ch2.addEventListener('click',ch2Func);

ch3.addEventListener('click', ch3Func);

ch4.addEventListener('click', ch4Func);

function excCreating(){
   spanExcBlock.classList.add('excSpanBl');
   firstExcLine.classList.add('tourLine2');
   secondExcLine.classList.add('tourLine2');
   thirdExcLine.classList.add('tourLine3');
   spanExcBlock.innerText = 'Экскурсии';
   otherOffersContainer.append(spanExcBlock);
   otherOffersContainer.append(firstExcLine);
   otherOffersContainer.append(secondExcLine);
   otherOffersContainer.append(thirdExcLine);
   otherOffersContainer.style.height = '800px';
   secondExcLine.style['padding-bottom'] = '20px';
   secondExcLine.style['padding-top'] = '20px';
   secondExcLine.style['border-top'] = 'solid 2px black';
   secondExcLine.style['border-bottom'] = 'solid 2px black';

   // thirdExcLine.style['margin-top'] = ;
   for(let i = 0; i<arrayOfExcursions.length;i++){
      if(arrayOfExcursions[i].repeat == 'none')  console.log('loh')
      else {
         if(i<4) firstExcLine.append(arrayOfExcursions[i].perem)
         else if(i<8) secondExcLine.append(arrayOfExcursions[i].perem)
         else {
            thirdExcLine.append(arrayOfExcursions[i].perem);
            arrayOfExcursions[i].perem.style.margin =  ' 0px 2.5%';
         }
      }
      arrayOfExcursions[i].perem.style['background-image'] = arrayOfExcursions[i].background; 
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfExcursions[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfExcursions[i].name;
      blurBlock.style['font-size'] = '120%';
      blurBlock.style.display = 'inline-block';
      blurBlock.classList.add('excClassSpan');
      blurBlock.style['padding-top'] = '3.5%';
   }

}

function holidayToursCreating(){
   spanHolExcBlock.classList.add('excSpanBl');
   firstHolExcLine.classList.add('tourLine2');
   secondHolExcLine.classList.add('tourLine3');
   spanHolExcBlock.innerText = 'Праздничные предложения';
   otherOffersContainer.style.height = '630px';
   otherOffersContainer.style['background-image'] = 'url("../img/holiday/gifSnow.gif")';
   otherOffersContainer.style['padding-top'] = '0px';
   otherOffersContainer.style['padding-bottom'] = '0px';
   spanHolExcBlock.style.height = '7%';
   otherOffersContainer.append(spanHolExcBlock);
   otherOffersContainer.append(firstHolExcLine);
   otherOffersContainer.append(secondHolExcLine);
   secondHolExcLine.style['padding-top'] = '20px';
   secondHolExcLine.style['border-top'] = 'solid 2px black';

   for(let i = 0; i<arrayOfHolidayTours.length; i++){

         if(i<4) firstHolExcLine.append(arrayOfHolidayTours[i].perem)
         else {
            secondHolExcLine.append(arrayOfHolidayTours[i].perem);
            arrayOfHolidayTours[i].perem.style.margin =  ' 0px 2.5%';
         }
         arrayOfHolidayTours[i].perem.style['background-image'] = arrayOfHolidayTours[i].background; 
      blurBlock = document.createElement('div');
      blurBlock.classList.add('blur');
      arrayOfHolidayTours[i].perem.append(blurBlock);
      blurBlock.innerText = arrayOfHolidayTours[i].name;
      blurBlock.style['font-size'] = '120%';
      blurBlock.style.display = 'inline-block';
      blurBlock.classList.add('excClassSpan');
      blurBlock.style['padding-top'] = '3.5%';
   }

}

function ch1Func(event) {
   searchCounter = 0;
   if(arrTour.length > 0) arrTour[arrTour.length-1].style.display = 'none';
   
   for(let i = 0; i< arr.length; i++) arr[i].style.display = 'none';
   ch1.classList.add('active');
   ch2.classList.remove('active');
   ch3.classList.remove('active');
   ch4.classList.remove('active');
   formBlock.style.display = 'block';
   suggestions.style.display = 'flex';
   toursBlock.style.display = 'flex';
   otherOffersContainer.style.display = 'none';
   ch1.removeEventListener('click', ch1Func);

ch2.addEventListener('click',ch2Func);

ch3.addEventListener('click', ch3Func);

ch4.addEventListener('click', ch4Func);
}

function ch2Func(event) {
   if(arrTour.length > 0) arrTour[arrTour.length-1].style.display = 'none';

   
   for(let i = 0; i< arr.length; i++) arr[i].style.display = 'none';
   searchCounter = 0;
   main.style.display = 'none';
   ch1.classList.remove('active');
   ch2.classList.add('active');
   ch3.classList.remove('active');
   ch4.classList.remove('active');
   formBlock.style.display = 'none';
   suggestions.style.display = 'none';
   toursBlock.style.display = 'none';
   spanExcBlock.style.display = 'flex';
   firstExcLine.style.display = 'flex';
   secondExcLine.style.display = 'flex';
   thirdExcLine.style.display = 'flex';
   spanHolExcBlock.style.display = 'none';
   firstHolExcLine.style.display = 'none';
   secondHolExcLine.style.display = 'none';
   thirdHolExcLine.style.display = 'none';
   otherOffersContainer.classList.add('otherOffersClass');
   otherOffersContainer.style.display = 'flex';
   otherOffersContainer.style.background = '#4e4d4d';
   otherOffersContainer.style.height = '800px'


   suggestions_tours_container.append(otherOffersContainer);
   ch2.removeEventListener('click',ch2Func);
   ch1.addEventListener('click', ch1Func);


   
   ch3.addEventListener('click', ch3Func);
   
   ch4.addEventListener('click', ch4Func);

   if(tipe == 0)excCreating();
   tipe++;
}

let z5 = 0;
let slid;
let createCount = 0;
function ch3Func(event) {
   if(arrTour.length > 0) arrTour[arrTour.length-1].style.display = 'none';


   for(let i = 0; i< arr.length; i++) arr[i].style.display = 'none';
   searchCounter = 0;
   main.style.display = 'flex';

   ch1.classList.remove('active');
   ch2.classList.remove('active');
   ch3.classList.add('active');
   ch4.classList.remove('active');
   formBlock.style.display = 'none';
   suggestions.style.display = 'none';
   toursBlock.style.display = 'none';
   spanExcBlock.style.display = 'none';
   firstExcLine.style.display = 'none';
   secondExcLine.style.display = 'none';
   thirdExcLine.style.display = 'none';
   spanHolExcBlock.style.display = 'none';
   firstHolExcLine.style.display = 'none';
   secondHolExcLine.style.display = 'none';
   thirdHolExcLine.style.display = 'none';
   otherOffersContainer.classList.add('otherOffersClass');
   suggestions_tours_container.append(otherOffersContainer);
   otherOffersContainer.style.display = 'flex';
   otherOffersContainer.style.height = '600px';
   otherOffersContainer.style.background = '#4e4d4d'
   ch3.removeEventListener('click', ch3Func);
   ch1.addEventListener('click', ch1Func);
   ch2.addEventListener('click',ch2Func);
   ch4.addEventListener('click', ch4Func);

   // if(createCount == 0){
   
   b1.style['background-image']= 'url("../img/humor/pic0.jpg")';
   b1.innerText = 'Skidok.net';
   b2.style['background-image']= 'url("../img/humor/pic1.jpg")';

   b2.innerText = 'Дома хорошо, а в Турции на море лучше';
   if(createCount == 0){

   main.append(left);
   main.append(scr);

   main.append(right);
   }
   scr.append(b1);
   scr.append(b2);
   if(z5 == 0)otherOffersContainer.append(main);
   // }
   z5 = 9;
   /*[red, yellow, green, blue, purple, brown, pink, gray]*/
   slid = {
      slides:[0, 1, 2, 3, 4, 5, 6, 7],
      frame:0,
      set: function(num){
         if(num == 0){
            b1.style['background-image']= 'url("../img/humor/pic0.jpg")';

            b1.innerText = 'Skidok.net';
            b2.style['background-image']= 'url("../img/humor/pic1.jpg")';

            b2.innerText = 'Дома хорошо, а в Турции на море лучше';
         };
         if(num == 1){
            b1.style['background-image']= 'url("../img/humor/pic1.jpg")';
            b1.innerText = 'Дома хорошо, а в Турции на море лучше';
            b2.style['background-image']= 'url("../img/humor/pic2.jpg")';

            b2.innerText = 'Акций нет, но вы держитесь';
         };
         if(num == 2){
            b1.style['background-image']= 'url("../img/humor/pic2.jpg")';
            b1.innerText = 'Акций нет, но вы держитесь';
            b2.style['background-image']= 'url("../img/humor/pic3.jpg")';
            b2.innerText = 'Главное, быть счастливым во время нашего тура, и не важно, какое заключение напишет психиатр'
         };
         if(num == 3){
            b1.innerText = 'Главное, быть счастливым во время нашего тура, и не важно, какое заключение напишет психиатр'
            b1.style['background-image']= 'url("../img/humor/pic3.jpg")';
            b2.style['background-image']= 'url("../img/humor/pic4.jpg")';
            b2.innerText = 'Завта подходит срок дедлайна. Нормальные тимлиды: ничего срашного, утро вечера мудренее. Аня в 4 часа ночи: за работу!'
         };
         if(num == 4){
            b1.innerText = 'Завта подходит срок дедлайна. Нормальные тимлиды: ничего срашного, утро вечера мудренее. Аня в 4 часа ночи: за работу!'
            b1.style['background-image']= 'url("../img/humor/pic4.jpg")';
            b2.style['background-image']= 'url("../img/humor/pic5.jpg")';
            b2.innerText = 'Ты не найдешь никого круче, чем Жозеф Луи Лагранж'
         };
         if(num == 5){
            b1.innerText = 'Ты не найдешь никого круче, чем Жозеф Луи Лагранж';
            b1.style['background-image']= 'url("../img/humor/pic5.jpg")';

            b2.style['background-image']= 'url("../img/humor/pic6.jpg")';
            b2.innerText = '- Мне нужна твоя одежда, тур в Египет, ботинки и мотоцикл. - Ты забыл сказать волшебное слово. - Bazz Tour'
         };
         if(num == 6){
            b1.innerText = '- Мне нужна твоя одежда, тур в Египет, ботинки и мотоцикл. - Ты забыл сказать волшебное слово. - Bazz Tour'
            b1.style['background-image']= 'url("../img/humor/pic6.jpg")';
            b2.style['background-image']= 'url("../img/humor/pic7.jpg")';
            b2.innerText = 'Какие три слова чаще всего встречаются в надписях по всему миру? — “I love you“.  — Я вас умоляю, эти три слова “Го в тур“';
         };
         if(num == 7){
            b1.innerText = 'Какие три слова чаще всего встречаются в надписях по всему миру? — “I love you“.  — Я вас умоляю, эти три слова “Го в тур“';
            b1.style['background-image']= 'url("../img/humor/pic7.jpg")';
            b2.style['background-image']= 'url("../img/humor/pic0.jpg")';
            b2.innerText = 'Skidok.net';

         };
      },
      init: function(){
         this.set(this.frame);
      },
      left: function(){
         this.frame--;
         if(this.frame < 0)this.frame = this.slides.length-1;
         this.set(this.frame);
      },
      right: function(){
         this.frame++;
         if(this.frame == this.slides.length)this.frame = 0;
         this.set(this.frame);		
      }
   };
   window.onload = function(){
      slid.init();
   };
   left.addEventListener('click', ()=>{
      slid.left();
   });
   right.addEventListener('click', ()=>{
      slid.right();
   });
   createCount++;
}
let holCounter = 0;
function ch4Func(event) {
   if(arrTour.length > 0) arrTour[arrTour.length-1].style.display = 'none';


   for(let i = 0; i< arr.length; i++) arr[i].style.display = 'none';
   searchCounter = 0;
   main.style.display = 'none';

   otherOffersContainer.style['background-image'] = 'url("../img/holiday/gifSnow.gif")';
   ch1.classList.remove('active');
   ch2.classList.remove('active');
   ch3.classList.remove('active');
   ch4.classList.toggle('active');
   formBlock.style.display = 'none';
   suggestions.style.display = 'none';
   toursBlock.style.display = 'none';
   spanExcBlock.style.display = 'none';
   firstExcLine.style.display = 'none';
   secondExcLine.style.display = 'none';
   thirdExcLine.style.display = 'none';
   spanHolExcBlock.style.display = 'flex';
   firstHolExcLine.style.display = 'flex';
   secondHolExcLine.style.display = 'flex';
   thirdHolExcLine.style.display = 'flex';
   otherOffersContainer.classList.add('otherOffersClass');
   suggestions_tours_container.append(otherOffersContainer);
ch4.removeEventListener('click', ch4Func);
otherOffersContainer.style.display = 'flex';
otherOffersContainer.style['background-color'] = '#4e4d4d'

ch1.addEventListener('click', ch1Func);

ch2.addEventListener('click',ch2Func);

ch3.addEventListener('click', ch3Func);
if (holCounter == 0) holidayToursCreating();
holCounter++;
}

let r1 = document.querySelector('.r1');
let r2 =document.querySelector('.r2');
let r3 =document.querySelector('.r3');
let r4 = document.querySelector('.r4');
let r5 = document.querySelector('.r5');
let s1 = document.querySelector(".ss");
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let bar = document.getElementsByClassName('bar');

r1.onclick = function() {
    s1.style.marginLeft="0";
    for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r1.classList.add('barcheck');

   };
r2.onclick = function() {
   s1.style.marginLeft="-20%";
   for(let i=0;i<bar.length;i++){
   bar[i].classList.remove('barcheck');
   }
   r2.classList.add('barcheck');
};
r3.onclick = function() {
   s1.style.marginLeft="-40%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r3.classList.add('barcheck');
   };

r4.onclick = function() {
   s1.style.marginLeft="-60%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r4.classList.add('barcheck');
   };
r5.onclick = function() {
   s1.style.marginLeft="-80%";
   for(let i=0;i<bar.length;i++){
      bar[i].classList.remove('barcheck');
      }
   r5.classList.add('barcheck');
   };
let magrin = +window.getComputedStyle(s1).marginLeft.slice(0, -2);
arrow1.onclick=function(){
   magrin += 20;
   if(magrin > 0){

      s1.style.marginLeft ="-80%";
      magrin = -80;

}
   else{s1.style.marginLeft = magrin + "%"; }
   k();
}
arrow2.onclick=function(){
   
   magrin -= 20;
   if(magrin < -80){
      s1.style.marginLeft ="0";
      magrin = 0;
}
   else{s1.style.marginLeft = magrin + "%"; }
   k();
}
r1.classList.add('barcheck')
let k = () =>{
   if(magrin == 0){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r1.classList.add('barcheck')
   }
   else if(magrin == -20){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r2.classList.add('barcheck');
      
   }
   else if(magrin == -40){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r3.classList.add('barcheck');
   }
   else if(magrin == -60){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r4.classList.add('barcheck');
   }
   else if(magrin == -80){
      for(let i=0;i<bar.length;i++){
         bar[i].classList.remove('barcheck');
         }
      r5.classList.add('barcheck');
   }
}






let butT = document.querySelector('#lll');
let ppp = document.querySelector('#ppp');
let lang = document.querySelector('.language');
let az = document.querySelector('#az');

const uhb = () => {
   document.querySelector('.zap').style.display = 'flex';
   document.querySelector('.ex').style.display = 'flex';
   document.querySelector('.fucktors').style.display = 'flex';
   document.querySelector('.sales').style.display = 'flex';
   butT.removeEventListener('click', uhb);
   ppp.addEventListener('click', ygv);
}

const ygv = () => {
   document.querySelector('.zap').style.display = 'none';
   document.querySelector('.ex').style.display = 'none';
   document.querySelector('.fucktors').style.display = 'none';
   document.querySelector('.sales').style.display = 'none';
   butT.addEventListener('click', uhb);
   ppp.removeEventListener('click', ygv);
}

const okm = () => {
   lang.removeEventListener('click', okm);
   lang.addEventListener('click', ijn);
   az.style.display = 'flex';
   az.style.visibility = 'visible';
   // lang.style.visibility = 'hidden';
}

const ijn = () => {
   az.style.display = 'none';
   az.style.visibility = 'hidden';
   lang.removeEventListener('click', ijn);
   lang.addEventListener('click', okm);
}

butT.addEventListener('click', uhb);
ppp.addEventListener('click', ygv);
lang.addEventListener('click', okm);
lang.addEventListener('click', ijn);
let textInp = '';
let searchCounter = 0;


let inputFunc = () => {
   ch3.addEventListener('click', ch3Func);
   ch1.addEventListener('click', ch1Func);
   ch2.addEventListener('click',ch2Func);
   ch4.addEventListener('click', ch4Func);
   if(searchCounter == 0 ){
   textInp = input.value.toUpperCase();
   suggestions.style.display = 'none';
   tours.style.display = 'none';
      tourSearch = document.createElement('div');
      tourSearch.classList.add('tourSearch');
      suggestions_tours_container.append(tourSearch);
      searchCounter++;
      // tourSearch.append(firstSerLine);
   }
   for(let i = 0; i<arrayOfTours.length; i++){
      arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background; 
      // tourSearch.innerText = '';
      if(arrayOfTours[i].name.toUpperCase().indexOf(textInp) > -1 &&  arr.every(el => arrayOfTours[i].name !== el.innerText)) {
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
         newTour = document.createElement('div');
         newTour.classList.add('newTourClass');
         spanT = document.createElement('span');
         spanT.innerText = arrayOfTours[i].name;
         newTour.style['background-image'] = arrayOfTours[i].background;
         // newTour.innerText = arrayOfTours[i].name;
         tourSearch.append(newTour);
         newTour.append(spanT);
         arr.push(newTour);
      }
      else if(arr.some(el => el.innerText.toUpperCase().indexOf(input.value.toUpperCase()) < 0)){
         for(let y = 0; y<arr.length;y++){
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
            if(arr[y].innerText.toUpperCase().indexOf(input.value.toUpperCase()) < 0){
               arr[y].style.display = 'none';
            }
         }
      }
      else if(arrayOfTours[i].name.toUpperCase().indexOf(textInp) > -1 && arr.some(el => arrayOfTours[i].name == el.innerText && el.style.display == 'none')) {
         for(let y = 0; y<arr.length;y++){
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
            if(arr[y].innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1){
               arr[y].style.display = 'flex';
            }
         }
      }
      else if(input.value.length == 0){
         suggestions.style.display = 'flex';
         tours.style.display = 'flex';
         tourSearch.style.display =' none';
      }
      // else if(input.value.length >=1){

      //    tourSearch.innerText = 'Упс, ничего не найдено(';
      // }
   }
   for(let i = 0; i<arrayOfExcursions.length; i++){
      // arrayOfExcursions[i].perem.style['background-image'] = arrayOfTours[i].background; 
      // tourSearch.innerText = '';
      if(arrayOfExcursions[i].name.toUpperCase().indexOf(textInp) > -1 &&  arr.every(el => arrayOfExcursions[i].name !== el.innerText) && input.value !== '') {
         newTour = document.createElement('div');
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
         newTour.classList.add('newTourClass');
         spanT = document.createElement('span');
         spanT.innerText = arrayOfExcursions[i].name;
         newTour.style['background-image'] = arrayOfExcursions[i].background;
         // newTour.innerText = arrayOfTours[i].name;
         tourSearch.append(newTour);
         newTour.append(spanT);
         arr.push(newTour);
      }
      else if(arr.some(el => el.innerText.toUpperCase().indexOf(input.value.toUpperCase()) < 0) && input.value !== ''){
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
         for(let y = 0; y<arr.length;y++){
            if(arr[y].innerText.toUpperCase().indexOf(input.value.toUpperCase()) < 0){
               arr[y].style.display = 'none';
            }
         }
      }
      else if(arrayOfExcursions[i].name.toUpperCase().indexOf(textInp) > -1 && arr.some(el => arrayOfExcursions[i].name == el.innerText && el.style.display == 'none') && input.value !== '') {
         for(let y = 0; y<arr.length;y++){
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
            if(arr[y].innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1){
               arr[y].style.display = 'flex';
            }
         }
      }
      // else if(input.value.length >=1){
      
      //    tourSearch.innerText = 'Простите, но у нас таких животных нет(';

      // }

   }
   for(let i = 0; i<arrayOfHolidayTours.length; i++){
      // arrayOfExcursions[i].perem.style['background-image'] = arrayOfTours[i].background; 
      // tourSearch.innerText = '';
      if(arrayOfHolidayTours[i].name.toUpperCase().indexOf(textInp) > -1 &&  arr.every(el => arrayOfHolidayTours[i].name !== el.innerText)) {
         newTour = document.createElement('div');
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
         newTour.classList.add('newTourClass');
         spanT = document.createElement('span');
         spanT.innerText = arrayOfHolidayTours[i].name;
         newTour.style['background-image'] = arrayOfHolidayTours[i].background;
         // newTour.innerText = arrayOfTours[i].name;
         tourSearch.append(newTour);
         newTour.append(spanT);
         arr.push(newTour);
      }
      else if(arr.some(el => el.innerText.toUpperCase().indexOf(input.value.toUpperCase()) < 0)){
         for(let y = 0; y<arr.length;y++){
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
            if(arr[y].innerText.toUpperCase().indexOf(input.value.toUpperCase()) < 0){
               arr[y].style.display = 'none';
            }
         }
      }
      else if(arrayOfHolidayTours[i].name.toUpperCase().indexOf(textInp) > -1 && arr.some(el => arrayOfHolidayTours[i].name == el.innerText && el.style.display == 'none')) {
         for(let y = 0; y<arr.length;y++){
         tourSearch.style.display ='flex';
         suggestions.style.display = 'none';
         tours.style.display = 'none';
            if(arr[y].innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1){
               arr[y].style.display = 'flex';
            }
         }
      }
   }

}
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let a5 = document.querySelector('.a5');
let a6 = document.querySelector('.a6');
ch1.classList.add('active');
let activeloc = document.querySelector('.activelocation');
// let activeVar = 0;

a1.addEventListener('click', function() {
   a1.classList.add('activeL');
   a2.classList.remove('activeL');
   a3.classList.remove('activeL');
   a4.classList.remove('activeL');
   a5.classList.remove('activeL');
   a6.classList.remove('activeL');
   // activeVar = 1;
   changeLocation(1);
});

a2.addEventListener('click',function() {
   a1.classList.remove('activeL');
   a2.classList.add('activeL');
   a3.classList.remove('activeL');
   a4.classList.remove('activeL');
   a5.classList.remove('activeL');
   a6.classList.remove('activeL');
   // activeVar = 2;
   changeLocation(2);
});

a3.addEventListener('click', function() {
   a1.classList.remove('activeL');
   a2.classList.remove('activeL');
   a3.classList.add('activeL');
   a4.classList.remove('activeL');
   a5.classList.remove('activeL');
   a6.classList.remove('activeL');
   // activeVar = 3;
   changeLocation(3);
});

a4.addEventListener('click', function() {
   a1.classList.remove('activeL');
   a2.classList.remove('activeL');
   a3.classList.remove('activeL');
   a4.classList.add('activeL');
   a5.classList.remove('activeL');
   a6.classList.remove('activeL');
   // activeVar = 4;
   changeLocation(4);
});

a5.addEventListener('click', function() {
   a1.classList.remove('activeL');
   a2.classList.remove('activeL');
   a3.classList.remove('activeL');
   a4.classList.remove('activeL');
   a5.classList.add('activeL');
   a6.classList.remove('activeL');
   // activeVar = 5;
   changeLocation(5);
});

a6.addEventListener('click', function() {
   a1.classList.remove('activeL');
   a2.classList.remove('activeL');
   a3.classList.remove('activeL');
   a4.classList.remove('activeL');
   a5.classList.remove('activeL');
   a6.classList.add('activeL');
   // activeVar = 6;
   changeLocation(6);
});

let changeLocation = (activeVar) =>{
   if (activeVar == 1){
     activeloc.innerHTML = "Беларусь";
   }
   if (activeVar == 2){
     activeloc.innerHTML = "Россия";
   }
   if (activeVar == 3){
     activeloc.innerHTML = "Болгария";
   }
   if (activeVar == 4){
     activeloc.innerHTML = "Египет";
   }
   if (activeVar == 5){
     activeloc.innerHTML = "Казахстан";
   }
   if (activeVar == 6){
     activeloc.innerHTML = "Украина";
   }
  }

  let wrapper = document.querySelector('.wrapper');
let countries = document.querySelector('.countr');
let show = false;
let men = document.createElement('div');
let ull = document.createElement('ul');

men.classList.add('men');
men.style.position = 'absolute';
men.style.width = '350px';
men.style.height = '300px';
men.style.background = 'grey';
men.style.top = '50px';
men.style.left = 0;
// /* top: 200px;
// left: 0px; */

countryCounter = 0;
countries.addEventListener('click', function() {
   if(!show || countryCounter%2 == 0){
   if(countryCounter == 0) countries.append(men)
   else men.style.display = 'flex';
   men.append(ull);
   ull.classList.add('belarus');
   let data= ["Беларусь", "Минск", "Гомель"]
for (let i = 0; i< data.length; i++) {
  let li = document.createElement('li');
  if(i == 0){
   ull.innerHTML = data[i];}
  else{
  li.innerHTML = data[i];
  ull.append(li);
}
}
let ull2 = document.createElement('ul');
ull2.classList.add('doppp')
men.append(ull2);
let data2= ["Россия", "Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Воронеж", "Хабаровск", "Владивосток"];
for (let n = 0; n< data2.length; n++) {
   let li2 = document.createElement('li');
   if(n == 0){
    ull2.innerHTML = data2[n];
    ull2.addEventListener('click', function(event){
      window.location.href = '../html/countries/russia.html';
    })}
   else{
   li2.innerHTML = data2[n];
   ull2.append(li2);
 }
 }
 let ull3 = document.createElement('ul');
 ull3.classList.add('dop')
men.append(ull3);
let data3= ["Болгария", "София", "Варна"];
for (let k = 0; k< data3.length; k++) {
   let li3 = document.createElement('li');
   if(k == 0){
    ull3.innerHTML = data3[k];
    ull3.addEventListener('click', function(event){
      window.location.href = '../../html/countries/bolgaria.html';
    })
   }
   else{
   li3.innerHTML = data3[k];
   ull3.append(li3);
 }
 }
 let ull4 = document.createElement('ul');
 ull4.classList.add('dopp')
 men.append(ull4);
 let data4= ["Египет", "Каир", "Александрия", "Порт-Саид"];
 for (let p = 0; p< data4.length; p++) {
    let li4 = document.createElement('li');
    if(p == 0){
     ull4.innerHTML = data4[p];
     ull4.addEventListener('click', function(vevent){
      window.location.href = '../../html/countries/egypt.html';
    }) }
    else{
    li4.innerHTML = data4[p];
    ull4.append(li4);
    
  }}
  show=true
}
else{
   //УДАЛЕНИЕ БЛОКА
   show = false;
   men.style.display = 'none';

}
countryCounter++;
});


let but = document.querySelector('.buttonOfSearching');
let searchtours = 0;

let elem1 = document.querySelector('.vylet');
let elem2 = document.querySelector('.countrr');
let elem3 = document.querySelector('.date');
let elem4 = document.querySelector('.night');
let elem5 = document.querySelector('.vz')
let elem6 = document.querySelector('.chi');


but.addEventListener('click', function() {

   if(elem3.value !== ''){
      console.log(elem1.value)
      console.log(elem2.value)
      console.log(elem3.value)
      console.log(+elem4.value)
      console.log(+elem5.textContent)
      console.log(elem6.value);



      ch3.addEventListener('click', ch3Func);
      ch1.addEventListener('click', ch1Func);
      ch2.addEventListener('click',ch2Func);
      ch4.addEventListener('click', ch4Func);
      if(searchtours == 0 ){
      textInp = input.value.toUpperCase();
         tourSearch = document.createElement('div');
         tourSearch.classList.add('tourSearch');
         suggestions_tours_container.prepend(tourSearch);
         searchtours++;
         // tourSearch.append(firstSerLine);
      }

//       let arrayOfExcursions = [{country:'Германия', name: 'По Мюнхену на велосипеде', background: 'url("../img/exc/minxen.jpeg")'},{country:'Германия', name: 'Берлинская стена', background: 'url("../img/exc/berlin_wall.jpg")'}, {country:'Греция', name: 'Индивидуальные экскурсии на Крите', background: 'url("../img/exc/krit.jpg")'}, {country:'Грузия', name: 'Тбилиси-Мцхета: две древние легенды', background: 'url("../img/exc/tbilisi.jpg")'}, {country:'Египет', name: 'Каир на автобусе', background: 'url("../img/exc/kair.jpeg")'}, {country:'Испания', name: 'Башни Серранос', background: 'url("../img/exc/bashni.jpg")'},{country:'Турция', name: 'Обзорная экскурсия по Стамбулу', background: 'url("../img/exc/istanbul.jpg")'}, {country:'Швейцария', name: 'Тур по Швейцарии', background: 'url("../img/exc/sweatherland.png")'} , {country:'Швеция', name: 'Фьорды и ледники Норвегии', repeat:'none', background: 'url("../img/exc/norway.jpg")'}, {country:'Норвегия', name: 'Фьорды и ледники Норвегии', background: 'url("../img/exc/norway.jpg")'}, {name: 'Однодневная экскурсия в Канди', country: 'Шри-Ланка', background: 'url("../img/exc/kandy-one-day.jpg")'}, {name: 'Однодневная экскурсия в Галле', country: 'Шри-Ланка', background: 'url("../img/exc/galle-one-day.jpg")'}];
// let arrayOfTours = [{name: 'Германия', city: ['Дюссельдорф','Мюнхен', 'Росток'], hotels: ['Hyatt Regency Dusseldorf','Sofitel Munich Bayerpost', 'Park Hotel Huebner'], tourists: 2, nights: 7, background: 'url("../img/germany.jpg")'}, {name: 'Греция', city: ['Остров Кос','Остров Крит', 'Пелопоннесский полуостров'], hotels: [], tourists: 3, nights: 5, background: 'url("../img/greece.jpeg")'}, {name: 'Грузия', city: ['Анаклия','Батуми', 'Боржоми'], hotels: [], tourists: 5, nights: 14, background: 'url("../img/georgia.jpg")'}, {name: 'Египет', city: ['Хургада','Макади Бей', 'Таба'], hotels: [], tourists: 2, nights: 10, background: 'url("../img/egypt.jpg")'}, {name: 'Испания', city: ['Барселона','Коста-Верде', 'Менорка'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/spain.jpg")'}, {name: 'Норвегия', city: ['Хафьель','Осло', 'Ставангер'], hotels: [], tourists: 7, nights: 20, background: 'url("../img/norway.jpg")'},{name: 'Турция', city: ['Анкара','Анаталья', 'Стамбул'], hotels: [], tourists: 6, nights: 20, background: 'url("../img/turkey.jpg")'}, {name: 'Швейцария', city: ['Давос','Озеро Леман', 'Санкт-Мориц'], hotels: [], tourists: 2, nights: 9, background: 'url("../img/sweatherland.png")'}, {name: 'Швеция', city: ['Оре','Стокгольм', 'Висбю'], hotels: [], tourists: 4, nights: 8, background: 'url("../img/sweeden.jpg")'}, {name: 'Шри-Ланка', city: ['Бадулла','Элла', 'Канди'], hotels: [], tourists: 4, nights: 14, background: 'url("../img/shri-lanka.jpg")'}];



      for(let i = 0; i<arrayOfTours.length; i++){
         arrayOfTours[i].perem.style['background-image'] = arrayOfTours[i].background; 
         // tourSearch.innerText = '';
         if(((elem6.value !== '' && +arrayOfTours[i].tourists >= +elem5.textContent + 1) || (elem6.value == '' && arrayOfTours[i].tourists >= +elem5.textContent)) && arrayOfTours[i].nights >= +elem4.value && elem2.value == arrayOfTours[i].name) {
            if(arrTour.length > 0) arrTour[arrTour.length-1].style.display = 'none';
            tourSearch.style.display ='flex';
            newTour = document.createElement('div');
            newTour.classList.add('newTourClass');
            spanT = document.createElement('span');
            spanT.innerText = arrayOfTours[i].name;
            newTour.style['background-image'] = arrayOfTours[i].background;
            // newTour.innerText = arrayOfTours[i].name;
            tourSearch.prepend(newTour);
            newTour.append(spanT);
            arrTour.push(newTour);
         }
         
      }
      


   }
   else alert('Введите дату тура');
      
   
   

})


localStorage.setItem('arrayOfTours', JSON.stringify(arrayOfTours));
localStorage.setItem('arrayOfExcursions', JSON.stringify(arrayOfExcursions));
localStorage.setItem('arrayOfHolidayTours', JSON.stringify(arrayOfHolidayTours));
