function openNav1(){
   document.getElementById("hide").style.top="auto";
    document.getElementById("hide").style.position="relative";
   
   document.getElementById("hode").style.top="auto";
    document.getElementById("hode").style.position="relative";
   
   document.getElementById("hude").style.top="auto";
    document.getElementById("hude").style.position="relative";
   
   document.getElementById("hede").style.top="auto";
    document.getElementById("hede").style.position="relative";
   
  
    }
function openNav2(){
   document.getElementById("hide").style.top=" 1200px";
    document.getElementById("hide").style.position="absolute";
   
   document.getElementById("hode").style.top=" 1200px";
    document.getElementById("hode").style.position="absolute";
   
   document.getElementById("hude").style.top=" 1200px";
    document.getElementById("hude").style.position="absolute";
   
   document.getElementById("hede").style.top=" 1200px";
    document.getElementById("hede").style.position="absolute";
   
  
    }
    function mhsn(){
      document.getElementById('klko').src='image1/25.jpg'
    }
    function mohsn(){
      document.getElementById('klko').src='image1/24.jpg'
    }
    function mehsn(){
      document.getElementById('klko').src='image1/23.jpg'
    }
    function mahsn(){
      document.getElementById('klko').src='image1/26.jpg'
    }
    function mmhsn(){
      document.getElementById('klko').src='image1/27.jpg'
    }
    function mnhsn(){
      document.getElementById('klko').src='image1/28.jpg'
    }
    function mhsno(){
      document.getElementById('klko').src='image1/30.png'
    }
    function mnhsn(){
      document.getElementById('klko').src='image1/28.jpg'
    }
    function mhsnoo(){
      document.getElementById('klko').src='image1/33.jpg'
    }
  function check() {
    var val = document.getElementById('pose').value;
    if(val=='ورشة الرسم') {
      document.getElementById('change').src='image1/rasm/7.jpg'
      document.getElementById('change1').src='image1/rasm/2.jpg'
      document.getElementById('change2').src='image1/rasm/3.jpg'
      document.getElementById('change3').src='image1/rasm/4.jpg'
      document.getElementById('change4').src='image1/rasm/5.jpg'
      document.getElementById('change5').src='image1/rasm/6.jpg'
      document.getElementById('change6').src='image1/rasm/11.jpg'
      document.getElementById('change7').src='image1/rasm/9.jpg'
      document.getElementById('change8').src='image1/rasm/1.jpg'
 
    } 
   
    else if(val=='تكريم المتفوقين في الشهادة الثانوية'){
      document.getElementById('change').src='image1/takreem/1.jpeg'
      document.getElementById('change1').src='image1/takreem/2.jpeg'
      document.getElementById('change2').src='image1/takreem/3.jpeg'
      document.getElementById('change3').src='image1/takreem/4.jpeg'
      document.getElementById('change4').src='image1/takreem/5.jpeg'
      document.getElementById('change5').src='image1/takreem/6.jpeg'
      document.getElementById('change6').src='image1/takreem/7.jpeg'
      document.getElementById('change7').src='image1/takreem/8.jpeg'
      document.getElementById('change8').src='image1/takreem/9.jpeg'
    
    }
    else if(val=='مكتبة نور مصر'){
      document.getElementById('change').src= 'image1/matab/1.jpg'
      document.getElementById('change1').src='image1/matab/2.jpg'
      document.getElementById('change2').src='image1/matab/3.jpg'
      document.getElementById('change3').src='image1/matab/4.jpg'
      document.getElementById('change4').src='image1/matab/5.jpg'
      document.getElementById('change5').src='image1/matab/6.jpg'
      document.getElementById('change6').src='image1/matab/7.jpg'
      document.getElementById('change7').src='image1/matab/8.jpg'
      document.getElementById('change8').src='image1/matab/9.jpg'
    
    }
    else if(val=='دورة الكمبيوتر'){ 
      document.getElementById('change').src='image1/compo/7.jpg'
      document.getElementById('change1').src='image1/compo/8.jpg'
      document.getElementById('change2').src='image1/compo/9.jpg'
      document.getElementById('change3').src='image1/compo/11.jpg'
      document.getElementById('change4').src='image1/3.jpg'
      document.getElementById('change5').src='image1/compo/12.jpg'
    }
    else if(val=='تهنئة رمضانية'){

      document.getElementById('change').src='image1/ramad/1.jpg'
      document.getElementById('change1').src='image1/ramad/2.jpg'
      document.getElementById('change2').src='image1/ramad/3.jpg'
      document.getElementById('change3').src='image1/ramad/4.jpg'
      document.getElementById('change4').src='image1/ramad/5.jpg'
      document.getElementById('change5').src='image1/ramad/6.jpg'
      document.getElementById('change6').src='image1/ramad/7.jpg'
      document.getElementById('change7').src='image1/ramad/8.jpg'
      document.getElementById('change8').src='image1/ramad/9.jpg'

   
    }
    else{
      window.alert('من فضلك اختر');

    }
   }


