import React from 'react';
import cl from './rightside.module.css'

const RightSide = () => {
    return (
        <section className={cl.rightSide}>
            <div className={cl.top}>
                <img src='assets/Ridgeline.svg'/>
                <h3>$145</h3>
            </div>
            <div className={cl.productInfo}>
                <h3>The Perfect Pockets Long Parka</h3>
                <article>This cozy parka has a water-resistant shell made of upcycled materials, synthetic down filling,
                    and an abundance of pockets. There are six zipper-close pockets plus one roomy velcro-close pouch.
                    Engineered for storage, this parka provides space for all the necessities you’ll bring on your next
                    cold-weather adventure.
                </article>
            </div>
            <div className={cl.bottomSection}>
                <div className={cl.colors}>
                    <span id={cl.yellow}></span><span id={cl.red}></span><span id={cl.blue}></span><span id={cl.green}></span>
                </div>
                <div className={cl.sizes}>
                    <span>S</span><span>M</span><span>L</span><span>XL</span>
                </div>
                <button>Add to Cart</button>
            </div>
        </section>
    );
};

export default RightSide;
