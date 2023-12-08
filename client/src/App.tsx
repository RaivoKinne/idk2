import { useState, useEffect } from "react";

type Rectangle = {
  color: string;
  width: number;
  height: number;
};

type Circle = {
  color: string;
  radius: number;
};

type Data = {
  rectangle: Rectangle;
  rectangle_area: number;
  circle: Circle;
  circle_area: number;
};

function App() {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080");
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <section>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              <h2>Rectangle</h2>
              <div
                style={{
                  backgroundColor: data?.rectangle?.color,
                  width: `${data?.rectangle?.width}px`,
                  height: `${data?.rectangle?.height}px`,
                }}
              ></div>
              <p>Area: {data?.rectangle_area}</p>

              <h2>Circle</h2>
              <div
                style={{
                  backgroundColor: data?.circle?.color,
                  borderRadius: "50%",
                  width: `${data?.circle.radius * 2}px`,
                  height: `${data?.circle.radius * 2}px`,
                }}
              ></div>
              <p>Area: {data?.circle_area}</p>
            </div>{" "}
          </>
        )}
      </section>
    </>
  );
}

export default App;
