async function suggestTool() {
    const questionInput = document.getElementById("question").value.trim();
    const resultDiv = document.getElementById("result");

    if (!questionInput) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a problem or question.</p>";
        return;
    }

    // Show a loading message while waiting for the API
    resultDiv.innerHTML = "<p>⏳ Analyzing your problem and finding the best AI tool...</p>";

    // IMPORTANT: Get a free API key from Google AI Studio (aistudio.google.com)
    // Replace 'YOUR_API_KEY' with your actual key.
    const apiKey = "AQ.Ab8RN6IFRk62kISw9N-CNnV7q2LR8d2gDvJ7Gt8ilZXesGZTeQ"; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    // We instruct the AI on exactly how to respond and format the HTML
    const prompt = `A user on my AI Hub website has the following problem: "${questionInput}".
    1. First, recommend the single best AI tool to solve this problem (e.g., ChatGPT, Midjourney, Canva, Claude, Gemini).
    2. Second, provide a brief 2-3 sentence suggestion on how to solve their problem using that specific tool.
    Format the response strictly in simple HTML: 
    Use an <h3> tag for the tool name (add a relevant emoji), and a <p> tag for the solution. 
    Do not use markdown blocks like \`\`\`html.`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            throw new Error("Failed to connect to the AI API.");
        }

        const data = await response.json();
        
        // Extract the AI's response text and push it to the page
        const aiResponse = data.candidates[0].content.parts[0].text;
        resultDiv.innerHTML = aiResponse;

    } catch (error) {
        console.error("API Error:", error);
        // Fallback to your original logic if the API fails or no key is provided
        fallbackSuggestTool(questionInput.toLowerCase(), resultDiv);
    }
}

