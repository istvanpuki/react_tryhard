import './button.css';
// <button onClick= { () => console.log("Clicked") } >{props.text}</button>
let timer;
let prevHTML;
//window.hello="helló";
//console.log(hello)

function clickHappened (e) {
    //console.log("Clicked");
    //console.log(e.target);
    
    const goodHTML = "Goodbye";
    
    if (e.target.innerHTML !== goodHTML) {
        prevHTML = e.target.innerHTML;
        e.target.innerHTML = goodHTML;
        timer = setTimeout(() => {e.target.innerHTML = prevHTML}, 3000);
        
    } else {
        e.target.innerHTML = prevHTML;
        clearTimeout(timer);
        console.log(prevHTML);
        
    }

}

function button(props) {
    return (
        <button onClick={clickHappened} >{props.text}</button>
    );
}

export default button;