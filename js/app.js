$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest (searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyDhPfCZffmwOxUui-RcXFu3RjjmDnU4BG0',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, showResults);
}

function showResults(results){
  var html = '';
  $.each(results.items, function(index, item){
  	html += '<p><img src="'+item.snippet.thumbnails.default.url+'">' + item.snippet.title + '</p>';
  	console.log(item.snippet.title);
  });
  $('#search-results').html(html);
}


$(document).ready(function(){


});