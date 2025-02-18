import React from 'react'
import Navbar from '../component/navbar'
import { NavLink } from 'react-router-dom'
import icons from '../constant/icons'
import img from '../constant/images'
import Footer from '../component/footer'

export default function Home() {
  return (
    <div className=' h-auto w-full flex flex-col justify-start items-center'>
        <div className='h-auto w-full flex flex-col justify-center items-center'>
            <Navbar />
            <div className='px-2 md:px-0 w-full max-w-[1200px]  h-auto mt-24 md:mt-44 flex flex-col'>
                <div className='w-full h-auto md:h-[350px] flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4'>
                      <div className=' w-[220px] md:w-full max-w-[400px] bg-primary rounded-full h-12 text-white font-bold flex justify-center flex-col md:flex-row items-center text-[12px] md:text-xl'>
                        Agence de réalisation et de conseil
                      </div>
                      <div className='text-3xl md:text-5xl justify-center items-center text-black font-bold text-center md:text-justify'>
                        Lançons votre <span className='text-primary'>site web</span> en un <span className='text-primary'>temps record</span>.
                      </div>
                      <div className='text-black text-justify'>
                        DevMasterMind vous aides à dépasser vos objectifs techs et marketing grâce à des méthodes  user-driven, des outils de pointe et plus de 10 collaborateurs séniors et junior triés sur le volet.
                      </div>
                      <div className='flex justify-between items-center gap-4 w-full '>
                        <div className='flex flex-col md:flex-row justify-start items-center w-1/3 font-bold text-xs'>
                          <icons.BiSolidNotification className='text-primary text-5xl md:text-xl' /> Site web internet
                        </div>
                        <div className='flex justify-center flex-col md:flex-row items-center w-1/3 font-bold text-xs'>
                          <icons.BiSolidNotification className='text-primary text-5xl md:text-xl' /> Site web internet
                        </div>
                        <div className='flex justify-center flex-col md:flex-row items-center w-1/3 font-bold text-xs'>
                          <icons.BiSolidNotification className='text-primary text-5xl md:text-xl' /> Site web internet
                        </div>
                      </div>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col  justify-center items-center border-4 border-primary rounded-3xl'>
                      <img src={img.D7} alt="DMM developpe TOVIO le site de la marque TOVIO du burkina faso" className='rounded-3xl w-full object-cover' />
                    </div>
                </div>
                <div className='w-full flex justify-start items-center gap-8 mt-10 md:mt-0'>
                  <button className='hover:shadow-sm hover:shadow-black w-[250px] transform duration-300 flex gap-2 font-bold bg-primary rounded-full justify-center items-center text-white px-4 -z-10'>
                    Prendre rendez-vous
                    <icons.MdOutlineArrowRightAlt className='text-5xl' />
                  </button>
                  <button className='hover:shadow-sm hover:shadow-black  duration-300 flex gap-2 font-bold bg-primary w-[250px] rounded-full justify-center items-center text-white px-4'>
                    Prendre rendez-vous
                    <icons.MdOutlineArrowRightAlt className='text-5xl' />
                  </button>
                </div>
            </div>
            <div className='px-2 md:px-0 w-full max-w-[1200px]  flex flex-col md:flex-row justify-between gap-8 items-center mt-10 md:mt-32'>
              <div className=' w-full md:w-2/3 flex flex-col justify-center items-center md:items-start gap-4'>
                <div className='text-5xl text-black font-bold text-center md:text-justify'>
                  Vous souhaiter innover
                </div>
                <div className='w-[100px] text-3xl bg-primary rounded-xl text-white font-bold flex justify-center flex-col md:flex-row items-center h-12 '>
                  mais...
                </div>
                <div className='flex justify-start items-center gap-4 w-full'>
                  <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-primary rounded-full flex justify-center flex-col md:flex-row items-center '>
                    <div className='w-[6px] h-[6px] md:w-[10px] md:h-[10px] bg-white rounded-full '>

                    </div>
                  </div>
                  <div className='w-11/12 md:max-w-[500px] font-bold text-xs md:text-xl'>
                    Vous n’avez pas site web internet. On devient votre partenaire et on vous développe un site web internet a moindre cout pour vous. #ProduitSurMesure
                  </div>
                </div>
                <div className='flex justify-start items-center gap-4 w-full'>
                  <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-primary rounded-full flex justify-center flex-col md:flex-row items-center '>
                    <div className='w-[6px] h-[6px] md:w-[10px] md:h-[10px] bg-white rounded-full '>

                    </div>
                  </div>
                  <div className='w-11/12 max-w-[500px] font-bold text-xs md:text-xl'>
                    Vous n’avez pas site web internet. On devient votre partenaire et on vous développe un site web internet a moindre cout pour vous. #ProduitSurMesure
                  </div>
                </div>
              </div>
              <div className='w-1/3 flex justify-center flex-col md:flex-row items-center'>
                <img src={img.collaborationsIdeas} alt="DMM collabore avec toutes les entreprises pour les aider à avoir une bonne presence sur internet"
                  className=' w-full md:w-2/3'
                />
              </div>
            </div>
            <div className='h-auto -z-10 px-2  py-10 w-full bg-secondary mt-16 md:mt-32 flex justify-center flex-col md:flex-row items-center'>
              <div className='max-w-[1200px] w-full flex gap-6 flex-col justify-start items-center h-full'>
                <div className='text-4xl font-bold text-white'>
                  Pourquoi
                </div>
                <div className='-z-10 p-4 -rotate-3 bg-primary rounded-xl flex justify-center flex-col md:flex-row items-center font-bold text-white text-4xl md:text-6xl'>
                  DevMasterMind
                </div>
                <div className='h-10 border-2 rounded-full w-[120px] text-white font-bold flex justify-center flex-col md:flex-row items-center '>
                  Raison 01
                </div>
                <div className='text-white max-w-[400px] text-xl font-thin text-center'>
                Nous identifions les solutions adéquates pour le développement de votre entreprise.
                </div>
                <div>
                  <img src={img.arrow4} alt="" />
                </div>
                <div className='flex gap-4 w-full justify-center items-center'>
                  <div className='gap-2 w-1/2 md:w-1/3 h-[230px] border-2 rounded-xl flex flex-col justify-start items-center p-4 '>
                    <div className='w-[60px] h-[60px] bg-primary rounded-xl flex justify-center flex-col md:flex-row items-center '>
                      <div className='border-[3px] h-[45px] w-[45px] rounded-full flex justify-center flex-col md:flex-row items-center  '>
                        <icons.TbOval className='text-3xl text-white rotate-12 ' />
                      </div>
                    </div>
                    <div className='font-bold text-white text-center'>
                      Design du site
                    </div>
                    <div className='font-thin text-white text-center text-xs md:text-xl'>
                      Nous impliquons les utilisateurs dès le début afin de comprendre ce qu'ils veulent réellement puis nous leur faisons tester les maquettes
                    </div>
                  </div>
                  <div className='gap-2 w-1/2 md:w-1/3 h-[230px] border-2 rounded-xl flex flex-col justify-start items-center p-4'>
                    <div className='w-[60px] h-[60px] bg-primary rounded-xl flex justify-center flex-col md:flex-row items-center '>
                        <icons.HiOutlineCube className='text-4xl text-white ' />
                    </div>
                    <div className='font-bold text-white text-center'>
                      Presention du design
                    </div>
                    <div className='font-thin text-white text-center text-xs md:text-xl'>
                      Une fois la fonctionnalité testée et approuvée nous la développons en utilisant le minimum de moyens et le mimum de temps
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img.arrow4} alt="" className='-rotate-180' />
                </div>
                <div className='flex gap-10 w-full justify-between items-center'>
                  <div className='flex flex-col w-1/2 md:w-1/3 justify-start items-center gap-4'>
                    <div className='h-10 border-2 rounded-full w-[120px] text-white font-bold flex justify-center flex-col md:flex-row items-center '>
                      Raison 02
                    </div>
                    <div className='text-white text-center h-24'>
                      Nous écrivons un code de qualité dès le départ pour aller plus vite ensuite
                    </div>
                    <div className='text-white text-justify font-thin text-xs md:text-xl'>
                      Nos développeurs sont tous séniors et vous sont dédiés. Dès le début du projet vous aurez accès à notre outil de suivi de qualité basé sur les 6 critères de notre framework. Ainsi, vous aurez la garantie que votre application sera maintenable et évolutive.
                    </div>
                  </div>
                  <div className='flex flex-col w-1/2 md:w-1/3 justify-start items-center gap-4'>
                    <div className='h-10 border-2 rounded-full w-[120px] text-white font-bold flex justify-center flex-col md:flex-row items-center '>
                      Raison 03
                    </div>
                    <div className='text-white text-center h-24'>
                      Nous ne perdons pas de temps sur les tâches à faible valeur ajoutée.
                    </div>
                    <div className='text-white text-justify font-thin text-xs md:text-xl'>
                      Au début d'un projet les développeurs gâchent trop souvent leur temps à installer les outils, les environnements; à développer l'authentification, les notifications ... Notre Lab' interne optimise en continu la boite à outil de nos techs pour aller plus vite.
                    </div>
                  </div>
                </div>
                <div className='flex gap-10 w-full justify-between items-center'>
                  <div className='flex flex-col w-1/2 justify-start items-center gap-4'>
                    <img src={img.group4} alt="" />
                  </div>
                  <div className='flex flex-col w-1/2 justify-start items-center'>
                    <img src={img.monitor} alt="" />
                  </div>
                </div>
                <div className='text-white text-xl font-bold text-center'>
                et bien sûr ... nous misons tout sur un design attrayant.
                </div>
              </div>
            </div>
            <div className='w-full max-w-[1200px]  flex flex-col justify-start gap-8 items-start my-20 px-2 md:px-0'>
              <div className='w-2/3 flex flex-col justify-center items-start gap-4'>
                <div className='text-3xl text-black font-bold'>
                  Quelques-unes de nos 
                </div>
                <div className='w-[300px] text-3xl bg-primary rounded-xl text-white font-bold flex justify-center flex-col md:flex-row items-center h-12 '>
                  Success stories
                </div>
              </div>
              <div className='w-full flex flex-col md:flex-row justify-between items-center gap-10 '>
                <div className='w-full md:w-1/3 flex flex-col justify-center items-start gap-4'>
                  <img src={img.mask_group_1} alt="" className='w-full h-[400px]' />
                  <div className='w-full text-justify text-black font-bold'>
                    Conception et présentation  de maquettes d'une application pour faciliter les  transactions inter-réseaux au Burkina Faso. 
                  </div>
                  <NavLink className='w-full md:max-w-[250px] bg-primary flex justify-center h-16 items-center gap-4 text-white font-bold text-xl rounded-full'>
                    Voir le projet <icons.HiArrowLongRight className='text-white text-6xl' />
                  </NavLink>
                </div>
                <div className='w-full md:w-1/3 flex flex-col justify-center items-start gap-4'>
                  <img src={img.mask_group_2} alt="" className='w-full h-[400px]' />
                  <div className='w-full text-justify text-black font-bold'>
                    Conception et présentation  de maquettes d'une application pour faciliter les  transactions inter-réseaux au Burkina Faso. 
                  </div>
                  <NavLink className='w-full md:max-w-[250px] bg-primary flex justify-center h-16 items-center gap-4 text-white font-bold text-xl rounded-full'>
                    Voir le projet <icons.HiArrowLongRight className='text-white text-6xl' />
                  </NavLink>
                </div>
                <div className='w-full md:w-1/3 flex flex-col justify-center items-start gap-4'>
                  <img src={img.mask_group} alt="" className='w-full h-[400px]' />
                  <div className='w-full text-justify text-black font-bold'>
                    Conception et présentation  de maquettes d'une application pour faciliter les  transactions inter-réseaux au Burkina Faso. 
                  </div>
                  <NavLink className='w-full md:max-w-[250px] bg-primary flex justify-center h-16 items-center gap-4 text-white font-bold text-xl rounded-full'>
                    Voir le projet <icons.HiArrowLongRight className='text-white text-6xl' />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='bg-primary-10 -z-10 flex flex-col justify-start items-center w-full h-auto py-10 px-2 md:px-0'>
              <div className='max-w-[1200px] w-full flex gap-6 flex-col justify-start items-center h-full'>
                <div className='text-4xl font-bold text-white'>
                  Ils nous ont fait
                </div>
                <div className='-z-10 p-4 -rotate-3 bg-primary rounded-xl flex justify-center items-center font-bold text-white text-4xl md:text-6xl '>
                  Confiance
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-between items-center mt-10'>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                  <div className='bg-white rounded-xl h-24'>

                  </div>
                </div>
                <div className='w-full flex justify-between items-center  mt-32'>
                  <div className='w-1/3 flex flex-col justify-center items-center h-24 text-white font-bold text-center text-sm '>
                    <span>+150</span>
                    <span>produits digitaux</span>
                    <span>construits</span>
                  </div>
                  <hr className='bg-white border-white h-24 w-[2px]' />
                  <div className='w-1/3 flex flex-col justify-center items-center h-24 text-white font-bold text-center text-sm'>
                    <span>96%</span>
                    <span>de nos clients continuent</span>
                    <span>avec nous</span>
                  </div>
                  <hr className='bg-white border-white h-24 w-[2px]' />
                  <div className='w-1/3 flex flex-col justify-center items-center h-24 text-white font-bold text-center text-sm '>
                    <span>9,8/10</span>
                    <span>de note satisfaction</span>
                    <span>client</span>
                  </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center mt-32 gap-10'>
                  <div className='text-white text-3xl font-bold'>
                    Nos partenaires
                  </div>
                  <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 justify-center'>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                    <div className='bg-white rounded-xl h-24'>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-[1200px] flex-col md:flex-row flex gap-8 px-2 md:px-10 justify-center items-center bg-primary h-60 mt-16 md:mt-32 rounded-xl mb-16 md:mb-32'>
              <div className='flex flex-col justify-start items-start w-full md:w-1/2 gap-4'>
                <span className='text-white text-xl md:text-3xl font-bold text-center w-full md:text-start'>Échangeons sur votre projet !</span>
                <div className='flex justify-between md:justify-start items-start w-full'>
                  <div className='flex justify-center text-center md:justify-start flex-col md:flex-row items-center w-1/3 font-bold text-white text-xs'>
                    <icons.BiSolidNotification className='text-xl' /> Site web internet
                  </div>
                  <div className='flex justify-center text-center md:justify-start flex-col md:flex-row items-center w-1/3 font-bold text-white text-xs'>
                    <icons.BiSolidNotification className='text-xl' /> Site web internet
                  </div>
                  <div className='flex justify-center text-center md:justify-start flex-col md:flex-row items-center w-1/3 font-bold text-white text-xs'>
                    <icons.BiSolidNotification className='text-xl' /> Site web internet
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex justify-end items-center'>
                <NavLink className=' text-xs gap-1 px-1 md:text-xl w-full md:max-w-[350px] bg-white h-12 rounded-full flex justify-center items-center md:gap-4 text-primary font-bold hover:shadow-black shadow-md duration-300 hover:gap-24'>
                  Nous contacter
                  <icons.HiArrowLongRight className='text-3xl' />
                </NavLink>
              </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}
