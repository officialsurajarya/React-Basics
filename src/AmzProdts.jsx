import "./AmzProd.css";
import AmzProd from "./AmzProd.jsx";

export default function AmzProdts() {
  return (
    <>
      <h3>Blockbuster Deals on Computer Accessories | Shop Now</h3>
      <div className="outerdiv">
        <AmzProd
          title="Logitech MX Master 3S"
          desc={["8,000 DPI", "5 Programmable Buttons"]}
          img="./public/mouse1.png"
          oldPrice={12495}
          newPrice={8999}
        />
        <AmzProd
          title="Apple Pencil (2nd Gen)"
          desc={["Intutive touch surface", "Designed for iPad Pro"]}
          img="./public/Apple.png"
          oldPrice={11900}
          newPrice={9199}
        />
        <AmzProd
          title="Zebronics Zeb-Transformer"
          desc={["Mechanical Keys", "RGB Backlit"]}
          img="./public/Zeb.png"
          oldPrice={1599}
          newPrice={899}
        />
        <AmzProd
          title="Portornics Wireless Mouse"
          desc={["Wireless Mouse 2.4G", "Optical Oriented"]}
          img="./public/MouWirls.png"
          oldPrice={599}
          newPrice={278}
        />
      </div>
    </>
  );
}
