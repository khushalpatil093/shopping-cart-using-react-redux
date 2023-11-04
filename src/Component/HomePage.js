import { add_to_cart } from "../redux/action/cartActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const dispatch = useDispatch();

    const addToCart = (items) => {
        dispatch({type: 'ADD_TO_CART', value: items})
    };

    useEffect(() => {

        setTimeout(() => {

            const fetchData = async () => {
                try{
                    const response = await axios.get('https://dummyjson.com/products');
                    const data = await response.data.products;
                    setProductData(data);
                    console.log(data)
                }
                catch (error) {
                    console.log('Error fetching data', error);
                }
            }
        
            fetchData();

            setLoading(false);
        }, 3000);

    }, [])

    return (
        <div>
            {
                loading ? (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', fontSize: '2rem', fontWeight: 'bold'}}>Loading......</div>) : (
                    <div>
                        <h1 style={{textAlign: 'center'}}>All Items</h1>
                        <div className="HomePage">
                            {
                                productData.map((items) => ( 
                                    <div key={items.id} className="item">
                                        <img src={items.images[0]} />
                                        <p>Title: {items.title}</p>
                                        <p>Price: ${items.price}</p>
                                        <button onClick={() => addToCart(items)}>Add To Cart</button>
                                    </div>
                                ))
                                
                            }
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default HomePage;