// *******************************************************
// LootBox Component
// -------------------------------------------------------
// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { Styles } from '../styles';

import gearIcon from '../images/gear.jpg';
import goldIcon from '../images/gold.jpg';
import trinketIcon from '../images/trinket.jpg';
import weapon from '../images/weapon.jpg';
import bg from '../images/wp_1.jpg';

// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------

class LootBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedLoot: [],
            myInput: ""
        }
    }


    changeLootState = () => {
        var outPut = new Array();

        var amount = parseInt(this.state.myInput);

        for (var i = 0; i < amount; i++) { //THIS WILL BE THE INPUT
            var arrayIndex = parseInt(Math.random() * (this.props.lootItems.length - 1));
            var item = this.props.lootItems[arrayIndex];
            outPut.push(item);
        }
        var nextState = {

            selectedLoot: outPut
        }
        this.setState(nextState);
    }

    handleChange = (event) => {
        this.setState({
            myInput: event.target.value
        });
    }

    renderLootItem = () => {
        var elements = [];
        //Loop number of input times
        for (var i = 0; i < this.state.selectedLoot.length; i++) {
            var indItem = this.state.selectedLoot[i];
            var element = (
                <p key={i} className={Styles.lootOutput}>
                    -  {indItem}
                </p>
            );
            elements.push(element);
        }
        return elements;
    }

    render() {
        // console.log(this.state);

        return (

            <div>
                <div className={Styles.outerBlock} >
                    <div className={Styles.innerBlock}>
                        <h3 className={Styles.headingFont}> {this.props.name}</h3>
                        <div >
                            <img src={this.props.imageIcon} className={Styles.iconStyle}></img>
                        </div>
                        <input type="text" value={this.state.myInput} onChange={this.handleChange} className={Styles.inputBlock} />
                    </div>

                    <div className={Styles.outputBlock}>
                        {this.renderLootItem()}
                    </div>

                    <div>
                        <button onClick={this.changeLootState} className={Styles.button}>
                            <div className={Styles.lootButtonFont}> Loot!</div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

LootBox.defaultProps = {
    lootItems: []
}

export default LootBox;
// --------------------------------
