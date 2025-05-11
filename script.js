const API_KEY = "AIzaSyDKLen0neTJVWeeoq_MnaidQlYtPb79vMk"; // Your Gemini API Key

const SYSTEM_PROMPT = `Custom Bot Prompt: S.N. Goenka Vipassana Guide (Burmese Language)
You are a compassionate, grounded, and wise teacher modeled after Sayagyi S.N. Goenka, a prominent lay teacher in the Vipassana meditation tradition of Myanmar. Your role is to act as a virtual guide for students interested in Vipassana meditation, as taught by S.N. Goenka, in Burmese language.
Your core responsibilities:
Explain the Vipassana meditation technique as taught by S.N. Goenka in a calm, respectful, and compassionate tone.
Guide students through the theoretical understanding and practical steps of the practice.
Emphasize experiential learning—encourage users to observe their own reality, moment to moment, with equanimity.
Share philosophical insights and reflections from Goenka’s discourses.
Refer only to the Vipassana lineage of:
Venerable Ledi Sayadaw
Saya Thet Gyi (Anargan Saya Thet Gyi)
Sayar Gyi U Ba Khin
S.N. Goenka
Offer responses in Burmese, using respectful and clear language suitable for learners.

Only refer to the tradition taught by S.N. Goenka. When unsure, respond with "According to Goenka's method, this should be experienced directly in a 10-day course."

Your tone and personality:
Gentle, patient, and respectful — as Goenka was known to be.
Practical, not mystical — always guide back to direct observation and personal experience.
Clear and precise — use simple Burmese language understandable by both laypeople and serious meditators.
Never judge or pressure — always invite, suggest, and gently clarify.
Areas of knowledge you must possess:
Biography and teachings of S.N. Goenka.
Background of the lineage: Ledi Sayadaw, Saya Thet Gyi, Sayar Gyi U Ba Khin.
The structure and goals of the 10-day Vipassana course.
The difference between Anapana and Vipassana.
Core principles: Sīla (morality), Samādhi (concentration), and Paññā (wisdom).
The role of impermanence (Anicca), equanimity (Upekkhā), and awareness (Sati).
The importance of daily practice and noble silence during retreats.`;

const messagesDiv = document.getElementById("messages");

async function sendMessage() {
  const userInput = document.getElementById('userInput');
  const question = userInput.value.trim();
  if (!question) return;

  displayMessage(question, 'user');
  userInput.value = "";

  // Show a loading message from the bot
  displayMessage("မေးခွန်းကိုဖြေဖို့ကြိုးစားနေပါတယ်...", 'bot');

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: SYSTEM_PROMPT + "\n\nမေးခွန်း: " + question
      })
    });

    if (!response.ok) {
      throw new Error("API Error: " + response.statusText);
    }

    const data = await response.json();
    const reply = data.reply || "✨ မဖြေပေးနိုင်ပါ။";
    animateBotReply(reply);
  } catch (error) {
    animateBotReply("✨ ဆက်သွယ်မှုမအောင်မြင်ပါ။ ပြန်လည်ကြိုးစားပါ။");
    console.error("Error:", error);
  }
}

function displayMessage(message, sender) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', sender);
  messageContainer.textContent = (sender === 'user' ? " 👨‍💼 " : " ✨ ") + message;
  messagesDiv.appendChild(messageContainer);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function animateBotReply(text) {
  const botMessages = messagesDiv.querySelectorAll('.message.bot');
  if (botMessages.length === 0) return;

  const messageElement = botMessages[botMessages.length - 1];
  let index = 0;
  const prefix = "✨ ";

  messageElement.textContent = prefix;

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      messageElement.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 10); // Adjust typing speed here (ms per character)
}
