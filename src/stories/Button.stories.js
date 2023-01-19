import Button from "../components/Button.vue"
import ButtonGroup from "../components/ButtonGroup.vue"
export default {
  title: 'Button',
  component: Button,
  // TemplateにbindするargsのTypeを設定する
  argTypes : {
    tagType :{
      control: { type: 'inline-radio' },
      options: ['button', 'anker'],
      defaultValue:'button',
    },
    type: {
      control: { type: 'select' },
      options: ['save', 'cancel', 'return', 'delete', 'edit', 'add', 'search', 'pdf'],
      defaultValue:'delete',
    },
    label: { control: 'text' },
    iconName: { control: 'text' },
    composition: {
      control: { type: 'select' },
      options: ['prefix-icon', 'suffix-icon', 'onlyText', 'onlyIcon'],
      table: {
        defaultValue: {
          summary: 'onlyText',
        },
      },
    },
    isSmall: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

// コンポーネントにargsを渡してTemplateを設定する
const SingleButtonTemplate = (args) => ({
  components: { Button },
  // SingleButtonにbindするargsのデフォルト値を設定する
  setup() {
    return { 
      args
     };
  },
  template: '<Button v-bind="args"/>',
});

// TemplateにControlesの値をbindする
export const SingleButton = SingleButtonTemplate.bind({});

// bind後にデフォルト値を設定する
SingleButton.args = {
  label: "ボタン",
  iconName:"delete",
  tagType:"anker",
  type:"delete"
}


const ButtonGroupTemplate = (args) => ({
  components: { ButtonGroup },
  setup() {
    return { 
      args :  [
        { label: '保存', type: 'save', iconName: 'save',tagType:"anker" },
        {
          label: 'キャンセル',
          type: 'cancel',
          iconName: 'close',
          tagType:"button"
        },
        {
          label: '戻る',
          type: 'return',
          iconName: 'Aarrow-left',
          tagType:"button"
        },
        { label: '削除', type: 'delete', iconName: 'delete',tagType:"button" },
        { label: '編集', type: 'edit', iconName: 'edit',tagType:"button" },
        { label: '新規', type: 'add', iconName: 'plus2',tagType:"button" },
        {
          label: '検索',
          type: 'search',
          iconName: 'search',
          tagType:"button"
        },
        {
          label: 'PDF出力',
          type: 'pdf',
          iconName: 'file-pdf',
          tagType:"button"
        },
      ] 
  };
  },
  template: '<ButtonGroup :argsArray="args"/>',
});

export const Buttons = ButtonGroupTemplate.bind({});
