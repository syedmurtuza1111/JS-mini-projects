document.addEventListener('DOMContentLoaded',()=>{

 const expenseForm = document.getElementById('expense-form')
 const expenseNameInput = document.getElementById('expense-name')
 const expenseAmountInput = document.getElementById('expense-amount')
 const expenseList = document.getElementById('expense-list')
 const totalAmountDisplay = document.getElementById('total-amount')

 let expenses = JSON.parse(localStorage.getItem('expenses')) || []
 let totalAmount = calculateTotal()
 renderExpenses()
 updateTotal()

 expenseForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = expenseNameInput.value.trim()
    const amount = parseFloat(expenseAmountInput.value.trim())

    if((name !== '' && !isNaN(amount) && amount > 0 )){
        const newExpense ={
            id:Date.now(),
            name:name,
            amount:amount,
        }

        expenses.push(newExpense)
        console.log(expenses)
        saveExpensestoLocal()
        renderExpenses()
        updateTotal()

        expenseNameInput.value=''
        expenseAmountInput.value=''

    }

    

 });

 function renderExpenses(){
     expenseList.innerHTML=''
    expenses.forEach((expense)=>{
       const li = document.createElement('li')
       li.innerHTML=`
       ${expense.name} - ${expense.amount}
       <button data-id='${expense.id}'>Delete</button>`
       expenseList.appendChild(li)
       

    })

    //saveExpensestoLocal()
    
   
 }

 function calculateTotal(){
    return expenses.reduce((sum,expenses)=>sum+expenses.amount,0)

 }

 function updateTotal(){
    totalAmount = calculateTotal()
    totalAmountDisplay.textContent=totalAmount.toFixed(2);
   // saveExpensestoLocal()
 }

 function saveExpensestoLocal(){
    localStorage.setItem('expenses', JSON.stringify(expenses))
 }

 expenseList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON'){
      const expenseId =  parseInt(e.target.getAttribute('data-id'))
      expenses = expenses.filter(expense => expense.id !== expenseId)
        saveExpensestoLocal()
        renderExpenses()
        updateTotal()

    }
 })

})