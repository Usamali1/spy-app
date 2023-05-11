import React from 'react'
import Layout from '@/components/Layout'
const contactus = () => {
    return (
        <div>
            <Layout>
                <div className="bg-[#F6FBFD] py-16 text-center  text-[#4B4B4B] text-[48px] font-[700px] mb-16">
                    <h1 className='text-[#3B3B3B] text-[42px] font-[400px] mb-10'>
                        Contate-nos
                    </h1>
                </div>
                <div className='max-w-[1100px] mx-auto px-0'>
                    <p className='text-[#6B7C93] text-base mb-10 font-[400px]'>Tem perguntas, feedback ou sugestões? Gostaríamos muito de ouvir de você!</p>
                    <p className='text-[#6B7C93] text-base mb-10 font-[400px]'>Se você tiver alguma pergunta sobre a Spyzie, pode dar uma olhada em nossa página de <button className='text-[#828AE6]'> <u>FAQs</u></button> e ver se você pode encontrar as respostas lá. Você também pode visitar nosso  <button className='text-[#828AE6]'> <u>Support Center</u></button> para explorar guias detalhados sobre como usar nosso software.</p>
                    <p className='text-[#6B7C93] text-base mb-20 font-[400px] '>Se você quiser obter assistência de nossa equipe de suporte, informe-nos como podemos melhorar a Spyzie, entrar em contato conosco diretamente em  <button className='text-[#828AE6]'> <u>support@spyzie.io. r</u></button>Responderemos à sua mensagem rapidamente, geralmente dentro de 48 horas.</p>
                </div>
            </Layout>
        </div>
    )
}

export default contactus