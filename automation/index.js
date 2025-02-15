const { chromium } = require('playwright')

;(async () => {
  // worker-id 需要先手动创建
  const workerId = 1

  const browser = await chromium.launchPersistentContext(
    `${process.env.localappdata}\\fpbrowser\\Workers\\${workerId}`,
    {
      // 配置fpbrowser安装路径
      executablePath: 'D:\\fpbrowser\\Chrome-bin\\fpbrowser.exe',
      args: [`--worker-id=${workerId}`],
      headless: false,
      defaultViewport: null
    }
  )

  const page = await browser.newPage()
  await page.goto('http://example.com')
  // other actions...
  // await browser.close()
})()
