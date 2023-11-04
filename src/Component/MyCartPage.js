
import { connect } from "react-redux";
import { remove_from_cart } from "../redux/action/cartActions";
import { toast } from "react-toastify";

const MyCartPage = ({cartItems, remove_from_cart}) => {


    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    const handleCheckout = () => {
        toast.success('Items have been checkout out', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    }

    return (
        <div>
            <div>
                <h1 style={{textAlign: 'center'}}>Cart Page</h1>
            </div>
            <div  className="MyCartPage">
                <div>
                        {
                            cartItems.length === 0 ? (<h3 style={{textAlign: 'center'}}>Cart is Empty.</h3>) : (
                                <div className="cartPage">
                                    {
                                        cartItems.map((item) => (
                                            <div key={item.id} className="cartItem">
                                                <img src={item.images[0]} />
                                                <p>Title: {item.title}</p>
                                                <p>Price: ${item.price}</p>
                                                <button onClick={() => remove_from_cart(item.id)}>Remove From Cart</button>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                </div>
                <div>
                    <div className="checkoutList">
                        <h3 style={{textAlign: 'center'}}>checkout List</h3>
                        <div>
                            {
                                cartItems.map((item) => (
                                    <div>
                                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '0rem 1rem'}}>
                                            <h4>{item.title}</h4>
                                            <h4>${item.price}</h4>
                                        </div>
                                    </div>
                                           
                                ))
                            }
                        </div>
                        <div style={{display: 'flex', padding: '0rem 1rem', justifyContent: 'space-between',marginBottom : '1rem', borderTop: '1px solid #FFFFFF', borderBottom: '1px solid #FFFFFF'}}>
                                            <h4>Total</h4>
                                            <h4>${calculateTotalPrice()}</h4>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button style={{ width: '80%', padding: '0.5rem', fontWeight:'bold'}} onClick={() => handleCheckout()}>Click To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state,
    };
};
  
const mapDispatchToProps = {
    remove_from_cart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCartPage);