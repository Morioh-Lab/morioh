// import { register } from './utils';
import "./morioh.scss";
// import { register, extend } from './base';
import Button from './components/button';
import ButtonIcon from './components/button-icon';
import Checkbox from './components/checkbox';
import Card from './components/card';
import Dialog from './components/dialog';
import NavBar from './components/navbar';
import Grid from './components/grid';
import FormField from './components/form-field';
import List from './components/list';
import Drawer from './components/drawer';

import Ripple from './directives/ripple';

const directives = {
    Ripple
}

const components = {
    Button,
    ButtonIcon,
    Checkbox,
    Card,
    Dialog,
    NavBar,
    Grid,
    FormField,
    List,
    Drawer
};

const MoriohUI = {
    install(vm) {
        for (let key in components) {            
            vm.use(components[key]);
        }

        for (let key in directives) {
            vm.use(directives[key]);
        }
    }
}

export {
    Button,
    ButtonIcon,
    Checkbox,
    Card,
    Dialog,
    NavBar,
    Grid,
    FormField,
    List,
    Drawer
}

// console.log(List);

export default MoriohUI;

// register(MoriohUI);