'use client'

import { basePath } from '@/lib/basePath'
import ContactsSidebar from '@/components/layout/ContactsSidebar'

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

            {/* Custom Header - Only Logo */}
            <header style={{ padding: '40px', textAlign: 'center' }}>
                <img src={`${basePath}/images/Grid&Dot.svg`} alt="Grid & Dot" style={{ height: '30px' }} />
            </header>

            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
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
                    maxWidth: '600px',
                    padding: '0 20px',
                    zIndex: 1
                }}>
                    <p style={{ margin: 0 }}>Our new website is coming soon.</p>
                    <p style={{ margin: '8px 0 0' }}>Very soon, we’ll open the doors to a place where we explain what we do, how we work, and how our people help bring ideas to life.</p>
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
