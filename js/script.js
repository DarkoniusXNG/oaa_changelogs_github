
$J = jQuery;


		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-33822635-2']);
		_gaq.push(['_setSampleRate', '1']);		_gaq.push(['_setDomainName', 'dota2.com']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

	

    $( function () {
        $( '#BGItems figure img' ).each( function () {
            var strItemID = $( this ).attr( 'data-id' );
            if (strItemID !='custom_item'){
            $( this ).attr( 'src', 'http://cdn.dota2.com/apps/dota2/images/items/' + strItemID + '_lg.png' );
            }
        });
        $( '#BGHeroes figure img' ).each( function () {
            var strHeroID = $( this ).attr( 'data-id' );
            if (strHeroID !='customhero'){
            $( this ).attr( 'src', 'http://cdn.dota2.com/apps/dota2/images/heroes/' + strHeroID + '_full.png' );
            }
        });
    });
    
