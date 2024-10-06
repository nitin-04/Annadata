const RestaurantCart = (props) => {
    const { resData } = props;

    const { img, name, rating, deliveryTime, cuisines, locality } = resData?.info;
    return (
        <div className="cart">
            <img className="cart-img" src={img} />
            <h3>{name}</h3>
            <h4>{rating}⭐ Rating</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default RestaurantCart;