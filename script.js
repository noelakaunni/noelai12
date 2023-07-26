const apiUrl = 'http://127.0.0.1:5000/chat'; // Replace with your API endpoint URL

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');
    const userMessage = createMessageElement('user', userInput);
    chatbox.appendChild(userMessage);

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const assistantMessage = createMessageElement('assistant', data.reply);
        chatbox.appendChild(assistantMessage);
    })
    .catch(error => console.error('Error:', error));
}

function createMessageElement(role, content) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(role);
    messageElement.innerText = `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`;
    return messageElement;
}
