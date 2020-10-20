import * as React from "react"
import { SVG } from "@svgdotjs/svg.js"
import { moveToCenter } from "./utility"
import { alignLogoLeft, alignLogoRight, alignLogoTop } from "./alignFunctions"
import { LogoAlignOptions } from "./ui/SelectLayout"

type CreateLogoPropsComponent = {
    containerSize?: {
        width: number
        height: number
    }
    imageSize?: {
        width: number
        height: number
    }
    logoDim?: {
        width: number
        height: number
    }
    logoSVG?: string
    logoAlign?: LogoAlignOptions
    title?: string
    slogan?: string
    style?: {
        backgroundColor?: string
        title?: {
            color?: string
            fontSize?: number
            fontFamily?: string
        }
        slogan?: {
            color?: string
            fontSize?: number
            fontFamily?: string
        }
        logo?: {
            fill?: string
        }
    }
}

const logoPath = `<svg width="172" height="135" viewBox="0 0 172 135" xmlns="http://www.w3.org/2000/svg">
    <path d="M171.985 72.1159L171.971 71.8837C171.971 71.753 171.942 71.6224 171.912 71.4917C171.883 71.3321 171.839 71.1724 171.781 71.0272L151.179 22.1224C154.669 20.8159 157.165 17.4627 157.165 13.5433C157.165 8.49172 153.033 4.36914 147.938 4.36914C142.842 4.36914 138.71 8.47721 138.71 13.5433C138.71 15.532 139.367 17.3756 140.447 18.8853H31.3046C32.3997 17.3756 33.0421 15.532 33.0421 13.5433C33.0421 8.49172 28.91 4.36914 23.8143 4.36914C18.7185 4.36914 14.5864 8.46269 14.5864 13.5288C14.5864 17.5208 17.1708 20.903 20.748 22.1659L0.175212 71.0127C0.029202 71.3756 -0.014601 71.753 0.029202 72.1159C0.014601 72.3046 0 72.5079 0 72.6966C0 85.8192 10.7463 96.503 23.9457 96.503C37.145 96.503 47.8913 85.8192 47.8913 72.6966C47.8913 72.4933 47.8767 72.3046 47.8621 72.1014L47.8475 71.8691C47.8475 71.7385 47.8183 71.6079 47.7891 71.4772C47.7599 71.3175 47.7161 71.1579 47.6577 71.0127L27.5375 23.2256H144.419L124.284 71.0127C124.138 71.3756 124.094 71.753 124.138 72.1159C124.123 72.3046 124.109 72.5079 124.109 72.6966C124.109 85.8192 134.855 96.503 148.054 96.503C161.254 96.503 172 85.8192 172 72.6966C172 72.4933 171.985 72.3046 171.985 72.1159ZM166.51 69.7788H129.555L148.04 25.9256L166.51 69.7788ZM147.923 8.70946C150.595 8.70946 152.77 10.8724 152.77 13.5288C152.77 16.1853 150.595 18.3482 147.923 18.3482C145.251 18.3482 143.075 16.1853 143.075 13.5288C143.075 10.8724 145.251 8.70946 147.923 8.70946ZM18.9667 13.5288C18.9667 10.8724 21.1423 8.70946 23.8143 8.70946C26.4862 8.70946 28.6618 10.8724 28.6618 13.5288C28.6618 16.1853 26.4862 18.3482 23.8143 18.3482C21.1423 18.3482 18.9667 16.1853 18.9667 13.5288ZM23.9165 25.9256L42.4014 69.7788H5.44618L23.9165 25.9256ZM23.9457 92.1482C13.6374 92.1482 5.16876 84.1933 4.43871 74.1337H43.4672C42.7226 84.1933 34.254 92.1482 23.9457 92.1482ZM148.054 92.1482C137.746 92.1482 129.277 84.1933 128.533 74.1337H167.561C166.831 84.1933 158.363 92.1482 148.054 92.1482Z"  />
    <path d="M62.0544 13.7904H110.238C111.45 13.7904 112.428 12.8178 112.428 11.613C112.428 10.4081 111.45 9.43555 110.238 9.43555H62.0544C60.8425 9.43555 59.8643 10.4081 59.8643 11.613C59.8643 12.8178 60.8425 13.7904 62.0544 13.7904Z"  />
    <path d="M137.98 130.645H102.207V30.4837H111.858C111.289 31.5725 110.968 32.8063 110.968 34.1128C110.968 38.5112 114.574 42.0966 118.998 42.0966C123.422 42.0966 127.029 38.5112 127.029 34.1128C127.029 30.7305 124.897 27.8273 121.889 26.6805C121.51 26.3321 121.013 26.1289 120.458 26.1289H51.8337C51.2788 26.1289 50.7824 26.3321 50.4028 26.6805C47.395 27.8273 45.2632 30.7305 45.2632 34.1128C45.2632 38.5112 48.8697 42.0966 53.2938 42.0966C57.7179 42.0966 61.3243 38.5112 61.3243 34.1128C61.3243 32.8063 61.0031 31.5725 60.4337 30.4837H70.085V130.645H34.3125C33.1006 130.645 32.1223 131.618 32.1223 132.822C32.1223 134.027 33.1006 135 34.3125 135H137.98C139.192 135 140.17 134.027 140.17 132.822C140.17 131.618 139.192 130.645 137.98 130.645ZM97.8269 130.645H92.9648V30.4837H97.8269V130.645ZM88.5844 130.645H83.7223V30.4837H88.5844V130.645ZM118.998 37.7418C116.983 37.7418 115.348 36.116 115.348 34.1128C115.348 32.1095 116.983 30.4837 118.998 30.4837C121.013 30.4837 122.649 32.1095 122.649 34.1128C122.649 36.116 121.013 37.7418 118.998 37.7418ZM56.944 34.1128C56.944 36.116 55.3087 37.7418 53.2938 37.7418C51.2788 37.7418 49.6435 36.116 49.6435 34.1128C49.6435 32.1095 51.2788 30.4837 53.2938 30.4837C55.3087 30.4837 56.944 32.1095 56.944 34.1128ZM74.4653 30.4837H79.3274V130.645H74.4653V30.4837Z"  />
    <path d="M69.3549 4.35484H102.937C104.149 4.35484 105.127 3.38226 105.127 2.17742C105.127 0.972581 104.149 0 102.937 0H69.3549C68.1431 0 67.1648 0.972581 67.1648 2.17742C67.1648 3.38226 68.1431 4.35484 69.3549 4.35484Z"  />
    </svg>
    `

