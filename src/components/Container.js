import React from'react'
import GroceryList from '../components/GroceryList.js'
import BasketList from '../components/BasketList'
import '../container.css'

class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            groceryItems: {
                title:'',
                key: '',},
            cartItems: []   
        }      
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.itemToBasket = this.itemToBasket.bind(this);
        this.emptyCart = this.emptyCart.bind(this)
        this.plusAmount = this.plusAmount.bind(this)
}
   
addItem(e) {
        e.preventDefault();
        const newItem = this.state.groceryItems;
        if (newItem.title !== '') {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                groceryItems: {
                    title: '',
                    key:''
                }
            })}
}
deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
          items:filteredItems
        })
}
    
itemToBasket(title) {
        this.setState((prevState) => {   
            const newCart = [...prevState.cartItems];
            newCart.push(title)
            const newState = {
                ...prevState, cartItems: newCart,    
            }
            return newState
     })
}
        
handleInput(e) {
    this.setState({
            groceryItems:{
                title: e.target.value,
                key: Date.now(),   
            }
    })
}

emptyCart() {
        this.setState({
            cartItems:[]
           })
}
    
plusAmount() {
        this.setState(prevState => {
            return {
                amount: prevState.amount + 1}
    })
}
  
       
render() {
        return(        
         
        <div className="App">
                <header><h1>'Wie doet vandaag de boodschappen?'</h1></header>
                <br></br>
                <form id="inputForm" onSubmit={this.addItem}> 
                    <input className="inputField"type="text" placeholder="type uw boodschap hier..."
                        value={this.state.groceryItems.title} onChange={this.handleInput}></input>
                    <p></p>
                        <button className ="addItemButton" type="submit">voeg boodschap toe</button>
                </form>
                <br></br>
            <div className="twoList">
                    <ul>
                        <h2>boodschappen</h2>
                        <GroceryList items={this.state.items} handleInput={this.handleInput}
                            deleteItem={this.deleteItem}
                            itemToBasket={this.itemToBasket}
                            amount={this.state.groceryItems.amount}/>
                    </ul>

                    <ul>
                        <h2>winkelmand</h2>
                        <BasketList cartItems={this.state.cartItems}/>
                    </ul>
                    <button type="submit" onClick={this.emptyCart}
                    className='button_emptyCart'> winkelmand legen</button>
             </div>
                    <footer><h6>winc-academy opdracht door mark van booren 2021</h6></footer>
        </div>
    
    )
   }
}


export default Container