import React from "react";

function Recipes() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.data);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <p>{!data ? "Loading..." : data[1].title}</p>
      </main>
    </div>
  );
}

export default Recipes;