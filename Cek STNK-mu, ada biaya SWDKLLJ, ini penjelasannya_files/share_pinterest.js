/***
 * Example add in your script html
 * 
 * <script async src="share_pinterest.js" data-class="YOUR-CLASSNAME" data-id="YOUR-ID"></script>
 * 
 * data-class => (Optional) Your classname to add the pinterest share button
 * data-id => (Optional) Your id to add the pinterest share button
 * 
 */

$( function() {
    var script = $('script[src*=share_pinterest]');
    var href = script.attr("src");
    href = href.replace(/js/g,"css");
    console.log(href);
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', href) );
    $.getScript("//code.jquery.com/ui/1.12.1/jquery-ui.js")
    .done(function(){
        $.widget("custom.addSharePinterest",{
            option:{},
            _create: function(){
                var f;
                if(this.element[0].className){
                    f = '.'+this.element[0].className;
                }else if(this.element[0].id){
                    f = '#'+this.element[0].id;
                }else{
                    console.log("undefined class or id");
                    return;
                }
                
                $.getScript( "//assets.pinterest.com/js/pinit.js" )
                .done(function( script, textStatus ) {
                    var listImg = $(f).find("img");
                    
                    $.each(listImg, function(k,v){
                        var url = encodeURIComponent(location.href);
                        var media = encodeURIComponent(v.src);
                        var description = encodeURIComponent(v.title);

                        var replace ='';
                        replace += '<div class="content-img">';
                        replace += '<div class="share-pinterest">';
                        replace += '<a';
                        replace += ' data-pin-do="buttonPin" data-pin-tall="true" data-pin-round="true" data-pin-save="true"';
                        replace += ' href="https://www.pinterest.com/pin/create/button/?url='+url+'&media='+media+'&description='+description+'"';
                        replace += ' >';
                        replace += '<img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" />';
                        replace += '</a>';
                        replace += '</div>';
                        replace += v.outerHTML;
                        replace += '</div>';

                        $("img[src='"+v.src+"']").replaceWith(replace);
                    });
                })
                .fail(function( jqxhr, settings, exception ) {
                    console.log('Error load script');
                });
            }
        });
        
        if(script.attr('data-class')){
            $('.'+script.attr('data-class')).addSharePinterest();
        }else if(script.attr('data-id')){
            $('#'+script.attr('data-id')).addSharePinterest();
        }
    })
    .fail(function(){
        console.log('Error load script');
    })
});