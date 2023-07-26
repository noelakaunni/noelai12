import openai

openai.api_key = "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"

def chat_with_assistant(message):
    messages = [{"role": "system", "content": "A virtual assistant who knows everything"}]
    messages.append({"role": "user", "content": message})
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    reply = response["choices"][0]["message"]["content"]
    return reply
