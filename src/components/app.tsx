import { A } from "./anchor";
import { CheekySun } from "./cheeky-sun";

export const App = () => {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center size-full font-anon">
      <CheekySun />
      <div className="space-y-4 p-8 w-fit overflow-y-auto animate-in fade-in ease-in-cubic duration-[700ms]">
        <h1 className="text-2xl font-bold">DILLON CUTAIAR</h1>
        <p className="max-w-prose text-justify">
          I'm a <strong>Software Engineer</strong> and <strong>Creative</strong>
          . After studying Computer Science, Philosophy, and Mathematics at
          Virginia Tech, I worked as a full stack engineer at Microsoft building
          the future of CRM with a lovely team. After a career break spent
          running, climbing, and skiing, I joined the world of startups with{" "}
          <A href="https://backdropbuild.com">Backdrop Build</A>. Here, I worked
          with <A href="https://github.com/nebolax">Alexey</A> on{" "}
          <A href={"https://github.com/smoothusdt/smooth-pwa"}>SmoothUSDT</A> -
          a PWA wallet for USDT on Tron. Now, I'm leading engineering at{" "}
          <A href={"https://mysorbet.xyz"}>Sorbet</A> where I build, maintain,
          and deploy a wallet for freelancers designed for effortless global
          payment.
        </p>
        <div className="flex flex-col justify-between sm:flex-row gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Links</h2>
            <ol>
              <li>
                <A href="https://github.com/cutaiar">github.com/cutaiar</A>
              </li>
              <li>
                <A href=" https://linkedin.com/in/dilloncutaiar">
                  in/dilloncutaiar
                </A>
              </li>
              <li>
                <A href="mailto:dmcutaiar@gmail.com">dmcutaiar@gmail.com</A>
              </li>
              <li>
                <A href="https://drive.google.com/file/d/1SA7xbLJLh18Iu7CuZ0hurafLkWWBjXMO/view?usp=sharing">
                  resume
                </A>
              </li>
            </ol>
          </div>

          <div className="space-y-2 sm:text-right">
            <h2 className="text-xl font-bold">Recent tinkering</h2>
            <ol>
              <li>
                <A href="https://mysorbet.xyz">Sorbet, of course</A>
              </li>
              <li>
                <A href="https://easing.cutaiar.io">Exploring easing curves</A>
              </li>
              <li>
                <A href="https://morris.cutaiar.io">Morris impl as a reducer</A>
              </li>
              <li>
                <A href="https://sandpiles.cutaiar.io">
                  A slow impl of sand piles
                </A>
              </li>
              <li>
                <A href="https://sudoku.cutaiar.io">Checking a sudoku</A>
              </li>
              <li>
                <A href="https://sync-pendulums.netlify.app">Some pendulums</A>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};
