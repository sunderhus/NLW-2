import { withInfo } from "@storybook/addon-info";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

addDecorator(withInfo);
addDecorator(centered);
