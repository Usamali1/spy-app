import React from 'react'
import Layout from '@/components/Layout'
import Image from "next/image";
const aboutspy = () => {
  return (
    <div>

      <Layout>

        <div className='bg-[#F6FBFD] py-10 md:py-36 text-center px-5'>
          <h1 className=' text-[#4B4B4B] text-[35px] sm:text-[42px] font-[700px] mb-10'>Sobre o Spyzie</h1>
          <p className='text-[#6B7C93] text-[base] sm:ext-lg font-[400px]'>O Spyzie ajuda você a supervisionar seus filhos e protegê-los de pornografia, predadores online, cyberbullying e outras ameaças.
            Você será capaz de monitorar e armazenar registros de chamadas, mensagens, atividades sociais e muito mais.</p>
        </div>
        <div className='py-10 sm:py-20'>
          <div className='container flex flex-col md:flex-row justify-center gap-6 md:justify-between items-center'>
            <div className='sm:w-[500px]'>
              <h1 className=' text-[#4B4B4B] text-[35px] sm:text-[42px] font-[700px] mb-5 sm:mb-10'>Conheça a equipe Spyzie</h1>
              <p className='text-[#6B7C93] text-base sm:text-lg font-[400px]'>O Spyzie tem uma equipe de indivíduos movidos pela excelência com a expertise em software altamente avaliado que atende às preocupações de segurança dos usuários. Nossa equipe profissional criou o Spyzie como a principal ferramenta de monitoramento. Nosso conjunto de estrategistas de TI e pesquisadores de back-end estão imersos no design, desenvolvimento, atualização e marketing da ferramenta de monitoramento mais eficiente para uso doméstico e parental.</p>
            </div>
            <div>
              <Image
                src={"/people.png"}
                alt={"img"}
                width={500}
                height={360}
              />
            </div>
          </div>
        </div>
        <div className='bg-[#3ECF8E] py-20 text-center px-5'>
          <h1 className='text-[#FFFFFF] text-4xl font-[400px] mb-7 sm:mb-14'>Nossa missão</h1>
          <p className='text-[#FFFFFF] text-base mb-10 font-[400px]'>Buscando a perfeição</p>
          <p className='text-[#FFFFFF] text-base  font-[400px] leading-[24px]'>É melhor usar um endereço de e-mail autêntico para receber as credenciais de login e os links de download do aplicativo após o registro. Para acessar todos os recursos avançados, você pode considerar a compra de uma assinatura premium ou ultimate. Por favor, visite a página de planos de preços e escolha o plano certo para você.</p>
        </div>
        <div className='bg-[#F6FBFD] text-center py-14 mb-14'>
          <h1 className='text-[#3B3B3B] text-4xl font-[400px] mb-10'>Nossos usuários</h1>
          <p className='text-[#6B7C93] text-base mb-10'>No Spyzie, prestamos atenção aos nossos clientes e fornecemos o melhor atendimento ao cliente 24 horas por dia. Sabemos que sem vocês não estaríamos aqui.</p>
          <div className='text-[#3B3B3B] text-2xl sm:text-6xl font-[400px] flex max-w-[1100px] mx-auto gap-6 justify-center sm:justify-between mb-12'>
            <h1 className='block'>1,000,000+ <span className='text-[#6B7C93] text-2xl block'> Usuárias</span>    </h1>
            <h1 className='block'>190+  <span className='text-[#6B7C93] text-2xl block'>Países</span> </h1>
          </div>
          <div className='flex justify-center'>
            <Image
              src={"/map.png"}
              alt={"img"}
              width={672}
              height={279}
            />
          </div>
        </div>
        <div className='text-center px-5'>
          <h1 className='text-[#3B3B3B] text-4xl font-[400px] mb-10'>Contact Us</h1>
          <p className='text-[#6B7C93] text-base mb-10'>Have questions comments feedback, or suggestions for us? Wed love to hear them.

            <br />If you have any refund request, please contact us at <span className='text-[#828AE6]'> support@spyzie.io</span> </p>
          <p className='text-[#6B7C93] text-base mb-20'>If you need technical support, please visit our <span className='text-[#828AE6]'>Support Center</span> or refer to our <span className='text-[#828AE6]'>FAQs</span>.</p>

        </div>
      </Layout>
    </div>
  )
}

export default aboutspy;


