import React, {Component} from 'react';

class MegaMenuMobile extends Component {

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
                <button onClick={this.MenuItemClick} className="accordionMobile"><img className="accordionMenuIconMobile" src={ParentList.parentsCategoryImg} alt=""/> {ParentList.parentsCategoryName}</button>
                <div className="panelMobile">
                    <ul>
                        {
                            (ParentList.subCategory).map((ChieldList,j)=>{
                                return <li className="list-unstyled"><a className="accordionItemMobile" href="#">{ChieldList.cat2_name}</a></li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        });

        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;