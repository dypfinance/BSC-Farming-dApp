import React from 'react';

import { Route } from 'react-router-dom'

import initStaking from './components/staking'
import initBuybackStaking from './components/buy-back-staking'
import initVesting from './components/vesting'
import initVestingStaking from "./components/vesting-staking"

// import initConstantStaking from './components/constant-staking'
import initConstantStaking from './components/constant-staking-new-front'
import initBuybackStakingNew from './components/buy-back-staking-new'

import initBuybackStakingNewFront from './components/buy-back-staking-new-front'

import initStakingNew from './components/staking-new'

// import initConstantStakingDai from './components/constant-staking-dai'
import initConstantStakingDai from './components/constant-staking-dai-front'

import initStakingNew_front from './components/staking-new-front'

// import initConstantStakingiDYP from './components/constant-staking-idyp'

import initConstantStakingDYP from './components/constant-staking-new-front-v1'

import initConstantStakingiDYP from './components/constant-staking-idyp-new-front'

import StakingList from './components/staking-list'
import StakingListEth from './components/staking-list-eth.js'
import StakingListWbtc from './components/staking-list-wbtc.js'
import StakingListUsdc from './components/staking-list-usdc.js'

import StakingStats from './components/staking-stats'
import FullStakingStats from './components/full-staking-stats'
import Header from './components/header'
import Footer from './components/footer'

import getFormattedNumber from './functions/get-formatted-number';
import setupnetwork from './functions/setupnetwork';

import WalletConnectProvider from "@walletconnect/web3-provider";
import Modal from "./components/modal";

//const eth_address = 'ETH'
const wbtc_address = 'BNB'
const usdc_address = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const wbnb_address = '0x2170Ed0880ac9A755fd29B2688956BD959F933F8'

const { rebase_factors } = window

const BuybackStaking = initBuybackStaking({ staking: window.buyback_staking, apr: 100, expiration_time: '1 December 2021' })

const Staking3 = initStaking({token: window.token, staking: window.staking, liquidity: wbnb_address, lp_symbol:'DYP/ETH', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '2 October 2021'})
const Staking30 = initStaking({token: window.token_dyp_30, staking: window.staking_dyp_30, liquidity: wbnb_address, lp_symbol:'DYP/ETH', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[1], expiration_time: '2 October 2021'})
const Staking60 = initStaking({token: window.token_dyp_60, staking: window.staking_dyp_60, liquidity: wbnb_address, lp_symbol:'DYP/ETH', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[2], expiration_time: '2 October 2021'})
const Staking90 = initStaking({token: window.token_dyp_90, staking: window.staking_dyp_90, liquidity: wbnb_address, lp_symbol:'DYP/ETH', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[3], expiration_time: '2 October 2021'})

const StakingWbtc3 = initStaking({token: window.token_wbtc_3, staking: window.staking_wbtc_3, liquidity: wbtc_address, lp_symbol:'DYP/BNB', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[4], expiration_time: '2 October 2021'})
const StakingWbtc30 = initStaking({token: window.token_wbtc_30, staking: window.staking_wbtc_30, liquidity: wbtc_address, lp_symbol:'DYP/BNB', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[5], expiration_time: '2 October 2021'})
const StakingWbtc60 = initStaking({token: window.token_wbtc_60, staking: window.staking_wbtc_60, liquidity: wbtc_address, lp_symbol:'DYP/BNB', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[6], expiration_time: '2 October 2021'})
const StakingWbtc90 = initStaking({token: window.token_wbtc_90, staking: window.staking_wbtc_90, liquidity: wbtc_address, lp_symbol:'DYP/BNB', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[7], expiration_time: '2 October 2021'})

