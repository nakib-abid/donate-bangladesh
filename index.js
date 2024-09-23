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

    // alert("You have donate successfully.");
    
    
})

// button quota
document.getElementById('btn-quota').addEventListener('click', function(){
    // const inputFeni = getInputValue('input-feni');
    // const inputFeniNumber = parseFloat(inputFeni);
    // const donateFeni = getInnerText('donate-feni');
    // const donateFeniNumber = parseFloat(donateFeni);
    // const sum = inputFeniNumber + donateFeniNumber ;
    // document.getElementById('donate-feni').innerText = sum ;
    // document.getElementById('input-feni').value='' ;

    // alert("You have donate successfully.");
    console.log('button quota clicked')
    
})