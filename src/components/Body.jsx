import ItemCount from "./ItemCount";
import ItemListContainer from "./ItemListContainer";

function Body(){
    return(
        <body>
            <ItemListContainer greeting='santiago' />
            <hr></hr>
            <ItemCount name='sudadera' stock={5} initial={1} />
            <ItemCount name='buzo' stock={10} initial={1} />
        </body>
    )
}

export default Body;