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
    const contractAddress = "0xfd48de401e23f619a25a0edcf6d249216860fbe6"
    const token_id = "2244"

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
        <strong>Testing With: </strong>
        <hr/>
        <div>
          Contract address: {contractAddress}
          <br/>
          Token_id: {token_id}
        </div>

        <AvalancheDarkblockWidget
          contractAddress= {contractAddress}
          tokenId= {token_id}
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
