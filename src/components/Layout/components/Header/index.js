import { useState } from 'react';
import { images } from 'src/assets/images';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// font ani
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
// typpy react js
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { render } from '@testing-library/react';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import AccountItem from 'src/components/AccountItem';
import Button from 'src/components/Button';
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState(['1']);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={`/`}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <h4 className={cx('search-result')}>
                            <PopperWrapper>
                                <div className={cx('heading-title')}>Account</div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </h4>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account or videos..." />
                        {/* clear */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* search btn */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button primary to="/login">
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
