import React from 'react';
import { contextMenuForm } from '@bodiless/core';
import { ComponentSelectorProps, ComponentSelectorUI } from './types';
import ComponentSelector from '.';
import { EditFlowContainerProps } from '../FlowContainer/types';
/**
 * Returns a component selector wrapped in a context menu form.
 *
 * @param props Props passed to the edit flow container.
 * @param onSelect The action to perform when a component is selected.
 */
const componentSelectorForm = (
  // @TODO: Separate component selector props from edit flow container props.
  props: EditFlowContainerProps,
  onSelect: ComponentSelectorProps['onSelect'],
) => contextMenuForm({
  initialValues: { selection: '' },
  hasSubmit: false,
})(
  ({ ui, closeForm }) => (
    <ComponentSelector
      {...props}
      ui={{ ...ui as ComponentSelectorUI, ...props.ui as ComponentSelectorUI }}
      closeForm={closeForm}
      onSelect={(...args) => { onSelect(...args); closeForm(); }}
      components={Object.values(props.components)}
    />
  ),
);

export default componentSelectorForm;
