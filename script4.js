let dataCompany =
{"551289663" : {
	"Name":'"ООО РОГА И КОПЫТА"',
	"infoAbout": 
	{
		'Размер компании':'средний бизнес',
		'Оборот':	'150 млн. рублей',
		'Отрасль':	'Логистика',
		'Адрес' :	'улица Строителей, 106к2',
		'Тип отношений' :	'Текущий клиент',
		'Срок отношений' :	'3 года'
	},
	"contactPersons": ['Майорова Кира Кирилловна', 'Никитин Николай Петрович', 'Аникин Кирилл Витальевич', 'Смирнов Михаил Савельевич', 
	'Смирнов Илья Алексеевич', 'Дмитрий Борисович Александров'],
	
	'historyAct': [
				{
					'date': 'Вчера',
					'title': 'Встреча по обсуждению очень важных вещей',
					'rezult' : 'Была проведена демонстрация', 
					'notes' : 'Доп Заметки'
				},
				{
					'date': '20.03.2021',
					'title': 'Встреча по обсуждению очень важных вещей',
					'rezult' : 'Была проведена демонстрация', 
					'notes' : 'Доп Заметки'
				}
			],
	'last':'Дмитрий Борисович Александров'
	
}};
let product={
	'1' : {
		'name' :'СРОЧНЫЕ КРЕДИТЫ', 
		'stroke':"#33691E",
		'fill':"#CCFF90", 
		'icon':'fas fa-closed-captioning',
		'info': {'Форма кредитования': 'разовый (срочный) кредит, кредитная линия.',
			'Целевое использование': {'main' :'пополнение оборотныхсредств.',
				'others' : ['Срок кредитования: до 1 года для срочных кредитов, до 3 лет для кредитных линий.',
					`Сроки линий и кредитов/траншей определяются на индивидуальной основе в соответствии с техникоэкономическими факторами, прогнозом движения денежных
					средств, длительностью операционного/производственного
				цикла контрагентов`]},
				'Требования к заемщику': 'юридическое лицо, ведущее основную деятельность более 1 года.',
				'Обеспечение':{'main' :'',
					'others' : [`Недвижимое и движимое имущество (залогодателем может
						выступать как сам заемщик, так и третье юридическое
						или физическое лицо), а также поручительство конечных
						бенефициарных собственников компании – физических лиц.
						`, `Возможность проведения кредитных сделок без обеспечения
						предусмотрена для отдельных корпоративных клиентов,
						относящихся к категории финансово-устойчивых в
						соответствии с методиками банка, или по кредитным
					продуктам, риски по которым минимизируются их условиями.`]}
		}
	},
	'2': {
		'name' :'КРЕДИТОВАНИЕ ТЕКУЩЕЙ ДЕЯТЕЛЬНОСТИ КОМПАНИЙ РОЗНИЧНОЙ ТОРГОВЛИ',
		'stroke':"#004D40",
		'fill':"#cdf3f1", 
		'icon':'fas fa-bell',
		'info': {'Форма кредитования': 'кредитная линия с лимитом задолженности.',
			'Режим кредитования': 'с дифференцированными процентными ставками в соответствии с заключенными рамочными соглашениями об открытии кредитных линий.',
			'Целевое использование': 'пополнение оборотных средств.',
			'Срок кредитования': 'до 3 лет (включительно), транши – не более 365 дней.',
			'Требования к заемщику':{'main' :'',
				'others' : [`компания-резидент РФ, осуществляющая торговлю
					продуктами питания, включая алкогольную продукцию (food
					retail) – федеральные продовольственные торговые сети;`, `компания-резидент РФ, осуществляющая торговлю
					непродовольственными товарами (non-food retail) – DIY
					сети, бытовая техника и электроника (мобильные телефоны,
					портативная техника), детские товары, косметика и
				парфюмерия.`]}
		}
	},
	'3': {
		'name' :'ФИНАНСИРОВАНИЕ ПОД СТОИМОСТЬ ВЫПОЛНЕННЫХ РАБОТ',
		'stroke':"#880E4F",
		'fill':"#F8BBD0", 
		'icon':'fas fa-comment',
		'info': {'Форма кредитования': 'кредит, кредитная линия.',
			'Целевое использование': 'пополнение оборотных средств.',
			'Сумма кредитования': 'не более 70% от стоимости выполненных работ, оказанных услуг, поставленной продукции.',
			'Срок кредитования': 'до 3 лет (включительно), максимальный срок траншей до 180 календарных дней.',
			'Требования к заемщику': 'компания-резидент РФ, опыт работы с заказчиком – не менее 1 выполненного и оплаченного в срок контракта.',
			'Перечень возможных заказчиков': {'main' :'',
				'others' : ['государственные корпорации;',
					`ПАО «Татнефть», ПАО «НОВАТЭК», ПАО «Ростелеком», ПАО
					«Транснефть», Госкорпорация «Росатом», ОАО «РЖД», ПАО
					«ЛУКОЙЛ», ПАО «Газпром», ПАО «Россети», ПАО «РусГидро»,
					ОАО «Сургутнефтегаз», ПАО «Интер РАО», их дочерние и
					зависимые общества;`,
				'иные заказчики по согласованию с банком.']},
				'Обеспечение': 'поручительство собственников, залог прав (требований) выручки по финансируемым договорам, залог прав по залоговому счету, иное обеспечение с учетом положения заемщика.'
		}
	},
	'4': {
		'name' :'ТЕНДЕРНОЕ КРЕДИТОВАНИЕ',
		'stroke':"#4A148C",
		'fill':"#B39DDB", 
		'icon':'fas fa-dollar-sign',
		
		'info': {'Форма кредитования': `кредит и невозобновляемая
кредитная линия (с целью формирования
обеспечительных депозитов для участия в
нескольких тендерах/конкурсах/аукционах).`,
			'Целевое использование': `формирование
обеспечительного депозита для участия в тендере/
конкурсе/аукционе (или его лотах), проводимых
с целью размещения заказов на поставки
товаров, выполнение работ, оказание услуг для
государственных и муниципальных нужд, а также
по коммерческим негосударственным заказам.`,
			'Требования к заемщику': 'юридическое лицо, ведущее основную деятельность более 1 года.',
			'Срок кредита/траншей': '3 месяца, либо зависит от даты проведения конкурса/тендера + 3 месяца.',
				'Обеспечение': 'поручительство собственников компании.'
		}
		
	},
	'5' :{
		'name' :'ИНВЕСТИЦИОННОЕ КРЕДИТОВАНИЕ',
		'stroke':"rgb(2 78 133)",
		'fill':"#c4e2f9", 
		'icon':'fa-cc-mastercard fab',
		'info': {'Форма кредитования': 'кредит, кредитная линия.',
			'Целевое использование': `для финансирования
капитальных затрат, сделок M&A,
рефинансирование ранее понесенных
инвестиционных затрат.`,
			'Срок кредитования': 'до 3–5 лет для финансовоустойчивых клиентов.',
			'Условия получения инвестиционного кредитования:': {'main' :'',
				'others' : ['высокая оценка финансового состояния заемщика банком;',
'наличие проработанного бизнес-плана проекта;',
`прогноз движения денежных средств заемщика на срок
кредитования (или же долгосрочная контрактация с
качественными заказчиками), отражающий его способность
обслуживать и возвращать кредитные средства даже при
стрессовом сценарии развития;`,
'деятельность заемщика в отрасли, относимой банком к числу приоритетных;',
'качественный и ликвидный твердый залог',
				'иные заказчики по согласованию с банком.']}
		}
		
	},
	'6': {
		'name' :'ФИНАНСИРОВАНИЕ ЛИЗИНГОВЫХ СДЕЛОК',
		'stroke':"#827717",
		'fill':"#E6EE9C", 
		'icon':'fas fa-truck',
		'info': {'Форма кредитования': 'кредит, кредитная линия.',
			'Целевое использование': 'кредитование лизингодателя на цели приобретения предмета лизинга под залог данного имущества и прав требования по лизинговому договору.',
			'График погашения': 'синхронизируется с графиком лизинговых платежей.',
			'Срок кредитования': 'до 5 лет.',
			'Требования к сторонам сделки': `качественное и
устойчивое финансовое состояние Лизингодателя
и Лизингополучателя, в т.ч. достаточный, с
т.з. банка, уровень собственного капитала и
рентабельности лизинговой компании.`,
			
			'Обеспечение': 'залог предмета лизинга и прав требования по лизинговому договору.'
		}
		
	}
};
let personInfo={
	'Майорова Кира Кирилловна' : {
		'img':'https://image.flaticon.com/icons/png/512/74/74273.png',
		'generalInformation' :{
			'Должность':	'Владелец',
			'ЛПР':	'Да',
			'Телефон':	'8-915-525-57-21',
		'E-mail':	'Maiorov.KK@test.ru'},
		'psychographicSegmentation':{
			'Жизненная позиция':	'Нет',
			'Отношение к иновациям' :	'Настороженное',
			'Ценности':	'польза для компании, самосовершенстование'
		}
		,'recommendedProducts': [
				{
					'probability' : '40', 
					'id':'4'
				},
				{
					'probability' : '60', 
					'id':'5'
				}
				,
				{
					'probability' : '45', 
					'id':'6'
				}
			],
	
			
			'ProductOwnership':[
				'1','2','3'
			]
	}
	, 'Никитин Николай Петрович' : {
		'img':'https://image.flaticon.com/icons/png/512/74/74273.png',
		'generalInformation' :{
			'Должность':	'Генеральный директор',
			'ЛПР':	'Да',
			'Телефон':	'8-915-525-57-21',
		'E-mail':	'Nikitin.NP@test.ru'},
		'psychographicSegmentation':{
			'Жизненная позиция':	'Нет',
			'Отношение к иновациям' :	'Настороженное',
			'Ценности':	'польза для компании, самосовершенстование'
		},
		'recommendedProducts': [
				{
					'probability' : '70', 
					'id':'2'
				},
				{
					'probability' : '50', 
					'id':'4'
				}
			],
	
			
			'ProductOwnership':[
				'1','2','3'
			]
	}
	, 'Аникин Кирилл Витальевич' : {
		'img':'https://image.flaticon.com/icons/png/512/74/74273.png',
		'generalInformation' :{
			'Должность':	'Финансовый директор',
			'ЛПР':	'Да',
			'Телефон':	'8-915-525-57-21',
		'E-mail':	'Anikin.KV@test.ru'},
		'psychographicSegmentation':{
			'Жизненная позиция':	'Нет',
			'Отношение к иновациям' :	'Негативное',
			'Ценности':	'польза для компании, самосовершенстование'
		},
		'recommendedProducts': [
				{
					'probability' : '70', 
					'id':'1'
				},
				{
					'probability' : '50', 
					'id':'3'
				}
				,
				{
					'probability' : '45', 
					'id':'6'
				}
			],
	
			
			'ProductOwnership':[
				'5','2','6'
			]
	}
	, 'Смирнов Михаил Савельевич' : {
		'img':'https://image.flaticon.com/icons/png/512/74/74273.png',
		'generalInformation' :{
			'Должность':	'Маркетинговый директор',
			'ЛПР':	'Нет',
			'Телефон':	'8-915-525-57-21',
		'E-mail':	'Smirnov.MS@test.ru'},
		'psychographicSegmentation':{
			'Жизненная позиция':	'Нет',
			'Отношение к иновациям' :	'Настороженное',
			'Ценности':	'польза для компании, самосовершенстование'
		},
		'recommendedProducts': [
				{
					'probability' : '40', 
					'id':'4'
				},
				
				{
					'probability' : '75', 
					'id':'6'
				}
			],
	
			
			'ProductOwnership':[
				'1','2','3'
			]
	}
	, 'Смирнов Илья Алексеевич' : {
		'img':'https://image.flaticon.com/icons/png/512/74/74273.png',
		'generalInformation' :{
			'Должность':	'Главный бухгалтер',
			'ЛПР':	'Да',
			'Телефон':	'8-915-525-57-21',
		'E-mail':	'Smirnov.IA@test.ru'},
		'psychographicSegmentation':{
			'Жизненная позиция':	'Нет',
			'Отношение к иновациям' :	'Настороженное',
			'Ценности':	'польза для компании, самосовершенстование'
		},
		'recommendedProducts': [
				{
					'probability' : '40', 
					'id':'4'
				},
				{
					'probability' : '60', 
					'id':'5'
				}
				
			],
	
			
			'ProductOwnership':[
				'1','2','3'
			]
	}
	, 'Дмитрий Борисович Александров' : { 
		'img':'https://i.imgur.com/IAgGUYF.jpg',
		'generalInformation' :{
			'Должность':	'Директор по закупкам',
			'ЛПР':	'Да',
			'Телефон':	'8-915-525-57-21',
		'E-mail':	'alexandrov.db@test.ru'},
		'psychographicSegmentation':{
			'Жизненная позиция':	'Активная',
			'Отношение к иновациям' :	'Положительное',
			'Ценности':	'польза для компании, самосовершенстование'
		},
		'recommendedProducts': [
				{
					'probability' : '40', 
					'id':'4'
				},
				{
					'probability' : '60', 
					'id':'5'
				}
				,
				{
					'probability' : '45', 
					'id':'6'
				}
			],
	
			
			'ProductOwnership':[
				'1','2','3'
			]
	}
	
};

