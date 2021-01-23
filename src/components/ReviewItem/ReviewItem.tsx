import React from 'react';
import styles from './ReviewItem.module.scss';
import { useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import SvgBackIcon from '../Svg/BackIcon';
interface MatchParams {
  id: string;
}
export const ReviewItem: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const items = useSelector((state) => state.Inventory?.items || []);
  const { id } = match.params;
  const { description, name = '', count } = items.filter((el) => el.id == id)[0] || [];
  const [_, color, nickName] = !!items.length ? name.match(/(.*)(?:-|\s)(.*)/) : [];
  return (
    <div className={styles.review}>
      <div className={styles.container}>
        <div className={styles.title_block}>
          <Link to="/">
            <SvgBackIcon />
          </Link>
          <h2 className={styles.title}>Account</h2>
        </div>
        <div className={styles.center_block}>
          <div className={styles.center_block_one}>
            <div className={styles.color} style={{ background: `#${color}` }}></div>
            <h2 className={styles.name}>{nickName}</h2>
            <div className={styles.block_count}>
              <h4 className={styles.count}>
                Item: <span className={styles.count_number}>{count}</span>
              </h4>
            </div>
          </div>
          <div className={styles.center_block_two}></div>
        </div>
        <div className={styles.desc_block}>
          <textarea className={styles.textarea} readOnly value={description}></textarea>
        </div>
      </div>
    </div>
  );
};
