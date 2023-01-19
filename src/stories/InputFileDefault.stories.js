import InputFileDefault from '../components/InputFileDefault.vue';

export default {
  title: 'Input/InputFile',
  component: InputFileDefault,
  // TemplateにbindするargsのTypeを設定する
  argTypes: {
    tagType: {
      type: { required: true },
      control: { type: 'inline-radio' },
      options: ['button', 'alink'],
      description: 'choose `<button>` or `<a>` tag to create a button',
      table: {
        defaultValue: {
          summary: 'button',
        },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['save', 'cancel', 'return', 'delete', 'edit', 'add', 'search', 'pdf'],
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
  },

};

// コンポーネントにargsを渡してTemplateを設定する
const Template = (args) => ({
  components: { InputFileDefault },
  setup() {
  // Templateにbindするargsのデフォルト値を設定する
    return { 
      args : {
      label: "ボタン",
      variant: "primary",
      size: "medium",
    } 
  };
  },
  template: '<InputFileDefault v-bind="args"/>',
});

// TemplateにControlesの値をbindする
export const Default = Template.bind({});

