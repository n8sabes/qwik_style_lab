import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import KnownStylesHost from '~/components/knownStylesHost';

export const DOC_NAME = "Lab #3";

export default component$(() => {
  const makeUnique = useSignal(true)

  return (
    <div>
      <h1>
        {DOC_NAME} <span class="lightning">⚡️</span>
      </h1>
      <p>
        This lab explains <b>useScopeId()</b>
      </p>
      <p>
      <b>useScopeId()</b> is just as important as <b>useId()</b>. This allows access to the classes that get scoped
        in .css files, CSS-in-JS objects, and as strings to CSS$. The source shows two implementations,
        one using a path syntax to access known paren classnames (that have been locally scoped), and a
        minimal funciton useScopeId() requirement that enables the developer to implement any type of scope
        control necessary for the stack.
      </p>
      <div style={{ padding: "20px" }} onClick$={() => makeUnique.value = !makeUnique.value}>
        <input type="checkbox" checked={makeUnique.value} />
        <label class="container">No name collisions <b>[{makeUnique.value ? "This is how it should look" : "This is how Qwik does it now -- broken"}]</b></label>
      </div>
      <div style={{ height: "500px" }}>
        <KnownStylesHost useUniqueNames={makeUnique.value} >Shake it!</KnownStylesHost>
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
