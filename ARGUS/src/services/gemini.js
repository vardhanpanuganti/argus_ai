export async function generateTravelPlan(prompt) {

  const response = await fetch("https://argus-ai-backend-9wd0.onrender.com", {
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