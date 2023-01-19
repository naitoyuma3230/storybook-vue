import MyCard from '../components/MyCard.vue';

export default {
  title: 'MyCard',
  component: MyCard,
  argTypes:{
    mainTitle:{
      control: { type: 'inline-radio' },
      options: ['Radio-A', 'Radio-B'],
    },
    subTitle:{
      control: { type: 'text' },
    },
    tab:{
      control: { type: 'object' },
    },
  }
};

const MyCardTemplate = (args) => ({
  components: { MyCard },
  setup() {
    return { args };
  },
  template: '<MyCard v-bind="args"/>',
});

export const FirstStory = MyCardTemplate.bind({});

// 作成したコンポーネントのPropsのサンプル値を渡す。
FirstStory.args = {
  mainTitle:'Radio-A',
  subTitle: 'Secondary',
  tab:["HELLO","WORLD","HI!"]
};
