import React from "react";
import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

const Menu = props =>{
    return (
        <ul className="sidebar-menu">
           <MenuItem path='/' label='Dashboard' icon='dashboard' />
           <MenuTree label='Cadastro' icon='edit'>
               <MenuItem path='billingcycles' 
                   label='Ciclos de Pagamentos' icon='usd'
               />
           </MenuTree> 
        </ul>
    )
}

export default Menu