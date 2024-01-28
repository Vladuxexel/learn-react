import { MenuItem as TMenuItem } from "@models";
import { MenuItem } from "../menu-item/component";
import styles from "./styles.module.scss";

export const Menu = ({ menu }: { menu: TMenuItem[] }) => {
    return (
        <div className={styles.menu}>
            <h3>Menu:</h3>
            <ul>
                {menu.map((menuItem) => <li><MenuItem menuItem={menuItem} /></li>)}
            </ul>
        </div>
    );
} 