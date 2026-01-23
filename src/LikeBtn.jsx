import { useState } from "react";

export default function LikeBtn() {
  let [Like, setLike] = useState(false);

  let toggleLike = () => {
    if (Like == false) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div>
      <button onClick={toggleLike}>
        {Like ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }} />
        ) : (
          <i className="fa-regular fa-heart" />
        )}
      </button>
    </div>
  );
}
