import BreadCrumb from '../components/BreadCrumb.vue';
export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
  
};

const Template = (args) => ({
  components: { BreadCrumb },
  setup() {
    return { args };
  },
  template: '<BreadCrumb v-bind="args"/>',
});

export const Default = Template.bind({});

// 作成したコンポーネントのPropsのサンプル値を渡す。
Default.args = {
  pathNames:["HELLO", "Default", "Path Name"]
};
