import { useState, useRef } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const catList = [],
    catRef = {};
  for (let i = 0; i < 10; i++) {
    catRef[i] = useRef(null);
    catList.push({
      id: i,
      imageUrl: "https://placekitten.com/250/200?image=" + i
    });
  }
  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
            catRef[index].current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start"
            });
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={catRef[i]}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
