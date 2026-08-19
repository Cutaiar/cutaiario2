import { A } from "./anchor";
import { CheekySun } from "./cheeky-sun";

type Link = { id: string; href: string; label: React.ReactNode };

const links: Link[] = [
  {
    id: "github",
    href: "https://github.com/cutaiar",
    label: "github.com/cutaiar",
  },
  {
    id: "linkedin",
    href: " https://linkedin.com/in/dilloncutaiar",
    label: "in/dilloncutaiar",
  },
  {
    id: "email",
    href: "mailto:dmcutaiar@gmail.com",
    label: "dmcutaiar@gmail.com",
  },
  {
    id: "resume",
    href: "https://drive.google.com/file/d/1SA7xbLJLh18Iu7CuZ0hurafLkWWBjXMO/view?usp=sharing",
    label: "resume",
  },
];

const tinkering: Link[] = [
  {
    id: "hyperspace",
    href: "https://hyperspace.cutaiar.io",
    label: "hyperspace",
  },
  { id: "flow", href: "https://wisprflow.ai/", label: "Flow, of course" },
  {
    id: "rebeat",
    href: "https://rebeat.cutaiar.io/",
    label: "Thankful for music + running",
  },
  {
    id: "sorbet",
    href: "https://mysorbet.xyz",
    label: "Sorbet, a global wallet",
  },
  {
    id: "easing",
    href: "https://easing.cutaiar.io",
    label: "Exploring easing curves",
  },
  {
    id: "morris",
    href: "https://morris.cutaiar.io",
    label: "Morris impl as a reducer",
  },
  {
    id: "sandpiles",
    href: "https://sandpiles.cutaiar.io",
    label: "A slow impl of sand piles",
  },
  {
    id: "sudoku",
    href: "https://sudoku.cutaiar.io",
    label: "Checking a sudoku",
  },
  {
    id: "pendulums",
    href: "https://sync-pendulums.netlify.app",
    label: "Some pendulums",
  },
];

const LinkList = ({ items }: { items: Link[] }) => (
  <ol className="space-y-1.5">
    {items.map((l) => (
      <li key={l.id}>
        <A id={l.id} href={l.href}>
          {l.label}
        </A>
      </li>
    ))}
  </ol>
);

export const App = () => {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center size-full font-anon">
      <CheekySun />
      <div className="space-y-4 p-8 w-fit overflow-y-auto animate-in fade-in ease-in-cubic duration-[700ms]">
        <h1 className="text-2xl font-bold">DILLON CUTAIAR</h1>
        <p className="max-w-prose text-justify">
          I'm a <strong>Software Engineer</strong> and <strong>Creative</strong>
          . I started my career studying CS, Philosophy, and Math, focusing on
          HCI and immersive experiences at Virginia Tech. Then, I started in
          industry as a full stack engineer at Microsoft reimagining CRM. After
          a break spent running, climbing, and skiing, I joined the world of
          startups and Web3 via{" "}
          <A href="https://backdropbuild.com">Backdrop Build</A>. Here, I worked
          with <A href="https://github.com/nebolax">Alexey</A> on{" "}
          <A href={"https://github.com/smoothusdt/smooth-pwa"}>SmoothUSDT</A> -
          a PWA wallet for USDT on Tron. For the next year, I led engineering at{" "}
          <A href={"https://mysorbet.xyz"}>Sorbet</A> where I built, maintained,
          and deployed a global stablecoin wallet for freelancers. Now, I'm
          building product to reimagine what interacting with a computer looks
          like at <A href={"https://wispr.ai"}>Wispr Flow</A>.
        </p>
        <div className="flex flex-col justify-between sm:flex-row gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Links</h2>
            <LinkList items={links} />
          </div>

          <div className="space-y-2 sm:text-right">
            <h2 className="text-xl font-bold">Recent tinkering</h2>
            <LinkList items={tinkering} />
          </div>
        </div>
      </div>
    </main>
  );
};
