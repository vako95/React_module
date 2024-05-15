import './CardsList.css'
import CardsItem from '../cards_list_item/CardsItem';

const CardList = ({data}) => {
const elements = data.map((item,index)=>{
    const {...ItemProps} = item;
  return(
    <div><CardsItem key={index} {...ItemProps}/></div>
  )
}

)

return(
    <div>
{elements}
    </div>
)
}

export default CardList;