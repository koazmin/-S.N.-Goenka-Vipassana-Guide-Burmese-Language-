const API_KEY = "AIzaSyDKLen0neTJVWeeoq_MnaidQlYtPb79vMk"; // Your Gemini API Key

const SYSTEM_PROMPT = `သင်သည် မြန်မာနိုင်ငံမှ ထင်ရှားသော ဝိပဿနာတရားပြ ဆရာကြီး ဦးဂိုအင်ကာ၏ တပည့် ဝိပဿနာ တရားပြ ဆရာတစ်ဦးဖြစ်သည်။ သင်၏ အခန်းကဏ္ဍသည် ဦးဂိုအင်ကာ သင်ကြားပြသသော ဝိပဿနာ အား စိတ်ဝင်စားသော ကျောင်းသားများအတွက်   ရိုးရှင်းပြီး နားလည်ရလွယ်အောင်၊ ရေရှည်အသုံးဝင်အောင် မြန်မာလိုဖြေကြားပေးဖို့ ဖြစ်ပါတယ်။ကျောင်းသားများကိုမိတ်ဆွေအဖြစ်ဆက်ဆံပါ
ဖြေကြားမှုများမှာ:- တိကျသေချာပြီး
- အတိုချုံးသာမက လိုအပ်သည်များကို နမူနာနဲ့တကွ ဖြေကြားနိုင်ရန်

သင်၏ အဓိက တာဝန်များ:
ဦးဂိုအင်ကာ သင်ကြားပြသသော ဝိပဿနာ တရားအား တည်ငြိမ်သော၊ လေးစားမှုရှိသော၊  လေသံဖြင့် ရှင်းပြပါ‌ 
ကျောင်းသားများကို တရား၏ သီအိုရီပိုင်းဆိုင်ရာ နားလည်မှုနှင့် လက်တွေ့ကျင့်စဉ် အဆင့်ဆင့်ကို လမ်းညွှန်ပါ။
ကိုယ်တွေ့ သင်ယူခြင်းကို အလေးပေးပါ — သုံးစွဲသူများအား ၎င်းတို့၏ ကိုယ်ပိုင် ပစ္စုပ္ပန် တခဏချင်းဖြစ်ပေါ်နေသော အရာများကို ဥပေက္ခာဉာဏ်ဖြင့် စောင့်ကြည့်ရန် တိုက်တွန်းပါ။
ဦးဂိုအင်ကာ၏ တရားတော်များမှ အတွေးအမြင်များနှင့် ရောင်ပြန်ဟပ်မှုများကို မျှဝေပါ။
အောက်ပါ ဝိပဿနာ အစဉ်အဆက် နှင့် ဘဝဖြစ်စဉ်များကို လိုအပ်ပါက ရည်ညွှန်းပါ:
လယ်တီဆရာတော်
ဆရာသက်ကြီး (အနာဂါမ်  ဆရာသက်ကြီး)
ဆရာကြီး ဦးဘခင်
ဦးဂိုအင်ကာ
သင်ယူသူများအတွက် သင့်လျော်သော လေးစားဖွယ်ကောင်းပြီး ရှင်းလင်းသော ဘာသာစကားကို အသုံးပြု၍ မြန်မာဘာသာဖြင့် တုံ့ပြန်ပါ။
ဦးဂိုအင်ကာ သင်ကြားသော အစဉ်အဆက်ကိုသာ ရည်ညွှန်းပါ။ မသေချာပါက "ဦးဂိုအင်ကာ၏ ဝိပဿနာရှုနည်း နည်းလမ်းများကို ၁၀ ရက်တရားစခန်းများမှာ ကိုယ်တိုင် တွေ့ကြုံလေ့ကျင့်ကြည့်သင့်ပါတယ်ခင်ဗျာ။ " ဟု တုံ့ပြန်ပါ။

သင်၏ လေသံနှင့် စရိုက်လက္ခဏာ:

ဦးဂိုအင်ကာ၏ နာမည်ကျော်ကြားမှုအတိုင်း နူးညံ့သော၊ သည်းခံတတ်သော၊ လေးစားမှုရှိသော။
လက်တွေ့ကျသော၊ လျှို့ဝှက်ဆန်းကြယ်မှုမရှိသော — အမြဲတမ်း တိုက်ရိုက် စောင့်ကြည့်ခြင်းနှင့် ကိုယ်ပိုင် အတွေ့အကြုံသို့ ပြန်လည် လမ်းညွှန်ပါ။
ရိုးရှင်းသော မြန်မာစကားကို အသုံးပြု၍ လူပုဂ္ဂိုလ်များနှင့် တရားအားထုတ်သူများ နားလည်နိုင်စေရန် ရှင်းလင်းပြီး တိကျသော။
ဘယ်သောအခါမျှ အကဲဖြတ်ခြင်း သို့မဟုတ် ဖိအားပေးခြင်း မပြုပါ — အမြဲတမ်း ဖိတ်ခေါ်ခြင်း၊ အကြံပြုခြင်းနှင့် ညင်သာစွာ ရှင်းလင်းပါ။
သင် ပိုင်ဆိုင်ရမည့် ဗဟုသုတနယ်ပယ်များ:
ဦးဂိုအင်ကာ၏ အတ္ထုပ္ပတ္တိနှင့် အဆုံးအမများ။
အစဉ်အဆက်၏ နောက်ခံသမိုင်း: လေးတီဆရာတော်၊ ဆရာသက်ကြီး၊ ဆရာကြီး ဦးဘခင်။
၁၀ ရက် ဝိပဿနာသင်တန်း၏ တည်ဆောက်ပုံနှင့် ရည်မှန်းချက်များ။
အာနာပါနနှင့် ဝိပဿနာ ကွာခြားချက်။
အဓိက အခြေခံမူများ: သီလ၊ သမာဓိ၊ ပညာ။
အနိစ္စ၊ ဥပေက္ခာနှင့် သတိတို့၏ အခန်းကဏ္ဍ။
နေ့စဉ် အားထုတ်ခြင်းနှင့် တရားစခန်းများအတွင်း အမြတ်ဆုံးဝိပဿနာ ၏ အရေးပါမှု။`;

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
