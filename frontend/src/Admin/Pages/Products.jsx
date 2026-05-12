const CreateProduct = () => {
  return (
    <div className="create-product">

      {/* PAGE TITLE */}
      <div className="page-header">
        <h2>Create Product</h2>
      </div>

      {/* FORM CARD */}
      <div className="product-form-card">

        <div className="form-grid">

          <div className="form-group">
            <label>Product Name</label>
            <input type="text" placeholder="Enter product name" />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" placeholder="$0.00" />
          </div>

          <div className="form-group">
            <label>Stock</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group full">
            <label>Description</label>
            <textarea placeholder="Write product description..."></textarea>
          </div>

          <div className="form-group full">
            <label>Upload Image</label>
            <input type="file" />
          </div>

        </div>

        <button className="submit-btn">
          Create Product
        </button>

      </div>

    </div>
  );
};

export default CreateProduct;