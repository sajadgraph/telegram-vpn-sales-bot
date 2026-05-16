# Telegram VPN Sales Bot

## 🇺🇸 English

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

The user opens the Telegram bot and sees the main menu.

---

## Step 2 — User Selects A Service

The user clicks:

* Buy Service
  or
* Pricing

The bot displays available plans and prices.

---

## Step 3 — Payment

The user transfers payment and sends the payment receipt image to the bot.

---

## Step 4 — Admin Verification

The payment receipt is automatically forwarded to the admin.

The admin has 2 buttons:

* Approve
* Reject

---

## Step 5 — Config Delivery

If the admin approves the payment:

The bot automatically:

1. Reads available configs from the Stock sheet
2. Finds the selected service
3. Delivers the config/subscription link to the user
4. Marks the config as SOLD
5. Saves the sale into the Sales sheet

---

## Step 6 — Reject Payment

If the admin rejects the payment:
The user receives a rejection message automatically.

---

# 📋 Stock Sheet Structure

The Stock sheet should contain:

| Column | Description                |
| ------ | -------------------------- |
| A      | Optional ID                |
| B      | Plan Name                  |
| C      | Config / Subscription Link |
| D      | Status                     |

Example:

| ID | PLAN | CONFIG        | STATUS |
| -- | ---- | ------------- | ------ |
| 1  | 1GB  | vmess://xxxxx |        |
| 2  | 2GB  | vless://xxxxx | Sold   |

When a config is sold:

* Status becomes `Sold`

---

# 🤖 Bot Menu Buttons

## 👤 My Service

Shows purchased services for the user.

---

## 🛒 Buy Service

Displays plans and pricing.
The user can select and purchase a service.

---

## 📊 Pricing

Displays all available plans and prices.

---

## 📚 Connection Tutorial

Shows connection/setup instructions.

---

## 📢 Support Channel

Displays the Telegram support channel link.

---

## 🤝 Partnership Sales

Shows the admin/support contact ID.

---

# 🚀 Deployment Guide

## 1. Create Telegram Bot

Create your bot using Telegram BotFather.

---

## 2. Create Google Apps Script

Go to:
[https://script.google.com](https://script.google.com)

Create a new project and paste the code.

---

## 3. Create Google Sheets Database

Create a spreadsheet with:

* Stock sheet
* Sales sheet

---

## 4. Deploy As Web App

Deploy the script as:

* Web App
* Anyone can access

Copy the Web App URL.

---

## 5. Set Telegram Webhook

```bash
https://api.telegram.org/botYOUR_TOKEN/setWebhook?url=YOUR_WEBAPP_URL
```


---

# 🇮🇷 فارسی

ربات فروش VPN تلگرام با استفاده از Google Apps Script و Telegram Bot API ساخته شده است.

این پروژه به شما اجازه می‌دهد یک سیستم فروش خودکار VPN داشته باشید بدون نیاز به:

* سرور مجازی
* هاست
* دیتابیس پولی
* هزینه ماهانه

تمام پروژه به صورت رایگان اجرا می‌شود با استفاده از:

* گوگل اپ اسکریپت
* گوگل شیت
* API تلگرام

---

# ✨ امکانات

* فروش خودکار VPN
* اتصال به Google Sheets
* تایید فیش توسط ادمین
* ارسال خودکار کانفیگ
* ذخیره فروش‌ها
* بدون نیاز به هاست
* مناسب افراد مبتدی
* سبک و سریع

---

# 🗂 سیستم دیتابیس

این ربات از Google Sheets به عنوان دیتابیس استفاده می‌کند.

فایل گوگل شیت شامل دو شیت است:

## 1. Stock

شیت موجودی سرویس‌ها

داخل این شیت می‌توانید قرار دهید:

* ساب لینک
* کانفیگ
* اطلاعات دسترسی

ربات به صورت خودکار اطلاعات این بخش را می‌خواند.

---

## 2. Sales

شیت فروش‌ها

بعد از تایید خرید:

* آیدی کاربر
* پلن خریداری شده
* کانفیگ ارسال شده
* زمان خرید

داخل این شیت ذخیره می‌شود.

---

# ⚙️ نحوه عملکرد ربات

## مرحله 1

کاربر ربات را استارت می‌کند.

---

## مرحله 2

کاربر روی:

* خرید سرویس
  یا
* تعرفه‌ها

کلیک می‌کند.

ربات لیست سرویس‌ها و قیمت‌ها را نمایش می‌دهد.

---

## مرحله 3

کاربر پرداخت را انجام می‌دهد و تصویر فیش را ارسال می‌کند.

---

## مرحله 4

فیش به صورت خودکار برای ادمین ارسال می‌شود.

ادمین دارای دو دکمه است:

* تایید
* رد

---

## مرحله 5

اگر ادمین پرداخت را تایید کند:

ربات:

1. موجودی مناسب را از شیت Stock پیدا می‌کند
2. سرویس انتخابی را بررسی می‌کند
3. کانفیگ یا ساب لینک را برای کاربر ارسال می‌کند
4. وضعیت آن کانفیگ را Sold می‌کند
5. اطلاعات فروش را داخل شیت Sales ذخیره می‌کند

---

## مرحله 6

اگر ادمین پرداخت را رد کند:
ربات به صورت خودکار پیام عدم تایید را برای کاربر ارسال می‌کند.

---

# 📋 ساختار شیت Stock

| ستون | توضیح              |
| ---- | ------------------ |
| A    | شناسه              |
| B    | نام پلن            |
| C    | کانفیگ یا ساب لینک |
| D    | وضعیت              |

نمونه:

| ID | PLAN | CONFIG        | STATUS |
| -- | ---- | ------------- | ------ |
| 1  | 1GB  | vmess://xxxxx |        |
| 2  | 2GB  | vless://xxxxx | Sold   |

---

# 🤖 دکمه‌های ربات

## 👤 سرویس من

نمایش سرویس‌های خریداری شده کاربر

---

## 🛒 خرید سرویس

نمایش سرویس‌ها و قیمت‌ها

---

## 📊 تعرفه‌ها

نمایش تمامی پلن‌ها و قیمت‌ها

---

## 📚 آموزش اتصال

نمایش متن آموزش اتصال

---

## 📢 کانال پشتیبانی

نمایش لینک کانال پشتیبانی

---

## 🤝 فروش همکاری

نمایش آیدی ادمین فروش

---

# 🚀 آموزش راه‌اندازی

## 1

ساخت ربات در BotFather

---

## 2

ساخت پروژه Google Apps Script

---

## 3

ساخت فایل Google Sheets شامل:

* Stock
* Sales

---

## 4

دیپلوی به صورت Web App

---

## 5

تنظیم Webhook تلگرام

```bash
https://api.telegram.org/botYOUR_TOKEN/setWebhook?url=YOUR_WEBAPP_URL
```
