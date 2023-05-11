import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Rating from '@/components/views/Features/Rating'
const install = () => {
    return (
        <div>
            <Layout>
                <div className='bg-[#F6FBFD] py-16 text-center mb-16 px-5'>
                    <h1 className='text-[#4B4B4B] text-2xl sm:text-[48px] font-[700px] mb-10'>Guia de instalação do Spyzie para Android</h1>
                    <p className='text-[#6B7C93] text-base sm:text-lg mb-8 font-[400px]'>Com o Spyzie, o rastreamento de telefones Android é muito fácil.</p>
                    <p className='text-[#6B7C93] text-base sm:text-lg  font-[400px]'>Aprender <span className='text-[#828AE6]'><u>como rastrear iphone e ipad</u></span> em vez de.</p>
                </div>
                <div className='max-w-[1100px] mx-auto px-5'>
                    <p className='text-[#3B3B3B] text-base mb-12'>O Spyzie oferece o melhor serviço de rastreamento de Android que leva apenas alguns minutos para configurar. Tudo o que você precisa é de um acesso único ao telefone de destino e você será bom para a eternidade. Aqui estão os passos a seguir:</p>
                    <h1 className='text-[#3B3B3B] text-xl sm:text-2xl mb-8 font-[400px]'>Parte um: coisas que você precisa para rastrear um telefone Android</h1>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                        <div >
                            <h1 className='text-[#3B3B3B] text-lg font-[700px]'>Assinatura do Spyzie</h1>
                            <p className='text-[#3B3B3B] text-base font-[400px]'>Uma assinatura do Spyzie dá acesso ao painel do Spyzie e a todos os seus recursos.</p>
                        </div>
                        <div>
                            <h1 className='text-[#3B3B3B] text-lg font-[700px]'>Um-tempo Acesso ao telefone de destino</h1>
                            <p className='text-[#3B3B3B] text-base font-[400px]'>O rastreamento de telefone Android requer acesso único ao telefone por alguns minutos.</p>
                        </div>


                    </div>

                    <h3 className='text-[#3B3B3B] text-2xl mb-8 font-[400px]'>Parte dois: etapas para rastrear um telefone ou tablet Android</h3>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-6'>Siga estas três etapas simples para rastrear telefones Android:</p>
                    <p className='text-[#3B3B3B] text-base font-[400px]'>1. Obtenha uma assinatura do Spyzie para telefones Android.</p>
                    <p className='text-[#3B3B3B] text-base font-[400px]'>2. Instale o Spyzie no telefone Android de destino.</p>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-6'>3. Comece a rastrear o telefone deles usando o Spyzie.</p>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-7'>Aqui está uma descrição detalhada das etapas:</p>
                    <h2 className='text-[#3B3B3B] text-lg font-[700px] mb-5 '>Passo 1. Criando uma conta Spyzie com assinatura</h2>
                    <div className=' bg-white border-[1px] pt-8 px-4 max-w-[900px] mx-auto mb-8 boxshadow'>
                        <Rating />
                    </div>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>1. Visite https://spyzie.io no navegador da web de qualquer dispositivo. Clique no botão Inscreva-se no canto superior direito. Inscreva-se no Spyzie usando seu endereço de e-mail e escolha qualquer senha.</p>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>2. Após o processo de inscrição, selecione um plano de assinatura para telefones Android. Depois de obter uma assinatura, você será redirecionado para a página de configuração do Spyzie.</p>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>Forneça qualquer nome para o telefone que você deseja monitorar.</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgone.png"} alt="img" width={880} height={600} />
                    </div>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>3. No dispositivo de destino, vá para Configurações Segurança Ative o recurso que diz Instalar aplicativos de fontes desconhecidas</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgtwo.jpg"} alt="img" width={880} height={600} className='mb-6' />
                    </div>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>No dispositivo de destino vá para Configurações Google Segurança Google Play Protect. Desative os recursos
                        que dizem Melhorar a detecção de aplicativos nocivos e Verificar o dispositivo em busca de ameaças à segurança.</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgthree.jpg"} alt="img" width={880} height={600} className='mb-6' />
                    </div>

                    <h1 className='text-[#3B3B3B] text-lg font-[700px] mb-7'>Etapa 2. Instale o aplicativo Spyzie no telefone de destino</h1>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>1. Depois de concluir a etapa acima, você estará pronto para instalar o Spyzie no dispositivo Android de destino. Durante a configuração do Spyzie, você verá o link para baixar o Spyzie. Você pode usar este link para baixar e instalar o Spyzie no telefone de destino. Levará apenas alguns segundos, pois o tamanho do aplicativo é muito pequeno.</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgfour.jpg"} alt="img" width={880} height={600} className='mb-6' />
                    </div>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>2 Assim que o Spyzie estiver instalado leia a política de privacidade e clique em Concordo. Entre na sua conta do Spyzie no aplicativo com o nome de usuário e a senha que você criou anteriormente.</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgfive.jpg"} alt="img" width={725} height={600} className='mb-6' />
                    </div>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5' >3. Quase pronto! Conceda todas as permissões exigidas pelo aplicativo Spyzie no telefone de destino. Você então tem a opção de ocultar o ícone do aplicativo ou exibi-lo. Se você optar por ocultar o ícone do Spyzie, o Spyzie entrará no modo furtivo e ficará invisível. Você pode iniciar o aplicativo novamente se quiser, discando **001** no telefone de destino.</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgsix.jpg"} alt="img" width={880} height={600} className='mb-6' />
                    </div>
                    <h3 className='text-[#3B3B3B] text-lg font-[700px] mb-7'>Etapa 3. Comece a monitorar o telefone</h3>
                    <p className='text-[#3B3B3B] text-base font-[400px] mb-5'>Agora você pode monitorar o dispositivo de destino a qualquer momento. De qualquer navegador da web, acesse o site do Spyzie e faça login na sua conta do Spyzie. Você verá seu painel personalizado com todos os recursos do Spyzie disponíveis no lado esquerdo. Para usar qualquer recurso, basta clicar sobre ele.</p>
                    <div className='flex justify-center'>
                        <Image src={"/imgseven.png"} alt="img" width={880} height={600} className='mb-6' />
                    </div>
                    < p className='text-[#3B3B3B] text-base font-[400px] mb-5'>Durante o primeiro uso o painel pode demorar um pouco mais para carregar. Isso ocorre porque o Spyzie está sincronizando todos os seus dados. Aguarde durante este tempo de carregamento. Depois que os dados forem sincronizados eles estarão disponíveis em seu painel. Você pode atualizar os dados sempre que quiser usando o botão Atualizar na extremidade superior do painel. Lembre-se de que o Spyzie sincroniza novos dados apenas quando o dispositivo de destino está conectado à Internet.</p>
                    <div className='flex justify-center'>
                        <Image src={"/final.png"} alt="img" width={880} height={600} className='mb-10' />
                    </div>
                    <h5 className='text-[#3B3B3B] text-2xl font-[400px] mb-5'>Parte Três: Alguns dos Recursos do Spyzie:</h5>
                    <div className='text-[#3B3B3B] text-base grid grid-cols-1 sm:grid-cols-3 gap-x-7 max-w-2xl mb-40'>
                        <p className='mb-3'><u>Monitoramento de chamadas</u></p>
                        <p><u>Visualizador de Fotos e Vídeos</u></p>
                        <p><u> Monitoramento da Agenda</u></p>
                        <p className='mb-3'> <u>Monitoramento de mensagens</u></p>
                        <p> <u>Monitoramento de mídia social</u></p>
                        <p> <u>Monitoramento do histórico do navegador</u></p>
                        <p> <u>Rastreamento de localização</u></p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default install