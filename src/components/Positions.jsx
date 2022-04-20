import PositionEle from "./PositionEle";
import { v4 as uuidv4 } from "uuid";
import { items } from '../custom/positionsData'

function Positions() {
    return (
        <>
            {items.map((item) => {
                return <PositionEle key={uuidv4()} name={item.name} org={item.org} fromYear={item.fromYear} toYear={item.toYear} duties={item.duties} />
            })}
        </>
    );
}

export default Positions;
