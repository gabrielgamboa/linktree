import { FormEvent, useEffect, useState } from "react"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiLink2, FiTrash } from 'react-icons/fi'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

interface LinkProps {
  id: string
  created: string
  url: string
  name: string
  bg: string
  color: string
}

export function Admin() {
  const [nameUrl, setNameUrl] = useState('')
  const [url, setUrl] = useState('')
  const [backgroundLinkColor, setBackgroundLinkColor] = useState('#f1f1f1')
  const [textColor, setTextColor] = useState('#121212')
  const [links, setLinks] = useState<LinkProps[]>([])

  function handleRegisterLink(e: FormEvent) {
    e.preventDefault()

    if (!url || !nameUrl) {
      alert('Preencha todos os campos')
      return
    }

    addDoc(collection(db, 'links'), {
      name: nameUrl,
      link: url,
      bg: backgroundLinkColor,
      color: textColor,
      created: new Date(),
    })
    .then(() => {
      console.log('Cadastrado com sucesso')
    })
    .catch((e) => {
      console.log(e)
    })

    setUrl('')
    setNameUrl('')
  }

  async function handleDeleteLink(id: string) {
    const docRef = doc(db, 'links', id)
    await deleteDoc(docRef)
  }

  useEffect(() => {
    const collectionLink = collection(db, 'links')
    const queryRef = query(collectionLink, orderBy('created', 'asc'))

    const unsub = onSnapshot(queryRef, (snapshot) => {
      const temporaryLinks = [] as LinkProps[]

      snapshot.forEach(link => {
        const { created, url, name, bg, color } = link.data()
        temporaryLinks.push({
          id: link.id,
          created,
          url,
          name,
          bg,
          color
        })
      })
      setLinks(temporaryLinks)
    })

    return () => {
      unsub()
    }

  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <Header/>
      
      <form onSubmit={handleRegisterLink} className="mt-8 flex flex-col w-full max-w-xl mb-9 ">
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

        {nameUrl !== '' && (
          <div className="flex flex-col justify-center items-center border py-4 mt-4 mb-7 border-gray-500 rounded ">
            <label className="text-white font-medium">Veja como está ficando: </label>
            <section className="w-11/12 max-w-lg text-center rounded mt-8 py-2" style={{ background: backgroundLinkColor}}>
              <p className="font-medium" style={{color: textColor}}>{nameUrl}</p>
            </section>
          </div>
        )}

        <button className="flex justify-center items-center gap-2 h-9 bg-blue-700 text-white rounded-md">Cadastrar <FiLink2/></button>
      </form>

      <h2 className="text-white text-2xl mb-4" >Meus links</h2>

      {links.map(link => {
        return (
          <article key={link.id} className="rounded py-3 px-2 mb-2 flex justify-between items-center max-w-xl w-11/12 select-none" style={{ background: link.bg, color: link.color }}>
            <p>{link.name}</p>
            <div>
              <button onClick={() => handleDeleteLink(link.id)} className="border border-dashed p-1 rounded bg-neutral-900">
                <FiTrash size={18} color="#FFF"/>
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}