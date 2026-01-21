import "./Product.css";

function Box({ title, description, features }) {
  return (
    <div className="outer product">
      <div className="title">Title: {title}</div>
      <div className="description">Description: {description}</div>
      <div className="description">Features: {features}</div>
    </div>
  );
}
export default Box;
