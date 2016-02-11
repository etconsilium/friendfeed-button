(function(){
    var v='1.9.1';
    if(window.jQuery===undefined||window.jQuery.fn.jquery<v){
        var done=false;
        var script=document.createElement('script');
        script.src='//ajax.googleapis.com/ajax/libs/jquery/'+v+'/jquery.min.js';
        script.onload=script.onreadystatechange=function(){
            if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){
                done=true;
                initMyBookmarklet()
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script)
    }else{
        initMyBookmarklet()
    }
    function initMyBookmarklet(){
        (window.myBookmarklet=function(){
            var addScript=function(filename,callback){
                var e=document.createElement('script');
                e.type='text/javascript';
                e.src=filename;
                if(callback){
                    e.onloadDone=false;
                    e.onload=function(){
                        e.onloadDone=true;
                        callback()
                    };
                    e.onReadystatechange=function(){
                        if(e.readyState==='loaded'&&!e.onloadDone){
                            e.onloadDone=true;
                            callback()
                        }
                    }
                }
                if(typeof e!=='undefined'){
                    document.getElementsByTagName('head')[0].appendChild(e)
                }
            };
            var host='//freefeed.net';
            addScript(host+'/js/bookmarklet-popup.js',function(){
                bookmarklet_popupInit(host)
            })
        })()
    }
})