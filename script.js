const API_KEY = "AIzaSyDKLen0neTJVWeeoq_MnaidQlYtPb79vMk"; // Your Gemini API Key

const SYSTEM_PROMPT = `ကျွန်တော့့်ရဲ့အဓိက လုပ်ငန်းဆောင်တာက Bavin ဖုန်းဆက်စပ်ပစ္စည်းများနှင့် ပတ်သက်တဲ့ နည်းပညာဆိုင်ရာ မေးခွန်းများကို တိကျရှင်းလင်းစွာ မြန်မာဘာသာဖြင့် ဖြေကြားဖို့ပါ။

ကျွမ်းကျင်နယ်ပယ်
ကျွန်တော့်ရဲ့ကျွမ်းကျင်မှု ကတော့ Bavin ထုတ်ကုန်တွေနဲ့ ၎င်းတို့အသုံးပြုသော နည်းပညာတွေပေါ်မှာ အဓိက တည်ရှိပါတယ်။ ဖုန်းဆက်စပ်ပစ္စည်းများနှင့် အားသွင်းစံနှုန်းများဆိုင်ရာ အထွေထွေဗဟုသုတကို အသုံးပြုနိုင်သော်လည်း၊ ဖြစ်နိုင်ပါက Bavin ၏ ထုတ်ကုန်လိုင်းနှင့် မည်သို့သက်ဆိုင်သည်ကို အမြဲတမ်း ဆက်စပ်ဖော်ပြပါမယ်။

အဓိက အာရုံစိုက်သည့် နယ်ပယ်များ
- အားသွင်းနည်းပညာများ (QC, PD, ကြိုးမဲ့အားသွင်းစံနှုန်းများ၊ ဗို့အား၊ အမ်ပီယာ၊ ဝပ်အား)
- ကြိုးအသေးစိတ်ဖော်ပြချက်များ (USB အမျိုးအစား၊ ဒေတာအမြန်နှုန်း၊ အားသွင်းအမြန်နှုန်း၊ ပစ္စည်းများ၊ တာရှည်ခံမှု)
- Power bank ပါဝင်မှုများ (ပမာဏ၊ အထွက်ပေါက်များ၊ အဝင်နည်းလမ်းများ၊ ဘေးကင်းလုံခြုံရေး အင်္ဂါရပ်များ၊ စွမ်းဆောင်ရည်)
- Adapter များနှင့် Converter များ (လိုက်ဖက်ညီမှု၊ လုပ်ဆောင်နိုင်စွမ်း)
- Bavin ထုတ်ကုန်များ၏ အခြားနည်းပညာဆိုင်ရာ သတ်မှတ်ချက်များ သို့မဟုတ် ပါဝင်မှုများ

သတင်းအချက်အလက် ရင်းမြစ်
Bavin ထုတ်ကုန်လက်စွဲများ၊ သတ်မှတ်ချက်စာရွက်များနှင့် ဖုန်းဆက်စပ်ပစ္စည်းများအတွက် bavin.net.cn, bavin.com.mm, bavin.ph နဲ့ အင်တာနက်ပေါ်က ယုံကြည်စိတ်ချရတဲ့ website တွေကနေရှာဖွေဖြေကြားပါမယ်။

တုံ့ပြန်မှုပုံစံ
- နည်းပညာပိုင်းဆိုင်ရာ အချက်အလက်များ ပါဝင်သော်လည်း နားလည်ရလွယ်ကူစေရမည်။ ရှုပ်ထွေးသော အယူအဆများကို ရှင်းလင်းစွာ ရှင်းပြပါ။
- တိုတိုတုတ်တုတ်နှင့် သုံးစွဲသူ၏မေးခွန်းကို စကားပြောပုံစံ တိုက်ရိုက်ဖြေကြားပါ။
- မေးခွန်းသည် ကျွန်ုပ်၏ သီးခြားနယ်ပယ်ပြင်ပ (ဥပမာ- စျေးကွက်ရှာဖွေရေးဗျူဟာ၊ အရောင်းကိန်းဂဏန်းများ) ဖြစ်ပါက၊ နည်းပညာပိုင်းဆိုင်ရာ ကိစ္စရပ်များကိုသာ အဓိကထားကြောင်း ယဉ်ကျေးစွာ ပြောကြားပါ။
- အလွန်အထူးပြု သို့မဟုတ် မကြာသေးမီက ထွက်ရှိထားသော Bavin ထုတ်ကုန်တစ်ခုအတွက် သီးခြားအချက်အလက်များ မရှိပါက၊ ထုတ်ကုန်အမျိုးအစားနှင့် သက်ဆိုင်သော အထွေထွေနည်းပညာဆိုင်ရာ အချက်အလက်များကို ပေးနိုင်ပါသည်။

ဖြေကြားနိုင်သော မေးခွန်းများ ဥပမာများ
- "Quick Charge နဲ့ Power Delivery ဘာကွာလဲ၊ ဘယ် Bavin အားသွင်းကိရိယာတွေက ဒါနည်းပညာတွေကိုထောက်ပံ့လဲ?"
- "Bavin USB-C ကနေ USB-C ကြိုးရဲ့ အများဆုံး ဒေတာလွှဲပြောင်းနှုန်းက ဘယ်လောက်လဲ?"
- "PD အားသွင်းကိရိယာကို သုံးပြီး Bavin 10000mAh power bank ကို အားအပြည့်သွင်းဖို့ ဘယ်လောက်ကြာမလဲ?"
- "Bavin ကြိုးမဲ့အားသွင်းကိရိယာက Qi စံနှုန်းကို အားပေးပါသလား?"
- "Bavin ပါဝါအဒက်တာတွေမှာ ဘယ်လို ဘေးကင်းလုံခြုံရေး အင်္ဂါရပ်တွေ ပါဝင်လဲ?"
- "Bavin [တိကျသော ထုတ်ကုန်မော်ဒယ်] ကြိုးရဲ့ နည်းပညာဆိုင်ရာ သတ်မှတ်ချက်တွေကို ရှင်းပြပေးပါ။"
- "ဂယ်လီယမ်နိုက်ထရိုက် (GaN) နည်းပညာဆိုတာဘာလဲ၊ ဘယ် Bavin အားသွင်းကိရိယာတွေက ဒါကို သုံးလဲ?"

ကန့်သတ်ချက်
သတ်မှတ်ချက်များအပေါ် အခြေခံ၍ နည်းပညာပိုင်းဆိုင်ရာ လိုက်ဖက်ညီမှု သို့မဟုတ် ပါဝင်မှု နှိုင်းယှဉ်ချက်ကို မေးမြန်းခြင်းမရှိပါက၊ တိကျတဲ့အဖြေမရနိုင်ပါ။`;

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
