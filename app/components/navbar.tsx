"use client"

import * as React from 'react';
import { Component } from 'react';



function NavBar() {

    const navigations = {
        openlist :{ 
            style:"text-dark border-r border-r-gray3 h-full xl:w-[177px] lg:w-[140px] md:w-[120px] flex items-center justify-center font-ultrabold hover:bg-[#FBFBFB] hover:text-dark transition ease-in-out duration-300 active-link",
            items: [
            {item:"Home",ref:"/"},
            {item:"Work",ref:"/work"},
            {item:"Articles",ref:"/articles"},
            {item:"Contact",ref:"/contact"}
            ]
        }, 
        socilist : [
            {item:"TW",ref:"/twitter", arial:""},
            {item:"LN",ref:"/linkedin", arial:""},
            {item:"GH",ref:"/github", arial:""},
            {item:"MD",ref:"/medium", arial:""}
        ],
        drawlist:{
            style:"text-gray2 font-extrabold leading-none text-[130px] mb-[20px] flex items-center justify-center font-ultrabold transition ease-in-out duration-300 !text-dark" 
            ,items:[
                {item:"Home",ref:"/" },
                {item:"Work",ref:"/work"},
                {item:"Articles",ref:"/articles"},
                {item:"Contact",ref:"/contact"},
                {item:"Résumé",ref:"/download"}  
            ]
        }
    }

    let [drawerState, setDrawerState] = React.useState(false);  

    const drawerManager = () => {
        setDrawerState(!drawerState);
    }


    return ( 
        <nav aria-label="Main menu"  className="nav-container">
            <div className="kontainer">
            <div id="nav-main" className="nav-main">
                
                <div className="flex items-center px-8">
                    <div>
                        <a title="this is James" className="flex items-center" href="/"> 
                            <p className="text-2xl  font-ultrabold">thisisJames</p>
                        </a>
                    </div>
                </div>



                <div className="flex justify-center h-full">

                    <div className={drawerState ? "hidden" :"h-full"}>
                        <ul className="md:flex hidden items-center justify-center h-full">
                            {navigations.openlist.items.map((i,k) => {
                                return (
                                    <li className="h-full"><a title="Home" className={navigations.openlist.style} href={i.ref}>{i.item}</a></li>)
                            } )} 
                        </ul>
                    </div>

                    <button   onClick={()=>{ setDrawerState(!drawerState); }} aria-controls="main-menu" aria-label="Open menu" role="navigation" className="md:hidden inline-flex  drawerButton  transition-all flex justify-center flex-col    md:min-w-[157px] md:w-[157px] w-[94px]">
                        <span className={drawerState ? "bar-active":"bar-1"}></span>  
                        <span className={drawerState ? "bar-active":"bar-2"}></span>
                    </button>

                </div>
            </div>
            <section id='nav-drawer' className={drawerState ? "opacity-100 bg-white w-full transition-all flex flex-col ":"opacity-0  transition-all hidden"}>

                <ul className="flex items-center flex-col justify-center h-full">
                    {navigations.drawlist.items.map((i,k) => { 
                        return (
                            <li className="h-full"><a className={navigations.drawlist.style} href={i.ref}>{i.item}</a></li>)
                    } )}
                </ul>
                                
                <ul className="flex items-center justify-center border-t border-gray2 py-[66px]">
                    {
                        navigations.socilist.map((i,k) => {
                            return (
                                <li><a href={i.ref} aria-label={i.arial} target="_blank" rel="noopener noreferrer" className="mr-[60px] text-gray2 font-extrabold text-[27px]">{i.item}</a></li>
                                )
                            } )
                    }
                    
                </ul>

            </section>
            </div>
        </nav>
    );
}

export default NavBar;