import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);
function SideBar() {
    return <h1 className={cx('wrapper')}>SideBar</h1>;
}

export default SideBar;
