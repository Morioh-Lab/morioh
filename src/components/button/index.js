// import './_index.scss';
// import Button from './index.vue';
// import ButtonIcon from './icon.vue';

// const __Plugin = {
//     install: function (vm) {
//         vm.component(Button.name, Button);
//         vm.component(ButtonIcon.name, ButtonIcon);
//     }
// }

// export default __Plugin;
// export { Button, ButtonIcon };


import './_index.scss';
import { component } from '../../utils';
import Button from './index.vue';
export { Button };

export default component({ Button });