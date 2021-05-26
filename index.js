

var pay = document.getElementById('payment');
var spot_left = document.getElementById('spot1');
var count = 50;

function main1(event) {
    count--;
    console.log(count);
    spot_left.innerText = count;
    if (count<=-1) {
    	spot_left.innerText = "0";
    	console.log("full");
    	pay.innerText = "Full";
    	event.preventDefault();
    }
    
}

pay.addEventListener('click', main1);




