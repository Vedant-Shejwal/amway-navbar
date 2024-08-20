import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    topBar: {
        topBarLeftData: [
            {
                attribute_visibility: true,
                link: {
                    title: 'Resources & Downloads',
                    href: '/amway-resources'
                },
                link_title_seo: 'Resources & Downloads',
                tab_config: 'same'
            },
            {
                attribute_visibility: true,
                link: {
                    title: 'Content Library',
                    href: '/content-library'
                },
                link_title_seo: 'Gurucool',
                tab_config: 'same'
            },
            {
                attribute_visibility: true,
                link: {
                    title: 'Start a Business',
                    href: '/about-amway/how-amway-business-works'
                },
                link_title_seo: 'Start a Business',
                tab_config: 'same'
            },
            {
                attribute_visibility: true,
                link: {
                    title: 'About Amway',
                    href: '/about-amway/amway-india'
                },
                link_title_seo: 'About Amway',
                tab_config: 'same'
            }
        ],
        topBarRightData: {
            supportList: [
                {
                    link: {
                        title: 'Contact Us',
                        href: '/help-centre/contact-us'
                    },
                    seo_title: 'Contact Us',
                    tab_config: 'same',
                    menu_key: 'contact_us',
                    attributeVisibility: true
                },
                {
                    link: {
                        title: 'Write to Us',
                        href: '/help-centre/write-to-us'
                    },
                    seo_title: 'Write to Us',
                    tab_config: 'same',
                    menu_key: 'write_to_us',
                    attributeVisibility: true
                }
            ],
            supportTitle: 'Help Centre',
            languageList: [
                {
                    link: {
                        title: 'English',
                        href: 'en'
                    }
                },
                {
                    link: {
                        title: 'हिंदी',
                        href: 'hi'
                    }
                },
                {
                    link: {
                        title: 'தமிழ்',
                        href: 'ta'
                    }
                },
                {
                    link: {
                        title: 'বাংলা',
                        href: 'bn'
                    }
                }
            ],
            signIn: 'Sign In'
        },
        messageBox: {
            button_text: 'DISMISS',
            message_box_statement: '<p>Select this menu to change the language.</p>',
            show_lang_modal: false
        }
    },
    amwayLogo: {
        altText: 'Amway logo',
        logoUrl: 'https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt7b3928c419c237f1/622859f8225c6a0d139d91c1/Black.svg'
    },
    navBar: {
        navBarData: [
            {
                title: 'Morning Nutrition',
                tabType: 'link',
                categoryData: {
                    title: 'Morning Nutrition',
                    seoTitle: 'Morning Nutrition',
                    href: '/Nutrite-liv360/NLCP/c/morning-nutrition',
                    tab_config: 'same'
                },
                tag: 'New',
                tagColor: '#107F47'
            },
            {
                title: 'Products',
                menuId: null,
                tag: '',
                tagColor: null,
                tabType: 'multiList',
                categoryData: [
                    {
                        title: 'Nutrition',
                        categoryCode: null,
                        subList: [
                            {
                                link: {
                                    title: 'Protein',
                                    href: '/nutrition/c/protein-supplement'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Protein',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Vitamin & Minerals',
                                    href: '/nutrition/c/multivitamin-and-multimineral-supplement'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Vitamin & Minerals',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Omega 3 & Calcium',
                                    href: '/nutrition/c/omega-3-supplement'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Omega 3 & Calcium',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Health Supplements',
                                    href: '/nutrition/c/health-supplements'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Other Supplements',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Nutrilite Traditional Herbs Range',
                                    href: '/nutrition/c/nutrilite-traditional-herbs-range'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Nutrilite Traditional Herbs Range',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Weight Management',
                                    href: '/nutrition/c/weight-management'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Weight Management',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Energy Drinks',
                                    href: '/nutrition/c/energy-drinks'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Energy Drinks',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Nutrilite & ITC Co-created',
                                    href: '/nutrition/c/nutrilite-and-itc-co-created'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Nutrilite & ITC Co-created',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'All Nutrition Products',
                                    href: '/shop/c/nutrition-supplement'
                                },
                                tabConfig: 'same',
                                seoTitle: 'All Nutrition Products',
                                attributeVisibility: true,
                                titleHighlight: true
                            }
                        ]
                    },
                    {
                        title: 'Beauty',
                        categoryCode: null,
                        subList: [
                            {
                                link: {
                                    title: 'Skin Care',
                                    href: '/beauty/c/skin-care'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Skin Care',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Makeup',
                                    href: '/beauty/c/makeup'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Makeup',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Artistry Skincare Recommender',
                                    href: 'http://artistryrecommender.amway.in/'
                                },
                                tabConfig: 'new',
                                seoTitle: 'Artistry Skincare Recommender',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Artistry Beauty App',
                                    href: 'https://l.ead.me/bcp7hn'
                                },
                                tabConfig: 'new',
                                seoTitle: 'Artistry Beauty App',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'All Beauty Products',
                                    href: '/shop/c/beauty'
                                },
                                tabConfig: 'same',
                                seoTitle: 'All Beauty Products',
                                attributeVisibility: true,
                                titleHighlight: true
                            }
                        ]
                    },
                    {
                        title: 'Home & Living',
                        categoryCode: null,
                        subList: [
                            {
                                link: {
                                    title: 'Home Care',
                                    href: '/home-and-living/c/home-care'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Laundry Care',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Air Treatment',
                                    href: '/home-and-living/c/air-treatment'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Air Treatment',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Kitchen Essentials',
                                    href: '/home-and-living/c/kitchen-essentials'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Kitchen Essentials',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'All Home & Living Products',
                                    href: '/shop/c/home-and-living'
                                },
                                tabConfig: 'same',
                                seoTitle: 'All Home & Living Products',
                                attributeVisibility: true,
                                titleHighlight: true
                            }
                        ]
                    },
                    {
                        title: 'Personal Care',
                        categoryCode: null,
                        subList: [
                            {
                                link: {
                                    title: 'Oral Care',
                                    href: '/personal-care/c/oral-care'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Oral Care',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Hair Care',
                                    href: '/personal-care/c/hair-care'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Hair Care',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Bath & Body Care',
                                    href: '/personal-care/c/bath-and-body-care'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Bath & Body Care',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Men\'s Grooming',
                                    href: '/personal-care/c/mens-grooming'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Men\'s Grooming',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Hygiene',
                                    href: '/personal-care/c/hygiene'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Hygiene',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Deodorants',
                                    href: '/personal-care/c/deodorants'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Deodorants',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'All Personal Care Products',
                                    href: '/shop/c/personal-care'
                                },
                                tabConfig: 'same',
                                seoTitle: 'All Personal Care Products',
                                attributeVisibility: true,
                                titleHighlight: true
                            }
                        ]
                    },
                    {
                        title: 'More Products',
                        categoryCode: null,
                        subList: [
                            {
                                link: {
                                    title: 'Agricultural Products',
                                    href: '/more-products/c/agricultural-products'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Agricultural Products',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Oils',
                                    href: '/more-products/c/oils'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Oils',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Essentials',
                                    href: '/more-products/c/Essentials'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Catalogue',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Limited Stocks',
                                    href: '/more-products/c/limited-stocks'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Limited Stocks',
                                attributeVisibility: true,
                                titleHighlight: true
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Brands',
                menuId: null,
                tag: '',
                tagColor: null,
                tabType: 'singleList',
                categoryData: [
                    {
                        title: '',
                        categoryCode: null,
                        subList: [
                            {
                                link: {
                                    title: 'Nutrilite',
                                    href: '/amway-brands/nutrilite'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Nutrilite',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Nutrilite Traditional Herbs',
                                    href: '/amway-brands/nutrilite-traditional-herbs'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Nutrilite Traditional Herbs Range',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'n* by Nutrilite',
                                    href: '/amway-brands/n-by-nutrilite'
                                },
                                tabConfig: 'same',
                                seoTitle: 'N by nutrilite',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'XS',
                                    href: '/amway-brands/xs'
                                },
                                tabConfig: 'same',
                                seoTitle: 'XS',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Artistry',
                                    href: '/amway-brands/artistry'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Artistry',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Glister',
                                    href: '/amway-brands/glister'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Glister',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Amway Queen',
                                    href: '/amway-brands/amway-queen'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Amway Queen',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Amway Home',
                                    href: '/amway-brands/amway-home'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Amway Home',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Amway Atmosphere',
                                    href: '/amway-brands/amway-atmosphere'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Amway Atmosphere',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Attitude',
                                    href: '/amway-brands/attitude'
                                },
                                tabConfig: 'same',
                                seoTitle: 'Attitude',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'ITC & Nutrilite',
                                    href: '/amway-brands/itc-and-nutrilite'
                                },
                                tabConfig: 'same',
                                seoTitle: 'ITC&Nutrilite',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'G&H',
                                    href: '/amway-brands/g-h'
                                },
                                tabConfig: 'same',
                                seoTitle: '',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Dynamite',
                                    href: '/amway-brands/dynamite'
                                },
                                tabConfig: 'same',
                                seoTitle: '',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Satinique',
                                    href: '/amway-brands/satinique'
                                },
                                tabConfig: 'same',
                                seoTitle: '',
                                attributeVisibility: true,
                                titleHighlight: false
                            },
                            {
                                link: {
                                    title: 'Persona',
                                    href: '/amway-brands/persona'
                                },
                                tabConfig: 'same',
                                seoTitle: '',
                                attributeVisibility: true,
                                titleHighlight: false
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Promotions',
                tabType: 'link',
                categoryData: {
                    title: 'Promotions',
                    seoTitle: 'Promotions',
                    href: '/promotions',
                    tab_config: 'same'
                },
                tag: '',
                tagColor: ''
            }
        ]
    },
    cartInitialQuantity: 0,
    cartPincode: 'default',
    pincodeWarning: 'default_pincode_warning',
    loginDrawerData: {
        showLoginDrawer: false
    }
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {}
})

export const { addTodo, removeTodo, updateTodo } = navbarSlice.actions

export default navbarSlice.reducer