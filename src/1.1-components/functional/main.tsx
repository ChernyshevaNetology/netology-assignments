import { ShopItemFunc } from './shop-item-func';
import './styles.css'

export const Main = () => {
    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'>
                </div>
            </div>
            <div className="window">
                <ShopItemFunc  />
            </div>
        </div>
    )

};
