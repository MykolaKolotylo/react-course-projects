import {useState} from 'react';

import {EXAMPLES} from '../utils/examples-data';
import TabButton from "../UI/TabButton";
import Tabs from "../UI/Tabs";

export default function Examples() {
    const [tab, setTab] = useState('components');

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <Tabs
                buttons={
                <>
                    <TabButton isTabSelected={tab === 'components'}
                               onTabSelect={() => setTab('components')}>Components</TabButton>
                    <TabButton isTabSelected={tab === 'jsx'} onTabSelect={() => setTab('jsx')}>JSX</TabButton>
                    <TabButton isTabSelected={tab === 'props'} onTabSelect={() => setTab('props')}>Props</TabButton>
                    <TabButton isTabSelected={tab === 'state'} onTabSelect={() => setTab('state')}>State</TabButton>
                </>
            }>
                <section id='tab-content'>
                    <h3>{EXAMPLES[tab].title}</h3>
                    <p>{EXAMPLES[tab].description}</p>
                    <pre>
                    <code>{EXAMPLES[tab].code}</code>
                </pre>
                </section>
            </Tabs>


        </section>
    );
}
