
import { MDCRipple } from '@material/ripple';

import { directive } from '../../utils';

const Ripple = {
    name: 'ripple',
    // inserted(el, binding) {
    //     el.$ripple = MDCRipple.attachTo(el);
    //     el.$ripple.addClass('mdc-ripple-surface');
    // },
    mounted(el, { value, arg, modifiers }) {
        // updateRipple('add', el, binding);

        if (!el.$ripple) {
            el.$ripple = MDCRipple.attachTo(el);
            // el.classList.add('mdc-ripple-surface');
            el.$ripple.unbounded = modifiers.unbounded;
        }

    },
    // updated(el,{ value, arg, modifiers}) {
    //     if (el.$ripple) {
    //         const css = value === 'accent' ? 'mdc-ripple-surface--primary' : 'mdc-ripple-surface--accent';
    //         el.classList.add(css);
            
    //     }

    // },
    unmounted(el) {
        if (el.$ripple) {
            el.$ripple.destroy();
        }
    }
}

export default directive({ Ripple });

