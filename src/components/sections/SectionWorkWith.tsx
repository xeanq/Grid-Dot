'use client'

import React from 'react'
import { basePath } from '@/lib/basePath'

const LOGOS = [
    'estee lauder.png',
    'macc.png',
    'lamer.png',
    'clinique.png',
    'jo malone.png',
    'kilian paris.png',
    'aveda.png'
]

export default function SectionWorkWith() {
    return (
        <section
            id="section-work-with"
            style={{
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
                overflow: 'hidden',
            }}
        >
            <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
                {/* HEADER */}
                <h2
                    className="desktop-only"
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '48px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '80px',
                        textAlign: 'left',
                    }}
                >
                    We are pleased to work with
                </h2>

                <h2
                    className="mobile-only"
                    style={{
                        fontFamily: 'Scandia, sans-serif',
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#0B1215',
                        lineHeight: 1.1,
                        marginBottom: '40px',
                        textAlign: 'left',
                    }}
                >
                    We are pleased<br />to work with
                </h2>

                <style jsx>{`
                    @media (max-width: 639px) {
                         #section-work-with {
                            padding: 60px 40px !important;
                        }
                    }
                    @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .slider-track {
                      display: flex;
                      width: fit-content;
                      animation: scroll 40s linear infinite;
                    }
                    /* Hide scrollbar for mobile slider */
                    .mobile-slider::-webkit-scrollbar {
                        display: none;
                    }
                    .mobile-slider {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

                {/* Slider Container (Desktop) */}
                <div
                    className="desktop-only"
                    style={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        marginBottom: '100px',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', // Fade edges
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <div className="slider-track">
                        {/* Quadruple the logos for seamless infinite effect on large screens */}
                        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: '0 0 auto',
                                    padding: '0 40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '250px', // Fixed width for consistent spacing
                                    height: '100px',
                                }}
                            >
                                <img
                                    src={`${basePath}/images/${logo}`}
                                    alt={logo.replace('.png', '')}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%) brightness(0.2)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Grid / Slider (2 Rows Horizontal Scroll) */}
                <div className="mobile-only" style={{ marginBottom: '60px' }}>
                    <div
                        className="mobile-slider"
                        style={{
                            display: 'grid',
                            gridTemplateRows: 'repeat(2, 1fr)',
                            gridAutoFlow: 'column',
                            columnGap: '40px', /* Spacing between columns */
                            rowGap: '40px',    /* Spacing between rows */
                            overflowX: 'auto',
                            // With standard width, padding inside the scroll container is fine for scroll snap/start/end but if width is constrained, it pushes content in.
                            // ...
                            padding: 0,
                        }}
                    >
                        {/* Duplicate logos to ensure enough content for scrolling effect if needed, fitting 7 items in 2 rows means 4 colums. 7 items is fine. */}
                        {LOGOS.map((logo, index) => (
                            <div
                                key={`mobile-${index}`}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '140px', /* Fixed width for columns */
                                    height: '50px', /* Fixed height for rows */
                                }}
                            >
                                <img
                                    src={`${basePath}/images/${logo}`}
                                    alt={logo.replace('.png', '')}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%', // Scale down further?
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%) brightness(0.2)' // Ensure opacity matches reference if possible? Reference was dark logos. filter brightness 0.2 makes them dark.
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Arrow */}
                <div className="desktop-only" style={{ width: '100%', padding: '0 20px' }}>
                    <img
                        src={`${basePath}/images/Arrow Work with.svg`}
                        alt="Arrow"
                        style={{
                            display: 'block',
                            width: '100%',
                            maxWidth: '100%'
                        }}
                    />
                </div>
            </div>
        </section >
    )
}
