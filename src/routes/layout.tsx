import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <main>
        <Link href="/">Go Home</Link>

        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
