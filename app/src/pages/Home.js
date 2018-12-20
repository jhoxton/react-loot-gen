// *******************************************************
// Home page
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Styles } from '../styles';
import * as C from '../components';

import gearArray from '../content/gear';
import weaponArray from '../content/weapons';
import trinketArray from '../content/trinkets';

import gearIcon from '../images/gear.jpg';
import trinketIcon from '../images/trinket.jpg';
import weaponIcon from '../images/weapon.jpg';
import goldIcon from '../images/gold.jpg';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Home extends Component {

    render() {
        return (
            
        <div >
       
        <C.LootBox 
            name={"Gear"}
            lootItems = {gearArray}
            imageIcon = {gearIcon}

        />
        <C.LootBox 
            name={"Weapons"}
            lootItems ={weaponArray}
            imageIcon = {weaponIcon}
        />
        <C.LootBox 
            name={"Trinket"}
            lootItems={trinketArray}
            imageIcon = {trinketIcon}
        />
        <C.GoldBox
            name ={"Gold"}
            imageIcon = {goldIcon}  
                       
        />


        </div>
            
        );
    }
}

export default withRouter(Home);

// --------------------------------
