/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SectionWithChildren,
  Leadspace,
  Testimonial,
  InfoGrid,
  TestimonialFromClients,
} from "@yazan-getscale/getscale-storybook";
import MultiStepFormPage from "../Form";

import Image from "next/image";
import { FC, ReactNode } from "react";

export interface ComponentData {
  type: string;
  props: {
    children?: ComponentData | ComponentData[] | ReactNode;
    [key: string]: any;
  };
}

const componentMapping: { [key: string]: FC<any> } = {
  SectionWithChildren,
  Leadspace,
  Testimonial,
  InfoGrid,
  TestimonialFromClients,
  Image,
  div: (props) => <div {...props}>{props.children}</div>,
  h1: (props) => <h1 {...props}>{props.children}</h1>,
  a: (props) => <a {...props}>{props.children}</a>,
  Button: ({ label, ...props }) => <button {...props}>{label}</button>,
  p: (props) => <p {...props}>{props.children}</p>,
  MultiStepFormPage,
};

const renderComponent = (componentData: ComponentData, key?: React.Key) => {
  if (!componentData) return null;

  const { type, props } = componentData;

  if (typeof componentData === "string" || typeof componentData === "number") {
    return componentData;
  }

  const Component = componentMapping[type];

  if (!Component) {
    console.warn(`Component type "${type}" not found.`);
    return null;
  }

  return (
    <Component key={key} {...props}>
      {Array.isArray(props.children)
        ? props.children.map((child, index) =>
            renderComponent(child as ComponentData, index)
          )
        : renderComponent(props.children as ComponentData)}
    </Component>
  );
};

export { renderComponent };
