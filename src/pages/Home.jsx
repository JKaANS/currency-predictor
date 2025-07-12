// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="bg-[#0f172a] text-[#f1f5f9] min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#facc15]">
            Domine o mercado com inteligência
          </h1>
          <p className="text-lg text-gray-300">
            Converta moedas, visualize previsões e acompanhe tendências com precisão.
          </p>
          <a
            href="/converter"
            className="inline-block bg-[#facc15] text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition"
          >
            Comece agora
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/touro-dourado.png"
            alt="Touro de Ouro"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="bg-[#1e293b] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-[#facc15]">Conversor Inteligente</h3>
            <p className="text-gray-400 mt-2">
              Converta moedas com base em dados atualizados e previsões.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#facc15]">Previsões com IA</h3>
            <p className="text-gray-400 mt-2">
              Visualize tendências futuras com base em aprendizado de máquina.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#facc15]">Mercado em Tempo Real</h3>
            <p className="text-gray-400 mt-2">
              Acompanhe as flutuações do mercado com gráficos dinâmicos.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}