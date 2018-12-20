import React from 'react';

import boots from '../images/boots.png';
import hat from '../images/hat.png';
import hat2 from '../images/hat2.png';
import jacket from '../images/denim-jacket.png';
import gloves from '../images/gloves.png';
import raincoat from '../images/raincoat.png';
import shirt from '../images/shirt2.png';
import scarf from '../images/scarf.png';
import shorts from '../images/shorts.png';
import sneaker from '../images/sneaker.png';
import sweater from '../images/long-sleeves.png';
import socks from '../images/socks.png';
import sunglasses from '../images/sunglasses.png';
import trousers from '../images/trousers.png';
import tshirt from '../images/tshirt.png';
import umbrella from '../images/umbrella.png';
import wjacket from '../images/winter-jacket.png';
import flipflops from '../images/flip-flops.png';

import './Wear.css';

class Wear extends React.Component {
    render() {
        return (
            <div className="wear-wrapper">
            <div className="alert-wrapper">
            {
                (this.props.city === undefined || this.props.city === '') &&
                <p className="alert">We don't know where you are !</p>
            }
            </div>
            {
                (this.props.city !== undefined && this.props.city !== '') &&
                <div>
                    <h2>Perfect Outfit</h2>
                    <div className="wear-section">
                        {
                            this.props.temp <= 0 &&
                            (<div className="result"><img src={wjacket}/><span> + </span><img src={sweater}/><span> + </span><img src={trousers}/><span> + </span><img src={boots}/><span> + </span><img src={hat}/><span> + </span><img src={scarf}/><span> + </span><img src={gloves}/></div>)
                        }
                        {
                            (this.props.temp > 0 && this.props.temp < 10) &&
                            (<div className="result"><img src={jacket}/><span> + </span><img src={sweater}/><span> + </span><img src={trousers}/><span> + </span><img src={sneaker}/><span> + </span><img src={hat2}/></div>)
                        }
                        {
                            (this.props.temp >= 10 && this.props.temp <= 15) && 
                            (<div className="result"><img src={jacket}/><span> + </span><img src={shirt}/><span> + </span><img src={trousers}/><span> + </span><img src={sneaker}/><span> + </span><img src={hat2}/></div>)
                        }
                        {
                            (this.props.temp > 15 && this.props.temp <= 20) && 
                            (<div className="result"><img src={shirt}/><span> + </span><img src={trousers}/><span> + </span><img src={sneaker}/></div>)
                        }
                        {
                            (this.props.temp > 20 && this.props.temp <= 25) &&
                            (<div className="result"><img src={tshirt}/><span> + </span><img src={shorts}/><span> + </span><img src={sneaker}/></div>)}
                        {
                            (this.props.temp > 25) &&
                            (<div className="result"><img src={tshirt}/><span> + </span><img src={shorts}/><span> + </span><img src={flipflops}/></div>)
                        }
                    </div>
                    {
                        (this.props.icon === '01d' || this.props.icon === '09d' || this.props.icon === '09n'|| this.props.icon === '10d' ||this.props.icon === '10n'||this.props.icon === '11d' ||this.props.icon === '11n') &&
                        <div> 
                            <h2>Things you may need</h2>
                            <div className="wear-section">
                                {this.props.icon === '01d' && <img src={sunglasses}/>}
                                { (this.props.icon === '09d' || this.props.icon === '09n'|| this.props.icon === '10d' ||this.props.icon === '10n'||this.props.icon === '11d' ||this.props.icon === '11n') && <img src={umbrella}/>}
                            </div>
                        </div> 
                    }
                </div>
            }
            </div>
        );
    }
}

export default Wear;