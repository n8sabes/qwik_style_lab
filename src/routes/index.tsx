import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export const DOC_NAME = "Qwik Style Lab";

export default component$(() => {
  return (
    <div>
      <h1>
        {DOC_NAME} <span class="lightning">⚡️</span>
      </h1>
      <div>
        <b>This is about scoping a WHOLE STYLE including its dependencies</b> not 'atomic style' as defined elsewhere.
        The use of the word atomic here means "all the pieces" that make up a
        style, inclusive of selectors (classnames and ids), @keyframe and @media query at-rules.
      </div>
      <br />
      <ul>
        <li>
          <Link href='/lab1'>Lab 1 - Scope Declaration Blocks AND Rulesets</Link>
        </li>
        <li>
          <Link href='/lab2'>Lab 2 - CSS$ vanilla css or CSS-in-JS with default style</Link>
        </li>
        <li>
          <Link href='/lab3'>Lab 3 - useStyleScopeId() just as important as useId()</Link>
        </li>
      </ul>
      <br />
      Videos:
      <ul>
        <li>
          <Link href='https://youtu.be/LEcW69SULRw'>Video - Namespace and CSS$ default styles</Link>
        </li>
        <li>
          <Link href='https://youtu.be/jiujbrVuj2k'>Video - useStyleScopeId</Link>
        </li>
      </ul>
      Resources:
      <ul>
        <li>
          <Link href='https://github.com/n8sabes/qwik_style_lab'>Qwik Style Lab Repo</Link>
        </li>
        <li>
          <Link href='https://stackblitz.com/edit/qwik-starter-1mn618?file=README.md'>StackBlitz Demo</Link>
        </li>
      </ul>
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
