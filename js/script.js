$( function () {
        $( '#BGItems figure img' ).each( 
		function () {
			var strItemID = $( this ).attr( 'data-id' );
			if (strItemID !='customitem'){
				$( this ).attr( 'src', 'http://cdn.dota2.com/apps/dota2/images/items/' + strItemID + '_lg.png' );
			}
		}
	);
        $( '#BGHeroes figure img' ).each( 
		function () {
			var strHeroID = $( this ).attr( 'data-id' );
			if (strHeroID !='customhero'){
				$( this ).attr( 'src', 'http://cdn.dota2.com/apps/dota2/images/heroes/' + strHeroID + '_full.png' );
			}
		}
	);
})();