function makeTable(data, excretion=false, typeRez='tb'){
	rez='';
	i=0;
	console.log(typeRez);
	for(let [key,value] of Object.entries(data)){
		if(excretion && i++%2==0)
		rez+='<tr style="background: #f9f9f9;"><th><b>'+key+'</b></th><th>'+value+'</th></tr>';
		else if(typeRez=='li')
		if(typeof value == "object")
		rez+='<li class="list"><b>'+key+':</b> '+value.main+'<ul class="additionalList">'+value.others.reduce((str, obj)=>str+'<li>'+ obj+'</li>', '')+'</ul></li>';
		else
		rez+='<li class="list"><b>'+key+':</b> '+value+'</li>';
		else
		rez+='<tr ><th style="width: 50%;"><b>'+key+'</b></th><th>'+value+'</th></tr>';
	}
	return rez;
}
function prod(path){
		document.getElementById('recommendedProducts').innerHTML = personInfo[path].recommendedProducts.reduce((str, obj, index) => str + `<li class="recom tabelForm longTabl">
		<div class="contentProduct" data-toggle="modal" data-target="#exampleModal1${index}"><div style="
		width: 70px;
		height: 100%;
		position: relative;">
		<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
		<circle stroke-dashoffset="0" stroke-width="1" stroke="${product[obj.id].stroke}" fill="${product[obj.id].fill}" r="15.91549430918954" cy="21" cx="21" stroke-dasharray="${obj.probability} ${100 - obj.probability}" class="donut-segment">
		</circle>
		</svg>
		<i class="fa-in-cercle ${product[obj.id].icon}" aria-hidden="true" style="color: ${product[obj.id].stroke};"></i></div><div class="contener-of-offers"><div style="
		text-transform: uppercase;
		">
		${product[obj.id].name}</div><div style="
		font-size: 12px;
		color: #7f7f8a;
		">Вероятность отклика ${obj.probability}%</div></div></div>
		<div class="modal fade" id="exampleModal1${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1${index}" aria-hidden="true" style="display: none;">
		<div class="modal-dialog">
        <div class="modal-content">
		<div class="modal-header borderCollapse" style="
		background: #024e85;
		padding: 8px;
		"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div>
		<div class="text-left align-items-center mid">
		
		<div class="modal-body pb-2" style="
		">
		<h5 style="
		color: #0378cd;
		">${product[obj.id].name}</h5> <div><ul style="
		padding-inline-start: 0px;
		">
		${makeTable(product[obj.id].info, false, 'li')} 
		</ul>
		</div>
		
		</div>
		
		</div>
        </div>
		</div>
	</div></li>`, '');
	
	document.getElementById('ProductOwnership').innerHTML = personInfo[path].ProductOwnership.reduce((str, obj, index) => str + `<li class="recom tabelForm longTabl">
		<div class="contentProduct" data-toggle="modal" data-target="#exampleModal${index}"><div style="
		height: 100%;
		position: relative;">
		<svg width="70px" height="100%" viewBox="0 0 42 42" class="donut">
		<circle stroke-dashoffset="0" stroke-width="1" stroke="${product[obj].stroke}" fill="${product[obj].fill}" r="15.91549430918954" cy="21" cx="21" class="donut-segment">
		</circle>
		</svg>
		<i class="fa-in-cercle ${product[obj].icon}" aria-hidden="false" style="color: ${product[obj].stroke};"></i></div><div class="contener-of-offers"><div style="
		text-transform: uppercase;
		">
		${product[obj].name}</div></div></div>
		<div class="modal fade" id="exampleModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel${index}" aria-hidden="true" style="display: none;">
		<div class="modal-dialog">
        <div class="modal-content">
		<div class="modal-header borderCollapse" style="
		background: #024e85;
		padding: 8px;
		"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div>
		<div class="text-left align-items-center mid">
		
		<div class="modal-body pb-2" style="
		">
		<h5 style="
		color: #0378cd;
		">${product[obj].name}</h5> <div><ul style="
		padding-inline-start: 0px;
		">
		${makeTable(product[obj].info, false, 'li')} 
		</ul>
		</div>
		
		</div>
		
		</div>
        </div>
		</div>
	</div></li>`, '');}
