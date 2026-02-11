'use client'

import { basePath } from '@/lib/basePath'
import ContactsSidebar from '@/components/layout/ContactsSidebar'
import AtelierHeader from '@/components/layout/AtelierHeader'

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F2F0EF',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <ContactsSidebar />

            {/* Atelier Header */}
            <AtelierHeader />

            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '88px', /* Account for fixed header */
                paddingBottom: '200px' /* Push content up from eyes */
            }}>
                {/* Worth the wait image */}
                <div style={{ maxWidth: '900px', width: '90%', marginBottom: '40px' }}>
                    <img src={`${basePath}/images/worth the wait.svg`} alt="Worth the wait" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>

                {/* Text */}
                <div style={{
                    textAlign: 'center',
                    fontFamily: 'Scandia, sans-serif',
                    fontWeight: 500, /* Medium */
                    fontSize: '20px',
                    lineHeight: '1.4',
                    maxWidth: '890px',
                    zIndex: 1
                }}>
                    <p style={{ margin: 0 }}>Very soon, we'll open the doors to our Atelier — the more <br /> creative, editorial and bespoke part of Grid&Dot.</p>
                    <p style={{ margin: '8px 0 0' }}>A space to explore complexity, craft thoughtful digital solutions, <br /> and share how we work, what we build, and how we help teams <br /> move forward and up.</p>
                </div>
            </main>

            {/* Eyes Image at bottom */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '320px',
                maxWidth: '80%',
                zIndex: 0
            }}>
                <img src={`${basePath}/images/eyes.svg`} alt="Eyes" style={{ width: '100%', display: 'block' }} />
            </div>
        </div>
    )
}
