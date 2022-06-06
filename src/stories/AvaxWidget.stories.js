import Web3 from "web3"
import React, { useEffect, useState } from "react"
import { storiesOf } from "@storybook/react"
import AvalancheDarkblockWidget from "../lib/AvaxWidget"

const stories = storiesOf("Avalanche Darkblock Widget", module)

stories.add("test", () => {
  const cb = (param1) => {
    console.log(param1)
  }

  const Widget = () => {
    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)

    useEffect(() => {
      window.ethereum
        ? ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts) => {
              setAddress(accounts[0])
              let w3 = new Web3(ethereum)
              setWeb3(w3)
            })
            .catch((err) => console.log(err))
        : console.log("Please install MetaMask")
    }, [])
    return (
      <div style={{ maxWidth: "700px" }}>
        <AvalancheDarkblockWidget
          // contractAddress="0xfd48de401e23f619a25a0edcf6d249216860fbe6"
          // tokenId="30553606573219150352991292921105176340809048341686170040023897679188805550081"
          contractAddress="0xda2ec25b733fa79af72277b920639bbb30716164"
          tokenId="23"
          w3={web3}
          cb={cb}
          config={{
            customCssClass: "custom-class",
            debug: true,
            imgViewer: {
              showRotationControl: true,
              autoHideControls: true,
              controlsFadeDelay: true,
            },
          }}
        />
      </div>
    )
  }

  return <Widget />
})
