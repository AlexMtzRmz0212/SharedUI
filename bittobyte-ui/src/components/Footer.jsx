import { Code2, Cpu, GitBranch } from 'lucide-react';

const Footer = () => (
  <footer className="relative border-t border-white/5">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Code2 className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight">BitToByte</span>
          </div>
          <p className="mt-3 max-w-xs text-center text-sm text-gray-500 md:text-left">
            A network of automated systems, AI applications, and data
            visualizations.
          </p>
        </div>

        <a
          href="https://github.com/AlexMtzRmz0212"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <GitBranch className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          AlexMtzRmz0212
        </a>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-gray-500 md:flex-row">
        <p className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-gray-600" />
          &copy; {new Date().getFullYear()} BitToByte Network. All rights reserved.
        </p>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          All Systems Online
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
