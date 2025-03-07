/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Information } from '@carbon/icons-react';
import React from 'react';
import { default as Button } from '../Button';
import { default as Link } from '../Link';
import {
  ToggletipLabel,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  ToggletipActions,
} from '../Toggletip';
import mdx from './Toggletip.mdx';

export default {
  title: 'Components/Toggletip',
  component: Toggletip,
  subcomponents: {
    ToggletipLabel,
    ToggletipButton,
    ToggletipContent,
    ToggletipActions,
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ToggletipLabel>Toggletip label</ToggletipLabel>
      <Toggletip defaultOpen>
        <ToggletipButton label="Show information">
          <Information />
        </ToggletipButton>
        <ToggletipContent>
          <p>
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <ToggletipActions>
            <Link href="#">Link action</Link>
            <Button size="sm">Button</Button>
          </ToggletipActions>
        </ToggletipContent>
      </Toggletip>
    </div>
  );
};

const PlaygroundStory = (controls) => {
  const { align } = controls;
  return (
    <>
      <ToggletipLabel>Toggletip label</ToggletipLabel>
      <Toggletip align={align} defaultOpen>
        <ToggletipButton label="Show information">
          <Information />
        </ToggletipButton>
        <ToggletipContent>
          <p>
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <ToggletipActions>
            <Link href="#">Link action</Link>
            <Button size="sm">Button</Button>
          </ToggletipActions>
        </ToggletipContent>
      </Toggletip>
    </>
  );
};

export const Playground = PlaygroundStory.bind({});

Playground.argTypes = {
  align: {
    options: ['top', 'bottom', 'left', 'right'],
    control: {
      type: 'select',
    },
  },
};

Playground.story = {
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {story()}
      </div>
    ),
  ],
};
