import React from 'react'


const categories = [
    {
        title: "Lapptop",
        list: [
            {
                title: "Apple",
                href: "/apple",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
            },

        ]
    }
]

const Hero = () => {

    const [category, setCategory] = React.useState(categories[0])

    return (
        <div id="app">
            <section className="hm-hero">
                <div className="hm-hero__background-wrap">
                    <div className="hm-hero__background hm-hero__background--fallback"></div>
                    <div className="hm-hero__background">
                        {category.list.map((item, index) => {
                            return (
                                <a key={index}
                                    href="/tr/website/haberturk.com/"
                                    className={`hm-website-link hm-website-link--${index}`}	
                                >
                                    <img
                                        className="hm-website-link__icon"
                                        src={item.img}
                                        alt=""
                                    />
                                    <strong className="hm-website-link__name">haberturk.com</strong>
                                    <span className="hm-website-link__visits">
                                        <span className="hm-website-link__value">86.2M</span>
                                        <span className="hm-website-link__label">Ziyaret</span>
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="hm-hero__container">
                    <div className="hm-hero__content">
                        <h1 className="hm-hero__title">
                            Rekabet ortamınızı zahmetsizce analiz edin
                        </h1>
                        <div className="hm-hero__search">
                            <div id="search-container-hero">
                                <div className="app-search app-search--large" data-test="search">
                                    <div className="app-search__body">
                                        <form
                                            className="app-search__form"
                                            action="https://www.similarweb.com/website/"
                                        >
                                            <input
                                                className="app-search__input"
                                                placeholder="İstediğiniz web sitesini veya uygulamayı analiz edin"
                                                autoComplete="off"
                                                data-test="input"
                                                
                                            />
                                            <button
                                                className="swui-button swui-button--solid swui-button--primary"
                                                type="submit"
                                                data-test="submit"
                                            >
                                                Arama
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="hm-hero__cta">
                            Daha ayrıntılı bir analiz yapmak ister misiniz?
                            <a
                                className="swui-button swui-button--solid swui-button--primary"
                                data-test="button"
                                href="/"
                            >
                                Ücretsiz denemenizi başlatın
                            </a>
                        </p>
                    </div>
                </div>
                <div className="hm-hero__footer">
                    <div className="hm-hero__container">
                        <div className="hm-hero__filters">
                            <div className="hm-filters">
                                <div
                                    className="swui-select hm-filters__select hm-filters__select--category"
                                    data-name="category"
                                    data-test="select"
                                    role="listbox"
                                    tabIndex="-1"
                                >
                                    <button
                                        className="swui-select__button"
                                        type="button"
                                        data-test="select-button"
                                    >
                                        <span className="swui-select__text">
                                            Haberler ve Medya Yayıncıları
                                        </span>
                                    </button>
                                </div>
                                <div
                                    className="swui-select swui-country-select hm-filters__select"
                                    data-name="country"
                                    data-test="select"
                                    role="listbox"
                                    tabIndex="-1"
                                >
                                    <button
                                        className="swui-select__button tr"
                                        type="button"
                                        data-test="select-button"
                                    >
                                        <span className="swui-select__text">Türkiye</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
