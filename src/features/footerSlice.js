import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    breakpoint: 'lg',
    tiles: {
        socialTile: [
            {
                link: {
                    title: 'Instagram',
                    href: 'https://www.instagram.com/amwayofficialindia/'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/bltda4c6db78c7a0b99/6188cfe9c9714c667b4ff353/Instagram.png?width=40&auto=webp'
            },
            {
                link: {
                    title: 'Facebook',
                    href: 'https://www.facebook.com/amwayindiaofficial/'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt6ea8d4875a6dcba5/6188cfe9d6ef6a585adf301b/Facebook.png?width=40&auto=webp'
            },
            {
                link: {
                    title: 'Twitter',
                    href: 'https://twitter.com/amwayindia'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt088940aff802c498/6188cfe94f03d16675739150/Twitter.png?width=40&auto=webp'
            },
            {
                link: {
                    title: 'YouTube',
                    href: 'https://www.youtube.com/c/indiaamway'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt125489fe23a842d2/6188cfe971dc1b799a74085e/YouTube.png?width=40&auto=webp'
            },
            {
                link: {
                    title: 'Telegram',
                    href: 'https://t.me/s/amwayindiaofficial'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt04101f3480ca8459/6188cfea7a22505a5c254b6c/Telegram.png?width=40&auto=webp'
            }
        ],
        raiseConcern: {
            isLoginOnly: true,
            link: null,
            titleHeader: 'raiseTicket',
            descriptionText: '<a target="_blank" href="https://d3v-athenaqa-in.zendesk.com/hc/" style="color: white;"><u>Click here</u></a> to raise a ticket.'
        },
        suggestionTile: {
            isLoginOnly: false,
            link: null,
            titleHeader: 'suggestion',
            descriptionText: 'If you have any complaints or suggestions, you may <a href="/help-centre/write-to-us" style="color: white;" target="_self"><u>write to us</u></a>.'
        }
    },
    navSection: [
        {
            header: 'Policies',
            list: [
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Terms Of Use',
                        href: '/terms-of-use/terms'
                    },
                    seoTitle: 'Terms of use',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Privacy Policy',
                        href: '/terms-of-use/website-policy'
                    },
                    seoTitle: 'Website Privacy Policy',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Rules Of Conduct',
                        href: '/terms-of-use/rules-of-conduct'
                    },
                    seoTitle: 'Rules Of Conduct',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Product Return Policy',
                        href: '/terms-of-use/product-return-policy'
                    },
                    seoTitle: 'Product Return Policy',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Amway Authorized Sales Channels ',
                        href: '/terms-of-use/warning'
                    },
                    seoTitle: 'Amway Authorized Sales Channels ',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Important Advisory',
                        href: '/terms-of-use/important-advisory'
                    },
                    seoTitle: 'Important Advisory',
                    tabConfig: 'same',
                    titleHighlight: false
                }
            ]
        },
        {
            header: 'Useful Links',
            list: [
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Careers at Amway',
                        href: '/about-amway/careers-at-amway'
                    },
                    seoTitle: 'Careers',
                    tabConfig: 'new',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Search Authorized ADS Partners',
                        href: '/en_US/policies/searchDIrectSellerRetailer'
                    },
                    seoTitle: 'Search Authorized ADS Partners',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'FAQs',
                        href: '/about-amway/faq'
                    },
                    seoTitle: 'FAQs',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'GST Registration Details',
                        href: '/amway-gst'
                    },
                    seoTitle: 'GST Registration Details',
                    tabConfig: 'same',
                    titleHighlight: false
                },
                {
                    attributeVisibility: true,
                    link: {
                        title: 'Shipping and Pickup Procedures',
                        href: '/terms-of-use/shipping-and-picking-procedure'
                    },
                    seoTitle: 'Shipping and Pickup Procedures',
                    tabConfig: 'same',
                    titleHighlight: false
                }
            ]
        }
    ],
    addressQueries: {
        email: 'care@amway.com',
        companyName: 'Amway India Enterprises Pvt. Ltd.',
        address: 'Regd. Office - Ground Floor, Elegance Tower, Plot No. 8, Non Hierarchical Commercial Centre, Jasola, New Delhi-110025',
        emailTitle: 'Email ID - ',
        connectHereTitle: 'Tel: ',
        connectHere: '0124-4508888',
        queryHere: 'For Queries and Grievances, please contact Mr. Hukam Singh.',
        cin: ' CIN - U74120DL1995PTC071405'
    },
    bottomFooter: {
        links: {
            siteMap: {
                title: 'Site Map',
                href: '/sitemap.xml'
            }
        },
        copyRight: {
            text: 'Copyright © 2024 Amway India Enterprises Pvt. Ltd.'
        }
    },
    footerCertificationIcon: {
        certificationTile: [
            {
                link: {
                    title: 'BBB',
                    href: '/certIcon/bbb'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt9b921773e70ad78e/61a6ebbc09389f76634d36ec/footer_BBB.svg'
            },
            {
                link: {
                    title: 'D&B',
                    href: '/certIcon/db'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/bltd6c1eb93bad17e28/61a6ebbcc854b013a2d06065/footer_DB.svg'
            },
            {
                link: {
                    title: 'IBOI',
                    href: '/certIcon/iboi'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/bltfc155fb272df13bb/61a6ebbc37c855238d66ea59/footer_IBOA_icon.svg'
            },
            {
                link: {
                    title: 'DSA',
                    href: '/certIcon/dsa'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt5fc09aff2de5cb92/61a6ebbcf35725134cf38aa4/footer_DSA_icon.svg'
            },
            {
                link: {
                    title: 'FSSAI',
                    href: '/certIcon/fssai'
                },
                logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt8413c43b8622150b/61a6ebbc3865bf22bd96016d/footer_FSSAI_icon.png'
            }
        ]
    }
}

export const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {}
})

export const { } = footerSlice.actions

export default footerSlice.reducer