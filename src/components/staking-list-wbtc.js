import React from 'react'
import { NavLink } from 'react-router-dom'
import getFormattedNumber from "../functions/get-formatted-number";

const checkLinkReturnApy = (link,apy) => {

    if (apy == undefined) return 0

    let a = link.split('-')[1] + '_' + link.split('-')[2]

    return apy.get(a.toString())
}

const VaultCard = ({logo, link, name, logo2, logo1, logo3, apys}) => (
    <NavLink to={link}>
        <div className='container vault-container'>
            <div className='row vault-row'>
                <div className='col-sm-2 col-md-1 text-center'>
                    <img className='mb-3' src={logo} height='45' width='45' style={{objectFit: 'contain'}} />
                </div>
                <div style={{whiteSpace: 'pre-line'}} className='col-sm-3 col-md-4'>
                    <span className='vault-name'>{name} </span>
                </div>
                <div className='col-sm-4' style={{ fontWeight: 'bold' }}>
                    APY {checkLinkReturnApy(link,apys)}%
                </div>
                <div className="col-sm-3 text-right">
                    <h4>REWARDS</h4>
                    <img className="mb-3" src={logo3} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0' }} />{' '}
                    <img className="mb-3" src={logo1} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0' }} />{' '}
                    <img className="mb-3" src={logo2} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginLeft: '1px' }} />{' '}
                </div>
            </div>
        </div>
    </NavLink>
)

let vaults = window.vaultsWbtc

export default class VaultListWbtc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maxApyBnb: undefined
        }
    }

    componentDidMount() {
        this.hashMapMax()
    }

    hashMapMax = async () => {

        let maxApy = await window.getHashMapApy()
        maxApy = new Map(JSON.parse(maxApy.Bsc))

        let maxApyBnb = maxApy
        this.setState({maxApyBnb})

        return maxApy
    }

    render() {

        let lp_data = this.props.the_graph_result.lp_data

        let tvl_usd = lp_data ? lp_data[this.props.lp_id[0]].tvl_usd + lp_data[this.props.lp_id[1]].tvl_usd + lp_data[this.props.lp_id[2]].tvl_usd + lp_data[this.props.lp_id[3]].tvl_usd : 0

        tvl_usd = getFormattedNumber(tvl_usd, 2)

        return (
            <div className="">
                
                <div className='container'>
                    <h3 className='text-center mt-5' style={{fontWeight: 600}}>Farming Pools</h3>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className='l-box mb-0' style={{display: 'grid', maxWidth: '100%', width: '250px'}}>
                            <p className='text-center text-muted small' style={{margin: '0'}}>
                                Total Value Locked
                                {/*TVL: ${getFormattedNumber(this.getCombinedTvlUsd(), 2)}, Total Stakers: {getFormattedNumber(this.getCombinedStakers(), 0)}*/}
                            </p>
                            <p className='text-center' style={{margin: '0', fontWeight: 'bold', fontSize: '1.5rem'}}>
                                ${tvl_usd}
                            </p>
                        </div>
                    </div>
                    <div className='vaults-list'>
                        {vaults.filter(v => !v.hidden).map((props,i) => <VaultCard {...props} apys={this.state.maxApyBnb} key={i} />)}
                    </div>
                </div>
            </div>
        )
    }
}