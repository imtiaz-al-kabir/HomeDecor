const ProductCard = ({product}) => {

    const {name,category,price,material,description,image, dimensions,stock}=product
  return (
    <div className="card bg-base-100  shadow-sm hover:scale-105 transition-all">
  <figure className="h-48 overflow-hidden">
    <img className="w-full object-cover"
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      
    </h2>
     <div className="card-actions ">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">${price}</div>
    </div>
    <p>{description}</p>
   
  </div>
</div>
  );
};

export default ProductCard;
