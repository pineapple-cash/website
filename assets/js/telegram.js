   // Set Your Bot Token Here
var Token = "1853741861:AAGvWSDhE0K3OpW-GB9Buvzo4LRMHHMaDbA";

/*
   chat_id for the group or channel you want to track,
   For channels, they are usually like @telegram, @Bitcoin_News_Crypto, @TelegramTips,
   For group chats, they are numbers alike. Just like "-1234567890",
   Modify and set your chat_id here if you found it,
   It should look like var group_chat_id = "-1234567890".
*/
var chat_id = "-1001154533990";

// HTTP Request Function
function httpRequest(URL, Method)
{
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open(Method, URL, false);
      xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);
}

// Send a request to Telegram API to get number of members in a particular group or channel
function getMemberCount()
{
      return httpRequest(`https://api.telegram.org/bot${Token}/getChatMembersCount?chat_id=${chat_id}`, "GET");
}

// Run function and parse only the number of members
var result = getMemberCount()["result"];
console.log(result);

// Write the numbers of member back to HTML
document.getElementById("telegram-users").innerText = result;

// Use this to find the *chat_id* for your group chat
//console.log(httpRequest(`https://api.telegram.org/bot${Token}/getUpdates`, "GET"));
