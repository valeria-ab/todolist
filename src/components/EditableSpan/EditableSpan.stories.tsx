import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: 'TODOLIST/EditableSpan',
    component: EditableSpan
} as ComponentMeta<typeof EditableSpan>;

const EditableSpanTemplate: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanStory = EditableSpanTemplate.bind({});
EditableSpanStory.args = {
    title: "Start value",
    onChange: action('Title changed')
};

