$(document).ready(function () {
   
    $('#readMore_btn').click(function(){
        if($(this).html() == 'Read more'){
             $('#dots').hide();
             $('#readMoreText').show(0);
             $(this).html('Read less')
        }else{
            $('#dots').show();
            $('#readMoreText').hide(0);
            $(this).html('Read more')
        };
    });
    


 $('.card').slice(0 , 4).show();
  $('.showmore-btn').click(function(){
    $('.card:hidden').slice(0 , 4).slideDown();
    if( $('.card:hidden').length == 0){
        $('.showmore-btn').fadeOut();
    }
            
});






});
