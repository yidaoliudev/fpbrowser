<p align="center">
  <img src="assets/logo.png">
</p>

## <p align="center"><b><a href="README.md">English</a> | <a href="README_CN.md">简体中文</a></b></p>

# Introduction

The Fingerprint Browser (fpbrowser) is a fingerprint browser based on [Chromium](https://dev.chromium.org) , supporting Windows 7 and above operating systems, with plans to support Mac, Android, Linux, and other systems in the future.

## What is a Browser Fingerprint?

Websites use parameters such as IP address, operating system (like Windows or macOS), screen resolution, installed fonts, geographical location, time zone, etc. These seemingly insignificant pieces of information, when combined, create a unique browser fingerprint. Some characteristics of browser fingerprints include:

- They can remain consistent across different modes, such as incognito and regular modes.
- Some fingerprints remain consistent across different versions of the same browser.
- They may even remain consistent across different browsers.

Due to the uniqueness of fingerprints, websites can identify a specific visitor. All major e-commerce platforms (Amazon, Shopee, Taobao), social websites (Facebook, Instagram), and others use fingerprint technology to track users. One study shows that 60% of websites use canvas fingerprinting to track users.

E-commerce sites and social platforms usually prefer their users to be real, as they do not want a single person to control multiple accounts, in order to prevent fraud, abuse, and so on. However, in practice, especially for business needs, it is often necessary for a team or company to operate multiple accounts. So, how can this fingerprint tracking issue be solved for such users?

## Solutions Provided by the Fingerprint Browser

The Fingerprint Browser creates a secure, independent fingerprint environment, essentially providing a unique fingerprint environment in a secure container. Cookies, cache files, local storage, etc., in each fingerprint environment are fully isolated. There is no information leakage between different browser profiles. This ensures the prevention of account linkage across multiple platforms, and real-time online fingerprint environment detection improves the security and efficiency of bulk management.

## Core Technology of Fingerprint Browser

- Data Encryption: Including local storage and fingerprint data storage, all data is encrypted to ensure 100% data security.
- Batch Environment Creation: Supports multi-platform account management, with automatic account and password filling.
- Over 800 Code Point Modifications: Achieves more than 20 customizable parameters for a true browser fingerprint.
- High-quality Detection: The fingerprint environment provided passes the quality tests of detection platforms.
- Optimization: Extreme optimization is done in local data storage and environment startup. For scenarios requiring large-scale environments and high concurrency in automated crawlers, our system is more storage-friendly and efficient. Compared to Adspower, our local storage requirements are reduced by 20-40%, and compared to Bit Browser, our environment startup speed is improved by 30%-50%.
- Continuous Kernel Upgrades: Through research on competitors, we constantly upgrade our core features. For example, our kernel supports special abilities like font sideloading (using downloaded fonts without installing them on the system), font fallback (resolving fake font loading issues that cause web page crashes), random pressure detection in Android emulation (providing real machine-like pressure sensor values), constructing differences in JavaScript execution environments between PC and Android emulators (making the emulator environment more like a real device), and fingerprint modification without breaking Chrome’s security mechanisms. We provide a complete sandbox environment (many fingerprint browsers remove the sandbox, exposing more security risks), and support for anti-debugging on websites (enabling debugging on any site), among others.
  These are our core technologies.

The product is mainly divided into 8 modules: Environment Management, Proxy Management, Application Center (browser plugins), RPA Management (no-code automation), API Management (programming interface), User System (team management module), Payment and Subscription (cost management module), and Marketing Support (promotion and reward module).

# Preparation

First, download the latest fpBrowser installation package from the release page or [official website](https://www.fpbrowser.com/) and install it on your computer.

## Creating a new browser environment

1. Open fpBrowser and select Create Browser.
2. Modify the configuration information in the pop-up dialog or use the default settings.

## Starting the browser environment

1. Click the Start button in the created environment to open the newly created browser environment.
2. The newly started browser is the new fingerprint environment.

# Tested and Effective Fingerprint Modifications

You can test fingerprint modifications using [fingerprintjs](https://fingerprintjs.github.io/fingerprintjs/) and [browserleaks](https://browserleaks.com/).

- Operating System: Modify the operating system part in `userAgent`.
- Browser version: Modify the browser version in `userAgent`.
- Proxy settings: Modify the browser proxy which supports "Default", "Do not use proxy", "Custom".
- User Agent: Modify `userAgent`.
- Language: Modify `navigator.language`, `navigator.languages`, and it can be automatically matched based on IP.
- Time zone: Modify the time zone in `new Date()`, and it can be automatically matched based on IP.
- WebRTC
- Geolocation: Modify the latitude and longitude in `navigator.geolocation.getCurrentPosition()`, and it can be automatically matched based on IP.
- Resolution: Modify `screen.width`/`screen.height`.
- Font: modify the supported font list.
- Canvas: modify Canvas 2D drawing differential pixels.
- WebGL image: modify WebGL drawing differential pixels.
- WebGL metadata: WebGL vendor, WebGL rendering, etc.
- AudioContext: modify the differential data of `getChannelData` and `getFloatFrequencyData` in AudioContext.
- ClientRects
- Speech voices
- CPU: Modify `navigator.hardwareConcurrency` CPU core count.
- Memory
- Device name
- MAC address
- Do Not Track
- Port scan protection
- Hardware acceleration

# Automation

fpBrowser is base on Chromium, you can use playwright or other tools.
If you need automation engineering code, please contact us.
At the same time, it supports RPA (automa) and develops execution plans.

# Support and Joining

fpBrowser is not perfect yet. If you are interested in fpBrowser, you are welcome to join us through the following ways:

1. Directly contribute code, provide features, and fix bugs.
2. Install fpBrowser, visit your frequently used websites, and provide feedback on unusable situations to help solve compatibility issues.
3. Provide experience, functional suggestions to help improve fpBrowser.

# Disclaimer

The purpose of this disclaimer is to explicitly clarify that the fpBrowser project is for technology exchange, learning, and research purposes and that the technology of this project should not be used for any illicit purposes or destructive behaviors. The author is not responsible for any damage caused to others or systems by the use of this project.
When using this project, you must be clear and promise not to utilize this technology to carry out illegal activities, infringe upon the rights of others, or attack systems. Any accidents, losses, or damages resulting from the use of the technologies in this project, including but not limited to data loss, property loss, legal liabilities, etc., are not related to the author of this project.
The technical information provided in this text is for learning and reference purposes only and does not constitute any form of warranty or guarantee. The author of this project makes no representations or warranties as to the accuracy, validity, or applicability of the technology.

# Contact Us

- email: [fpbrowser@163.com ](mailto:fpbrowser@163.com)
- Official website: [https://www.fpbrowser.com](https://www.fpbrowser.com)
- QQ group: `209256761`

# Acknowledgments

1. [fingerprintjs](https://fingerprintjs.github.io/fingerprintjs/)
2. [browserleaks](https://browserleaks.com/)
3. [Chromium](https://dev.chromium.org)
4. [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
