document.getElementById('cards').addEventListener('click', function (event) {
    
    if(event.target.type==='button'){  
        const player=event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
        const node = document.createElement("li");
        node.innerText=player; 
        const selectElement=document.getElementById('select-v');
        
        if(getSelectedPlayer()<5){
            selectElement.appendChild(node);
            event.target.setAttribute('disabled',true);
            event.target.style.backgroundColor="gray"; 
        }
        else{
            alert("You have already selected 5 players");
        }
    }
})

document.getElementById('calculate').addEventListener('click', function () {

    const totalPlayer=getSelectedPlayer();  
    const perPlayerCost = getInputFieldValueById('per_player_cost');
 
    if (isNaN(perPlayerCost) || perPlayerCost==='') {
        alert('please give valid input');
    }else if(totalPlayer==0){
        alert('please select player');
    }else {
        document.getElementById('player_expenses').innerText = (parseFloat(perPlayerCost) * totalPlayer);
    }
})

document.getElementById('calculate_total').addEventListener('click', function () {
    
    const managerCost = getInputFieldValueById('manager_cost');
    const coachCost = getInputFieldValueById('coach_cost');
    const playerExpenses = getTextElementValueById('player_expenses');
   
    if (isNaN(managerCost) || isNaN(coachCost) || managerCost==='' || coachCost==='') {
        alert('please give valid input');
    } else {
        document.getElementById('total').innerText = parseFloat(managerCost) + parseFloat(coachCost) + parseFloat(playerExpenses);
    }
})


// common functions start

function getInputFieldValueById(inputFieldId) {
    const InputFieldValue = document.getElementById(inputFieldId).value;
    return InputFieldValue;
}

function getTextElementValueById(elementId) {
    const elementValue = document.getElementById(elementId).innerText;
    return elementValue;
}

function getSelectedPlayer(){
    const totalSelectedPlayer=document.querySelectorAll('#select-v li').length;
    return totalSelectedPlayer;
}

// common functions end




