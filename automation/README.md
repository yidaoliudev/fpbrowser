# fpbrowser - automation

## Project setup

```
npm install
```

### Start automation

```
npm test
```

### Demo Code (nodejs playwright)

```javascript
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
```
