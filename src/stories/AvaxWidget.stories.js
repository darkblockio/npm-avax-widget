import Web3 from "web3"
import React, { useEffect, useState } from "react"
import { storiesOf } from "@storybook/react"
import AvalancheDarkblockWidget from "../lib/AvaxWidget"

const stories = storiesOf("Avalanche Darkblock Widget", module)

stories.add("Viewer", () => {
  const cb = (param1) => {
    console.log(param1)
  }

  const Widget = () => {
    const [web3, setWeb3] = useState(null)
    const contractAddress = "0x7bdc01a74dd59759c3965eb11fd086e225a37563"
    const token_id = "1"
    const [loaded, setLoaded] = useState(false)

    const dbConfigOptions = {
      include: [],
      exclude: [],
      sort: [],
    }

    useEffect(() => {
      if (window.ethereum) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            let w3 = new Web3(ethereum)
            setWeb3(w3)
            setLoaded(true)
          })
          .catch((err) => {
            console.log(err)
            setWeb3(null)
            setLoaded(true)
          })
      } else {
        setWeb3(null)
        setLoaded(true)
      }
    }, [])

    return (
      <div style={{ maxWidth: "700px" }}>
        {loaded && (
          <AvalancheDarkblockWidget
            contractAddress={contractAddress}
            tokenId={token_id}
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
            dev={false}
            dbConfig={dbConfigOptions}
          />
        )}
      </div>
    )
  }

  return <Widget />
})
