document.addEventListener('DOMContentLoaded',()=>{
  const products =[
    {id:1, name:'Product 1', price: 29.99},
    {id:2, name:'Product 2', price: 24.99},
    {id:3, name:'Product 3', price: 109.99},
  ];

  const card = JSON.parse(localStorage.getItem('card')) || []

  const ProductList = document.getElementById('product-list');
  const cardItems =document.getElementById('cart-items')
  const emptyCardMessage =document.getElementById('empty-cart')
  const cardTotalMessage =document.getElementById('cart-total')
  const totalPriceDisplay =document.getElementById('total-price')
  const checkOutButton =document.getElementById('checkout-btn')

  products.forEach((product)=>{

    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML=`<span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add to Card</button>`;
    ProductList.appendChild(productDiv)
  })

  ProductList.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
      const productId = parseInt(e.target.getAttribute('data-id'))
      const product = products.find(p=>p.id == productId) //find pid == pid in products
      addtoCard(product);
      console.log(product)
    }
  })

  function addtoCard(product){
    card.push(product)
    renderCart()
    save()
   
  }

  function renderCart(){
   cardItems.innerText=''
   
    let totalPrice = 0
   
    if(card.length>0){
        emptyCardMessage.classList.add('hidden')
        cardTotalMessage.classList.remove('hidden')

        card.forEach((item ,index)=>{

            totalPrice+=item.price

            const cardItem = document.createElement('div')
            cardItem.innerHTML=`${item.name} - $${item.price.toFixed(2)  }
             <button class="delete-btn" data-index"${index}">Delete</button>`
            cardItems.appendChild(cardItem)
            

        })
        totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach((button) => {

            button.addEventListener('click', (e) => {
                const itemIndex = parseInt(e.target.getAttribute('data-index'));
                card.splice(itemIndex, 1); // Remove the item from the card array
                renderCart(); // Re-render the cart
                save()
            });
        });    


    }else{
        emptyCardMessage.classList.remove('hidden')
        totalPriceDisplay.textContent = '0.00';
        
    }

  }

  checkOutButton.addEventListener('click',(e)=>{
    card.length = 0
    totalPriceDisplay.textContent='$0.00'
    alert("Check out Successfully")
    renderCart()
    save()

  })

  function save(){
    localStorage.setItem('card', JSON.stringify(card))
  }

  renderCart()


})


