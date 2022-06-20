import './Shopping.css'
import img1 from './images/img1f1.jpg'
import { useDispatch } from 'react-redux'
import { addShopping,delateShopping,delateShopping1} from '../ShoppingSlice';
import img2 from './images/img1f2.jpg'
import img3 from './images/img1f4.jpg'
import Components from './Components'
import Panier from './Panier'
import { useState } from 'react';




const products = [
  {
    img: img1,
    id:1, 
    name: 'montre connecté 1', 
    prix: 100 ,
    button1:'ADD',
    button2:'✔',
    
  },
  {
    img: img2,
    id:2, 
    name: 'montre connecté 2', 
    prix: 100,
    button1:'ADD',
    button2:'✔',
  },
  {
    img: img3,
    id:3, 
    name: 'montre connecté 3', 
    prix: 100,
    button1:'ADD',
    button2:'✔',
  },
]

function Shopping() {
  const dispatch = useDispatch();
  const [totale, settotale] = useState(0);
 

  function handleClick(e, id){
  const  new_product = products.find((p) => p.id == id)
  dispatch(addShopping(new_product))
  settotale((totale + 100))
 
}
function delateall1(){
  settotale((totale - 100))
}
function delateall(){
  settotale((totale - totale))
}

    return (<>
     <div className="shopping">
        <div className='header'></div>
        <div>
          <h1 id='head'>Click on "Add" To Select Your Favorite Watch</h1>
          </div>
        <div className='items'>

        {
            products.map((product, index) => {
              return (
                <Components 
                  key={"p"+product.id}
                  img={product.img}
                  name={product.name}
                  prix={product.prix}
                  id={product.id}
                  handleClick={handleClick}
                  index={index}
                  button1={product.button1}
                />
              )
            })
          }
          

          <Panier 
          key={"t"}
          totale={totale}
          delateall1={delateall1}
          delateall={delateall}
          />
         
        
        </div>
       
        <div className='Leg'></div>
      </div>
</>
);
      
     
  }
 




//gatsby , next js, symantic web
export default Shopping;