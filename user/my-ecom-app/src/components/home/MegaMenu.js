import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MegaMenu extends Component {

    MenuItemClick=(event)=>{
        event.target.classList.toggle('active');
        let panel = event.target.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+ "px";
        }
    }

    render() {

        const MyList = this.props.data;
        const MyView = MyList.map((ParentList,i)=>{
            return <div key={i.toString()}>
                <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src={ParentList.parentsCategoryImg} alt=""/> {ParentList.parentsCategoryName} </button>
                <div className="panel">
                    <ul>
                        {
                            (ParentList.subCategory).map((ChieldList,j)=>{
                                return <li className="list-unstyled">
                                    <Link to={"ProductListBySubCategory/"+ChieldList.cat1_name+"/"+ChieldList.cat2_name} className="accordionItem" >{ChieldList.cat2_name}</Link>
                                </li>;
                        })
                        }
                    </ul>
                </div>
            </div>
        });


        return (
            <div className="accordionMenuDiv animated slideInDown">
                <div className="accordionMenuDivInside">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenu;