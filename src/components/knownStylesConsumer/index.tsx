import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './index.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
    // const id = useId();
    // const cssScopeId = useStyleScopeId();    // <-------- ENABLES ALL POSSIBILITIES JUST LIKE useId() did!

    return (<>
        <div>
            <span style={{ color: "gray" }}>CSS CLASS PATHS</span>
            <div style={{ border: "2px dashed red", padding: "5px" }} class={"wobble"}>
                One scope up (parent)
            </div>
            <div style={{ border: "2px dashed red", padding: "5px" }} class={"../wobble"}>
                One scope up (parent)
            </div>
            <div style={{ border: "2px dashed red", padding: "5px" }} class={"../../wobble"}>
                Two scopes up (parent's parent)
            </div>
            <div style={{ border: "2px dashed red", padding: "5px" }} class={"!!/wobble"}>
                Nearest pinned scope
            </div>
            
            <div style={{ border: "2px dashed red", padding: "5px" }} class={"./wobble"}>
                Current scope
            </div>
        </div>
    </>
    );
});
