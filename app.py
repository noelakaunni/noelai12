from flask import Flask, request, jsonify
import chatbot

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat_with_assistant():
    try:
        data = request.get_json()
        user_message = data['message']
        reply = chatbot.chat_with_assistant(user_message)
        return jsonify({'reply': reply})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
