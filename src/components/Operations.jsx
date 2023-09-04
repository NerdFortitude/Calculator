import './Operations.css'

function Operations(props){


    function updateText(e){
        props.setExpression((prev)=>{
            return e.target.value+"";
        });
    }
    return (<div className="operations">
        
        <input type="text" className="expression" value={props.expression} onChange={updateText}/>

        <input type="text" className="result" value={props.result} />
         
    </div>
    
    );
}

export default Operations;