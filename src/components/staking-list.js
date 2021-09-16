import React from 'react'
import { NavLink } from 'react-router-dom'

const checkLinkReturnApy = (link,apy) => {

    if (apy == undefined) return 0

    let pair = link.split('-')[1]

    return apy[pair]
}

const VaultCard = ({logo, link, name, description, logo1, logo2, logo3, apys}) => (
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

let vaults = window.vaults
//let vaultsFarming = window.vaultsFarming

export default class VaultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.hashMapMax()
    }

    hashMapMax = async () => {

        let maxApy = await window.getHashMapApy()
        maxApy = new Map(JSON.parse(maxApy.Bsc))

        let auxEth = 0, maxEth = 0, auxBnb = 0, maxBnb = 0, auxBusd = 0, maxBusd = 0
        let maxApyArray = []

        for (let [key, value] of maxApy.entries()) {
            let pair = key.split('_')[0]

            if ('eth'.localeCompare(pair) == 0){
                auxEth = parseFloat(value)

                if (maxEth <= auxEth)
                    maxEth = auxEth
            }

            if ('bnb'.localeCompare(pair) == 0){
                auxBnb = parseFloat(value)

                if (maxBnb <= auxBnb)
                    maxBnb = auxBnb
            }

            if ('busd'.localeCompare(pair) == 0){
                auxBusd = parseFloat(value)

                if (maxBusd <= auxBusd)
                    maxBusd = auxBusd
            }

        }

        maxApyArray['eth'] = maxEth
        maxApyArray['bnb'] = maxBnb
        maxApyArray['busd'] = maxBusd

        let maxApyArrays = maxApyArray
        this.setState({maxApyArrays})

        return maxApyArray
    }

    render() {
        return (
            <div className="">
                
                <div className='container'>
                    <div>
                        <h3 className='text-center mt-5' style={{fontWeight: 600}}>Farming Pools</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className='l-box mb-0' style={{display: 'grid', maxWidth: '100%', width: '250px'}}>
                                <p className='text-center text-muted small' style={{margin: '0'}}>
                                    Total Value Locked
                                    {/*TVL: ${getFormattedNumber(this.getCombinedTvlUsd(), 2)}, Total Stakers: {getFormattedNumber(this.getCombinedStakers(), 0)}*/}
                                </p>
                                <p className='text-center' style={{margin: '0', fontSize: '1.5rem', fontWeight: 'bold'}}>
                                    ${this.props.tvl_all}
                                </p>
                            </div>
                        </div>
                        <div className='vaults-list'>
                            {vaults.filter(v => !v.hidden).map((props,i) => <VaultCard {...props} apys={this.state.maxApyArrays} key={i} />)}
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <h3 className='text-center mt-0' style={{fontWeight: 600}}>DYP Farming Pools</h3>*/}
                    {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
                    {/*        <div className='iivcTi' style={{display: 'grid', maxWidth: '100%', width: '250px'}}>*/}
                    {/*            <p className='text-center' style={{margin: '0'}}>*/}
                    {/*                Total Value Locked*/}
                    {/*                /!*TVL: ${getFormattedNumber(this.getCombinedTvlUsd(), 2)}, Total Stakers: {getFormattedNumber(this.getCombinedStakers(), 0)}*!/*/}
                    {/*            </p>*/}
                    {/*            <p className='text-center' style={{margin: '0'}}>*/}
                    {/*                ${this.props.tvl_farming}*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className='vaults-farming-list'>*/}
                    {/*        {vaultsFarming.filter(v => !v.hidden).map((props,i) => <VaultCard {...props} key={i} />)}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}