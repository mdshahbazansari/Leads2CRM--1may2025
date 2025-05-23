import ZohoBanner from '@/app/zoho-crm/ZohoBanner'
import React from 'react'

const ZohoCrm = () => {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/blueBG.jpg')",
            }}
        >
            <div
                className="w-full min-h-screen flex flex-col items-center justify-center"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }}
            >
                <div className="w-full max-w-8xl px-4 md:px-10 lg:px-14 mx-auto">
                    <h1 className="text-sky-500 text-4xl sm:text-4xl md:text-6xl lg:text-9xl text-center font-bold leading-tight">
                        Your great Indian
                        <br />
                        growth story
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-2xl md:text-3xl text-center font-semibold mt-8 px-2 md:mt-14">
                        Convert more and grow your business in the world fastest growing economy,
                        with the magic of contextual AI and thoughtful UI.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ZohoCrm
