'use client'

import React from 'react'
import { useApp } from '@/contexts/AppContext'
import { basePath } from '@/lib/basePath'

export default function SectionContacts() {
    const { scrollTo } = useApp()

    return (
        <section
            id="section-contacts"
            style={{
                padding: '100px 73px',
                backgroundColor: '#F2F0EF',
            }}
        >
            <div className="contacts-grid" style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: '60px' }}>
                <style jsx>{`
                    .contacts-grid {
                        flex-direction: row;
                    }
                    .contacts-left-header {
                        font-family: 'Scandia', sans-serif;
                        font-weight: 700;
                        font-size: 48px;
                        line-height: 1.1;
                        margin-bottom: 60px;
                    }
                    .contact-huge-header {
                        font-family: 'Scandia', sans-serif;
                        font-size: 160px;
                        font-weight: 700;
                        color: #0B1215;
                        line-height: 1;
                        margin-bottom: 80px;
                        letter-spacing: -0.02em;
                    }
                    .form-row-name {
                        display: flex;
                        gap: 40px;
                    }
                    @media (max-width: 639px) {
                        .contacts-grid {
                            flex-direction: column !important;
                            gap: 60px !important;
                        }
                        .contacts-left, .contacts-right {
                            width: 100% !important;
                            min-width: 100% !important;
                            max-width: 100% !important;
                        }
                        .contacts-left-header {
                            font-size: 32px !important;
                            margin-bottom: 40px !important;
                        }
                        .contact-huge-header {
                            font-size: 80px !important; /* User requested 80px */
                            margin-bottom: 40px !important;
                        }
                        .form-row-name {
                            flex-direction: column !important;
                            gap: 40px !important;
                        }
                    }
                `}</style>

                {/* Left Column: Info & CTA */}
                <div className="contacts-left" style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
                    <h2
                        className="contacts-left-header"
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontWeight: 700,
                            color: '#0B1215',
                            textAlign: 'left',
                        }}
                    >
                        Let’s talk,<br />
                        we are here to<br />
                        help
                    </h2>

                    <p
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#0B1215',
                            lineHeight: 1.5,
                            marginBottom: '32px',
                        }}
                    >
                        Looking for the right expertise?<br />
                        We help teams find specialists that truly fit —<br />
                        technically and culturally.
                    </p>

                    <p
                        style={{
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#0B1215',
                            lineHeight: 1.5,
                            marginBottom: '32px',
                        }}
                    >
                        Contact us via the form and we’ll respond<br />
                        promptly.<br />
                        You can also request a case study to see how<br />
                        similar challenges were solved.
                    </p>

                    <button
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'space-between', /* Changed from center to space-between for left-aligned text */
                            padding: '16px 32px',
                            backgroundColor: 'transparent',
                            border: '2px solid #0033FF',
                            color: '#0033FF',
                            fontFamily: 'Scandia, sans-serif',
                            fontSize: '20px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            marginTop: '40px',
                            width: '70%', /* Mobile full width often looks better, but let's see. Left align desktop, full mobile? */
                            maxWidth: '100%',
                        }}
                    >
                        Book a Call
                        <img src={`${basePath}/images/Arrow 6.svg`} alt="arrow" style={{ marginLeft: '12px', width: '14px', height: '14px' }} />
                    </button>
                    {/* Note: Button width on desktop was inline-flex. On mobile full width might be better. 
                        Let's keep it consistent: inline-flex desktop, full width mobile? 
                        Current style sets width: 100%. This will make it full width on desktop too if container allows. 
                        Container is 500px max. Full width button there is okay. 
                    */}
                </div>

                {/* Right Column: Form */}
                <div className="contacts-right" style={{ flex: '2', minWidth: '400px', maxWidth: '800px' }}>
                    <h2 className="contact-huge-header">
                        contact
                    </h2>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {/* Name Row */}
                        <div className="form-row-name">
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#656565', marginBottom: '8px' }}>
                                    first name*
                                </label>
                                <input type="text" style={{ width: '100%', border: 'none', borderBottom: '2px solid #0B1215', background: 'transparent', padding: '8px 0', outline: 'none', borderRadius: 0 }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#656565', marginBottom: '8px' }}>
                                    last name*
                                </label>
                                <input type="text" style={{ width: '100%', border: 'none', borderBottom: '2px solid #0B1215', background: 'transparent', padding: '8px 0', outline: 'none', borderRadius: 0 }} />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#656565', marginBottom: '8px' }}>
                                e-mail address*
                            </label>
                            <input type="email" style={{ width: '100%', border: 'none', borderBottom: '2px solid #0B1215', background: 'transparent', padding: '8px 0', outline: 'none', borderRadius: 0 }} />
                        </div>

                        {/* Looking For (Select) */}
                        <div style={{ position: 'relative' }}>
                            <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1215', marginBottom: '8px' }}>
                                what are you looking for?*
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid #0B1215', paddingBottom: '8px' }}>
                                <select defaultValue="" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', appearance: 'none', fontFamily: 'Scandia, sans-serif', fontSize: '16px', color: '#0B1215', borderRadius: 0 }}>
                                    <option value="" disabled>Select an option</option>
                                    <option value="specialists">Specialists</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                                {/* Custom Arrow for select */}
                                <img src={`${basePath}/images/icon-arrow-horizontal.svg`} style={{ transform: 'rotate(90deg)', width: '20px' }} alt="" />
                            </div>
                        </div>

                        {/* Context */}
                        <div>
                            <label style={{ display: 'block', fontFamily: 'Scandia, sans-serif', fontSize: '20px', fontWeight: 700, color: '#656565', marginBottom: '8px' }}>
                                tell us about your context
                            </label>
                            <input type="text" style={{ width: '100%', border: 'none', borderBottom: '2px solid #0B1215', background: 'transparent', padding: '8px 0', outline: 'none', borderRadius: 0 }} />
                        </div>

                        {/* Footer / Privacy */}
                        <div style={{ marginTop: '40px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
                                <input type="checkbox" id="privacy" style={{ marginTop: '4px', width: '16px', height: '16px', border: '1px solid #0B1215', borderRadius: 0, flexShrink: 0 }} />
                                <label htmlFor="privacy" style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', color: '#0B1215', lineHeight: 1.4 }}>
                                    I agree to the processing of my personal data in accordance with the <a href={`${basePath}/privacy`} style={{ fontFamily: 'Scandia, sans-serif', fontWeight: 500, textDecoration: 'underline', color: 'inherit' }}>Privacy Policy.</a>
                                </label>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '60px' }}>
                                <img src={`${basePath}/images/Exclude.svg`} alt="info" style={{ width: '16px', height: '16px' }} />
                                <span style={{ fontFamily: 'Scandia, sans-serif', fontSize: '16px', fontWeight: 500, textDecoration: 'underline', color: '#0B1215' }}>
                                    How we use your data
                                </span>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    fontFamily: 'Scandia, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: '#0033FF',
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '4px',
                                    float: 'left', // Align left
                                }}
                            >
                                Start a Conversation
                                <img src={`${basePath}/images/Arrow 6.svg`} alt="arrow" style={{ marginLeft: '12px', width: '20px' }} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
