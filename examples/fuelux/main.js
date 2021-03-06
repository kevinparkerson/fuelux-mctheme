define(function(require) {
	var data = require('data');
	var jquery = require('jquery');
	var log = function(){
		if(window.console && window.console.log){
			var args = Array.prototype.slice.call(arguments);
			window.console.log.apply(console, args);
		}
	};

	require('fuelux');


	//CHECKBOX
	$('#btnCheckboxToggle').on('click', function(){
		$('#myCustomCheckbox1').checkbox('toggle');
	});
	$('#btnCheckboxDisable').on('click', function(){
		$('#myCustomCheckbox1').checkbox('disable');
	});
	$('#btnCheckboxEnable').on('click', function(){
		$('#myCustomCheckbox1').checkbox('enable');
	});
	$('#btnCheckboxDestroy').on('click', function(){
		var $cont = $('#myCustomCheckbox1').parents('.thin-box:first');
		var markup = $('#myCustomCheckbox1').checkbox('destroy');
		log(markup);
		$cont.append(markup);
	});

	//CHECKBOX NO JS
	$("#checkboxes-no-js-block-indeterminate").prop("indeterminate", true); 


	//COMBOBOX
	$('#btnComboboxGetSelectedItem').on('click', function () {
		var selected = $('#myCombobox').combobox('selectedItem');
		log(selected);
	});
	$('#btnComboboxSelectByValue').on('click', function () {
		$('#myCombobox').combobox('selectByValue', '1');
	});
	$('#btnComboboxSelectByIndex').on('click', function () {
		$('#myCombobox').combobox('selectByIndex', '1');
	});
	$('#btnComboboxSelectByText').on('click', function () {
		$('#myCombobox').combobox('selectByText', 'Four');
	});
	$('#btnComboboxSelectBySelector').on('click', function () {
		$('#myCombobox').combobox('selectBySelector', 'li[data-fizz=buzz]');
	});
	$('#btnComboboxDisable').on('click', function () {
		$('#myCombobox').combobox('disable');
	});
	$('#btnComboboxEnable').on('click', function () {
		$('#myCombobox').combobox('enable');
	});
	$('#btnComboboxDestroy').on('click', function () {
		var markup = $('#myCombobox').combobox('destroy');
		log( markup );
		$(this).closest('.section').append(markup);
	});

	$('#myCombobox').on('changed.fu.combobox', function (evt, data) {
		log(data);
	});


	//DATEPICKER
	$('#myDatepicker').datepicker({
		allowPastDates: true,
		restricted: [{ from: '08/10/2014', to: '08/15/2014' }]
	});

	$('#btnDatepickerEnable').on('click', function() {
		$('#myDatepicker').datepicker('enable');
	});
	$('#btnDatepickerDisable').on('click', function() {
		$('#myDatepicker').datepicker('disable');
	});
	$('#btnDatepickerLogFormattedDate').on('click', function() {
		log( $('#myDatepicker').datepicker('getFormattedDate') );
	});
	$('#btnDatepickerLogDateObj').on('click', function() {
		log( $('#myDatepicker').datepicker('getDate') );
	});
	$('#btnDatepickerSetDate').on('click', function() {
		var futureDate = new Date(+new Date() + ( 7 * 24 * 60 * 60 * 1000 ) );
		$('#myDatepicker').datepicker('setDate', futureDate );
		log( $('#datepicker').datepicker('getDate') );
	});
	$('#btnDatepickerDestroy').on('click', function() {
		var $cont = $('#myDatepicker').parent();
		var markup = $('#myDatepicker').datepicker('destroy');
		log( markup );
		$cont.append(markup);
	});

	$('#myDatepicker').on('changed.fu.datepicker', function( event, data ) {
		log( 'datepicker change event fired' );
	});
	$('#myDatepicker').on('inputParsingFailed.fu.datepicker', function() {
		log( 'datepicker inputParsingFailed event fired' );
	});


	//INFINITE SCROLL
	function initMyInfiniteScroll1() {
		$('#myInfiniteScroll1').infinitescroll({
			dataSource: function(helpers, callback){
				setTimeout(function(){
					callback({ content: data.infiniteScroll.content });
				}, data.infiniteScroll.delays[Math.floor(Math.random() * 4)]);
			}
		});

	}
	initMyInfiniteScroll1();

	var infiniteScrollCount = 0;
	$('#myInfiniteScroll2').infinitescroll({
		dataSource: function(helpers, callback){
			setTimeout(function(){
				var resp = {};
				infiniteScrollCount++;
				resp.content = data.infiniteScroll.content;
				if(infiniteScrollCount>=5){
					resp.end = true;
				}
				callback(resp);
			}, data.infiniteScroll.delays[Math.floor(Math.random() * 4)]);
		},
		hybrid: true
	});

	$('#btnInfiniteScrollEnable').on('click', function() {
		$('#myInfiniteScroll1').infinitescroll('enable');
	});
	$('#btnInfiniteScrollDisable').on('click', function() {
		$('#myInfiniteScroll1').infinitescroll('disable');
	});
	$('#btnInfiniteScrollDestroy').on('click', function() {
		var $cont = $('#myInfiniteScroll1').parent();
		var markup = $('#myInfiniteScroll1').infinitescroll('destroy');
		log( markup );
		$cont.append(markup);
		$('#myInfiniteScroll1').append($('#myInfiniteScroll2').html());
		initMyInfiniteScroll1();
	});


	//LOADER
	$('#btnLoaderPlay').on('click', function() {
		$('#myLoader1').loader('play');
	});
	$('#btnLoaderPause').on('click', function() {
		$('#myLoader1').loader('pause');
	});
	$('#btnLoaderNext').on('click', function() {
		$('#myLoader1').loader('next');
	});
	$('#btnLoaderPrevious').on('click', function() {
		$('#myLoader1').loader('previous');
	});
	$('#btnLoaderDestroy').on('click', function() {
		var $cont = $('#myLoader1').parent();
		var markup = $('#myLoader1').loader('destroy');
		log( markup );
		$cont.append(markup);
		$('#myLoader1').loader();
	});


	//PILLBOX
	$('#myPillbox1').pillbox({
		edit: true,
		onKeyDown: function( data, callback ){
			callback({data:[
				{ text: 'Acai', value:  'acai' },
				{ text: 'African cherry orange', value:  'african cherry orange' },
				{ text: 'Banana', value:  'banana' },
				{ text: 'Bilberry', value:  'bilberry' },
				{ text: 'Cantaloupe', value:  'cantaloupe' },
				{ text: 'Ceylon gooseberry', value:  'ceylon gooseberry' },
				{ text: 'Dragonfruit', value:  'dragonfruit' },
				{ text: 'Dead Man\'s Fingers', value:  'dead man\'s fingers' },
				{ text: 'Fig', value:  'fig' },
				{ text: 'Forest strawberries', value:  'forest strawberries' },
				{ text: 'Governor’s Plum', value:  'governor’s plum' },
				{ text: 'Grapefruit', value:  'grapefruit' },
				{ text: 'Guava', value:  'guava' },
				{ text: 'Honeysuckle', value:  'honeysuckle' },
				{ text: 'Huckleberry', value:  'huckleberry' },
				{ text: 'Jackfruit', value:  'jackfruit' },
				{ text: 'Japanese Persimmon', value:  'japanese persimmon' },
				{ text: 'Key Lime', value:  'key lime' },
				{ text: 'Kiwi', value:  'kiwi' },
				{ text: 'Lemon', value:  'lemon' },
				{ text: 'Lillypilly', value:  'lillypilly' },
				{ text: 'Mandarin', value:  'mandarin' },
				{ text: 'Miracle Fruit', value:  'miracle fruit' },
				{ text: 'Orange', value:  'orange' },
				{ text: 'Oregon grape', value:  'oregon grape' },
				{ text: 'Persimmon', value:  'persimmon' },
				{ text: 'Pomegranate', value:  'pomegranate' },
				{ text: 'Rhubarb', value:  'rhubarb' },
				{ text: 'Rose hip', value:  'rose hip' },
				{ text: 'Soursop', value:  'soursop' },
				{ text: 'Starfruit', value:  'starfruit' },
				{ text: 'Tamarind', value:  'tamarind' },
				{ text: 'Thimbleberry', value:  'thimbleberry' },
				{ text: 'Wineberry', value:  'wineberry' },
				{ text: 'Wongi', value:  'wongi' },
				{ text: 'Youngberry', value: 'youngberry' }
			]});
		}
	});

	$('#myPillbox2').pillbox({
		truncate: true
	});

	$('#myPillbox1').on('added', function(event, data) {
		log('pillbox added', data);
	});
	$('#myPillbox1').on('removed', function(event, data) {
		log('pillbox removed', data);
	});

	$('#btnPillboxEnable').click(function () {
		$('#myPillbox1').pillbox('enable');
	});
	$('#btnPillboxDisable').click(function () {
		$('#myPillbox1').pillbox('disable');
	});
	$('#btnPillboxAdd').click(function () {
		var newItemCount = $('#myPillbox1 ul li').length + 1;
		$('#myPillbox1').pillbox('addItems', {text: 'item ' + newItemCount, value: 'item ' + newItemCount} );
	});
	$('#btnPillboxRemoveByValue').click(function () {
		$('#myPillbox1').pillbox('removeByValue', 'item 2');
	});
	$('#btnPillboxRemoveBySelector').click(function () {
		$('#myPillbox1').pillbox('removeBySelector', '.status-success');
	});
	$('#btnPillboxRemoveByText').click(function () {
		$('#myPillbox1').pillbox('removeByText', 'item 3');
	});
	$('#btnPillboxItems').click(function () {
		var items = $('#myPillbox1').pillbox('items');
		log(items);
	});

	$('#btnPillboxDestroy').click(function () {
		var $cont = $('#myPillbox1').parents('.thin-box:first');
		var markup = $('#myPillbox1').pillbox('destroy');
		log(markup);
		$cont.append(markup);
		$('#myPillbox1').pillbox({ edit: true });
	});


	//PLACARD
	$('#btnPlacardEnable').click(function(){
		$('#myPlacard1').placard('enable');
	});
	$('#btnPlacardDisable').click(function(){
		$('#myPlacard1').placard('disable');
	});
	$('#btnPlacardDestroy').click(function () {
		var $cont = $('#myPlacard1').parent();
		var markup = $('#myPlacard1').placard('destroy');
		log( markup );
		$cont.append(markup);
		$('#myPlacard1').placard( { edit: true } );
	});


	//RADIO
	$('#btnRadioDisable').on('click', function() {
		$('[name=radio1]').radio('disable');
	});
	$('#btnRadioEnable').on('click', function() {
		$('[name=radio1]').radio('enable');
	});
	$('#btnRadioDestroy').on('click', function() {
		var $cont = $('#myCustomRadio1').parents('.thin-box:first');
		log($cont);
		var markup = $('#myCustomRadio1').radio('destroy');
		$cont.append(markup);
		$('#myRadio1').radio();
	});


	//REPEATER
	function initRepeater() {
		var delays = ['300', '600', '900', '1200'];
		var $myRepeater = $('#myRepeater');

		var list = function(options, callback){
			var resp = {
				count: data.repeater.listData.length,
				items: [],
				page: options.pageIndex
			};
			var i, l;

			resp.pages = Math.ceil(resp.count/(options.pageSize || 50));

			i = options.pageIndex * (options.pageSize || 50);
			l = i + (options.pageSize || 50);
			l = (l <= resp.count) ? l : resp.count;
			resp.start = i + 1;
			resp.end = l;

			resp.columns = [
				{
					label: 'Common Name',
					property: 'commonName',
					sortable: true
				},
				{
					label: 'Latin Name',
					property: 'latinName',
					sortable: true
				},
				{
					label: 'Appearance',
					property: 'appearance',
					sortable: true
				},
				{
					label: 'Sound',
					property: 'sound',
					sortable: true
				}
			];

			for(i; i<l; i++){
				resp.items.push(data.repeater.listData[i]);
			}

			//if(options.search){
				//resp.items = [];
			//}

			setTimeout(function(){
				callback(resp);
			}, delays[Math.floor(Math.random() * 4)]);
		};

		var thumbnail = function(options, callback){
			var categories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nature', 'technics', 'transport'];
			var colors = ['#D9EDF7', '#F2DEDE', '#FCF8E3', '#DFF0D8'];
			var numItems = 200;
			var resp = {
				count: numItems,
				items: [],
				pages: (Math.ceil(numItems/(options.pageSize || 30))),
				page: options.pageIndex
			};
			var i, l;

			i = options.pageIndex * (options.pageSize || 30);
			l = i + (options.pageSize || 30);
			resp.start = i + 1;
			resp.end = l;

			for(i; i<l; i++){
				resp.items.push({
					color: colors[Math.floor(Math.random() * 4)],
					name: ('Thumbnail ' + (i + 1)),
					src: 'http://lorempixel.com/65/75/' + categories[Math.floor(Math.random() * 9)] + '/?_=' + i
				});
			}

			//if(options.search){
				//resp.items = [];
			//}

			setTimeout(function(){
				callback(resp);
			}, delays[Math.floor(Math.random() * 4)]);
		};

		$myRepeater.repeater({
			dataSource: function(options, callback){
				if(options.view==='list'){
					list(options, callback);
				}else if(options.view==='thumbnail'){
					thumbnail(options, callback);
				}
			},
			list_selectable: 'multi',
			list_noItemsHTML: 'no items found',
			thumbnail_noItemsHTML: 'no items found',
			thumbnail_infiniteScroll: { hybrid: true }
		});
	}
	initRepeater();

	$('#btnRepeaterEnable').on('click', function(){
		$('#myRepeater').repeater('enable');
	});
	$('#btnRepeaterDisable').on('click', function(){
		$('#myRepeater').repeater('disable');
	});
	$('#btnRepeaterDestroy').on('click', function() {
		var $cont = $('#myRepeater').parent();
		var markup = $('#myRepeater').repeater('destroy');
		log( markup );
		$cont.append(markup);

		initRepeater();
	});


	//SCHEDULER
	$('#myScheduler').on('changed.fu.scheduler', function(){
		log('scheduler changed.fu.scheduler: ', arguments);
	});

	$('#btnSchedulerEnable').on('click', function(){
		$('#myScheduler').scheduler('enable');
	});
	$('#btnSchedulerDisable').on('click', function(){
		$('#myScheduler').scheduler('disable');
	});
	$('#btnSchedulerLogValue').on('click', function(){
		var val = $('#myScheduler').scheduler('value');
		log(val);
	});
	$('#btnSchedulerSetValue').on('click', function(){
		var newVal = {
			"startDateTime": "2014-03-31T03:23+02:00",
			"timeZone": {
				"name": "Namibia Standard Time",
				"offset": "+02:00"
			},
			"recurrencePattern": "FREQ=MONTHLY;INTERVAL=6;BYDAY=WE;BYSETPOS=3;UNTIL=20140919;"
		};
		log(newVal);
		$('#myScheduler').scheduler('value', newVal);
	});

	$('#btnSchedulerDestroy').on('click', function() {
		var $cont = $('#myScheduler').parent();
		var markup = $('#myScheduler').scheduler('destroy');
		log(markup);
		$cont.append(markup);
		$('#myScheduler').scheduler();
	});


	//SEARCH
	$('#mySearch').on('searched.fu.search', function (e, text) {
		log('Searched: ' + text);
	});

	$('#btnSearchDisable').on('click', function () {
		$('#mySearch').search('disable');
	});
	$('#btnSearchEnable').on('click', function () {
		$('#mySearch').search('enable');
	});
	$('#btnSearchDestroy').on('click', function () {
		var $cont = $('#mySearch').parent();
		var markup = $('#mySearch').search('destroy');
		log(markup);
		$cont.append(markup);
		$('#mySearch').search();
	});


	//SELECTLIST
	$('#mySelectlist').on('clicked.fu.selectlist', function (evt, target) {
		log('clicked', target);
	});
	$('#mySelectlist').on('changed.fu.selectlist', function (evt, data) {
		log('changed', data);
	});

	$('#btnSelectlistGetSelectedItem').on('click', function () {
		log($('#mySelectlist').selectlist('selectedItem'));
	});
	$('#btnSelectlistSelectByValue').on('click', function () {
		$('#mySelectlist').selectlist('selectByValue', '2');
	});
	$('#btnSelectlistSelectBySelector').on('click', function () {
		$('#mySelectlist').selectlist('selectBySelector', 'li[data-fizz=buzz]');
	});
	$('#btnSelectlistSelectByIndex').on('click', function () {
		$('#mySelectlist').selectlist('selectByIndex', '4');
	});
	$('#btnSelectlistSelectByText').on('click', function () {
		$('#mySelectlist').selectlist('selectByText', 'One');
	});
	$('#btnSelectlistEnableSelectlist').on('click', function () {
		$('#mySelectlist').selectlist('enable');
	});
	$('#btnSelectlistDisableSelectlist').on('click', function () {
		$('#mySelectlist').selectlist('disable');
	});
	$('#btnSelectlistDestroy').on('click', function () {
		var $cont = $('#mySelectlist').cont();
		var markup = $('#mySelectlist').selectlist('destroy');
		log( markup );
		$cont.append(markup);
		$('#mySelectlist').selectlist();
	});


	//SPINBOX
	$('#mySpinbox2').spinbox({
		value: '1,0px',
		min: 0,
		max: 10,
		step: 0.1,
		decimalMark: ',',
		units: ['px']
	});

	$('#mySpinbox1').on('changed.fu.spinbox', function (e, value) {
		log('Spinbox changed: ', value);
	});
	$('#mySpinbox2').on('changed.fu.spinbox', function (e, value) {
		log('Spinbox changed: ', value);
	});

	$('#spinboxSetValueBtn').on('click', function(){
		$('#mySpinbox1').spinbox('value', 4);
	});
	$('#spinboxGetValueBtn').on('click', function(){
		log($('#mySpinbox1').spinbox('value'));
	});
	$('#enableSpinbox').on('click', function () {
		$('#mySpinbox1').spinbox('enable');
	});
	$('#disableSpinbox').on('click', function () {
		$('#mySpinbox1').spinbox('disable');
	});
	$('#btnSpinboxDestroy').on('click', function () {
		var $cont = $('#mySpinbox1').parent();
		var markup = $('#mySpinbox1').spinbox('destroy');
		log( markup );
		$cont.append(markup);
		$('#mySpinbox1').spinbox();
	});


	//TREE
	$('#myTree1').on('loaded.fu.tree', function (e) {
		log('Loaded');
	});

	function myTreeInit() {
		$('#myTree1').tree({
			dataSource: function(options, callback){
				setTimeout(function () {
					callback({ data: [
						{ name: 'lakdjflksjdfalkjfkfjaslkdfjlksjdflkjslkfjalkfjlksadjflksjf', type: 'folder', dataAttributes: { id: 'folder1' } },
						{ name: 'Sky and Water I (with custom icon)', type: 'item', dataAttributes: { id: 'item1', 'data-icon': 'glyphicon glyphicon-file' } },
						{ name: 'Drawing Hands', type: 'folder', dataAttributes: { id: 'folder2' } },
						{ name: 'lakdjflksjdfalkjfkfjaslkdfjlksjdflkjslkfjalkfjlksadjflksjf', type: 'item', dataAttributes: { id: 'item2' } },
						{ name: 'Belvedere', type: 'folder', dataAttributes: { id: 'folder3' } },
						{ name: 'Relativity (with custom icon)', type: 'item', dataAttributes: { id: 'item3', 'data-icon': 'glyphicon glyphicon-picture' } },
						{ name: 'House of Stairs', type: 'folder', dataAttributes: { id: 'folder4' } },
						{ name: 'Convex and Concave', type: 'item', dataAttributes: { id: 'item4' } }
					]});

				}, 400);
			},
			folderSelect: false
		});
	}
	myTreeInit();

	$('#myTree1').on('selected.fu.tree', function (e, selected) {
		log('Select Event: ', selected);
		log($('#myTree1').tree('selectedItems'));
	});
	$('#myTree1').on('updated.fu.tree', function (e, selected) {
		log('Updated Event: ', selected);
		log($('#myTree1').tree('selectedItems'));
	});
	$('#myTree1').on('opened.fu.tree', function (e, info) {
		log('Open Event: ', info);
	});
	$('#myTree1').on('closed.fu.tree', function (e, info) {
		log('Close Event: ', info);
	});

	$('#myTree2').tree({
		dataSource: function(options, callback){
			setTimeout(function () {
				callback({ data: [
					{ name: 'Ascending and Descending', type: 'folder', dataAttributes: { id: 'folder1' } },
					{ name: 'Sky and Water I (with custom icon)', type: 'item', dataAttributes: { id: 'item1', 'data-icon': 'glyphicon glyphicon-file' } },
					{ name: 'Drawing Hands', type: 'folder', dataAttributes: { id: 'folder2' } },
					{ name: 'Waterfall', type: 'item', dataAttributes: { id: 'item2' } },
					{ name: 'Belvedere', type: 'folder', dataAttributes: { id: 'folder3' } },
					{ name: 'Relativity (with custom icon)', type: 'item', dataAttributes: { id: 'item3', 'data-icon': 'glyphicon glyphicon-picture' } },
					{ name: 'House of Stairs', type: 'folder', dataAttributes: { id: 'folder4' } },
					{ name: 'Convex and Concave', type: 'item', dataAttributes: { id: 'item4' } }
				]});
			}, 400);
		},
		cacheItems: true,
		folderSelect: true,
		multiSelect: true
	});

	$('#btnTreeDestroy').click(function () {
		var $cont = $('#myTree1').parent();
		var markup = $('#myTree1').tree('destroy');
		log( markup );
		$cont.append(markup);
		myTreeInit();
	});


	//WIZARD
	$('#myWizard').on('changed.fu.wizard', function(e, data) {
		log('changed');
		log(data);
	});

	$('#myWizard').on('actionclicked.fu.wizard', function(e, data) {
		log('action clicked');
		log(data);
	});
	$('#myWizard').on('stepclicked.fu.wizard', function(e, data) {
		log('step ' + data.step + ' clicked');
		if(data.step===1) {
			// return e.preventDefault();
		}
	});
	$('#myWizard').on('finished', function(e, data) {
		log('finished');
	});

	$('#btnWizardPrev').on('click', function() {
		$('#myWizard').wizard('previous');
	});
	$('#btnWizardNext').on('click', function() {
		$('#myWizard').wizard('next','foo');
	});
	$('#btnWizardStep').on('click', function() {
		var item = $('#myWizard').wizard('selectedItem');
		log(item.step);
	});
	$('#btnWizardSetStep').on('click', function() {
		$('#myWizard').wizard('selectedItem', {
			step: 3
		});
	});


	//WIZARD 2
	$('#myWizard2').on('changed.fu.wizard', function(e, data) {
		log('changed');
		log(data);
	});

	$('#myWizard2').on('actionclicked.fu.wizard', function(e, data) {
		log('action clicked');
		log(data);
	});
	$('#myWizard2').on('stepclicked.fu.wizard', function(e, data) {
		log('step ' + data.step + ' clicked');
		if(data.step===1) {
			// return e.preventDefault();
		}
	});
	$('#myWizard2').on('finished', function(e, data) {
		log('finished');
	});

	$('#btnWizard2Prev').on('click', function() {
		$('#myWizard2').wizard('previous');
	});
	$('#btnWizard2Next').on('click', function() {
		$('#myWizard2').wizard('next','foo');
	});
	$('#btnWizard2Step').on('click', function() {
		var item = $('#myWizard2').wizard('selectedItem');
		log(item.step);
	});
	$('#btnWizard2SetStep').on('click', function() {
		$('#myWizard2').wizard('selectedItem', {
			step: 3
		});
	});

	var emailSetupSamplePane = '<div class="bg-warning alert">' +
		'	<h4>Setup Message</h4>' +
		'	<p>Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage ' +
		'	lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow ' +
		'	salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon ' +
		'	sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower ' +
		'	salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane ' +
		'	turnip greens garlic. JÃ­cama garlic courgette coriander radicchio plantain scallion ' +
		'	cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water ' +
		'	spinach gram fava bean leek dandelion silver beet eggplant bush tomato. </p>' +
		'	<p>Pea horseradish azuki bean lettuce avocado asparagus okra. ' +
		'	Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean ' +
		'	celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver ' +
		'	beet watercress potato tigernut corn groundnut. Chickweed okra pea winter ' +
		'	purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut ' +
		'	summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu ' +
		'	plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver ' +
		'	beet rock melon radish asparagus spinach. </p>' +
		'</div>';
	$('#btnWizardAddSteps').on('click', function() {
		$('#myWizard').wizard('addSteps', 2, [{
			badge: '',
			label: 'Setup',
			pane: emailSetupSamplePane
		}]);
	});
	$('#btnWizardRemoveStep').on('click', function() {
		$('#myWizard').wizard('removeSteps', 4, 1);
	});
	$('#btnWizardDestroy').click(function () {
		var $cont = $('#myWizard').parent();
		var markup = $('#myWizard').wizard('destroy');
		log(markup);
		$cont.append(markup);
		$('#myWizard').wizard();
	});
});