import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ to, href, primary = false, outline = false, small = 'medium', onClick, children, ...passPort }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passPort,
    };
    const classes = cx('wrapper', { primary, outline, small });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
