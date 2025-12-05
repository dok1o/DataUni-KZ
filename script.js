document.getElementById("send").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const resDiv = document.getElementById("response");

  try {
    const response = await fetch("https://YOUR_BACKEND_URL/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    resDiv.textContent = data.result;
  } catch (err) {
    resDiv.textContent = "Ошибка: " + err.message;
  }
});