import { useState } from "react"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Admin() {
  const [nameUrl, setNameUrl] = useState('')
  const [url, setUrl] = useState('')
  const [backgroundLinkColor, setBackgroundLinkColor] = useState('#f1f1f1')
  const [textColor, setTextColor] = useState('#121212')

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <Header/>
      
      <form className="mt-8 flex flex-col w-full max-w-xl ">
        <label className="text-white my-2 font-medium" >Nome do link</label>
        <Input
          placeholder="Digite o nome do link..."
          value={nameUrl}
          onChange={(e) => setNameUrl(e.target.value)}
        />

        <label className="text-white my-2 font-medium" >URL do link</label>
        <Input
          placeholder="Digite a URL..."
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-2">
            <label className="text-white font-medium mt-2 ">Fundo do link</label>
            <input type="color" value={backgroundLinkColor} onChange={(e => setBackgroundLinkColor(e.target.value))} />
          </div>

          <div className="flex gap-2">
            <label className="text-white font-medium mt-2">Cor do link</label>
            <input type="color" value={textColor} onChange={(e => setTextColor(e.target.value))}/>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center border py-4 border-gray-500 rounded ">
          <label className="text-white font-medium">Veja como está ficando: </label>
          <section className="w-11/12 max-w-lg text-center rounded mt-8 py-2" style={{ background: backgroundLinkColor}}>
            <p className="font-medium" style={{color: textColor}}>{nameUrl}</p>
          </section>
        </div>
      </form>
    </div>
  )
}