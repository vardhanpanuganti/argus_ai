export async function generateTravelPlan(prompt) {

  const response = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error("Server Error");
  }

  const data = await response.json();

  return data.response;
}