const defaultProps = {
    containerSize: {
        width: 200,
        height: 200,
    },
    imageSize: {
        width: 400,
        height: 400,
    },
    logoDim: {
        width: 100,
        height: 100,
    },
    logoSVG: logoPath,
    title: "Default title",
    logoAlign: "align-top",
    slogan: "Default slogan",
    style: {
        backgroundColor: "#f00",
        title: {
            color: "#0f0",
            fontSize: 40,
            fontFamily: "Helvetica",
        },
        slogan: {
            color: "#00f",
            fontSize: 25,
            fontFamily: "Helvetica",
        },
        logo: {
            fill: "violet",
        },
    },
}

const CreateLogo: React.FunctionComponent<CreateLogoPropsComponent> = (
    props: CreateLogoPropsComponent
) => {
    const divRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (divRef.current) {
            /*
                Create the SVG parent
                */
            const containerSize = props.containerSize || defaultProps.containerSize
            const imageSize = props.imageSize || defaultProps.imageSize
            const logoDim = props.logoDim || defaultProps.logoDim
            const logoSVG = props.logoSVG || defaultProps.logoSVG
            const title = props.title || defaultProps.title
            const logoAlign = props.logoAlign || defaultProps.logoAlign
            const slogan = props.slogan || defaultProps.slogan
            const style = {
                backgroundColor:
                    props?.style?.backgroundColor || defaultProps.style.backgroundColor,
                title: {
                    color: props?.style?.title?.color || defaultProps.style.title.color,
                    fontSize: props?.style?.title?.fontSize || defaultProps.style.title.fontSize,
                    fontFamily:
                        props?.style?.title?.fontFamily || defaultProps.style.title.fontFamily,
                },
                slogan: {
                    color: props?.style?.slogan?.color || defaultProps.style.slogan.color,
                    fontSize: props?.style?.slogan?.fontSize || defaultProps.style.slogan.fontSize,
                    fontFamily:
                        props?.style?.slogan?.fontFamily || defaultProps.style.slogan.fontFamily,
                },
                logo: {
                    fill: props?.style?.logo?.fill || defaultProps.style.logo.fill,
                },
            }

            divRef.current.textContent = ""

            const draw = SVG()
                .addTo(divRef.current)
                .size(containerSize.width, containerSize.height)
                .viewbox(0, 0, imageSize.width, imageSize.height)
                .css("background-color", style.backgroundColor)

            const getAlignedLogo = () => {
                switch (logoAlign) {
                    case "align-top":
                        return alignLogoTop(
                            {
                                logoDim,
                                logoSVG,
                                title,
                                slogan,
                                style,
                            },
                            draw
                        )
                    case "align-left":
                        return alignLogoLeft(
                            {
                                logoDim,
                                logoSVG,
                                title,
                                slogan,
                                style,
                            },
                            draw
                        )
                    case "align-right":
                        return alignLogoRight(
                            {
                                logoDim,
                                logoSVG,
                                title,
                                slogan,
                                style,
                            },
                            draw
                        )
                    default:
                        console.log(
                            "Invalid Type. The logo will be aligned top as fallback option!"
                        )
                        return alignLogoTop(
                            {
                                logoDim,
                                logoSVG,
                                title,
                                slogan,
                                style,
                            },
                            draw
                        )
                }
            }

            moveToCenter(draw, imageSize, getAlignedLogo())
        }
    }, [props])

    return <div className="self-center" ref={divRef}></div>
}

export default CreateLogo
