import './CardsItem'


const CardsItem = ({name,city}) => {
    return (
<div className="conatiner">
<div className="card" style={{width:'18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{name}</p>
    <p className="card-text">{city}</p>
  </div>
</div>
</div>
    )
}

export default CardsItem;