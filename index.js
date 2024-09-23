// get input value
function getInputValue(id){
    const inputValue = document.getElementById(id).value ;
    return inputValue ;
}

// get inner text
function getInnerText(id){
    const innerText = document.getElementById(id).innerText ;
    return innerText ;
}

// modal
function modalFunction() { 
    document.getElementById("myModal").showModal(); 
  } 


// noakhali button
document.getElementById('btn-noakhali').addEventListener('click', function(){
    const inputNoakhali = getInputValue('input-noakhali');
    const inputNoakhaliNumber = parseFloat(inputNoakhali);
    const donateNoakhali = getInnerText('donate-noakhali');
    const donateNoakhaliNumber = parseFloat(donateNoakhali);
    const sum = inputNoakhaliNumber + donateNoakhaliNumber ;
    document.getElementById('donate-noakhali').innerText = sum ;
    document.getElementById('input-noakhali').value='' ;
    const myBalance = getInnerText('my-balance');
    const myBalanceNumber = parseFloat(myBalance);
    const myBalanceRemaining = myBalanceNumber - inputNoakhaliNumber;
    document.getElementById('my-balance').innerText = myBalanceRemaining ;

    if(isNaN(inputNoakhali) || inputNoakhali <= 0){
        return alert('Invalid Input!')
    }
    
    const history = document.createElement('div');
    history.className = "border-2 border-gray-100 rounded-xl h-32 container m-auto flex justify-center flex-col items-start gap-4 pl-10 my-10" ;
    history.innerHTML = `
    <p> ${inputNoakhaliNumber} Taka is Donated for Flood Relief in Noakhali</p>
    <p>Date: ${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(history, historyContainer.firstChild)

    // alert("You have donate successfully.");
    
})

// feni button
document.getElementById('btn-feni').addEventListener('click', function(){
    const inputFeni = getInputValue('input-feni');
    const inputFeniNumber = parseFloat(inputFeni);
    const donateFeni = getInnerText('donate-feni');
    const donateFeniNumber = parseFloat(donateFeni);
    const sum = inputFeniNumber + donateFeniNumber ;
    document.getElementById('donate-feni').innerText = sum ;
    document.getElementById('input-feni').value='' ;
    const myBalance = getInnerText('my-balance');
    const myBalanceNumber = parseFloat(myBalance);
    const myBalanceRemaining = myBalanceNumber - inputFeniNumber;
    document.getElementById('my-balance').innerText = myBalanceRemaining ;

    if(isNaN(inputFeni) || inputFeni <= 0){
        return alert('Invalid Input!')
    }

    const history = document.createElement('div');
    history.className = "border-2 border-gray-100 rounded-xl h-32 container m-auto flex justify-center flex-col items-start gap-4 pl-10 my-10" ;
    history.innerHTML = `
    <p> ${inputFeniNumber} Taka is Donated for Flood Relief in Feni</p>
    <p>Date: ${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(history, historyContainer.firstChild)

    // alert("You have donate successfully.");
    
    
})

// button quota
document.getElementById('btn-quota').addEventListener('click', function(){
    const inputQuota = getInputValue('input-quota');
    const inputQuotaNumber = parseFloat(inputQuota);
    const donateQuota = getInnerText('donate-quota');
    const donateQuotaNumber = parseFloat(donateQuota);
    const sum = inputQuotaNumber + donateQuotaNumber ;
    document.getElementById('donate-quota').innerText = sum ;
    document.getElementById('input-quota').value='' ;
    const myBalance = getInnerText('my-balance');
    const myBalanceNumber = parseFloat(myBalance);
    const myBalanceRemaining = myBalanceNumber - inputQuotaNumber;
    document.getElementById('my-balance').innerText = myBalanceRemaining ;

    if(isNaN(inputQuota) || inputQuota <= 0){
        return alert('Invalid Input!')
    }

    const history = document.createElement('div');
    history.className = "border-2 border-gray-100 rounded-xl h-32 container m-auto flex justify-center flex-col items-start gap-4 pl-10 my-10" ;
    history.innerHTML = `
    <p> ${inputQuotaNumber} Taka is donated for Injured in the Quota Movement</p>
    <p>Date: ${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(history, historyContainer.firstChild)

    // alert("You have donate successfully.");
    
})

// history button
document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('history-list').classList.remove('hidden');
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('btn-history').classList.add('bg-lime-400');
    document.getElementById('btn-donation').classList.remove('bg-lime-400');
})

// donation button
document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('btn-history').classList.remove('bg-lime-400');
    document.getElementById('btn-donation').classList.add('bg-lime-400');
})


