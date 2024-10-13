//profile view
const profileViewButton = document.getElementById('btn1');
if (profileViewButton) {
        profileViewButton.addEventListener('click', function () {
            window.location.href = 'bankprofile.html';
        });
} 
const exit=document.getElementById('exit2');
if(exit){
    exit.addEventListener('click',function(){
        window.location.href='banklogin.html';
    })
}

   
    

 // fund transfer
 const fundTransferBtn = document.getElementById('fundtransfer-btn');
 const fundTransferSection = document.getElementById('fund-transfer-section');
 const accountSection = document.getElementById('account-section');
 const backFundTransferBtn = document.getElementById('back-fundtransfer-btn');

 fundTransferBtn.addEventListener('click', function () {
     accountSection.classList.add('hidden');
     fundTransferSection.classList.remove('hidden');
 });

 backFundTransferBtn.addEventListener('click', function () {
     fundTransferSection.classList.add('hidden');
     accountSection.classList.remove('hidden');
 });

 // Fund Transfer Logic
 const submitTransferBtn = document.getElementById('submit-transfer');
 const transferSuccessMessage = document.getElementById('transfer-success-message');
 submitTransferBtn.addEventListener('click', function () {
     const accountNumberTransfer = document.getElementById('account-number-transfer').value;
     const ifscCodeTransfer = document.getElementById('ifsc-code-transfer').value;
     const transferAmount = Number(document.getElementById('amount-transfer').value);
     const accountBalance = Number(document.getElementById('a-n1').value);

     if (accountNumberTransfer && ifscCodeTransfer && transferAmount > 0) {
         if (transferAmount <= accountBalance) {
             transferSuccessMessage.style.display = 'block';
             document.getElementById('a-n1').value = accountBalance - transferAmount;  // Update the balance
         } else {
             alert('You don\'t have sufficient funds.');
         }
     } else {
         alert('Please enter all details correctly.');
     }
 });

 //  Recharge & Bill Pay 
 const rechargeBillPayBtn = document.getElementById('recharge-billpay-btn');
 const rechargeBillPaySection = document.getElementById('recharge-billpay-section');
 const backRechargeBillPayBtn = document.getElementById('back-recharge-billpay-btn');

 rechargeBillPayBtn.addEventListener('click', function () {
     accountSection.classList.add('hidden');
     rechargeBillPaySection.classList.remove('hidden');
 });

 backRechargeBillPayBtn.addEventListener('click', function () {
     rechargeBillPaySection.classList.add('hidden');
     accountSection.classList.remove('hidden');
 });

 
 const submitRechargeBillPayBtn = document.getElementById('submit-recharge-billpay');
 const rechargeBillPaySuccessMessage = document.getElementById('recharge-billpay-success-message');
 submitRechargeBillPayBtn.addEventListener('click', function () {
     const mobileNumber = document.getElementById('mobile-number-recharge').value;
     const rechargeAmount = Number(document.getElementById('amount-recharge-billpay').value);
     const accountBalance = Number(document.getElementById('a-n1').value);

     if (mobileNumber.length === 10 && rechargeAmount > 0) {
         if (rechargeAmount <= accountBalance) {
             rechargeBillPaySuccessMessage.style.display = 'block';
             document.getElementById('a-n1').value = accountBalance - rechargeAmount;  // Update the balance
         } else {
             alert('You don\'t have sufficient funds.');
         }
     } else {
         alert('Please enter a valid mobile number and recharge amount.');
     }
 });
 // atm page
 const atm=document.getElementById('atm');
 if(atm){
    atm.addEventListener('click',function(){
        window.location.href='bankatm.html';
    })
 }
 //customer care
 const customercare=document.getElementById('customercare');
 if(customercare){
    customercare.addEventListener('click',function(){
        window.location.href='bankenquiry.html';
    })
 }