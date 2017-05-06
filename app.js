getStock('aapl,goog,msft,fb,amzn,snap,baba,orcl,ibm,' +
			'intc,csco,pcln,adbe,nvda,nflx,bidu,pypl,yhoo,vmw,' +
			'ebay,nok,hpq,intu,ea,adsk,symc,mchp,rht,xlnx,amd,' + 
			'twtr,team,sq,znga,grpn').then(show)

function show (data) {
    for (var i of data.query.results.quote) {
    $('#table').append('<tr><td>' + i.Name + '</td><td>' + i.EBITDA + '</td></tr>')
    }
}
//https://codestar.work/article/stock
function getStock(list) {
	let query = encodeURIComponent(`
		env 'store://datatables.org/alltableswithkeys';
		select * from yahoo.finance.quotes where
		symbol in ('${list}')`);
	let url = `https://query.yahooapis.com/v1/public/yql?q=${query}` +
		`&format=json&diagnostics=false` +
		`&env=http://datatables.org/alltables.env` +
		`&callback=`;
	return fetch(url).then( r => r.json() )
}
