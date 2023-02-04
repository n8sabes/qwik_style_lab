import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';

export const DOC_NAME = "Lab #2";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <h1>
        {DOC_NAME} <span class="lightning">⚡️</span>
      </h1>
      <p>
        This lab defines default styles in a css text block or file.
      </p>
      <p>
        To keep style behavior consistent throughout Qwik, css style blocks must be handled the same,
        regardless if in a string or file. In this lab, we will define default styles in a css text block or file.
      </p>
      <p>
        The 'default' style is comprised of all CSS Declarations that are not contained
        within a Ruleset Declaration Block. This is very straight forward, and follows
        the same concept of how CSS is already written, plus these 'default' un-blocked declarations.
        These unblocked declarations (defaults) are applied to the target element only.
        <i> A `qDefault` classname could be used, if need be.</i>
      </p>
      <p>
        A CSS$ style looks as follows. <i>The `@import` is the only at-rule now supported, initially.</i>
        A CSS-in-JS object could alternatively be passed to CSS$ once the right schema is selected.
      </p>
      <p style={{ whiteSpace: "pre", color: "blue", fontSize: "0.8em"}}>
        {`
        <div style={CSS$(\`
          @keyframes magic-anim {
              from {
                  -webkit-transform: translate3d(0, 0, 0);
                  transform: translate3d(0, 0, 0);
              }

              to {
                  -webkit-transform: translate3d(0, -100px, 0);
                  transform: translate3d(0, -100px, 0);
              }
          }

          .big-magic {
              font-size: 1.7em;
              font-weight: 900;
              color: blue;
              text-align: center;
              animation: magic-anim 1s alternate cubic-bezier(.5, 0.05, 1, .5) infinite;
          }

          /* Default Style (outside of any ruleset declaraton block) */
          display: grid;
          place-items: center;
          min-height: 200px;
          box-sizing: border-box;
          padding: 20px;
          color: orange;
          font-weight: 700;
          border: 1px solid orange;
          animation: magic-anim 1s alternate cubic-bezier(.5, 0.05, 1, .5) infinite;
        \`)} />

`}
      </p>
      <div class="qDefault">
        <div class="big-magic">Big Magic!</div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: DOC_NAME,
  meta: [
    {
      name: 'description',
      content: `${DOC_NAME} description`,
    },
  ],
};
