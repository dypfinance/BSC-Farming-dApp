import React from 'react';

import { Route } from 'react-router-dom'

import initStaking from './components/staking'
import initBuybackStaking from './components/buy-back-staking'
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

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} onClick={() => {
            // close modal when outside of modal is clicked
            handleClose()
        }}>
            <section className="modal-main">
                {children}
                {/*<button type="button" onClick={handleClose}>*/}
                {/*    Close*/}
                {/*</button>*/}
            </section>
        </div>
    )
}

let { BigNumber, LP_IDs } = window

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        is_wallet_connected: false,
        the_graph_result: JSON.parse(JSON.stringify(window.the_graph_result)),
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
            let is_wallet_connected = await window.connectWallet()
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

render() {

    if (!this.state.is_wallet_connected) {
        return (<div className='App text-center'>
            <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />
            <div className='container App-container'>
                <div className='mt-5'>
                    <h3 className='mb-4'>Please connect wallet to use this dApp</h3>
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
                    <button onClick={this.showModal} style={{borderRadius: '6px'}} className='btn btn-primary pr-5 pl-5'>
                        CONNECT WALLET</button>
                    {/*<button onClick={this.handleConnection} style={{borderRadius: '6px'}} className='btn btn-primary pr-5 pl-5'>*/}
                    {/*    CONNECT WALLET</button>*/}
                </div>
            </div>
            <Footer />
        </div>);
    }
  return (
    <div className="App App-header">
      <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />
      <div style={{minHeight: '550px'}} className="App-container">
      <Route exact path="/staking-stats" render={props => <StakingStats the_graph_result={this.state.the_graph_result} {...props} />} />
        <Route exact path="/full-staking-stats" render={props => <FullStakingStats the_graph_result={this.state.the_graph_result} {...props} />} />

      <Route exact path="/staking-eth" render={props => <StakingListEth the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.eth[0], LP_IDs.eth[1], LP_IDs.eth[2], LP_IDs.eth[3]]} {...props} />} />
      <Route exact path="/staking-eth-3" render={props => <Staking3 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[0]} {...props} />} />
      <Route exact path="/staking-eth-30" render={props => <Staking30 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[1]} {...props} />} />
      <Route exact path="/staking-eth-60" render={props => <Staking60 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[2]} {...props} />} />
      <Route exact path="/staking-eth-90" render={props => <Staking90 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[3]} {...props} />} />
      <Route exact path="/staking-bnb" render={props => <StakingListWbtc the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.wbtc[0], LP_IDs.wbtc[1], LP_IDs.wbtc[2], LP_IDs.wbtc[3]]} {...props} />} />
      <Route exact path="/staking-bnb-3" render={props => <StakingWbtc3 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[0]} {...props} />} />
      <Route exact path="/staking-bnb-30" render={props => <StakingWbtc30 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[1]} {...props} />} />
      <Route exact path="/staking-bnb-60" render={props => <StakingWbtc60 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[2]} {...props} />} />
      <Route exact path="/staking-bnb-90" render={props => <StakingWbtc90 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[3]} {...props} />} />
      <Route exact path="/staking-busd" render={props => <StakingListUsdc the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.usdc[0], LP_IDs.usdc[1], LP_IDs.usdc[2], LP_IDs.usdc[3]]} {...props} />} />
      <Route exact path="/staking-busd-3" render={props => <StakingUsdc3 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[0]} {...props} />} />
      <Route exact path="/staking-busd-30" render={props => <StakingUsdc30 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[1]} {...props} />} />
      <Route exact path="/staking-busd-60" render={props => <StakingUsdc60 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[2]} {...props} />} />
      <Route exact path="/staking-busd-90" render={props => <StakingUsdc90 the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[3]} {...props} />} />
      <Route exact path='/' render={props => <StakingList tvl_all={getFormattedNumber(this.getCombinedTvlUsd(), 2)} tvl_farming={getFormattedNumber(this.getTvlFarming(), 2)} {...props} />} />
      <Route exact path='/staking-buyback' render={props => <BuybackStaking the_graph_result={this.state.the_graph_result} {...props} />} />

      </div>
      <Footer />

    </div>
  );
}
}

export default App;