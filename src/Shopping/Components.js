


function Components(props){

   
    return (<>

     <div>
            
            <div id={props.id} className="watche" >
                <img  className='watchimg' src={props.img} />
                <div className="nameitem">{props.name}</div>
                <p>{props.prix}$</p>
                <button  onClick={(e) => props.handleClick(e, props.id)} className='btn1'>{props.button1}</button>
              </div>
              </div>
             
              </>
        
       
    )
    
}

export default Components;