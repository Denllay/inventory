import React from 'react';
import styles from './ReviewItem.module.scss';
import { useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import ChangeIcon from '../../assets/svg/ChangeIcon.svg';
interface MatchParams {
  id: string;
}
export const ReviewItem: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const items = useSelector((state) => state.Inventory?.items || []);
  const { id } = match.params;

  let { description, name = '', count } = items.filter((el) => el.id == id)[0] || [];
  let [color] = name.match(/^(\w{6})/g) || [];
  let nickName = name.replace(/^(\w{6}) /, '') || [];
  return (
    <div className={styles.review}>
      <div className={styles.container}>
        <div className={styles.title_block}>
          <Link to="/">
            <svg
              className={styles.svg}
              width="19"
              height="19"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C15.9952 12.4163 12.4163 15.9952 8 16ZM8 1.6C4.48432 1.60089 1.62757 4.43749 1.60179 7.95308C1.57602 11.4687 4.39087 14.3468 7.90616 14.3993C11.4214 14.4517 14.3209 11.6588 14.4 8.144V9.5704V8C14.396 4.46702 11.533 1.60397 8 1.6ZM8 12L4 8L8 4L9.128 5.128L7.064 7.2H12V8.8H7.064L9.128 10.872L8 12Z"
                fill="white"
              />
            </svg>
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
          <div className={styles.center_block_two}>
            <span
              dangerouslySetInnerHTML={{ __html: ChangeIcon }}
              className={styles.svg_change}
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
        <div className={styles.desc_block}>
          <textarea className={styles.textarea} readOnly value={description}></textarea>
        </div>
      </div>
    </div>
  );
};
