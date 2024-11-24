import axios from 'axios';

export async function hello(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };
}

export async function world(event) {
  const { name } = event.queryStringParameters || {};

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello " + name + "!",
    }),
  };
}

export async function callOpenAI (event) {
  const { messages } = JSON.parse(event.body);
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4-1106-preview',
      messages: messages,
      temperature: 0.7,
    }, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to call OpenAI API");
  }
}