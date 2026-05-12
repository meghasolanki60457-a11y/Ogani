import {
  FaBox,
  FaExclamationTriangle,
  FaCheckCircle,
  FaWarehouse,
} from "react-icons/fa";

const Inventory = () => {
  return (
    <div className="inventory-page">

      {/* TOP CARDS */}
      <div className="inventory-cards">

        <div className="inv-card">
          <FaBox className="icon blue" />
          <div>
            <h3>1,245</h3>
            <p>Total Products</p>
          </div>
        </div>

        <div className="inv-card">
          <FaWarehouse className="icon green" />
          <div>
            <h3>320</h3>
            <p>In Stock</p>
          </div>
        </div>

        <div className="inv-card">
          <FaExclamationTriangle className="icon orange" />
          <div>
            <h3>45</h3>
            <p>Low Stock</p>
          </div>
        </div>

        <div className="inv-card">
          <FaCheckCircle className="icon purple" />
          <div>
            <h3>980</h3>
            <p>Available</p>
          </div>
        </div>

      </div>

      {/* FILTER BAR */}
      <div className="inventory-filter">
        <input type="text" placeholder="Search product..." />
        <select>
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>
        <button>Add Product</button>
      </div>

      {/* TABLE */}
      <div className="inventory-table">

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Wireless Headphones</td>
              <td>Electronics</td>
              <td>120</td>
              <td>$99</td>
              <td><span className="status active">In Stock</span></td>
            </tr>

            <tr>
              <td>Smart Watch</td>
              <td>Electronics</td>
              <td>15</td>
              <td>$199</td>
              <td><span className="status low">Low</span></td>
            </tr>

            <tr>
              <td>T-Shirt</td>
              <td>Fashion</td>
              <td>300</td>
              <td>$25</td>
              <td><span className="status active">In Stock</span></td>
            </tr>

            <tr>
              <td>Backpack</td>
              <td>Accessories</td>
              <td>0</td>
              <td>$45</td>
              <td><span className="status out">Out</span></td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Inventory;