import Components from "./Components";
import { useSelector, useDispatch } from 'react-redux'
import { delateShopping , delateShopping1} from '../ShoppingSlice';


function Panier(props){
  
    function delateall(){
      dispatch(delateShopping(props.index))
    }
    function delateall1(){
      dispatch(delateShopping1(props.index))
    }
     
    const ShoppingList = useSelector ((state) => state.ShoppingReducer.Shopping)
    const dispatch = useDispatch();
    
    return(

        <div  className='watchlist'> 
        <h2 className='headlist'>Your Basket</h2>
        <div className="buttonsdelate">
        <button className="delatebutton"
        onClick={() => {
          props.delateall();
          delateall();
        }}>
        CLEARE </button> 
        <button className="delatebutton1"
        onClick={() => {
          props.delateall1();
          delateall1();
        }}>
        X </button>
       </div>
       
        <div className="List">
        {
           ShoppingList.map((product) => {
             return(
               <Components
               key={"p"+product.id}
               img={product.img}
               name={product.name}
               prix={product.prix}
               id={product.id}
               index={props.index}
               button1={product.button2}
               />   
             )
           }
           )
         }
         
        </div>
        
        <div className="total">  
        Totale:
        <input className="inputtotale" value={props.totale}onChange={(e) => props.handelclick(e, props.id)}  id="totalPrice"/>$  
        
           
        </div><hr></hr>
            <button className="payer" >Payer</button>
            
      </div>
    )
}

export default Panier;