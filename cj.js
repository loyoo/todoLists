	var cookiename = 'cookieNametest';
	var cookiejson;
	if ($.cookie(cookiename) == undefined) //cookie≥ı ºªØ
		cookiejson = jQuery.parseJSON('{"ver":"1", "createTime":"2015-10-14","data":[]}');
	else
		cookiejson = jQuery.parseJSON($.cookie(cookiename));
	//
	var saveData = function(domId) {
		cookiejson.data.push(domId);
		$.cookie(cookiename, JSON.stringify(cookiejson), {
			expires: 7,
			path: '/'
		});
	};
	//
	var getData = function(domId) {
		return jQuery.parseJSON($.cookie(cookiename)).data;
	};