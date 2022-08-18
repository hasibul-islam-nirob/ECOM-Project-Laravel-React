import React, {Component} from 'react';

class MegaMenu extends Component {

    constructor() {
        super();
        this.megaMenu = this.megaMenu.bind(this);
    }

    componentDidMount() {
        this.megaMenu();
    }

    megaMenu(){
        let acc = document.getElementsByClassName("accordion");
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
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>


                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>
                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>
                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>

                    <button className="accordion"><img className="accordionMenuIcon" src="" alt=""/> Category Name</button>
                    <div className="panel">
                        <ul>
                            <li><a className="accordionItem" href="#">Menu 1</a></li>
                            <li><a className="accordionItem" href="#">Menu 2</a></li>
                            <li><a className="accordionItem" href="#">Menu 3</a></li>
                            <li><a className="accordionItem" href="#">Menu 4</a></li>
                        </ul>
                    </div>





                </div>
            </div>
        );
    }
}

export default MegaMenu;