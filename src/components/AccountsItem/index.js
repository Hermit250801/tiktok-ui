import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.18169-9/557850_419488744734876_243075184_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=RRqiowNr43MAX9CV_WY&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_2v9W0VD_r_RoPxHF1ER4LuhBCM1BEc6j45_Ww03VLSw&oe=62C0CB98"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('userName')}>nguyenvanaa</span>
            </div>
        </div>
    );
}

export default AccountsItem;
