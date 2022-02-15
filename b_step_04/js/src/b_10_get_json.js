// data 폴더에 coffee_list.json 파일 불러오기

// 객제 데이터를 외부로 json 방식으로 내보내기 위한 조건
// 1. 주석 사용할 수 없다.
// 2. 속성명, 값 모두 쌍따옴표로 감싸주어야 한다.(숫자제외)
// 3. 변수명은 사용할 수 없다.


(function($){
  // 외부 데이터를 불러와서 사용하기
  /*
  $.ajax({
    // 외부데이터를 불러오고 그 형식과 내용을 세팅
  }),done(function(data){
    // 코드를 모두 담는다.
  });
  */
  
  $.ajax({
    url:"../json/coffee_list.json",
    context:document.body
  }).done(function(data){

    var coffee_list = data;
    // 변수

    var liEl = '<li><div class="img_space"></div><dl><dt>title</dt><dd class="data_con"></dd><dd class="link"><a href="#">자세히 보기</a></dd></dl></li>';

    var exWrap = $('.ex_wrap');
    var exUl = exWrap.children('ul');

    var i = 0;
    var len = coffee_list.length;
    for(; i < len; i += 1){
      exUl.append(liEl);
    };

    var exLi = exUl.children('li');

    // 함수 세팅
    var cardInsertFn = function(n){
      var menuList = coffee_list[n];

      var liN = exLi.eq(n);
      var imgSpace = liN.children('.img_space');
      var imgText = imgSpace.find('span');
      var title = liN.find('dt');
      var con = liN.find('.data_con');
      var linkData = liN.find('.link').children('a');

      imgSpace.css({'backgroundImage': menuList.image});
      imgText.text(menuList.image_alt);
      title.text(menuList.title);
      con.text(menuList.content);
      linkData.attr({href: menuList.link});
    };

    for(i=0; i<len; i += 1){
      cardInsertFn(i);
    }
  }); // $.ajax

})(jQuery);
