import React, { Dispatch, SetStateAction, TextareaHTMLAttributes, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeItem } from '../../../store/actions/Inventory/ChangeItem';
import { IBlockInventory } from '../../../types/inventoryBlock';
import styles from './ChangeItem.module.scss';
interface IProps {
  itemId: number;
  setBlockInventory: Dispatch<SetStateAction<IBlockInventory>>;
}
// class InventoryChangeItem extends Component<IProps, IState> {
//   constructor(props) {
//     super(props);

//     const item = props.Inventory.items.filter(({ id }) => id === props.itemId.id)[0];
//     const { name, count, description, cell } = item;
//     const [_, color, itemName] = name.match(/(.*)(?:-|\s)(.*)/);
//     this.state = {
//       itemId: item.id,
//       InventoryId: props.Inventory.userId,
//       cell,
//       input: {
//         itemName,
//         color,
//         description,
//         count,
//       },
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     const item = props.Inventory.items.filter(({ id }) => id === props.itemId.id)[0];
//     if (item !== undefined) {
//       const { name = '', count, description, cell } = item;
//       const [_, color, itemName] = name.match(/(.*)(?:-|\s)(.*)/);

//       if (props.itemId.id !== state.itemId) {
//         return {
//           InventoryId: props.Inventory.userId,
//           cell,
//           itemId: props.itemId.id,
//           input: {
//             itemName,
//             color,
//             description,
//             count,
//           },
//         };
//       }
//       return {};
//     } else {
//       props.setBlockInventory({ type: 'create' });
//     }
//   }
//   makeState = (one: string, two: string, three: string) => ({
//     [one]: this.state.input[one],
//     [two]: this.state.input[two],
//     [three]: this.state.input[three],
//   });
//   handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     let inputData = this.makeState('description', 'color', 'count');
//     const maxLength = 10;
//     e.currentTarget.value.length <= maxLength &&
//       this.setState({
//         input: {
//           itemName: e.currentTarget.value,
//           ...inputData,
//         },
//       });
//   };
//   handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
//     let inputData = this.makeState('itemName', 'color', 'count');
//     e.target.scrollTop > 0 && (e.target.style.height = e.target.scrollHeight + 'px');
//     const maxLength = 300;
//     e.currentTarget.value.length <= maxLength &&
//       this.setState({
//         input: {
//           description: e.currentTarget.value,
//           ...inputData,
//         },
//       });
//   };
//   handleColorChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     let inputData = this.makeState('description', 'itemName', 'count');
//     let sucsess = /^[\w0-9]*$/.test(e.currentTarget.value) && e.currentTarget.value.length !== 7;
//     sucsess &&
//       this.setState({
//         input: {
//           color: e.currentTarget.value,
//           ...inputData,
//         },
//       });
//   };
//   onRandomColor = (e: React.FormEvent): void => {
//     let inputData = this.makeState('description', 'itemName', 'count');
//     e.preventDefault();
//     this.setState({
//       input: {
//         color: Math.floor(Math.random() * 16777215).toString(16),
//         ...inputData,
//       },
//     });
//   };
//   setCount = (e: React.SyntheticEvent<HTMLDivElement>): void => {
//     let inputData = this.makeState('description', 'itemName', 'color');
//     if (!(e.target instanceof HTMLDivElement)) return;
//     const meaningCount = e.target.dataset['count'] === 'plus' ? 1 : -1;
//     (meaningCount === -1 && this.state.input.count > 1) || meaningCount === 1
//       ? this.setState({
//           input: {
//             count: this.state.input.count + meaningCount,
//             ...inputData,
//           },
//         })
//       : false;
//   };
//   onSubmitForm = (e: React.FormEvent) => {
//     e.preventDefault();
//     const { name = '', description, count } = this.props.Inventory.items.filter(
//       ({ id }) => id === this.props.itemId.id
//     )[0];
//     const [_, color, itemName] = name.match(/(.*)(?:-|\s)(.*)/);
//     ///
//     const payloadCount = this.state.input.count;
//     const payloadDesc = this.state.input.description;
//     ///
//     let sucsess =
//       itemName === this.state.input.itemName &&
//       color === this.state.input.color &&
//       description === payloadDesc &&
//       count === payloadCount;
//     ///
//     if (!sucsess && this.state.input.itemName) {
//       this.props.ChangeItem({
//         name: `${this.state.input.color}-${this.state.input.itemName}`,
//         description: payloadDesc,
//         count: payloadCount,
//         itemId: this.state.itemId,
//         cell: this.state.cell,
//         inventoryId: this.state.InventoryId,
//       });
//       this.props.setBlockInventory({ type: 'create' });
//     } else {
//       console.log('Введите данные правильно!'); // Change
//     }
//   };
//   render() {
//     return (
//       <div className={styles.create_modal}>
//         <form className={styles.form} onSubmit={this.onSubmitForm}>
//           <input type="submit" className={styles.submit} value="Change" />
//           <div className={styles.from_content}>
//             <h3 className={styles.label}>Nickname:</h3>
//             <input
//               className={styles.input}
//               autoComplete="off"
//               name="nickName"
//               type="text"
//               placeholder="Write a nickname..."
//               value={this.state.input.itemName}
//               onChange={this.handleNameChange}
//             />
//             <div className={styles.color_block}>
//               <h3 className={styles.label}>Color:</h3>
//               <div className={styles.color_text}>
//                 <div className={styles.color} style={{ background: `#${this.state.input.color}` }}></div>
//                 <input
//                   className={`${styles.input} ${styles.input_color}`}
//                   name="color"
//                   type="text"
//                   autoComplete="off"
//                   value={this.state.input.color}
//                   onChange={this.handleColorChange}
//                 />
//                 <button className={styles.color_button} onClick={this.onRandomColor}>
//                   Random
//                 </button>
//               </div>
//             </div>
//             <div className={styles.count_block}>
//               <h3 className={styles.label}>Item:</h3>
//               <div className={styles.item_block}>
//                 <div className={styles.item_count}>{this.state.input.count}</div>
//                 <div className={styles.set_count} onClick={this.setCount}>
//                   <div className={styles.item_plus} data-count="plus"></div>
//                   <div className={styles.item_minus} data-count="minus"></div>
//                 </div>
//               </div>
//             </div>
//             <h3 className={styles.label}>Description:</h3>
//             <textarea
//               className={`${styles.input} ${styles.textarea}`}
//               placeholder="Write something..."
//               autoComplete="off"
//               value={this.state.input.description}
//               onChange={this.handleDescriptionChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
export const InventoryChangeItem: React.FC<IProps> = ({ itemId, setBlockInventory }) => {
  const { id, name: nameColor, description: descriptionItem, count: countItem, cell, InventoryId } = useSelector(
    (state) => state?.Inventory?.items || []
  ).filter(({ id }) => id === itemId)[0];
  const [_, colorItem, name] = nameColor.match(/(.*)(?:-|\s)(.*)/);
  const [itemName, setItemName] = useState<string>(name);
  const [color, setColor] = useState<string>(colorItem);
  const [description, setDescription] = useState<string>(descriptionItem);
  let [count, setCount] = useState<number>(countItem);
  const dispatch = useDispatch();
  ///
  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const maxNameLength = 10;
    e.currentTarget.value.length <= maxNameLength && setItemName(e.currentTarget.value);
  };
  const onChangeColor = (e: React.FormEvent<HTMLInputElement>) => {
    let sucsess = /^[\w0-9]*$/.test(e.currentTarget.value) && e.currentTarget.value.length !== 7;
    sucsess && setColor(e.currentTarget.value);
  };
  const onChangeDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
    (e.target as HTMLTextAreaElement).scrollTop > 0 &&
      ((e.target as HTMLTextAreaElement).style.height = (e.target as HTMLTextAreaElement).scrollHeight + 'px');
    const maxLength = 300;
    e.currentTarget.value.length <= maxLength && setDescription(e.currentTarget.value);
  };
  const onClickCount = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    const meaningCount = e.target.dataset['count'] === 'plus' ? 1 : -1;
    if ((meaningCount === -1 && count > 1) || meaningCount === 1) {
      setCount((count += meaningCount));
    }
  };
  const onRandomColor = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    let sucsess = itemName === name && color === colorItem && description === descriptionItem && count === countItem;
    if (!sucsess && !!itemName.trim()) {
      dispatch(
        ChangeItem({
          name: `${color}-${itemName}`,
          description: description,
          count: count,
          itemId: itemId,
          cell: cell,
          inventoryId: InventoryId,
        })
      );
      setBlockInventory({ type: 'create' });
    } else {
      console.log('Введите данные правильно!'); // Change
    }
  };
  ///
  useEffect(() => {
    setItemName(name);
    setColor(colorItem);
    setCount(countItem);
    setDescription(descriptionItem);
  }, [id]);
  return (
    <div className={styles.create_modal}>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <input type="submit" className={styles.submit} value="Change" />
        <div className={styles.from_content}>
          <h3 className={styles.label}>Nickname:</h3>
          <input
            className={styles.input}
            autoComplete="off"
            name="nickName"
            type="text"
            placeholder="Write a nickname..."
            value={itemName}
            onChange={onChangeName}
          />
          <div className={styles.color_block}>
            <h3 className={styles.label}>Color:</h3>
            <div className={styles.color_text}>
              <div className={styles.color} style={{ background: `#${color}` }}></div>
              <input
                className={`${styles.input} ${styles.input_color}`}
                name="color"
                type="text"
                autoComplete="off"
                value={color}
                onChange={onChangeColor}
              />
              <button className={styles.color_button} onClick={onRandomColor}>
                Random
              </button>
            </div>
          </div>
          <div className={styles.count_block}>
            <h3 className={styles.label}>Item:</h3>
            <div className={styles.item_block}>
              <span className={styles.item_count}>{count}</span>
              <div className={styles.set_count} onClick={onClickCount}>
                <div className={styles.item_plus} data-count="plus"></div>
                <div className={styles.item_minus} data-count="minus"></div>
              </div>
            </div>
          </div>
          <h3 className={styles.label}>Description:</h3>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Write something..."
            autoComplete="off"
            value={description}
            onChange={onChangeDesc}
          />
        </div>
      </form>
    </div>
  );
};
