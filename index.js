

var pay1 = document.getElementById('payment1');
var spot_left1 = document.getElementById('spot1');
var count1 = 50;

function main1(event1) {
    count1--;
    console.log(count1);
    spot_left1.innerText = count1;
    if (count1<=-1) {
    	spot_left1.innerText = "0";
    	console.log("full");
    	pay1.innerText = "Full";
    	event1.preventDefault();
    }
    
}
pay1.addEventListener('click', main1);


var pay2 = document.getElementById('payment2');
var spot_left2 = document.getElementById('spot2');
var count2 = 50;

function main2(event2) {
    count2--;
    console.log(count2);
    spot_left2.innerText = count2;
    if (count2<=-1) {
    	spot_left2.innerText = "0";
    	console.log("full");
    	pay2.innerText = "Full";
    	event2.preventDefault();
    }
    
}
pay2.addEventListener('click', main2);


var pay3 = document.getElementById('payment3');
var spot_left3 = document.getElementById('spot3');
var count3 = 50;

function main3(event3) {
    count3--;
    console.log(count3);
    spot_left3.innerText = count3;
    if (count3<=-1) {
    	spot_left3.innerText = "0";
    	console.log("full");
    	pay3.innerText = "Full";
    	event3.preventDefault();
    }
    
}
pay3.addEventListener('click', main3);


var pay4 = document.getElementById('payment4');
var spot_left4 = document.getElementById('spot4');
var count4 = 50;

function main4(event4) {
    count4--;
    console.log(count4);
    spot_left4.innerText = count4;
    if (count4<=-1) {
    	spot_left4.innerText = "0";
    	console.log("full");
    	pay4.innerText = "Full";
    	event4.preventDefault();
    }
    
}
pay4.addEventListener('click', main4);



var pay5 = document.getElementById('payment5');
var spot_left5 = document.getElementById('spot5');
var count5 = 50;

function main5(event5) {
    count5--;
    console.log(count5);
    spot_left5.innerText = count5;
    if (count5<=-1) {
    	spot_left5.innerText = "0";
    	console.log("full");
    	pay5.innerText = "Full";
    	event5.preventDefault();
    }
    
}
pay5.addEventListener('click', main5);



var pay6 = document.getElementById('payment6');
var spot_left6 = document.getElementById('spot6');
var count6 = 50;

function main6(event6) {
    count6--;
    console.log(count6);
    spot_left6.innerText = count6;
    if (count6<=-1) {
    	spot_left6.innerText = "0";
    	console.log("full");
    	pay6.innerText = "Full";
    	event6.preventDefault();
    }
    
}
pay6.addEventListener('click', main6);



var pay7 = document.getElementById('payment7');
var spot_left7 = document.getElementById('spot7');
var count7 = 50;

function main7(event7) {
    count7--;
    console.log(count7);
    spot_left7.innerText = count7;
    if (count7<=-1) {
    	spot_left7.innerText = "0";
    	console.log("full");
    	pay7.innerText = "Full";
    	event7.preventDefault();
    }
    
}
pay7.addEventListener('click', main7);















