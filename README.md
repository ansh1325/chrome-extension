# Lead Collector

A simple and efficient Chrome Extension designed to help you organize and manage your links (leads) effortlessly. Whether you're researching, shopping, or just browsing, this tool makes it easy to save and keep track of important URLs directly from your browser.

---

## 🚀 Features

* **Save Manual Input**: Type or paste any link/text into the field and save it to your list instantly.
* **One-Click Tab Save**: Instantly grab the URL of your currently active tab without leaving the page.
* **Persistent Storage**: Built using `localStorage`, so your leads remain saved even after closing the tab or restarting your browser.
* **Copy to Clipboard**: A dedicated feature to export your collected leads for use in other documents or tools.
* **Safe Reset**: Clear your entire list with a "Delete All" action (triggered by a double-click to prevent accidental data loss).
* **Manifest V3**: Developed using the latest Chrome Extension standards for better performance and security.

## 🛠️ Tech Stack

* **HTML5 & CSS3**: For a clean and responsive popup interface.
* **JavaScript (ES6)**: Handles the core logic, DOM manipulation, and data persistence.
* **Chrome Tabs API**: Utilized to interact with browser windows and retrieve active tab URLs.

## 📦 Installation

To run this extension locally in your browser:

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/ansh1325/chrome-extension.git](https://github.com/ansh1325/chrome-extension.git)
    ```
2.  **Open Chrome Extensions**:
    Navigate to `chrome://extensions/` in your browser.
3.  **Enable Developer Mode**:
    Toggle the **Developer mode** switch in the top-right corner.
4.  **Load the Extension**:
    Click **Load unpacked** and select the folder where you cloned the repository.

## 💡 How to Use

* **To Save a Link**: Enter the text into the input field and click **SAVE INPUT**.
* **To Save Current Page**: Simply click **SAVE TAB** to grab the URL you are currently visiting.
* **To Export**: Click **COPY TO CLIPBOARD** to copy your entire list of leads.
* **To Reset**: **Double-click** the **DELETE ALL** button to wipe your list and start fresh.

---
Created by **Ansh**. Feel free to explore the code and reach out with any feedback!
