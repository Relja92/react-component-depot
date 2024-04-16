import { BeakerIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface PageConfig {
  path: string;
  name: string;
  icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
    className?: string;
  };
}

const pagesConfig: PageConfig[] = [
  {
    path: "/text-truncate",
    name: "Text Truncate",
    icon: DocumentTextIcon,
  },
  {
    path: "/debounce-input",
    name: "Debounce Input",
    icon: BeakerIcon,
  },
];

export default pagesConfig;
