import { User } from "lucide-react";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[228px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full "></div>
        {/* Stripes */}
        <div className="absolute bottom-0 right-0 top-0 w-2 border-r border-white/10 bg-stripes"></div>

        <a href="" className="flex items-center gap-3 text-left">
          <div className="h=10 flex w-10 items-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug"></p>
        </a>
      </div>

      {/* Right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="#" className="underline hover:text-gray-50">
              Criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
