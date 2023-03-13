const TabItem=(props)=>{

    return(
        <div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <div>
                <button onClick={props.onLargeRemove}>Buy {props.quantity}</button>
                
                <button onClick={props.onAdd}>Add product</button>
            </div>
        </div>
    )
    }
    
    export default TabItem;