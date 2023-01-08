import React from 'react'
import StockList from '../components/StockList'
import AutoComplete from '../components/AutoComplete'
import logo from '../images/logo.png'

const StockOverviewPage = () => {
    return (
        <div>
            <div className="text-center">
                <img style={{width: "200px"}} src={logo} alt="logo" />
            </div>
            <AutoComplete/>
            <StockList/>
        </div>
    )
}

export default StockOverviewPage