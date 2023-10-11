import { Social } from "../../components/Social";
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <h1 className=" text-white font-bold md:text-4xl text-3xl mt-20">Bem vindo(a) ao meu Linktree!</h1>
      <span className="text-gray-50 mb-7 mt-6">Veja abaixo meus links 👇</span>

      <main className="flex flex-col max-w-xl w-11/12">
        <section className="bg-white w-full rounded-lg text-center mb-4 py-2 select-none transition-transform hover:scale-105">
          <a href="">
            <p className="md:text-lg text-base">
              Canal do youtube
            </p>
          </a>
        </section>

        <footer className="flex justify-center gap-4 my-4">
          <Social url="https://youtube.com.br">
            <FaFacebook size={35} color="#FFF" />
          </Social>
          
          <Social url="https://youtube.com.br">
            <FaYoutube size={35} color="#FFF" />
          </Social>

          <Social url="https://youtube.com.br">
            <FaInstagram size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  )
}