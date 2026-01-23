import "./App.css";
import Title from "./Title.jsx";
import Product from "./Product.jsx";
import MsgBox from "./MsgBox.jsx";
import AmzProdts from "./AmzProdts.jsx";
import Counter from "./Counter.jsx";
import LikeBtn from "./LikeBtn.jsx";
import LudoBoard from "./LudoBoard.jsx";
import Todo from "./Todo.jsx";

function App() {
  return (
    <div>
      <MsgBox userName="Suraj Arya" textColor="yellow" />
      <MsgBox userName="Surya" textColor="red " />
      <Product />
      <Title />
      <AmzProdts />
      <Counter />
      <LikeBtn />
      <LudoBoard />
      <Todo />
    </div>
  );
}

export default App;
