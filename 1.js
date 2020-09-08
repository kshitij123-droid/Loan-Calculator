function calculateloan(){
	var loanamt=document.getElementById("loanamt").value;
	var interrate=document.getElementById("interrate").value;
	var loanterm=document.getElementById("loanterm").value;
	var paymntpryr=document.getElementById("paymntpryr").value;
	var loanstrtdt=document.getElementById("loanstrtdt").value;

if (loanAmt === "" ||loanterm === ""||paymntpryr === ""|| loanstrtdt === "" || optexpay === ""|| interrate == 0) {
    alert("Please enter values");
    return;
  }

if (interrate<0.08) {
	alert("please enter interest rate atleast 8%");
	return;
} 

if (loanterm!== 5 || loanterm!==10 || loanterm!=15 || loanterm!=20 || loanterm!=25 || loanterm!=30) {
    alert("please enter any one of the values, 5 or 10 or 15 or 20 or 25 or 30, as loan term years ");
    return;
  }  

  if (paymntpryr!== 12 || paymntpryr!==24){
  	alert("please enter monthly loan payment default amount as 12 or if you like to pay twice monthly enter amount 24");
  	return;
  }
  var loanstrtdt = new Date();

var N= loanterm*paymntpryr;
var D = [((1+interrate)*N)-1]/[interrate*(1+interrate)*N];
var L= loanamt/D;

document.getElementById("loanamount").style.display = "block";
document.getElementById("loan").innerHTML = L;

}

//Hide the tip amount on load
document.getElementById("loanamount").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateloan();

};

