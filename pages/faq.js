import Head from 'next/head'
import Link from '../src/components/Link'
import FAQScreen from '../src/screens/FAQScreen'

export default FAQScreen;
/*export async function getServerSideProps(context) {
  //Em modo Dev, sempre roda! A cada acesso
  //Roda a casa acesso que você recebe
}*/

// roda somente em build time
//Em modo Dev, sempre roda! A cada acesso
export async function getStaticProps(context) {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
  
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json()
    })
    .then((resposta) => {
      return resposta
    })
  
  return {
    props: {
      faq
    }
  }
}
