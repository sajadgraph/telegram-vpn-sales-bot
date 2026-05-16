<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00c6ff,100:0072ff&height=180&section=header&text=Telegram%20VPN%20Sales%20Bot&fontSize=35&fontColor=ffffff" />
</p>

<p align="center">
🚀 Automated VPN Sales Bot • Google Apps Script • Google Sheets • Telegram Bot API
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Telegram%20Bot-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"/>
  <img src="https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white"/>
</p>

---

# Telegram VPN Sales Bot

[🇺🇸 English](#english) | [🇮🇷 فارسی](#فارسی)

---

# 🇺🇸 English

A powerful Telegram VPN sales bot built with Google Apps Script and Telegram Bot API.

This project allows you to create a fully automated VPN sales system without needing:

* VPS
* Dedicated Server
* Web Hosting
* Paid Database

Everything runs completely FREE using:

* Google Apps Script
* Google Sheets
* Telegram Bot API

---

# ✨ Features

* Fully automated VPN sales
* Google Sheets database system
* Admin payment verification
* Instant config delivery
* Subscription/config management
* No hosting required
* Easy setup for beginners
* Lightweight and fast

---

# 🗂 Database System

This bot uses a Google Sheets file as the database.

The spreadsheet contains 2 sheets:

## 1. Stock

This sheet contains available VPN configs/subscription links.

You can store:

* Subscription links
* Config codes
* Any custom access data

The bot automatically reads available configs from this sheet.

---

## 2. Sales

This sheet stores sold services.

When a purchase is completed:

* User ID
* Purchased plan
* Delivered config
* Purchase time

will automatically be saved into the Sales sheet.

---

# ⚙️ How It Works

## Step 1 — User Starts The Bot
User opens Telegram bot and sees menu.

## Step 2 — User Selects Service
Chooses:
* Buy Service
* Pricing

## Step 3 — Payment
User sends payment receipt.

## Step 4 — Admin Verification
Admin receives receipt with:
* Approve
* Reject buttons

## Step 5 — Config Delivery
If approved:
1. Read Stock sheet
2. Find plan
3. Send config
4. Mark Sold
5. Save to Sales

## Step 6 — Reject Payment
User gets rejection message.

---

# 📋 Stock Sheet Structure

| Column | Description |
|---|---|
| A | Optional ID |
| B | Plan Name |
| C | Config / Subscription Link |
| D | Status |

Example:

| ID | PLAN | CONFIG | STATUS |
|---|---|---|---|
| 1 | 1GB | vmess://xxxxx | |
| 2 | 2GB | vless://xxxxx | Sold |

---

# 🤖 Bot Menu

* 👤 My Service
* 🛒 Buy Service
* 📊 Pricing
* 📚 Connection Tutorial
* 📢 Support Channel
* 🤝 Partnership Sales

---

# 🚀 Deployment

## 1. Create Bot
Using BotFather

## 2. Create Apps Script
https://script.google.com

## 3. Create Google Sheet
Sheets:
* Stock
* Sales

## 4. Deploy Web App
Anyone can access

## 5. Set Webhook

```bash
https://api.telegram.org/botYOUR_TOKEN/setWebhook?url=YOUR_WEBAPP_URL
💖 Support This Project

If you like this project, support development:

💰 USDT (TRC20 - TRON)

TGvTDSi9iHCk6NuoDSdbQ2J4cJB1oL5q8F

⚡️ TRX (TRON)

TGvTDSi9iHCk6NuoDSdbQ2J4cJB1oL5q8F

<p align="center"> <a href="https://nowpayments.io/donation?api_key=8db79c71-5bf2-4baf-82c2-8b5854afb806"> <img width="220" src="https://nowpayments.io/images/embeds/donation-button-white.svg" /> </a> </p>

🙏 Thank you for your support!

🇮🇷 فارسی

ربات فروش VPN تلگرام با Google Apps Script و Telegram Bot API ساخته شده است.

این پروژه یک سیستم فروش کاملاً خودکار VPN ارائه می‌دهد بدون نیاز به:

سرور مجازی
هاست
دیتابیس پولی
هزینه ماهانه
✨ امکانات
فروش خودکار VPN
اتصال به Google Sheets
تایید پرداخت توسط ادمین
ارسال خودکار کانفیگ
بدون نیاز به سرور
مناسب مبتدی‌ها
سبک و سریع
🗂 دیتابیس

شامل دو شیت:

1. Stock
ساب لینک
کانفیگ
اطلاعات دسترسی
2. Sales
آیدی کاربر
پلن خرید
کانفیگ
زمان خرید
⚙️ نحوه عملکرد
شروع ربات
انتخاب سرویس
پرداخت
تایید ادمین
ارسال کانفیگ
💖 حمایت
💰 تتر (TRC20)

TGvTDSi9iHCk6NuoDSdbQ2J4cJB1oL5q8F

⚡️ ترون

TGvTDSi9iHCk6NuoDSdbQ2J4cJB1oL5q8F

<p align="center"> <a href="https://nowpayments.io/donation?api_key=8db79c71-5bf2-4baf-82c2-8b5854afb806"> <img width="220" src="https://nowpayments.io/images/embeds/donation-button-white.svg" /> </a> </p>

🙏 از حمایت شما متشکریم
