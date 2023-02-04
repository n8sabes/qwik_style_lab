import { component$, useId, useStylesScoped$ } from '@builder.io/qwik';
import Bounce from '../bounce';
import KnownStylesConsumer from '../knownStylesConsumer';
import Shake from '../shake';
import styles from './index.css?inline';

export default component$((props: { useUniqueNames: boolean }) => {
    useStylesScoped$(styles);
    const id = useId();

    return (<>
        <div class="wobble" style={{ border: "2px dashed blue", padding: "5px" }}>
            knownStylesContainer id = {id}
            <Shake useUniqueNames={props.useUniqueNames} >
                <KnownStylesConsumer />
            </Shake>
            <KnownStylesConsumer />
            <Bounce useUniqueNames={props.useUniqueNames} >
                Bounce
            </Bounce>
        </div>
    </>
    );
});