const StakingUsdc3 = initStaking({token: window.token_usdc_3, staking: window.staking_usdc_3, liquidity: usdc_address, lp_symbol:'DYP/BUSD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[8], expiration_time: '2 October 2021'})
const StakingUsdc30 = initStaking({token: window.token_usdc_30, staking: window.staking_usdc_30, liquidity: usdc_address, lp_symbol:'DYP/BUSD', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[9], expiration_time: '2 October 2021'})
const StakingUsdc60 = initStaking({token: window.token_usdc_60, staking: window.staking_usdc_60, liquidity: usdc_address, lp_symbol:'DYP/BUSD', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[10], expiration_time: '2 October 2021'})
const StakingUsdc90 = initStaking({token: window.token_usdc_90, staking: window.staking_usdc_90, liquidity: usdc_address, lp_symbol:'DYP/BUSD', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[11], expiration_time: '2 October 2021'})


//Vesting & staking 3 month
const eth_address = 'ETH'
const bnb_address = 'BNB'
const Vesting = initVesting({ staking: window.constant_stakingvesting_30, buyers: true, apr: 0, liquidity: eth_address, expiration_time: '16 February 2022' })
const VestingStaking = initVestingStaking({ staking: window.constant_staking_60, apr: 0, liquidity: eth_address, expiration_time: '16 February 2022' })
const VestingAirdrop = initVesting({ staking: window.constant_staking_90, buyers: false, apr: 0, liquidity: eth_address, expiration_time: '23 November 2022' })
const VestingStakingAirdrop = initVestingStaking({ staking: window.constant_staking_120, apr: 0, liquidity: eth_address, expiration_time: '23 November 2022' })

//Constant Staking New
const ConstantStaking30 = initConstantStaking({ staking: window.constant_staking_new1, apr: 25, liquidity: bnb_address, expiration_time: '17 November 2022', fee: 0.25 })
const ConstantStaking90 = initConstantStaking({ staking: window.constant_staking_new2, apr: 50, liquidity: bnb_address, expiration_time: '17 November 2022', fee: 0.5 })

//Constant Staking NEW DYP -> DAI
const ConstantStakingDai = initConstantStakingDai({ staking: window.constant_stakingdai, apr: 25, liquidity: bnb_address, expiration_time: 'Expired', other_info: true })

//Constant Staking NEW DYP -> DYP
const ConstantStakingDYP = initConstantStakingDYP({ staking: window.constant_staking_new10, apr: 30, liquidity: bnb_address, expiration_time: '14 July 2023', other_info: false, fee: 3.5 })
const ConstantStakingDYP10APR = initConstantStakingDYP({ staking: window.constant_staking_new11, apr: 10, liquidity: bnb_address, expiration_time: '5 August 2023', other_info: false, fee: 1 })

//Buyback New
const BuybackStaking1 = initBuybackStakingNewFront({ staking: window.buyback_staking1_1, constant: window.constant_staking_new3, apr: 30, expiration_time: '17 November 2022', fee: 1 })
const BuybackStaking2 = initBuybackStakingNewFront({ staking: window.buyback_staking1_2, constant: window.constant_staking_new4, apr: 100, expiration_time: '17 November 2022', fee: 3.5 })


const BuybackStaking2_front = initBuybackStakingNewFront({ staking: window.buyback_staking1_2, constant: window.constant_staking_new4, apr: 100, expiration_time: '17 November 2022' })

//Farming New
const StakingNew1 = initStakingNew_front({token: window.token_new, staking: window.farming_new_1, constant: window.constant_staking_new5, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022', fee: 0.3})
const StakingNew2 = initStakingNew_front({token: window.token_new, staking: window.farming_new_2, constant: window.constant_staking_new6, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022', fee: 0.3})
const StakingNew3 = initStakingNew_front({token: window.token_new, staking: window.farming_new_3, constant: window.constant_staking_new7, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022', fee: 0.4})
const StakingNew4 = initStakingNew_front({token: window.token_new, staking: window.farming_new_4, constant: window.constant_staking_new8, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022', fee: 0.8})
const StakingNew5 = initStakingNew_front({token: window.token_new, staking: window.farming_new_5, constant: window.constant_staking_new9, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022', fee: 1.2})

const StakingNew5_front = initStakingNew_front({token: window.token_new, staking: window.farming_new_5, constant: window.constant_staking_new9, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022'})


//Farming New Error
const StakingNewError1 = initStakingNew({token: window.token_new, staking: window.farming_error_1, constant: window.constant_staking_new5, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022'})
const StakingNewError2 = initStakingNew({token: window.token_new, staking: window.farming_error_2, constant: window.constant_staking_new6, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022'})
const StakingNewError3 = initStakingNew({token: window.token_new, staking: window.farming_error_3, constant: window.constant_staking_new7, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022'})
const StakingNewError4 = initStakingNew({token: window.token_new, staking: window.farming_error_4, constant: window.constant_staking_new8, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022'})
const StakingNewError5 = initStakingNew({token: window.token_new, staking: window.farming_error_5, constant: window.constant_staking_new9, liquidity: wbnb_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '19 November 2022'})

//Constant Staking iDYP
const ConstantStakingiDYP1 = initConstantStakingiDYP({ staking: window.constant_staking_idyp_1, apr: 20, liquidity: wbnb_address, expiration_time: '28 February 2023', other_info: true, fee_s: 0, fee_u: 0.25 })
const ConstantStakingiDYP2 = initConstantStakingiDYP({ staking: window.constant_staking_idyp_2, apr: 45, liquidity: wbnb_address, expiration_time: '28 February 2023', other_info: true, fee_s: 0, fee_u: 0.25 })
const ConstantStakingiDYP3 = initConstantStakingiDYP({ staking: window.constant_staking_idyp_5, apr: 15, liquidity: eth_address, expiration_time: '15 August 2023', other_info: false, fee_s: 1, fee_u: 0 })
const ConstantStakingiDYP4 = initConstantStakingiDYP({ staking: window.constant_staking_idyp_6, apr: 30, liquidity: eth_address, expiration_time: '15 August 2023', other_info: false, fee_s: 3.5, fee_u: 0 })



let { BigNumber, LP_IDs } = window

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        is_wallet_connected: false,
        the_graph_result: JSON.parse(JSON.stringify(window.the_graph_result)),
        the_graph_result_BSC_V2: JSON.parse(JSON.stringify(window.the_graph_result_bsc_v2)),
        referrer: '',
        darkTheme: false,
        show: false
    }
      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
  }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    async componentDidMount() {

      this.the_graph_result_BSC_V2().then()
    }

    the_graph_result_BSC_V2 = async () => {
        try {
            let the_graph_result_BSC_V2 = await window.get_the_graph_bsc_v2()
            this.setState({the_graph_result_BSC_V2: JSON.parse(JSON.stringify(the_graph_result_BSC_V2))})
        } catch (e) {
            // window.alertify.error("Cannot fetch TVL");
            console.error("TVL BSC V2 error: " + e)
        }
    }

    toggleTheme = () => {
    let darkTheme = !this.state.darkTheme
    document.body.classList[darkTheme?'add':'remove']('dark')
    this.setState({ darkTheme })
  }
  getCombinedTvlUsd = () => {
      let tvl = 0
      if (!this.state.the_graph_result.lp_data) return 0

      let lp_ids = Object.keys(this.state.the_graph_result.lp_data)
      for (let id of lp_ids) {
          tvl += this.state.the_graph_result.lp_data[id].tvl_usd*1 || 0
      }
      return tvl
  }

  getTvlFarming = () => {
        let tvl = 0
        if (!this.state.the_graph_result.lp_data) return 0

        tvl = window.TVL_FARMING_POOLS

        return tvl
    }

  getCombinedStakers = () => {
      let stakers = 0
      if (!this.state.the_graph_result.lp_data) return 0
      let lp_ids = Object.keys(this.state.the_graph_result.lp_data)
      for (let id of lp_ids) {
          stakers += this.state.the_graph_result.lp_data[id].stakers_num*1 || 0
      }
      return stakers
  }

    handleConnection = async () => {
        try {
            let is_wallet_connected = await window.connectWallet(undefined, false)
            //await setupnetwork()
            let referrer = window.param('r')

            if (is_wallet_connected) {
                if (referrer) {
                    referrer = String(referrer).trim().toLowerCase()
                }
                if (!window.web3.utils.isAddress(referrer)) {
                    referrer = window.config.ZERO_ADDRESS
                }
            }
            this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase(), referrer})



            try {
                let the_graph_result = await window.refresh_the_graph_result()
                this.setState({ the_graph_result: JSON.parse(JSON.stringify(the_graph_result)) })
            } catch (e) {
                // window.alertify.error("Cannot fetch TVL");
                console.error("Cannot fetch TVL: "+e)
            }
        } catch (e) {
            window.alertify.error(String(e))
        }
    }

    handleConnectionWalletConnect = async () => {
        try {

            let provider = new WalletConnectProvider({
                rpc: {
                    56: "https://bsc-dataseed.binance.org/"
                }
            })

            let is_wallet_connected = await window.connectWallet(provider, true)
            //await setupnetwork()
            let referrer = window.param('r')

            if (is_wallet_connected) {
                if (referrer) {
                    referrer = String(referrer).trim().toLowerCase()
                }
                if (!window.web3.utils.isAddress(referrer)) {
                    referrer = window.config.ZERO_ADDRESS
                }
            }
            this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase(), referrer})
            try {
                let the_graph_result_BSC_V2 = await window.get_the_graph_bsc_v2()
                this.setState({ the_graph_result_BSC_V2: JSON.parse(JSON.stringify(the_graph_result_BSC_V2)) })
            } catch (e) {
                // window.alertify.error("Cannot fetch TVL");
                console.error("TVL BSC V2 error: "+e)
            }
            try {
                let the_graph_result = await window.refresh_the_graph_result()
                this.setState({ the_graph_result: JSON.parse(JSON.stringify(the_graph_result)) })
            } catch (e) {
                // window.alertify.error("Cannot fetch TVL");
                console.error("Cannot fetch TVL: "+e)
            }
        } catch (e) {
            window.alertify.error(String(e))
        }
    }


render() {


  return (
    <div className="App App-header" style={{overflowX: "hidden"}}>
      <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />
      <div style={{minHeight: '550px'}} className="App-container">
          <Modal show={this.state.show} handleClose={this.hideModal}>
              <div className="sc-frDJqD ljXtWJ" data-reach-dialog-content="">
                  <div className="sc-cmTdod kjSopy">
                      <div className="sc-lhVmIH xuOEC">
                          <div className="sc-feJyhm iTaYul">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                   stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                   strokeLinejoin="round" className="sc-iELTvK cvCpgS">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                          </div>
                          <div className="sc-jwKygS bFQpTL">
                              <div className="sc-jtRfpW iudQQC">Connect to a wallet</div>
                          </div>
                          <div className="sc-btzYZH cRGnnt">
                              <div className="sc-elJkPf kIebhI">
                                  <button onClick={this.handleConnection} id="connect-METAMASK"
                                          className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                      <div className="sc-jbKcbu GeCum">
                                          <div color="#E8831D" className="sc-bbmXgH eDNUCi">MetaMask</div>
                                      </div>
                                      <div className="sc-jnlKLf gJPfsC">
                                          <img src="/img/wallets/metamask.svg" alt="Icon" />
                                      </div>
                                  </button>
                                  <button onClick={this.handleConnectionWalletConnect} id="connect-WALLETCONNECT"
                                          className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                      <div className="sc-jbKcbu GeCum">
                                          <div color="#E8831D" className="sc-bbmXgH eDNUCi">WalletConnect</div>
                                      </div>
                                      <div className="sc-jnlKLf gJPfsC">
                                          <img src="/img/wallets/walletConnect.svg" height={'25px'} alt="Icon" />
                                      </div>
                                  </button>
                                  <button onClick={this.handleConnection} id="connect-COIN98" className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                      <div className="sc-jbKcbu GeCum">
                                          <div color="#E8831D" className="sc-bbmXgH eDNUCi">Coin98</div>
                                      </div>
                                      <div className="sc-jnlKLf gJPfsC">
                                          <img src="/img/wallets/coin98.svg" alt="Icon" />
                                      </div>
                                  </button>
                                  <button onClick={this.handleConnection} id="connect-COIN98" className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                      <div className="sc-jbKcbu GeCum">
                                          <div color="#E8831D" className="sc-bbmXgH eDNUCi">Trust Wallet</div>
                                      </div>
                                      <div className="sc-jnlKLf gJPfsC">
                                          <img src="/img/wallets/trustwallet.svg" alt="Icon" />
                                      </div>
                                  </button>
                                  <button onClick={this.handleConnection} id="connect-COIN98" className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn">
                                      <div className="sc-jbKcbu GeCum">
                                          <div color="#E8831D" className="sc-bbmXgH eDNUCi">SafePal</div>
                                      </div>
                                      <div className="sc-jnlKLf gJPfsC">
                                          <img src="/img/wallets/safepal.svg" alt="Icon" />
                                      </div>
                                  </button>
                              </div>
                              {/*<div className="sc-bYSBpT cqlMyA"><span>New to Avalanche? &nbsp;</span> <a*/}
                              {/*    target="_blank" rel="noopener noreferrer"*/}
                              {/*    href="https://pangolin.exchange/tutorials/getting-started/#set-up-metamask"*/}
                              {/*    className="sc-ifAKCX jNdpwd sc-kTUwUJ kLByLx">Learn more about setting up a*/}
                              {/*    wallet</a></div>*/}
                          </div>
                      </div>
                  </div>
              </div>
          </Modal>
      <Route exact path="/staking-stats" render={props => <StakingStats is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />
        <Route exact path="/full-staking-stats" render={props => <FullStakingStats is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />

      <Route exact path="/staking-eth" render={props => <StakingListEth is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.eth[0], LP_IDs.eth[1], LP_IDs.eth[2], LP_IDs.eth[3]]} {...props} />} />
      <Route exact path="/staking-eth-3" render={props => <Staking3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[0]} {...props} />} />
      <Route exact path="/staking-eth-30" render={props => <Staking30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[1]} {...props} />} />
      <Route exact path="/staking-eth-60" render={props => <Staking60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[2]} {...props} />} />
      <Route exact path="/staking-eth-90" render={props => <Staking90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[3]} {...props} />} />
      <Route exact path="/staking-bnb" render={props => <StakingListWbtc is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.wbtc[0], LP_IDs.wbtc[1], LP_IDs.wbtc[2], LP_IDs.wbtc[3]]} {...props} />} />
      <Route exact path="/staking-bnb-3" render={props => <StakingWbtc3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[0]} {...props} />} />
      <Route exact path="/staking-bnb-30" render={props => <StakingWbtc30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[1]} {...props} />} />
      <Route exact path="/staking-bnb-60" render={props => <StakingWbtc60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[2]} {...props} />} />
      <Route exact path="/staking-bnb-90" render={props => <StakingWbtc90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[3]} {...props} />} />
      <Route exact path="/staking-busd" render={props => <StakingListUsdc is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.usdc[0], LP_IDs.usdc[1], LP_IDs.usdc[2], LP_IDs.usdc[3]]} {...props} />} />
      <Route exact path="/staking-busd-3" render={props => <StakingUsdc3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[0]} {...props} />} />
      <Route exact path="/staking-busd-30" render={props => <StakingUsdc30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[1]} {...props} />} />
      <Route exact path="/staking-busd-60" render={props => <StakingUsdc60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[2]} {...props} />} />
      <Route exact path="/staking-busd-90" render={props => <StakingUsdc90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[3]} {...props} />} />
      {/*<Route exact path='/' render={props => <StakingList tvl_all={getFormattedNumber(this.getCombinedTvlUsd(), 2)} tvl_farming={getFormattedNumber(this.getTvlFarming(), 2)} {...props} />} />*/}
      <Route exact path='/' render={props => <StakingNew5 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[4]} {...props} />} />

      <Route exact path='/staking-buyback' render={props => <BuybackStaking is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />

      <Route exact path='/vesting' render={props => <Vesting is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/vesting-staking' render={props => <VestingStaking is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />

      <Route exact path='/airdrop' render={props => <VestingAirdrop is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/airdrop-staking' render={props => <VestingStakingAirdrop is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />

      <Route exact path='/constant-staking-1' render={props => <ConstantStaking30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/constant-staking-2' render={props => <ConstantStaking90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />

      {/*Constant Staking DYP -> DAI*/}
      <Route exact path='/constant-staking-3' render={props => <ConstantStakingDai is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />

      {/*Constant Staking DYP -> DYP 30%*/}
      <Route exact path='/constant-staking-180' render={props => <ConstantStakingDYP is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/constant-staking-30' render={props => <ConstantStakingDYP10APR is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />

      {/*Buyback New*/}
      <Route exact path='/staking-buyback-1' render={props => <BuybackStaking1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} {...props} />} />
      <Route exact path='/staking-buyback-2' render={props => <BuybackStaking2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} {...props} />} />

          <Route exact path='/staking-buyback-new-2' render={props => <BuybackStaking2_front is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} {...props} />} />

      {/*Farming New*/}
      <Route exact path='/farming-new-1' render={props => <StakingNew1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[0]} {...props} />} />
      <Route exact path='/farming-new-2' render={props => <StakingNew2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[1]} {...props} />} />
      <Route exact path='/farming-new-3' render={props => <StakingNew3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[2]} {...props} />} />
      <Route exact path='/farming-new-4' render={props => <StakingNew4 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[3]} {...props} />} />
      <Route exact path='/farming-new-5' render={props => <StakingNew5 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[4]} {...props} />} />

      <Route exact path='/farming-new-6' render={props => <StakingNew5_front is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[4]} {...props} />} />

      {/*Farming New Error*/}
      <Route exact path='/farming-emergency-1' render={props => <StakingNewError1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[0]} {...props} />} />
      <Route exact path='/farming-emergency-2' render={props => <StakingNewError2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[1]} {...props} />} />
      <Route exact path='/farming-emergency-3' render={props => <StakingNewError3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[2]} {...props} />} />
      <Route exact path='/farming-emergency-4' render={props => <StakingNewError4 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[3]} {...props} />} />
      <Route exact path='/farming-emergency-5' render={props => <StakingNewError5 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} lp_id={LP_IDs.wbnb[4]} {...props} />} />

      <Route exact path='/staking-idyp-1' render={props => <ConstantStakingiDYP1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/staking-idyp-2' render={props => <ConstantStakingiDYP2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/staking-idyp-3' render={props => <ConstantStakingiDYP3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />
      <Route exact path='/staking-idyp-4' render={props => <ConstantStakingiDYP4 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_BSC_V2} referrer={this.state.referrer} {...props} />} />

      </div>
      <Footer />

    </div>
  );
}
}

export default App;
