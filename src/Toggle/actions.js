export const getCounter = async (setCount, setError) => {
  try {
    const response = await fetch("/api/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const { ok } = response;

    if (!ok) setError("Error in receiving data from the server.");

    const json = await response.json();

    if (json) {
      const { data: count } = json;
      console.log("GET response", count);
      setCount(count);
    }
  } catch (e) {
    setError(e.message);
  }
};

export const updateCounter = async count => {
  console.log("POST API called w/ ", count);
  try {
    const response = await fetch("/api/count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ count: count })
    });

    const { ok } = response;

    if (!ok) console.log("Error in receiving data from the server.");

    const data = await response.json();
    console.log("POST response", data);
  } catch (e) {
    console.log(e.message);
  }
};
export const duration = 10000;
