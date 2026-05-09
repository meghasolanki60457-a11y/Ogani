import {Link} from "react-router-dom";
import { useState } from "react";
function App() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    return (
        <>
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="/Images/one.png" className="w-25" alt="" />
                                                <h5>Vegetable’s Package</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                $55.00
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div
                                                        className="pro-qty ms-4"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() => count1 > 1 && setCount1(count1 - 1)}
                                                            style={{
                                                                border: "none",
                                                                padding: "7px 12px",

                                                            }}
                                                        >
                                                            -
                                                        </button>

                                                        <input
                                                            type="text"
                                                            value={count1}
                                                            readOnly
                                                            style={{
                                                                width: "50px",
                                                                textAlign: "center",
                                                            }}
                                                        />

                                                        <button
                                                            onClick={() => setCount1(count1 + 1)}
                                                            style={{
                                                                border: "none",
                                                                padding: "7px 12px",


                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                $110.00
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <i class="fa-solid fa-xmark"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="/Images/one.png" className="w-25" alt="" />
                                                <h5>Fresh Garden Vegetable</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                $39.00
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div
                                                        className="pro-qty ms-4"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",

                                                        }}
                                                    >
                                                         <button
                                                            onClick={() => count1 > 1 && setCount1(count1 - 1)}
                                                            style={{
                                                                border: "none",
                                                                padding: "7px 12px",

                                                            }}
                                                        >
                                                            -
                                                        </button>

                                                        <input type="text" value={count2} readOnly />

                                                         <button
                                                            onClick={() => setCount1(count1 + 1)}
                                                            style={{
                                                                border: "none",
                                                                padding: "7px 12px",


                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                $39.99
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <i class="fa-solid fa-xmark"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="/Images/one.png" className="w-25" alt="" />
                                                <h5>Organic Bananas</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                $69.00
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div
                                                        className="pro-qty ms-4"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() => count1 > 1 && setCount1(count1 - 1)}
                                                            style={{
                                                                border: "none",
                                                                padding: "7px 12px",

                                                            }}
                                                        >
                                                            -
                                                        </button>

                                                        <input type="text" value={count3} readOnly />

                                                         <button
                                                            onClick={() => setCount1(count1 + 1)}
                                                            style={{
                                                                border: "none",
                                                                padding: "7px 12px",


                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                $69.99
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <i class="fa-solid fa-xmark"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="javascript:void(0)" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                <a href="javascript:void(0)" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                    Upadate Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="javascript:void(0)">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span>$454.98</span></li>
                                </ul>
                              <Link to="/ogani/shoping-cart/checkout" className="primary-btn">
  PROCEED TO CHECKOUT
</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default App;