import imgComponent from "../../../../assets/components.png";
import imgConfig from "../../../../assets/config.png";
import imgStateMgmt from "../../../../assets/state-mgmt.png";
import imgJsx from "../../../../assets/jsx-ui.png";

export const CORE_CONCEPTS = [
    {
        image: imgComponent,
        title: 'Components',
        description:
            'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        image: imgJsx,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        image: imgConfig,
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        image: imgStateMgmt,
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
];
