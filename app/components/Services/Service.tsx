'use client'

import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Bridge from '@/app/components/Icons/Bridge'
import Logo from '@/app/components/Icons/Logo'
import Modal from '@/app/components/Modal'
import cloudinary from '@/utils/cloudinary'
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'
import type { ImageProps } from '@/utils/types'
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto'

const tabs = [
    { name: 'profiles',icon: '' },
    { name: 'publications',icon: ''  },
    { name: 'music',icon: ''  },
    { name: 'collect',icon: ''  }
  ];

const Service = () => {

    const [activeTab, setActiveTab] = useState('Profiles');

    const handleTabClick = (tabName:any) => {
        setActiveTab(tabName);
      };    

  return (
    <div className=" px-6 py-14 sm:px-10 ">
        <div>
            <h1 className="text-5xl font-bold mt-3">
                SourceCode
            </h1>
            <p className="mt-4 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                An application boilerplate built with a modern stack. Simple to get started building your first social app. Leveraging ShadCN, Lens Protocol, Next.js, and WalletConnect.</p>
                <div className="mt-6 flex">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-4 w-4 mr-1">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" x2="12" y1="2" y2="15"></line>
                      </svg>
                      Share
                      </button>
                      <a  href="https://aave.notion.site/08521d6d8ec84d10bf0f6d03abcf60cc?v=eb989b589d7447918187bf3c588a2748&amp;pvs=4" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-4 w-4 mr-1">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" x2="22" y1="12" y2="12">
                                </line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                    </path>
                        </svg>
                        Explore 
                    </a>
                        </div>
                    </div>
                    <div className="mt-[70px] flex ml-2">
                        <div>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                My dashboard
                            </button>
                        </div>
                        </div>
                        <div className="md:flex min-h-[300px] mt-3">
                            <div className="border rounded-tl rounded-bl md:w-[230px] pt-3 px-2 pb-8 flex-col flex">
                                <p className="font-medium ml-4 mb-2 mt-1">
                                    Social Views
                                </p>
                                {tabs.map((tab) => (
                                    <button
                                    key={tab.name}
                                    onClick={() => handleTabClick(tab.name)}
                                    className={`${
                                    tab.name === activeTab
                                    ? 'border-black text-black'
                                    : 'border-transparent text-gray-400 cursor-pointer'
                                    }
                                    inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 justify-start mb-1`}
                                    >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 mr-2"
                                    >
                                     <path 
                                     strokeLinecap="round" 
                                     strokeLinejoin="round" 
                                     d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                                </svg>
                                    {tab.name}
                                    </button>
                                    ))}
                                    </div>
                                    
                                    {/**code for various tabs */}
                                    
                                    <div className=" sm:border-t sm:border-r sm:border-b rounded-tr rounded-br flex flex-1 pb-4">
                                        <div className="flex flex-1 flex-wrap p-4">
                                        {activeTab === 'profiles' && (
                                          <div className="mx-auto max-w-[1960px] bg-black p-4">
                                          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
                                          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                                          <div className="absolute inset-0 flex items-center justify-center opacity-20"><span className="flex max-h-full max-w-full items-center justify-center">
                                          <svg aria-labelledby="conf-city-title" fill="none" role="img" viewBox="0 0 620 704" width="620" height="704" xmlns="http://www.w3.org/2000/svg">
                                            <title id="conf-city-title">
                                          Line drawing of the Golden Gate Bridge in San Francisco.
                                          </title>
                                          </svg></span>
                                          <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black">
                                          </span>
                                          </div>
                                          <svg aria-labelledby="conf-logo-title-header" fill="none" role="img" viewBox="0 0 172 26" width="172" height="26" xmlns="http://www.w3.org/2000/svg"><title id="conf-logo-title-header">Next.js Conf logo using a newly designed Next.js logo.</title>
                                           </svg>
                                           <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                                            2022 Event Photos
                                           </h1>
                                           <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                                            Our incredible Next.js community got together in San Francisco for our first ever in-person conference!
                                            </p>
                                            <a className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4" >
                                              Clone and Deploy
                                              </a>
                                            </div>
                                            <a className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight" href="/p/0">
                                              <img alt="Next.js Conf photo" 
                                               width="720" 
                                               height="480"  
                                               className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"  
                                               sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" 
                                               src="https://images.unsplash.com/photo-1692879453476-e0a93ddeb308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                               />
                                            </a>
                                         </div>
                                        </div>
                                        )}
                                        </div>
                                        </div>
                                    </div>
                                </div>
  )
}
export default Service;
    

