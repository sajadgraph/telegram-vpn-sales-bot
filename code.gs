var token = "YOUR_BOT_TOKEN";
// آیدی عددی جدید برای دریافت فیش‌ها و گزارش‌ها
var adminId = "YOUR_ADMIN_ID"; 
var channelLink = "Channel link";

function doPost(e) {
  try {
    var contents = JSON.parse(e.postData.contents);
    
    if (contents.message) {
      var chat_id = contents.message.chat.id;
      var text = contents.message.text;

      // ۱. منوی اصلی
      if (text == "/start") {
        var welcomeText = "✨ به جمع کاربران ویژن وی پی ان خوش آمدید!\n\n" +
                          "🔻خرید آنی | 🔻پشتیبانی 24 ساعته | 🔻سرعت موشک\n\n" +
                          "👇 برای خرید و مشاهده قیمت‌ها روی دکمه زیر کلیک کنید.\n" +
                          "🆔 آیدی چنل:YOUR_CHANNEL_ID";
        
        var mainKeyboard = {
          "keyboard": [
            ["🛒 خرید سرویس", "👤 سرویس من"],
            ["📚 آموزش اتصال", "📊 تعرفه‌ها"],
            ["🤝 فروش همکاری", "📢 کانال و پشتیبانی"]
          ],
          "resize_keyboard": true
        };
        sendMessage(chat_id, welcomeText, mainKeyboard);
      } 

      // ۲. بخش تعرفه‌ها و خرید با متن سفارشی
      else if (text == "📊 تعرفه‌ها" || text == "🛒 خرید سرویس") {
        var header = "🇮🇷 تانل ویژه نت ملی\n" +
                     "──────────────\n" +
                     "⬅️ پشتیبانی 24/7\n" +
                     "⬅️ کیفیت و سرعت بالا\n" +
                     "⬅️ مناسب گیم و وبگردی\n" +
                     "⬅️ همراه با ساب لینک\n" +
                     "⬅️ بدون محدودیت کاربر و زمان\n" +
                     "──────────────\n" +
                     "🛒 حجم مورد نظر را انتخاب کنید:";
        
        var plans = {
          "inline_keyboard": [
            [{ "text": "💎 1GB - 250,000T", "callback_data": "order_1GB" }],
            [{ "text": "💎 2GB - 500,000T", "callback_data": "order_2GB" }],
            [{ "text": "💎 3GB - 700,000T", "callback_data": "order_3GB" }],
            [{ "text": "💎 5GB - 1,150,000T", "callback_data": "order_5GB" }]
          ]
        };
        sendMessage(chat_id, header, null, plans);
      }

      // ۳. سرویس‌های من
      else if (text == "👤 سرویس من") {
        var history = getHistory(chat_id);
        sendMessage(chat_id, history ? "👤 *لیست سرویس‌های شما:*\n\n" + history : "❌ شما هنوز هیچ سرویس فعالی خریداری نکرده‌اید.");
      }

      // ۴. آموزش اتصال
      else if (text == "📚 آموزش اتصال") {
        var edu = "📚 *راهنمای اتصال*\n\n🚀 برای خروجی عالی و سرعت بالا، پیشنهاد ما استفاده از برنامه **NPV Tunnel** است.\n\n⚠️ *نکته:* لینک‌های ساب‌سکرایب بدون فیلتر هستند. حتماً در برنامه گزینه Update Subscription را بزنید.";
        sendMessage(chat_id, edu);
      }

      // ۵. همکاری و کانال (جایگزینی آیدی عددی در لینک‌ها)
      else if (text == "🤝 فروش همکاری") {
        var adminBtn = { "inline_keyboard": [[{ "text": "📩 پیام به ادمین", "url": "tg://user?id=YOUR_ADMIN_ID" }]] };
        sendMessage(chat_id, "🤝 برای شرایط همکاری به ادمین پیام دهید:", null, adminBtn);
      }
      else if (text == "📢 کانال و پشتیبانی") {
        var chanBtn = { 
          "inline_keyboard": [
            [{ "text": "🚀 عضویت در کانال", "url": channelLink }],
            [{ "text": "📩 پیام به پشتیبانی", "url": "tg://user?id=YOUR_ADMIN_ID" }]
          ] 
        };
        sendMessage(chat_id, "🚀 کانال رسمی و پشتیبانی ویژن وی پی ان:", null, chanBtn);
      }

      // ۶. دریافت فیش و ارسال به ادمین
      else if (contents.message.photo) {
        var fid = contents.message.photo[contents.message.photo.length - 1].file_id;
        var selectedPlan = PropertiesService.getScriptProperties().getProperty('last_plan_' + chat_id) || "نامشخص";
        
        sendToAdmin(fid, chat_id, selectedPlan);
        sendMessage(chat_id, "✅ *فیش دریافت شد.*\n🔍 ادمین در حال بررسی است. لایسنس شما به زودی ارسال می‌شود.");
      }
    } 
    
    // ۷. پنل تایید/رد توسط ادمین
    else if (contents.callback_query) {
      var data = contents.callback_query.data;
      var admin_chat_id = contents.callback_query.message.chat.id;

      if (data.startsWith("order_")) {
        var plan = data.replace("order_", "");
        var user_id = contents.callback_query.message.chat.id;
        PropertiesService.getScriptProperties().setProperty('last_plan_' + user_id, plan);
        
        var payInfo = "💳 *اطلاعات واریز پلن " + plan + "*\n\nپزویز پزویزیان*\n3555887544678754`\n\n👇 پس از واریز، عکس فیش را بفرستید.";
        sendMessage(user_id, payInfo);
      } 
      
      else if (data.startsWith("approve_")) {
        var parts = data.split("_");
        var uid = parts[1];
        var planName = parts[2];
        
        var conf = processSale(uid, planName);
        if (conf) {
          sendMessage(uid, "🎉 *پرداخت تایید شد!*\n\n🎁 کانفیگ اختصاصی شما:\n\n`" + conf + "`");
          sendMessage(admin_chat_id, "✅ تایید شد و کد برای کاربر ارسال گردید.");
        } else {
          sendMessage(admin_chat_id, "❌ خطا: موجودی " + planName + " در شیت Stock تمام شده!");
        }
      }

      else if (data.startsWith("reject_")) {
        var uid = data.split("_")[1];
        sendMessage(uid, "❌ *پرداخت شما رد شد.*\nفیش نامعتبر است یا مبلغ اشتباه است.");
        sendMessage(admin_chat_id, "🚫 پرداخت رد شد.");
      }
    }
  } catch (err) {
    sendMessage(adminId, "⚠️ خطا: " + err.toString());
  }
}

