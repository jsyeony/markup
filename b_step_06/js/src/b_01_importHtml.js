// b_01_importHtml.js

(function($){
  // 기능설명
  /*
    html 문서를 분리하여, 외부에 존재하는 html문서를 불러오고,
    이를 필요한 영역에 담아 사용
    - 선택자.load('불러올data', function(){ 불러온 이후에 수행할 내용 });
    - 불러올 문서는 js를 기준으로 보는 것이 아니다!! -> html 문서가 기준!!!
    - load() 메서드는 html(), text() 메서드와 동일하게 처리되는 순간 이전에 존재하던 요소는 모두 사라지게 된다. 
  */

  // 변수
  var box01 = $('#box_01');
  var box02 = $('#box_02');
  var boxBtn = box02.find('button');
  var box03 = $('#box_03');
  var baseUrl = '../page/importHtml/';
  var importArr = ["box_01.html", "box_02.html", "box_03.html"];
  var head = $('head');
  var linkSheet = head.find('link[rel="stylesheet"]').eq(-1);

  // 기능수행
  box01.load(baseUrl + importArr[0]);
  boxBtn.on('click', function(e){
    e.preventDefault();
    box02.load(baseUrl + importArr[1], function(){
      var import03 = head.find('.import_03');
      import03.remove();
    });
  });
  box03.load(baseUrl + importArr[2], function(){
    var appendLink = '<link rel="stylesheet" href="../css/page/importHtml/box_03.css" class="import_03">';
    linkSheet.after(appendLink);
  });

})(jQuery);