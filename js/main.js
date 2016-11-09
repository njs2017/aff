$(document).ready(function() {

  $('#btnLink').click(function(e) {
    e.preventDefault();

    console.log('creating aff link..');
    createAffLink($('#regLink').val(), $('#affLink'));
  });

});


var createAffLink = function(url) {

  var baseUrl = 'http://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionLinks/15003?fields=&trackingId=AliIsrael&urls=';

  $.ajax({
    type: 'GET',
    url: baseUrl + encodeURIComponent(url),
    success: function(res) {
      console.log(res);

      if (res.errorCode === 20010000) {
        var linkElm = $('<a>').attr('href', res.result.promotionUrls[0].promotionUrl).text(res.result.promotionUrls[0].promotionUrl);
        $('#affLink').html(linkElm);
      } else {
        $('#affLink').text('Original link is not valid, make sure to start with http/s.');
      }

    },
    error: function(err) {
      console.error(err);
    }
  });

}