///////////////////////////1//////////////////////
   var num=1;
   document.getElementById('do1').onclick = function(){
    
    document.getElementById('change').src='image1/rasm/'+num+'.jpg'
    num++

    if(num >= 12){
      num = 1
    }
  }
   var num=1;
   document.getElementById('do12').onclick = function(){
    
    document.getElementById('change').src='image1/rasm/'+num+'.jpg'
    num--

    if(num < 1){
      num = 12
     
    }
  }
  /////////////////////////////2//////////////////////////
   var num=1;
   document.getElementById('do13').onclick = function(){
    
    document.getElementById('change1').src='image1/matab/'+num+'.jpg'
    num++

    if(num >= 14){
      num = 1
    }
  }
   var num=1;
   document.getElementById('do14').onclick = function(){
    
    document.getElementById('change1').src='image1/matab/'+num+'.jpg'
    num--

    if(num < 1){
      num = 14
     
    }
  }
  //////////////////////////3/////////////////////////////
   var num=1;
   document.getElementById('do15').onclick = function(){
    
    document.getElementById('change2').src='image1/compo/'+num+'.jpg'
    num++

    if(num >= 13){
      num = 1
    }
  }
   var num=1;
   document.getElementById('do16').onclick = function(){
    
    document.getElementById('change2').src='image1/compo/'+num+'.jpg'
    num--

    if(num < 13){
      num = 13
     
    }
  }
  //////////////////////////4/////////////////////////////
   var num=1;
   document.getElementById('do17').onclick = function(){
    
    document.getElementById('change3').src='image1/ramad/'+num+'.jpg'
    num++

    if(num >= 9){
      num = 1
    }
  }
   var num=1;
   document.getElementById('do18').onclick = function(){
    
    document.getElementById('change3').src='image1/ramad/'+num+'.jpg'
    num--

    if(num < 1){
      num = 9
     
    }
  }
  //////////////////////////5/////////////////////////////
  var num=1;
  document.getElementById('do19').onclick = function(){
   
   document.getElementById('change4').src='image1/takreem/'+num+'.jpeg'
   num++

   if(num >= 9){
     num = 1
   }
 }
  var num=1;
  document.getElementById('do110').onclick = function(){
   
   document.getElementById('change4').src='image1/takreem/'+num+'.jpeg'
   num--

   if(num < 1){
     num = 9
    
   }
 }
 
  //////////////////////////6/////////////////////////////
  var num=1;
  document.getElementById('do111').onclick = function(){
   
   document.getElementById('change5').src='image1/quran/'+num+'.jpg'
   num++

   if(num >= 26){
     num = 1
   }
 }
  var num=1;
  document.getElementById('do112').onclick = function(){
   
   document.getElementById('change5').src='image1/quran/'+num+'.jpg'
   num--

   if(num < 1){
     num = 26
    
   }
 }
 
