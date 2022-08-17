# Darkblock.io React Avalanche Widget

## Getting Started 🚀

Install Darkblock's React Avalanche Widget using `yarn` or `npm`

```
yarn add @darkblock.io/avax-widget
```

```
npm i @darkblock.io/avax-widget --save
```

Once the library is installed, import or require components into your codebase, i.e:

```
import "@darkblock.io/avax-widget"

require("@darkblock.io/avax-widget")
```

## Ethereum Widget Component

### Input

- **contractAddress:** contractAddress
- **tokenId:** id of the NFT in Ethereum
- **w3:\*** web3 object
- **cb:** callback function to be triggered on the widget's state change (optional)
- **config:** config object (optional)

**cb** function example, the callback function will have the widget's state passed as a parameter:

```
const cb = (param) => {
  console.log(param)
}
```

**config** object's default value:

```
{
  customCssClass: "",             // pass here a class name you plan to use
  debug: false,                   // debug flag to console.log some variables
  imgViewer: {                    // image viewer control parameters
    showRotationControl: true,
    autoHideControls: true,
    controlsFadeDelay: true,
  },
}
```

### Example

```
import { AvalancheDarkblockWidget } from "@darkblock.io/avax-widget"

const Widget = () => {
  ...

  const contractAddress = 'nft contract address'
  const tokenId = 'nft token id'
  
  return (
    <AvalancheDarkblockWidget
      contractAddress={contractAddress}
      tokenId={tokenId
      w3={web3}
      cb={(p) => console.log(p)}
      config={config}
    />
  )
}

export default Widget

```

### Example

```
import { AvalancheUpgradeWidget } from "@darkblock.io/avax-widget"

const Widget = () => {
  const apiKey = '** contact darkblock for apikey **'
  const contractAddress = 'nft contract address'
  const tokenId = 'nft token id'

  return (
    <AvalancheUpgradeWidget
      apiKey={apiKey} 
      contractAddress={contractAddress}
      tokenId={tokenId
      w3={web3}
      cb={(p) => console.log(p)}
      config={config}
    />
  )
}

export default Widget

```
