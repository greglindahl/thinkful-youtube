$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest (searchTerm) {
	var params = {
		part: 'snippet'
		key: 'AIzaSyDhPfCZffmwOxUui-RcXFu3RjjmDnU4BG0'
		q: 'searchTerm'
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.Search);
	});
}

function showResults(results){
  var html = '';
  $.each(results, function(index,value){
  	// html += '<p>' + value.Title + '</p>';
  	console.log(value.Title);
  });
  // $('#search-results').html(html);
}


$(document).ready(function(){



});