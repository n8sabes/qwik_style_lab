import { component$, Slot, useId, useStylesScoped$ } from '@builder.io/qwik';
import styles from './index.css?inline';

export default component$((props: { useUniqueNames: boolean }) => {
    useStylesScoped$(styles);
    const id = useId();

    return (<>
        <div style={{ border: "2px dashed green", padding: "5px" }}>
            shake id = {id}
            <div class={props.useUniqueNames ? "unique-magic-s" : "magic"}>
                <span><Slot /></span>
            </div>
        </div>
    </>
    );
});
