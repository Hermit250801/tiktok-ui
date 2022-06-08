import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = true;

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@kabutoraiger',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const handleChange = (menuItem) => {
        console.log(menuItem);
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            className={cx('search-input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // <button className={cx('action-btn')}>
                        //     <FontAwesomeIcon icon={faMessage} />
                        // </button>
                        <div className={cx('actions')}>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </div>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/originals/3a/2c/5d/3a2c5dfd32ee2aa2e7e1749374058a20.jpg"
                                alt="Hermit"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
