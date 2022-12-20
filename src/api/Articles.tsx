const API_URL = "https://shop-bff.fyndiq.se/code-assignment";

export async function getArticles() {
  try {
    const response = await fetch(`${API_URL}/articles`, {
      method: "GET",
      headers: { market: "SE", locale: "sv-SE" },
    });
    return response.json();
  } catch (error) {
    console.log("error: ", error);
    return [];
  }
}
