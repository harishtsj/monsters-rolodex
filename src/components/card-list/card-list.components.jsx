import { Component } from "react";
import './card-list.style.css';
import Card from "../card/card.component";

class CardList extends Component {

    // constructor () {
    //     super();
    //     //console.log("cardList_Constructor");
    // }

    render () {
        const { monsters } = this.props;
        //console.log(monsters);
        //console.log("cardList_render");
        return (
            <div className="card-list">
                { monsters.map(( monster ) => {
                    return (
                        <Card key={ monster.id } monster_card = { monster }/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;