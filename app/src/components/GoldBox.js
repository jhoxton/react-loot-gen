// *******************************************************
// LootBox Component
// -------------------------------------------------------
// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { Styles } from '../styles';



// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------

class GoldBox extends Component {
    constructor() {
        super();

        this.state = {
            size: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            size: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        //THIS IS WHERE THE RANDOM OUT WILL BE
        alert(`You chose the ${this.state.size} haul.`);
    }



    render() {
        // console.log(this.state);

        return (
            //     <div>
            //     <img src={this.props.imageIcon} className={Styles.iconStyle}></img>
            // </div>
            <div>
                <div className={Styles.outerBlock} >
                    <div className={Styles.innerBlock}>
                        <h3 className={Styles.headingFont}> {this.props.name}</h3>
                    </div>
                   
                    <form onSubmit={this.handleSubmit} >
                   
                        <p className={Styles.goldInput}>Range of haul:</p>
                        <label className={Styles.goldInput}>
                            <input
                            
                                type="radio"
                                value="small"
                                checked={this.state.size === "small"}
                                onChange={this.handleChange}
                                
                            />
                            Small
                        </label>
                        <label className={Styles.goldInput}>
                            <input
                                type="radio"
                                value="medium"
                                checked={this.state.size === "medium"}
                                onChange={this.handleChange}
                            />
                            Medium
                        </label>
                        <label className={Styles.goldInput}>
                            <input
                                type="radio"
                                value="large"
                                checked={this.state.size === "large"}
                                onChange={this.handleChange}
                            />
                            Large
                        </label>
                        {/* <div className={Styles.lootButtonFont}> Loot!</div> */}
                        {/* <button className={Styles.lootButtonFont} type="submit">Loot!</button> */}

                        <button onClick={this.changeLootState} className={Styles.button}>
                            <div className={Styles.lootButtonFont} type="submit"> Loot!</div>
                        </button>
                        
                    </form>
                    




                </div>

            </div>
        );
    }
}


export default GoldBox;
// --------------------------------
