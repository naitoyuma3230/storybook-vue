// Card.stories.js

import MyCard from "./MyCard.vue";


//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Card",
	component: MyCard,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { MyCard },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
  },
	template: '<MyCard v-bind="args"/>',

});

export const FirstStory = Template.bind({});

// 作成したコンポーネントのPropsのサンプル値を渡す。
FirstStory.args = {
	/* 👇 The args you need here will depend on your component */
	title: "Primary",
	subText: "Secondary",
};
