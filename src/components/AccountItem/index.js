import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Le Van Sinh</span>
                    <FontAwesomeIcon style={{ color: '#4ec8d7 '}} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>sinh.le</span>
            </div>
        </div>
    );
}

export default Account;
