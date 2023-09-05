import React from 'react'

const Service = () => {
  return (
    <div className=" px-6 py-14 sm:px-10 ">
        <div>
            <h1 className="text-5xl font-bold mt-3">
                Social Explorer
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
                                <button className="inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 justify-start mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="lucide lucide-person-standing">
                                        <circle cx="12" cy="5" r="1"></circle>
                                        <path d="m9 20 3-6 3 6"></path>
                                        <path d="m6 8 6 2 6-2"></path>
                                        <path d="M12 10v4"></path>
                                    </svg>
                                        <p className="text-sm ml-2">
                                            Profiles
                                        </p>
                                </button>
                                <button className="inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="lucide lucide-newspaper">
                                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                                        <path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path>
                                    </svg>
                                    <p className="text-sm ml-2">
                                        Publications
                                    </p>
                                </button>
                                <button className="inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="lucide lucide-list-music">
                                        <path d="M21 15V6"></path>
                                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                        <path d="M12 12H3"></path><path d="M16 6H3"></path>
                                        <path d="M12 18H3"></path>
                                    </svg>
                                    <p className="text-sm ml-2">
                                        Music
                                    </p>
                                </button>
                                <button className="inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="lucide lucide-shapes">
                                        <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
                                        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                                        <circle cx="17.5" cy="17.5" r="3.5"></circle>
                                    </svg>
                                    <p className="text-sm ml-2">
                                        Collect
                                        </p>
                                    </button>
                                    </div>
                                    <div className=" sm:border-t sm:border-r sm:border-b rounded-tr rounded-br flex flex-1 pb-4">
                                        <div className="flex flex-1 flex-wrap p-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
  )
}

export default Service