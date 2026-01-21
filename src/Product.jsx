import "./Product.css";
import Box from "./ReactPropsEx.jsx";

function Product() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <div className="product">
        <h2 className="title">I 💙 India</h2>

        <Box title="Hello" description="How Are You" features={options[0]} />
        <Box
          title="Good Morning"
          description="What r u doing"
          features={options[1]}
        />
      </div>
    </>
  );
}

export default Product;