$('#innSearchButton').click(function(event){
	if(!(searchInn.value in dataCompany)) return;
	let inn = searchInn.value;
	document.getElementById('NameComp').innerHTML = dataCompany[inn].Name;
	document.getElementById('info-about-camp').innerHTML =  makeTable(dataCompany[inn].infoAbout, true);
	document.getElementById('myDropdown').lastElementChild.innerHTML = dataCompany[inn].contactPersons.reduce((str, pilot) => str + `<li class="flex justify-between items-center p-2  rounded cursor-pointer transition" style="
    border-bottom: 1px solid #e6dfdf;"><span>${pilot}</span><span class="text-gray-600 text-sm text-right ml-3 flex flex-col w-32" style="align-self: center;">${personInfo[pilot].generalInformation['Должность']}</span>  </div>
      </li>`, '');
	document.querySelector(".scroll-area").innerHTML = dataCompany[inn].historyAct.reduce((str, obj, index) => str + `<div class="vertical-timeline-item vertical-timeline-element"><span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-warning" style="
		background-color: #35428b;
		"> </i> </span>
		<div> <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-success"></i> </span>
		<div class="vertical-timeline-element-content bounce-in">
		<div class="CursorPointer collapsed" data-toggle="collapse" href="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}" data-abc="true"><div class="activitiesTime">${obj.date}</div>
		<p class="timeline-title">Встреча по обсуждению очень важных вещей</p> </div>
		<div id="collapse-${index}" class="collapse" role="tabpanel" style="margin: 8px 0px;" aria-labelledby="heading-1" data-parent="#accordion" style="height: 0px;" aria-expanded="false">
		<div class="row-1"><div class="col-1"> <b>Результат:</b></div><div class="col-2"> Результат</div></div><div class="row-1"><div class="col-1"> <b>Дополнение:</b></div><div class="col-2"> Дополнения</div></div></div>
		</div>
		</div>
	</div>`, '<div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">') + '</div>';

	document.getElementById('generalInformation').innerHTML = makeTable(personInfo[dataCompany[inn].last].generalInformation);
	document.getElementById('psychographicSegmentation').innerHTML = makeTable(personInfo[dataCompany[inn].last].psychographicSegmentation);
	document.getElementById('personImg').innerHTML = `<img src="${personInfo[dataCompany[inn].last].img}" style="height: 100%;margin: auto;" class="rounded-full">`;
	document.getElementById('namePepson').innerHTML = dataCompany[inn].last;
	
	prod(dataCompany[inn].last);
	
	
	let a = document.getElementById("myDropdown").getElementsByTagName("li");
	for (i = 0; i < a.length; i++)
	a[i].addEventListener("click", function(event){document.getElementById("myInput").value = event.target.closest('li span').innerHTML;
		filterFunction();document.getElementById("myInput").focus();
		
	});

	});
	
	function clearAll(){
		document.getElementById('NameComp').innerHTML = '';
		document.getElementById('info-about-camp').innerHTML =  '';
		document.getElementById('myDropdown').lastElementChild.innerHTML = '';
		document.querySelector(".scroll-area").innerHTML = '';
		document.getElementById('ProductOwnership').innerHTML = '';
		document.getElementById('generalInformation').innerHTML = '';
		document.getElementById('psychographicSegmentation').innerHTML = '';
		document.getElementById('personImg').innerHTML = '';
		document.getElementById('namePepson').innerHTML = '';
	document.getElementById('recommendedProducts').innerHTML = '';}
	
	
	function filterFunction(event=0) {
		var input, filter, ul, li, a, i;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		a = document.querySelectorAll("#myDropdown li span");

		for (i = 0; i < a.length/2; i++) {
			txtValue = a[i*2].textContent || a[i*2].innerText;
			txtValue1 = a[i*2 + 1].textContent || a[i*2 + 1].innerText;

			if (a[i*2].innerText.toUpperCase().indexOf(filter) > -1 || a[i*2 + 1].innerText.toUpperCase().indexOf(filter) > -1 ) {
				a[i*2].parentElement.style.display = "";
				} else {
				a[i*2].parentElement.style.display = "none";
			}
		}
		
		if(event!=0 && event.which == 13) {
			
			document.getElementById('generalInformation').innerHTML = makeTable(personInfo[input.value].generalInformation);
			document.getElementById('psychographicSegmentation').innerHTML = makeTable(personInfo[input.value].psychographicSegmentation);
			document.getElementById('personImg').innerHTML = `<img src="${personInfo[input.value].img}" style="height: 100%;margin: auto;" class="rounded-full">`;
			
			document.getElementById('namePepson').innerHTML = input.value;
			input.value="";
			filterFunction();
			document.getElementById("myDropdown").classList.toggle("show");
		}
	}
	let is_short = false;
	function newLoaut(){
		is_short = !is_short;
		
		document.getElementById('hideArea').classList.toggle("NoDisplay");
		document.getElementById('Additional-Section').classList.toggle("NoDisplay");

		document.querySelector(".mainTable").classList.toggle("ShortTable");

		let a = document.querySelectorAll(".longtext");

		for (i = 0; i < a.length; i++) {
			a[i].classList.toggle("NoDisplay");
		}
		a = document.querySelectorAll(".shortTitle");
		for (i = 0; i < a.length; i++) {
			a[i].classList.toggle("NoDisplay");
		}
		document.querySelector(".leftSideHeader").classList.toggle("highlightingTitle");
		document.getElementById('NameComp').classList.toggle("titleRight");
		document.getElementById("searchFild").classList.toggle("titleRight");
	}
	
	
	$('#buttonSearch').click(function(event){document.getElementById("myDropdown").classList.toggle("show");})
	$('#myInput').click(filterFunction);
	$('#myInput').keyup(filterFunction, event);
	$('button.iconBlock').click(function(event){
	if(is_short) return;
	newLoaut();
	});
	
	$('#hideArea').click(function(event){
		newLoaut();
		document.querySelector(".leftSideHeader").querySelector(".active").classList.toggle("active");
		
	});
	
	
	
	
	
	var down = false;
	
	$('#bell').click(function(e){
		
		var color = $(this).text();
		document.getElementById('box').classList.toggle('NoDisplay');
		
		
	});
		