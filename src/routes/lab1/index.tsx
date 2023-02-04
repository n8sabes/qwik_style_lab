import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Shake from '~/components/shake';
import Bounce from '~/components/bounce';

export const DOC_NAME = "Lab #1";

export default component$(() => {
  const makeUnique = useSignal(true)

  return (
    <div>
      <h1>
        {DOC_NAME} <span class="lightning">⚡️</span>
      </h1>
      <p>
        This lab demonstrates keyframe name conflicts of two different components (shake and bounce) override the same keyframe namespace.
      </p>
      <p>
        To be truly scoped and atomic, <b>ALL named Declaration Blocks AND Rulesets</b> of
        the css (text block or file) must be unique to the component. <i>This includes classname and ID selectors,
        keyframes, and media queries.</i>
      </p>
      <div style={{ padding: "20px" }} onClick$={() => makeUnique.value = !makeUnique.value}>
        <input type="checkbox" checked={makeUnique.value} />
        <label class="container">No name collisions <b>[{makeUnique.value ? "This is how it should look" : "This is how Qwik does it now -- BROKEN"}]</b></label>
      </div>
      <div style={{ height: "500px" }}>
        <Shake useUniqueNames={makeUnique.value} >Shake it!</Shake>
        <Bounce useUniqueNames={makeUnique.value}>Bouncin' Kangaroos</Bounce>
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
