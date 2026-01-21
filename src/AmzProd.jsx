import "./AmzProd.css";
export default function AmzProd({ title, desc, img, oldPrice, newPrice }) {
  return (
    <div className="mainDiv">
      <h1 className="title">{title}</h1>
      <p className="description">
        <ul>
          <li>{desc[0]}</li>
          <li>{desc[1]}</li>
        </ul>
      </p>
      <img src={img} className="img" />
      <div className="price">
        ₹<strike>{oldPrice}</strike> <b>₹{newPrice}</b>
      </div>
    </div>
  );
}
