var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var xmr = document.getElementById("monero");
var doge = document.getElementById("dogecoin");


var settings = {
	"async": true,
	"scrossDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cmonero%2Cdogecoin&vs_currencies=usd",
	"method": "GET",
	"headers": {}
	
}




$.ajax(settings).done(function (response){
	btc.innerHTML = response.bitcoin.usd;
	eth.innerHTML = response.ethereum.usd;
	xmr.innerHTML = response.monero.usd;
	doge.innerHTML = response.dogecoin.usd;
});