// ۸. تابع پردازش فروش (هماهنگ با جدول ۴ ستونه شما)
function processSale(userId, plan) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var stock = ss.getSheets().find(s => s.getName().trim().toLowerCase() === "stock");
  var sales = ss.getSheets().find(s => s.getName().trim().toLowerCase() === "sales");
  if (!stock || !sales) return null;

  var rows = stock.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    var cellValue = String(rows[i][1]).trim().toUpperCase(); // پلن در ستون B
    var status = String(rows[i][3]).trim(); // وضعیت در ستون D
    
    if (cellValue === plan.toUpperCase() && status === "") {
      var config = rows[i][2]; // کد در ستون C
      stock.getRange(i + 1, 4).setValue("Sold"); 
      sales.appendRow([userId, plan, config, new Date()]);
      return config;
    }
  }
  return null;
}

// ۹. توابع کمکی
function getHistory(uid) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sales = ss.getSheets().find(s => s.getName().trim().toLowerCase() === "sales");
  if (!sales) return null;
  var data = sales.getDataRange().getValues();
  var out = "";
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == uid) {
      out += "📦 پلن: " + data[i][1] + "\n🔑 کد: `" + data[i][2] + "`\n──────────────\n";
    }
  }
  return out || null;
}

function sendMessage(id, txt, kb, ikb) {
  var payload = { "chat_id": id, "text": txt, "parse_mode": "Markdown", "reply_markup": kb || ikb };
  UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/sendMessage", { "method": "post", "contentType": "application/json", "payload": JSON.stringify(payload) });
}

function sendToAdmin(fid, uid, plan) {
  var payload = { 
    "chat_id": adminId, "photo": fid, 
    "caption": "💰 فیش جدید\n👤 کاربر: " + uid + "\n💎 پلن: " + plan, 
    "reply_markup": { "inline_keyboard": [[
          { "text": "✅ تایید", "callback_data": "approve_" + uid + "_" + plan },
          { "text": "❌ رد", "callback_data": "reject_" + uid }
    ]] } 
  };
  UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/sendPhoto", { "method": "post", "contentType": "application/json", "payload": JSON.stringify(payload) });
}