import './Card.css'; 

function Card(props){
    const classes = 'card '+props.className;
    return <div className={classes}>{props.children}</div>; //Returns the content b/w <card></card>
}

export default Card;