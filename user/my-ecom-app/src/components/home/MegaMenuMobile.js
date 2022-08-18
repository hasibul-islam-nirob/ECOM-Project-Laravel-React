import React, {Component} from 'react';

class MegaMenuMobile extends Component {

    constructor() {
        super();
        this.megaMenu = this.megaMenu.bind(this);
    }

    componentDidMount() {
        this.megaMenu();
    }

    megaMenu(){
        let acc = document.getElementsByClassName("accordionMobile");
        let menuNum = acc.length;
        let i;
        for(i=0; i<menuNum; ++i){
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight = panel.scrollHeight+ "px";
                }
            })
        }
    }


    render() {
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="" alt=""/> Category Name</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a className="accordionItemMobile" href="#">Menu 1</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 2</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 3</a></li>
                            <li><a className="accordionItemMobile" href="#">Menu 4</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;