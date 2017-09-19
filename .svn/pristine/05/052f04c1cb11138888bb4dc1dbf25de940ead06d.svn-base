// DwyerUI 总输出
import './styles/dwyer-ui.css';

import Alert from './components/Alert/';
import Badge from './components/Badge/';
import {
  Button,
  ButtonGroup
} from './components/Button/';
import {
  Checkbox,
  CheckboxGroup
} from './components/CheckBox/';
import Col from './components/Col/';
import {
  dialogAlert,
  dialogConfirm,
  dialogToast
} from './components/Dialog/';
import Icon from './components/Icon/';
import Input from './components/Input/';
import Loading from './components/Loading/';
import Progress from './components/Progress/';
import {
  Radio,
  RadioGroup
} from './components/Radio/';
import Row from './components/Row/';
import Switch from './components/Switch/';


const components = [
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Icon,
  Input,
  Loading,
  Progress,
  Radio,
  RadioGroup,
  Row,
  Switch
];


const install = function(Vue, opts = {}) {
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$dialog = {
    alert: dialogAlert,
    confirm: dialogConfirm,
    toast: dialogToast
  }

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};


export default install;